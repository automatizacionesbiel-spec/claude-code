// Sistema de cerca policial (pur): crims acumulen "calor"; quan la policia et perd de vista, baixa.
export const CRIMES = {
  assault:   { heat: 1.2, min: 1 },   // disparar o atropellar un civil
  kill:      { heat: 2.0, min: 1 },   // matar un civil
  theft:     { heat: 1.5, min: 1 },   // robar un cotxe amb testimonis
  hitCop:    { heat: 3.0, min: 2 },
  killCop:   { heat: 6.0, min: 3 },
  explosion: { heat: 2.5, min: 2 },
  rampage:   { heat: 4.0, min: 3 },   // missions (atracament)
};
const THRESHOLDS = [1, 4, 8, 13, 20]; // calor mínima per a 1..5 estrelles
const EVADE_SECONDS = 14;             // sense ser vist, una estrella cada tant

export class Wanted {
  constructor() { this.level = 0; this.heat = 0; this.unseen = 0; this.flash = 0; }

  reset() { this.level = 0; this.heat = 0; this.unseen = 0; }

  crime(kind, witnessed = true) {
    if (!witnessed) return this.level;
    const c = CRIMES[kind];
    if (!c) return this.level;
    this.heat += c.heat;
    let lvl = Math.max(this.level, c.min);
    for (let i = 0; i < THRESHOLDS.length; i++) if (this.heat >= THRESHOLDS[i]) lvl = Math.max(lvl, i + 1);
    this.level = Math.min(5, lvl);
    this.unseen = 0;
    return this.level;
  }

  force(level) {
    this.level = Math.max(0, Math.min(5, level));
    this.heat = this.level ? THRESHOLDS[this.level - 1] : 0;
    this.unseen = 0;
  }

  // seen: true si algun policia té línia de visió amb el jugador.
  update(dt, seen) {
    if (this.level === 0) { this.heat = Math.max(0, this.heat - dt * 0.1); return; }
    if (seen) { this.unseen = 0; this.flash = 0; return; }
    this.unseen += dt;
    this.flash += dt;
    if (this.unseen >= EVADE_SECONDS) {
      this.unseen = 0;
      this.level -= 1;
      this.heat = this.level ? THRESHOLDS[this.level - 1] : 0;
    }
  }
  get evading() { return this.level > 0 && this.unseen > 0.5; }
  // Cotxes de policia desitjats segons el nivell.
  get copCars() { return [0, 2, 3, 5, 7, 9][this.level]; }
}
