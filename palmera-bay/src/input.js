// Entrada: teclat, ratolí (amb bloqueig del punter) i injecció programàtica per a proves.
export class Input {
  constructor(el) {
    this.el = el;
    this.down = new Set();
    this.pressed = new Set();
    this.released = new Set();
    this.mdx = 0; this.mdy = 0;
    this.lmb = false; this.rmb = false;
    this.locked = false;
    this.wheel = 0;
    this.sens = 1;
    this.onLockChange = null;
    const prevent = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab']);
    addEventListener('keydown', (e) => {
      if (e.repeat) { if (prevent.has(e.code)) e.preventDefault(); return; }
      if (prevent.has(e.code)) e.preventDefault();
      this.press(e.code);
    });
    addEventListener('keyup', (e) => this.release(e.code));
    addEventListener('blur', () => { this.down.clear(); this.lmb = this.rmb = false; });
    el.addEventListener('mousedown', (e) => { if (e.button === 0) this.lmb = true; if (e.button === 2) this.rmb = true; });
    addEventListener('mouseup', (e) => { if (e.button === 0) this.lmb = false; if (e.button === 2) this.rmb = false; });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('mousemove', (e) => { if (this.locked) { this.mdx += e.movementX || 0; this.mdy += e.movementY || 0; } });
    addEventListener('wheel', (e) => { this.wheel += Math.sign(e.deltaY); }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === el;
      if (!this.locked) { this.down.clear(); this.lmb = this.rmb = false; }
      if (this.onLockChange) this.onLockChange(this.locked);
    });
  }
  press(code) { if (!this.down.has(code)) this.pressed.add(code); this.down.add(code); }
  release(code) { this.down.delete(code); this.released.add(code); }
  isDown(...codes) { return codes.some((c) => this.down.has(c)); }
  wasPressed(...codes) { return codes.some((c) => this.pressed.has(c)); }
  lock() { try { const p = this.el.requestPointerLock && this.el.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* sense bloqueig */ } }
  unlock() { if (document.exitPointerLock) document.exitPointerLock(); }
  takeMouse() { const r = [this.mdx * this.sens, this.mdy * this.sens]; this.mdx = this.mdy = 0; return r; }
  endFrame() { this.pressed.clear(); this.released.clear(); this.wheel = 0; }
}
