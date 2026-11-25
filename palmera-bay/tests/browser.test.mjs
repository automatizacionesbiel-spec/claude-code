// Prova d'integració al navegador (Chromium sense pantalla). Executa: node tests/browser.test.mjs
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const SHOTS = process.env.SHOTS_DIR || path.join(here, '..', 'test-shots');
fs.mkdirSync(SHOTS, { recursive: true });

let failed = 0, passed = 0;
const check = (name, cond, detail = '') => {
  if (cond) { passed++; console.log('  ✓ ' + name); }
  else { failed++; console.log('  ✗ ' + name + (detail ? '  →  ' + detail : '')); }
};
const section = (t) => console.log('\n' + t);

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const problems = [];
page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) problems.push(m.type() + ': ' + m.text()); });
page.on('pageerror', (e) => problems.push('PAGEERROR: ' + e.message));

const sim = (s) => page.evaluate((sec) => { const g = window.__game; const n = Math.round(sec * 60); for (let i = 0; i < n; i++) g.advance(1 / 60); }, s);
const ev = (fn, arg) => page.evaluate(fn, arg);
// Captura amb el fotograma ben renderitzat (el bucle real està aturat durant les proves).
const shot = async (name) => { await ev(() => { window.__game.advance(1 / 60); window.__game.render(); }); await page.screenshot({ path: path.join(SHOTS, name + '.png') }); };
const stopLoop = () => ev(() => { cancelAnimationFrame(window.__game._raf); window.__game._raf = 0; });
const noInternalErrors = async (label) => { const e = await ev(() => window.__game.errors); check(label + ': cap error intern', e.length === 0, e.slice(0, 2).join(' | ')); };

// ------------------------------------------------------------------ arrencada
section('Arrencada i menú');
await page.goto('file://' + path.resolve(here, '../index.html'));
await page.waitForFunction('window.__game', null, { timeout: 60000 });
check('el joc carrega des d\'un fitxer local (file://)', true);
await ev(() => { cancelAnimationFrame(window.__game._raf); window.__game._raf = 0; }); // les proves avancen el joc a mà
check('el menú principal és visible', await ev(() => !document.getElementById('menu').classList.contains('hidden')));
check('"Continuar" desactivat sense partida', await ev(() => document.getElementById('b-cont').classList.contains('off')));
await ev(() => { document.getElementById('b-opt').click(); });
check('el panell d\'opcions s\'obre', await ev(() => !document.getElementById('p-opt').classList.contains('hidden')));
await ev(() => { const s = document.getElementById('o-q'); s.value = 'low'; s.dispatchEvent(new Event('change')); });
check('canviar la qualitat funciona', await ev(() => window.__game.quality === 'low'));
await ev(() => { const s = document.getElementById('o-q'); s.value = 'medium'; s.dispatchEvent(new Event('change')); document.querySelector('#p-opt [data-back]').click(); });
await ev(() => document.getElementById('b-keys').click());
check('el panell de controls s\'obre', await ev(() => !document.getElementById('p-keys').classList.contains('hidden')));
await ev(() => document.querySelector('#p-keys [data-back]').click());
await page.click('#b-new');
check('"Nova partida" entra al joc', await ev(() => window.__game.mode === 'play' && document.getElementById('menu').classList.contains('hidden')));
await sim(2);
const pop = await ev(() => ({ v: window.__game.vehicles.length, p: window.__game.peds.length }));
check('la ciutat s\'omple de trànsit i vianants', pop.v >= 10 && pop.p >= 20, JSON.stringify(pop));
await noInternalErrors('arrencada');

// ------------------------------------------------------------------ renderitzat
section('Renderitzat (píxels reals)');
for (const [name, hour] of [['dia', 12], ['capvespre', 18], ['nit', 23]]) {
  const r = await ev((h) => {
    const g = window.__game; g.world.setHour(h); g.world.dayLength = 1e12;
    g.advance(1 / 60); g.render();
    const gl = g.renderer.getContext(); const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight;
    const px = new Uint8Array(W * H * 4); gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, px);
    let sum = 0, sum2 = 0, n = 0, bright = 0;
    for (let i = 0; i < px.length; i += 64) { const l = (px[i] + px[i + 1] + px[i + 2]) / 3; sum += l; sum2 += l * l; n++; if (l > 40) bright++; }
    const mean = sum / n;
    return { mean, sd: Math.sqrt(sum2 / n - mean * mean), bright: bright / n };
  }, hour);
  check(`escena de ${name} no és negra ni plana`, r.mean > 12 && r.sd > 15 && r.bright > 0.15, JSON.stringify(r));
}
await ev(() => { window.__game.world.setHour(17.9); window.__game.world.dayLength = 1800; });
await shot('joc_peu');

// ---------------------------------------------------------------------- a peu
section('A peu: moviment, col·lisions i armes');
await ev(() => { const g = window.__game; g.resetWorldEntities(); g.player.respawn(215, 480, 0); g.player.camYaw = Math.PI; g.prewarm(); });
const p0 = await ev(() => [window.__game.player.x, window.__game.player.z]);
await ev(() => window.__game.input.press('KeyW')); await sim(3); await ev(() => window.__game.input.release('KeyW'));
const p1 = await ev(() => [window.__game.player.x, window.__game.player.z]);
const walked = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
check('caminar 3 s avança entre 8 i 16 m', walked > 8 && walked < 16, walked.toFixed(1));
await ev(() => { window.__game.input.press('ShiftLeft'); window.__game.input.press('KeyW'); }); await sim(2);
const sp = await ev(() => window.__game.player.speed);
check('córrer és més ràpid que caminar', sp > 6.5, sp.toFixed(2));
await ev(() => { window.__game.input.release('ShiftLeft'); window.__game.input.release('KeyW'); });
// Intentar travessar un edifici caminant.
const wall = await ev(() => {
  const g = window.__game; const b = g.city.buildings.find((x) => x.kind === 'residential');
  g.player.respawn(b.cx, b.cz - b.d / 2 - 6, 0); g.player.camYaw = 0; // mirant cap a +z (a l'edifici)
  g.input.press('KeyW');
  let minDist = 1e9, inside = false;
  for (let i = 0; i < 360; i++) {
    g.advance(1 / 60);
    const px = g.player.x, pz = g.player.z;
    if (px > b.cx - b.w / 2 + 0.05 && px < b.cx + b.w / 2 - 0.05 && pz > b.cz - b.d / 2 + 0.05 && pz < b.cz + b.d / 2 - 0.05) inside = true;
  }
  g.input.release('KeyW');
  return { inside };
});
check('el jugador no travessa edificis', !wall.inside);
// Salt.
const jump = await ev(() => { const g = window.__game; g.player.respawn(215, 480, 0); g.advance(1 / 30); g.input.press('Space'); let maxY = 0; for (let i = 0; i < 60; i++) { g.advance(1 / 60); maxY = Math.max(maxY, g.player.y); if (i === 0) g.input.release('Space'); } return maxY; });
check('el salt eleva el jugador ~1 m', jump > 0.8 && jump < 2.2, jump.toFixed(2));
// Disparar i recarregar.
const shoot = await ev(() => {
  const g = window.__game, pl = g.player; pl.respawn(215, 480, 0); pl.cool = 0; pl.reloadT = 0;
  const before = pl.weapons.pistol.clip;
  g.input.lmb = true; for (let i = 0; i < 4; i++) g.advance(1 / 60); g.input.lmb = false; g.advance(1 / 60);
  const after = pl.weapons.pistol.clip;
  g.input.press('KeyR'); g.advance(1 / 60); const reloading = pl.reloadT > 0;
  for (let i = 0; i < 100; i++) g.advance(1 / 60);
  return { before, after, reloading, full: pl.weapons.pistol.clip };
});
check('disparar gasta bales', shoot.after < shoot.before, JSON.stringify(shoot));
check('recarregar omple el carregador', shoot.reloading && shoot.full === 12, JSON.stringify(shoot));
// Matar un vianant amb testimoni → cerca.
const kill = await ev(() => {
  const g = window.__game, pl = g.player; pl.respawn(215, 480, 0); g.wanted.reset(); pl.cool = 0;
  pl.weapons.pistol.clip = 12; pl.reloadT = 0;
  const victim = g.addPed({ kind: 'civ', x: 215, z: 490, a: 3, b: 12 }); const witness = g.addPed({ kind: 'civ', x: 222, z: 486, a: 3, b: 12 });
  g.stats.kills = 0; g.lastCrime = {};
  // Apunta: la càmera és sobre l'espatlla, així que s'itera fins que el centre de la pantalla cau sobre el cos.
  const aim = () => {
    for (let k = 0; k < 4; k++) {
      g.advance(1 / 60);
      const c = g.cam, tx = victim.x, ty = victim.y + 1.2, tz = victim.z;
      const dx = tx - c.x, dy = ty - c.y, dz = tz - c.z;
      pl.camYaw = Math.atan2(dx, dz); pl.camPitch = Math.atan2(dy, Math.hypot(dx, dz));
    }
  };
  for (let k = 0; k < 8 && victim.state !== 'dead'; k++) {
    victim.x = 215; victim.z = 490; victim.state = 'idle'; victim.speed = 0; aim();
    pl.cool = 0; g.input.lmb = true; g.advance(1 / 60); g.input.lmb = false; g.advance(1 / 60);
  }
  return { dead: victim.state === 'dead', wanted: g.wanted.level, kills: g.stats.kills, witnessFlee: witness.state === 'flee' };
});
check('un trets a un vianant el mata', kill.dead, JSON.stringify(kill));
check('matar amb testimonis dóna estrelles', kill.wanted >= 1, JSON.stringify(kill));
check('els testimonis fugen', kill.witnessFlee, JSON.stringify(kill));
await noInternalErrors('a peu');

// ------------------------------------------------------------------ vehicles
section('Vehicles: entrar, conduir, derrapar i sortir');
const drive = await ev(() => {
  const g = window.__game, pl = g.player; g.wanted.reset();
  g.setSeed(4242); g.carTarget = 0; g.pedTarget = 0; g.resetWorldEntities();   // escenari net: sense trànsit aleatori
  pl.respawn(215, 480, 0);
  const v = g.addVehicle('sedan', 218, 484, Math.PI, '#c0392b', {}); // al carril de la dreta del carrer x=210? (a prop)
  v.x = 218; v.z = 482; v.heading = 0; v.driver = null;
  g.advance(1 / 60); g.input.press('KeyF'); g.advance(1 / 60); g.input.release('KeyF');
  const entered = pl.vehicle === v;
  return { entered };
});
check('F entra al cotxe més proper', drive.entered);
const drive2 = await ev(() => {
  const g = window.__game, pl = g.player, v = pl.vehicle;
  v.heading = 0; v.x = 206.5; v.z = 300; v.vx = v.vz = 0;     // carrer x=210, carril cap al sud (+z)
  g.input.press('KeyW');
  let maxSpeed = 0;
  for (let i = 0; i < 480; i++) { g.advance(1 / 60); maxSpeed = Math.max(maxSpeed, Math.abs(v.speed)); }
  const h0 = v.heading;
  g.input.press('KeyA'); for (let i = 0; i < 40; i++) g.advance(1 / 60); g.input.release('KeyA');
  const turned = Math.abs(v.heading - h0);
  g.input.release('KeyW'); g.input.press('Space'); for (let i = 0; i < 120; i++) g.advance(1 / 60); g.input.release('Space');
  return { maxSpeed, turned, finalSpeed: Math.abs(v.speed), x: v.x, z: v.z };
});
check('el cotxe accelera per sobre de 25 m/s', drive2.maxSpeed > 25, drive2.maxSpeed.toFixed(1));
check('girar canvia el rumb', drive2.turned > 0.2, drive2.turned.toFixed(2));
check('el fre de mà atura el cotxe', drive2.finalSpeed < 6, drive2.finalSpeed.toFixed(1));
await shot('joc_cotxe');
const exit = await ev(() => {
  const g = window.__game, pl = g.player, v = pl.vehicle;
  g.input.press('KeyF'); g.advance(1 / 60); g.input.release('KeyF');
  const outside = !pl.vehicle;
  let blocked = false;
  for (const b of g.city.colliders) if (pl.x > b.minX && pl.x < b.maxX && pl.z > b.minZ && pl.z < b.maxZ) blocked = true;
  return { outside, blocked, dist: Math.hypot(pl.x - v.x, pl.z - v.z) };
});
check('F surt del cotxe, fora d\'edificis i a prop', exit.outside && !exit.blocked && exit.dist < 6, JSON.stringify(exit));
// Cotxe robat a un conductor de trànsit.
const jack = await ev(() => {
  const g = window.__game, pl = g.player; g.resetWorldEntities(); g.wanted.reset(); g.lastCrime = {};
  pl.respawn(215, 480, 0);
  const v = g.addVehicle('suv', 214, 484, 0, '#2c3e50', { aiMode: 'cruise' }); v.x = 214; v.z = 484; v.vx = v.vz = 0; v.speed = 0; v.ai.cruise = 0;
  g.addPed({ kind: 'civ', x: 220, z: 470, a: 3, b: 12 });
  g.advance(1 / 60); g.input.press('KeyF'); g.advance(1 / 60); g.input.release('KeyF');
  return { in: pl.vehicle === v, ai: !!v.ai, driver: v.driver, wanted: g.wanted.level, peds: g.peds.length };
});
check('es pot robar un cotxe amb conductor (el conductor fuig)', jack.in && !jack.ai && jack.driver === 'player' && jack.peds >= 2, JSON.stringify(jack));
check('robar un cotxe amb testimonis dóna cerca', jack.wanted >= 1, JSON.stringify(jack));
// Atropellar.
const run = await ev(() => {
  const g = window.__game, pl = g.player, v = pl.vehicle;
  g.wanted.reset(); g.lastCrime = {};
  v.x = 213.5; v.z = 200; v.heading = 0; v.vx = 0; v.vz = 20; v.speed = 20;
  const ped = g.addPed({ kind: 'civ', x: 213.5, z: 215, a: 3, b: 6 }); ped.state = 'idle'; ped.speed = 0;
  g.input.press('KeyW'); let dead = false;
  for (let i = 0; i < 90; i++) { ped.x = 213.5; ped.z = Math.max(ped.z, 215); g.advance(1 / 60); if (ped.state === 'dead') { dead = true; break; } }
  g.input.release('KeyW');
  return { dead, hp: ped.hp };
});
check('un cotxe a velocitat atropella i mata un vianant', run.dead, JSON.stringify(run));
// Xoc contra edifici fa mal.
const crash = await ev(() => {
  const g = window.__game, pl = g.player, v = pl.vehicle, b = g.city.buildings.find((x) => x.kind === 'residential' && x.cz < 600);
  g.wanted.reset(); pl.hp = 100; pl.armor = 0; const h0 = v.health;
  v.x = b.cx; v.z = b.cz - b.d / 2 - 14; v.heading = 0; v.vx = 0; v.vz = 30; v.speed = 30; v.dead = false; v.health = v.spec.hp;
  g.input.press('KeyW'); for (let i = 0; i < 100; i++) g.advance(1 / 60); g.input.release('KeyW');
  let inside = false; if (v.x > b.cx - b.w / 2 + 0.3 && v.x < b.cx + b.w / 2 - 0.3 && v.z > b.cz - b.d / 2 + 0.3 && v.z < b.cz + b.d / 2 - 0.3) inside = true;
  return { hp: v.health, spec: v.spec.hp, player: pl.hp, inside };
});
check('xocar contra un edifici fa mal al cotxe i no el travessa', crash.hp < crash.spec && !crash.inside, JSON.stringify(crash));
// Explosió d'un cotxe.
const boom = await ev(() => {
  const g = window.__game, pl = g.player; pl.respawn(215, 480, 0); pl.vehicle = null; g.wanted.reset();
  const v = g.addVehicle('sedan', 235, 480, 0, '#e8e8e8', {}); v.driver = null;
  import_damage(g, v);
  function import_damage(game, vv) { vv.health = 0; vv.dead = true; vv.fuse = 2.4; }
  for (let i = 0; i < 200; i++) g.advance(1 / 60);
  return { exploded: v.exploded };
});
check('un cotxe destruït acaba explotant', boom.exploded);
await noInternalErrors('vehicles');

// ------------------------------------------------------------------- policia
section('Policia i cerca');
const cops = await ev(() => {
  const g = window.__game, pl = g.player; g.resetWorldEntities(); pl.hp = 100; pl.armor = 100; pl.respawn(215, 480, 0); g.godMode = true;
  g.wanted.force(3); g.prewarm();
  let maxCars = 0, copPeds = 0, shots = 0;
  const orig = g.audio.gunshot.bind(g.audio); g.audio.gunshot = (...a) => { shots++; return orig(...a); };
  for (let i = 0; i < 60 * 40; i++) { g.advance(1 / 60); const n = g.vehicles.filter((v) => v.ai && v.ai.role === 'police').length; maxCars = Math.max(maxCars, n); copPeds = Math.max(copPeds, g.peds.filter((p) => p.kind === 'cop').length); g.wanted.unseen = 0; }
  g.audio.gunshot = orig; g.godMode = false;
  return { maxCars, copPeds, shots };
});
check('la policia arriba en cotxes (3 estrelles)', cops.maxCars >= 2, JSON.stringify(cops));
check('els agents baixen a perseguir a peu', cops.copPeds >= 1, JSON.stringify(cops));
check('els agents disparen', cops.shots >= 3, JSON.stringify(cops));
await ev(() => { const g = window.__game, pl = g.player, c = g.vehicles.find((v) => v.ai && v.ai.role === 'police'); if (c) pl.camYaw = Math.atan2(c.x - pl.x, c.z - pl.z); });
await shot('joc_policia');
const bust = await ev(() => {
  const g = window.__game, pl = g.player; pl.hp = 100; pl.armor = 0; const m0 = pl.money = 1000;
  for (const p of g.peds.filter((p) => p.kind === 'cop')) { p.x = pl.x + 1; p.z = pl.z + 1; }
  let busted = false;
  for (let i = 0; i < 60 * 5; i++) { for (const p of g.peds.filter((p) => p.kind === 'cop')) { p.x = pl.x + 1.2; p.z = pl.z + 0.5; p.fireCd = 9; } g.advance(1 / 60); if (g.deathKind === 'busted' && pl.dead) busted = true; if (busted) break; }
  const wasDead = pl.dead; for (let i = 0; i < 60 * 4; i++) g.advance(1 / 60);
  return { busted, respawned: !pl.dead, money: pl.money, wanted: g.wanted.level, atPolice: Math.hypot(pl.x - g.city.pois.police.x, pl.z - g.city.pois.police.z) < 6 };
});
check('quedar-se quiet amb un policia a prop et deté', bust.busted, JSON.stringify(bust));
check('arrestat: reapareixes a la comissaria, sense cerca i pagant fiança', bust.respawned && bust.wanted === 0 && bust.money < 1000 && bust.atPolice, JSON.stringify(bust));
const evade = await ev(() => {
  const g = window.__game, pl = g.player; g.resetWorldEntities(); pl.respawn(215, 480, 0); g.wanted.force(2);
  for (let i = 0; i < 60 * 40; i++) { g.wanted.unseen += 1 / 60; g.wanted.update(1 / 60, false); g.advance(0.0001); }
  return g.wanted.level;
});
check('amagar-se fa baixar les estrelles fins a zero', evade === 0, 'nivell=' + evade);
await noInternalErrors('policia');

// ------------------------------------------------------------- mort i respawn
section('Mort');
const dead2 = await ev(() => {
  const g = window.__game, pl = g.player; g.resetWorldEntities(); g.wanted.reset(); pl.respawn(215, 480, 0); pl.money = 1000; pl.hp = 5;
  pl.hp = 0; g.onPlayerDeath(); const d1 = pl.dead;
  for (let i = 0; i < 60 * 4; i++) g.advance(1 / 60);
  return { d1, alive: !pl.dead, hp: pl.hp, money: pl.money, atHospital: Math.hypot(pl.x - g.city.pois.hospital.x, pl.z - g.city.pois.hospital.z) < 6 };
});
check('morir i reaparèixer a l\'hospital amb salut completa', dead2.d1 && dead2.alive && dead2.hp === 100 && dead2.atHospital, JSON.stringify(dead2));
check('reaparèixer costa diners', dead2.money < 1000, JSON.stringify(dead2));

// ------------------------------------------------------------------- botiga
section('Botiga d\'armes');
const shop = await ev(() => {
  const g = window.__game, pl = g.player, s = g.city.pois.gunshop; g.resetWorldEntities(); pl.respawn(s.x, s.z, 0); pl.money = 5000;
  g.advance(1 / 60); const near = g.nearShop;
  g.input.press('KeyE'); g.advance(1 / 60); g.input.release('KeyE'); const open = g.shopOpen;
  g.input.press('Digit2'); g.advance(1 / 60); g.input.release('Digit2');
  g.input.press('Digit4'); g.advance(1 / 60); g.input.release('Digit4');
  g.input.press('KeyE'); g.advance(1 / 60); g.input.release('KeyE');
  return { near, open, smg: !!pl.weapons.smg, current: pl.current, armor: pl.armor, money: pl.money, closed: !g.shopOpen };
});
check('la botiga s\'obre a prop de l\'armeria', shop.near && shop.open);
check('es compra metralleta i armadura', shop.smg && shop.armor === 100 && shop.money === 5000 - 1500 - 400, JSON.stringify(shop));
check('E tanca la botiga', shop.closed);

// ------------------------------------------------------------------ missions
section('Missions (5)');
const missionRun = async (id, script) => {
  const r = await ev(({ id, script }) => {
    const g = window.__game, pl = g.player, M = g.missions;
    g.resetWorldEntities(); g.wanted.reset(); pl.hp = 100; pl.respawn(215, 480, 0); pl.money = 0; M.done.delete(id); M.active = null; M.cd = 0;
    const d = M.defs.find((x) => x.id === id);
    pl.x = d.giver.x; pl.z = d.giver.z; g.advance(1 / 60); g.advance(1 / 60);
    const started = !!M.active && M.active.def.id === id;
    const steps = [];
    let guard = 0;
    while (M.active && guard++ < 40) {
      const st = M.active.st;
      steps.push(st.type);
      const a = M.active;
      if (st.type === 'getcar') { pl.x = st.car.x; pl.z = st.car.z; pl.enter(st.car); }
      else if (st.type === 'goto') { if (st.needCar && pl.vehicle !== a.car) pl.enter(a.car); const t = st.at; if (pl.vehicle) { pl.vehicle.x = t.x; pl.vehicle.z = t.z; } pl.x = t.x; pl.z = t.z; }
      else if (st.type === 'hold') { pl.x = st.at.x; pl.z = st.at.z; for (let i = 0; i < 60 * (st.seconds + 1); i++) { g.advance(1 / 60); if (M.active !== a || M.active.st !== st) break; } }
      else if (st.type === 'checkpoints') {
        const ride = a.vehicles[0]; if (!pl.vehicle) { pl.x = ride.x; pl.z = ride.z; pl.enter(ride); }
        for (const p of st.points) { pl.vehicle.x = p.x; pl.vehicle.z = p.z; pl.x = p.x; pl.z = p.z; g.advance(1 / 60); }
      }
      else if (st.type === 'destroy') { st.car.health = 1; st.car.dead = true; st.car.fuse = 1; }
      else if (st.type === 'kill') { for (const p of st.peds) { p.hp = 0; p.state = 'dead'; } }
      else if (st.type === 'evade') { g.wanted.reset(); }
      g.advance(1 / 60); g.advance(1 / 60);
      if (M.active === a && M.active.st === st && st.type !== 'hold') g.advance(1 / 60);
    }
    return { started, steps, done: M.done.has(id), money: pl.money, reward: d.reward };
  }, { id, script });
  return r;
};
const expected = { deliver: ['getcar', 'goto'], race: ['checkpoints'], chase: ['destroy'], heist: ['goto', 'hold', 'getcar', 'evade', 'goto'], gang: ['kill'] };
for (const id of Object.keys(expected)) {
  const r = await missionRun(id);
  check(`missió "${id}": s'inicia en entrar al marcador`, r.started);
  check(`missió "${id}": passa per ${expected[id].join(' → ')}`, JSON.stringify(r.steps) === JSON.stringify(expected[id]), JSON.stringify(r.steps));
  check(`missió "${id}": es completa i paga ${r.reward}`, r.done && r.money >= r.reward, JSON.stringify(r));
}
const failT = await ev(() => {
  const g = window.__game, pl = g.player, M = g.missions; g.resetWorldEntities(); g.wanted.reset(); pl.respawn(215, 480, 0); M.done.clear(); M.active = null; M.cd = 0;
  M.start('deliver'); const st = M.active.st; pl.x = st.car.x; pl.z = st.car.z; pl.enter(st.car);
  g.advance(0.1); g.advance(0.1);
  M.active.t = M.active.st.timeLimit + 1; for (let i = 0; i < 3; i++) g.advance(1 / 60);
  return { active: !!M.active, done: M.done.has('deliver') };
});
check('una missió falla en esgotar el temps', !failT.active && !failT.done, JSON.stringify(failT));
const failDeath = await ev(() => {
  const g = window.__game, pl = g.player, M = g.missions; g.resetWorldEntities(); pl.respawn(215, 480, 0); M.active = null; M.cd = 0; M.start('gang');
  pl.hp = 0; g.onPlayerDeath(); g.advance(1 / 60); g.advance(1 / 60);
  return { active: !!M.active };
});
check('una missió falla en morir', !failDeath.active);
await ev(() => { const g = window.__game; g.resetWorldEntities(); g.player.respawn(215, 480, 0); g.player.camYaw = 1.2; g.missions.start('race'); g.prewarm(); for (let i = 0; i < 90; i++) g.advance(1 / 60); g.render(); });
await shot('joc_missio');
await ev(() => { window.__game.missions.abort(); });
await noInternalErrors('missions');

// -------------------------------------------------------------- desar / carregar
section('Desar i carregar');
await ev(() => { const g = window.__game, pl = g.player; g.resetWorldEntities(); pl.respawn(300, 400, 0.5); pl.money = 7777; pl.giveWeapon('shotgun', 12); g.missions.done = new Set(['deliver', 'race']); g.requestSave(); g.flushSave(); });
await ev(() => { window.__game.mode = 'menu'; });
await page.reload();
await page.waitForFunction('window.__game', null, { timeout: 60000 }); await stopLoop();
check('"Continuar" s\'activa si hi ha partida desada', await ev(() => !document.getElementById('b-cont').classList.contains('off')));
await page.click('#b-cont');
const loaded = await ev(() => { const g = window.__game, pl = g.player; return { money: pl.money, shotgun: !!pl.weapons.shotgun, done: [...g.missions.done].sort().join(','), x: Math.round(pl.x), mode: g.mode }; });
check('es recuperen diners, armes, missions i posició', loaded.money === 7777 && loaded.shotgun && loaded.done === 'deliver,race' && loaded.x === 300 && loaded.mode === 'play', JSON.stringify(loaded));
await ev(() => { window.__game.mode = 'menu'; localStorage.setItem('palmera-bay-save-v1', '{trencat'); });
await page.reload(); await page.waitForFunction('window.__game', null, { timeout: 60000 }); await stopLoop();
check('un desat corrupte no trenca el joc', await ev(() => document.getElementById('b-cont').classList.contains('off')) && (await ev(() => window.__game.errors.length)) === 0);
await page.click('#b-new');

// ------------------------------------------------------------ pausa
section('Pausa');
const pause = await ev(() => {
  const g = window.__game; const mode0 = g.mode;
  g.input.locked = true; g.input.onLockChange(false);   // simula Esc (perdre el bloqueig del punter)
  return { mode0, mode: g.mode, menu: !document.getElementById('menu').classList.contains('hidden'), pausePanel: !document.getElementById('p-pause').classList.contains('hidden') };
});
check('perdre el bloqueig del punter pausa el joc', pause.mode0 === 'play' && pause.mode === 'paused' && pause.menu && pause.pausePanel, JSON.stringify(pause));
const t0 = await ev(() => window.__game.time); await sim(1); const t1 = await ev(() => window.__game.time);
check('en pausa el temps de joc no avança', t1 === t0, `${t0} → ${t1}`);
const hit = await ev(() => { const b = document.getElementById('b-resume'), r = b.getBoundingClientRect(); const el = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); const ok = el === b; b.click(); return ok; });
check('el botó "Continua" és clicable (cap element el tapa)', hit);
check('"Continua" reprèn la partida', await ev(() => window.__game.mode === 'play'));

// ------------------------------------------------------------ simulació llarga
section('Simulació llarga amb entrades aleatòries (10 minuts de joc)');
const soak = await ev(() => {
  const g = window.__game, pl = g.player, inp = g.input;
  g.setQuality(g.quality); g.setSeed(777); g.resetWorldEntities(); g.missions.abort(); pl.respawn(215, 480, 0); pl.money = 100000; pl.giveWeapon('smg', 300); pl.giveWeapon('shotgun', 60); g.prewarm();
  let seed = 12345; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  const keys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'Space'];
  let maxV = 0, maxP = 0, maxFx = 0, nan = 0, t0 = performance.now(), worst = 0, frames = 0, deaths = 0, entered = 0, teleports = 0, wantedMax = 0;
  const seconds = 600;
  for (let s = 0; s < seconds * 2; s++) {          // un canvi d'entrades cada 0.5 s
    for (const k of keys) { if (rnd() < 0.35) inp.press(k); else inp.release(k); }
    if (rnd() < 0.15) { inp.press('KeyW'); }
    inp.lmb = rnd() < 0.3; inp.rmb = rnd() < 0.2;
    inp.mdx += (rnd() - 0.5) * 400; inp.mdy += (rnd() - 0.5) * 120;
    if (rnd() < 0.1) { inp.press('KeyF'); }
    if (rnd() < 0.05) { inp.press('KeyR'); }
    if (rnd() < 0.05) inp.press('Digit' + (1 + Math.floor(rnd() * 3)));
    if (rnd() < 0.04) { inp.press('KeyN'); }
    if (rnd() < 0.03) { inp.press('KeyM'); }
    if (rnd() < 0.03) { g.wanted.force(1 + Math.floor(rnd() * 5)); }
    if (rnd() < 0.02) { // teleport a un punt aleatori de la ciutat (carrer)
      const i = Math.floor(rnd() * 11), j = Math.floor(rnd() * 10); const x = i * 70, z = j * 70 + 20;
      if (pl.vehicle) { pl.vehicle.x = x; pl.vehicle.z = z; } pl.x = x; pl.z = z; teleports++;
    }
    if (rnd() < 0.015) { const x = pl.x + (rnd() - 0.5) * 8, z = pl.z + (rnd() - 0.5) * 8; const v = g.addVehicle(['sports', 'sedan', 'suv', 'van'][Math.floor(rnd() * 4)], x, z, rnd() * 6, null, {}); v.driver = null; }
    if (rnd() < 0.01) { for (const v of g.vehicles) if (Math.abs(v.x - pl.x) < 30 && Math.abs(v.z - pl.z) < 30 && !v.dead && rnd() < 0.5) { v.health = 0; v.dead = true; v.fuse = 1; } }
    for (let f = 0; f < 30; f++) {
      const t = performance.now(); g.advance(1 / 60); const dt = performance.now() - t; worst = Math.max(worst, dt); frames++;
    }
    for (const k of ['KeyF', 'KeyR', 'KeyN', 'KeyM']) inp.release(k);
    if (g.bigMap && rnd() < 0.5) { inp.press('KeyM'); g.advance(1 / 60); inp.release('KeyM'); }
    if (pl.vehicle) entered++;
    maxV = Math.max(maxV, g.vehicles.length); maxP = Math.max(maxP, g.peds.length); wantedMax = Math.max(wantedMax, g.wanted.level);
    if (pl.dead) deaths++;
    for (const v of g.vehicles) if (!Number.isFinite(v.x + v.z + v.heading)) nan++;
    for (const p of g.peds) if (!Number.isFinite(p.x + p.z)) nan++;
    if (!Number.isFinite(pl.x + pl.z + pl.y)) nan++;
    if (g.shopOpen) { inp.press('KeyE'); g.advance(1 / 60); inp.release('KeyE'); }
  }
  const elapsed = performance.now() - t0;
  return { maxV, maxP, nan, avgMs: elapsed / frames, worst, frames, deaths, entered, teleports, wantedMax, errors: g.errors.slice(0, 3), sceneChildren: g.scene.children.length, kills: g.stats.kills };
});
console.log('    ' + JSON.stringify(soak));
check('cap error intern en 10 minuts de joc aleatori', soak.errors.length === 0, soak.errors.join(' | '));
check('cap coordenada invàlida (NaN)', soak.nan === 0);
check('el nombre d\'entitats es manté acotat', soak.maxV < 90 && soak.maxP < 120, `vehicles=${soak.maxV}, vianants=${soak.maxP}`);
check('l\'escena no creix sense límit (sense fuites)', soak.sceneChildren < 900, 'fills=' + soak.sceneChildren);
check('la lògica costa menys de 5 ms per pas de mitjana', soak.avgMs < 5, soak.avgMs.toFixed(2) + ' ms');
check('el pitjor pas va a menys de 60 ms', soak.worst < 60, soak.worst.toFixed(1) + ' ms');
await sim(3); await ev(() => { window.__game.mode = 'play'; });

// -------------------------------------------------------------- bucle real
section('Bucle real (requestAnimationFrame)');
await ev(() => { const g = window.__game; g.input.release('KeyW'); g.resetWorldEntities(); g.player.respawn(215, 480, 0); g.prewarm(); g._last = 0; g.start(); window.__frames = 0; const c = () => { window.__frames++; requestAnimationFrame(c); }; requestAnimationFrame(c); });
await page.waitForTimeout(8000);
await ev(() => { cancelAnimationFrame(window.__game._raf); });
const frames = await ev(() => window.__frames);
check('el bucle real (requestAnimationFrame) renderitza fotogrames', frames >= 3, 'fotogrames=' + frames);

// ---------------------------------------------------------------- resum
section('Consola del navegador');
const real = problems.filter((p) => !/GPU stall|GL Driver Message|swiftshader|WebGL: INVALID_OPERATION: (?:texImage|compressed)|ReadPixels|Automatic fallback/i.test(p));
check('cap error ni avís a la consola', real.length === 0, real.slice(0, 5).join(' | '));
await browser.close();
console.log(`\n${passed} correctes, ${failed} fallides`);
process.exit(failed ? 1 : 0);
