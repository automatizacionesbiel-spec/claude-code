// Arrencada: menús, opcions i connexió amb el joc.
import { Game } from './game.js';
import { loadSave } from './save.js';

const $ = (id) => document.getElementById(id);
const SETTINGS_KEY = 'palmera-bay-settings-v1';

function readSettings() {
  try { return { quality: 'medium', master: 0.7, music: 0.5, sens: 1, ...(JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}) }; } catch (e) { return { quality: 'medium', master: 0.7, music: 0.5, sens: 1 }; }
}
function writeSettings(s) { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) { /* sense emmagatzematge */ } }

function showError(msg) {
  let box = $('err');
  if (!box) { box = document.createElement('div'); box.id = 'err'; document.body.appendChild(box); }
  box.textContent = msg;
}

function boot() {
  const settings = readSettings();
  let game;
  try {
    game = new Game($('view'), $('hud'), settings.quality);
  } catch (e) {
    showError('No s\'ha pogut iniciar el joc (cal un navegador amb WebGL).\n' + (e && e.message ? e.message : e));
    throw e;
  }
  window.__game = game;
  game.input.sens = settings.sens;
  game.audio.masterVol = settings.master; game.audio.musicVol = settings.music;

  const panels = ['p-main', 'p-opt', 'p-keys', 'p-pause'];
  let backTo = 'p-main';
  const show = (id) => { for (const p of panels) $(p).classList.toggle('hidden', p !== id); };
  const menu = $('menu');
  const hasSave = !!loadSave();
  if (hasSave) $('b-cont').classList.remove('off');

  const play = () => { menu.classList.add('hidden'); game.mode = 'play'; game.audio.init(); game.input.lock(); };
  $('b-new').onclick = () => { game.newGame(); play(); };
  $('b-cont').onclick = () => { game.continueGame(); play(); };
  $('b-opt').onclick = () => { backTo = 'p-main'; show('p-opt'); };
  $('b-opt2').onclick = () => { backTo = 'p-pause'; show('p-opt'); };
  $('b-keys').onclick = () => { backTo = 'p-main'; show('p-keys'); };
  document.querySelectorAll('[data-back]').forEach((b) => { b.onclick = () => show(backTo); });
  $('b-resume').onclick = () => { menu.classList.add('hidden'); game.mode = 'play'; game.audio.init(); game.input.lock(); };
  $('b-save').onclick = () => { game.requestSave(); $('b-save').textContent = game.flushSave() ? 'Partida desada ✓' : 'No s\'ha pogut desar'; };
  $('b-quit').onclick = () => { game.requestSave(); game.flushSave(); game.mode = 'menu'; game.resetWorldEntities(); show('p-main'); $('b-cont').classList.remove('off'); };

  // Opcions.
  $('o-q').value = settings.quality; $('o-vol').value = settings.master; $('o-mus').value = settings.music; $('o-sens').value = settings.sens;
  $('o-q').onchange = (e) => { settings.quality = e.target.value; game.setQuality(settings.quality); writeSettings(settings); };
  $('o-vol').oninput = (e) => { settings.master = +e.target.value; game.audio.setMaster(settings.master); writeSettings(settings); };
  $('o-mus').oninput = (e) => { settings.music = +e.target.value; game.audio.setMusic(settings.music); writeSettings(settings); };
  $('o-sens').oninput = (e) => { settings.sens = +e.target.value; game.input.sens = settings.sens; writeSettings(settings); };

  // Pausa en perdre el bloqueig del punter.
  game.input.onLockChange = (locked) => {
    if (!locked && game.mode === 'play' && !game.player.dead) {
      game.mode = 'paused'; game.requestSave(); game.flushSave();
      $('b-save').textContent = 'Desa la partida';
      show('p-pause'); menu.classList.remove('hidden');
    }
  };
  addEventListener('keydown', (e) => {
    if (e.code === 'KeyP' && !e.repeat) {
      if (game.mode === 'play') { game.input.unlock(); if (!game.input.locked) game.input.onLockChange(false); }
    }
  });
  addEventListener('beforeunload', () => { if (game.mode === 'play') { game.requestSave(); game.flushSave(); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden && game.mode === 'play') game.input.unlock(); });
  window.addEventListener('error', (e) => showError(String(e.message)));

  show('p-main');
  game.start();
}

boot();
