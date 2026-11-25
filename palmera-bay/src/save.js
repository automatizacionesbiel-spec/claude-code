// Desat de partida (localStorage). Tot dins try/catch: pot estar bloquejat o ple.
const KEY = 'palmera-bay-save-v1';

export function defaultSave() {
  return { v: 1, money: 500, hp: 100, armor: 0, weapons: { pistol: { owned: true, ammo: 48 } }, current: 'pistol', done: [], hour: 17.8, pos: null, settings: {} };
}

export function sanitize(raw) {
  const d = defaultSave();
  if (!raw || typeof raw !== 'object' || raw.v !== 1) return d;
  const num = (x, lo, hi, def) => (Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : def);
  const out = {
    v: 1,
    money: Math.round(num(raw.money, 0, 1e9, d.money)),
    hp: num(raw.hp, 1, 100, 100),
    armor: num(raw.armor, 0, 100, 0),
    weapons: {},
    current: 'pistol',
    done: Array.isArray(raw.done) ? raw.done.filter((x) => typeof x === 'string').slice(0, 50) : [],
    hour: num(raw.hour, 0, 24, d.hour),
    pos: raw.pos && Number.isFinite(raw.pos.x) && Number.isFinite(raw.pos.z) ? { x: raw.pos.x, z: raw.pos.z, h: Number.isFinite(raw.pos.h) ? raw.pos.h : 0 } : null,
    settings: raw.settings && typeof raw.settings === 'object' ? raw.settings : {},
  };
  const known = ['pistol', 'smg', 'shotgun'];
  for (const k of known) {
    const w = raw.weapons && raw.weapons[k];
    if (w && w.owned) out.weapons[k] = { owned: true, ammo: Math.round(num(w.ammo, 0, 999, 0)) };
  }
  if (!out.weapons.pistol) out.weapons.pistol = { owned: true, ammo: 48 };
  out.current = known.includes(raw.current) && out.weapons[raw.current] ? raw.current : 'pistol';
  return out;
}

export function loadSave(storage = globalThis.localStorage) {
  try {
    const s = storage.getItem(KEY);
    return s ? sanitize(JSON.parse(s)) : null;
  } catch (e) { return null; }
}
export function writeSave(data, storage = globalThis.localStorage) {
  try { storage.setItem(KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
}
export function clearSave(storage = globalThis.localStorage) {
  try { storage.removeItem(KEY); } catch (e) { /* res */ }
}
