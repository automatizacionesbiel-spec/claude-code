// Missions: definicions per dades + gestor d'estats.
import { corner, intersection, blockCenter } from './city.js';
import { dist } from './util.js';

const lane = (axis, line, dir, along) => {
  // Posició al carril dret d'una carretera (circulació per la dreta).
  const off = axis === 'x' ? (dir > 0 ? 3.5 : -3.5) : (dir > 0 ? -3.5 : 3.5);
  return axis === 'x' ? { x: along, z: line * 70 + off } : { x: line * 70 + off, z: along };
};
const headingFor = (axis, dir) => (axis === 'x' ? (dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (dir > 0 ? 0 : Math.PI));

export function buildMissions(city) {
  const gar = city.pois.garage, bank = city.pois.bank;
  const g = (i, j) => corner(i, j);
  const pt = (i, j) => intersection(i, j);
  const car = (axis, line, dir, along) => ({ ...lane(axis, line, dir, along), h: headingFor(axis, dir) });
  return [
    {
      id: 'deliver', title: 'Entrega nocturna', giver: g(2, 2), reward: 600,
      intro: 'Un client paga bé per un esportiu groc. Roba\'l i porta\'l al garatge abans que se n\'adonin.',
      steps: [
        { type: 'getcar', text: 'Roba l\'esportiu groc', vtype: 'sports', color: '#f1c40f', at: car('z', 4, -1, 105) },
        { type: 'goto', text: 'Porta el cotxe al garatge', at: gar, r: 6, needCar: true, timeLimit: 150 },
      ],
    },
    {
      id: 'race', title: 'Cursa de controls', giver: g(4, 6), reward: 900,
      intro: 'Cursa contra el rellotge pels carrers de Palmera Bay. Passa pels 6 controls abans que s\'acabi el temps.',
      ride: { vtype: 'sports', color: '#e74c3c', at: car('z', 4, -1, 450) },
      steps: [
        { type: 'checkpoints', text: 'Passa pels controls', points: [pt(4, 8), pt(8, 8), pt(8, 4), pt(5, 4), pt(5, 7), pt(3, 7)], r: 11, timeLimit: 130, needVehicle: true },
      ],
    },
    {
      id: 'chase', title: 'Caça al fugitiu', giver: g(7, 3), reward: 1400,
      intro: 'Un lladre fuig amb el botí en un sedan morat. Atura\'l abans que s\'escapi de la ciutat.',
      ride: { vtype: 'sports', color: '#16a085', at: car('z', 7, -1, 250) },
      steps: [
        { type: 'destroy', text: 'Destrueix el sedan morat', vtype: 'sedan', color: '#7d3c98', at: car('x', 2, 1, 400), timeLimit: 150 },
      ],
    },
    {
      id: 'heist', title: 'El gran cop', giver: g(6, 7), reward: 5000,
      intro: 'El banc central té una caixa forta plena. Entra, buida-la i fuig. La policia no trigarà gens.',
      steps: [
        { type: 'goto', text: 'Ves al banc', at: { x: bank.x, z: bank.z - 3 }, r: 4, onFoot: true },
        { type: 'hold', text: 'Buida la caixa forta', at: { x: bank.x, z: bank.z - 3 }, r: 6, seconds: 7, alarm: 3 },
        { type: 'getcar', text: 'Puja al cotxe de fugida', vtype: 'sedan', color: '#1b1b1b', at: car('z', 5, -1, 318), keepWanted: true },
        { type: 'evade', text: 'Perd la policia' },
        { type: 'goto', text: 'Amaga\'t al garatge', at: gar, r: 6 },
      ],
    },
    {
      id: 'gang', title: 'Neteja de barri', giver: g(8, 8), reward: 1800, give: { smg: 90 },
      intro: 'Una banda s\'ha apoderat del parc. Et deixo una metralleta: neteja\'ls, però ells també disparen.',
      steps: [
        { type: 'kill', text: 'Elimina els membres de la banda', at: blockCenter(8, 6), r: 14, count: 5 },
      ],
    },
  ];
}

export class Missions {
  constructor(game) {
    this.g = game;
    this.defs = buildMissions(game.city);
    this.done = new Set();
    this.active = null;   // { def, i, t, st }
    this.cd = 0;          // refredament després de fallar
    this.armed = new Set(this.defs.map((d) => d.id)); // una missió només es torna a iniciar després de sortir del marcador
  }

  get objective() { return this.active ? this.active.st.text : ''; }
  get timeLeft() { const a = this.active; return a && a.st.timeLimit ? Math.max(0, a.st.timeLimit - a.t) : null; }
  get progress() { const a = this.active; return a && a.st.progress ? a.st.progress : ''; }

  start(id) {
    const g = this.g;
    const def = this.defs.find((d) => d.id === id);
    if (!def || this.active) return false;
    this.armed.delete(id);
    this.active = { def, i: -1, t: 0, st: null, vehicles: [], peds: [] };
    if (def.give) for (const [w, n] of Object.entries(def.give)) g.player.giveWeapon(w, n);
    if (def.ride) { const v = g.addVehicle(def.ride.vtype, def.ride.at.x, def.ride.at.z, def.ride.at.h, def.ride.color, { mission: true }); this.active.vehicles.push(v); }
    g.hud.banner(def.title, 'start', def.intro);
    g.audio.beep('ok');
    this.nextStep();
    return true;
  }

  nextStep() {
    const a = this.active, g = this.g;
    a.i++; a.t = 0;
    if (a.i >= a.def.steps.length) return this.complete();
    const st = a.st = { ...a.def.steps[a.i], timeLimit: a.def.steps[a.i].timeLimit || 0, hold: 0, cp: 0 };
    if (st.type === 'getcar') {
      st.car = g.addVehicle(st.vtype, st.at.x, st.at.z, st.at.h, st.color, { mission: true });
      a.vehicles.push(st.car); a.car = st.car;
    } else if (st.type === 'destroy') {
      st.car = g.addVehicle(st.vtype, st.at.x, st.at.z, st.at.h, st.color, { mission: true, aiMode: 'flee' });
      a.vehicles.push(st.car);
    } else if (st.type === 'kill') {
      st.peds = g.spawnGang(st.at.x, st.at.z, st.r, st.count);
      a.peds.push(...st.peds);
    }
    return null;
  }

  fail(reason) {
    const a = this.active; if (!a) return;
    this.g.hud.banner('MISSIÓ FALLIDA', 'fail', reason);
    this.g.audio.beep('fail');
    this.cleanup();
    this.cd = 4;
  }

  complete() {
    const a = this.active, g = this.g;
    const first = !this.done.has(a.def.id);
    const reward = first ? a.def.reward : Math.round(a.def.reward * 0.25); // repetir una missió paga el 25 %
    this.done.add(a.def.id);
    g.addMoney(reward);
    g.hud.banner('MISSIÓ SUPERADA', 'pass', `${a.def.title} · +$${reward.toLocaleString('en-US')}` + (first ? '' : ' (repetició)'));
    g.audio.beep('cash');
    g.stats.missions++;
    this.cleanup();
    g.requestSave();
  }

  cleanup() {
    const a = this.active; if (!a) return;
    for (const v of a.vehicles) { v.mission = false; if (v.ai) v.ai.role = 'traffic'; }
    for (const p of a.peds) p.mission = false;
    this.active = null;
  }

  abort() { if (this.active) this.cleanup(); }

  // Marcadors per dibuixar (món i minimapa).
  markers() {
    const out = [];
    const a = this.active, g = this.g, pl = g.player;
    if (a) {
      const st = a.st;
      if (!st) return out;
      if (st.type === 'getcar' && st.car && !st.car.exploded) out.push({ x: st.car.x, z: st.car.z, color: '#ffd23f', kind: 'target', tall: true });
      else if (st.type === 'goto') {
        if (st.needCar && a.car && pl.vehicle !== a.car) out.push({ x: a.car.x, z: a.car.z, color: '#ffd23f', kind: 'target', tall: true });
        else out.push({ x: st.at.x, z: st.at.z, color: '#4cc9f0', kind: 'dest', r: st.r });
      } else if (st.type === 'hold') out.push({ x: st.at.x, z: st.at.z, color: '#ff9f1c', kind: 'dest', r: st.r });
      else if (st.type === 'checkpoints') {
        const p = st.points[st.cp]; if (p) out.push({ x: p.x, z: p.z, color: '#4cc9f0', kind: 'dest', r: st.r });
        const q = st.points[st.cp + 1]; if (q) out.push({ x: q.x, z: q.z, color: '#2b6f85', kind: 'dest', r: st.r * 0.6, small: true });
      } else if (st.type === 'destroy' && st.car && !st.car.dead) out.push({ x: st.car.x, z: st.car.z, color: '#ff4d4d', kind: 'enemy', tall: true });
      else if (st.type === 'kill') for (const p of st.peds) if (p.state !== 'dead') out.push({ x: p.x, z: p.z, color: '#ff4d4d', kind: 'enemy', small: true });
    } else {
      for (const d of this.defs) {
        const done = this.done.has(d.id);
        out.push({ x: d.giver.x, z: d.giver.z, color: done ? '#46d36a' : '#ffd23f', kind: 'giver', r: 2.4, label: d.title, done });
      }
    }
    return out;
  }

  update(dt) {
    const g = this.g, pl = g.player;
    if (this.cd > 0) this.cd -= dt;
    const a = this.active;
    // Re-arma els marcadors quan el jugador s'allunya.
    for (const d of this.defs) if (dist(pl.x, pl.z, d.giver.x, d.giver.z) > 4.5) this.armed.add(d.id);
    if (!a) {
      if (this.cd > 0 || pl.dead || pl.vehicle) return;
      for (const d of this.defs) {
        if (this.armed.has(d.id) && dist(pl.x, pl.z, d.giver.x, d.giver.z) < 2.6) {
          if (g.wanted.level > 0) { if (!this._warned) { g.hud.toast('Perd la policia abans de començar una missió'); this._warned = true; } return; }
          this._warned = false;
          this.start(d.id);
          return;
        }
      }
      return;
    }
    if (pl.dead) return this.fail('Has mort');
    a.t += dt;
    const st = a.st;
    if (st.timeLimit && a.t > st.timeLimit) return this.fail('S\'ha esgotat el temps');
    if (st.type === 'goto' && st.needCar && a.car && (a.car.dead || a.car.exploded)) return this.fail('El vehicle ha quedat destruït');
    switch (st.type) {
      case 'getcar':
        if (st.car.exploded || st.car.dead) return this.fail('El vehicle ha quedat destruït');
        if (pl.vehicle === st.car) this.nextStep();
        break;
      case 'goto': {
        if (st.needCar && pl.vehicle !== a.car) { st.text = 'Torna al cotxe'; break; }
        st.text = a.def.steps[a.i].text;
        if (st.onFoot && pl.vehicle) { st.text = 'Baixa del cotxe'; break; }
        if (dist(pl.x, pl.z, st.at.x, st.at.z) < st.r) this.nextStep();
        break;
      }
      case 'hold': {
        if (dist(pl.x, pl.z, st.at.x, st.at.z) < st.r) {
          if (st.hold === 0 && st.alarm) { g.wanted.force(st.alarm); g.hud.toast('S\'ha activat l\'alarma!'); }
          st.hold += dt;
          st.progress = `${Math.min(100, Math.round((st.hold / st.seconds) * 100))}%`;
          if (st.hold >= st.seconds) { g.addMoney(0); this.nextStep(); }
        } else if (st.hold > 0) { st.hold = Math.max(0, st.hold - dt); st.progress = 'Torna al punt'; }
        break;
      }
      case 'checkpoints': {
        if (st.needVehicle && !pl.vehicle) { st.progress = 'Puja a un vehicle'; break; }
        const p = st.points[st.cp];
        if (dist(pl.x, pl.z, p.x, p.z) < st.r) {
          st.cp++; g.audio.beep('ok');
          if (st.cp >= st.points.length) this.nextStep();
        }
        st.progress = `${Math.min(st.cp + 1, st.points.length)}/${st.points.length}`;
        break;
      }
      case 'destroy':
        if (st.car.dead || st.car.exploded) { this.nextStep(); break; }
        if (dist(pl.x, pl.z, st.car.x, st.car.z) > 420) return this.fail('El fugitiu s\'ha escapat');
        st.progress = `Distància ${Math.round(dist(pl.x, pl.z, st.car.x, st.car.z))} m`;
        break;
      case 'kill': {
        const left = st.peds.filter((p) => p.state !== 'dead').length;
        st.progress = `Queden ${left}`;
        if (left === 0) this.nextStep();
        break;
      }
      case 'evade':
        if (g.wanted.level === 0) this.nextStep();
        break;
      default: this.nextStep();
    }
  }
}
