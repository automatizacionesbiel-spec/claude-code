"""Screen layout (as fractions of the screen, so any resolution works) and tuning knobs."""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass, field
from pathlib import Path


@dataclass
class Rect:
    x0: float
    y0: float
    x1: float
    y1: float

    def px(self, w: int, h: int) -> tuple[int, int, int, int]:
        return round(self.x0 * w), round(self.y0 * h), round(self.x1 * w), round(self.y1 * h)

    def crop(self, img):
        h, w = img.shape[:2]
        x0, y0, x1, y1 = self.px(w, h)
        return img[y0:y1, x0:x1]

    def center_px(self, w: int, h: int) -> tuple[int, int]:
        return round((self.x0 + self.x1) / 2 * w), round((self.y0 + self.y1) / 2 * h)


def _default_slots() -> list[Rect]:
    width = 0.185
    return [Rect(x, 0.835, x + width, 0.955) for x in (0.205, 0.400, 0.595, 0.790)]


@dataclass
class Config:
    # Region covering the 18x32 tile battlefield (enemy king tower at the top).
    arena: Rect = field(default_factory=lambda: Rect(0.02, 0.06, 0.98, 0.79))
    hand_slots: list[Rect] = field(default_factory=_default_slots)
    elixir_bar: Rect = field(default_factory=lambda: Rect(0.28, 0.958, 0.98, 0.985))
    # HSV colour ranges (OpenCV scale: H 0-179, S/V 0-255).
    elixir_hsv: list = field(default_factory=lambda: [[[135, 80, 120], [172, 255, 255]]])
    red_hsv: list = field(default_factory=lambda: [[[0, 150, 120], [8, 255, 255]],
                                                   [[172, 150, 120], [179, 255, 255]]])
    blue_hsv: list = field(default_factory=lambda: [[[100, 150, 120], [124, 255, 255]]])
    # Unit marker blob size, as a fraction of the arena area.
    unit_min_area: float = 0.00004
    unit_max_area: float = 0.004
    card_match_threshold: float = 0.45
    fps: float = 3.0
    play_cooldown: float = 1.0
    play_method: str = "drag"  # "drag" (swipe card to tile) or "tap" (tap card, tap tile)
    drag_ms: int = 220
    adb_serial: str | None = None

    def to_dict(self) -> dict:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: dict) -> "Config":
        cfg = cls()
        for key, value in data.items():
            if not hasattr(cfg, key):
                continue
            if key in ("arena", "elixir_bar"):
                value = Rect(**value)
            elif key == "hand_slots":
                value = [Rect(**r) for r in value]
            setattr(cfg, key, value)
        return cfg

    def save(self, path: Path) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(self.to_dict(), indent=2), encoding="utf-8")

    @classmethod
    def load(cls, path: Path) -> "Config":
        if not path.exists():
            return cls()
        return cls.from_dict(json.loads(path.read_text(encoding="utf-8")))
