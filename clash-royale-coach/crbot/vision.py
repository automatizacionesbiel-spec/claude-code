"""Reading the game state from a screenshot: elixir, cards in hand and units on the field."""

from __future__ import annotations

from pathlib import Path

import cv2
import numpy as np

from .arena import COLS, ROWS, Unit, in_tower_zone
from .config import Config

TEMPLATE_SIZE = (60, 72)  # w, h used for card matching


def hsv_mask(img_bgr: np.ndarray, ranges: list) -> np.ndarray:
    hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    mask = np.zeros(hsv.shape[:2], np.uint8)
    for lo, hi in ranges:
        mask |= cv2.inRange(hsv, np.array(lo, np.uint8), np.array(hi, np.uint8))
    return mask


# ------------------------------------------------------------------- elixir
def read_elixir(img: np.ndarray, cfg: Config, segments: int = 10) -> int:
    """Number of filled elixir segments (0-10), counted from the left."""
    bar = cfg.elixir_bar.crop(img)
    if bar.size == 0:
        return 0
    mask = hsv_mask(bar, cfg.elixir_hsv) > 0
    width = mask.shape[1]
    filled = 0
    for i in range(segments):
        seg = mask[:, int(i * width / segments): int((i + 1) * width / segments)]
        if seg.size and seg.mean() > 0.35:
            filled += 1
        else:
            break
    return filled


# -------------------------------------------------------------------- units
def detect_units(img: np.ndarray, cfg: Config) -> list[Unit]:
    """Units from their team-coloured health bars / level badges (red = enemy, blue = ally)."""
    arena = cfg.arena.crop(img)
    if arena.size == 0:
        return []
    ah, aw = arena.shape[:2]
    total = ah * aw
    kernel = np.ones((3, 3), np.uint8)
    units: list[Unit] = []
    for team, ranges in (("enemy", cfg.red_hsv), ("ally", cfg.blue_hsv)):
        mask = cv2.morphologyEx(hsv_mask(arena, ranges), cv2.MORPH_OPEN, kernel)
        n, _, stats, centroids = cv2.connectedComponentsWithStats(mask)
        for i in range(1, n):
            area = stats[i, cv2.CC_STAT_AREA] / total
            if not cfg.unit_min_area <= area <= cfg.unit_max_area:
                continue
            cx, cy = centroids[i]
            x, y = cx / aw * COLS, cy / ah * ROWS + 0.6  # the marker floats above the unit
            if in_tower_zone(x, y):
                continue
            units.append(Unit(team, round(x, 2), round(y, 2), area))
    return units


# -------------------------------------------------------------------- cards
def _prep(img: np.ndarray) -> np.ndarray:
    h, w = img.shape[:2]
    mx, my = int(w * 0.1), int(h * 0.1)  # ignore the card frame / borders
    inner = img[my:h - my, mx:w - mx] if h > 10 and w > 10 else img
    gray = cv2.cvtColor(cv2.resize(inner, TEMPLATE_SIZE, interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2GRAY)
    return cv2.equalizeHist(gray)


class CardRecognizer:
    """Matches hand slots against templates of the 8 deck cards."""

    def __init__(self, templates: dict[str, list[np.ndarray]], threshold: float = 0.45):
        self.templates = {name: [_prep(t) for t in imgs] for name, imgs in templates.items() if imgs}
        self.threshold = threshold

    @classmethod
    def from_dir(cls, directory: Path, names: list[str], threshold: float = 0.45) -> "CardRecognizer":
        templates: dict[str, list[np.ndarray]] = {}
        for name in names:
            folder = directory / name
            imgs = []
            for f in sorted(folder.glob("*.png")) if folder.is_dir() else []:
                img = cv2.imread(str(f), cv2.IMREAD_UNCHANGED)
                if img is None:
                    continue
                if img.ndim == 3 and img.shape[2] == 4:  # composite transparent icons on dark grey
                    alpha = img[:, :, 3:4] / 255.0
                    img = (img[:, :, :3] * alpha + 40 * (1 - alpha)).astype(np.uint8)
                imgs.append(img)
            templates[name] = imgs
        missing = [n for n, v in templates.items() if not v]
        if missing:
            raise FileNotFoundError(
                f"Falten plantilles per a: {', '.join(missing)} (carpeta {directory}). "
                "Executa `python -m crbot setup` o desa retalls amb `python -m crbot calibrate --save-crops`."
            )
        return cls(templates, threshold)

    def score(self, crop: np.ndarray, name: str) -> float:
        p = _prep(crop)
        return max(float(cv2.matchTemplate(p, t, cv2.TM_CCOEFF_NORMED)[0][0]) for t in self.templates[name])

    def recognize(self, crops: list[np.ndarray]) -> list[tuple[str | None, float]]:
        """Best unique assignment of deck cards to slots."""
        pairs = []
        for i, crop in enumerate(crops):
            if crop.size == 0:
                continue
            for name in self.templates:
                pairs.append((self.score(crop, name), i, name))
        pairs.sort(reverse=True)
        result: list[tuple[str | None, float]] = [(None, 0.0)] * len(crops)
        used_slots, used_names = set(), set()
        for s, i, name in pairs:
            if s < self.threshold or i in used_slots or name in used_names:
                continue
            result[i] = (name, s)
            used_slots.add(i)
            used_names.add(name)
        return result

    def recognize_hand(self, img: np.ndarray, cfg: Config) -> list[tuple[str | None, float]]:
        return self.recognize([r.crop(img) for r in cfg.hand_slots])
