// HUD amb DOM + minimapa en canvas.
import { LAND, CITY_MAX, N, BLOCK, HALF_ROAD } from './city.js';
import { WEAPONS } from './combat.js';
import { fmtMoney } from './util.js';

const MAP_OFF = 100;           // marge del mapa pre-renderitzat (m)
const MAP_SIZE = 900;

function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }

export class HUD {
  constructor(root, city) {
    this.root = root; this.city = city;
    root.innerHTML = `
      <div id="hud-top-left"><canvas id="minimap" width="220" height="220"></canvas>
        <div class="bars"><div class="bar hp"><i id="b-hp"></i></div><div class="bar ar"><i id="b-ar"></i></div></div>
        <div id="time"></div></div>
      <div id="hud-top-right"><div id="money"></div><div id="stars"></div><div id="weapon"></div></div>
      <div id="mission" class="hidden"><div id="m-title"></div><div id="m-obj"></div><div id="m-prog"></div></div>
      <div id="speedo" class="hidden"><div id="kmh">0</div><small>km/h</small><div class="bar car"><i id="b-car"></i></div></div>
      <div id="radio" class="hidden"></div>
      <div id="prompt" class="hidden"></div>
      <div id="reticle" class="hidden"><i></i></div>
      <div id="toasts"></div>
      <div id="banner" class="hidden"><h1></h1><p></p></div>
      <div id="vignette"></div>
      <div id="bigmap" class="hidden"><canvas id="bigmap-c" width="720" height="720"></canvas><div class="legend">M · tancar mapa</div></div>
      <div id="shop" class="hidden"></div>`;
    this.q = (s) => root.querySelector(s);
    this.mini = this.q('#minimap').getContext('2d');
    this.big = this.q('#bigmap-c').getContext('2d');
    this.cache = {};
    this.map = this.renderMap();
    this.bannerT = 0; this.radioT = 0; this.toastCount = 0;
  }

  set(id, text) { if (this.cache[id] !== text) { this.cache[id] = text; this.q('#' + id).textContent = text; } }
  show(id, on) { const k = 'v' + id; if (this.cache[k] !== on) { this.cache[k] = on; this.q('#' + id).classList.toggle('hidden', !on); } }

  toast(text) {
    const t = el('div', 'toast', text);
    const box = this.q('#toasts');
    box.appendChild(t);
    while (box.children.length > 4) box.removeChild(box.firstChild);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 500); }, 3200);
  }
  banner(title, kind, sub = '') {
    const b = this.q('#banner');
    b.className = kind; b.querySelector('h1').textContent = title; b.querySelector('p').textContent = sub;
    this.bannerT = kind === 'start' ? 5 : 4;
  }
  showRadio(name) { this.radioName = name; this.radioT = 3.5; }

  // ---------------------------------------------------------------- mapa base
  renderMap() {
    const c = document.createElement('canvas'); c.width = c.height = MAP_SIZE;
    const g = c.getContext('2d');
    g.translate(MAP_OFF, MAP_OFF);
    g.fillStyle = '#1f5f86'; g.fillRect(-MAP_OFF, -MAP_OFF, MAP_SIZE, MAP_SIZE);
    g.fillStyle = '#45704c'; g.fillRect(LAND.minX, LAND.minZ, LAND.maxX - LAND.minX, LAND.maxZ - LAND.minZ);
    g.fillStyle = '#6e737b'; g.fillRect(LAND.minX, LAND.minZ, LAND.maxX - LAND.minX, LAND.minZ * -1 - HALF_ROAD);
    g.fillStyle = '#e0cf9a'; g.fillRect(CITY_MAX + HALF_ROAD, -HALF_ROAD, LAND.maxX - CITY_MAX - HALF_ROAD, LAND.maxZ + HALF_ROAD);
    g.fillStyle = '#3b3f48';
    for (let i = 0; i <= N; i++) { g.fillRect(i * BLOCK - HALF_ROAD, -HALF_ROAD, 2 * HALF_ROAD, CITY_MAX + 2 * HALF_ROAD); g.fillRect(-HALF_ROAD, i * BLOCK - HALF_ROAD, CITY_MAX + 2 * HALF_ROAD, 2 * HALF_ROAD); }
    const colors = { residential: '#8a7f86', downtown: '#6f7f98', hotel: '#a78a98', port: '#6b6f66', park: '#3f8f4f', special: '#9a8f66' };
    for (const b of this.city.blocks) {
      g.fillStyle = colors[b.kind] || '#777';
      const s = BLOCK - 2 * HALF_ROAD;
      g.fillRect(b.cx - s / 2, b.cz - s / 2, s, s);
    }
    g.fillStyle = 'rgba(255,255,255,0.18)';
    for (const b of this.city.buildings) g.fillRect(b.cx - b.w / 2, b.cz - b.d / 2, b.w, b.d);
    return c;
  }

  drawMap(ctx, size, cx, cz, yaw, scale, game, rotate) {
    ctx.save();
    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);
    if (rotate) ctx.rotate(yaw - Math.PI);
    ctx.scale(scale, scale);
    ctx.drawImage(this.map, -(cx + MAP_OFF), -(cz + MAP_OFF));
    const px = (x) => x - cx, pz = (z) => z - cz;
    // Pickups.
    for (const p of game.pickups) if (!p.taken) { ctx.fillStyle = p.type === 'health' ? '#ff5d73' : p.type === 'armor' ? '#4cc9f0' : p.type === 'cash' ? '#46d36a' : '#ffd23f'; ctx.fillRect(px(p.x) - 1.6, pz(p.z) - 1.6, 3.2, 3.2); }
    // Botiga.
    const shop = this.city.pois.gunshop;
    ctx.fillStyle = '#ff6b35'; ctx.beginPath(); ctx.arc(px(shop.x), pz(shop.z), 4 / Math.max(scale, 0.5), 0, 7); ctx.fill();
    // Policia.
    const blink = Math.floor(game.time * 4) % 2;
    for (const v of game.vehicles) if (v.driver === 'police' && !v.dead) { ctx.fillStyle = blink ? '#ff3b3b' : '#3b6bff'; ctx.beginPath(); ctx.arc(px(v.x), pz(v.z), 4.5 / Math.max(scale, 0.5), 0, 7); ctx.fill(); }
    for (const p of game.peds) if (p.kind === 'cop' && p.state !== 'dead') { ctx.fillStyle = blink ? '#ff3b3b' : '#3b6bff'; ctx.fillRect(px(p.x) - 1.5, pz(p.z) - 1.5, 3, 3); }
    // Missions.
    for (const m of game.missions.markers()) {
      const r = (m.small ? 3.2 : 5.5) / Math.max(scale, 0.5);
      ctx.fillStyle = m.color; ctx.strokeStyle = '#000'; ctx.lineWidth = 1 / scale;
      ctx.beginPath(); ctx.arc(px(m.x), pz(m.z), r, 0, 7); ctx.fill(); ctx.stroke();
      if (m.kind === 'dest') { ctx.strokeStyle = m.color; ctx.lineWidth = 1.2 / scale; ctx.beginPath(); ctx.arc(px(m.x), pz(m.z), (m.r || 6), 0, 7); ctx.stroke(); }
    }
    // Vehicle del jugador aparcat.
    ctx.restore();
    // Jugador (fletxa sempre cap amunt si rota; si no, orientada).
    ctx.save();
    const me = game.player;
    ctx.translate(size / 2 + (rotate ? 0 : (me.x - cx) * scale), size / 2 + (rotate ? 0 : (me.z - cz) * scale));
    if (!rotate) ctx.rotate(Math.PI - yaw);
    ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#000'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(6.5, 8); ctx.lineTo(0, 4); ctx.lineTo(-6.5, 8); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  // ------------------------------------------------------------------ update
  update(game, dt) {
    const pl = game.player;
    this.set('money', fmtMoney(pl.money));
    this.set('time', game.world.timeString + (game.world.night > 0.5 ? '  ☾' : '  ☀'));
    this.q('#b-hp').style.width = Math.max(0, pl.hp) + '%';
    this.q('#b-ar').style.width = pl.armor + '%';
    this.q('#b-ar').parentElement.style.opacity = pl.armor > 0 ? 1 : 0.35;
    const lvl = game.wanted.level;
    const flash = game.wanted.evading && Math.floor(game.time * 3) % 2 === 0;
    let stars = '';
    for (let i = 0; i < 5; i++) stars += `<b class="${i < lvl ? (flash ? 'on flash' : 'on') : ''}">★</b>`;
    if (this.cache.stars !== stars + flash) { this.cache.stars = stars + flash; this.q('#stars').innerHTML = stars; }
    const w = WEAPONS[pl.current], st = pl.weapons[pl.current];
    this.set('weapon', pl.vehicle ? '' : `${w.name}  ${st.clip}/${st.ammo}${pl.reloadT > 0 ? '  ↻' : ''}`);

    const m = game.missions;
    this.show('mission', !!m.active);
    if (m.active) {
      this.set('m-title', m.active.def.title);
      const tl = m.timeLeft;
      this.set('m-obj', m.objective + (tl !== null ? `  ·  ${Math.ceil(tl)} s` : ''));
      this.set('m-prog', m.progress);
    }
    const v = pl.vehicle;
    this.show('speedo', !!v);
    if (v) { this.set('kmh', String(Math.round(Math.abs(v.speed) * 3.6))); this.q('#b-car').style.width = Math.max(0, (v.health / v.spec.hp) * 100) + '%'; }

    // Pistes.
    let prompt = '';
    if (game.shopOpen) prompt = '';
    else if (v) prompt = 'F · Sortir del cotxe';
    else if (pl.nearVehicle) prompt = 'F · Entrar al ' + pl.nearVehicle.spec.name.toLowerCase();
    else if (game.nearShop) prompt = 'E · Entrar a l\'armeria';
    this.set('prompt', prompt); this.show('prompt', !!prompt && game.mode === 'play');
    this.show('reticle', !v && !pl.dead && game.mode === 'play');
    this.q('#reticle').classList.toggle('aim', pl.aiming);

    this.radioT = Math.max(0, this.radioT - dt);
    this.show('radio', (!!v || this.radioT > 0) && game.audio.station !== 3 || this.radioT > 0);
    this.set('radio', '♪ ' + game.audio.stationName);
    this.bannerT = Math.max(0, this.bannerT - dt);
    this.q('#banner').classList.toggle('hidden', this.bannerT <= 0);
    // Pantalla vermella en rebre mal; fosc en morir.
    const vig = this.q('#vignette');
    vig.style.opacity = String(Math.min(1, pl.hurtT * 2.2 + (pl.hp < 30 ? 0.25 : 0)));

    // Minimapa.
    const yaw = game.cam.yaw;
    this.drawMap(this.mini, 220, pl.x, pl.z, yaw, 0.85, game, true);
    if (game.bigMap) this.drawMap(this.big, 720, 350, 350, 0, 720 / 880, game, false);
  }
}
