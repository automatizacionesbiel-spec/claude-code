"""Battlefield geometry in tile coordinates (18 columns x 32 rows, enemy side on top).

Coordinates are continuous: tile (3, 17) spans x 3..4, y 17..18; its centre is (3.5, 17.5).
"""

from __future__ import annotations

from dataclasses import dataclass

from .config import Config

COLS, ROWS = 18, 32
OUR_MIN_Y = 17.0          # first row where we may deploy troops
RIVER_Y = 16.0            # anything at or below this row is on our half (y grows downwards)
LEFT, RIGHT = 0, 1

BRIDGE = {LEFT: (3.5, 17.5), RIGHT: (14.5, 17.5)}
BACK = {LEFT: (2.5, 30.5), RIGHT: (15.5, 30.5)}          # back corners: heavy tanks, elixir cycle
CENTER_DEF = {LEFT: (8.5, 22.5), RIGHT: (9.5, 22.5)}     # buildings that pull troops to the centre
ENEMY_PRINCESS = {LEFT: (3.5, 6.5), RIGHT: (14.5, 6.5)}
OUR_PRINCESS = {LEFT: (3.5, 25.5), RIGHT: (14.5, 25.5)}

# Tower areas (x0, y0, x1, y1): their health bars and banners must not count as units.
TOWER_ZONES = [
    (1.0, 3.5, 6.0, 9.0), (12.0, 3.5, 17.0, 9.0),        # enemy princess towers
    (5.5, 0.0, 12.5, 5.5),                                # enemy king tower
    (1.0, 22.5, 6.0, 27.5), (12.0, 22.5, 17.0, 27.5),    # our princess towers
    (5.5, 26.0, 12.5, 32.0),                              # our king tower
]


@dataclass(frozen=True)
class Unit:
    team: str            # "enemy" | "ally"
    x: float
    y: float
    area: float = 0.0
    card: str | None = None
    conf: float = 1.0


def lane_of(x: float) -> int:
    return LEFT if x < COLS / 2 else RIGHT


def other_lane(lane: int) -> int:
    return RIGHT if lane == LEFT else LEFT


def in_tower_zone(x: float, y: float) -> bool:
    return any(x0 <= x <= x1 and y0 <= y <= y1 for x0, y0, x1, y1 in TOWER_ZONES)


def clamp_our_side(x: float, y: float) -> tuple[float, float]:
    return min(max(x, 0.5), COLS - 0.5), min(max(y, OUR_MIN_Y + 0.5), ROWS - 0.5)


def tile_to_px(x: float, y: float, cfg: Config, w: int, h: int) -> tuple[int, int]:
    a = cfg.arena
    px = (a.x0 + x / COLS * (a.x1 - a.x0)) * w
    py = (a.y0 + y / ROWS * (a.y1 - a.y0)) * h
    return round(px), round(py)


def px_to_tile(px: float, py: float, cfg: Config, w: int, h: int) -> tuple[float, float]:
    a = cfg.arena
    x = (px / w - a.x0) / (a.x1 - a.x0) * COLS
    y = (py / h - a.y0) / (a.y1 - a.y0) * ROWS
    return x, y
