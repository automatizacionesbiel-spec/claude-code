// Disseny de la ciutat de Palmera Bay: dades pures (sense gràfics) generades amb una llavor fixa.
import { Rng, makeBox, SpatialHash, clamp, rayBox } from './util.js';

export const N = 10;               // blocs per eix
export const BLOCK = 70;           // distància entre línies de carrer
export const HALF_ROAD = 7;        // semiample del carrer
export const SIDEWALK = 3;         // amplada de la vorera
export const ROAD_Y = 0.04;
export const CURB_Y = 0.2;
export const CITY_MAX = N * BLOCK; // 700
export const LAND = { minX: -40, maxX: 790, minZ: -40, maxZ: 750 };
export const SEED = 20260615;

const PALETTES = {
  residential: ['#f4a6a0', '#f7d2a0', '#a6d8d0', '#c8b6e2', '#f0e4b0', '#9ec5ee', '#f2b8d0'],
  downtown: ['#8aa0b8', '#a0aec0', '#6f86a6', '#b8c4d4', '#7d8fa8', '#98a8c0', '#5f7490'],
  hotel: ['#ff8fb1', '#6fe0d0', '#ffd36e', '#9ad0ff', '#ffb08a', '#c1a0ff'],
  port: ['#8c8f94', '#a05a3c', '#5c7a9a', '#b8b0a0', '#6d7d6d'],
};
const CONTAINER_COLORS = ['#c0392b', '#2471a3', '#d68910', '#1e8449', '#7d3c98', '#cb4335', '#117a8b'];
const NEON_TEXTS = ['BAR', 'HOTEL', 'SUSHI', 'CLUB', '24H', 'TAXI', 'PIZZA', 'CASINO', 'SPA', 'TACOS', 'DISCO'];
const NEON_COLORS = ['#ff2fb3', '#25e8ff', '#ffe14d', '#7dff6a', '#ff7a2f'];

const SPECIAL = {
  '4,4': { kind: 'bank', label: 'BANC', color: '#d9d2c0', h: 36, size: 40 },
  '5,2': { kind: 'police', label: 'POLICIA', color: '#3a5a8c', h: 22, size: 40 },
  '2,5': { kind: 'hospital', label: 'HOSPITAL', color: '#e8eef2', h: 30, size: 40 },
  '6,5': { kind: 'gunshop', label: 'ARMERIA', color: '#8a4a34', h: 12, size: 34 },
  '1,7': { kind: 'garage', label: 'GARATGE', color: '#4a4f58', h: 10, size: 36 },
};
const PARKS = new Set(['1,3', '8,6', '3,8', '7,8', '0,5', '6,1']);

export const blockCenter = (bi, bj) => ({ x: bi * BLOCK + BLOCK / 2, z: bj * BLOCK + BLOCK / 2 });
export const intersection = (i, j) => ({ x: i * BLOCK, z: j * BLOCK });
// Cantonada de vorera d'un encreuament (dins el bloc (i,j)).
export const corner = (i, j) => ({ x: i * BLOCK + HALF_ROAD + 1.5, z: j * BLOCK + HALF_ROAD + 1.5 });

export function districtOf(bi, bj) {
  const key = bi + ',' + bj;
  if (SPECIAL[key]) return 'special';
  if (PARKS.has(key)) return 'park';
  if (bj === 0) return 'port';
  if (bi >= 8) return 'hotel';
  if (bi >= 3 && bi <= 6 && bj >= 3 && bj <= 6) return 'downtown';
  return 'residential';
}

// Alçada del terra a (x,z): carrer, vorera (bloc) o terreny exterior.
export function heightAt(x, z) {
  if (x < -HALF_ROAD || z < -HALF_ROAD || x > CITY_MAX + HALF_ROAD || z > CITY_MAX + HALF_ROAD) return 0;
  const lx = x - Math.floor(x / BLOCK) * BLOCK;
  const lz = z - Math.floor(z / BLOCK) * BLOCK;
  const bi = Math.floor(x / BLOCK), bj = Math.floor(z / BLOCK);
  if (bi < 0 || bj < 0 || bi >= N || bj >= N) return ROAD_Y;
  if (lx >= HALF_ROAD && lx <= BLOCK - HALF_ROAD && lz >= HALF_ROAD && lz <= BLOCK - HALF_ROAD) return CURB_Y;
  return ROAD_Y;
}
export const isRoad = (x, z) => heightAt(x, z) === ROAD_Y;

export function generateCity(seed = SEED) {
  const rng = new Rng(seed);
  const city = {
    blocks: [], buildings: [], lamps: [], palms: [], trees: [], signs: [], colliders: [],
    pois: {}, hash: new SpatialHash(20),
  };

  const addBuilding = (b) => { city.buildings.push(b); addCollider(b.cx, b.cz, b.w, b.d, b.h); };
  function addCollider(cx, cz, w, d, h, tag) {
    const box = makeBox(cx, cz, w, d, h);
    if (tag) box.tag = tag;
    city.colliders.push(box);
    city.hash.insertBox(box, box);
  }

  function lots(bi, bj, cols, rows, gap, opts) {
    const x0 = bi * BLOCK + HALF_ROAD + SIDEWALK, z0 = bj * BLOCK + HALF_ROAD + SIDEWALK;
    const inner = BLOCK - 2 * (HALF_ROAD + SIDEWALK); // 50
    const w = (inner - gap * (cols - 1)) / cols, d = (inner - gap * (rows - 1)) / rows;
    for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
      const cx = x0 + c * (w + gap) + w / 2, cz = z0 + r * (d + gap) + d / 2;
      const h = opts.h();
      const b = { cx, cz, w: w - rng.range(0, 3), d: d - rng.range(0, 3), h, color: rng.pick(opts.palette), kind: opts.kind, windows: true };
      addBuilding(b);
      if (rng.chance(opts.neon) && h > 8) {
        // Rètol de neó a la façana sud (+z), mirant cap al carrer.
        city.signs.push({
          x: b.cx + rng.range(-b.w / 4, b.w / 4), y: Math.min(h * 0.45, 9 + rng.range(0, 4)), z: b.cz + b.d / 2 + 0.06,
          w: Math.min(b.w * 0.6, 9), h: 2.2, text: rng.pick(NEON_TEXTS), color: rng.pick(NEON_COLORS), neon: true,
        });
      }
    }
  }

  for (let bi = 0; bi < N; bi++) for (let bj = 0; bj < N; bj++) {
    const kind = districtOf(bi, bj);
    const { x: cx, z: cz } = blockCenter(bi, bj);
    city.blocks.push({ bi, bj, cx, cz, kind });
    const key = bi + ',' + bj;

    if (kind === 'special') {
      const s = SPECIAL[key];
      addBuilding({ cx, cz, w: s.size, d: s.size, h: s.h, color: s.color, kind: s.kind, windows: s.kind !== 'garage', landmark: true });
      city.signs.push({ x: cx, y: s.h * 0.55, z: cz + s.size / 2 + 0.08, w: Math.min(s.size * 0.8, 26), h: 4, text: s.label, color: '#ffffff', bg: s.kind === 'police' ? '#1f3d7a' : s.kind === 'hospital' ? '#c0392b' : '#222831', neon: false });
      const entrance = { x: cx, z: cz + s.size / 2 + 4 };
      city.pois[s.kind] = entrance;
    } else if (kind === 'park') {
      // Parc: font central i arbres.
      addCollider(cx, cz, 6, 6, 1.2, 'fountain');
      city.fountain = city.fountain || [];
      city.fountain.push({ x: cx, z: cz });
      for (let t = 0; t < 14; t++) {
        const x = cx + rng.range(-20, 20), z = cz + rng.range(-20, 20);
        if (Math.hypot(x - cx, z - cz) < 7) continue;
        city.trees.push({ x, z, s: rng.range(0.9, 1.5) });
        addCollider(x, z, 0.8, 0.8, 6, 'tree');
      }
    } else if (kind === 'port') {
      // Magatzems + piles de contenidors.
      lots(bi, bj, 2, 1, 4, { palette: PALETTES.port, h: () => rng.range(8, 13), kind: 'warehouse', neon: 0 });
      // Contenidors apilats al carrer del moll (z<0) i a l'interior.
      for (let k = 0; k < 5; k++) {
        const x = bi * BLOCK + HALF_ROAD + SIDEWALK + 5 + k * 9;
        const z = -22 - rng.range(0, 6);
        const stack = rng.int(1, 3);
        city.buildings.push({ cx: x, cz: z, w: 8.4, d: 2.5, h: 2.6 * stack, color: rng.pick(CONTAINER_COLORS), kind: 'container', windows: false });
        addCollider(x, z, 8.4, 2.5, 2.6 * stack);
      }
    } else if (kind === 'downtown') {
      const pick = rng.next();
      if (pick < 0.3) lots(bi, bj, 1, 1, 0, { palette: PALETTES.downtown, h: () => rng.range(70, 125), kind: 'tower', neon: 0.4 });
      else if (pick < 0.65) lots(bi, bj, 2, 1, 6, { palette: PALETTES.downtown, h: () => rng.range(45, 95), kind: 'tower', neon: 0.5 });
      else lots(bi, bj, 2, 2, 5, { palette: PALETTES.downtown, h: () => rng.range(28, 75), kind: 'tower', neon: 0.4 });
    } else if (kind === 'hotel') {
      lots(bi, bj, rng.chance(0.5) ? 1 : 2, rng.chance(0.5) ? 2 : 1, 8, { palette: PALETTES.hotel, h: () => rng.range(22, 52), kind: 'hotel', neon: 0.7 });
    } else {
      lots(bi, bj, 2, 2, 4, { palette: PALETTES.residential, h: () => rng.range(8, 24), kind: 'residential', neon: 0.12 });
    }
  }

  // Fanals: dos per costat de bloc, a la vorera.
  for (const blk of city.blocks) {
    const x0 = blk.bi * BLOCK + HALF_ROAD, z0 = blk.bj * BLOCK + HALF_ROAD, s = BLOCK - 2 * HALF_ROAD;
    for (const f of [0.25, 0.75]) {
      city.lamps.push({ x: x0 + s * f, z: z0 + 1.2, rot: 0 });
      city.lamps.push({ x: x0 + s * f, z: z0 + s - 1.2, rot: Math.PI });
      city.lamps.push({ x: x0 + 1.2, z: z0 + s * f, rot: Math.PI / 2 });
      city.lamps.push({ x: x0 + s - 1.2, z: z0 + s * f, rot: -Math.PI / 2 });
    }
  }
  for (const l of city.lamps) addCollider(l.x, l.z, 0.5, 0.5, 7, 'lamp');

  // Palmeres a la vorera dels barris turístics i algunes als residencials.
  for (const blk of city.blocks) {
    if (blk.kind === 'special' || blk.kind === 'port') continue;
    const dense = blk.kind === 'hotel' ? 7 : blk.kind === 'residential' ? 2 : blk.kind === 'park' ? 0 : 1;
    const x0 = blk.bi * BLOCK + HALF_ROAD, z0 = blk.bj * BLOCK + HALF_ROAD, s = BLOCK - 2 * HALF_ROAD;
    for (let k = 0; k < dense; k++) {
      const side = rng.int(0, 3), t = rng.range(0.1, 0.9);
      const p = side === 0 ? [x0 + s * t, z0 + 2.2] : side === 1 ? [x0 + s * t, z0 + s - 2.2] : side === 2 ? [x0 + 2.2, z0 + s * t] : [x0 + s - 2.2, z0 + s * t];
      if (city.lamps.some((l) => Math.hypot(l.x - p[0], l.z - p[1]) < 3)) continue;
      city.palms.push({ x: p[0], z: p[1], s: rng.range(0.9, 1.35), r: rng.range(0, 6.28) });
      addCollider(p[0], p[1], 0.7, 0.7, 7, 'palm');
    }
  }
  // Platja: palmeres a la franja de sorra i parasols.
  city.beach = { minX: CITY_MAX + HALF_ROAD, maxX: LAND.maxX, minZ: -HALF_ROAD, maxZ: CITY_MAX + HALF_ROAD };
  for (let k = 0; k < 40; k++) {
    const x = rng.range(city.beach.minX + 4, city.beach.minX + 30), z = rng.range(10, CITY_MAX - 10);
    city.palms.push({ x, z, s: rng.range(1, 1.5), r: rng.range(0, 6.28) });
    addCollider(x, z, 0.7, 0.7, 7, 'palm');
  }
  for (let k = 0; k < 24; k++) {
    const x = rng.range(city.beach.minX + 35, city.beach.minX + 65), z = rng.range(10, CITY_MAX - 10);
    city.beach.umbrellas = city.beach.umbrellas || [];
    city.beach.umbrellas.push({ x, z, c: rng.pick(['#ff4d6d', '#ffd23f', '#3bceac', '#4cc9f0', '#f77f00']) });
  }

  // Punts d'interès addicionals.
  const sp = intersection(3, 7);
  city.pois.spawn = { x: sp.x, z: sp.z };
  city.pois.bounds = LAND;
  city.pois.shopMarker = city.pois.gunshop;
  return city;
}

// Consulta de caixes (col·lisió) i raigs contra edificis.
export function queryBoxes(city, cx, cz, r, cb) {
  city.hash.query(cx - r, cz - r, cx + r, cz + r, cb);
}
// Distància del primer impacte d'un raig amb edificis (Infinity si res). Usa el hash al llarg del raig.
export function rayWorld(city, ox, oy, oz, dx, dy, dz, maxT) {
  let best = Infinity;
  const ex = ox + dx * maxT, ez = oz + dz * maxT;
  city.hash.query(Math.min(ox, ex) - 1, Math.min(oz, ez) - 1, Math.max(ox, ex) + 1, Math.max(oz, ez) + 1, (b) => {
    const t = rayBox(ox, oy, oz, dx, dy, dz, b, Math.min(maxT, best));
    if (t < best) best = t;
  });
  return best;
}
// Línia de visió entre dos punts (a alçada d'ulls).
export function hasLineOfSight(city, ax, az, bx, bz, ay = 1.6, by = 1.6) {
  const dx = bx - ax, dz = bz - az, dy = by - ay;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.01) return true;
  return rayWorld(city, ax, ay, az, dx / len, dy / len, dz / len, len - 0.2) === Infinity;
}
export function clampToLand(x, z, margin = 0.5) {
  return [clamp(x, LAND.minX + margin, LAND.maxX - margin), clamp(z, LAND.minZ + margin, LAND.maxZ - margin)];
}
