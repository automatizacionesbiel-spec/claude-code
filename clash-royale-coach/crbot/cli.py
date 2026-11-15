"""python -m crbot <command>"""

from __future__ import annotations

import argparse
import os
import sys
import urllib.request
from pathlib import Path

import cv2

from .arena import BACK, BRIDGE, CENTER_DEF, COLS, ENEMY_PRINCESS, ROWS, tile_to_px
from .bot import Bot
from .cards import card_from_api, load_deck, save_deck
from .config import Config
from .device import ADB, DeviceError
from .strategy import GameState, Strategy
from .vision import CardRecognizer, detect_units, read_elixir

BOT_DIR = Path(os.environ.get("CRBOT_DIR", "bot"))

NOTICE = ("Ús acordat: només batalles amistoses contra un compte teu o el Camp d'entrenament. "
          "El bot no prem mai el botó de Batalla: la partida la inicies tu.")


def _paths(args):
    d = args.dir
    return d / "config.json", d / "deck.json", d / "templates"


def _device(cfg: Config) -> ADB:
    return ADB(serial=cfg.adb_serial)


# ------------------------------------------------------------------ setup
def cmd_setup(args) -> None:
    from crcoach.api import ClashRoyaleAPI

    cfg_path, deck_path, tpl_dir = _paths(args)
    api = ClashRoyaleAPI(os.environ.get("CR_API_TOKEN", ""), base_url=args.base_url)
    player = api.player(args.tag)
    raw_deck = player.get("currentDeck") or []
    if len(raw_deck) != 8:
        raise SystemExit("El jugador no té un mazo actual de 8 cartes.")
    # currentDeck may lack elixir/ids on some cards: complete them from /cards.
    catalog = {c["name"]: c for c in api.cards()}
    deck = [card_from_api({**catalog.get(c["name"], {}), **c}) for c in raw_deck]
    save_deck(deck, deck_path)
    for raw in raw_deck:
        icons = {**catalog.get(raw["name"], {}).get("iconUrls", {}), **(raw.get("iconUrls") or {})}
        folder = tpl_dir / raw["name"]
        folder.mkdir(parents=True, exist_ok=True)
        for key, fname in (("medium", "icon.png"), ("evolutionMedium", "evo.png")):
            if icons.get(key):
                req = urllib.request.Request(icons[key], headers={"User-Agent": "crbot"})
                with urllib.request.urlopen(req, timeout=20) as r:
                    (folder / fname).write_bytes(r.read())
    if not cfg_path.exists():
        Config().save(cfg_path)
    print(f"Mazo desat a {deck_path}: " + ", ".join(f"{c.name} ({c.elixir})" for c in deck))
    print(f"Plantilles a {tpl_dir}. Ara: python -m crbot calibrate")


# -------------------------------------------------------------- devices
def cmd_devices(args) -> None:
    devs = ADB().devices()
    print("\n".join(devs) if devs else "Cap dispositiu. Prova: python -m crbot connect 127.0.0.1:5555")


def cmd_connect(args) -> None:
    print(ADB().connect(args.address))


# ------------------------------------------------------------ calibrate
def annotate(img, cfg: Config, recognizer: CardRecognizer | None, action=None):
    out = img.copy()
    h, w = out.shape[:2]
    for i in range(COLS + 1):
        x0, y0 = tile_to_px(i, 0, cfg, w, h)
        x1, y1 = tile_to_px(i, ROWS, cfg, w, h)
        cv2.line(out, (x0, y0), (x1, y1), (80, 80, 80), 1)
    for j in range(ROWS + 1):
        x0, y0 = tile_to_px(0, j, cfg, w, h)
        x1, y1 = tile_to_px(COLS, j, cfg, w, h)
        cv2.line(out, (x0, y0), (x1, y1), (0, 200, 255) if j in (15, 17) else (80, 80, 80), 1)
    for pts, color in ((BRIDGE, (0, 255, 255)), (BACK, (255, 255, 0)), (CENTER_DEF, (0, 255, 0)),
                       (ENEMY_PRINCESS, (0, 0, 255))):
        for x, y in pts.values():
            cv2.circle(out, tile_to_px(x, y, cfg, w, h), 10, color, 2)
    x0, y0, x1, y1 = cfg.elixir_bar.px(w, h)
    cv2.rectangle(out, (x0, y0), (x1, y1), (255, 0, 255), 2)
    elixir = read_elixir(img, cfg)
    cv2.putText(out, f"elixir {elixir}", (8, y1), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 255), 2)
    hand = recognizer.recognize_hand(img, cfg) if recognizer else [(None, 0.0)] * len(cfg.hand_slots)
    for rect, (name, score) in zip(cfg.hand_slots, hand):
        x0, y0, x1, y1 = rect.px(w, h)
        cv2.rectangle(out, (x0, y0), (x1, y1), (0, 255, 0), 2)
        cv2.putText(out, f"{name or '?'} {score:.2f}", (x0 + 2, y0 + 18), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 255, 0), 1)
    for u in detect_units(img, cfg):
        cv2.circle(out, tile_to_px(u.x, u.y, cfg, w, h), 14, (0, 0, 255) if u.team == "enemy" else (255, 0, 0), 3)
    if action:
        cv2.drawMarker(out, tile_to_px(action.x, action.y, cfg, w, h), (255, 255, 255), cv2.MARKER_CROSS, 40, 3)
        cv2.putText(out, f"{action.card.name}: {action.reason}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    return out, elixir, hand


def _recognizer(cfg, deck_path, tpl_dir, required=True):
    try:
        deck = load_deck(deck_path)
        return CardRecognizer.from_dir(tpl_dir, [c.name for c in deck], cfg.card_match_threshold), deck
    except FileNotFoundError:
        if required:
            raise
        return None, []


def cmd_calibrate(args) -> None:
    cfg_path, deck_path, tpl_dir = _paths(args)
    cfg = Config.load(cfg_path)
    if not cfg_path.exists():
        cfg.save(cfg_path)
    img = cv2.imread(str(args.image)) if args.image else _device(cfg).screencap()
    if img is None:
        raise SystemExit(f"No puc llegir {args.image}")
    recognizer, _ = _recognizer(cfg, deck_path, tpl_dir, required=False)
    out, elixir, hand = annotate(img, cfg, recognizer)
    cv2.imwrite(str(args.out), out)
    print(f"Imatge de calibratge: {args.out}")
    print(f"Elixir llegit: {elixir} · Mà: {[n for n, _ in hand]}")
    print(f"Si les caixes no quadren, edita {cfg_path} (valors = fracció de la pantalla) i repeteix.")
    if args.save_crops:
        crops_dir = tpl_dir / "_retalls"
        crops_dir.mkdir(parents=True, exist_ok=True)
        n = len(list(crops_dir.glob("*.png")))
        for i, rect in enumerate(cfg.hand_slots):
            cv2.imwrite(str(crops_dir / f"retall_{n + i:04d}.png"), rect.crop(img))
        print(f"Retalls de la mà desats a {crops_dir}: mou cada un a la carpeta de la seva carta "
              "per millorar la precisió.")


# ------------------------------------------------------------------ run
def _counter_scores(meta_path: Path) -> dict:
    from crcoach.meta import counters, dataset_battles, known_cards, load_dataset, observations

    obs = observations(dataset_battles(load_dataset(meta_path)))
    scores = {}
    for card in known_cards(obs):
        rep = counters(obs, [card], min_games=10, top=60)
        if rep.cards:
            scores[card] = {c.name: c.lift for c in rep.cards}
    return scores


def cmd_run(args) -> None:
    cfg_path, deck_path, tpl_dir = _paths(args)
    cfg = Config.load(cfg_path)
    recognizer, deck = _recognizer(cfg, deck_path, tpl_dir)
    counter_scores = _counter_scores(args.meta) if args.meta else None
    detector = detect_units
    if args.model:
        from .yolo import YoloDetector
        detector = YoloDetector(str(args.model))
    print(NOTICE)
    bot = Bot(_device(cfg), cfg, deck, recognizer,
              strategy=Strategy(cfg.play_cooldown, counter_scores), detector=detector,
              dry_run=args.dry_run, record_dir=args.record)
    try:
        bot.run(battles=args.battles)
    except KeyboardInterrupt:
        print("\nAturat.")


def cmd_replay(args) -> None:
    cfg_path, deck_path, tpl_dir = _paths(args)
    cfg = Config.load(cfg_path)
    recognizer, deck = _recognizer(cfg, deck_path, tpl_dir)
    deck_map = {c.name: c for c in deck}
    strategy = Strategy(cooldown=cfg.play_cooldown)
    frames = sorted(args.frames.glob("*.png"))
    args.out.mkdir(parents=True, exist_ok=True)
    for k, f in enumerate(frames):
        img = cv2.imread(str(f))
        if img is None:
            continue
        t = k / max(cfg.fps, 0.5)
        hand = [deck_map.get(n) if n else None for n, _ in recognizer.recognize_hand(img, cfg)]
        units = detect_units(img, cfg)
        state = GameState(t, read_elixir(img, cfg), hand,
                          [u for u in units if u.team == "enemy"], [u for u in units if u.team == "ally"])
        action = strategy.decide(state)
        out, _, _ = annotate(img, cfg, recognizer, action)
        cv2.imwrite(str(args.out / f.name), out)
        if action:
            print(f"{f.name}: {action.card.name} → ({action.x}, {action.y}) · {action.reason}")
    print(f"Imatges anotades a {args.out}")


# -------------------------------------------------------------- parser
def build_parser() -> argparse.ArgumentParser:
    from crcoach.api import ROYALEAPI_PROXY

    p = argparse.ArgumentParser(prog="crbot", description="Bot de Clash Royale per a batalles amistoses (emulador Android + ADB).")
    p.add_argument("--dir", type=Path, default=BOT_DIR, help="carpeta amb config.json, deck.json i templates/")
    sub = p.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("setup", help="descarrega el teu mazo i les imatges de les cartes (API)")
    s.add_argument("tag")
    s.add_argument("--base-url", default=os.environ.get("CR_API_BASE", ROYALEAPI_PROXY))
    s.set_defaults(func=cmd_setup)

    sub.add_parser("devices", help="llista emuladors/dispositius ADB").set_defaults(func=cmd_devices)
    c = sub.add_parser("connect", help="connecta a l'emulador, p. ex. 127.0.0.1:5555")
    c.add_argument("address")
    c.set_defaults(func=cmd_connect)

    k = sub.add_parser("calibrate", help="captura i dibuixa el que veu el bot")
    k.add_argument("--image", type=Path, help="fes servir una captura desada en lloc de l'emulador")
    k.add_argument("--out", type=Path, default=Path("calibratge.png"))
    k.add_argument("--save-crops", action="store_true", help="desa retalls de la mà per afegir plantilles")
    k.set_defaults(func=cmd_calibrate)

    r = sub.add_parser("run", help="juga les batalles que iniciïs tu")
    r.add_argument("--battles", type=int, default=1)
    r.add_argument("--dry-run", action="store_true", help="només mostra què faria, no toca la pantalla")
    r.add_argument("--record", type=Path, help="desa captures + estat (per entrenar un detector)")
    r.add_argument("--model", type=Path, help="model YOLO entrenat (opcional, més precís)")
    r.add_argument("--meta", type=Path, help="dades del coach (data/meta.json) per triar counters com els top")
    r.set_defaults(func=cmd_run)

    y = sub.add_parser("replay", help="prova l'estratègia sobre captures desades")
    y.add_argument("frames", type=Path)
    y.add_argument("--out", type=Path, default=Path("replay"))
    y.set_defaults(func=cmd_replay)
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        args.func(args)
    except (DeviceError, FileNotFoundError, ValueError) as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1
    except Exception as e:  # API errors etc.
        from crcoach.api import ApiError
        if isinstance(e, ApiError):
            print(f"Error: {e}", file=sys.stderr)
            return 1
        raise
    return 0
