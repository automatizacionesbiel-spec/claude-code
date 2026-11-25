import test from 'node:test';
import assert from 'node:assert/strict';
import * as U from '../src/util.js';
import * as C from '../src/city.js';
import * as V from '../src/vehicles.js';

const city = C.generateCity();

test('util: angles i RNG deterministes', () => {
  assert.ok(Math.abs(U.wrapAngle(7) - (7 - 2 * Math.PI)) < 1e-9);
  assert.ok(Math.abs(U.angleDiff(0.1, -0.1) - 0.2) < 1e-9);
  const a = new U.Rng(5), b = new U.Rng(5);
  for (let i = 0; i < 20; i++) assert.equal(a.next(), b.next());
});

test('util: raig contra caixa, cilindre i OBB', () => {
  const box = U.makeBox(10, 0, 4, 4, 5);
  assert.ok(Math.abs(U.rayBox(0, 1, 0, 1, 0, 0, box) - 8) < 1e-9);
  assert.equal(U.rayBox(0, 6, 0, 1, 0, 0, box), Infinity);       // per sobre
  assert.equal(U.rayBox(0, 1, 5, 1, 0, 0, box), Infinity);       // al costat
  const cyl = U.rayCylinder(0, 1, 0, 1, 0, 0, 10, 0, 0, 1.8, 0.4);
  assert.ok(Math.abs(cyl.t - 9.6) < 1e-9);
  assert.equal(U.rayCylinder(0, 3, 0, 1, 0, 0, 10, 0, 0, 1.8, 0.4), null);
  const t = U.rayOBB(0, 0.5, 0, 1, 0, 0, 10, 0, Math.PI / 2, 1, 2.3, 0, 1.5);
  assert.ok(Math.abs(t - 7.7) < 1e-9, 'OBB orientat 90°: mig llarg al llarg de x, rebut ' + t);
});

test('util: cercle contra caixa, també amb el centre a dins', () => {
  const b = U.makeBox(0, 0, 10, 10, 5);
  const out = U.circleBox(6, 0, 2, b);
  assert.deepEqual([out.nx, out.nz], [1, 0]);
  assert.ok(Math.abs(out.pen - 1) < 1e-9);
  assert.equal(U.circleBox(9, 0, 2, b), null);
  const inside = U.circleBox(4.5, 0, 1, b);
  assert.deepEqual([inside.nx, inside.nz], [1, 0]);
});

test('ciutat: determinista i coherent', () => {
  const again = C.generateCity();
  assert.equal(again.buildings.length, city.buildings.length);
  assert.equal(again.buildings[10].h, city.buildings[10].h);
  assert.ok(city.buildings.length > 250, 'prou edificis: ' + city.buildings.length);
  for (const k of ['bank', 'police', 'hospital', 'gunshop', 'garage', 'spawn']) assert.ok(city.pois[k], 'POI ' + k);
  for (const b of city.buildings) {
    assert.ok(b.w > 2 && b.d > 2 && b.h > 2, 'dimensions raonables');
    assert.ok(Number.isFinite(b.cx + b.cz));
  }
});

test('ciutat: els carrers i els POIs estan lliures de col·lisions', () => {
  const blocked = (x, z, r = 1) => { let hit = false; C.queryBoxes(city, x, z, r, (b) => { if (U.circleBox(x, z, r, b)) hit = true; }); return hit; };
  for (let i = 0; i <= 10; i++) for (let j = 0; j <= 10; j++) assert.ok(!blocked(i * 70, j * 70, 2), `encreuament ${i},${j} lliure`);
  for (const k of ['bank', 'police', 'hospital', 'gunshop', 'garage', 'spawn']) assert.ok(!blocked(city.pois[k].x, city.pois[k].z, 1.5), `POI ${k} lliure`);
  // Els carrers a mig tram no tenen res al mig (només voreres tenen fanals).
  for (let i = 0; i <= 10; i++) for (const t of [20, 35, 50]) assert.ok(!blocked(i * 70, t, 1.2), 'carrer x=' + i * 70 + ' lliure a z=' + t);
});

test('ciutat: alçada del terra i línia de visió', () => {
  assert.equal(C.heightAt(0, 0), C.ROAD_Y);
  assert.equal(C.heightAt(35, 35), C.CURB_Y);
  assert.equal(C.heightAt(-30, -30), 0);
  assert.ok(C.hasLineOfSight(city, 0, 20, 0, 60), 'pel carrer es veu');
  const b = city.buildings.find((x) => x.kind === 'tower');
  assert.ok(!C.hasLineOfSight(city, b.cx - b.w, b.cz, b.cx + b.w, b.cz, 1.6, 1.6), 'a través d\'una torre no es veu');
});

function drive(v, seconds, input, dt = 1 / 60) {
  v.input = input;
  for (let t = 0; t < seconds; t += dt) { V.stepVehicle(v, dt); V.collideStatic(v, city, dt); }
}

test('vehicle: accelera, arriba a prop de la velocitat màxima i frena', () => {
  const v = V.createVehicleState('sedan', 0, 100, 0); // cap a +z pel carrer x=0
  v.heading = Math.PI / 2; v.x = 5; v.z = 70; v.vx = 0;
  // Carrer horitzontal z=70 de x=5 cap a +x
  drive(v, 12, { throttle: 1, steer: 0, handbrake: false });
  assert.ok(v.speed > v.spec.maxSpeed * 0.8, 'velocitat ' + v.speed);
  assert.ok(v.speed <= v.spec.maxSpeed + 0.5);
  drive(v, 4, { throttle: -1, steer: 0, handbrake: false });
  assert.ok(v.speed < 5, 'frena: ' + v.speed);
});

test('vehicle: gira, i amb fre de mà derrapa (velocitat lateral)', () => {
  const mk = () => { const v = V.createVehicleState('sports', 140, 140, 0); return v; };
  const a = mk();
  drive(a, 3, { throttle: 1, steer: 0, handbrake: false });
  const h0 = a.heading;
  drive(a, 1, { throttle: 1, steer: 1, handbrake: false });
  assert.ok(a.heading - h0 > 0.4, 'gira a la dreta (heading creix): ' + (a.heading - h0));
  const b = mk();
  drive(b, 3, { throttle: 1, steer: 0, handbrake: false });
  drive(b, 0.6, { throttle: 0, steer: 1, handbrake: true });
  const [rx, rz] = V.rightOf(b);
  const lat = Math.abs(b.vx * rx + b.vz * rz);
  const c = mk();
  drive(c, 3, { throttle: 1, steer: 0, handbrake: false });
  drive(c, 0.6, { throttle: 0, steer: 1, handbrake: false });
  const [cx, cz] = V.rightOf(c);
  const lat2 = Math.abs(c.vx * cx + c.vz * cz);
  assert.ok(lat > lat2 + 0.5, `fre de mà derrapa més (${lat.toFixed(2)} vs ${lat2.toFixed(2)})`);
});

test('vehicle: no travessa edificis, es queda fora i rep dany', () => {
  const b = city.buildings.find((x) => x.kind === 'residential');
  const v = V.createVehicleState('sedan', b.cx, b.cz - b.d / 2 - 25, 0);
  v.heading = 0; // cap a +z, directe a l'edifici
  v.vx = 0; v.vz = 25; v.speed = 25;
  let maxImpact = 0;
  v.input = { throttle: 1, steer: 0, handbrake: false };
  for (let i = 0; i < 240; i++) { V.stepVehicle(v, 1 / 60); maxImpact = Math.max(maxImpact, V.collideStatic(v, city)); }
  const inside = U.circleBox(v.x, v.z, 0.5, U.makeBox(b.cx, b.cz, b.w, b.d, b.h));
  assert.equal(inside, null, 'el centre del cotxe no és a dins de l\'edifici');
  assert.ok(maxImpact > 5, 'impacte detectat: ' + maxImpact);
  V.applyImpactDamage(v, maxImpact);
  assert.ok(v.health < v.spec.hp, 'dany aplicat');
});

test('vehicle: col·lisió entre cotxes els separa i intercanvia moment', () => {
  const a = V.createVehicleState('sedan', 100, 70, Math.PI / 2);
  const b = V.createVehicleState('sedan', 105, 70, Math.PI / 2);
  a.vx = 20; a.vz = 0;
  let impact = 0;
  for (let i = 0; i < 30; i++) { V.stepVehicle(a, 1 / 60); V.stepVehicle(b, 1 / 60); impact = Math.max(impact, V.collideVehicles(a, b)); }
  assert.ok(impact > 5, 'impacte: ' + impact);
  assert.ok(b.vx > 5, 'el segon cotxe rep empenta: ' + b.vx);
  assert.ok(Math.hypot(a.x - b.x, a.z - b.z) >= 4.2, 'ja no se superposen');
});

test('vehicle: mort per dany deixa fusible i no accelera', () => {
  const v = V.createVehicleState('sedan', 70, 70, 0);
  assert.equal(V.damageVehicle(v, 1000), true);
  assert.ok(v.dead && v.fuse > 0);
  v.input = { throttle: 1, steer: 0, handbrake: false };
  for (let i = 0; i < 60; i++) V.stepVehicle(v, 1 / 60);
  assert.ok(Math.abs(v.speed) < 0.5);
});

test('vehicle: mai produeix NaN en 60 s d\'entrades aleatòries', () => {
  const r = new U.Rng(3);
  const v = V.createVehicleState('sports', 70, 70, 0);
  for (let i = 0; i < 3600; i++) {
    v.input = { throttle: r.range(-1, 1), steer: r.range(-1, 1), handbrake: r.chance(0.1) };
    V.stepVehicle(v, 1 / 60); V.collideStatic(v, city);
    assert.ok(U.isFiniteNum(v.x, v.z, v.heading, v.vx, v.vz), 'finit al pas ' + i);
    assert.ok(v.x > C.LAND.minX - 1 && v.x < C.LAND.maxX + 1 && v.z > C.LAND.minZ - 1 && v.z < C.LAND.maxZ + 1, 'dins del món');
  }
});

import * as AI from '../src/ai.js';
import { Wanted } from '../src/wanted.js';
import * as SAVE from '../src/save.js';

test('IA: coordenades de carril i orientació coherents (circulació per la dreta)', () => {
  assert.equal(AI.laneCoord(2, 'x', 1), 143.5);    // cap a l'est: costat sud
  assert.equal(AI.laneCoord(2, 'x', -1), 136.5);
  assert.equal(AI.laneCoord(2, 'z', 1), 136.5);    // cap al sud: costat oest
  assert.equal(AI.laneCoord(2, 'z', -1), 143.5);
  assert.ok(Math.abs(AI.headingOf('x', 1) - Math.PI / 2) < 1e-9);
  assert.equal(AI.nextIntersection(100, 1), 2);
  assert.equal(AI.nextIntersection(100, -1), 1);
  assert.equal(AI.nextIntersection(140, 1), 3);
});

test('IA: opcions de gir respecten els límits de la graella', () => {
  const corner = { axis: 'z', dir: -1, line: 0 };       // al nord del carrer x=0, a punt d'arribar a (0,0)
  const opts = AI.turnOptions(corner, 0);
  assert.ok(!opts.some((o) => o.type === 'straight'), 'no pot seguir recte fora del mapa');
  assert.ok(opts.length >= 1 && opts.every((o) => o.dest.every((v) => v >= 0 && v <= 10)));
  const mid = AI.turnOptions({ axis: 'x', dir: 1, line: 5 }, 4);
  assert.equal(mid.length, 3);
});

test('IA: persecució escull girs que s\'apropen a l\'objectiu, fugida els que s\'allunyen', () => {
  const nav = { axis: 'x', dir: 1, line: 5 };
  const rnd = () => 0.1;
  const chase = AI.chooseTurn(nav, 3, 'chase', [3, 10], rnd);   // objectiu al sud (z gran)
  assert.equal(chase.type, 'right');                            // dreta anant a l'est = sud
  const flee = AI.chooseTurn(nav, 3, 'flee', [4, 10], rnd);   // sense empats: girar al nord és el que més allunya
  assert.equal(flee.type, 'left');
});

test('IA: el graf de vianants només connecta voreres vàlides', () => {
  for (let a = 1; a <= 20; a++) for (let b = 1; b <= 20; b++) {
    const n = AI.pedNeighbors(a, b);
    assert.ok(n.length >= 2 && n.length <= 4);
    for (const [na, nb] of n) {
      assert.ok(na >= 1 && na <= 20 && nb >= 1 && nb <= 20);
      assert.equal(C.heightAt(AI.nodeCoord(na), AI.nodeCoord(nb)), C.CURB_Y, `node ${na},${nb} és vorera`);
    }
  }
});

test('IA: 24 cotxes circulen 3 minuts sense travessar edificis ni quedar-se parats', () => {
  const rng = new U.Rng(11);
  const game = { vehicles: [], peds: [], player: { vehicle: null, dead: true, x: -999, z: -999 }, rng };
  for (let i = 0; i < 24; i++) {
    const s = AI.pickSpawnOnRoad(rng, 350, 350, 0, 800, 60);
    if (!s) continue;
    if (game.vehicles.some((o) => Math.hypot(o.x - s.x, o.z - s.z) < 9)) continue;
    const v = V.createVehicleState('sedan', s.x, s.z, s.heading);
    v.vx = Math.sin(s.heading) * 8; v.vz = Math.cos(s.heading) * 8;
    v.nav = AI.navFromPose(s.x, s.z, s.heading);
    v.ai = { mode: 'cruise', cruise: 11 + rng.range(0, 4), stuckT: 0, reverseT: 0, stuckCount: 0, tx: 0, tz: 0 };
    game.vehicles.push(v);
  }
  assert.ok(game.vehicles.length >= 15, 'cotxes creats: ' + game.vehicles.length);
  const dt = 1 / 30;
  let hits = 0, moving = 0, samples = 0, offRoadSteps = 0;
  for (let step = 0; step < 180 * 30; step++) {
    for (const v of game.vehicles) {
      AI.driveAI(game, v, dt); V.stepVehicle(v, dt);
      if (V.collideStatic(v, city, dt) > 6) hits++;
      assert.ok(U.isFiniteNum(v.x, v.z, v.heading), 'finit');
    }
    for (let i = 0; i < game.vehicles.length; i++) for (let j = i + 1; j < game.vehicles.length; j++) {
      const imp = V.collideVehicles(game.vehicles[i], game.vehicles[j]);
      if (imp > 6) hits++;
    }
    if (step % 30 === 0) for (const v of game.vehicles) { samples++; if (Math.abs(v.speed) > 3) moving++; if (C.heightAt(v.x, v.z) !== C.ROAD_Y && Math.abs(v.x) < 700 && Math.abs(v.z) < 700) offRoadSteps++; }
  }
  const moveFrac = moving / samples;
  console.log(`  trànsit: ${game.vehicles.length} cotxes, ${(moveFrac * 100).toFixed(0)}% del temps en moviment, ${hits} impactes forts, ${(offRoadSteps / samples * 100).toFixed(1)}% fora de calçada`);
  assert.ok(moveFrac > 0.55, 'el trànsit flueix: ' + moveFrac);
  assert.ok(offRoadSteps / samples < 0.12, 'els cotxes es queden a la calçada: ' + offRoadSteps / samples);
  assert.ok(hits < game.vehicles.length * 4, 'pocs impactes forts: ' + hits);
});

test('cerca: el calor puja amb els crims, baixa si no et veuen', () => {
  const w = new Wanted();
  assert.equal(w.crime('assault', false), 0);
  assert.equal(w.crime('assault'), 1);
  w.crime('kill'); w.crime('kill');
  assert.ok(w.level >= 2);
  w.crime('killCop');
  assert.ok(w.level >= 3);
  const lvl = w.level;
  w.update(5, true); assert.equal(w.level, lvl, 'vist: no baixa');
  w.update(15, false); assert.equal(w.level, lvl - 1, 'amagat 15 s: una estrella menys');
  for (let i = 0; i < 10; i++) w.update(15, false);
  assert.equal(w.level, 0);
  w.force(5); assert.equal(w.copCars, 9);
});

test('desat: sanejat, valors invàlids i emmagatzematge defectuós', () => {
  assert.deepEqual(SAVE.sanitize(null), SAVE.defaultSave());
  const s = SAVE.sanitize({ v: 1, money: -5, hp: 'x', weapons: { smg: { owned: true, ammo: 5000 }, rpg: { owned: true } }, current: 'rpg', done: ['a', 3] });
  assert.equal(s.money, 0); assert.equal(s.hp, 100); assert.equal(s.weapons.smg.ammo, 999);
  assert.ok(s.weapons.pistol && !s.weapons.rpg); assert.equal(s.current, 'pistol'); assert.deepEqual(s.done, ['a']);
  const store = new Map();
  const mock = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v), removeItem: (k) => store.delete(k) };
  assert.ok(SAVE.writeSave(SAVE.defaultSave(), mock));
  assert.equal(SAVE.loadSave(mock).money, 500);
  assert.equal(SAVE.loadSave({ getItem() { throw new Error('bloquejat'); } }), null);
  assert.equal(SAVE.writeSave({}, { setItem() { throw new Error('ple'); } }), false);
  store.set('palmera-bay-save-v1', '{trencat'); assert.equal(SAVE.loadSave(mock), null);
});
