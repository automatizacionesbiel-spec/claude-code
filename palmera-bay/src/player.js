// Jugador: a peu (moviment, salt, punteria, armes) i conduint.
import * as THREE from 'three';
import { clamp, damp, dist, angleDiff, wrapAngle, circleBox } from './util.js';
import { LAND, heightAt, queryBoxes } from './city.js';
import { circlesOf, rightOf, forwardOf } from './vehicles.js';
import { createHumanoid, animateHumanoid } from './models.js';
import { WEAPONS, WEAPON_ORDER, playerFire } from './combat.js';

export class Player {
  constructor(game) {
    this.g = game;
    this.x = 0; this.z = 0; this.y = 0; this.vy = 0; this.vx = 0; this.vz = 0;
    this.heading = 0; this.speed = 0;
    this.hp = 100; this.armor = 0; this.money = 500;
    this.dead = false; this.vehicle = null;
    this.weapons = {}; this.current = 'pistol';
    this.cool = 0; this.reloadT = 0; this.kick = 0; this.hurtT = 0; this.lastHurtAt = -99;
    this.aiming = false; this.sprinting = false;
    this.camYaw = 0; this.camPitch = -0.18; this.camYawOffset = 0;
    this.nearVehicle = null; this.lmbWas = false;
    this.mesh = createHumanoid({ shirt: 0xe8504a, pants: 0x25304a, hair: 0x1a1210 });
    this.mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    game.scene.add(this.mesh);
    this.giveWeapon('pistol', 48);
  }

  giveWeapon(name, ammo) {
    const w = WEAPONS[name];
    const st = this.weapons[name] || (this.weapons[name] = { owned: true, ammo: 0, clip: 0 });
    st.owned = true;
    const total = st.ammo + st.clip + ammo;
    st.clip = Math.min(w.mag, st.clip + Math.min(ammo, w.mag - st.clip));
    st.ammo = total - st.clip;
  }
  addAmmo(name, n) { const st = this.weapons[name]; if (st) st.ammo += n; }
  totalAmmo(name) { const s = this.weapons[name]; return s ? s.ammo + s.clip : 0; }

  startReload() {
    const st = this.weapons[this.current], w = WEAPONS[this.current];
    if (this.reloadT > 0 || st.ammo <= 0 || st.clip >= w.mag) return;
    this.reloadT = w.reload;
  }
  selectWeapon(name) {
    if (!this.weapons[name] || name === this.current) return;
    this.current = name; this.reloadT = 0; this.cool = 0.25;
    this.g.hud.toast(WEAPONS[name].name);
  }

  muzzle() {
    const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
    return [this.x + fx * 0.65 - fz * 0.28, this.y + 1.38, this.z + fz * 0.65 + fx * 0.28];
  }

  respawn(x, z, heading = 0) {
    this.x = x; this.z = z; this.y = heightAt(x, z); this.vy = 0; this.vx = this.vz = 0;
    this.heading = heading; this.camYaw = heading; this.dead = false; this.hp = 100; this.vehicle = null;
    this.mesh.visible = true; this.mesh.rotation.set(0, heading, 0);
  }

  // ------------------------------------------------------------------ vehicles
  findNearVehicle() {
    let best = null, bd = 4.2;
    for (const v of this.g.vehicles) {
      if (v.exploded || v.dead && v.fuse <= 0) continue;
      const d = dist(this.x, this.z, v.x, v.z) - v.spec.len * 0.35;
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }
  enter(v) {
    const g = this.g;
    if (v.ai) g.carjack(v);
    v.driver = 'player'; v.owner = 'player'; v.ai = null; v.nav = null; v.input = { throttle: 0, steer: 0, handbrake: false };
    this.vehicle = v; this.mesh.visible = false;
    g.hud.toast(v.spec.name);
    g.audio.beep('click');
  }
  exit() {
    const v = this.vehicle; if (!v) return;
    const [rx, rz] = rightOf(v), [fx, fz] = forwardOf(v);
    const half = v.spec.wid / 2 + 0.9;
    const tries = [[rx, rz, half], [-rx, -rz, half], [fx, fz, v.spec.len / 2 + 1], [-fx, -fz, v.spec.len / 2 + 1]];
    let spot = [v.x + rx * half, v.z + rz * half];
    for (const [dx, dz, d] of tries) {
      const x = v.x + dx * d, z = v.z + dz * d;
      let blocked = false;
      queryBoxes(this.g.city, x, z, 0.5, (b) => { if (circleBox(x, z, 0.45, b)) blocked = true; });
      if (!blocked) { spot = [x, z]; break; }
    }
    this.x = spot[0]; this.z = spot[1]; this.y = heightAt(this.x, this.z);
    this.heading = this.camYaw = v.heading;
    v.driver = null; v.input = { throttle: 0, steer: 0, handbrake: true };
    this.vehicle = null; this.mesh.visible = true; this.camYawOffset = 0;
  }

  // ---------------------------------------------------------------------- update
  update(dt) {
    const inp = this.g.input;
    this.cool = Math.max(0, this.cool - dt);
    this.kick = Math.max(0, this.kick - dt * 0.35);
    this.hurtT = Math.max(0, this.hurtT - dt);
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        const st = this.weapons[this.current], w = WEAPONS[this.current];
        const n = Math.min(w.mag - st.clip, st.ammo); st.clip += n; st.ammo -= n;
      }
    }
    if (this.dead) return;

    // Ratolí: orientació de la càmera.
    const [dx, dy] = inp.takeMouse();
    if (this.vehicle) { this.camYawOffset = clamp(this.camYawOffset - dx * 0.0022, -2.4, 2.4); }
    else { this.camYaw = wrapAngle(this.camYaw - dx * 0.0022 * (this.aiming ? 0.7 : 1)); }
    this.camPitch = clamp(this.camPitch - dy * 0.0022, -0.95, 0.75);

    if (inp.wasPressed('Digit1')) this.selectWeapon('pistol');
    if (inp.wasPressed('Digit2')) this.selectWeapon('smg');
    if (inp.wasPressed('Digit3')) this.selectWeapon('shotgun');
    if (inp.wheel !== 0 && !this.vehicle) {
      const owned = WEAPON_ORDER.filter((n) => this.weapons[n]);
      const i = owned.indexOf(this.current);
      this.selectWeapon(owned[(i + inp.wheel + owned.length) % owned.length]);
    }

    if (this.vehicle) this.driving(dt, inp); else this.onFoot(dt, inp);
  }

  driving(dt, inp) {
    const v = this.vehicle;
    if (v.exploded || (v.dead && v.fuse <= 0)) { this.exit(); return; }
    v.input.throttle = (inp.isDown('KeyW', 'ArrowUp') ? 1 : 0) - (inp.isDown('KeyS', 'ArrowDown') ? 1 : 0);
    v.input.steer = (inp.isDown('KeyA', 'ArrowLeft') ? 1 : 0) - (inp.isDown('KeyD', 'ArrowRight') ? 1 : 0);
    v.input.handbrake = inp.isDown('Space');
    if (v.dead) { v.input.throttle = 0; v.input.steer = 0; }
    this.g.audio.horn(inp.isDown('KeyE') && !v.dead && !this.g.shopOpen);
    this.x = v.x; this.z = v.z; this.y = v.y; this.speed = v.speed;
    this.camYawOffset = damp(this.camYawOffset, 0, Math.abs(v.speed) > 3 && !inp.isDown('KeyC') ? 0.9 : 0, dt);
    if (inp.wasPressed('KeyF')) this.exit();
  }

  onFoot(dt, inp) {
    const g = this.g;
    this.aiming = inp.rmb;
    this.sprinting = inp.isDown('ShiftLeft', 'ShiftRight') && !this.aiming;
    const iz = (inp.isDown('KeyW', 'ArrowUp') ? 1 : 0) - (inp.isDown('KeyS', 'ArrowDown') ? 1 : 0);
    const ix = (inp.isDown('KeyD', 'ArrowRight') ? 1 : 0) - (inp.isDown('KeyA', 'ArrowLeft') ? 1 : 0);
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    let mx = sy * iz + -cy * ix, mz = cy * iz + sy * ix;
    const ml = Math.hypot(mx, mz);
    const maxSp = this.aiming ? 2.8 : this.sprinting ? 8.4 : 4.4;
    if (ml > 0) { mx /= ml; mz /= ml; }
    const tvx = mx * maxSp * (ml > 0 ? 1 : 0), tvz = mz * maxSp * (ml > 0 ? 1 : 0);
    this.vx = damp(this.vx, tvx, ml > 0 ? 12 : 16, dt);
    this.vz = damp(this.vz, tvz, ml > 0 ? 12 : 16, dt);
    this.speed = Math.hypot(this.vx, this.vz);

    // Salt i gravetat.
    const ground = heightAt(this.x, this.z);
    if (this.y <= ground + 0.02 && this.vy <= 0 && inp.wasPressed('Space')) this.vy = 6.2;
    this.vy -= 19 * dt;
    this.y += this.vy * dt;
    if (this.y <= ground) { this.y = ground; this.vy = 0; }

    this.x += this.vx * dt; this.z += this.vz * dt;
    // Col·lisions amb edificis i vehicles.
    for (let it = 0; it < 2; it++) {
      queryBoxes(g.city, this.x, this.z, 0.6, (b) => {
        if (this.y > b.h - 0.2) return;
        const h = circleBox(this.x, this.z, 0.4, b);
        if (h) { this.x += h.nx * h.pen; this.z += h.nz * h.pen; }
      });
      for (const v of g.vehicles) {
        if (Math.abs(v.x - this.x) > 4 || Math.abs(v.z - this.z) > 4) continue;
        for (const c of circlesOf(v)) {
          const d = Math.hypot(this.x - c.x, this.z - c.z), rr = c.r + 0.4;
          if (d < rr && d > 1e-6) { this.x += ((this.x - c.x) / d) * (rr - d); this.z += ((this.z - c.z) / d) * (rr - d); }
        }
      }
    }
    this.x = clamp(this.x, LAND.minX + 1, LAND.maxX - 1); this.z = clamp(this.z, LAND.minZ + 1, LAND.maxZ - 1);

    // Orientació: cap on es mou, o cap a la càmera quan s'apunta/dispara.
    const wantFace = this.aiming || inp.lmb;
    if (wantFace) this.heading = this.camYaw;
    else if (ml > 0) this.heading = this.heading + angleDiff(Math.atan2(mx, mz), this.heading) * Math.min(1, dt * 14);

    // Armes.
    if (inp.wasPressed('KeyR')) this.startReload();
    const w = WEAPONS[this.current];
    const fire = inp.lmb && (w.auto || !this.lmbWas) && !g.shopOpen && g.mode === 'play';
    if (fire && this.hasTarget()) playerFire(g);
    this.lmbWas = inp.lmb;

    // Interacció amb vehicles.
    this.nearVehicle = this.findNearVehicle();
    if (inp.wasPressed('KeyF') && this.nearVehicle) this.enter(this.nearVehicle);

    animateHumanoid(this.mesh, this.speed, dt, wantFace || this.aiming, 0);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.rotation.y = this.heading;
  }
  hasTarget() { return true; }

  syncMeshWhileDriving() { this.mesh.visible = false; }
}
