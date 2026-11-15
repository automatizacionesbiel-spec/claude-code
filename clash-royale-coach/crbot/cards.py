"""Card metadata and roles used by the strategy."""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

from crcoach.knowledge import AIR_TARGETING, BIG_SPELLS, BUILDINGS, SMALL_SPELLS, WIN_CONDITIONS

SPLASH = {
    "Valkyrie", "Baby Dragon", "Wizard", "Executioner", "Bowler", "Bomber", "Dark Prince",
    "Mega Knight", "Bomb Tower", "Witch", "Electro Dragon", "Firecracker", "Magic Archer",
    "Princess", "Ice Wizard", "Skeleton Dragons", "Giant Skeleton", "Sparky", "Hunter",
    "Electro Wizard", "Goblin Demolisher", "Mother Witch",
}
RANGED = {
    "Musketeer", "Wizard", "Electro Wizard", "Ice Wizard", "Executioner", "Archers", "Hunter",
    "Firecracker", "Dart Goblin", "Princess", "Magic Archer", "Archer Queen", "Spear Goblins",
    "Witch", "Mother Witch", "Electro Dragon", "Baby Dragon", "Bowler", "Flying Machine",
    "Three Musketeers", "Cannon Cart", "Inferno Dragon", "Little Prince", "Skeleton Dragons",
    "Mega Minion", "Minions", "Bats", "Zappies",
}
TANK_KILLERS = {
    "Inferno Tower", "Inferno Dragon", "Mini P.E.K.K.A", "P.E.K.K.A", "Hunter", "Prince",
    "Lumberjack", "Elite Barbarians", "Barbarians", "Minion Horde", "Mighty Miner", "Cannon",
    "Tesla", "Goblin Cage", "Skeleton Army", "Guards",
}
TANKS = {
    "Golem", "Giant", "Lava Hound", "Electro Giant", "Goblin Giant", "Royal Giant",
    "Elixir Golem", "Mega Knight", "P.E.K.K.A", "Giant Skeleton", "Rune Giant",
}
# Win conditions that are also good defenders.
DEFENSIVE_WINCONS = {"Mega Knight", "P.E.K.K.A", "Giant Skeleton", "Royal Recruits", "Sparky"}
# Win conditions deployed on (or next to) the enemy tower instead of at the bridge.
ANYWHERE = {"Miner", "Goblin Barrel", "Graveyard", "Goblin Drill"}

UNPLAYABLE_COST = 99


@dataclass(frozen=True)
class CardInfo:
    name: str
    elixir: int
    kind: str  # troop | building | spell
    id: int = 0

    @property
    def roles(self) -> frozenset[str]:
        n = self.name
        roles = set()
        for role, names in (
            ("wincon", WIN_CONDITIONS), ("small_spell", SMALL_SPELLS), ("big_spell", BIG_SPELLS),
            ("air", AIR_TARGETING), ("splash", SPLASH), ("ranged", RANGED),
            ("tank_killer", TANK_KILLERS), ("tank", TANKS), ("defensive_wincon", DEFENSIVE_WINCONS),
            ("anywhere", ANYWHERE),
        ):
            if n in names:
                roles.add(role)
        if self.kind == "building":
            roles.add("building")
        return frozenset(roles)

    @property
    def heavy(self) -> bool:
        return "tank" in self.roles and self.elixir >= 6


def kind_from_id(card_id: int, name: str) -> str:
    prefix = card_id // 1_000_000
    if prefix == 27:
        return "building"
    if prefix == 28:
        return "spell"
    if prefix == 26:
        return "troop"
    if name in BUILDINGS:
        return "building"
    if name in SMALL_SPELLS | BIG_SPELLS:
        return "spell"
    return "troop"


def card_from_api(raw: dict) -> CardInfo:
    cost = raw.get("elixirCost")
    cid = int(raw.get("id") or 0)
    name = str(raw["name"])
    return CardInfo(name, int(cost) if isinstance(cost, (int, float)) else UNPLAYABLE_COST,
                    kind_from_id(cid, name), cid)


def save_deck(cards: list[CardInfo], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    data = [{"name": c.name, "elixir": c.elixir, "kind": c.kind, "id": c.id} for c in cards]
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")


def load_deck(path: Path) -> list[CardInfo]:
    if not path.exists():
        raise FileNotFoundError(f"No trobo el mazo a {path}. Executa primer: python -m crbot setup \"#TAG\"")
    return [CardInfo(d["name"], int(d["elixir"]), d["kind"], int(d.get("id", 0)))
            for d in json.loads(path.read_text(encoding="utf-8"))]
