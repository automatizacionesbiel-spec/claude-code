"""Pick the strongest top-player decks that fit a player's card collection."""

from __future__ import annotations

from dataclasses import dataclass
from statistics import mean

from .meta import DeckStat
from .models import Card, parse_card

# Score penalty per average level below max. A deck 2 levels under max loses ~6 points
# of win-rate lower bound, enough to prefer a slightly weaker deck that is fully levelled.
LEVEL_PENALTY = 0.03


@dataclass
class Recommendation:
    stat: DeckStat
    score: float
    avg_gap: float
    missing: list[str]
    upgrade_first: list[tuple[str, int]]
    evolutions_missing: list[str]


def _evaluate(stat: DeckStat, collection: dict[str, Card]) -> Recommendation:
    missing = [n for n in stat.deck if n not in collection]
    owned_gaps = [collection[n].gap for n in stat.deck if n in collection]
    avg_gap = mean(owned_gaps) if owned_gaps else 0.0
    floor = min(owned_gaps) if owned_gaps else 0
    upgrade = sorted(
        ((n, collection[n].gap) for n in stat.deck if n in collection and collection[n].gap > floor),
        key=lambda x: -x[1],
    )[:3]
    # Evolutions used in at least half of the top games with this deck.
    common_evos = [n for n, k in stat.evolutions.items() if k >= stat.record.games / 2]
    evo_missing = [n for n in common_evos if n in collection and not collection[n].evolution]
    score = stat.record.wilson - LEVEL_PENALTY * avg_gap - 0.1 * len(missing)
    return Recommendation(stat, score, round(avg_gap, 1), missing, upgrade, evo_missing)


def recommend(
    player: dict, stats: list[DeckStat], top: int = 5, allow_missing: int = 0
) -> list[Recommendation]:
    collection = {c.name: c for c in (parse_card(raw) for raw in player.get("cards") or [])}
    recs = [_evaluate(s, collection) for s in stats]
    recs = [r for r in recs if len(r.missing) <= allow_missing]
    recs.sort(key=lambda r: r.score, reverse=True)
    return recs[:top]
