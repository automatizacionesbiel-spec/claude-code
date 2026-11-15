"""Optional trained detector (Ultralytics YOLO) for much more precise unit recognition.

Train a model on frames recorded with `python -m crbot run --record DIR` and label each unit
with a class named "<team>_<Card Name>", e.g. "enemy_Hog Rider" or "ally_Knight".
Then run the bot with `--model path/to/best.pt`. Knowing *which* card is coming lets the
strategy pick the counter that top players win with (from the coach's meta data).
"""

from __future__ import annotations

import numpy as np

from .arena import Unit, in_tower_zone, px_to_tile
from .config import Config


class YoloDetector:
    def __init__(self, model_path: str, min_conf: float = 0.4):
        try:
            from ultralytics import YOLO  # type: ignore
        except ImportError:
            raise SystemExit("Cal instal·lar ultralytics per fer servir --model:  pip install ultralytics") from None
        self.model = YOLO(model_path)
        self.min_conf = min_conf

    def __call__(self, img: np.ndarray, cfg: Config) -> list[Unit]:
        h, w = img.shape[:2]
        result = self.model.predict(img, verbose=False)[0]
        names = result.names
        units = []
        for box, cls, conf in zip(result.boxes.xyxy.tolist(), result.boxes.cls.tolist(), result.boxes.conf.tolist()):
            if conf < self.min_conf:
                continue
            label = names[int(cls)]
            team, _, card = label.partition("_")
            if team not in ("enemy", "ally"):
                continue
            x0, y0, x1, y1 = box
            x, y = px_to_tile((x0 + x1) / 2, y1 - (y1 - y0) * 0.2, cfg, w, h)  # near the unit's feet
            if in_tower_zone(x, y):
                continue
            units.append(Unit(team, round(x, 2), round(y, 2), card=card or None, conf=float(conf)))
        return units
