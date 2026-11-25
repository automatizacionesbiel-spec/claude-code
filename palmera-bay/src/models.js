// Models 3D procedimentals: vehicles i personatges (caixes i cilindres, estil low-poly).
import * as THREE from 'three';

const geoCache = new Map();
const matCache = new Map();
function geo(key, make) { let g = geoCache.get(key); if (!g) { g = make(); geoCache.set(key, g); } return g; }
function mat(key, make) { let m = matCache.get(key); if (!m) { m = make(); matCache.set(key, m); } return m; }
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.2, ...extra });

const GLASS = () => mat('glass', () => std(0x141c2b, { roughness: 0.15, metalness: 0.7 }));
const TIRE = () => mat('tire', () => std(0x151515, { roughness: 0.9, metalness: 0 }));
const WRECK = () => mat('wreck', () => std(0x1a1a1a, { roughness: 1, metalness: 0 }));
export const nightState = { value: 0 }; // 0..1, l'actualitza el bucle principal

function bodyMat(color) { return mat('body' + color, () => std(color, { metalness: 0.45, roughness: 0.35 })); }

function mesh(g, m, x, y, z, shadow = true) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z);
  o.castShadow = shadow;
  return o;
}

export function createVehicleMesh(v) {
  const { len, wid, hgt } = v.spec;
  const g = new THREE.Group();
  const bm = bodyMat(v.color);
  const lowH = Math.max(0.5, hgt * 0.42);
  const body = mesh(geo('b' + len + wid + lowH, () => new THREE.BoxGeometry(wid, lowH, len)), bm, 0, 0.35 + lowH / 2, 0);
  g.add(body);
  const sports = v.type === 'sports', van = v.type === 'van', suv = v.type === 'suv';
  const cabH = hgt - lowH - 0.3;
  const cabLen = van ? len * 0.78 : sports ? len * 0.42 : len * 0.5;
  const cabZ = van ? -len * 0.06 : sports ? -len * 0.06 : -len * 0.07;
  const cab = mesh(geo('c' + wid + cabH + cabLen, () => new THREE.BoxGeometry(wid * 0.88, cabH, cabLen)), van || suv ? bm : GLASS(), 0, 0.35 + lowH + cabH / 2, cabZ);
  g.add(cab);
  if (!van && !suv) {
    // Sostre de color per sobre dels vidres.
    g.add(mesh(geo('r' + wid + cabLen, () => new THREE.BoxGeometry(wid * 0.84, 0.07, cabLen * 0.8)), bm, 0, 0.35 + lowH + cabH + 0.03, cabZ));
  } else {
    const win = mesh(geo('w' + wid + cabH + cabLen, () => new THREE.BoxGeometry(wid * 0.9, cabH * 0.45, cabLen * 0.98)), GLASS(), 0, 0.35 + lowH + cabH * 0.62, cabZ, false);
    g.add(win);
  }
  if (sports) g.add(mesh(geo('spoil', () => new THREE.BoxGeometry(wid * 0.9, 0.06, 0.4)), bm, 0, 0.35 + lowH + 0.35, -len / 2 + 0.2));

  // Rodes.
  const wg = geo('wheel', () => { const c = new THREE.CylinderGeometry(0.36, 0.36, 0.28, 12); c.rotateZ(Math.PI / 2); return c; });
  g.userData.wheels = [];
  const wx = wid / 2 - 0.08, wz = len * 0.32;
  for (const [sx, sz, front] of [[-1, 1, true], [1, 1, true], [-1, -1, false], [1, -1, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * wx, 0.36, sz * wz);
    pivot.add(mesh(wg, TIRE(), 0, 0, 0));
    g.add(pivot);
    g.userData.wheels.push({ pivot, front });
  }
  // Llums.
  g.userData.head = []; g.userData.tail = [];
  const lg = geo('lamp', () => new THREE.BoxGeometry(0.34, 0.16, 0.06));
  for (const sx of [-1, 1]) {
    const hm = new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xfff2c0, emissiveIntensity: 0.2 });
    const tm = new THREE.MeshStandardMaterial({ color: 0x990000, emissive: 0xff1010, emissiveIntensity: 0.3 });
    g.add(mesh(lg, hm, sx * (wid / 2 - 0.3), 0.35 + lowH * 0.55, len / 2 + 0.02, false));
    g.add(mesh(lg, tm, sx * (wid / 2 - 0.3), 0.35 + lowH * 0.55, -len / 2 - 0.02, false));
    g.userData.head.push(hm); g.userData.tail.push(tm);
  }
  g.userData.bodyMats = [bm];
  g.userData.wrecked = false;

  if (v.type === 'police') {
    const white = bodyMat('#f2f2f2');
    g.add(mesh(geo('pdoor', () => new THREE.BoxGeometry(wid + 0.02, lowH * 0.7, len * 0.3)), white, 0, 0.35 + lowH / 2, -len * 0.02));
    const redM = new THREE.MeshStandardMaterial({ color: 0xff2020, emissive: 0xff0000, emissiveIntensity: 1 });
    const blueM = new THREE.MeshStandardMaterial({ color: 0x2040ff, emissive: 0x0030ff, emissiveIntensity: 1 });
    g.add(mesh(geo('lb', () => new THREE.BoxGeometry(wid * 0.36, 0.14, 0.3)), redM, -wid * 0.2, 0.35 + lowH + cabH + 0.14, cabZ));
    g.add(mesh(geo('lb', () => new THREE.BoxGeometry(wid * 0.36, 0.14, 0.3)), blueM, wid * 0.2, 0.35 + lowH + cabH + 0.14, cabZ));
    g.userData.siren = [redM, blueM];
  }
  if (v.type === 'taxi') {
    g.add(mesh(geo('tx', () => new THREE.BoxGeometry(0.7, 0.2, 0.3)), mat('taxi', () => new THREE.MeshStandardMaterial({ color: 0xfff2a0, emissive: 0xffd000, emissiveIntensity: 0.8 })), 0, 0.35 + lowH + cabH + 0.17, cabZ));
  }
  g.userData.hasFire = null;
  return g;
}

export function syncVehicleMesh(m, v, time) {
  m.position.set(v.x, v.y, v.z);
  m.rotation.y = v.heading;
  for (const w of m.userData.wheels) {
    w.pivot.children[0].rotation.x = v.wheelSpin;
    if (w.front) w.pivot.rotation.y = v.steer * 0.42;
  }
  const n = nightState.value;
  for (const hm of m.userData.head) hm.emissiveIntensity = 0.25 + n * 2.2;
  for (const tm of m.userData.tail) tm.emissiveIntensity = (v.input.throttle < -0.1 || v.input.handbrake ? 2.2 : 0.35 + n * 0.8);
  if (m.userData.siren) {
    const on = v.driver === 'police' && !v.dead && v.sirenOn;
    const ph = Math.floor(time * 6) % 2;
    m.userData.siren[0].emissiveIntensity = on && ph === 0 ? 2.5 : 0.1;
    m.userData.siren[1].emissiveIntensity = on && ph === 1 ? 2.5 : 0.1;
  }
  if (v.dead && !m.userData.wrecked) {
    m.userData.wrecked = true;
    m.traverse((o) => { if (o.isMesh && o.material !== TIRE() && o.material !== GLASS()) o.material = WRECK(); });
  }
}

// ----------------------------------------------------------------- humanoids
export function createHumanoid({ shirt = 0x3b82f6, pants = 0x2b2f3a, skin = 0xe0b48a, hair = 0x2a1d14, vest = null } = {}) {
  const g = new THREE.Group();
  const skinM = std(skin, { metalness: 0, roughness: 0.8 });
  const shirtM = std(shirt, { metalness: 0, roughness: 0.8 });
  const pantsM = std(pants, { metalness: 0, roughness: 0.85 });
  const torso = mesh(new THREE.BoxGeometry(0.5, 0.64, 0.27), vest ? std(vest, { metalness: 0 }) : shirtM, 0, 1.15, 0);
  g.add(torso);
  const head = mesh(new THREE.SphereGeometry(0.18, 10, 8), skinM, 0, 1.64, 0);
  g.add(head);
  g.add(mesh(new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), std(hair, { metalness: 0 }), 0, 1.67, 0));
  const limb = (w, h, d, m, x, y) => { const p = new THREE.Group(); p.position.set(x, y, 0); const o = mesh(new THREE.BoxGeometry(w, h, d), m, 0, -h / 2, 0); p.add(o); g.add(p); return p; };
  g.userData.legL = limb(0.2, 0.82, 0.22, pantsM, -0.13, 0.84);
  g.userData.legR = limb(0.2, 0.82, 0.22, pantsM, 0.13, 0.84);
  g.userData.armL = limb(0.15, 0.6, 0.17, shirtM, -0.33, 1.44);
  g.userData.armR = limb(0.15, 0.6, 0.17, shirtM, 0.33, 1.44);
  g.userData.armR.add(mesh(new THREE.BoxGeometry(0.1, 0.12, 0.26), std(0x151515, { metalness: 0.3 }), 0, -0.62, 0.13, false));
  g.userData.gun = g.userData.armR.children[1];
  g.userData.gun.visible = false;
  g.userData.phase = Math.random() * 6;
  g.userData.fall = 0;
  return g;
}

// speed en m/s; aim: braços aixecats; fallen 0..1: tombat a terra.
export function animateHumanoid(h, speed, dt, aim = false, fallen = 0) {
  const u = h.userData;
  u.phase += speed * dt * 1.9;
  const amp = Math.min(speed / 4, 1) * 0.9;
  const s = Math.sin(u.phase) * amp;
  u.legL.rotation.x = s; u.legR.rotation.x = -s;
  u.armL.rotation.x = -s * 0.8;
  u.armR.rotation.x = aim ? -Math.PI / 2 + 0.1 : s * 0.8;
  u.gun.visible = aim;
  u.fall += (fallen - u.fall) * Math.min(1, dt * 10);
  h.rotation.x = -u.fall * (Math.PI / 2);
  h.position.y = u.fall * 0.25;
}
