"""Collect battles of the world's top players and turn them into meta statistics."""

from __future__ import annotations

import difflib
import json
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Callable, Iterable

from .api import GLOBAL_LOCATION, ApiError, ClashRoyaleAPI
from .models import COMPETITIVE_TYPES, Battle, Deck, Side, avg_elixir, parse_battles
from .stats import Record


# ---------------------------------------------------------------- collection
def collect(
    api: ClashRoyaleAPI,
    players: int = 100,
    location: str = GLOBAL_LOCATION,
    progress: Callable[[int, int, str], None] | None = None,
) -> dict:
    ranking = api.top_players(limit=players, location=location)
    battles: list[dict] = []
    failed = 0
    for i, p in enumerate(ranking, 1):
        tag = p.get("tag", "")
        if progress:
            progress(i, len(ranking), p.get("name", tag))
        try:
            battles.extend(api.battlelog(tag))
        except ApiError as e:
            if e.status == 403:
                raise
            failed += 1
    return {
        "collected_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "location": location,
        "players": [
            {"tag": p.get("tag"), "name": p.get("name"),
             "rating": p.get("eloRating") or p.get("trophies"), "rank": p.get("rank")}
            for p in ranking
        ],
        "failed_players": failed,
        "battles": battles,
    }


def save_dataset(dataset: dict, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(dataset, ensure_ascii=False), encoding="utf-8")


def load_dataset(path: Path) -> dict:
    if not path.exists():
        raise FileNotFoundError(
            f"No hi ha dades de meta a {path}. Executa primer: python -m crcoach meta collect"
        )
    return json.loads(path.read_text(encoding="utf-8"))


def dataset_battles(dataset: dict, competitive_only: bool = True) -> list[Battle]:
    return parse_battles(dataset.get("battles", []), COMPETITIVE_TYPES if competitive_only else None)


# -------------------------------------------------------------- observations
@dataclass(frozen=True)
class Observation:
    """One deck played in one battle, from that deck's point of view."""
    side: Side
    opponent: Side
    result: str


def observations(battles: Iterable[Battle], both_sides: bool = True) -> list[Observation]:
    """Each side of each battle once. The same battle in two top players' logs is deduplicated."""
    seen: set = set()
    out: list[Observation] = []
    for b in battles:
        for persp in (b, b.flipped()) if both_sides else (b,):
            key = (persp.uid, persp.team.tag)
            if key in seen:
                continue
            seen.add(key)
            out.append(Observation(persp.team, persp.opponent, persp.result))
    return out


# ----------------------------------------------------------------- deck stats
@dataclass
class DeckStat:
    deck: Deck
    record: Record = field(default_factory=Record)
    avg_elixir: float | None = None
    evolutions: Counter = field(default_factory=Counter)
    players: set = field(default_factory=set)


def deck_stats(obs: Iterable[Observation], min_games: int = 3) -> list[DeckStat]:
    by_deck: dict[Deck, DeckStat] = {}
    for o in obs:
        ds = by_deck.get(o.side.deck)
        if ds is None:
            ds = by_deck[o.side.deck] = DeckStat(o.side.deck, avg_elixir=avg_elixir(o.side.cards))
        ds.record.add(o.result)
        ds.players.add(o.side.tag)
        for c in o.side.cards:
            if c.evolution:
                ds.evolutions[c.name] += 1
    stats = [d for d in by_deck.values() if d.record.games >= min_games]
    stats.sort(key=lambda d: (d.record.wilson, d.record.games), reverse=True)
    return stats


@dataclass
class CardStat:
    name: str
    record: Record
    usage: float  # share of decks that include the card


def card_stats(obs: list[Observation]) -> list[CardStat]:
    recs: dict[str, Record] = defaultdict(Record)
    for o in obs:
        for name in set(o.side.deck):
            recs[name].add(o.result)
    total = len(obs) or 1
    out = [CardStat(n, r, r.games / total) for n, r in recs.items()]
    out.sort(key=lambda c: c.usage, reverse=True)
    return out


# ------------------------------------------------------------------- counters
def known_cards(obs: Iterable[Observation]) -> set[str]:
    names: set[str] = set()
    for o in obs:
        names.update(o.side.deck)
    return names


def resolve_cards(inputs: Iterable[str], known: set[str]) -> tuple[list[str], list[str]]:
    """Map user-typed names ('hog', 'the log') to API names. Returns (resolved, unknown)."""
    lookup = {k.casefold(): k for k in known}
    resolved, unknown = [], []
    for raw in inputs:
        q = raw.strip().casefold()
        if not q:
            continue
        if q in lookup:
            resolved.append(lookup[q])
            continue
        starts = [v for k, v in lookup.items() if k.startswith(q) or q in k.split()]
        if len(starts) == 1:
            resolved.append(starts[0])
            continue
        close = difflib.get_close_matches(q, lookup.keys(), n=1, cutoff=0.75)
        if close:
            resolved.append(lookup[close[0]])
        else:
            unknown.append(raw.strip())
    return list(dict.fromkeys(resolved)), unknown


@dataclass
class CounterCard:
    name: str
    record: Record
    baseline: float  # card's overall win rate in the dataset

    @property
    def lift(self) -> float:
        return self.record.winrate - self.baseline


@dataclass
class CounterReport:
    targets: list[str]
    battles: int
    cards: list[CounterCard]
    decks: list[DeckStat]


def counters(
    obs: list[Observation],
    targets: list[str],
    min_match: int | None = None,
    min_games: int = 5,
    top: int = 10,
) -> CounterReport:
    """What top players' decks win with against opponents that run `targets`."""
    target_set = set(targets)
    need = min(min_match or len(target_set), len(target_set))
    subset = [o for o in obs if len(target_set & set(o.opponent.deck)) >= need]
    baseline = {c.name: c.record.winrate for c in card_stats(obs)}
    recs: dict[str, Record] = defaultdict(Record)
    for o in subset:
        for name in set(o.side.deck):
            recs[name].add(o.result)
    cards = [
        CounterCard(n, r, baseline.get(n, 0.5))
        for n, r in recs.items()
        if r.games >= min_games and n not in target_set and r.winrate > 0.5
    ]
    cards.sort(key=lambda c: (c.record.wilson, c.lift), reverse=True)
    return CounterReport(
        targets=sorted(target_set),
        battles=len(subset),
        cards=cards[:top],
        decks=[d for d in deck_stats(subset, min_games=2) if d.record.winrate > 0.5][:5],
    )
