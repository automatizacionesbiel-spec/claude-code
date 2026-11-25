// Armes, trets (raigs), danys i explosions.
import { rayCylinder, rayOBB, clamp, dist, TAU } from './util.js';
import { rayWorld, hasLineOfSight } from './city.js';
import { damageVehicle, forwardOf } from './vehicles.js';

export const WEAPONS = {
  pistol:  { name: 'Pistola',     dmg: 30, rpm: 280, mag: 12, pellets: 1, spread: 0.010, range: 120, auto: false, reload: 1.2, price: 0,    ammoPrice: 60,  sound: 'pistol' },
  smg:     { name: 'Metralleta',  dmg: 16, rpm: 760, mag: 30, pellets: 1, spread: 0.032, range: 90,  auto: true,  reload: 1.7, price: 1500, ammoPrice: 120, sound: 'smg' },
  shotgun: { name: 'Escopeta',    dmg: 12, rpm: 70,  mag: 6,  pellets: 9, spread: 0.075, range: 38,  auto: false, reload: 2.2, price: 2500, ammoPrice: 150, sound: 'shotgun' },
};
export const WEAPON_ORDER = ['pistol', 'smg', 'shotgun'];

// Impacte més proper d'un raig. Retorna { t, kind, ped?, vehicle?, head? }.
export function hitscan(game, ox, oy, oz, dx, dy, dz, range, opts = {}) {
  let best = { t: range, kind: 'none' };
  const tw = rayWorld(game.city, ox, oy, oz, dx, dy, dz, range);
  if (tw < best.t) best = { t: tw, kind: 'world' };
  if (dy < -1e-6) { const tg = -oy / dy; if (tg > 0 && tg < best.t) best = { t: tg, kind: 'ground' }; }
  for (const p of game.peds) {
    if (p.state === 'dead' || p === opts.ignorePed) continue;
    const ddx = p.x - ox, ddz = p.z - oz;
    if (ddx * ddx + ddz * ddz > (best.t + 2) * (best.t + 2)) continue;
    const h = rayCylinder(ox, oy, oz, dx, dy, dz, p.x, p.z, p.y, 1.85, 0.42, best.t);
    if (h && h.t < best.t) best = { t: h.t, kind: 'ped', ped: p, head: h.y - p.y > 1.5 };
  }
  for (const v of game.vehicles) {
    if (v === opts.ignoreVehicle || v.exploded) continue;
    const ddx = v.x - ox, ddz = v.z - oz;
    const r = v.spec.len + best.t;
    if (ddx * ddx + ddz * ddz > r * r) continue;
    const t = rayOBB(ox, oy, oz, dx, dy, dz, v.x, v.z, v.heading, v.spec.wid / 2, v.spec.len / 2, v.y, v.y + v.spec.hgt + 0.3, best.t);
    if (t < best.t) best = { t, kind: 'vehicle', vehicle: v };
  }
  if (opts.player && !opts.player.dead && !opts.player.vehicle) {
    const pl = opts.player;
    const h = rayCylinder(ox, oy, oz, dx, dy, dz, pl.x, pl.z, pl.y, 1.8, 0.4, best.t);
    if (h && h.t < best.t) best = { t: h.t, kind: 'player' };
  }
  return best;
}

function rotateDir(dx, dy, dz, spread, rnd) {
  if (spread <= 0) return [dx, dy, dz];
  const a = rnd() * TAU, r = Math.sqrt(rnd()) * spread;
  // Base ortonormal.
  let ux = -dz, uy = 0, uz = dx; const ul = Math.hypot(ux, uz) || 1; ux /= ul; uz /= ul;
  const vx = dy * uz - dz * uy, vy = dz * ux - dx * uz, vz = dx * uy - dy * ux;
  const cx = Math.cos(a) * r, cy = Math.sin(a) * r;
  const nx = dx + ux * cx + vx * cy, ny = dy + uy * cx + vy * cy, nz = dz + uz * cx + vz * cy;
  const l = Math.hypot(nx, ny, nz);
  return [nx / l, ny / l, nz / l];
}

// Dispara l'arma del jugador des de la càmera. Retorna true si ha disparat.
export function playerFire(game) {
  const pl = game.player, w = WEAPONS[pl.current], st = pl.weapons[pl.current];
  if (pl.cool > 0 || pl.reloadT > 0 || pl.dead) return false;
  if (st.clip <= 0) { pl.startReload(); return false; }
  st.clip--; pl.cool = 60 / w.rpm;
  const cam = game.cam;
  const muzzle = pl.muzzle();
  const spreadK = pl.aiming ? 0.6 : 1.4;
  for (let i = 0; i < w.pellets; i++) {
    const [dx, dy, dz] = rotateDir(cam.fx, cam.fy, cam.fz, w.spread * spreadK, () => game.rng.next());
    const hit = hitscan(game, cam.x, cam.y, cam.z, dx, dy, dz, w.range, { ignoreVehicle: pl.vehicle || null });
    const px = cam.x + dx * hit.t, py = cam.y + dy * hit.t, pz = cam.z + dz * hit.t;
    game.effects.tracer(muzzle[0], muzzle[1], muzzle[2], px, py, pz);
    applyHit(game, hit, w.dmg, px, py, pz, 'player', dx, dz);
  }
  game.effects.muzzle(muzzle[0], muzzle[1], muzzle[2]);
  game.audio.gunshot(w.sound, 0);
  game.noise(pl.x, pl.z, 45);
  pl.kick = Math.min(0.12, pl.kick + (w.sound === 'shotgun' ? 0.09 : 0.025));
  if (st.clip === 0 && st.ammo > 0) pl.startReload();
  return true;
}

export function applyHit(game, hit, dmg, px, py, pz, source, dx = 0, dz = 0) {
  if (hit.kind === 'ped') damagePed(game, hit.ped, hit.head ? dmg * 3 : dmg, source, dx, dz);
  else if (hit.kind === 'vehicle') {
    const v = hit.vehicle;
    v.lastHitBy = source;
    game.effects.spark(px, py, pz);
    if (damageVehicle(v, dmg * 0.35)) game.onVehicleDestroyed(v, source);
    game.alarm(px, pz, 25, source === 'player');
    if (source === 'player' && v.driver === 'police') game.crime('hitCop', v.x, v.z, true);
    else if (source === 'player' && v.ai && v.ai.role === 'traffic') game.crime('assault', v.x, v.z);
    if (v.ai) { v.ai.panicT = 6; }
  } else if (hit.kind === 'world' || hit.kind === 'ground') game.effects.spark(px, py, pz, '#cfcfcf');
  else if (hit.kind === 'player') damagePlayer(game, dmg, dx, dz);
}

export function damagePed(game, p, amount, source, dx = 0, dz = 0) {
  if (p.state === 'dead') return;
  p.hp -= amount;
  game.effects.spark(p.x, p.y + 1.2, p.z, '#b02020');
  if (p.hp <= 0) {
    p.state = 'dead'; p.deadT = 0; p.speed = 0;
    p.kx = dx * 3; p.kz = dz * 3;
    if (source === 'player') {
      game.stats.kills++;
      if (p.kind === 'civ') game.crime('kill', p.x, p.z);
      else if (p.kind === 'cop') game.crime('killCop', p.x, p.z, true);
    }
    game.onPedKilled(p, source);
  } else {
    if (p.kind === 'civ') { p.state = 'flee'; p.fleeT = 8; p.threat = { x: game.player.x, z: game.player.z }; }
    if (source === 'player') {
      if (p.kind === 'civ') game.crime('assault', p.x, p.z);
      else if (p.kind === 'cop') game.crime('hitCop', p.x, p.z, true);
    }
  }
  game.alarm(p.x, p.z, 22, source === 'player');
}

export function damagePlayer(game, amount, dx = 0, dz = 0) {
  const pl = game.player;
  if (pl.dead || game.godMode) return;
  if (pl.armor > 0) { const a = Math.min(pl.armor, amount * 0.6); pl.armor -= a; amount -= a; }
  pl.hp -= amount;
  pl.hurtT = 0.35; pl.lastHurtAt = game.time;
  if (pl.hp <= 0) { pl.hp = 0; game.onPlayerDeath(); }
}

export function explode(game, x, z, radius, dmg, source) {
  game.effects.explosion(x, 0, z);
  game.audio.explosion(dist(x, z, game.player.x, game.player.z));
  game.alarm(x, z, 60, source === 'player');
  for (const v of game.vehicles) {
    const d = dist(x, z, v.x, v.z);
    if (d > radius * 1.4 || v.exploded) continue;
    const k = 1 - d / (radius * 1.4);
    v.lastHitBy = source;
    const dx = (v.x - x) / (d || 1), dz = (v.z - z) / (d || 1);
    v.vx += dx * 18 * k; v.vz += dz * 18 * k; v.spin += (game.rng.next() - 0.5) * 3 * k;
    if (damageVehicle(v, dmg * k)) game.onVehicleDestroyed(v, source);
  }
  for (const p of game.peds) {
    if (p.state === 'dead') continue;
    const d = dist(x, z, p.x, p.z);
    if (d < radius * 1.3) damagePed(game, p, dmg * (1 - d / (radius * 1.3)) * 1.2, source, (p.x - x) / (d || 1), (p.z - z) / (d || 1));
  }
  const pl = game.player;
  const dp = dist(x, z, pl.x, pl.z);
  if (!pl.dead && dp < radius * 1.3) damagePlayer(game, dmg * (1 - dp / (radius * 1.3)) * 0.8);
  if (source === 'player') game.crime('explosion', x, z, true);
}

// Tir d'un enemic (policia o banda) contra el jugador.
export function enemyFire(game, p, weapon) {
  const w = WEAPONS[weapon] || WEAPONS.pistol;
  const pl = game.player;
  const tx = pl.vehicle ? pl.vehicle.x : pl.x, tz = pl.vehicle ? pl.vehicle.z : pl.z;
  const d = dist(p.x, p.z, tx, tz);
  const ox = p.x, oy = p.y + 1.45, oz = p.z;
  const ty = (pl.vehicle ? pl.vehicle.y + 0.9 : pl.y + 1.1);
  let dx = tx - ox, dy = ty - oy, dz = tz - oz; const l = Math.hypot(dx, dy, dz) || 1;
  dx /= l; dy /= l; dz /= l;
  const spread = 0.045 + d * 0.0018;
  [dx, dy, dz] = rotateDir(dx, dy, dz, spread, () => game.rng.next());
  const hit = hitscan(game, ox, oy, oz, dx, dy, dz, 110, { ignorePed: p, player: pl.vehicle ? null : pl });
  let tgt = hit;
  if (pl.vehicle && hit.kind !== 'world') {
    // Impacte contra el vehicle del jugador.
    const v = pl.vehicle;
    const t = rayOBB(ox, oy, oz, dx, dy, dz, v.x, v.z, v.heading, v.spec.wid / 2, v.spec.len / 2, v.y, v.y + v.spec.hgt + 0.3, hit.t);
    if (t < hit.t) { tgt = { t, kind: 'myvehicle' }; }
  }
  const px = ox + dx * tgt.t, py = oy + dy * tgt.t, pz = oz + dz * tgt.t;
  game.effects.tracer(ox, oy, oz, px, py, pz);
  game.effects.muzzle(ox, oy, oz);
  game.audio.gunshot(w.sound, dist(ox, oz, pl.x, pl.z));
  if (tgt.kind === 'player') damagePlayer(game, w.dmg * (weapon === 'smg' ? 0.35 : 0.5), dx, dz);
  else if (tgt.kind === 'myvehicle') {
    const v = pl.vehicle;
    game.effects.spark(px, py, pz);
    if (damageVehicle(v, w.dmg * 0.25)) game.onVehicleDestroyed(v, 'enemy');
    damagePlayer(game, w.dmg * 0.12, dx, dz);
  } else if (tgt.kind === 'ped') damagePed(game, tgt.ped, w.dmg * 0.5, 'enemy', dx, dz);
  else if (tgt.kind === 'vehicle') { game.effects.spark(px, py, pz); }
  else game.effects.spark(px, py, pz, '#cfcfcf');
}

export const canSee = (game, ax, az, bx, bz) => hasLineOfSight(game.city, ax, az, bx, bz, 1.6, 1.4);
export { forwardOf, clamp };
