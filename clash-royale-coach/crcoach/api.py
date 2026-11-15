"""Minimal client for the official Clash Royale API (directly or via the RoyaleAPI proxy)."""

from __future__ import annotations

import json
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Callable

# RoyaleAPI runs a free proxy so the developer key only has to whitelist one fixed IP.
ROYALEAPI_PROXY = "https://proxy.royaleapi.dev/v1"
OFFICIAL_API = "https://api.clashroyale.com/v1"
ROYALEAPI_PROXY_IP = "45.79.218.79"

# 57000006 = "International" (global) location.
GLOBAL_LOCATION = "57000006"


class ApiError(Exception):
    def __init__(self, status: int, reason: str, message: str = ""):
        self.status = status
        self.reason = reason
        hint = ""
        if status == 403:
            hint = (
                " Revisa el token i que la clau de developer.clashroyale.com tingui "
                f"la IP correcta a la llista blanca (amb el proxy de RoyaleAPI: {ROYALEAPI_PROXY_IP})."
            )
        elif status == 404:
            hint = " No s'ha trobat: revisa l'etiqueta (#TAG) del jugador."
        super().__init__(f"HTTP {status} {reason}: {message}{hint}".strip())


def normalize_tag(tag: str) -> str:
    """'#2pp', '2PP', ' #2oo ' -> '#2PP' / '#200' (the letter O never appears in tags)."""
    clean = tag.strip().upper().lstrip("#").replace("O", "0")
    if not clean or not clean.isalnum():
        raise ValueError(f"Etiqueta de jugador no vàlida: {tag!r}")
    return "#" + clean


class ClashRoyaleAPI:
    def __init__(
        self,
        token: str,
        base_url: str = ROYALEAPI_PROXY,
        timeout: float = 15.0,
        max_retries: int = 3,
        urlopen: Callable[..., Any] = urllib.request.urlopen,
        sleep: Callable[[float], None] = time.sleep,
    ):
        if not token:
            raise ValueError(
                "Falta el token de l'API. Crea'l a https://developer.clashroyale.com "
                "i exporta'l a CR_API_TOKEN."
            )
        self.token = token
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.max_retries = max_retries
        self._urlopen = urlopen
        self._sleep = sleep

    # -- low level -------------------------------------------------------
    def _get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        url = self.base_url + path
        if params:
            url += "?" + urllib.parse.urlencode({k: v for k, v in params.items() if v is not None})
        req = urllib.request.Request(
            url,
            headers={"Authorization": f"Bearer {self.token}", "Accept": "application/json"},
        )
        attempt = 0
        while True:
            try:
                with self._urlopen(req, timeout=self.timeout) as resp:
                    return json.loads(resp.read().decode("utf-8"))
            except urllib.error.HTTPError as e:
                body = _read_error(e)
                retryable = e.code == 429 or 500 <= e.code < 600
                if retryable and attempt < self.max_retries:
                    attempt += 1
                    self._sleep(min(2 ** attempt, 30))
                    continue
                raise ApiError(e.code, body.get("reason", e.reason or ""), body.get("message", "")) from None
            except urllib.error.URLError as e:
                if attempt < self.max_retries:
                    attempt += 1
                    self._sleep(min(2 ** attempt, 30))
                    continue
                raise ApiError(0, "network", str(e.reason)) from None

    @staticmethod
    def _tag_path(tag: str) -> str:
        return urllib.parse.quote(normalize_tag(tag), safe="")

    # -- endpoints -------------------------------------------------------
    def player(self, tag: str) -> dict:
        return self._get(f"/players/{self._tag_path(tag)}")

    def battlelog(self, tag: str) -> list[dict]:
        return self._get(f"/players/{self._tag_path(tag)}/battlelog")

    def cards(self) -> list[dict]:
        return self._get("/cards").get("items", [])

    def top_players(self, limit: int = 100, location: str = GLOBAL_LOCATION) -> list[dict]:
        """Top Path of Legends players; falls back to the trophy ladder ranking."""
        paths = [
            f"/locations/{location}/pathoflegend/players",
            f"/locations/{location}/rankings/players",
        ]
        last_error: ApiError | None = None
        for path in paths:
            try:
                items = self._get(path, {"limit": limit}).get("items") or []
            except ApiError as e:
                if e.status in (400, 404):
                    last_error = e
                    continue
                raise
            if items:
                return items[:limit]
        if last_error:
            raise last_error
        return []


def _read_error(e: urllib.error.HTTPError) -> dict:
    try:
        data = json.loads(e.read().decode("utf-8"))
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}
