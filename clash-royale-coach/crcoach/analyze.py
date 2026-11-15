"""Analyse one player's recent battles: what works, what beats them, and why."""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass, field

from .knowledge import deck_checks
from .models import Battle, Card, Deck, avg_elixir, parse_battles, parse_card
from .stats import Record

LEVEL_EPS = 0.5  # mean level difference that counts as "under/over-levelled"


@dataclass
class DeckRecord:
    deck: Deck
    record: Record = field(default_factory=Record)
    avg_elixir: float | None = None


@dataclass
class Nemesis:
    card: str
    record: Record  # the player's record against decks with this card


@dataclass
class PlayerReport:
    name: str
    tag: str
    trophies: int | None
    best_trophies: int | None
    record: Record
    by_type: dict[str, Record]
    decks: list[DeckRecord]
    nemesis: list[Nemesis]
    level_split: dict[str, Record]
    avg_level_diff: float | None
    current_deck: list[Card]
    current_deck_notes: list[str]
    battles: int


def analyze(player: dict, battlelog: list[dict], nemesis_min_games: int = 3) -> PlayerReport:
    battles: list[Battle] = parse_battles(battlelog)

    overall = Record()
    by_type: dict[str, Record] = defaultdict(Record)
    decks: dict[Deck, DeckRecord] = {}
    vs_card: dict[str, Record] = defaultdict(Record)
    level_split = {"inferior": Record(), "igualat": Record(), "superior": Record()}
    diffs: list[float] = []

    for b in battles:
        r = b.result
        overall.add(r)
        by_type[b.type].add(r)
        dr = decks.get(b.team.deck)
        if dr is None:
            dr = decks[b.team.deck] = DeckRecord(b.team.deck, avg_elixir=avg_elixir(b.team.cards))
        dr.record.add(r)
        for name in set(b.opponent.deck):
            vs_card[name].add(r)
        # positive = I'm higher level (fewer levels below max than the opponent)
        diff = b.opponent.mean_gap - b.team.mean_gap
        diffs.append(diff)
        bucket = "inferior" if diff < -LEVEL_EPS else "superior" if diff > LEVEL_EPS else "igualat"
        level_split[bucket].add(r)

    nemesis = [
        Nemesis(name, rec) for name, rec in vs_card.items()
        if rec.games >= nemesis_min_games and rec.losses > rec.wins
    ]
    nemesis.sort(key=lambda n: (n.record.lossrate, n.record.games), reverse=True)

    current = [parse_card(c) for c in player.get("currentDeck") or []]
    return PlayerReport(
        name=player.get("name", "?"),
        tag=player.get("tag", "?"),
        trophies=player.get("trophies"),
        best_trophies=player.get("bestTrophies"),
        record=overall,
        by_type=dict(by_type),
        decks=sorted(decks.values(), key=lambda d: d.record.games, reverse=True),
        nemesis=nemesis[:8],
        level_split=level_split,
        avg_level_diff=round(sum(diffs) / len(diffs), 2) if diffs else None,
        current_deck=current,
        current_deck_notes=deck_checks(current) if len(current) == 8 else [],
        battles=len(battles),
    )


def coaching_tips(rep: PlayerReport) -> list[str]:
    """Turn the numbers into concrete advice."""
    tips: list[str] = []
    if rep.battles < 5:
        return ["Hi ha poques batalles al registre: juga'n unes quantes més i torna-ho a provar."]

    under, even = rep.level_split["inferior"], rep.level_split["igualat"]
    if under.games >= 3 and even.games >= 3 and even.winrate - under.winrate > 0.15:
        tips.append(
            f"Perds molt més quan vas per sota de nivell ({under.winrate:.0%} vs {even.winrate:.0%} "
            "igualat). Concentra l'or i els comodins a les cartes del teu mazo principal."
        )
    elif rep.avg_level_diff is not None and rep.avg_level_diff < -1:
        tips.append("De mitjana vas més d'1 nivell per sota dels rivals: prioritza pujar el mazo principal.")

    if len(rep.decks) >= 4:
        tips.append(
            f"Has jugat {len(rep.decks)} mazos diferents. Els millors jugadors dominen 1 o 2 mazos: "
            "tria'n un i juga'l molt per aprendre'n els matchups."
        )
    best = [d for d in rep.decks if d.record.games >= 5]
    if len(best) >= 2:
        best.sort(key=lambda d: d.record.wilson, reverse=True)
        if best[0].record.winrate - best[-1].record.winrate > 0.2:
            tips.append(
                f"El teu millor mazo guanya el {best[0].record.winrate:.0%} i el pitjor el "
                f"{best[-1].record.winrate:.0%}: queda't amb el millor."
            )
    if rep.nemesis:
        names = ", ".join(n.card for n in rep.nemesis[:3])
        tips.append(
            f"Cartes que més et costen: {names}. Fes servir `counter \"{names}\"` per veure "
            "com les guanyen els top jugadors."
        )
    tips.extend(n for n in rep.current_deck_notes if n.startswith("⚠"))
    if not tips:
        tips.append("Bon rendiment general. Compara el teu mazo amb `recommend` per veure si hi ha opcions més fortes.")
    return tips
