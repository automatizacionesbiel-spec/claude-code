"""Command line: python -m crcoach <command>."""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

from . import __version__
from .analyze import analyze, coaching_tips
from .api import GLOBAL_LOCATION, ROYALEAPI_PROXY, ApiError, ClashRoyaleAPI
from .meta import (
    card_stats, collect, counters, dataset_battles, deck_stats, known_cards,
    load_dataset, observations, resolve_cards, save_dataset,
)
from .recommend import recommend

DEFAULT_DATA = Path(os.environ.get("CRCOACH_DATA", "data/meta.json"))


def _api(args) -> ClashRoyaleAPI:
    return ClashRoyaleAPI(token=os.environ.get("CR_API_TOKEN", ""), base_url=args.base_url)


def _deck(deck, evos=None) -> str:
    evos = evos or {}
    return " · ".join(f"{n}{' (evo)' if evos.get(n) else ''}" for n in deck)


def _pct(x: float) -> str:
    return f"{x:5.1%}"


def _load_obs(args):
    ds = load_dataset(args.data)
    obs = observations(dataset_battles(ds, competitive_only=not args.all_types))
    if not obs:
        raise SystemExit("El conjunt de dades no té batalles vàlides. Torna a fer `meta collect`.")
    return ds, obs


# ------------------------------------------------------------------ commands
def cmd_meta_collect(args) -> None:
    api = _api(args)

    def progress(i, n, name):
        print(f"\r[{i}/{n}] {name[:24]:<24}", end="", file=sys.stderr, flush=True)

    ds = collect(api, players=args.players, location=args.location, progress=progress)
    print(file=sys.stderr)
    save_dataset(ds, args.data)
    print(f"Desades {len(ds['battles'])} batalles de {len(ds['players'])} top jugadors a {args.data}")
    if ds["failed_players"]:
        print(f"({ds['failed_players']} jugadors no s'han pogut llegir)")


def cmd_meta_show(args) -> None:
    ds, obs = _load_obs(args)
    print(f"Meta dels top jugadors · {len(obs)} mazos observats · dades de {ds.get('collected_at', '?')}\n")
    print("MILLORS MAZOS (ordenats per taxa de victòria fiable, interval de Wilson)")
    for i, d in enumerate(deck_stats(obs, min_games=args.min_games)[: args.top], 1):
        r = d.record
        print(f"{i:2}. {_pct(r.winrate)} en {r.games:3} partides ({r}) · {d.avg_elixir} elixir · "
              f"{len(d.players)} jugadors")
        print(f"    {_deck(d.deck, d.evolutions)}")
    print("\nCARTES MÉS USADES")
    for c in card_stats(obs)[: args.top]:
        print(f"  {c.name:<22} ús {_pct(c.usage)} · victòries {_pct(c.record.winrate)}")


def cmd_analyze(args) -> None:
    api = _api(args)
    player, log = api.player(args.tag), api.battlelog(args.tag)
    rep = analyze(player, log)
    print(f"{rep.name} ({rep.tag}) · {rep.trophies} trofeus (rècord {rep.best_trophies})")
    print(f"Últimes {rep.battles} batalles: {rep.record} → {_pct(rep.record.winrate)}\n")
    if rep.by_type:
        print("PER MODALITAT")
        for t, r in sorted(rep.by_type.items(), key=lambda x: -x[1].games):
            print(f"  {t:<20} {r} ({_pct(r.winrate)})")
    print("\nMAZOS JUGATS")
    for d in rep.decks[:5]:
        print(f"  {_pct(d.record.winrate)} {str(d.record):<10} {d.avg_elixir} elixir · {_deck(d.deck)}")
    if rep.nemesis:
        print("\nCARTES NÈMESI (rivals amb aquestes cartes et guanyen)")
        for n in rep.nemesis:
            print(f"  {n.card:<22} perds el {_pct(n.record.lossrate)} ({n.record})")
    print("\nNIVELL DE CARTES vs RIVAL")
    for k, r in rep.level_split.items():
        if r.games:
            print(f"  {k:<9} {r} ({_pct(r.winrate)})")
    if rep.current_deck_notes:
        print("\nMAZO ACTUAL")
        for n in rep.current_deck_notes:
            print(f"  {n}")
    print("\nCONSELLS DEL COACH")
    for t in coaching_tips(rep):
        print(f"  • {t}")


def cmd_recommend(args) -> None:
    _, obs = _load_obs(args)
    player = _api(args).player(args.tag)
    stats = deck_stats(obs, min_games=args.min_games)
    recs = recommend(player, stats, top=args.top)
    print(f"Mazos dels top jugadors que pots jugar ara mateix, {player.get('name', '')}:\n")
    if not recs:
        print("  Cap mazo del meta encaixa amb la teva col·lecció. Mira els de més avall (falta 1 carta).")
    for i, r in enumerate(recs, 1):
        s = r.stat.record
        print(f"{i}. puntuació {r.score:.2f} · {_pct(s.winrate)} en {s.games} partides top · "
              f"et falten {r.avg_gap} nivells de mitjana")
        print(f"   {_deck(r.stat.deck, r.stat.evolutions)}")
        if r.upgrade_first:
            print("   Puja primer: " + ", ".join(f"{n} (-{g})" for n, g in r.upgrade_first))
        if r.evolutions_missing:
            print("   Els top hi fan servir l'evolució de: " + ", ".join(r.evolutions_missing))
    almost = [r for r in recommend(player, stats, top=50, allow_missing=1) if r.missing][:3]
    if almost:
        print("\nA UNA CARTA DE DISTÀNCIA")
        for r in almost:
            print(f"  {_pct(r.stat.record.winrate)} · et falta {', '.join(r.missing)} · {_deck(r.stat.deck)}")


def cmd_counter(args) -> None:
    _, obs = _load_obs(args)
    wanted = [c for part in args.cards for c in part.split(",")]
    targets, unknown = resolve_cards(wanted, known_cards(obs))
    if unknown:
        print("No reconec: " + ", ".join(unknown))
    if not targets:
        raise SystemExit("Cap carta reconeguda.")
    rep = counters(obs, targets, min_match=args.min_match, min_games=args.min_games)
    print(f"Contra: {', '.join(rep.targets)} · {rep.battles} partides de top jugadors\n")
    if not rep.cards:
        print("Poques dades. Prova amb menys cartes, --min-match 1, o recull més partides.")
        return
    print("CARTES QUE MÉS GUANYEN CONTRA AQUEST MAZO")
    for c in rep.cards:
        sign = "+" if c.lift >= 0 else ""
        print(f"  {c.name:<22} {_pct(c.record.winrate)} ({c.record}) · {sign}{c.lift:.0%} vs la seva mitjana")
    if rep.decks:
        print("\nMAZOS QUE MILLOR HI JUGUEN")
        for d in rep.decks:
            print(f"  {_pct(d.record.winrate)} ({d.record}) · {_deck(d.deck, d.evolutions)}")


# ----------------------------------------------------------------- argparse
def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(prog="crcoach", description="Coach de Clash Royale basat en els millors jugadors.")
    p.add_argument("--version", action="version", version=__version__)
    p.add_argument("--base-url", default=os.environ.get("CR_API_BASE", ROYALEAPI_PROXY),
                   help="URL de l'API (per defecte, el proxy de RoyaleAPI)")
    p.add_argument("--data", type=Path, default=DEFAULT_DATA, help="fitxer de dades del meta")
    sub = p.add_subparsers(dest="cmd", required=True)

    meta = sub.add_parser("meta", help="meta dels top jugadors").add_subparsers(dest="meta_cmd", required=True)
    c = meta.add_parser("collect", help="descarrega les batalles dels top jugadors")
    c.add_argument("--players", type=int, default=100)
    c.add_argument("--location", default=GLOBAL_LOCATION, help="ID de localització (57000006 = global)")
    c.set_defaults(func=cmd_meta_collect)
    s = meta.add_parser("show", help="mostra els millors mazos i cartes")
    s.add_argument("--top", type=int, default=15)
    s.add_argument("--min-games", type=int, default=3)
    s.add_argument("--all-types", action="store_true", help="inclou guerres, desafiaments, etc.")
    s.set_defaults(func=cmd_meta_show)

    a = sub.add_parser("analyze", help="analitza un jugador")
    a.add_argument("tag")
    a.set_defaults(func=cmd_analyze)

    r = sub.add_parser("recommend", help="recomana mazos segons la teva col·lecció")
    r.add_argument("tag")
    r.add_argument("--top", type=int, default=5)
    r.add_argument("--min-games", type=int, default=3)
    r.add_argument("--all-types", action="store_true")
    r.set_defaults(func=cmd_recommend)

    k = sub.add_parser("counter", help="com guanyen els top contra unes cartes")
    k.add_argument("cards", nargs="+", help='p. ex. "Hog Rider, Fireball, The Log"')
    k.add_argument("--min-match", type=int, default=None, help="quantes d'aquestes cartes ha de tenir el rival")
    k.add_argument("--min-games", type=int, default=5)
    k.add_argument("--all-types", action="store_true")
    k.set_defaults(func=cmd_counter)
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        args.func(args)
    except (ApiError, ValueError, FileNotFoundError) as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1
    return 0
