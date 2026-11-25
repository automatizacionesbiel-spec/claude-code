// Utilitats matemàtiques i de col·lisió sense dependències (es poden provar des de Node).

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const damp = (cur, target, lambda, dt) => lerp(cur, target, 1 - Math.exp(-lambda * dt));
export const TAU = Math.PI * 2;

export function wrapAngle(a) {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
}
export const angleDiff = (target, cur) => wrapAngle(target - cur);

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export class Rng {
  constructor(seed = 1) { this.f = mulberry32(seed); }
  next() { return this.f(); }
  range(a, b) { return a + (b - a) * this.f(); }
  int(a, b) { return Math.floor(this.range(a, b + 1)); }
  pick(arr) { return arr[Math.floor(this.f() * arr.length) % arr.length]; }
  chance(p) { return this.f() < p; }
}

// Caixa alineada amb els eixos: { minX, maxX, minZ, maxZ, h } (h = alçada des del terra).
export function makeBox(cx, cz, w, d, h) {
  return { minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h };
}

// Cercle contra caixa. Retorna { nx, nz, pen } (normal cap a fora de la caixa) o null.
export function circleBox(cx, cz, r, b) {
  const px = clamp(cx, b.minX, b.maxX);
  const pz = clamp(cz, b.minZ, b.maxZ);
  let dx = cx - px, dz = cz - pz;
  const d2 = dx * dx + dz * dz;
  if (d2 > r * r) return null;
  if (d2 > 1e-9) {
    const d = Math.sqrt(d2);
    return { nx: dx / d, nz: dz / d, pen: r - d };
  }
  // El centre és dins la caixa: surt pel costat més proper.
  const l = cx - b.minX, rr = b.maxX - cx, t = cz - b.minZ, bt = b.maxZ - cz;
  const m = Math.min(l, rr, t, bt);
  if (m === l) return { nx: -1, nz: 0, pen: r + l };
  if (m === rr) return { nx: 1, nz: 0, pen: r + rr };
  if (m === t) return { nx: 0, nz: -1, pen: r + t };
  return { nx: 0, nz: 1, pen: r + bt };
}

// Raig 3D contra caixa (y entre 0 i h). Retorna t (distància) o Infinity.
export function rayBox(ox, oy, oz, dx, dy, dz, b, maxT = Infinity) {
  let t0 = 0, t1 = maxT;
  const slabs = [[ox, dx, b.minX, b.maxX], [oy, dy, 0, b.h], [oz, dz, b.minZ, b.maxZ]];
  for (let i = 0; i < 3; i++) {
    const [o, d, lo, hi] = slabs[i];
    if (Math.abs(d) < 1e-9) {
      if (o < lo || o > hi) return Infinity;
    } else {
      let a = (lo - o) / d, c = (hi - o) / d;
      if (a > c) { const s = a; a = c; c = s; }
      if (a > t0) t0 = a;
      if (c < t1) t1 = c;
      if (t0 > t1) return Infinity;
    }
  }
  return t0;
}

// Raig contra cilindre vertical (peus a y0, alçada h, radi r). Retorna { t, y } o null.
export function rayCylinder(ox, oy, oz, dx, dy, dz, cx, cz, y0, h, r, maxT = Infinity) {
  const fx = ox - cx, fz = oz - cz;
  const a = dx * dx + dz * dz;
  if (a < 1e-9) return null;
  const b = 2 * (fx * dx + fz * dz);
  const c = fx * fx + fz * fz - r * r;
  const disc = b * b - 4 * a * c;
  if (disc < 0) return null;
  const s = Math.sqrt(disc);
  let t = (-b - s) / (2 * a);
  if (t < 0) t = (-b + s) / (2 * a);
  if (t < 0 || t > maxT) return null;
  const y = oy + dy * t;
  if (y < y0 || y > y0 + h) return null;
  return { t, y };
}

// Raig contra rectangle orientat (vehicle). hx, hz: semieixos locals; heading: angle (forward = (sin h, cos h)).
export function rayOBB(ox, oy, oz, dx, dy, dz, cx, cz, heading, hx, hz, y0, y1, maxT = Infinity) {
  const s = Math.sin(heading), c = Math.cos(heading);
  // Eix local "dret" = (cos h, -sin h), "endavant" = (sin h, cos h)
  const lox = (ox - cx) * c - (oz - cz) * s;
  const loz = (ox - cx) * s + (oz - cz) * c;
  const ldx = dx * c - dz * s;
  const ldz = dx * s + dz * c;
  return rayBox(lox + hx, oy - y0, loz + hz, ldx, dy, ldz, { minX: 0, maxX: 2 * hx, minZ: 0, maxZ: 2 * hz, h: y1 - y0 }, maxT);
}

// Hash espacial per a consultes de caixes/objectes ràpides.
export class SpatialHash {
  constructor(cell = 20) { this.cell = cell; this.map = new Map(); }
  key(i, j) { return i * 73856093 ^ j * 19349663; }
  insertBox(obj, b) {
    const c = this.cell;
    const i0 = Math.floor(b.minX / c), i1 = Math.floor(b.maxX / c);
    const j0 = Math.floor(b.minZ / c), j1 = Math.floor(b.maxZ / c);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const k = this.key(i, j);
      let a = this.map.get(k);
      if (!a) { a = []; this.map.set(k, a); }
      a.push(obj);
    }
  }
  // Crida cb(obj) per a objectes en les cel·les que toquen el rectangle. Pot repetir objectes.
  query(minX, minZ, maxX, maxZ, cb) {
    const c = this.cell;
    const i0 = Math.floor(minX / c), i1 = Math.floor(maxX / c);
    const j0 = Math.floor(minZ / c), j1 = Math.floor(maxZ / c);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const a = this.map.get(this.key(i, j));
      if (a) for (let n = 0; n < a.length; n++) cb(a[n]);
    }
  }
}

export const dist2 = (ax, az, bx, bz) => (ax - bx) * (ax - bx) + (az - bz) * (az - bz);
export const dist = (ax, az, bx, bz) => Math.sqrt(dist2(ax, az, bx, bz));
export const fmtMoney = (n) => '$' + Math.round(n).toLocaleString('en-US');
export const isFiniteNum = (...v) => v.every((x) => Number.isFinite(x));
