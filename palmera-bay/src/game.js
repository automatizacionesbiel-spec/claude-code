// Joc: bucle principal, entitats, població de la ciutat, policia, càmera i desat.
import * as THREE from 'three';
import { Rng, clamp, damp, dist, dist2, wrapAngle, isFiniteNum, fmtMoney } from './util.js';
import { LAND, heightAt, rayWorld, hasLineOfSight } from './city.js';
import { World } from './world.js';
import { Effects } from './effects.js';
import { Input } from './input.js';
import { AudioSys } from './audio.js';
import { HUD } from './hud.js';
import { Player } from './player.js';
import { Missions } from './missions.js';
import { Wanted } from './wanted.js';
import { WEAPONS, enemyFire, explode, damagePlayer, damagePed } from './combat.js';
import { createVehicleMesh, syncVehicleMesh, createHumanoid, animateHumanoid, nightState } from './models.js';
import {
  createVehicleState, stepVehicle, collideStatic, collideVehicles, applyImpactDamage, circlesOf, VEHICLE_TYPES,
} from './vehicles.js';
import {
  driveAI, navFromPose, pickSpawnOnRoad, updatePedWalk, nodeCoord, pushOutOfBoxes,
} from './ai.js';
import { defaultSave, loadSave, writeSave, clearSave } from './save.js';

const TRAFFIC_TYPES = [['sedan', 46], ['suv', 16], ['van', 10], ['taxi', 14], ['sports', 14]];
const SHIRTS = [0x3b82f6, 0xe8504a, 0x2ecc71, 0xf1c40f, 0x9b59b6, 0xecf0f1, 0xe67e22, 0x1abc9c, 0x34495e];
const SKINS = [0xf1c8a0, 0xe0b48a, 0xc68d62, 0x8d5a3b, 0x5c3a24];
const FIXED_DT = 1 / 60;

export class Game {
  constructor(canvas, hudRoot, quality = 'medium') {
    this.canvas = canvas;
    this.quality = quality;
    this.rng = new Rng(Date.now() & 0xffff);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: quality !== 'low', powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.7;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 2600);
    this.world = new World(this.scene, quality);
    this.city = this.world.city;
    this.effects = new Effects(this.scene);
    this.input = new Input(canvas);
    this.audio = new AudioSys();
    this.hud = new HUD(hudRoot, this.city);
    this.vehicles = []; this.peds = []; this.pickups = [];
    this.stats = { kills: 0, missions: 0 };
    this.wanted = new Wanted();
    this.player = new Player(this);
    this.missions = new Missions(this);
    this.time = 0; this.mode = 'menu'; this.bigMap = false;
    this.shopOpen = false; this.nearShop = false; this.godMode = false;
    this.cam = { x: 0, y: 5, z: 0, fx: 0, fy: 0, fz: 1, yaw: 0, camHeading: 0, dist: 4 };
    this.lastCrime = {}; this.lastCopSpawn = 0; this.lastTrafficSpawn = 0; this.lastPedSpawn = 0;
    this.deathT = 0; this.bustT = 0; this.saveT = 0; this.pendingSave = false;
    this.errors = [];
    this.buildMarkers();
    this.buildPickups();
    this.resize();
    this.menuOrbit = 0;
    this.setQuality(quality);
    addEventListener('resize', () => this.resize());
  }

  // Llavor determinista (per a proves i repeticions).
  setSeed(n) { this.rng = new Rng(n); }

  // ------------------------------------------------------------------ ajustos
  setQuality(q) {
    this.quality = q;
    this.world.setQuality(q);
    this.renderer.shadowMap.enabled = q !== 'low';
    this.renderer.setPixelRatio(q === 'high' ? Math.min(devicePixelRatio || 1, 2) : q === 'medium' ? Math.min(devicePixelRatio || 1, 1.5) : 1);
    this.carTarget = q === 'high' ? 32 : q === 'medium' ? 24 : 14;
    this.pedTarget = q === 'high' ? 55 : q === 'medium' ? 40 : 22;
    this.resize();
  }
  resize() {
    const w = innerWidth || 1280, h = innerHeight || 720;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- entitats
  addVehicle(type, x, z, heading, color, opts = {}) {
    const v = createVehicleState(type, x, z, heading, color || VEHICLE_TYPES[type].colors[Math.floor(this.rng.next() * VEHICLE_TYPES[type].colors.length)]);
    v.mission = !!opts.mission;
    v.mesh = createVehicleMesh(v);
    this.scene.add(v.mesh);
    syncVehicleMesh(v.mesh, v, this.time);
    if (opts.aiMode) this.makeAI(v, opts.aiMode, opts.role || 'traffic');
    this.vehicles.push(v);
    return v;
  }
  makeAI(v, mode, role = 'traffic') {
    v.nav = navFromPose(v.x, v.z, v.heading);
    v.driver = role === 'police' ? 'police' : 'ai';
    v.ai = {
      mode, role, cruise: mode === 'flee' ? 26 : role === 'police' ? 30 : 10 + this.rng.next() * 5,
      stuckT: 0, reverseT: 0, stuckCount: 0, tx: this.player.x, tz: this.player.z, direct: false,
      laneOff: undefined, ignoreObstacles: false, born: this.time, panicT: 0,
    };
    const sp = mode === 'cruise' ? 7 : 12;
    v.vx = Math.sin(v.heading) * sp; v.vz = Math.cos(v.heading) * sp; v.speed = sp;
  }
  removeVehicle(v) {
    const i = this.vehicles.indexOf(v);
    if (i >= 0) this.vehicles.splice(i, 1);
    if (v.mesh) { this.scene.remove(v.mesh); v.mesh = null; }
  }
  addPed(opts) {
    const kind = opts.kind || 'civ';
    const look = kind === 'cop'
      ? { shirt: 0x1f3a6e, pants: 0x141c2e, vest: 0x1f3a6e, hair: 0x111111, skin: SKINS[this.rng.int(0, 2)] }
      : kind === 'gang'
        ? { shirt: 0xb01e28, pants: 0x1c1c1c, hair: 0x111111, skin: SKINS[this.rng.int(0, 4)] }
        : { shirt: this.rng.pick(SHIRTS), pants: this.rng.pick([0x2b2f3a, 0x4a5568, 0x1e3a5f, 0x6b4f3a, 0xc9c2b0]), hair: this.rng.pick([0x1a1210, 0x3b2a1a, 0xc9a227, 0x6e6e6e]), skin: this.rng.pick(SKINS) };
    const p = {
      id: Math.random(), kind, x: opts.x, z: opts.z, y: heightAt(opts.x, opts.z), heading: opts.heading || 0, speed: 0,
      walkSpeed: 1.1 + this.rng.next() * 0.7, hp: kind === 'civ' ? 60 : kind === 'cop' ? 90 : 80,
      state: opts.state || 'walk', pa: opts.a ?? 1, pb: opts.b ?? 1, ta: opts.a ?? 1, tb: opts.b ?? 1,
      fleeT: 0, fireCd: 0.6 + this.rng.next(), burst: 0, deadT: 0, kx: 0, kz: 0, threat: null,
      weapon: opts.weapon || 'pistol', mission: !!opts.mission, stuckT: 0, born: this.time,
    };
    p.mesh = createHumanoid(look);
    p.mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.scene.add(p.mesh);
    this.peds.push(p);
    return p;
  }
  removePed(p) {
    const i = this.peds.indexOf(p);
    if (i >= 0) this.peds.splice(i, 1);
    if (p.mesh) { this.scene.remove(p.mesh); p.mesh = null; }
  }
  spawnGang(cx, cz, r, n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + this.rng.next(), d = this.rng.range(r * 0.3, r);
      let x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      const p = this.addPed({ kind: 'gang', x, z, weapon: 'smg', state: 'idle', mission: true });
      pushOutOfBoxes(this.city, p, 0.5);
      out.push(p);
    }
    return out;
  }
  addMoney(n) { this.player.money = Math.max(0, this.player.money + n); }

  // ----------------------------------------------------------------- crims
  crime(kind, x, z, always = false) {
    if (this.time - (this.lastCrime[kind] || -9) < 0.9) return;
    this.lastCrime[kind] = this.time;
    let witnessed = always;
    if (!witnessed) {
      for (const p of this.peds) {
        if (p.state === 'dead' || dist2(p.x, p.z, x, z) > 45 * 45) continue;
        if (hasLineOfSight(this.city, p.x, p.z, x, z)) { witnessed = true; break; }
      }
    }
    if (!witnessed) for (const v of this.vehicles) {
      if (v.driver !== 'police' || v.dead || dist2(v.x, v.z, x, z) > 70 * 70) continue;
      if (hasLineOfSight(this.city, v.x, v.z, x, z)) { witnessed = true; break; }
    }
    if (!witnessed) return;
    const before = this.wanted.level;
    this.wanted.crime(kind, true);
    if (this.wanted.level > before) { this.hud.toast('Et busquen!  ' + '★'.repeat(this.wanted.level)); this.audio.beep('fail'); }
  }
  alarm(x, z, r) {
    for (const p of this.peds) {
      if (p.kind !== 'civ' || p.state === 'dead' || dist2(p.x, p.z, x, z) > r * r) continue;
      p.state = 'flee'; p.fleeT = 6 + this.rng.next() * 4; p.threat = { x, z };
    }
  }
  noise(x, z, r) { this.alarm(x, z, r); }

  carjack(v) {
    const [rx, rz] = [Math.cos(v.heading), -Math.sin(v.heading)];
    const p = this.addPed({ kind: 'civ', x: v.x + rx * (v.spec.wid / 2 + 1), z: v.z + rz * (v.spec.wid / 2 + 1), state: 'flee' });
    p.fleeT = 8; p.threat = { x: this.player.x, z: this.player.z };
    const a = Math.round(clamp(p.x / 70 * 2, 1, 20)), b = Math.round(clamp(p.z / 70 * 2, 1, 20));
    p.pa = p.ta = a; p.pb = p.tb = b;
    if (v.driver === 'police') this.crime('hitCop', v.x, v.z, true);
    else this.crime('assault', v.x, v.z);
    this.crime('theft', v.x, v.z);
  }

  onVehicleDestroyed(v, source) {
    if (v.mission) return;
    if (source === 'player' && v.ai && v.ai.role === 'police') this.crime('killCop', v.x, v.z, true);
    else if (source === 'player') this.crime('explosion', v.x, v.z);
  }
  onPedKilled() { /* ganxo per a futures recompenses */ }

  onPlayerDeath() {
    const pl = this.player;
    if (pl.dead) return;
    pl.dead = true; this.deathT = 0; this.deathKind = 'wasted';
    if (pl.vehicle) { pl.vehicle.driver = null; pl.vehicle = null; pl.mesh.visible = true; }
    this.audio.horn(false);
    this.hud.banner('ABATUT', 'fail', 'La ciutat no perdona');
    this.audio.beep('fail');
  }
  bust() {
    const pl = this.player;
    if (pl.dead) return;
    pl.dead = true; this.deathT = 0; this.deathKind = 'busted';
    if (pl.vehicle) { pl.vehicle.driver = null; pl.vehicle.input = { throttle: 0, steer: 0, handbrake: true }; pl.vehicle = null; pl.mesh.visible = true; }
    this.audio.horn(false);
    this.hud.banner('ARRESTAT', 'fail', 'Perds diners i la cerca');
    this.audio.beep('fail');
  }
  finishRespawn() {
    const pl = this.player, pois = this.city.pois;
    const spot = this.deathKind === 'busted' ? pois.police : pois.hospital;
    const loss = Math.min(pl.money, this.deathKind === 'busted' ? 400 : Math.round(pl.money * 0.1) + 100);
    pl.money -= loss;
    pl.armor = 0;
    pl.respawn(spot.x, spot.z, Math.PI);
    this.wanted.reset(); this.bustT = 0;
    this.missions.abort();
    // Els policies i enemics es retiren.
    for (const p of [...this.peds]) if (p.kind === 'cop' || (p.kind === 'gang' && !p.mission)) this.removePed(p);
    this.hud.toast(`${this.deathKind === 'busted' ? 'Fiança' : 'Factura de l\'hospital'}: -${fmtMoney(loss)}`);
  }

  // ----------------------------------------------------------------- desat
  snapshot() {
    const pl = this.player;
    const weapons = {};
    for (const [k, w] of Object.entries(pl.weapons)) if (w.owned) weapons[k] = { owned: true, ammo: w.ammo + w.clip };
    return {
      v: 1, money: pl.money, hp: pl.hp, armor: pl.armor, weapons, current: pl.current,
      done: [...this.missions.done], hour: this.world.hour,
      pos: { x: pl.x, z: pl.z, h: pl.heading }, settings: { quality: this.quality, music: this.audio.musicVol, master: this.audio.masterVol },
    };
  }
  applySave(d) {
    const pl = this.player;
    pl.money = d.money; pl.hp = d.hp; pl.armor = d.armor;
    pl.weapons = {};
    for (const [k, w] of Object.entries(d.weapons)) { pl.weapons[k] = { owned: true, ammo: 0, clip: 0 }; pl.giveWeapon(k, w.ammo); }
    pl.current = d.current;
    this.missions.done = new Set(d.done);
    this.world.setHour(d.hour);
  }
  requestSave() { this.pendingSave = true; }
  flushSave() { if (this.pendingSave) { this.pendingSave = false; return writeSave(this.snapshot()); } return false; }

  newGame() {
    clearSave();
    this.resetWorldEntities();
    const d = defaultSave();
    this.applySave(d);
    const sp = this.city.pois.spawn;
    this.player.respawn(sp.x + 6, sp.z + 8.2, Math.PI / 2);
    this.player.camYaw = Math.PI / 2;
    this.wanted.reset(); this.stats = { kills: 0, missions: 0 };
    this.begin();
  }
  continueGame() {
    const d = loadSave();
    if (!d) return this.newGame();
    this.resetWorldEntities();
    this.applySave(d);
    const pos = d.pos || { x: this.city.pois.spawn.x + 6, z: this.city.pois.spawn.z + 8.2, h: 0 };
    this.player.respawn(pos.x, pos.z, pos.h);
    this.player.hp = d.hp;
    this.begin();
  }
  resetWorldEntities() {
    for (const v of [...this.vehicles]) this.removeVehicle(v);
    for (const p of [...this.peds]) this.removePed(p);
    this.missions.abort();
    this.shopOpen = false;
  }
  begin() {
    this.mode = 'play';
    this.prewarm();
  }
  // Omple la ciutat d'entrada perquè no es vegi buida.
  prewarm() {
    for (let i = 0; i < 40 && this.vehicles.filter((v) => v.ai && v.ai.role === 'traffic').length < this.carTarget; i++) this.spawnTraffic(true);
    for (let i = 0; i < 80 && this.peds.filter((p) => p.kind === 'civ').length < this.pedTarget; i++) this.spawnPed(true);
  }

  // ------------------------------------------------------------- població
  visibleFrom(x, z) {
    const c = this.cam;
    const dx = x - c.x, dz = z - c.z, d = Math.hypot(dx, dz);
    if (d < 25) return true;
    if (d > 150) return false;
    return (dx * c.fx + dz * c.fz) / d > 0.15;
  }
  spawnTraffic(any = false) {
    const pl = this.player;
    const s = pickSpawnOnRoad(this.rng, pl.x, pl.z, any ? 30 : 100, any ? 260 : 240, 10);
    if (!s) return false;
    if (!any && this.visibleFrom(s.x, s.z)) return false;
    for (const o of this.vehicles) if (dist2(o.x, o.z, s.x, s.z) < 100) return false;
    if (dist2(pl.x, pl.z, s.x, s.z) < 20 * 20) return false;
    let r = this.rng.next() * TRAFFIC_TYPES.reduce((a, b) => a + b[1], 0), type = 'sedan';
    for (const [t, w] of TRAFFIC_TYPES) { r -= w; if (r <= 0) { type = t; break; } }
    this.addVehicle(type, s.x, s.z, s.heading, null, { aiMode: 'cruise' });
    return true;
  }
  spawnPed(any = false) {
    const pl = this.player;
    for (let t = 0; t < 8; t++) {
      const a = this.rng.int(1, 20), b = this.rng.int(1, 20);
      const x = nodeCoord(a), z = nodeCoord(b);
      const d = dist(x, z, pl.x, pl.z);
      if (d < (any ? 15 : 45) || d > (any ? 130 : 120)) continue;
      if (!any && this.visibleFrom(x, z) && d < 90) continue;
      const nb = [[a + 1, b], [a - 1, b], [a, b + 1], [a, b - 1]].filter((n) => n[0] >= 1 && n[0] <= 20 && n[1] >= 1 && n[1] <= 20);
      const n = nb[this.rng.int(0, nb.length - 1)];
      const p = this.addPed({ kind: 'civ', x, z, a: n[0], b: n[1] });
      p.pa = a; p.pb = b;
      return true;
    }
    return false;
  }

  manageTraffic(dt) {
    const pl = this.player;
    let n = 0;
    for (const v of [...this.vehicles]) {
      if (v.exploded && this.time > v.removeAt) { this.removeVehicle(v); continue; }
      if (v.mission || v.mesh === null) continue;
      const d = dist(v.x, v.z, pl.x, pl.z);
      if (v.ai && v.ai.role === 'traffic') {
        n++;
        if (d > 290 || (v.ai.stuckCount > 4 && !this.visibleFrom(v.x, v.z))) { this.removeVehicle(v); n--; }
      } else if (!v.ai && v.driver === null && v.owner === 'player' && d > 450) this.removeVehicle(v);
      else if (v.ai && v.ai.role === 'police' && d > 340) this.removeVehicle(v);
    }
    if (n < this.carTarget && this.time - this.lastTrafficSpawn > 0.35) { this.lastTrafficSpawn = this.time; this.spawnTraffic(false); }
  }
  managePeds(dt) {
    const pl = this.player;
    let n = 0;
    for (const p of [...this.peds]) {
      if (p.mission) continue;
      const d = dist(p.x, p.z, pl.x, pl.z);
      if (p.state === 'dead') { if (p.deadT > 22) this.removePed(p); continue; }
      if (p.kind === 'civ') { n++; if (d > 160) { this.removePed(p); n--; } }
      else if (p.kind === 'cop' && this.wanted.level === 0 && (d > 70 || p.born + 40 < this.time)) this.removePed(p);
    }
    if (n < this.pedTarget && this.time - this.lastPedSpawn > 0.2) { this.lastPedSpawn = this.time; this.spawnPed(false); }
  }

  // ------------------------------------------------------------- policia
  managePolice(dt) {
    const pl = this.player, w = this.wanted;
    const tgtX = pl.vehicle ? pl.vehicle.x : pl.x, tgtZ = pl.vehicle ? pl.vehicle.z : pl.z;
    const tvx = pl.vehicle ? pl.vehicle.vx : pl.vx, tvz = pl.vehicle ? pl.vehicle.vz : pl.vz;
    const cops = this.vehicles.filter((v) => v.ai && v.ai.role === 'police' && !v.dead);
    if (w.level > 0 && cops.length < w.copCars && this.time - this.lastCopSpawn > 1.6 && !pl.dead) {
      const s = pickSpawnOnRoad(this.rng, tgtX, tgtZ, 100, 200, 14);
      if (s && !this.visibleFrom(s.x, s.z) && !this.vehicles.some((o) => dist2(o.x, o.z, s.x, s.z) < 100)) {
        this.lastCopSpawn = this.time;
        const v = this.addVehicle('police', s.x, s.z, s.heading, null, { aiMode: 'chase', role: 'police' });
        v.sirenOn = true;
      }
    }
    for (const v of cops) {
      const ai = v.ai;
      v.sirenOn = w.level > 0;
      if (w.level === 0) { ai.mode = 'cruise'; ai.cruise = 13; ai.direct = false; ai.laneOff = undefined; continue; }
      ai.mode = 'chase'; ai.tx = tgtX; ai.tz = tgtZ; ai.tvx = tvx; ai.tvz = tvz;
      const d = dist(v.x, v.z, tgtX, tgtZ);
      const los = d < 60 && hasLineOfSight(this.city, v.x, v.z, tgtX, tgtZ, 1.2, 1.2);
      ai.direct = los && d < 55;
      ai.ignoreObstacles = ai.direct && d < 18;
      ai.laneOff = d < 90 ? 0.6 : undefined;
      ai.cruise = d > 80 ? 31 : d > 30 ? 26 : 20;
      // Els agents baixen si t'has aturat a peu.
      if (!pl.vehicle && w.level >= 2 && !ai.copsOut && d < 22 && Math.abs(v.speed) < 5 && this.peds.filter((p) => p.kind === 'cop' && p.state !== 'dead').length < 6) {
        ai.copsOut = true; ai.parked = true;
        for (let i = 0; i < 2; i++) {
          const p = this.addPed({ kind: 'cop', x: v.x + (i ? 2.2 : -2.2) * Math.cos(v.heading), z: v.z - (i ? 2.2 : -2.2) * Math.sin(v.heading), state: 'attack' });
          pushOutOfBoxes(this.city, p, 0.5);
        }
      }
      if (ai.parked) { v.input.throttle = 0; v.input.handbrake = true; }
    }
    if (w.level > 0) {
      const seen = this.copsSee(tgtX, tgtZ);
      w.update(dt, seen);
    } else w.update(dt, false);
  }
  copsSee(x, z) {
    for (const v of this.vehicles) {
      if (v.driver !== 'police' || v.dead) continue;
      if (dist2(v.x, v.z, x, z) < 75 * 75 && hasLineOfSight(this.city, v.x, v.z, x, z, 1.4, 1.4)) return true;
    }
    for (const p of this.peds) {
      if (p.kind !== 'cop' || p.state === 'dead') continue;
      if (dist2(p.x, p.z, x, z) < 75 * 75 && hasLineOfSight(this.city, p.x, p.z, x, z)) return true;
    }
    return false;
  }

  // ---------------------------------------------------------- actualització
  updateVehicles(dt) {
    const pl = this.player;
    for (const v of this.vehicles) {
      if (v.ai && !v.exploded) {
        if (v.ai.mode === 'flee') { v.ai.tx = pl.x; v.ai.tz = pl.z; }
        if (v.ai.panicT > 0) v.ai.panicT -= dt;
        driveAI(this, v, dt);
        if (v.ai.parked) { v.input.throttle = 0; v.input.handbrake = true; }
      } else if (!v.driver && !v.dead) {
        v.input.throttle = 0; v.input.steer = 0; v.input.handbrake = true;
      }
      stepVehicle(v, dt);
      const imp = collideStatic(v, this.city, dt);
      if (imp > 4) this.onCrash(v, imp, 1);
      if (v.dead) this.updateWreck(v, dt);
    }
    // Vehicle contra vehicle.
    const vs = this.vehicles;
    for (let i = 0; i < vs.length; i++) for (let j = i + 1; j < vs.length; j++) {
      const a = vs[i], b = vs[j];
      if (Math.abs(a.x - b.x) > 7 || Math.abs(a.z - b.z) > 7) continue;
      const imp = collideVehicles(a, b);
      if (imp > 4) {
        const involvesPlayer = a.driver === 'player' || b.driver === 'player';
        const k = involvesPlayer ? 1 : 0.3;
        this.onCrash(a, imp, k * b.spec.mass / a.spec.mass, b); this.onCrash(b, imp, k * a.spec.mass / b.spec.mass, a, true);
      }
    }
  }
  onCrash(v, imp, k, other, second) {
    if (imp > 6 && !(v.dead)) {
      if (applyImpactDamage(v, imp, k)) { v.lastHitBy = other && other.driver === 'player' ? 'player' : 'crash'; this.onVehicleDestroyed(v, v.lastHitBy); }
    }
    if (second) return;
    const d = dist(v.x, v.z, this.player.x, this.player.z);
    if (imp > 6) this.audio.crash(imp / 18, d);
    if (imp > 9) this.effects.spark(v.x, v.y + 0.8, v.z, '#ffd27a');
    if (v.driver === 'player') {
      this.effects.shake = Math.max(this.effects.shake, Math.min(0.5, imp / 35));
      if (imp > 12) damagePlayer(this, (imp - 12) * 1.6);
    }
    if (other && other.driver === 'police' && v.driver === 'player') this.crime('hitCop', v.x, v.z, true);
    else if (v.driver === 'player' && other && other.ai && other.ai.role === 'traffic' && imp > 8) this.crime('assault', v.x, v.z);
  }
  updateWreck(v, dt) {
    if (v.exploded) return;
    v.fuse -= dt;
    v._smokeT = (v._smokeT || 0) - dt;
    if (v._smokeT <= 0) { v._smokeT = 0.09; this.effects.smoke(v.x, v.y + 1.2, v.z, true); }
    if (v.fuse <= 0) {
      v.exploded = true; v.removeAt = this.time + 25;
      explode(this, v.x, v.z, 9, 180, v.lastHitBy || 'crash');
      v.driver = v.driver === 'player' ? 'player' : null;
    }
  }
  smokeDamaged(dt) {
    for (const v of this.vehicles) {
      if (v.dead || v.health > v.spec.hp * 0.3) continue;
      v._smokeT = (v._smokeT || 0) - dt;
      if (v._smokeT <= 0) { v._smokeT = 0.18; this.effects.smoke(v.x + Math.sin(v.heading) * v.spec.len * 0.35, v.y + 1.1, v.z + Math.cos(v.heading) * v.spec.len * 0.35, false); }
    }
  }

  updatePeds(dt) {
    const pl = this.player;
    const plx = pl.vehicle ? pl.vehicle.x : pl.x, plz = pl.vehicle ? pl.vehicle.z : pl.z;
    let copsAdjacent = 0;
    for (const p of this.peds) {
      p.y = heightAt(p.x, p.z);
      if (p.state === 'dead') {
        p.deadT += dt;
        if (p.kx || p.kz) { p.x += p.kx * dt; p.z += p.kz * dt; p.kx *= Math.exp(-6 * dt); p.kz *= Math.exp(-6 * dt); pushOutOfBoxes(this.city, p, 0.4); }
        continue;
      }
      if (p.kind === 'civ') {
        if (p.state === 'flee') { p.fleeT -= dt; if (p.fleeT <= 0) { p.state = 'walk'; p.threat = null; } }
        updatePedWalk(this, p, dt);
      } else {
        this.updateArmedPed(p, dt, plx, plz);
        if (p.kind === 'cop' && Math.hypot(p.x - plx, p.z - plz) < 2.4) copsAdjacent++;
      }
    }
    // Atropellaments.
    for (const v of this.vehicles) {
      if (v.dead || Math.abs(v.speed) < 2.4) continue;
      const cs = circlesOf(v);
      for (const p of this.peds) {
        if (p.state === 'dead' || Math.abs(p.x - v.x) > 4 || Math.abs(p.z - v.z) > 4) continue;
        let hit = false;
        for (const c of cs) if ((p.x - c.x) ** 2 + (p.z - c.z) ** 2 < (c.r + 0.35) ** 2) { hit = true; break; }
        if (!hit) continue;
        const byPlayer = v.driver === 'player';
        const before = p.hp;
        p.hp -= Math.abs(v.speed) * 9;
        this.effects.spark(p.x, p.y + 1, p.z, '#b02020');
        p.kx = v.vx * 0.5; p.kz = v.vz * 0.5;
        if (p.hp <= 0) {
          p.state = 'dead'; p.deadT = 0;
          if (byPlayer) { this.stats.kills++; if (p.kind === 'civ') this.crime('kill', p.x, p.z); else if (p.kind === 'cop') this.crime('killCop', p.x, p.z, true); }
        } else if (byPlayer && before > 0) { if (p.kind === 'civ') this.crime('assault', p.x, p.z); }
        if (p.state !== 'dead' && p.kind === 'civ') { p.state = 'flee'; p.fleeT = 8; p.threat = { x: v.x, z: v.z }; }
      }
    }
    // Arrest.
    if (this.wanted.level > 0 && !pl.dead) {
      const copCars = pl.vehicle ? this.vehicles.filter((v) => v.driver === 'police' && !v.dead && dist(v.x, v.z, pl.vehicle.x, pl.vehicle.z) < 7).length : 0;
      const stopped = pl.vehicle ? Math.abs(pl.vehicle.speed) < 2.5 && copCars >= 2 : pl.speed < 3.2 && copsAdjacent >= 1;
      this.bustT = stopped ? this.bustT + dt : Math.max(0, this.bustT - dt * 2);
      if (this.bustT > 2.2) this.bust();
    } else this.bustT = 0;
  }
  updateArmedPed(p, dt, plx, plz) {
    const d = dist(p.x, p.z, plx, plz);
    const los = d < 60 && hasLineOfSight(this.city, p.x, p.z, plx, plz, 1.5, 1.3);
    if (p.state === 'idle') { if (d < 38 && los) p.state = 'attack'; else { p.speed = 0; return; } }
    if (this.player.dead) { p.speed = 0; return; }
    p.fireCd -= dt;
    const want = p.kind === 'cop' ? 11 : 14;
    let mx = 0, mz = 0;
    if (d > want || !los) { mx = (plx - p.x) / (d || 1); mz = (plz - p.z) / (d || 1); }
    else if (d < want * 0.55) { mx = -(plx - p.x) / (d || 1); mz = -(plz - p.z) / (d || 1); }
    const sp = (mx || mz) ? (d > 25 ? 5.2 : 3.4) : 0;
    const ox = p.x, oz = p.z;
    p.x += mx * sp * dt; p.z += mz * sp * dt;
    pushOutOfBoxes(this.city, p, 0.42);
    p.speed = Math.hypot(p.x - ox, p.z - oz) / dt;
    if (sp > 0 && p.speed < sp * 0.25) p.stuckT += dt; else p.stuckT = Math.max(0, p.stuckT - dt);
    if (p.stuckT > 5 && p.kind === 'cop' && !this.visibleFrom(p.x, p.z)) this.removePed(p);
    p.heading = Math.atan2(plx - p.x, plz - p.z);
    if (los && p.fireCd <= 0 && d < 55) {
      enemyFire(this, p, p.weapon);
      if (p.weapon === 'smg') { p.burst++; p.fireCd = p.burst % 4 === 0 ? 0.9 + this.rng.next() * 0.6 : 0.11; }
      else p.fireCd = 0.55 + this.rng.next() * 0.5;
    }
  }

  buildPickups() {
    const rng = new Rng(2025);
    const types = ['health', 'armor', 'cash', 'ammo', 'cash', 'ammo'];
    const colors = { health: 0xff5d73, armor: 0x4cc9f0, cash: 0x46d36a, ammo: 0xffd23f };
    const geo = new THREE.OctahedronGeometry(0.42);
    for (let i = 0; i < 30; i++) {
      const a = rng.int(2, 19), b = rng.int(2, 19), x = nodeCoord(a), z = nodeCoord(b), type = types[i % types.length];
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: colors[type], emissive: colors[type], emissiveIntensity: 0.7 }));
      m.position.set(x, 1.1, z); this.scene.add(m);
      this.pickups.push({ type, x, z, mesh: m, taken: false, respawn: 0 });
    }
  }
  updatePickups(dt) {
    const pl = this.player, px = pl.vehicle ? pl.vehicle.x : pl.x, pz = pl.vehicle ? pl.vehicle.z : pl.z;
    for (const p of this.pickups) {
      p.mesh.rotation.y += dt * 2; p.mesh.position.y = 1.1 + Math.sin(this.time * 2 + p.x) * 0.12;
      if (p.taken) { p.respawn -= dt; if (p.respawn <= 0) { p.taken = false; p.mesh.visible = true; } continue; }
      if (pl.dead || Math.abs(p.x - px) > 2.6 || Math.abs(p.z - pz) > 2.6) continue;
      if (dist(p.x, p.z, px, pz) > (pl.vehicle ? 3 : 1.7)) continue;
      if (p.type === 'health' && pl.hp >= 100) continue;
      if (p.type === 'armor' && pl.armor >= 100) continue;
      p.taken = true; p.respawn = 90; p.mesh.visible = false;
      if (p.type === 'health') { pl.hp = Math.min(100, pl.hp + 50); this.hud.toast('+50 salut'); }
      else if (p.type === 'armor') { pl.armor = Math.min(100, pl.armor + 50); this.hud.toast('+50 armadura'); }
      else if (p.type === 'cash') { const n = 100 + this.rng.int(0, 4) * 50; this.addMoney(n); this.hud.toast('+' + fmtMoney(n)); this.audio.beep('cash'); }
      else { for (const k of Object.keys(pl.weapons)) pl.addAmmo(k, WEAPONS[k].mag); this.hud.toast('Munició'); }
      this.audio.beep('click');
    }
  }

  // --------------------------------------------------------------- botiga
  updateShop() {
    const pl = this.player, s = this.city.pois.gunshop;
    this.nearShop = !pl.vehicle && !pl.dead && dist(pl.x, pl.z, s.x, s.z) < 6;
    if (this.nearShop && this.input.wasPressed('KeyE') && !this.shopOpen) this.toggleShop(true);
    else if (this.shopOpen) {
      if (!this.nearShop || this.input.wasPressed('KeyE', 'Escape')) this.toggleShop(false);
      else for (let i = 1; i <= 5; i++) if (this.input.wasPressed('Digit' + i)) this.buy(i);
    }
  }
  toggleShop(on) {
    this.shopOpen = on;
    const box = this.hud.q('#shop');
    box.classList.toggle('hidden', !on);
    if (on) this.renderShop();
  }
  shopItems() {
    const pl = this.player, w = WEAPONS[pl.current];
    return [
      { k: 1, label: `Munició · ${w.name}`, price: w.ammoPrice, ok: true },
      { k: 2, label: pl.weapons.smg ? 'Metralleta (la tens)' : 'Metralleta', price: 1500, ok: !pl.weapons.smg },
      { k: 3, label: pl.weapons.shotgun ? 'Escopeta (la tens)' : 'Escopeta', price: 2500, ok: !pl.weapons.shotgun },
      { k: 4, label: 'Armadura completa', price: 400, ok: pl.armor < 100 },
      { k: 5, label: 'Farmaciola', price: 200, ok: pl.hp < 100 },
    ];
  }
  renderShop() {
    const items = this.shopItems();
    this.hud.q('#shop').innerHTML = `<h2>ARMERIA</h2><p class="cash">${fmtMoney(this.player.money)}</p>` +
      items.map((i) => `<div class="item ${i.ok && this.player.money >= i.price ? '' : 'off'}"><b>${i.k}</b> ${i.label}<span>${fmtMoney(i.price)}</span></div>`).join('') + '<p class="hint">Prem el número per comprar · E per sortir</p>';
  }
  buy(k) {
    const pl = this.player, it = this.shopItems().find((i) => i.k === k);
    if (!it || !it.ok) return;
    if (pl.money < it.price) { this.hud.toast('No tens prou diners'); this.audio.beep('fail'); return; }
    pl.money -= it.price;
    if (k === 1) pl.addAmmo(pl.current, WEAPONS[pl.current].mag * 2);
    else if (k === 2) { pl.giveWeapon('smg', 90); pl.selectWeapon('smg'); }
    else if (k === 3) { pl.giveWeapon('shotgun', 24); pl.selectWeapon('shotgun'); }
    else if (k === 4) pl.armor = 100;
    else if (k === 5) pl.hp = 100;
    this.audio.beep('cash');
    this.requestSave();
    this.renderShop();
  }

  // ------------------------------------------------------------ marcadors 3D
  buildMarkers() {
    this.markerPool = [];
    const beam = new THREE.CylinderGeometry(1, 1, 1, 20, 1, true);
    const ring = new THREE.RingGeometry(0.88, 1, 40); ring.rotateX(-Math.PI / 2);
    const arrow = new THREE.ConeGeometry(0.7, 1.6, 4); arrow.rotateX(Math.PI);
    for (let i = 0; i < 14; i++) {
      const g = new THREE.Group();
      const mat = () => new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, toneMapped: false });
      const b = new THREE.Mesh(beam, mat()), r = new THREE.Mesh(ring, mat()), a = new THREE.Mesh(arrow, mat());
      r.material.opacity = 0.8; a.material.opacity = 0.9;
      g.add(b, r, a); g.visible = false; g.userData = { b, r, a };
      this.scene.add(g); this.markerPool.push(g);
    }
  }
  updateMarkers() {
    const ms = this.missions.markers(), pl = this.player;
    let i = 0;
    for (const m of ms) {
      if (i >= this.markerPool.length) break;
      if (dist(m.x, m.z, pl.x, pl.z) > (m.kind === 'giver' ? 260 : 900)) continue;
      const g = this.markerPool[i++], u = g.userData;
      g.visible = true;
      const y = heightAt(m.x, m.z);
      g.position.set(m.x, y + 0.05, m.z);
      const radius = m.r || 2.2;
      const col = new THREE.Color(m.color);
      u.b.material.color.copy(col); u.r.material.color.copy(col); u.a.material.color.copy(col);
      const pulse = 1 + Math.sin(this.time * 3) * 0.04;
      u.r.visible = m.kind !== 'target' && m.kind !== 'enemy';
      u.b.visible = u.r.visible;
      u.a.visible = m.kind === 'target' || m.kind === 'enemy' || m.kind === 'giver';
      u.r.scale.setScalar(radius * pulse);
      u.b.scale.set(radius * 0.96, m.small ? 9 : 38, radius * 0.96); u.b.position.y = (m.small ? 9 : 38) / 2;
      u.a.position.y = (m.kind === 'giver' ? 4.2 : 3.4) + Math.sin(this.time * 3) * 0.25;
      u.a.rotation.y = this.time * 2;
    }
    for (; i < this.markerPool.length; i++) this.markerPool[i].visible = false;
  }

  // ----------------------------------------------------------------- càmera
  updateCamera(dt) {
    const pl = this.player, c = this.cam, cam = this.camera;
    let px, py, pz, yaw, pitch, dst, fov = 62;
    if (this.mode === 'menu') {
      this.menuOrbit += dt * 0.06;
      const a = this.menuOrbit;
      px = 350 + Math.cos(a) * 330; pz = 350 + Math.sin(a) * 330; py = 120;
      cam.position.set(px, py, pz); cam.lookAt(350, 15, 350);
      c.x = px; c.y = py; c.z = pz; c.fx = (350 - px); c.fz = (350 - pz); const l = Math.hypot(c.fx, c.fz); c.fx /= l; c.fz /= l; c.fy = 0; c.yaw = Math.atan2(c.fx, c.fz);
      return;
    }
    if (pl.vehicle) {
      const v = pl.vehicle;
      const mvHeading = Math.abs(v.speed) > 6 ? Math.atan2(v.vx, v.vz) : v.heading;
      const target = v.speed < -2 ? v.heading + Math.PI : mvHeading;
      let dh = wrapAngle(target - c.camHeading);
      c.camHeading = wrapAngle(c.camHeading + dh * Math.min(1, dt * (3 + Math.abs(v.speed) * 0.08)));
      yaw = c.camHeading + pl.camYawOffset;
      dst = 7.2 + Math.min(4, Math.abs(v.speed) * 0.1) + v.spec.len * 0.2;
      const sy = Math.sin(yaw), cy = Math.cos(yaw);
      px = v.x; py = v.y + 1.6; pz = v.z;
      pitch = -0.2 + clamp(pl.camPitch + 0.18, -0.4, 0.5) * 0.4;
      fov = 62 + clamp(Math.abs(v.speed) * 0.35, 0, 20);
      dst = this.camClip(px, py, pz, -Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch), dst);
      cam.position.set(px - sy * Math.cos(pitch) * dst, py - Math.sin(pitch) * dst, pz - cy * Math.cos(pitch) * dst);
      c.yaw = yaw;
    } else {
      yaw = pl.camYaw; pitch = pl.camPitch + pl.kick;
      const aim = pl.aiming;
      const want = aim ? 2.1 : 3.9;
      c.dist = damp(c.dist, want, 10, dt);
      px = pl.x; py = pl.y + 1.55; pz = pl.z;
      const fx = Math.sin(yaw) * Math.cos(pitch), fy = Math.sin(pitch), fz = Math.cos(yaw) * Math.cos(pitch);
      const rx = -Math.cos(yaw), rz = Math.sin(yaw);
      const shoulder = aim ? 0.75 : 0.55;
      const ox = px + rx * shoulder, oz = pz + rz * shoulder;
      const d = this.camClip(ox, py, oz, -fx, -fy, -fz, c.dist);
      cam.position.set(ox - fx * d, py - fy * d + 0.15, oz - fz * d);
      fov = aim ? 48 : 62;
      c.yaw = yaw;
    }
    cam.fov = damp(cam.fov, fov, 6, dt); cam.updateProjectionMatrix();
    // Orientació.
    if (pl.vehicle) {
      const v = pl.vehicle, sy = Math.sin(yaw), cy = Math.cos(yaw);
      cam.lookAt(v.x + sy * 8, v.y + 1.1 + pitch * -2, v.z + cy * 8);
    } else {
      const fx = Math.sin(yaw) * Math.cos(pitch), fy = Math.sin(pitch), fz = Math.cos(yaw) * Math.cos(pitch);
      cam.lookAt(cam.position.x + fx, cam.position.y + fy, cam.position.z + fz);
    }
    const sh = this.effects.shake;
    if (sh > 0.01) cam.position.add(new THREE.Vector3((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh));
    if (cam.position.y < heightAt(cam.position.x, cam.position.z) + 0.3) cam.position.y = heightAt(cam.position.x, cam.position.z) + 0.3;
    const f = new THREE.Vector3(); cam.getWorldDirection(f);
    c.x = cam.position.x; c.y = cam.position.y; c.z = cam.position.z; c.fx = f.x; c.fy = f.y; c.fz = f.z;
  }
  camClip(ox, oy, oz, dx, dy, dz, d) {
    const t = rayWorld(this.city, ox, oy, oz, dx, dy, dz, d + 0.4);
    return t < d + 0.4 ? Math.max(0.6, t - 0.4) : d;
  }

  // ------------------------------------------------------------- bucle
  step(dt) {
    if (this.mode !== 'play') return;
    this.time += dt;
    const pl = this.player;
    this.updateShop();
    pl.update(dt);
    this.updateVehicles(dt);
    this.updatePeds(dt);
    this.managePolice(dt);
    this.manageTraffic(dt);
    this.managePeds(dt);
    this.updatePickups(dt);
    this.smokeDamaged(dt);
    this.missions.update(dt);
    if (pl.dead) {
      this.deathT += dt;
      if (this.deathT > 3.4) this.finishRespawn();
    }
    this.saveT += dt;
    if (this.saveT > 45) { this.saveT = 0; this.requestSave(); }
    if (this.input.wasPressed('KeyN') && pl.vehicle) { const n = this.audio.nextStation(); this.hud.showRadio(n); }
    if (this.input.wasPressed('KeyM')) { this.bigMap = !this.bigMap; this.hud.q('#bigmap').classList.toggle('hidden', !this.bigMap); }
    this.checkInvariants();
  }

  // Xarxa de seguretat: cap entitat pot tenir coordenades invàlides ni sortir del món.
  checkInvariants() {
    const pl = this.player;
    if (!isFiniteNum(pl.x, pl.z, pl.y)) { const sp = this.city.pois.spawn; pl.respawn(sp.x, sp.z); this.errors.push('jugador amb NaN'); }
    for (const v of [...this.vehicles]) {
      if (!isFiniteNum(v.x, v.z, v.heading, v.vx, v.vz)) {
        this.errors.push('vehicle amb NaN');
        if (pl.vehicle === v) pl.exit();
        this.removeVehicle(v);
      }
    }
    for (const p of [...this.peds]) if (!isFiniteNum(p.x, p.z)) { this.errors.push('ped amb NaN'); this.removePed(p); }
  }

  frameUpdate(dt) {
    const pl = this.player;
    for (const v of this.vehicles) if (v.mesh) syncVehicleMesh(v.mesh, v, this.time);
    for (const p of this.peds) {
      if (!p.mesh) continue;
      p.mesh.position.set(p.x, p.y, p.z); p.mesh.rotation.y = p.heading;
      animateHumanoid(p.mesh, p.state === 'dead' ? 0 : p.speed, dt, p.kind !== 'civ' && p.state === 'attack', p.state === 'dead' ? 1 : 0);
    }
    if (pl.dead) { animateHumanoid(pl.mesh, 0, dt, false, 1); }
    nightState.value = this.world.night;
    this.world.update(this.mode === 'play' ? dt : dt * 0.6, pl.x, pl.z, this.camera);
    this.effects.update(dt);
    this.updateMarkers();
    this.updateCamera(dt);
    if (this.mode === 'play') {
      // Àudio.
      const v = pl.vehicle;
      this.audio.engine(!!v && !v.dead, v ? Math.min(1, Math.abs(v.speed) / v.spec.maxSpeed) : 0, v ? Math.max(0, v.input.throttle) : 0);
      let nearest = 999;
      for (const o of this.vehicles) if (o.driver === 'police' && !o.dead && this.wanted.level > 0) nearest = Math.min(nearest, dist(o.x, o.z, pl.x, pl.z));
      this.audio.siren(nearest);
      this.audio.update();
    }
    this.hud.update(this, dt);
    this.hud.root.style.opacity = this.mode === 'menu' ? '0' : '1';
    this.input.endFrame();
  }

  loop(ts) {
    const now = ts / 1000;
    if (!this._last) this._last = now;
    let dt = Math.min(0.1, now - this._last); this._last = now;
    this.advance(dt);
    this.render();
    this._raf = requestAnimationFrame((t) => this.loop(t));
  }
  advance(dt) {
    this._acc = (this._acc || 0) + dt;
    let n = 0;
    try {
      while (this._acc >= FIXED_DT && n < 6) { this.step(FIXED_DT); this._acc -= FIXED_DT; n++; }
      if (n === 6) this._acc = 0;
      this.frameUpdate(dt);
    } catch (e) {
      this.errors.push(String(e && e.stack || e));
      if (this.errors.length < 4) console.error(e);
    }
  }
  render() { this.renderer.render(this.scene, this.camera); }
  start() { this._raf = requestAnimationFrame((t) => this.loop(t)); }
}
