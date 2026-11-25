// Àudio sintètic amb WebAudio: motor, trets, explosions, sirenes i ràdio procedimental.
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export const STATIONS = [
  { name: 'Neon Wave FM', bpm: 104 },
  { name: 'Radio Caribe', bpm: 98 },
  { name: 'Lo-Fi Costa', bpm: 78 },
  { name: 'Silenci', bpm: 0 },
];

export class AudioSys {
  constructor() {
    this.ctx = null; this.ok = false;
    this.station = 0; this.step = 0; this.nextT = 0;
    this.masterVol = 0.7; this.musicVol = 0.5;
    this.engineOn = false;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = this.ctx = new AC();
      this.master = c.createGain(); this.master.gain.value = this.masterVol; this.master.connect(c.destination);
      this.sfx = c.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
      this.music = c.createGain(); this.music.gain.value = this.musicVol; this.music.connect(this.master);
      // Soroll blanc reutilitzable.
      const len = c.sampleRate * 1.5, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = buf;
      // Motor: dos oscil·ladors a través d'un passabaixos.
      this.eng = { o1: c.createOscillator(), o2: c.createOscillator(), g: c.createGain(), f: c.createBiquadFilter() };
      this.eng.o1.type = 'sawtooth'; this.eng.o2.type = 'square';
      this.eng.f.type = 'lowpass'; this.eng.f.frequency.value = 400;
      this.eng.g.gain.value = 0;
      this.eng.o1.connect(this.eng.f); this.eng.o2.connect(this.eng.f); this.eng.f.connect(this.eng.g); this.eng.g.connect(this.sfx);
      this.eng.o1.start(); this.eng.o2.start();
      // Sirena.
      this.sir = { o: c.createOscillator(), g: c.createGain() };
      this.sir.o.type = 'sawtooth'; this.sir.g.gain.value = 0; this.sir.o.connect(this.sir.g); this.sir.g.connect(this.sfx); this.sir.o.start();
      this.nextT = c.currentTime + 0.1;
      this.ok = true;
      if (c.state === 'suspended') c.resume().catch(() => {});
    } catch (e) { this.ok = false; }
  }

  setMaster(v) { this.masterVol = v; if (this.ok) this.master.gain.value = v; }
  setMusic(v) { this.musicVol = v; if (this.ok) this.music.gain.value = v; }
  nextStation() { this.station = (this.station + 1) % STATIONS.length; this.step = 0; return STATIONS[this.station].name; }
  get stationName() { return STATIONS[this.station].name; }

  // ------------------------------------------------------------- primitives
  _osc(type, f, t, dur, gain, dest, f2) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(Math.max(1, f2), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  _noise(t, dur, gain, dest, freq = 2000, type = 'bandpass', q = 1) {
    const c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; s.loop = true; f.type = type; f.frequency.value = freq; f.Q.value = q;
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  _kick(t, v = 1) { this._osc('sine', 140, t, 0.22, 0.9 * v, this.music, 40); }
  _snare(t, v = 1) { this._noise(t, 0.14, 0.45 * v, this.music, 1800, 'highpass'); this._osc('triangle', 220, t, 0.1, 0.25 * v, this.music, 120); }
  _hat(t, v = 1) { this._noise(t, 0.04, 0.16 * v, this.music, 7000, 'highpass'); }

  // -------------------------------------------------------------------- sfx
  _vol(dist, ref = 25) { return 1 / (1 + (dist / ref) * (dist / ref)); }
  gunshot(kind = 'pistol', dist = 0) {
    if (!this.ok) return; const t = this.ctx.currentTime, v = this._vol(dist, 40);
    if (v < 0.02) return;
    const heavy = kind === 'shotgun';
    this._noise(t, heavy ? 0.28 : 0.14, (heavy ? 1.0 : 0.7) * v, this.sfx, heavy ? 900 : 1600, 'lowpass');
    this._osc('square', heavy ? 120 : 220, t, 0.09, 0.4 * v, this.sfx, 60);
  }
  explosion(dist = 0) {
    if (!this.ok) return; const t = this.ctx.currentTime, v = this._vol(dist, 70);
    this._noise(t, 1.4, 1.3 * v, this.sfx, 500, 'lowpass');
    this._osc('sine', 90, t, 1.0, 1.2 * v, this.sfx, 25);
  }
  crash(intensity = 1, dist = 0) {
    if (!this.ok) return; const t = this.ctx.currentTime, v = Math.min(1, intensity) * this._vol(dist, 40);
    if (v < 0.03) return;
    this._noise(t, 0.3, 0.8 * v, this.sfx, 700, 'bandpass', 0.7);
    this._osc('sawtooth', 120, t, 0.18, 0.3 * v, this.sfx, 50);
  }
  horn(on) {
    if (!this.ok) return;
    if (on && !this._hornO) {
      const c = this.ctx, g = c.createGain(); g.gain.value = 0.18; g.connect(this.sfx);
      const a = c.createOscillator(), b = c.createOscillator(); a.type = b.type = 'square'; a.frequency.value = 392; b.frequency.value = 494;
      a.connect(g); b.connect(g); a.start(); b.start(); this._hornO = { a, b, g };
    } else if (!on && this._hornO) { const h = this._hornO; h.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.02); h.a.stop(this.ctx.currentTime + 0.2); h.b.stop(this.ctx.currentTime + 0.2); this._hornO = null; }
  }
  beep(kind = 'ok') {
    if (!this.ok) return; const t = this.ctx.currentTime;
    if (kind === 'ok') { this._osc('triangle', 660, t, 0.12, 0.3, this.sfx); this._osc('triangle', 880, t + 0.1, 0.18, 0.3, this.sfx); }
    else if (kind === 'fail') { this._osc('sawtooth', 300, t, 0.3, 0.3, this.sfx, 120); }
    else if (kind === 'cash') { this._osc('square', 1200, t, 0.06, 0.2, this.sfx); this._osc('square', 1600, t + 0.06, 0.12, 0.2, this.sfx); }
    else { this._osc('sine', 500, t, 0.06, 0.2, this.sfx); }
  }

  // Motor del jugador i sirena més propera. ratio 0..1 de velocitat.
  engine(active, ratio, throttle) {
    if (!this.ok) return;
    const t = this.ctx.currentTime, e = this.eng;
    const base = 38 + ratio * 150 + throttle * 12;
    e.o1.frequency.setTargetAtTime(base, t, 0.05); e.o2.frequency.setTargetAtTime(base * 0.5, t, 0.05);
    e.f.frequency.setTargetAtTime(250 + ratio * 900 + throttle * 300, t, 0.05);
    e.g.gain.setTargetAtTime(active ? 0.05 + throttle * 0.05 + ratio * 0.04 : 0, t, 0.08);
  }
  siren(nearestDist) {
    if (!this.ok) return;
    const t = this.ctx.currentTime, v = nearestDist < 220 ? 0.07 * this._vol(nearestDist, 90) : 0;
    this.sir.o.frequency.setTargetAtTime(700 + (Math.floor(t * 2.2) % 2) * 380, t, 0.02);
    this.sir.g.gain.setTargetAtTime(v, t, 0.1);
  }

  // ------------------------------------------------------------------ ràdio
  update() {
    if (!this.ok || this.ctx.state !== 'running') return;
    const st = STATIONS[this.station];
    if (!st.bpm) return;
    const stepLen = 60 / st.bpm / 4;
    const now = this.ctx.currentTime;
    if (this.nextT < now - 0.5) this.nextT = now + 0.05;
    let guard = 0;
    while (this.nextT < now + 0.25 && guard++ < 16) {
      this._schedule(this.station, this.step, this.nextT, stepLen);
      this.step = (this.step + 1) % 256; this.nextT += stepLen;
    }
  }
  _schedule(station, s, t, L) {
    const bar = Math.floor(s / 16) % 4, k = s % 16;
    if (station === 0) { // Synthwave: Am F C G
      const roots = [57, 53, 48, 55], root = roots[bar];
      if (k % 4 === 0) this._kick(t, 1);
      if (k === 4 || k === 12) this._snare(t, 1);
      if (k % 2 === 0) this._hat(t, k % 4 === 2 ? 1 : 0.5);
      if (k % 2 === 0) this._osc('sawtooth', mtof(root - 12), t, L * 1.8, 0.26, this.music);
      const arp = [0, 7, 12, 7, 16, 12, 7, 12], note = root + 12 + arp[k % 8] + (bar === 1 ? 0 : 0);
      this._osc('square', mtof(note), t, L * 0.9, 0.07, this.music);
      if (k === 0) for (const iv of [0, 3 + (bar === 1 || bar === 2 ? 1 : 0), 7]) this._osc('triangle', mtof(root + 12 + iv), t, L * 14, 0.05, this.music);
    } else if (station === 1) { // Llatí
      const roots = [52, 57, 50, 55], root = roots[bar];
      if (k === 0 || k === 6 || k === 10) this._kick(t, 0.9);
      if (k === 4 || k === 12) this._noise(t, 0.08, 0.4, this.music, 3000, 'bandpass', 3);
      if ([2, 3, 7, 11, 14].includes(k)) this._noise(t, 0.06, 0.25, this.music, 1100 + (k % 3) * 400, 'bandpass', 5);
      if (k % 2 === 0) this._hat(t, 0.6);
      if ([0, 3, 6, 8, 11, 14].includes(k)) this._osc('triangle', mtof(root - 12 + (k > 7 ? 7 : 0)), t, L * 2.2, 0.3, this.music);
      if ([2, 5, 10, 13].includes(k)) for (const iv of [0, 4, 7, 10]) this._osc('square', mtof(root + 12 + iv), t, L * 1.2, 0.035, this.music);
    } else { // Lo-fi
      const prog = [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 65]], ch = prog[bar];
      if (k === 0 || k === 10) this._kick(t, 0.7);
      if (k === 8) this._snare(t, 0.55);
      if (k % 4 === 2) this._hat(t, 0.5);
      if (k === 0) for (const n of ch) this._osc('triangle', mtof(n), t, L * 15, 0.07, this.music);
      if ([0, 3, 6, 9, 12].includes(k)) this._osc('sine', mtof(ch[(k / 3) % 4] + 12), t, L * 3, 0.1, this.music);
      if (k % 8 === 0) this._osc('sine', mtof(ch[0] - 24), t, L * 7, 0.3, this.music);
      if (k % 4 === 1) this._noise(t, 0.05, 0.02, this.music, 5000, 'highpass');
    }
  }
}
