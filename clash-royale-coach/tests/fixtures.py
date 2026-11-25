"""Builders for raw API-shaped JSON."""

ELIXIR = {
    "Hog Rider": 4, "Fireball": 4, "The Log": 2, "Musketeer": 4, "Ice Spirit": 1,
    "Skeletons": 1, "Cannon": 3, "Ice Golem": 2, "Golem": 8, "Night Witch": 4,
    "Baby Dragon": 4, "Lightning": 6, "Tornado": 3, "Mega Minion": 3, "Lumberjack": 4,
    "Barbarian Barrel": 2, "X-Bow": 6, "Tesla": 4, "Archers": 3, "Knight": 3,
    "Valkyrie": 4, "Miner": 3, "Poison": 4, "Bats": 2, "Inferno Tower": 5,
    "Wall Breakers": 2, "Zap": 2, "Goblin Gang": 3,
}

HOG = ["Hog Rider", "Fireball", "The Log", "Musketeer", "Ice Spirit", "Skeletons", "Cannon", "Ice Golem"]
GOLEM = ["Golem", "Night Witch", "Baby Dragon", "Lightning", "Tornado", "Mega Minion", "Lumberjack", "Barbarian Barrel"]
XBOW = ["X-Bow", "Tesla", "Archers", "Knight", "Fireball", "The Log", "Skeletons", "Ice Spirit"]
MINER = ["Miner", "Poison", "Valkyrie", "Bats", "Inferno Tower", "Wall Breakers", "Zap", "Goblin Gang"]


def card(name, level=14, max_level=14, evo=0):
    c = {"name": name, "id": abs(hash(name)) % 10**8, "level": level, "maxLevel": max_level,
         "elixirCost": ELIXIR.get(name, 3)}
    if evo:
        c["evolutionLevel"] = evo
    return c


def side(tag, deck, crowns, level=14, evos=()):
    return {"tag": tag, "name": f"P{tag}", "crowns": crowns,
            "cards": [card(n, level=level, evo=1 if n in evos else 0) for n in deck]}


_counter = [0]


def battle(tag, deck, opp_tag, opp_deck, won, *, btype="pathOfLegend", mode="Ranked1v1_NewArena",
           level=14, opp_level=14, evos=(), time=None):
    _counter[0] += 1
    return {
        "type": btype,
        "battleTime": time or f"20261115T{_counter[0]:06d}.000Z",
        "gameMode": {"id": 72000464, "name": mode},
        "team": [side(tag, deck, 1 if won else 0, level, evos)],
        "opponent": [side(opp_tag, opp_deck, 0 if won else 1, opp_level)],
    }


def player(tag="#PLAYER", collection=None, current=HOG, level_map=None, evos=()):
    level_map = level_map or {}
    names = collection or sorted(set(HOG + GOLEM + XBOW + MINER))
    return {
        "tag": tag, "name": "Tester", "trophies": 9000, "bestTrophies": 9500,
        "cards": [card(n, level=level_map.get(n, 14), evo=1 if n in evos else 0) for n in names],
        "currentDeck": [card(n, level=level_map.get(n, 14)) for n in current],
    }
