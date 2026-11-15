"""Typed views over the raw JSON returned by the API."""

from __future__ import annotations

from dataclasses import dataclass, replace
from statistics import mean
from typing import Iterable

Deck = tuple[str, ...]

# Battle types that are not real 1v1 competitive games.
EXCLUDED_TYPES = {"boatBattle", "clanMate", "friendly", "clanMate2v2", "tutorial"}
# Game modes whose decks do not reflect a player's own deck choices.
EXCLUDED_MODE_WORDS = ("draft", "2v2", "mirror", "boat")
# Types used to build the meta from top players by default.
COMPETITIVE_TYPES = {"pathOfLegend", "PvP"}


@dataclass(frozen=True)
class Card:
    name: str
    level: int = 0
    max_level: int = 0
    elixir: int | None = None
    evolution: int = 0

    @property
    def gap(self) -> int:
        """Levels below max. Comparable across rarities, unlike the raw API level."""
        if not self.max_level:
            return 0
        return max(0, self.max_level - self.level)


def parse_card(raw: dict) -> Card:
    elixir = raw.get("elixirCost")
    return Card(
        name=str(raw.get("name", "?")),
        level=int(raw.get("level") or 0),
        max_level=int(raw.get("maxLevel") or 0),
        elixir=int(elixir) if isinstance(elixir, (int, float)) else None,
        evolution=int(raw.get("evolutionLevel") or 0),
    )


def deck_key(cards: Iterable[Card]) -> Deck:
    return tuple(sorted(c.name for c in cards))


def avg_elixir(cards: Iterable[Card]) -> float | None:
    costs = [c.elixir for c in cards if c.elixir is not None]
    return round(mean(costs), 1) if costs else None


def cycle_cost(cards: Iterable[Card]) -> int | None:
    """Elixir needed to cycle back to a card: the 4 cheapest cards."""
    costs = sorted(c.elixir for c in cards if c.elixir is not None)
    return sum(costs[:4]) if len(costs) >= 4 else None


@dataclass(frozen=True)
class Side:
    tag: str
    name: str
    crowns: int
    cards: tuple[Card, ...]

    @property
    def deck(self) -> Deck:
        return deck_key(self.cards)

    @property
    def mean_gap(self) -> float:
        return mean(c.gap for c in self.cards) if self.cards else 0.0


@dataclass(frozen=True)
class Battle:
    type: str
    mode: str
    time: str
    team: Side
    opponent: Side

    @property
    def result(self) -> str:
        if self.team.crowns > self.opponent.crowns:
            return "win"
        if self.team.crowns < self.opponent.crowns:
            return "loss"
        return "draw"

    @property
    def uid(self) -> tuple[str, tuple[str, ...]]:
        return (self.time, tuple(sorted((self.team.tag, self.opponent.tag))))

    def flipped(self) -> "Battle":
        return replace(self, team=self.opponent, opponent=self.team)


def _parse_side(raw: dict) -> Side | None:
    cards = tuple(parse_card(c) for c in raw.get("cards") or [])
    if len(cards) != 8:
        return None
    return Side(
        tag=str(raw.get("tag", "")),
        name=str(raw.get("name", "")),
        crowns=int(raw.get("crowns") or 0),
        cards=cards,
    )


def parse_battle(raw: dict) -> Battle | None:
    """Return a Battle for 1v1 games with full 8-card decks, else None."""
    team, opp = raw.get("team") or [], raw.get("opponent") or []
    if len(team) != 1 or len(opp) != 1:
        return None
    btype = str(raw.get("type", ""))
    mode = str((raw.get("gameMode") or {}).get("name", ""))
    if btype in EXCLUDED_TYPES or any(w in mode.lower() for w in EXCLUDED_MODE_WORDS):
        return None
    me, them = _parse_side(team[0]), _parse_side(opp[0])
    if me is None or them is None:
        return None
    return Battle(type=btype, mode=mode, time=str(raw.get("battleTime", "")), team=me, opponent=them)


def parse_battles(raws: Iterable[dict], types: set[str] | None = None) -> list[Battle]:
    out = []
    for raw in raws:
        b = parse_battle(raw)
        if b and (types is None or b.type in types):
            out.append(b)
    return out
