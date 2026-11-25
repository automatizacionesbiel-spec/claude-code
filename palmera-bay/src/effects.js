// Efectes visuals: explosions, fum, trets, espurnes. Piscines d'sprites per no crear objectes en calent.
import * as THREE from 'three';

function softTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    const tex = softTexture();
    this.parts = [];
    for (let i = 0; i < 220; i++) {
      const add = i < 90;
      const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: 0 });
      const s = new THREE.Sprite(m); s.visible = false; s.frustumCulled = false;
      scene.add(s);
      this.parts.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, s0: 1, s1: 1, add, drag: 0, color: new THREE.Color() });
    }
    this.addCursor = 0; this.smokeCursor = 90;
    // Trets traçadors.
    this.tracers = [];
    const tg = new THREE.BoxGeometry(0.04, 0.04, 1);
    for (let i = 0; i < 20; i++) {
      const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xfff1a8, transparent: true, opacity: 0, toneMapped: false }));
      m.visible = false; scene.add(m);
      this.tracers.push({ m, life: 0 });
    }
    this.tracerCursor = 0;
    this.flash = new THREE.PointLight(0xffd080, 0, 14, 2); this.flash.position.set(0, -50, 0);
    this.boom = new THREE.PointLight(0xff8030, 0, 90, 2); this.boom.position.set(0, -50, 0);
    scene.add(this.flash, this.boom);
    this.shake = 0;
  }

  spawn(add, x, y, z, vx, vy, vz, life, s0, s1, color, drag = 1.5) {
    let p;
    if (add) { p = this.parts[this.addCursor]; this.addCursor = (this.addCursor + 1) % 90; }
    else { p = this.parts[this.smokeCursor]; this.smokeCursor = 90 + ((this.smokeCursor - 89) % 130); }
    p.s.position.set(x, y, z); p.vx = vx; p.vy = vy; p.vz = vz; p.life = p.max = life; p.s0 = s0; p.s1 = s1; p.drag = drag;
    p.color.set(color); p.s.material.color.copy(p.color); p.s.visible = true; p.s.scale.setScalar(s0);
  }

  explosion(x, y, z) {
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2, sp = 3 + Math.random() * 9;
      this.spawn(true, x, y + 1, z, Math.cos(a) * sp, e * sp * 0.8 + 2, Math.sin(a) * sp, 0.5 + Math.random() * 0.5, 3, 9 + Math.random() * 5, i % 3 ? '#ff8a28' : '#ffd070', 2.5);
    }
    for (let i = 0; i < 22; i++) {
      const a = Math.random() * Math.PI * 2, sp = 1 + Math.random() * 4;
      this.spawn(false, x, y + 1.5, z, Math.cos(a) * sp, 2 + Math.random() * 5, Math.sin(a) * sp, 1.6 + Math.random() * 1.6, 3, 11, '#2b2b2b', 0.8);
    }
    this.boom.position.set(x, y + 3, z); this.boom.intensity = 900;
    this.shake = Math.max(this.shake, 0.5);
  }
  smoke(x, y, z, fire = false) {
    this.spawn(false, x + (Math.random() - 0.5), y, z + (Math.random() - 0.5), (Math.random() - 0.5) * 0.6, 1.6 + Math.random(), (Math.random() - 0.5) * 0.6, 1.4, 0.8, 3.2, fire ? '#3a3a3a' : '#777777', 0.3);
    if (fire) this.spawn(true, x, y - 0.2, z, 0, 1.2, 0, 0.45, 0.7, 1.6, '#ff8a28', 0.5);
  }
  muzzle(x, y, z) {
    this.flash.position.set(x, y, z); this.flash.intensity = 40;
    this.spawn(true, x, y, z, 0, 0, 0, 0.06, 0.5, 0.9, '#ffe9a0', 0);
  }
  spark(x, y, z, color = '#ffd27a') {
    for (let i = 0; i < 4; i++) this.spawn(true, x, y, z, (Math.random() - 0.5) * 5, Math.random() * 4, (Math.random() - 0.5) * 5, 0.25, 0.25, 0.05, color, 1);
    this.spawn(false, x, y, z, 0, 0.4, 0, 0.5, 0.3, 1.0, '#9a9a9a', 0.5);
  }
  tracer(x0, y0, z0, x1, y1, z1) {
    const t = this.tracers[this.tracerCursor]; this.tracerCursor = (this.tracerCursor + 1) % this.tracers.length;
    const len = Math.hypot(x1 - x0, y1 - y0, z1 - z0);
    t.m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    t.m.scale.set(1, 1, Math.max(0.1, len));
    t.m.lookAt(x1, y1, z1);
    t.m.visible = true; t.life = 0.07; t.m.material.opacity = 0.9;
  }

  update(dt) {
    for (const p of this.parts) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.s.visible = false; continue; }
      const k = 1 - p.life / p.max;
      const damp = Math.exp(-p.drag * dt);
      p.vx *= damp; p.vy *= damp; p.vz *= damp;
      p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
      p.s.scale.setScalar(p.s0 + (p.s1 - p.s0) * k);
      p.s.material.opacity = p.add ? (1 - k) : Math.min(1, (1 - k) * 1.4) * 0.65;
    }
    for (const t of this.tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      if (t.life <= 0) t.m.visible = false; else t.m.material.opacity = t.life / 0.07;
    }
    this.flash.intensity *= Math.exp(-40 * dt);
    this.boom.intensity *= Math.exp(-5 * dt);
    this.shake *= Math.exp(-3 * dt);
  }
}
