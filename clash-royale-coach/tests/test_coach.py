import io
import json
import sys
import tempfile
import unittest
import urllib.error
from contextlib import redirect_stdout
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
sys.path.insert(0, str(Path(__file__).resolve().parent))

from crcoach import cli  # noqa: E402
from crcoach.analyze import analyze, coaching_tips  # noqa: E402
from crcoach.api import ApiError, ClashRoyaleAPI, normalize_tag  # noqa: E402
from crcoach.knowledge import deck_checks  # noqa: E402
from crcoach.meta import (  # noqa: E402
    card_stats, counters, deck_stats, observations, resolve_cards, save_dataset,
)
from crcoach.models import parse_battle, parse_battles, parse_card  # noqa: E402
from crcoach.recommend import recommend  # noqa: E402
from crcoach.stats import Record, wilson_lower  # noqa: E402
from fixtures import GOLEM, HOG, MINER, XBOW, battle, player  # noqa: E402


def meta_battles():
    """Hog beats Golem 8/10, X-Bow beats Hog 6/8, Golem beats Miner 4/5."""
    raws = []
    for i in range(10):
        raws.append(battle(f"#H{i}", HOG, f"#G{i}", GOLEM, won=i < 8, evos=("Musketeer",)))
    for i in range(8):
        raws.append(battle(f"#X{i}", XBOW, f"#H{i}", HOG, won=i < 6))
    for i in range(5):
        raws.append(battle(f"#G{i}", GOLEM, f"#M{i}", MINER, won=i < 4))
    return raws


class StatsTest(unittest.TestCase):
    def test_wilson_penalises_small_samples(self):
        self.assertLess(wilson_lower(1, 1), wilson_lower(80, 100))
        self.assertEqual(wilson_lower(0, 0), 0.0)
        self.assertTrue(0 < wilson_lower(50, 100) < 0.5)

    def test_record(self):
        r = Record()
        for x in ("win", "win", "loss", "draw"):
            r.add(x)
        self.assertEqual((r.games, r.winrate, str(r)), (4, 0.5, "2V-1D-1E"))


class ModelsTest(unittest.TestCase):
    def test_parse_battle_result_and_deck(self):
        b = parse_battle(battle("#A", HOG, "#B", GOLEM, won=True))
        self.assertEqual(b.result, "win")
        self.assertEqual(b.team.deck, tuple(sorted(HOG)))
        self.assertEqual(b.flipped().result, "loss")

    def test_filters_non_competitive(self):
        self.assertIsNone(parse_battle(battle("#A", HOG, "#B", GOLEM, True, btype="friendly")))
        self.assertIsNone(parse_battle(battle("#A", HOG, "#B", GOLEM, True, mode="Draft_Mode")))
        two_v_two = battle("#A", HOG, "#B", GOLEM, True)
        two_v_two["team"].append(two_v_two["team"][0])
        self.assertIsNone(parse_battle(two_v_two))
        short = battle("#A", HOG[:7], "#B", GOLEM, True)
        self.assertIsNone(parse_battle(short))

    def test_card_gap_is_rarity_independent(self):
        self.assertEqual(parse_card({"name": "X", "level": 9, "maxLevel": 11}).gap, 2)
        self.assertEqual(parse_card({"name": "Y", "level": 12, "maxLevel": 14}).gap, 2)
        self.assertIsNone(parse_card({"name": "Mirror", "level": 1, "maxLevel": 8}).elixir)

    def test_type_filter(self):
        raws = [battle("#A", HOG, "#B", GOLEM, True), battle("#A", HOG, "#B", GOLEM, True, btype="riverRacePvP")]
        self.assertEqual(len(parse_battles(raws, {"pathOfLegend"})), 1)


class MetaTest(unittest.TestCase):
    def setUp(self):
        self.obs = observations(parse_battles(meta_battles()))

    def test_observations_both_sides_and_dedup(self):
        raws = meta_battles()
        dup = json.loads(json.dumps(raws[0]))  # same battle seen from the opponent's log
        dup["team"], dup["opponent"] = dup["opponent"], dup["team"]
        obs = observations(parse_battles(raws + [dup]))
        self.assertEqual(len(obs), 2 * len(raws))

    def test_deck_stats_ranking(self):
        stats = deck_stats(self.obs, min_games=3)
        by_deck = {s.deck: s for s in stats}
        hog = by_deck[tuple(sorted(HOG))]
        self.assertEqual((hog.record.wins, hog.record.games), (10, 18))  # 8 vs golem + 2 vs xbow
        self.assertEqual(hog.evolutions["Musketeer"], 10)
        self.assertEqual(stats[0].deck, tuple(sorted(XBOW)))  # 6/8 has the best Wilson bound
        self.assertGreaterEqual(stats[0].record.wilson, stats[-1].record.wilson)

    def test_card_stats_usage(self):
        cs = {c.name: c for c in card_stats(self.obs)}
        # Fireball is in Hog (18 obs) and X-Bow (8 obs) of 46 total
        self.assertAlmostEqual(cs["Fireball"].usage, 26 / 46)

    def test_counters_find_xbow_vs_hog(self):
        rep = counters(self.obs, ["Hog Rider", "Musketeer"], min_games=5)
        self.assertEqual(rep.battles, 18)
        names = [c.name for c in rep.cards]
        self.assertIn("X-Bow", names)
        self.assertNotIn("Hog Rider", names)
        xbow = next(c for c in rep.cards if c.name == "X-Bow")
        self.assertEqual((xbow.record.wins, xbow.record.games), (6, 8))

    def test_resolve_cards(self):
        known = {"Hog Rider", "The Log", "Fireball", "Mini P.E.K.K.A", "P.E.K.K.A"}
        resolved, unknown = resolve_cards(["hog", "the log", "firebal", "pekka?!"], known)
        self.assertEqual(resolved, ["Hog Rider", "The Log", "Fireball"])
        self.assertEqual(unknown, ["pekka?!"])


class AnalyzeTest(unittest.TestCase):
    def test_report_and_tips(self):
        log = []
        for i in range(6):  # loses to Golem when under-levelled
            log.append(battle("#ME", HOG, f"#O{i}", GOLEM, won=False, level=12, opp_level=14))
        for i in range(6):
            log.append(battle("#ME", HOG, f"#P{i}", XBOW, won=i < 5))
        rep = analyze(player("#ME"), log)
        self.assertEqual((rep.record.wins, rep.record.losses), (5, 7))
        self.assertIn(rep.nemesis[0].card, GOLEM)
        self.assertEqual(rep.level_split["inferior"].games, 6)
        self.assertEqual(rep.level_split["igualat"].wins, 5)
        tips = " ".join(coaching_tips(rep))
        self.assertIn("per sota de nivell", tips)
        self.assertTrue(any(n.card in tips for n in rep.nemesis[:3]))
        self.assertIn("counter", tips)

    def test_deck_checks(self):
        from crcoach.models import parse_card as pc
        from fixtures import card
        notes = " ".join(deck_checks([pc(card(n)) for n in GOLEM]))
        self.assertIn("Golem", notes)
        self.assertNotIn("Sense encanteri petit", notes)
        bad = ["Knight", "Valkyrie", "Skeletons", "Ice Golem", "Lumberjack", "Ice Spirit", "Cannon", "Goblin Gang"]
        notes = " ".join(deck_checks([pc(card(n)) for n in bad]))
        self.assertIn("No té una condició de victòria", notes)
        self.assertIn("Sense encanteri gran", notes)


class RecommendTest(unittest.TestCase):
    def test_prefers_levelled_and_owned_decks(self):
        stats = deck_stats(observations(parse_battles(meta_battles())), min_games=3)
        low_xbow = {n: 8 for n in XBOW if n not in HOG}  # X-Bow-only cards 6 levels under
        p = player(level_map=low_xbow)
        recs = recommend(p, stats, top=3)
        self.assertEqual(recs[0].stat.deck, tuple(sorted(HOG)))
        self.assertIn("Musketeer", recs[0].evolutions_missing)
        xbow = next(r for r in recs if r.stat.deck == tuple(sorted(XBOW)))
        self.assertEqual(xbow.upgrade_first[0][1], 6)
        self.assertEqual(xbow.avg_gap, 3.0)

    def test_missing_cards_excluded(self):
        stats = deck_stats(observations(parse_battles(meta_battles())), min_games=3)
        p = player(collection=HOG)
        decks = [r.stat.deck for r in recommend(p, stats)]
        self.assertEqual(decks, [tuple(sorted(HOG))])


class FakeResponse(io.BytesIO):
    def __enter__(self):
        return self

    def __exit__(self, *a):
        return False


class ApiTest(unittest.TestCase):
    def test_normalize_tag(self):
        self.assertEqual(normalize_tag(" #2pp0o "), "#2PP00")
        with self.assertRaises(ValueError):
            normalize_tag("#bad tag")

    def test_requests_and_retry(self):
        calls, sleeps = [], []

        def urlopen(req, timeout):
            calls.append(req)
            if len(calls) == 1:
                raise urllib.error.HTTPError(req.full_url, 429, "Too Many", {}, io.BytesIO(b"{}"))
            return FakeResponse(json.dumps({"tag": "#2PP"}).encode())

        api = ClashRoyaleAPI("tok", base_url="https://x/v1", urlopen=urlopen, sleep=sleeps.append)
        self.assertEqual(api.player("2pp")["tag"], "#2PP")
        self.assertEqual(calls[-1].full_url, "https://x/v1/players/%232PP")
        self.assertEqual(calls[-1].get_header("Authorization"), "Bearer tok")
        self.assertEqual(len(sleeps), 1)

    def test_403_hint_and_top_players_fallback(self):
        def urlopen(req, timeout):
            if "pathoflegend" in req.full_url:
                raise urllib.error.HTTPError(req.full_url, 404, "nf", {}, io.BytesIO(b"{}"))
            if "rankings" in req.full_url:
                return FakeResponse(json.dumps({"items": [{"tag": "#A"}, {"tag": "#B"}]}).encode())
            body = json.dumps({"reason": "accessDenied.invalidIp", "message": "Invalid IP"}).encode()
            raise urllib.error.HTTPError(req.full_url, 403, "Forbidden", {}, io.BytesIO(body))

        api = ClashRoyaleAPI("tok", urlopen=urlopen, sleep=lambda s: None)
        self.assertEqual([p["tag"] for p in api.top_players(limit=1)], ["#A"])
        with self.assertRaises(ApiError) as ctx:
            api.cards()
        self.assertIn("45.79.218.79", str(ctx.exception))

    def test_missing_token(self):
        with self.assertRaises(ValueError):
            ClashRoyaleAPI("")


class CliTest(unittest.TestCase):
    def test_meta_show_and_counter(self):
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "meta.json"
            save_dataset({"collected_at": "now", "battles": meta_battles(), "players": []}, path)
            out = io.StringIO()
            with redirect_stdout(out):
                self.assertEqual(cli.main(["--data", str(path), "meta", "show"]), 0)
                self.assertEqual(cli.main(["--data", str(path), "counter", "hog, musketeer"]), 0)
            text = out.getvalue()
            self.assertIn("MILLORS MAZOS", text)
            self.assertIn("X-Bow", text)
            self.assertIn("Contra: Hog Rider, Musketeer", text)

    def test_missing_dataset_is_friendly(self):
        err = io.StringIO()
        from contextlib import redirect_stderr
        with redirect_stderr(err):
            self.assertEqual(cli.main(["--data", "/nonexistent/meta.json", "meta", "show"]), 1)
        self.assertIn("meta collect", err.getvalue())


if __name__ == "__main__":
    unittest.main()
