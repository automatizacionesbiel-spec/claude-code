"""Decision engine: given what is on screen, which card to play and where.

Priorities, the way strong players think about a battle:
  1. Defend what has crossed the river (spell clusters, pull with buildings, cheapest good answer).
  2. Counter-push: after defending, add the win condition behind surviving troops.
  3. Never leak elixir at 10.
  4. Attack with the win condition when there is elixir left to defend afterwards,
     preferring the lane opposite to the opponent's last push.
  5. Late game (double elixir): chip towers with big spells when nothing threatens us.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from math import hypot

from .arena import (
    BACK, BRIDGE, CENTER_DEF, ENEMY_PRINCESS, LEFT, OUR_MIN_Y, RIVER_Y, Unit,
    clamp_our_side, lane_of, other_lane,
)
from .cards import CardInfo

DOUBLE_ELIXIR_T = 120.0  # last minute of regulation time
LATE_GAME_T = 150.0


@dataclass
class GameState:
    t: float                         # seconds since the battle started
    elixir: int
    hand: list[CardInfo | None]      # the 4 playable slots
    enemies: list[Unit] = field(default_factory=list)
    allies: list[Unit] = field(default_factory=list)

    @property
    def double_elixir(self) -> bool:
        return self.t >= DOUBLE_ELIXIR_T


@dataclass(frozen=True)
class Action:
    slot: int
    card: CardInfo
    x: float
    y: float
    reason: str


def _cluster(units: list[Unit], radius: float = 2.5) -> tuple[float, float, int]:
    """Centre and size of the densest group of units."""
    best = (0.0, 0.0, 0)
    for u in units:
        group = [v for v in units if hypot(v.x - u.x, v.y - u.y) <= radius]
        if len(group) > best[2]:
            best = (sum(v.x for v in group) / len(group), sum(v.y for v in group) / len(group), len(group))
    return best


class Strategy:
    def __init__(self, cooldown: float = 1.0, counter_scores: dict[str, dict[str, float]] | None = None):
        self.cooldown = cooldown
        # counter_scores[enemy_card][our_card] = win-rate lift from top players' battles
        self.counter_scores = counter_scores or {}
        self.last_play_t = -99.0
        self.last_enemy_lane: int | None = None
        self.last_enemy_t = -99.0
        self.last_attack_lane = LEFT

    def reset(self) -> None:
        self.__init__(self.cooldown, self.counter_scores)

    # ------------------------------------------------------------- helpers
    @staticmethod
    def _affordable(s: GameState):
        return [(i, c) for i, c in enumerate(s.hand) if c is not None and c.elixir <= s.elixir]

    def _attack_lane(self, s: GameState) -> int:
        if self.last_enemy_lane is not None and s.t - self.last_enemy_t < 12:
            return other_lane(self.last_enemy_lane)
        return self.last_attack_lane

    def _play(self, s: GameState, slot: int, card: CardInfo, pos: tuple[float, float], reason: str,
              spell: bool = False) -> Action:
        x, y = pos if spell or "anywhere" in card.roles else clamp_our_side(*pos)
        self.last_play_t = s.t
        return Action(slot, card, round(x, 2), round(y, 2), reason)

    # -------------------------------------------------------------- decide
    def decide(self, s: GameState) -> Action | None:
        if s.t - self.last_play_t < self.cooldown:
            return None
        threats = [e for e in s.enemies if e.y >= RIVER_Y - 1]
        if threats:
            nearest = max(threats, key=lambda u: u.y)
            self.last_enemy_lane = lane_of(nearest.x)
            self.last_enemy_t = s.t
            return self._defend(s, threats, nearest)
        for rule in (self._counter_push, self._late_game_spell, self._attack, self._avoid_leak):
            action = rule(s)
            if action:
                return action
        return None

    # -------------------------------------------------------------- rules
    def _defend(self, s: GameState, threats: list[Unit], nearest: Unit) -> Action | None:
        cx, cy, n = _cluster(threats)
        affordable = self._affordable(s)

        # Spell value: a small spell on 3+ units, a big spell on 4+.
        for need, role in ((3, "small_spell"), (4, "big_spell")):
            if n >= need:
                for i, c in affordable:
                    if c.kind == "spell" and role in c.roles:
                        return self._play(s, i, c, (cx, cy), f"{role} sobre {n} unitats", spell=True)

        # Already defending: let our troops work instead of overcommitting.
        helpers = [a for a in s.allies if hypot(a.x - nearest.x, a.y - nearest.y) <= 3.5]
        if len(helpers) >= len(threats) and s.elixir < 9:
            return None

        lane = lane_of(nearest.x)
        best, best_score = None, -1e9
        for i, c in affordable:
            if c.kind == "spell":
                continue
            if "wincon" in c.roles and "defensive_wincon" not in c.roles:
                continue
            roles = c.roles
            score = -0.4 * c.elixir
            if n >= 3 and "splash" in roles:
                score += 3
            if c.kind == "building" and nearest.y < 24:
                score += 2
            if "air" in roles:
                score += 0.5
            if "tank_killer" in roles and n <= 2:
                score += 1
            if nearest.card:
                score += 5 * self.counter_scores.get(nearest.card, {}).get(c.name, 0.0)
            if score > best_score:
                best, best_score = (i, c), score
        if best is None:
            return None
        i, c = best
        if c.kind == "building":
            pos = CENTER_DEF[lane]
        elif "ranged" in c.roles:
            pos = (nearest.x + (1.5 if lane == LEFT else -1.5), nearest.y + 4)
        else:
            pos = (nearest.x, nearest.y + 1.5)
        return self._play(s, i, c, pos, f"defensa contra {n} unitat(s) al carril {'esquerre' if lane == LEFT else 'dret'}")

    def _counter_push(self, s: GameState) -> Action | None:
        pushing = [a for a in s.allies if RIVER_Y - 1 <= a.y <= 27]
        if not pushing:
            return None
        lane = lane_of(sum(a.x for a in pushing) / len(pushing))
        front = min(pushing, key=lambda a: a.y)
        reserve = 0 if s.double_elixir else 1
        for i, c in self._affordable(s):
            if "wincon" in c.roles and s.elixir >= c.elixir + reserve:
                self.last_attack_lane = lane
                if "anywhere" in c.roles:
                    return self._play(s, i, c, ENEMY_PRINCESS[lane], "contraatac (directe a la torre)")
                pos = (front.x, max(front.y - 1, OUR_MIN_Y)) if c.heavy else BRIDGE[lane]
                return self._play(s, i, c, pos, "contraatac darrere les tropes que han defensat")
        return None

    def _late_game_spell(self, s: GameState) -> Action | None:
        if s.t < LATE_GAME_T or s.elixir < 8:
            return None
        lane = self._attack_lane(s)
        for i, c in self._affordable(s):
            if c.kind == "spell" and "big_spell" in c.roles:
                return self._play(s, i, c, ENEMY_PRINCESS[lane], "final de partida: encanteri a la torre", spell=True)
        return None

    def _attack(self, s: GameState) -> Action | None:
        lane = self._attack_lane(s)
        reserve = 1 if s.double_elixir else 3
        for i, c in sorted(self._affordable(s), key=lambda x: -x[1].elixir):
            if "wincon" not in c.roles:
                continue
            if c.heavy:
                if s.elixir >= (8 if s.double_elixir else 9):
                    self.last_attack_lane = lane
                    return self._play(s, i, c, BACK[lane], "tanc pesat des del darrere")
                continue
            if s.elixir >= c.elixir + reserve:
                self.last_attack_lane = lane
                if "anywhere" in c.roles:
                    return self._play(s, i, c, ENEMY_PRINCESS[lane], "atac directe a la torre", spell=True)
                return self._play(s, i, c, BRIDGE[lane], "atac pel pont")
        return None

    def _avoid_leak(self, s: GameState) -> Action | None:
        if s.elixir < 10:
            return None
        lane = self._attack_lane(s)
        candidates = [(i, c) for i, c in self._affordable(s) if c.kind != "spell"]
        if not candidates:
            return None
        i, c = min(candidates, key=lambda x: x[1].elixir)
        return self._play(s, i, c, BACK[lane], "elixir al màxim: cicle des del darrere")
