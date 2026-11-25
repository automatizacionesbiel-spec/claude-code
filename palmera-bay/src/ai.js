// IA: navegació de trànsit per carrers, vianants per voreres i policia. La part de graf és pura i es pot provar.
import { clamp, angleDiff, dist, dist2, circleBox } from './util.js';
import { N, BLOCK, queryBoxes, hasLineOfSight, heightAt } from './city.js';

export const LANE = 3.5;
export const PO = 8.2; // desplaçament del carril de vianants respecte a la línia del carrer

// ------------------------------------------------------------ navegació de cotxes
export function laneCoord(line, axis, dir, off = LANE) {
  if (axis === 'x') return line * BLOCK + (dir > 0 ? off : -off);
  return line * BLOCK + (dir > 0 ? -off : off);
}
export function headingOf(axis, dir) { return axis === 'x' ? (dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (dir > 0 ? 0 : Math.PI); }
export function nextIntersection(p, dir) { return dir > 0 ? Math.floor(p / BLOCK + 1e-6) + 1 : Math.ceil(p / BLOCK - 1e-6) - 1; }

// Opcions en el proper encreuament (índex nextI al llarg de l'eix actual).
export function turnOptions(nav, nextI) {
  const { axis: a, dir: d, line: L } = nav;
  const opts = [];
  const oa = a === 'x' ? 'z' : 'x';
  if (nextI + d >= 0 && nextI + d <= N) opts.push({ type: 'straight', axis: a, dir: d, line: L, dest: a === 'x' ? [nextI + d, L] : [L, nextI + d] });
  const leftDir = a === 'x' ? -d : d, rightDir = -leftDir;
  for (const [type, nd] of [['left', leftDir], ['right', rightDir]]) {
    const nl = L + nd;
    if (nl >= 0 && nl <= N) opts.push({ type, axis: oa, dir: nd, line: nextI, dest: oa === 'z' ? [nextI, nl] : [nl, nextI] });
  }
  return opts;
}

// mode: 'cruise' (aleatori), 'chase' (cap a target), 'flee' (lluny de target). target: [ix, iz].
export function chooseTurn(nav, nextI, mode, target, rnd) {
  const opts = turnOptions(nav, nextI);
  if (!opts.length) return null;
  if (mode === 'chase' || mode === 'flee') {
    const sgn = mode === 'chase' ? 1 : -1;
    let best = null, bs = Infinity;
    for (const o of opts) {
      const s = sgn * (Math.abs(o.dest[0] - target[0]) + Math.abs(o.dest[1] - target[1])) + rnd() * 0.5;
      if (s < bs) { bs = s; best = o; }
    }
    return best;
  }
  const w = opts.map((o) => (o.type === 'straight' ? 0.6 : 0.2));
  let r = rnd() * w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < opts.length; i++) { r -= w[i]; if (r <= 0) return opts[i]; }
  return opts[0];
}

export function navFromPose(x, z, heading) {
  // L'eix amb què el cotxe està més alineat i la línia de carrer més propera.
  const alongX = Math.abs(Math.sin(heading)) > Math.abs(Math.cos(heading));
  if (alongX) return { axis: 'x', dir: Math.sin(heading) > 0 ? 1 : -1, line: clamp(Math.round(z / BLOCK), 0, N), decided: -1, pending: null };
  return { axis: 'z', dir: Math.cos(heading) > 0 ? 1 : -1, line: clamp(Math.round(x / BLOCK), 0, N), decided: -1, pending: null };
}

// ----------------------------------------------------------- vianants (graf de voreres)
export const nodeCoord = (k) => { const i = k >> 1; return k % 2 === 0 ? i * BLOCK - PO : i * BLOCK + PO; };
export function pedNeighbors(a, b) {
  const r = [];
  if (a > 1) r.push([a - 1, b]);
  if (a < 20) r.push([a + 1, b]);
  if (b > 1) r.push([a, b - 1]);
  if (b < 20) r.push([a, b + 1]);
  return r;
}

// ----------------------------------------------------------------- utilitats d'IA
export function pickSpawnOnRoad(rng, px, pz, minD, maxD, tries = 12) {
  for (let t = 0; t < tries; t++) {
    const axis = rng.chance(0.5) ? 'x' : 'z';
    const dir = rng.chance(0.5) ? 1 : -1;
    const line = rng.int(0, N);
    const p = rng.range(10, N * BLOCK - 10);
    // Evita parar just a un encreuament.
    const m = ((p % BLOCK) + BLOCK) % BLOCK;
    if (m < 14 || m > BLOCK - 14) continue;
    const q = laneCoord(line, axis, dir);
    const x = axis === 'x' ? p : q, z = axis === 'x' ? q : p;
    const d = dist(x, z, px, pz);
    if (d >= minD && d <= maxD) return { x, z, axis, dir, line, heading: headingOf(axis, dir) };
  }
  return null;
}

export function pushOutOfBoxes(city, o, r) {
  for (let it = 0; it < 2; it++) queryBoxes(city, o.x, o.z, r + 0.2, (b) => {
    const h = circleBox(o.x, o.z, r, b);
    if (h) { o.x += h.nx * h.pen; o.z += h.nz * h.pen; }
  });
}

// Detecta obstacles davant d'un vehicle (altres vehicles i vianants). Retorna { gap, speed } o null.
export function frontObstacle(game, v, lookahead) {
  const fx = Math.sin(v.heading), fz = Math.cos(v.heading), rx = Math.cos(v.heading), rz = -Math.sin(v.heading);
  const half = v.spec.wid / 2 + 1.0;
  let best = null;
  const consider = (dx, dz, w, speed) => {
    const fwd = dx * fx + dz * fz, lat = dx * rx + dz * rz;
    if (fwd <= 0 || fwd > lookahead || Math.abs(lat) > half + w) return;
    const gap = fwd - v.spec.len / 2;
    if (!best || gap < best.gap) best = { gap, speed };
  };
  for (const o of game.vehicles) {
    if (o === v || o.dead && o.exploded) continue;
    const dx = o.x - v.x, dz = o.z - v.z;
    if (dx * dx + dz * dz > lookahead * lookahead * 1.5) continue;
    consider(dx, dz, o.spec.wid / 2 - 0.4, o.dead ? 0 : o.speed);
  }
  for (const p of game.peds) {
    if (p.state === 'dead') continue;
    const dx = p.x - v.x, dz = p.z - v.z;
    if (dx * dx + dz * dz > lookahead * lookahead) continue;
    consider(dx, dz, 0.2, 0);
  }
  const pl = game.player;
  if (!pl.vehicle && !pl.dead) consider(pl.x - v.x, pl.z - v.z, 0.2, 0);
  return best;
}

// Calcula els controls d'un vehicle controlat per la IA. Retorna sense efectes laterals excepte v.input i v.nav.
export function driveAI(game, v, dt) {
  const ai = v.ai, inp = v.input;
  if (v.dead) { inp.throttle = 0; inp.steer = 0; inp.handbrake = false; return; }
  const nav = v.nav, rnd = () => game.rng.next();
  const mode = ai.mode;
  const p = nav.axis === 'x' ? v.x : v.z;
  const q = nav.axis === 'x' ? v.z : v.x;
  const nextI = nextIntersection(p, nav.dir);
  const dNext = Math.abs(nextI * BLOCK - p);
  const speed = Math.abs(v.speed);

  // Decisió al proper encreuament.
  if (nav.decided !== nextI && dNext < 26) {
    nav.decided = nextI;
    const tgt = mode === 'cruise' ? null : [clamp(Math.round(ai.tx / BLOCK), 0, N), clamp(Math.round(ai.tz / BLOCK), 0, N)];
    nav.pending = chooseTurn(nav, nextI, mode, tgt, rnd);
  }
  if (nav.pending && nav.pending.type !== 'straight' && dNext < 10.5) {
    nav.axis = nav.pending.axis; nav.dir = nav.pending.dir; nav.line = nav.pending.line; nav.pending = null; nav.decided = -1;
  }
  const turning = nav.pending && nav.pending.type !== 'straight' && dNext < 30;

  // Carrot de persecució (pure pursuit).
  const look = clamp(6 + speed * 0.4, 7, 17);
  let cx, cz;
  const chaseDirect = ai.direct;
  if (chaseDirect) {
    cx = ai.tx + (ai.tvx || 0) * 0.4; cz = ai.tz + (ai.tvz || 0) * 0.4;
  } else {
    const lane = laneCoord(nav.line, nav.axis, nav.dir, ai.laneOff ?? LANE);
    if (nav.axis === 'x') { cx = (v.x) + nav.dir * look; cz = lane; } else { cx = lane; cz = v.z + nav.dir * look; }
  }
  const desired = Math.atan2(cx - v.x, cz - v.z);
  inp.steer = clamp(angleDiff(desired, v.heading) * 2.0, -1, 1);
  inp.handbrake = false;

  // Velocitat objectiu.
  let target = ai.cruise;
  if (turning) target = Math.min(target, 9);
  if (Math.abs(inp.steer) > 0.6) target = Math.min(target, 10);
  const ob = ai.ignoreObstacles ? null : frontObstacle(game, v, 8 + speed * 1.1);
  if (ob) {
    const safe = Math.max(0, ob.speed) + Math.max(0, (ob.gap - 3.2) * 0.8);
    target = Math.min(target, safe);
    if (ob.gap < 2.2 && speed > 1) target = 0;
  }
  inp.throttle = clamp((target - v.speed) * 0.6, -1, 1);
  if (target < 0.5 && speed < 1.2) inp.throttle = 0;

  // Encallat: marxa enrere un moment.
  if (ai.reverseT > 0) {
    ai.reverseT -= dt; inp.throttle = -0.8; inp.steer = -inp.steer;
  } else {
    if (speed < 0.6 && target > 2) ai.stuckT += dt; else ai.stuckT = Math.max(0, ai.stuckT - dt);
    if (ai.stuckT > 3.5) { ai.stuckT = 0; ai.reverseT = 1.3; ai.stuckCount++; }
  }
}

// --------------------------------------------------------------------- vianants
export function updatePedWalk(game, p, dt) {
  const speed = p.state === 'flee' ? 4.6 : p.walkSpeed;
  // El node destí és (p.ta, p.tb); l'anterior, (p.pa, p.pb).
  const gx = nodeCoord(p.ta), gz = nodeCoord(p.tb);
  const dx = gx - p.x, dz = gz - p.z, d = Math.hypot(dx, dz);
  if (d < 0.4) {
    // Tria el següent node.
    const nb = pedNeighbors(p.ta, p.tb);
    let choices = nb.filter((n) => !(n[0] === p.pa && n[1] === p.pb));
    if (!choices.length) choices = nb;
    let pick;
    if (p.state === 'flee' && p.threat) {
      pick = choices.reduce((best, n) => {
        const dd = dist2(nodeCoord(n[0]), nodeCoord(n[1]), p.threat.x, p.threat.z);
        return !best || dd > best.dd ? { n, dd } : best;
      }, null).n;
    } else {
      // Prefereix seguir recte.
      const dirA = Math.sign(p.ta - p.pa), dirB = Math.sign(p.tb - p.pb);
      const straight = choices.find((n) => Math.sign(n[0] - p.ta) === dirA && Math.sign(n[1] - p.tb) === dirB && (dirA || dirB));
      pick = straight && game.rng.chance(0.62) ? straight : choices[Math.floor(game.rng.next() * choices.length)];
    }
    p.pa = p.ta; p.pb = p.tb; p.ta = pick[0]; p.tb = pick[1];
    return;
  }
  p.heading = Math.atan2(dx, dz);
  const k = Math.min(speed * dt, d);
  p.x += (dx / d) * k; p.z += (dz / d) * k;
  p.speed = speed;
}
