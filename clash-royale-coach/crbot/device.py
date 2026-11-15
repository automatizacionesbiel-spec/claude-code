"""Android device / emulator control through ADB."""

from __future__ import annotations

import shutil
import subprocess
from typing import Callable

import cv2
import numpy as np


class DeviceError(Exception):
    pass


class ADB:
    def __init__(self, serial: str | None = None, adb: str | None = None,
                 runner: Callable[..., subprocess.CompletedProcess] = subprocess.run):
        self.serial = serial
        self.adb = adb or shutil.which("adb") or "adb"
        self._run = runner

    def _cmd(self, *args: str, timeout: float = 10.0) -> bytes:
        cmd = [self.adb] + (["-s", self.serial] if self.serial else []) + list(args)
        try:
            res = self._run(cmd, capture_output=True, timeout=timeout)
        except FileNotFoundError:
            raise DeviceError(
                "No trobo 'adb'. Instal·la les Android platform-tools i afegeix-les al PATH."
            ) from None
        except subprocess.TimeoutExpired:
            raise DeviceError(f"ADB no respon: {' '.join(args)}") from None
        if res.returncode != 0:
            raise DeviceError((res.stderr or b"").decode(errors="replace").strip() or "error d'ADB")
        return res.stdout

    def devices(self) -> list[str]:
        out = self._cmd("devices").decode(errors="replace").splitlines()[1:]
        return [line.split()[0] for line in out if line.strip().endswith("device")]

    def connect(self, address: str) -> str:
        return self._cmd("connect", address).decode(errors="replace").strip()

    def screencap(self) -> np.ndarray:
        data = self._cmd("exec-out", "screencap", "-p")
        img = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
        if img is None:
            raise DeviceError("No s'ha pogut llegir la captura de pantalla.")
        return img

    def tap(self, x: int, y: int) -> None:
        self._cmd("shell", "input", "tap", str(int(x)), str(int(y)))

    def drag(self, x0: int, y0: int, x1: int, y1: int, ms: int = 220) -> None:
        self._cmd("shell", "input", "swipe", str(int(x0)), str(int(y0)), str(int(x1)), str(int(y1)), str(int(ms)))
