"""Perceive → decide → act loop."""

from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Callable, Protocol

import cv2
import numpy as np

from .arena import Unit, tile_to_px
from .cards import CardInfo
from .config import Config
from .strategy import Action, GameState, Strategy
from .vision import CardRecognizer, detect_units, read_elixir

BATTLE_END_GRACE = 6.0  # seconds without a recognisable hand before the battle counts as over


class Device(Protocol):
    def screencap(self) -> np.ndarray: ...
    def tap(self, x: int, y: int) -> None: ...
    def drag(self, x0: int, y0: int, x1: int, y1: int, ms: int = 220) -> None: ...


class UnitDetector(Protocol):
    def __call__(self, img: np.ndarray, cfg: Config) -> list[Unit]: ...


class Bot:
    def __init__(
        self,
        device: Device,
        cfg: Config,
        deck: list[CardInfo],
        recognizer: CardRecognizer,
        strategy: Strategy | None = None,
        detector: UnitDetector = detect_units,
        dry_run: bool = False,
        record_dir: Path | None = None,
        clock: Callable[[], float] = time.monotonic,
        sleep: Callable[[float], None] = time.sleep,
        log: Callable[[str], None] = print,
    ):
        self.device, self.cfg, self.recognizer = device, cfg, recognizer
        self.deck = {c.name: c for c in deck}
        self.strategy = strategy or Strategy(cooldown=cfg.play_cooldown)
        self.detector = detector
        self.dry_run = dry_run
        self.record_dir = record_dir
        self.clock, self.sleep, self.log = clock, sleep, log
        self.battle_start: float | None = None
        self.last_seen_hand = 0.0
        self.battles_done = 0
        self.frame_no = 0

    # ---------------------------------------------------------- perception
    def perceive(self, img: np.ndarray, t: float) -> tuple[GameState, int]:
        hand_names = self.recognizer.recognize_hand(img, self.cfg)
        hand = [self.deck.get(n) if n else None for n, _ in hand_names]
        units = self.detector(img, self.cfg)
        state = GameState(
            t=t,
            elixir=read_elixir(img, self.cfg),
            hand=hand,
            enemies=[u for u in units if u.team == "enemy"],
            allies=[u for u in units if u.team == "ally"],
        )
        return state, sum(c is not None for c in hand)

    # -------------------------------------------------------------- action
    def act(self, action: Action, shape: tuple[int, ...]) -> None:
        h, w = shape[:2]
        sx, sy = self.cfg.hand_slots[action.slot].center_px(w, h)
        tx, ty = tile_to_px(action.x, action.y, self.cfg, w, h)
        if self.cfg.play_method == "tap":
            self.device.tap(sx, sy)
            self.device.tap(tx, ty)
        else:
            self.device.drag(sx, sy, tx, ty, self.cfg.drag_ms)

    # ---------------------------------------------------------------- step
    def step(self, img: np.ndarray) -> Action | None:
        now = self.clock()
        t = now - self.battle_start if self.battle_start is not None else 0.0
        state, recognised = self.perceive(img, t)

        if recognised >= 2:
            self.last_seen_hand = now
            if self.battle_start is None:
                self.battle_start, state.t = now, 0.0
                self.strategy.reset()
                self.log("▶ Batalla detectada: el bot pren el control.")
        elif self.battle_start is not None and now - self.last_seen_hand > BATTLE_END_GRACE:
            self.battle_start = None
            self.battles_done += 1
            self.log(f"■ Batalla acabada ({self.battles_done}).")
            return None
        if self.battle_start is None:
            return None

        action = self.strategy.decide(state)
        self._record(img, state, action)
        if action:
            self.log(f"[{state.t:5.1f}s] elixir {state.elixir:2} → {action.card.name} a "
                     f"({action.x:.1f}, {action.y:.1f}): {action.reason}")
            if not self.dry_run:
                self.act(action, img.shape)
        return action

    def run(self, battles: int = 1) -> None:
        period = 1.0 / max(self.cfg.fps, 0.5)
        self.log("Esperant una batalla amistosa o del Camp d'entrenament (Ctrl+C per aturar)...")
        while self.battles_done < battles:
            start = self.clock()
            self.step(self.device.screencap())
            self.sleep(max(0.0, period - (self.clock() - start)))

    # ----------------------------------------------------------- recording
    def _record(self, img: np.ndarray, state: GameState, action: Action | None) -> None:
        if not self.record_dir:
            return
        self.frame_no += 1
        folder = self.record_dir
        folder.mkdir(parents=True, exist_ok=True)
        stem = folder / f"frame_{self.frame_no:06d}"
        cv2.imwrite(str(stem.with_suffix(".png")), img)
        meta = {
            "t": round(state.t, 2), "elixir": state.elixir,
            "hand": [c.name if c else None for c in state.hand],
            "enemies": [u.__dict__ for u in state.enemies],
            "allies": [u.__dict__ for u in state.allies],
            "action": None if action is None else {
                "slot": action.slot, "card": action.card.name, "x": action.x, "y": action.y,
                "reason": action.reason},
        }
        stem.with_suffix(".json").write_text(json.dumps(meta, ensure_ascii=False), encoding="utf-8")
