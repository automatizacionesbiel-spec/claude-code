// Construcció visual del món (Three.js): ciutat, carrers, aigua, cel i cicle dia/nit.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { generateCity, LAND, N, BLOCK, HALF_ROAD, ROAD_Y, CURB_Y, CITY_MAX } from './city.js';
import { clamp, smoothstep, lerp, Rng } from './util.js';

const col = (hex) => new THREE.Color(hex);

function canvasTexture(w, h, draw, { repeat = false, srgb = true, aniso = 4 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = aniso;
  return t;
}

function windowTextures() {
  const cell = 64, n = 4, size = cell * n;
  const rng = new Rng(77);
  const lit = [];
  for (let i = 0; i < n * n; i++) lit.push(rng.chance(0.48) ? rng.pick(['#ffd28a', '#ffe7b8', '#a8e6ff', '#ffc27a']) : null);
  const wall = canvasTexture(size, size, (g) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, size, size);
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      g.fillStyle = '#5f6f82'; g.fillRect(c * cell + 14, r * cell + 12, cell - 28, cell - 26);
      g.fillStyle = '#8392a6'; g.fillRect(c * cell + 14, r * cell + 12, cell - 28, 6);
      g.fillStyle = '#d4d4d4'; g.fillRect(c * cell, r * cell + cell - 3, cell, 3);
    }
  }, { repeat: true });
  const emi = canvasTexture(size, size, (g) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, size, size);
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      const L = lit[r * n + c];
      if (L) { g.fillStyle = L; g.fillRect(c * cell + 14, r * cell + 12, cell - 28, cell - 26); }
    }
  }, { repeat: true });
  return { wall, emi };
}

function signTexture(text, color, bg, neon) {
  return canvasTexture(512, 128, (g, w, h) => {
    if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); g.strokeStyle = '#ffffff'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10); }
    else { g.clearRect(0, 0, w, h); }
    g.font = '900 78px Arial, Helvetica, sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    if (neon) { g.shadowColor = color; g.shadowBlur = 24; }
    g.fillStyle = neon ? '#ffffff' : color;
    g.fillText(text, w / 2, h / 2 + 4);
    if (neon) { g.shadowBlur = 8; g.fillStyle = color; g.fillText(text, w / 2, h / 2 + 4); }
  });
}

// Capsa amb UV, color i normals; apta per fusionar.
function box(w, h, d, x, y, z, color, uvMode = 'wall') {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const c = col(color);
  const count = g.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const face = Math.floor(i / 4); // px, nx, py, ny, pz, nz
    let u = uv.getX(i), v = uv.getY(i);
    if (uvMode === 'plain' || face === 2 || face === 3) { u = 0.004; v = 0.004; }
    else {
      const width = face < 2 ? d : w;
      u *= Math.max(1, Math.round(width / 12));
      v *= Math.max(1, Math.round(h / 14.4));
    }
    uv.setXY(i, u, v);
    const shade = face === 2 ? 0.8 : face === 3 ? 0.5 : 1;
    colors[i * 3] = c.r * shade; colors[i * 3 + 1] = c.g * shade; colors[i * 3 + 2] = c.b * shade;
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  g.translate(x, y, z);
  return g;
}

function quad(x0, z0, x1, z1, y, color) {
  const g = new THREE.PlaneGeometry(Math.abs(x1 - x0), Math.abs(z1 - z0));
  g.rotateX(-Math.PI / 2);
  g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
  const c = col(color), n = g.attributes.position.count, colors = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return g;
}

export class World {
  constructor(scene, quality = 'medium') {
    this.scene = scene;
    this.quality = quality;
    this.city = generateCity();
    this.hour = 17.8;
    this.dayLength = 1800; // segons reals per dia complet (30 min)
    this.night = 0;
    this.sunElev = 0;
    this.neonMats = [];
    this.group = new THREE.Group();
    scene.add(this.group);
    this.buildGround();
    this.buildRoads();
    this.buildBuildings();
    this.buildProps();
    this.buildSignsAndSea();
    this.buildSky();
    this.buildLights();
    this.setQuality(quality);
    this.update(0, 350, 350, null);
  }

  // ------------------------------------------------------------------ terra
  buildGround() {
    const mats = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
    const parts = [];
    parts.push(quad(LAND.minX, LAND.minZ, LAND.maxX, LAND.maxZ, 0, '#3f7d4a'));                           // herba
    parts.push(quad(LAND.minX, LAND.minZ, LAND.maxX, -HALF_ROAD, 0.02, '#6e737b'));                       // moll
    parts.push(quad(CITY_MAX + HALF_ROAD, -HALF_ROAD, LAND.maxX, LAND.maxZ, 0.02, '#e8d6a0'));            // sorra
    // Talussos cap a l'aigua.
    const slope = (x0, z0, x1, z1, x2, z2, x3, z3, c) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute([x0, 0, z0, x1, 0, z1, x2, -0.7, z2, x0, 0, z0, x2, -0.7, z2, x3, -0.7, z3], 3));
      g.computeVertexNormals();
      const cc = col(c), colors = []; for (let i = 0; i < 6; i++) colors.push(cc.r, cc.g, cc.b);
      g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      return g;
    };
    const s = 30;
    parts.push(slope(LAND.maxX, LAND.minZ, LAND.maxX, LAND.maxZ, LAND.maxX + s, LAND.maxZ, LAND.maxX + s, LAND.minZ, '#d9c88c'));
    parts.push(slope(LAND.minX, LAND.maxZ, LAND.maxX, LAND.maxZ, LAND.maxX, LAND.maxZ + s, LAND.minX, LAND.maxZ + s, '#b8aa78'));
    parts.push(slope(LAND.minX, LAND.minZ, LAND.minX, LAND.maxZ, LAND.minX - s, LAND.maxZ, LAND.minX - s, LAND.minZ, '#b8aa78'));
    parts.push(slope(LAND.minX, LAND.minZ, LAND.maxX, LAND.minZ, LAND.maxX, LAND.minZ - s, LAND.minX, LAND.minZ - s, '#555a62'));
    // Normals dels talussos poden quedar cap avall: fem servir DoubleSide.
    mats.side = THREE.DoubleSide;
    const norm = parts.map((g) => (g.index ? g.toNonIndexed() : g));
    const m = new THREE.Mesh(mergeGeometries(norm.map((g) => { if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g; })), mats);
    m.receiveShadow = true;
    this.group.add(m);
  }

  // ----------------------------------------------------------------- carrers
  buildRoads() {
    const asphaltTex = canvasTexture(128, 128, (g, w, h) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
      const r = new Rng(5);
      for (let i = 0; i < 900; i++) { const v = 200 + Math.floor(r.range(0, 55)); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(r.range(0, w), r.range(0, h), 2, 2); }
    }, { repeat: true });
    asphaltTex.repeat.set(90, 90);
    const size = CITY_MAX + 2 * HALF_ROAD;
    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(size, size),
      new THREE.MeshStandardMaterial({ color: 0x3d424d, map: asphaltTex, roughness: 0.92, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })
    );
    road.rotation.x = -Math.PI / 2; road.position.set(CITY_MAX / 2, ROAD_Y, CITY_MAX / 2);
    road.receiveShadow = true;
    this.group.add(road);

    // Voreres (lloses elevades) i terres de parc.
    const slabs = [], marks = [];
    for (const b of this.city.blocks) {
      const s = BLOCK - 2 * HALF_ROAD;
      const color = b.kind === 'port' ? '#7b7f86' : b.kind === 'hotel' ? '#c9c2b2' : '#9da1a9';
      slabs.push(box(s, CURB_Y, s, b.cx, CURB_Y / 2, b.cz, color, 'plain'));
      if (b.kind === 'park') slabs.push(quad(b.cx - s / 2 + 3, b.cz - s / 2 + 3, b.cx + s / 2 - 3, b.cz + s / 2 - 3, CURB_Y + 0.02, '#4f9a55'));
    }
    const slabMesh = new THREE.Mesh(mergeGeometries(slabs.map((g) => { g.deleteAttribute('uv'); return g; })), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
    slabMesh.receiveShadow = true; slabMesh.castShadow = false;
    this.group.add(slabMesh);

    // Marques vials: línia groga central discontínua i passos de vianants.
    const y = ROAD_Y + 0.02;
    for (let i = 0; i <= N; i++) for (let k = 0; k < N; k++) {
      const a = k * BLOCK + HALF_ROAD + 0.6, z = k * BLOCK + BLOCK - HALF_ROAD - 0.6;
      marks.push(quad(i * BLOCK - 0.12, a, i * BLOCK + 0.12, z, y, '#e0b400'));
      marks.push(quad(a, i * BLOCK - 0.12, z, i * BLOCK + 0.12, y, '#e0b400'));
    }
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const cx = i * BLOCK, cz = j * BLOCK;
      for (let s = -5; s <= 5; s++) {
        const o = s * 1.25;
        for (const sg of [-1, 1]) {
          marks.push(quad(cx + o - 0.35, cz + sg * (HALF_ROAD + 0.2) - 1.1, cx + o + 0.35, cz + sg * (HALF_ROAD + 0.2) + 1.1, y + 0.005, '#e6e6e6'));
          marks.push(quad(cx + sg * (HALF_ROAD + 0.2) - 1.1, cz + o - 0.35, cx + sg * (HALF_ROAD + 0.2) + 1.1, cz + o + 0.35, y + 0.005, '#e6e6e6'));
        }
      }
    }
    const markMesh = new THREE.Mesh(mergeGeometries(marks), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    markMesh.receiveShadow = true;
    this.group.add(markMesh);
  }

  // ---------------------------------------------------------------- edificis
  buildBuildings() {
    const { wall, emi } = windowTextures();
    this.windowMat = new THREE.MeshStandardMaterial({ vertexColors: true, map: wall, emissive: 0xffffff, emissiveMap: emi, emissiveIntensity: 0, roughness: 0.65, metalness: 0.15 });
    const parts = [];
    const rng = new Rng(404);
    for (const b of this.city.buildings) {
      const mode = b.windows ? 'wall' : 'plain';
      parts.push(box(b.w, b.h, b.d, b.cx, CURB_Y + b.h / 2 - 0.05, b.cz, b.color, mode));
      if (b.h > 14 && b.kind !== 'container') {
        // Coberta: caixa tècnica i, a les torres, antena.
        parts.push(box(b.w * 0.35, 2.2, b.d * 0.3, b.cx + rng.range(-b.w / 5, b.w / 5), CURB_Y + b.h + 1.05, b.cz + rng.range(-b.d / 5, b.d / 5), '#6b7078', 'plain'));
        if (b.kind === 'tower' && b.h > 60) parts.push(box(0.4, 10, 0.4, b.cx, CURB_Y + b.h + 5, b.cz, '#b0b4ba', 'plain'));
      }
    }
    const mesh = new THREE.Mesh(mergeGeometries(parts), this.windowMat);
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  // ---------------------------------------------------------------- elements
  buildProps() {
    const { lamps, palms, trees } = this.city;
    // Fanals (pal + braç) i llums.
    const poles = [], heads = [];
    for (const l of lamps) {
      poles.push(box(0.18, 7, 0.18, l.x, CURB_Y + 3.5, l.z, '#40454d', 'plain'));
      const dx = Math.sin(l.rot) * 0.9, dz = Math.cos(l.rot) * 0.9;
      poles.push(box(Math.abs(dx) > 0.1 ? 1.8 : 0.14, 0.14, Math.abs(dz) > 0.1 ? 1.8 : 0.14, l.x + dx, CURB_Y + 7, l.z + dz, '#40454d', 'plain'));
      heads.push(box(0.55, 0.18, 0.55, l.x + dx * 1.7, CURB_Y + 6.92, l.z + dz * 1.7, '#ffffff', 'plain'));
    }
    const poleMesh = new THREE.Mesh(mergeGeometries(poles.map((g) => { g.deleteAttribute('uv'); return g; })), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.4 }));
    poleMesh.castShadow = false;
    this.group.add(poleMesh);
    this.lampMat = new THREE.MeshBasicMaterial({ color: 0x555555, fog: true });
    this.group.add(new THREE.Mesh(mergeGeometries(heads.map((g) => { g.deleteAttribute('uv'); g.deleteAttribute('color'); return g; })), this.lampMat));

    // Taques de llum sota els fanals (només visibles de nit).
    const glowTex = canvasTexture(64, 64, (g, w, h) => {
      const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,214,140,0.9)'); gr.addColorStop(0.45, 'rgba(255,190,110,0.28)'); gr.addColorStop(1, 'rgba(255,170,90,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    });
    const glows = [];
    for (const l of lamps) {
      const gx = l.x + Math.sin(l.rot) * 1.5, gz = l.z + Math.cos(l.rot) * 1.5;
      const g = new THREE.PlaneGeometry(15, 15); g.rotateX(-Math.PI / 2); g.translate(gx, ROAD_Y + 0.045, gz);
      glows.push(g);
    }
    this.glowMat = new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, fog: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    const glowMesh = new THREE.Mesh(mergeGeometries(glows), this.glowMat);
    glowMesh.renderOrder = 2;
    this.group.add(glowMesh);

    // Palmeres instanciades: tronc + capçada.
    const trunkG = new THREE.CylinderGeometry(0.2, 0.32, 6.5, 6); trunkG.translate(0, 3.25, 0);
    const crownParts = [];
    for (let i = 0; i < 7; i++) {
      const leaf = new THREE.ConeGeometry(0.55, 4.2, 4);
      leaf.rotateZ(Math.PI / 2 - 0.35); leaf.translate(2.0, 0, 0);
      leaf.rotateY((i / 7) * Math.PI * 2);
      leaf.translate(0, 6.5, 0);
      crownParts.push(leaf);
    }
    const crownG = mergeGeometries(crownParts);
    const trunkM = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x7a5a3a, roughness: 0.9 }), palms.length);
    const crownM = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: 0x2f8f46, roughness: 0.8, side: THREE.DoubleSide }), palms.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
    palms.forEach((p, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), p.r); sc.set(p.s, p.s, p.s);
      pos.set(p.x, p.z === undefined ? 0 : (p.x > CITY_MAX + HALF_ROAD ? 0.02 : CURB_Y), p.z);
      m4.compose(pos, q, sc); trunkM.setMatrixAt(i, m4); crownM.setMatrixAt(i, m4);
    });
    trunkM.castShadow = crownM.castShadow = true;
    this.group.add(trunkM, crownM);

    // Arbres de parc.
    const tT = new THREE.CylinderGeometry(0.25, 0.35, 3, 6); tT.translate(0, 1.5, 0);
    const tC = new THREE.IcosahedronGeometry(2.4, 0); tC.translate(0, 4.4, 0);
    const treeT = new THREE.InstancedMesh(tT, new THREE.MeshStandardMaterial({ color: 0x6b4a2f }), Math.max(1, trees.length));
    const treeC = new THREE.InstancedMesh(tC, new THREE.MeshStandardMaterial({ color: 0x3d9a4a, roughness: 0.9, flatShading: true }), Math.max(1, trees.length));
    trees.forEach((t, i) => { pos.set(t.x, CURB_Y, t.z); sc.set(t.s, t.s, t.s); q.identity(); m4.compose(pos, q, sc); treeT.setMatrixAt(i, m4); treeC.setMatrixAt(i, m4); });
    treeT.castShadow = treeC.castShadow = true;
    this.group.add(treeT, treeC);

    // Fonts.
    for (const f of this.city.fountain || []) {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.4, 1.2, 16), new THREE.MeshStandardMaterial({ color: 0xcfd3d8 }));
      base.position.set(f.x, CURB_Y + 0.6, f.z);
      const water = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x3aa0d8, emissive: 0x104060, roughness: 0.2 }));
      water.position.set(f.x, CURB_Y + 1.18, f.z);
      this.group.add(base, water);
    }
    // Para-sols de platja.
    const um = this.city.beach.umbrellas || [];
    const umG = new THREE.ConeGeometry(1.6, 0.7, 8); umG.translate(0, 2.2, 0);
    const poleG = new THREE.CylinderGeometry(0.05, 0.05, 2.2, 5); poleG.translate(0, 1.1, 0);
    const umM = new THREE.InstancedMesh(umG, new THREE.MeshStandardMaterial({ color: 0xffffff }), Math.max(1, um.length));
    const upM = new THREE.InstancedMesh(poleG, new THREE.MeshStandardMaterial({ color: 0xdddddd }), Math.max(1, um.length));
    um.forEach((u, i) => { pos.set(u.x, 0.02, u.z); sc.set(1, 1, 1); q.identity(); m4.compose(pos, q, sc); umM.setMatrixAt(i, m4); upM.setMatrixAt(i, m4); umM.setColorAt(i, col(u.c)); });
    this.group.add(umM, upM);
  }

  buildSignsAndSea() {
    for (const s of this.city.signs) {
      const tex = signTexture(s.text, s.color, s.bg, s.neon);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: !s.bg, toneMapped: false, side: THREE.DoubleSide });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(s.w, s.h), mat);
      m.position.set(s.x, CURB_Y + s.y, s.z);
      this.group.add(m);
      if (s.neon) this.neonMats.push(mat);
    }
    const seaTex = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
      const r = new Rng(9);
      for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(160,200,230,${r.range(0.15, 0.5)})`; g.fillRect(r.range(0, w), r.range(0, h), r.range(8, 30), 2); }
    }, { repeat: true });
    seaTex.repeat.set(500, 500);
    this.seaTex = seaTex;
    this.sea = new THREE.Mesh(new THREE.PlaneGeometry(8000, 8000), new THREE.MeshStandardMaterial({ color: 0x0f6a9e, map: seaTex, roughness: 0.28, metalness: 0.15 }));
    this.sea.rotation.x = -Math.PI / 2; this.sea.position.set(CITY_MAX / 2, -0.7, CITY_MAX / 2);
    this.sea.receiveShadow = true;
    this.scene.add(this.sea);
  }

  // ---------------------------------------------------------------------- cel
  buildSky() {
    this.skyUniforms = {
      top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() },
      sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunColor: { value: new THREE.Color() }, night: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `varying vec3 vDir; uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform float night;
        void main(){
          float h = vDir.y;
          vec3 c = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
          if (h < 0.0) c = mix(horizon, horizon * 0.5, clamp(-h * 4.0, 0.0, 1.0));
          float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
          c += sunColor * (pow(s, 600.0) * 3.0 + pow(s, 10.0) * 0.35);
          float m = max(dot(normalize(vDir), normalize(-sunDir)), 0.0);
          c += vec3(0.75, 0.85, 1.0) * pow(m, 900.0) * 2.0 * night;
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(2000, 32, 16), mat);
    this.sky.renderOrder = -10; this.sky.frustumCulled = false;
    this.scene.add(this.sky);
    // Estrelles.
    const r = new Rng(31), pts = [];
    for (let i = 0; i < 700; i++) {
      const th = r.range(0, Math.PI * 2), ph = Math.acos(r.range(0.05, 1));
      pts.push(Math.sin(ph) * Math.cos(th) * 1900, Math.cos(ph) * 1900, Math.sin(ph) * Math.sin(th) * 1900);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    this.stars = new THREE.Points(sg, this.starMat); this.stars.frustumCulled = false;
    this.scene.add(this.stars);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x3a4a3a, 0.6);
    this.sun = new THREE.DirectionalLight(0xffffff, 1);
    this.sun.castShadow = true;
    this.sun.shadow.bias = -0.0006; this.sun.shadow.normalBias = 0.6;
    const sc = this.sun.shadow.camera; sc.near = 10; sc.far = 400; sc.left = sc.bottom = -70; sc.right = sc.top = 70;
    this.scene.add(this.hemi, this.sun, this.sun.target);
    this.scene.fog = new THREE.Fog(0xaaccff, 120, 750);
  }

  setQuality(q) {
    this.quality = q;
    const sm = q === 'high' ? 2048 : q === 'medium' ? 1024 : 0;
    this.sun.castShadow = sm > 0;
    if (sm > 0) {
      this.sun.shadow.mapSize.set(sm, sm);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
    this.scene.fog.far = q === 'high' ? 950 : q === 'medium' ? 750 : 520;
    this.scene.fog.near = 120;
  }

  setHour(h) { this.hour = ((h % 24) + 24) % 24; }

  // dt en segons reals; focus = posició del jugador (per a les ombres).
  update(dt, fx, fz, camera) {
    this.hour = (this.hour + (dt / this.dayLength) * 24) % 24;
    const a = ((this.hour - 6) / 24) * Math.PI * 2;
    const elev = Math.sin(a);
    this.sunElev = elev;
    const dir = new THREE.Vector3(Math.cos(a) * 0.85, elev, 0.35).normalize();
    const day = smoothstep(-0.08, 0.35, elev);
    const night = 1 - smoothstep(-0.12, 0.12, elev);
    const dusk = Math.exp(-Math.pow((elev - 0.04) / 0.16, 2));
    this.night = night;

    const top = col('#06091f').lerp(col('#3a86d8'), day).lerp(col('#5a3f9a'), dusk * 0.75);
    const hor = col('#161640').lerp(col('#a9d3ff'), day).lerp(col('#ff7b4f'), dusk * 0.85);
    this.skyUniforms.top.value.copy(top);
    this.skyUniforms.horizon.value.copy(hor);
    this.skyUniforms.sunDir.value.copy(dir);
    this.skyUniforms.sunColor.value.copy(col('#ffd9a0').lerp(col('#ff9650'), dusk));
    this.skyUniforms.night.value = night;
    this.scene.fog.color.copy(hor);
    this.starMat.opacity = clamp(night * 1.1, 0, 1);

    const sunI = Math.max(0, elev) * 2.2 * (1 - dusk * 0.25);
    this.sun.intensity = Math.max(sunI, night * 0.7);
    this.sun.color.copy(night > 0.6 ? col('#8fa6ff') : col('#fff1d6').lerp(col('#ff9a5a'), dusk));
    this.hemi.intensity = lerp(1.25, 1.0, day);
    this.hemi.color.copy(col('#8a9ae0').lerp(col('#cfe4ff'), day));
    this.hemi.groundColor.copy(col('#34405a').lerp(col('#4a5a46'), day));

    this.windowMat.emissiveIntensity = clamp(night * 1.2 + dusk * 0.45, 0, 1.3);
    this.glowMat.opacity = clamp(night + dusk * 0.5, 0, 1) * 0.85;
    this.lampMat.color.copy(col('#4b4e54').lerp(col('#ffe9a8'), clamp(night + dusk * 0.6, 0, 1)));
    for (const m of this.neonMats) m.color.setScalar(lerp(0.55, 1.15, clamp(night + dusk * 0.7, 0, 1)));
    this.seaTex.offset.x += dt * 0.0004; this.seaTex.offset.y += dt * 0.0002;

    // Llum direccional (sol o lluna) segueix el jugador, ajustada a la quadrícula de la textura d'ombres.
    const lightDir = elev > -0.05 ? dir : dir.clone().negate();
    const snap = 140 / Math.max(1, this.sun.shadow.mapSize.x || 1024);
    const sx = Math.round(fx / snap) * snap, sz = Math.round(fz / snap) * snap;
    this.sun.position.set(sx + lightDir.x * 160, Math.max(30, lightDir.y * 160 + 40), sz + lightDir.z * 160);
    this.sun.target.position.set(sx, 0, sz);
    this.sun.target.updateMatrixWorld();
    if (camera) { this.sky.position.copy(camera.position); this.stars.position.copy(camera.position); }
  }

  get timeString() {
    const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60);
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }
}
