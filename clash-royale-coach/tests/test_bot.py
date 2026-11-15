import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

try:
    import cv2
    import numpy as np
except ImportError:  # pragma: no cover
    cv2 = None

if cv2 is not None:
    from crbot.arena import BRIDGE, CENTER_DEF, ENEMY_PRINCESS, LEFT, RIGHT, Unit, tile_to_px
    from crbot.bot import Bot
    from crbot.cards import CardInfo, card_from_api, kind_from_id, load_deck, save_deck
    from crbot.cli import main as cli_main
    from crbot.config import Config
    from crbot.device import ADB
    from crbot.strategy import GameState, Strategy
    from crbot.vision import CardRecognizer, detect_units, read_elixir

W, H = 540, 960

HOG = CardInfo("Hog Rider", 4, "troop", 26000021)
GOLEM = CardInfo("Golem", 8, "troop", 26000009)
LOG = CardInfo("The Log", 2, "spell", 28000011)
FIREBALL = CardInfo("Fireball", 4, "spell", 28000000)
CANNON = CardInfo("Cannon", 3, "building", 27000000)
MUSK = CardInfo("Musketeer", 4, "troop", 26000014)
SKELLIES = CardInfo("Skeletons", 1, "troop", 26000010)
ICE_SPIRIT = CardInfo("Ice Spirit", 1, "troop", 26000030)
VALK = CardInfo("Valkyrie", 4, "troop", 26000011)
MINER = CardInfo("Miner", 3, "troop", 26000032)
DECK = [HOG, LOG, FIREBALL, CANNON, MUSK, SKELLIES, ICE_SPIRIT, VALK]


def card_art(seed):
    rng = np.random.default_rng(seed)
    img = np.full((120, 100, 3), 30, np.uint8)
    for _ in range(12):
        color = tuple(int(c) for c in rng.integers(0, 255, 3))
        x, y = int(rng.integers(0, 90)), int(rng.integers(0, 110))
        cv2.rectangle(img, (x, y), (x + int(rng.integers(10, 50)), y + int(rng.integers(10, 50))), color, -1)
    return img


ART = {c.name: card_art(i) for i, c in enumerate(DECK)} if cv2 is not None else {}


def frame(cfg, elixir=5, hand=("Hog Rider", "The Log", "Cannon", "Musketeer"), enemies=(), allies=()):
    img = np.full((H, W, 3), (40, 90, 40), np.uint8)
    x0, y0, x1, y1 = cfg.elixir_bar.px(W, H)
    cv2.rectangle(img, (x0, y0), (x1, y1), (20, 20, 20), -1)
    seg = (x1 - x0) / 10
    for i in range(elixir):
        cv2.rectangle(img, (int(x0 + i * seg) + 1, y0), (int(x0 + (i + 1) * seg) - 1, y1), (200, 40, 200), -1)
    for rect, name in zip(cfg.hand_slots, hand):
        if name:
            rx0, ry0, rx1, ry1 = rect.px(W, H)
            img[ry0:ry1, rx0:rx1] = cv2.resize(ART[name], (rx1 - rx0, ry1 - ry0))
    for (x, y), color in [(p, (0, 0, 230)) for p in enemies] + [(p, (230, 80, 0)) for p in allies]:
        px, py = tile_to_px(x, y - 0.6, cfg, W, H)
        cv2.rectangle(img, (px - 6, py - 3), (px + 6, py + 3), color, -1)
    return img


def recognizer():
    return CardRecognizer({n: [a] for n, a in ART.items()}, threshold=0.45)


@unittest.skipIf(cv2 is None, "opencv/numpy not installed")
class VisionTest(unittest.TestCase):
    def setUp(self):
        self.cfg = Config()

    def test_elixir(self):
        for n in (0, 3, 7, 10):
            self.assertEqual(read_elixir(frame(self.cfg, elixir=n), self.cfg), n)

    def test_units_positions_and_tower_exclusion(self):
        img = frame(self.cfg, enemies=[(4.0, 19.0), (14.0, 12.0)], allies=[(9.0, 20.0)])
        # an enemy tower health bar must be ignored
        px, py = tile_to_px(3.5, 5.0, self.cfg, W, H)
        cv2.rectangle(img, (px - 20, py - 3), (px + 20, py + 3), (0, 0, 230), -1)
        units = detect_units(img, self.cfg)
        enemies = sorted((u.x, u.y) for u in units if u.team == "enemy")
        allies = [(u.x, u.y) for u in units if u.team == "ally"]
        self.assertEqual(len(enemies), 2)
        for (x, y), (ex, ey) in zip(enemies, [(4.0, 19.0), (14.0, 12.0)]):
            self.assertAlmostEqual(x, ex, delta=0.7)
            self.assertAlmostEqual(y, ey, delta=0.7)
        self.assertEqual(len(allies), 1)

    def test_hand_recognition_including_greyed_cards(self):
        img = frame(self.cfg, hand=("Valkyrie", "Fireball", "Skeletons", "Ice Spirit"))
        r = recognizer()
        self.assertEqual([n for n, _ in r.recognize_hand(img, self.cfg)],
                         ["Valkyrie", "Fireball", "Skeletons", "Ice Spirit"])
        grey = (frame(self.cfg, hand=("Musketeer", "Cannon", "Hog Rider", "The Log")) * 0.55).astype(np.uint8)
        self.assertEqual([n for n, _ in r.recognize_hand(grey, self.cfg)],
                         ["Musketeer", "Cannon", "Hog Rider", "The Log"])

    def test_menu_screen_has_no_hand(self):
        menu = np.full((H, W, 3), (120, 60, 20), np.uint8)
        self.assertEqual([n for n, _ in recognizer().recognize_hand(menu, self.cfg)], [None] * 4)

    def test_templates_from_dir(self):
        with tempfile.TemporaryDirectory() as d:
            for name in ("Hog Rider", "Cannon"):
                (Path(d) / name).mkdir()
                cv2.imwrite(str(Path(d) / name / "icon.png"), ART[name])
            r = CardRecognizer.from_dir(Path(d), ["Hog Rider", "Cannon"])
            self.assertEqual(set(r.templates), {"Hog Rider", "Cannon"})
            with self.assertRaises(FileNotFoundError):
                CardRecognizer.from_dir(Path(d), ["Golem"])


@unittest.skipIf(cv2 is None, "opencv/numpy not installed")
class StrategyTest(unittest.TestCase):
    def state(self, **kw):
        base = dict(t=30.0, elixir=5, hand=[HOG, LOG, CANNON, MUSK])
        base.update(kw)
        return GameState(**base)

    def test_spell_on_cluster(self):
        enemies = [Unit("enemy", 4 + dx, 19 + dy) for dx, dy in ((0, 0), (0.5, 0.5), (1, 0), (0.3, 1))]
        a = Strategy().decide(self.state(enemies=enemies))
        self.assertEqual(a.card, LOG)
        self.assertAlmostEqual(a.x, 4.45, delta=0.5)

    def test_building_pulls_single_threat(self):
        a = Strategy().decide(self.state(enemies=[Unit("enemy", 14.5, 18.0)]))
        self.assertEqual(a.card, CANNON)
        self.assertEqual((a.x, a.y), CENTER_DEF[RIGHT])

    def test_defends_with_troop_between_threat_and_tower(self):
        a = Strategy().decide(self.state(hand=[HOG, LOG, VALK, GOLEM], enemies=[Unit("enemy", 3.5, 21.0)]))
        self.assertEqual(a.card, VALK)
        self.assertGreater(a.y, 21.0)

    def test_never_defends_with_pure_win_condition(self):
        a = Strategy().decide(self.state(hand=[HOG, GOLEM, None, None], elixir=10, enemies=[Unit("enemy", 3.5, 21.0)]))
        self.assertIsNone(a)

    def test_does_not_overcommit(self):
        s = self.state(enemies=[Unit("enemy", 3.5, 20.0)], allies=[Unit("ally", 4.0, 21.0)])
        self.assertIsNone(Strategy().decide(s))

    def test_attack_needs_reserve_and_punishes_opposite_lane(self):
        st = Strategy()
        self.assertIsNone(st.decide(self.state(elixir=6)))  # 4 + 3 reserve not met
        st.last_enemy_lane, st.last_enemy_t = LEFT, 25.0
        a = st.decide(self.state(elixir=7))
        self.assertEqual(a.card, HOG)
        self.assertEqual((a.x, a.y), BRIDGE[RIGHT])

    def test_heavy_tank_from_the_back_and_miner_on_tower(self):
        a = Strategy().decide(self.state(elixir=9, hand=[GOLEM, LOG, SKELLIES, MUSK]))
        self.assertEqual(a.card, GOLEM)
        self.assertGreater(a.y, 29)
        a = Strategy().decide(self.state(elixir=7, hand=[MINER, LOG, SKELLIES, MUSK]))
        self.assertEqual(a.card, MINER)
        self.assertEqual((a.x, a.y), ENEMY_PRINCESS[LEFT])

    def test_counter_push(self):
        a = Strategy().decide(self.state(elixir=5, allies=[Unit("ally", 14.0, 22.0)]))
        self.assertEqual(a.card, HOG)
        self.assertEqual((a.x, a.y), BRIDGE[RIGHT])

    def test_avoid_leak_with_cheapest_card(self):
        a = Strategy().decide(self.state(elixir=10, hand=[LOG, SKELLIES, MUSK, CANNON]))
        self.assertEqual(a.card, SKELLIES)

    def test_late_game_spell_chip(self):
        a = Strategy().decide(self.state(t=160, elixir=8, hand=[FIREBALL, SKELLIES, MUSK, CANNON]))
        self.assertEqual(a.card, FIREBALL)
        self.assertLess(a.y, 10)

    def test_cooldown(self):
        st = Strategy(cooldown=1.0)
        self.assertIsNotNone(st.decide(self.state(elixir=10)))
        self.assertIsNone(st.decide(self.state(t=30.5, elixir=10)))

    def test_meta_counter_scores_change_choice(self):
        hand = [HOG, MUSK, VALK, SKELLIES]
        threat = [Unit("enemy", 3.5, 21.0, card="Mini P.E.K.K.A")]
        default = Strategy().decide(self.state(hand=hand, enemies=threat))
        informed = Strategy(counter_scores={"Mini P.E.K.K.A": {"Musketeer": 0.4}}).decide(
            self.state(hand=hand, enemies=threat))
        self.assertNotEqual(default.card, MUSK)
        self.assertEqual(informed.card, MUSK)


@unittest.skipIf(cv2 is None, "opencv/numpy not installed")
class CardsTest(unittest.TestCase):
    def test_kind_and_roles(self):
        self.assertEqual(kind_from_id(27000000, "Cannon"), "building")
        self.assertEqual(kind_from_id(28000000, "Fireball"), "spell")
        self.assertEqual(kind_from_id(0, "Tesla"), "building")
        self.assertTrue(GOLEM.heavy)
        self.assertIn("wincon", HOG.roles)
        mirror = card_from_api({"name": "Mirror", "id": 28000006})
        self.assertEqual(mirror.elixir, 99)

    def test_deck_roundtrip(self):
        with tempfile.TemporaryDirectory() as d:
            save_deck(DECK, Path(d) / "deck.json")
            self.assertEqual(load_deck(Path(d) / "deck.json"), DECK)


class FakeDevice:
    def __init__(self, frames):
        self.frames, self.calls = list(frames), []

    def screencap(self):
        return self.frames.pop(0) if self.frames else self.last

    def tap(self, x, y):
        self.calls.append(("tap", x, y))

    def drag(self, *a):
        self.calls.append(("drag",) + a)


@unittest.skipIf(cv2 is None, "opencv/numpy not installed")
class BotTest(unittest.TestCase):
    def test_full_battle_loop(self):
        cfg = Config(play_cooldown=0)
        battle = [frame(cfg, elixir=10, hand=("Skeletons", "The Log", "Musketeer", "Cannon"))]
        battle += [frame(cfg, elixir=3, enemies=[(14.5, 18.0)])]
        menu = np.full((H, W, 3), (120, 60, 20), np.uint8)
        dev = FakeDevice(battle + [menu] * 40)
        dev.last = menu
        clock = iter(i * 0.5 for i in range(1000))
        logs = []
        bot = Bot(dev, cfg, DECK, recognizer(), clock=lambda: next(clock), sleep=lambda s: None, log=logs.append)
        bot.run(battles=1)
        self.assertEqual(bot.battles_done, 1)
        drags = [c for c in dev.calls if c[0] == "drag"]
        self.assertEqual(len(drags), 2)  # leak play + Cannon defence
        sx, sy = cfg.hand_slots[0].center_px(W, H)
        self.assertEqual(drags[0][1:3], (sx, sy))  # Skeletons were in slot 0
        self.assertTrue(any("Cannon" in line for line in logs))

    def test_dry_run_and_record(self):
        cfg = Config()
        with tempfile.TemporaryDirectory() as d:
            dev = FakeDevice([])
            dev.last = frame(cfg, elixir=10)
            bot = Bot(dev, cfg, DECK, recognizer(), dry_run=True, record_dir=Path(d),
                      clock=lambda: 0.0, log=lambda m: None)
            action = bot.step(dev.screencap())
            self.assertIsNotNone(action)
            self.assertEqual(dev.calls, [])
            self.assertTrue((Path(d) / "frame_000001.png").exists())
            self.assertTrue((Path(d) / "frame_000001.json").exists())

    def test_tap_mode(self):
        cfg = Config(play_method="tap")
        dev = FakeDevice([])
        bot = Bot(dev, cfg, DECK, recognizer(), log=lambda m: None)
        from crbot.strategy import Action
        bot.act(Action(2, CANNON, 9.5, 22.5, "x"), (H, W, 3))
        self.assertEqual([c[0] for c in dev.calls], ["tap", "tap"])
        self.assertEqual(dev.calls[1][1:], tile_to_px(9.5, 22.5, cfg, W, H))


@unittest.skipIf(cv2 is None, "opencv/numpy not installed")
class DeviceAndCliTest(unittest.TestCase):
    def test_adb_commands(self):
        calls = []
        png = cv2.imencode(".png", np.zeros((10, 10, 3), np.uint8))[1].tobytes()

        def runner(cmd, capture_output, timeout):
            calls.append(cmd)
            out = png if "screencap" in cmd else b"List of devices attached\nemulator-5554\tdevice\n"
            return subprocess.CompletedProcess(cmd, 0, out, b"")

        adb = ADB(serial="emulator-5554", adb="adb", runner=runner)
        self.assertEqual(adb.devices(), ["emulator-5554"])
        self.assertEqual(adb.screencap().shape, (10, 10, 3))
        adb.drag(1, 2, 3, 4, 200)
        self.assertEqual(calls[-1], ["adb", "-s", "emulator-5554", "shell", "input", "swipe", "1", "2", "3", "4", "200"])

    def test_calibrate_and_replay_on_saved_images(self):
        cfg = Config()
        with tempfile.TemporaryDirectory() as d:
            d = Path(d)
            bot_dir = d / "bot"
            save_deck(DECK, bot_dir / "deck.json")
            for name, art in ART.items():
                (bot_dir / "templates" / name).mkdir(parents=True)
                cv2.imwrite(str(bot_dir / "templates" / name / "icon.png"), art)
            frames = d / "frames"
            frames.mkdir()
            cv2.imwrite(str(frames / "a.png"), frame(cfg, elixir=10))
            cv2.imwrite(str(frames / "b.png"), frame(cfg, elixir=4, enemies=[(14.5, 18.0)]))
            self.assertEqual(cli_main(["--dir", str(bot_dir), "calibrate", "--image", str(frames / "a.png"),
                                       "--out", str(d / "cal.png"), "--save-crops"]), 0)
            self.assertTrue((d / "cal.png").exists())
            self.assertEqual(len(list((bot_dir / "templates" / "_retalls").glob("*.png"))), 4)
            self.assertEqual(cli_main(["--dir", str(bot_dir), "replay", str(frames), "--out", str(d / "out")]), 0)
            self.assertEqual(len(list((d / "out").glob("*.png"))), 2)


if __name__ == "__main__":
    unittest.main()
