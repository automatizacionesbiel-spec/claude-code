from __future__ import annotations

import math
from dataclasses import dataclass


def wilson_lower(wins: int, n: int, z: float = 1.96) -> float:
    """Lower bound of the 95% Wilson interval: ranks win rates without trusting tiny samples."""
    if n <= 0:
        return 0.0
    p = wins / n
    denom = 1 + z * z / n
    centre = p + z * z / (2 * n)
    margin = z * math.sqrt((p * (1 - p) + z * z / (4 * n)) / n)
    return max(0.0, (centre - margin) / denom)


@dataclass
class Record:
    wins: int = 0
    losses: int = 0
    draws: int = 0

    def add(self, result: str) -> None:
        if result == "win":
            self.wins += 1
        elif result == "loss":
            self.losses += 1
        else:
            self.draws += 1

    @property
    def games(self) -> int:
        return self.wins + self.losses + self.draws

    @property
    def winrate(self) -> float:
        return self.wins / self.games if self.games else 0.0

    @property
    def lossrate(self) -> float:
        return self.losses / self.games if self.games else 0.0

    @property
    def wilson(self) -> float:
        return wilson_lower(self.wins, self.games)

    def __str__(self) -> str:
        return f"{self.wins}V-{self.losses}D" + (f"-{self.draws}E" if self.draws else "")
