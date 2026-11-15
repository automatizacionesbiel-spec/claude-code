"""Small, stable card-role knowledge used for deck sanity checks.

Lists are heuristics (English API names). Unknown/new cards simply don't count
towards a role, so checks degrade to "maybe" rather than breaking.
"""

from __future__ import annotations

from .models import Card, avg_elixir, cycle_cost

WIN_CONDITIONS = {
    "Hog Rider", "Royal Giant", "Giant", "Golem", "Lava Hound", "Balloon", "X-Bow",
    "Mortar", "Miner", "Graveyard", "Goblin Barrel", "Royal Hogs", "Ram Rider",
    "Battle Ram", "Wall Breakers", "Elixir Golem", "Electro Giant", "Goblin Drill",
    "Three Musketeers", "Skeleton Barrel", "Giant Skeleton", "P.E.K.K.A", "Mega Knight",
    "Sparky", "Goblin Giant", "Royal Recruits", "Rune Giant", "Suspicious Bush",
    "Goblin Machine", "Boss Bandit",
}

SMALL_SPELLS = {
    "The Log", "Zap", "Arrows", "Giant Snowball", "Barbarian Barrel", "Tornado",
    "Royal Delivery", "Goblin Curse",
}

BIG_SPELLS = {"Fireball", "Rocket", "Lightning", "Poison", "Earthquake", "Void"}

AIR_TARGETING = {
    "Musketeer", "Wizard", "Electro Wizard", "Ice Wizard", "Executioner", "Archers",
    "Minions", "Minion Horde", "Bats", "Mega Minion", "Baby Dragon", "Inferno Dragon",
    "Inferno Tower", "Tesla", "Hunter", "Firecracker", "Dart Goblin", "Princess",
    "Magic Archer", "Archer Queen", "Little Prince", "Electro Dragon", "Phoenix",
    "Flying Machine", "Skeleton Dragons", "Spear Goblins", "Goblin Gang", "Witch",
    "Mother Witch", "Night Witch", "Electro Spirit", "Zappies", "Rascals",
    "Three Musketeers", "X-Bow", "Royal Chef", "Goblin Demolisher", "Lava Hound",
    "Cannoneer", "Dagger Duchess",
}

BUILDINGS = {
    "Cannon", "Tesla", "Inferno Tower", "Bomb Tower", "Goblin Cage", "Tombstone",
    "Furnace", "Goblin Hut", "Barbarian Hut", "Elixir Collector", "X-Bow", "Mortar",
    "Goblin Drill",
}


def deck_checks(cards: list[Card]) -> list[str]:
    """Human-readable (Catalan) observations about a deck."""
    names = {c.name for c in cards}
    notes: list[str] = []

    elixir = avg_elixir(cards)
    if elixir is not None:
        if elixir >= 4.3:
            notes.append(f"Elixir mitjà {elixir}: mazo molt pesat, vigila els contraatacs ràpids.")
        elif elixir <= 3.0:
            notes.append(f"Elixir mitjà {elixir}: mazo de cicle, guanya fent cicles més ràpids que el rival.")
        else:
            notes.append(f"Elixir mitjà {elixir}: equilibrat.")
    cycle = cycle_cost(cards)
    if cycle is not None:
        notes.append(f"Cost del cicle de 4 cartes: {cycle} d'elixir.")

    wins = sorted(names & WIN_CONDITIONS)
    if not wins:
        notes.append("⚠ No té una condició de victòria clara (Hog, Giant, Miner, X-Bow...).")
    else:
        notes.append("Condició de victòria: " + ", ".join(wins) + ".")
    if not names & SMALL_SPELLS:
        notes.append("⚠ Sense encanteri petit (Log, Zap, Arrows...): et costarà amb Goblin Barrel i eixams.")
    if not names & BIG_SPELLS:
        notes.append("⚠ Sense encanteri gran (Fireball, Poison, Rocket...): costa rematar torres i tropes de suport.")
    air = names & AIR_TARGETING
    if len(air) < 2:
        notes.append("⚠ Poca defensa aèria (<2 cartes): Balloon, Lava Hound i Minion Horde et faran mal.")
    return notes
