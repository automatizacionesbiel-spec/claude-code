// Física arcade de vehicles. Sense dependències gràfiques: es pot provar des de Node.
// Convenció: endavant = (sin h, cos h); dreta = (cos h, -sin h). x cap a l'est, z cap al sud.
import { clamp, damp } from './util.js';
import { queryBoxes } from './city.js';
import { circleBox } from './util.js';
import { LAND, heightAt } from './city.js';

export const VEHICLE_TYPES = {
  sedan:  { name: 'Sedan',        len: 4.6, wid: 1.9, hgt: 1.45, maxSpeed: 40, accel: 16, brake: 34, steerRate: 2.3, grip: 6.5, hp: 100, mass: 1.0, colors: ['#c0392b', '#2e86c1', '#d4ac0d', '#7f8c8d', '#1e8449', '#e8e8e8'] },
  sports: { name: 'Esportiu',     len: 4.3, wid: 1.95, hgt: 1.2, maxSpeed: 62, accel: 28, brake: 40, steerRate: 2.7, grip: 5.2, hp: 90,  mass: 0.9, colors: ['#e74c3c', '#f1c40f', '#8e44ad', '#16a085', '#ff2fb3', '#1b1b1b'] },
  suv:    { name: 'SUV',          len: 4.9, wid: 2.1, hgt: 1.8,  maxSpeed: 36, accel: 14, brake: 32, steerRate: 2.0, grip: 7.0, hp: 150, mass: 1.4, colors: ['#2c3e50', '#566573', '#873600', '#e5e7e9'] },
  van:    { name: 'Furgoneta',    len: 5.2, wid: 2.1, hgt: 2.3,  maxSpeed: 31, accel: 11, brake: 28, steerRate: 1.8, grip: 7.2, hp: 130, mass: 1.6, colors: ['#ecf0f1', '#f39c12', '#3498db'] },
  taxi:   { name: 'Taxi',         len: 4.6, wid: 1.9, hgt: 1.45, maxSpeed: 40, accel: 16, brake: 34, steerRate: 2.3, grip: 6.5, hp: 100, mass: 1.0, colors: ['#f7c600'] },
  police: { name: 'Policia',      len: 4.7, wid: 1.95, hgt: 1.45, maxSpeed: 50, accel: 22, brake: 38, steerRate: 2.5, grip: 6.2, hp: 130, mass: 1.15, colors: ['#1c1f26'] },
};

let nextId = 1;
export function createVehicleState(type, x, z, heading, color) {
  const spec = VEHICLE_TYPES[type] || VEHICLE_TYPES.sedan;
  return {
    id: nextId++, type, spec, color: color || spec.colors[0],
    x, z, y: heightAt(x, z), heading,
    vx: 0, vz: 0, yawRate: 0, spin: 0, steer: 0, speed: 0, wheelSpin: 0,
    health: spec.hp, dead: false, fuse: 0, exploded: false, removeAt: 0,
    input: { throttle: 0, steer: 0, handbrake: false },
    driver: null,           // 'player' | 'ai' | 'police' | null
    lastImpact: 0, lastHitBy: null, owner: null, mission: false,
  };
}

export function forwardOf(v) { return [Math.sin(v.heading), Math.cos(v.heading)]; }
export function rightOf(v) { return [Math.cos(v.heading), -Math.sin(v.heading)]; }
export const speedKmh = (v) => Math.abs(v.speed) * 3.6;

// Cercles de col·lisió (davanter, centre, darrere).
export function circlesOf(v) {
  const [fx, fz] = forwardOf(v);
  const r = v.spec.wid * 0.5 * 1.02;
  const off = (v.spec.len - v.spec.wid) * 0.5;
  return [off, 0, -off].map((o) => ({ x: v.x + fx * o, z: v.z + fz * o, r, off: o }));
}

export function stepVehicle(v, dt) {
  const spec = v.spec, inp = v.input;

  // 1) Gir: l'autoritat depèn de la velocitat endavant actual. La velocitat del cotxe (inèrcia) no gira amb el cotxe.
  const vf0 = v.vx * Math.sin(v.heading) + v.vz * Math.cos(v.heading);
  v.steer = damp(v.steer, clamp(inp.steer || 0, -1, 1), 9, dt);
  const sp0 = Math.abs(vf0);
  const authority = clamp(sp0 / 4.5, 0, 1) / (1 + (sp0 / spec.maxSpeed) * 1.4);
  const target = v.steer * spec.steerRate * authority * Math.sign(vf0 || 1) * (inp.handbrake ? 1.35 : 1);
  v.yawRate = damp(v.yawRate, v.dead ? 0 : target, 10, dt);
  v.spin *= Math.exp(-3.5 * dt);
  v.heading += (v.yawRate + v.spin) * dt;

  // 2) Descompon la velocitat del món en la base nova (endavant / lateral).
  const fx = Math.sin(v.heading), fz = Math.cos(v.heading), rx = Math.cos(v.heading), rz = -Math.sin(v.heading);
  let vf = v.vx * fx + v.vz * fz;
  let vl = v.vx * rx + v.vz * rz;

  // 3) Motor i frens (longitudinal).
  let throttle = clamp(inp.throttle || 0, -1, 1);
  if (v.dead) throttle = 0;
  let acc;
  if (throttle > 0) {
    acc = vf < -0.5 ? spec.brake * throttle : spec.accel * throttle * (1 - clamp(vf / spec.maxSpeed, 0, 1));
  } else if (throttle < 0) {
    acc = vf > 0.5 ? -spec.brake * -throttle : -spec.accel * 0.6 * -throttle * (1 - clamp(-vf / (spec.maxSpeed * 0.35), 0, 1));
  } else {
    acc = -Math.sign(vf) * Math.min(Math.abs(vf) / dt, 1.2 + Math.abs(vf) * 0.05);
  }
  acc -= vf * 0.04;
  vf += acc * dt;
  if (inp.handbrake) vf *= Math.exp(-1.1 * dt);

  // 4) Adherència lateral: amb fre de mà és molt baixa (derrapatge).
  vl *= Math.exp(-(inp.handbrake ? spec.grip * 0.16 : spec.grip) * dt);

  v.vx = fx * vf + rx * vl;
  v.vz = fz * vf + rz * vl;
  v.x += v.vx * dt;
  v.z += v.vz * dt;
  v.speed = vf;
  v.wheelSpin += (vf / 0.35) * dt;
  v.y = damp(v.y, heightAt(v.x, v.z), 18, dt);
  v.lastImpact = 0;
}

// Col·lisió amb edificis i objectes estàtics. Retorna la velocitat d'impacte màxima.
export function collideStatic(v, city, dt = 0) {
  let maxImpact = 0;
  for (let iter = 0; iter < 2; iter++) {
    for (const c of circlesOf(v)) {
      queryBoxes(city, c.x, c.z, c.r + 0.5, (b) => {
        // Les caixes que només són més baixes que el cotxe (vorera) no existeixen: tot el col·lidible és alt.
        const hit = circleBox(c.x, c.z, c.r, b);
        if (!hit) return;
        c.x += hit.nx * hit.pen; c.z += hit.nz * hit.pen;
        v.x += hit.nx * hit.pen; v.z += hit.nz * hit.pen;
        const vn = v.vx * hit.nx + v.vz * hit.nz;
        if (vn < 0) {
          const j = -(1 + 0.22) * vn;
          v.vx += j * hit.nx; v.vz += j * hit.nz;
          const rightN = hit.nx * Math.cos(v.heading) - hit.nz * Math.sin(v.heading);
          v.spin += clamp(c.off * rightN * j * 0.06, -2.5, 2.5);
          if (-vn > maxImpact) maxImpact = -vn;
        }
      });
    }
  }
  // Límits del món (aigua).
  const r = v.spec.len * 0.4;
  const clampAxis = (pos, lo, hi, axis) => {
    if (pos < lo + r) { v[axis] = lo + r; const vv = axis === 'x' ? 'vx' : 'vz'; if (v[vv] < 0) { maxImpact = Math.max(maxImpact, -v[vv]); v[vv] = 0; } }
    else if (pos > hi - r) { v[axis] = hi - r; const vv = axis === 'x' ? 'vx' : 'vz'; if (v[vv] > 0) { maxImpact = Math.max(maxImpact, v[vv]); v[vv] = 0; } }
  };
  clampAxis(v.x, LAND.minX, LAND.maxX, 'x');
  clampAxis(v.z, LAND.minZ, LAND.maxZ, 'z');
  if (maxImpact > v.lastImpact) v.lastImpact = maxImpact;
  return maxImpact;
}

// Col·lisió entre dos vehicles. Retorna la velocitat relativa d'impacte (0 si no hi ha contacte).
export function collideVehicles(a, b) {
  const dx0 = b.x - a.x, dz0 = b.z - a.z;
  const reach = (a.spec.len + b.spec.len) * 0.5 + 0.5;
  if (dx0 * dx0 + dz0 * dz0 > reach * reach) return 0;
  const ca = circlesOf(a), cb = circlesOf(b);
  const ima = 1 / a.spec.mass, imb = 1 / b.spec.mass;
  let impact = 0;
  for (const p of ca) for (const q of cb) {
    let dx = p.x - q.x, dz = p.z - q.z;
    const d2 = dx * dx + dz * dz, rr = p.r + q.r;
    if (d2 >= rr * rr) continue;
    let d = Math.sqrt(d2);
    if (d < 1e-6) { dx = 1; dz = 0; d = 1e-6; } else { dx /= d; dz /= d; }
    const pen = rr - d;
    const tot = ima + imb;
    a.x += dx * pen * ima / tot; a.z += dz * pen * ima / tot;
    b.x -= dx * pen * imb / tot; b.z -= dz * pen * imb / tot;
    const rvx = a.vx - b.vx, rvz = a.vz - b.vz;
    const vn = rvx * dx + rvz * dz;
    if (vn < 0) {
      const j = (-(1 + 0.3) * vn) / tot;
      a.vx += j * ima * dx; a.vz += j * ima * dz;
      b.vx -= j * imb * dx; b.vz -= j * imb * dz;
      const ra = dx * Math.cos(a.heading) - dz * Math.sin(a.heading);
      const rb = -dx * Math.cos(b.heading) + dz * Math.sin(b.heading);
      a.spin += clamp(p.off * ra * j * ima * 0.05, -2, 2);
      b.spin += clamp(q.off * rb * j * imb * 0.05, -2, 2);
      impact = Math.max(impact, -vn);
    }
  }
  if (impact > 0) { a.lastImpact = Math.max(a.lastImpact, impact); b.lastImpact = Math.max(b.lastImpact, impact); }
  return impact;
}

// Aplica dany per impacte. Retorna true si acaba de morir.
export function applyImpactDamage(v, impact, mass = 1) {
  if (v.dead || impact < 6) return false;
  v.health -= (impact - 5) * 3.2 * mass;
  if (v.health <= 0) { killVehicle(v); return true; }
  return false;
}
export function damageVehicle(v, amount) {
  if (v.dead) return false;
  v.health -= amount;
  if (v.health <= 0) { killVehicle(v); return true; }
  return false;
}
export function killVehicle(v) {
  v.health = 0; v.dead = true; v.fuse = 2.4; v.input = { throttle: 0, steer: 0, handbrake: false };
}
