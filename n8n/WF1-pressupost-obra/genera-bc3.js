// BLOC 5 - Genera el BC3 (FIEBDC-3/2002, ANSI/Windows-1252).
// NET: arrel + capitols nous + partides usades + el capitol VARIOS Y CONDICIONES GENERALES
// copiat sencer de la base + els conceptes que arrosseguen les descomposicions.
// El flux NOMES empareja: no toca preus, ni descomposicions, ni resums.

const BS = String.fromCharCode(92);
const form = $('Nova obra').first().json;
const obra = form['Nom obra'];
const oferta = form['Numero oferta'];

// FIX (2026-09-02): els nodes "Detecta..." son branques opcionals d'enriquiment en
// paral·lel des de "Assigna capitols" -- si algun no arriba a executar-se en una
// execucio concreta, no ha de fer petar la generacio del BC3 (mateix patro de
// proteccio que ja s'aplica a "Enriquiment IA" i "Llegeix full revisat" arreu del flux).
const safeGet = (name) => { try { return $(name).all().map((i) => i.json); } catch (e) { return []; } };
const files = $('Aplica enriquiment').all().map((i) => i.json)
  .concat(safeGet('Detecta suplements fixos'))
  .concat(safeGet('Detecta suplements alcada'))
  .concat(safeGet('Detecta encofrat vertit'));
const revisat = {};
try {
  for (const it of $('Llegeix full revisat').all()) {
    const r = it.json || {};
    if (r.ordre === undefined || r.ordre === '') continue;
    revisat[Number(r.ordre)] = {
      OK: String(r.OK ?? '').trim(),
      CODI_CORRECTE: String(r.CODI_CORRECTE ?? '').trim(),
      EXCLOSA: String(r.EXCLOSA ?? '').trim()
    };
  }
} catch (e) {}

const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

const clean = (s) => String(s ?? '')
  .replace(/€/g, 'EUR')
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/[–—]/g, '-')
  .replace(/…/g, '...')
  .split('|').join('/')
  .split(BS).join('/')
  .split('~').join('-');
const one = (s) => clean(s).replace(/\s*\n\s*/g, ' ').trim();
const fmt = (n) => String(Math.round((Number(n) || 0) * 1000) / 1000);
const numOrEmpty = (v) => (v === null || v === undefined || v === '' || Number(v) === 0) ? '' : fmt(v);
const kidsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push(c); } return o; };
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// Insereix una linia DINS de la seccio "INCLUYE" del text contractual, just abans d'on
// comença el "No incluye" (qualsevol de les seves variants). Si no el troba, l'afegeix al
// final com a xarxa de seguretat.
const inserirDinsIncluye = (text, linia) => {
  const t = String(text || '');
  const m = t.match(/no\s*(se\s*)?incluye/i);
  if (!m) return (t ? t + '\n' : '') + linia;
  return t.slice(0, m.index) + linia + '\n' + t.slice(m.index);
};

const d = new Date();
const pad = (x) => String(x).padStart(2, '0');
const data = pad(d.getDate()) + pad(d.getMonth() + 1) + String(d.getFullYear()).slice(2);

const CAPS = {
  'MOVIMIENTO DE TIERRAS': { desc: 'MOVIMIENTO DE TIERRAS', ordre: 1 },
  'CIMENTACION': { desc: 'CIMENTACION', ordre: 2 },
  'ESTRUCTURAS': { desc: 'ESTRUCTURAS', ordre: 3 },
  'FUERA DE ALCANCE': { desc: 'FUERA DE ALCANCE (NO EJECUTAMOS)', ordre: 7 },
  'PENDENTS DE CLASSIFICAR': { desc: 'PENDIENTES DE CLASIFICAR', ordre: 8 },
  'VARIOS Y CONDICIONES GENERALES.': { desc: 'VARIOS Y CONDICIONES GENERALES.', ordre: 9 }
};

// Fase 1 - suplements de formigo deterministes calculats a "Detecta suplements formigo".
const suplPerOrdre = {};
try {
  for (const it of $('Detecta suplements formigo').all()) {
    const s = it.json || {};
    if (s.ordre === undefined || s.ordre === '') continue;
    suplPerOrdre[Number(s.ordre)] = s;
  }
} catch (e) {}

// Mallazo i acer corrugat: mateix patro que els suplements de formigo -- cada node
// detecta per ordre (fila real del client) que cal injectar dins la descomposicio.
const mallatPerOrdre = {};
try {
  for (const it of $('Detecta mallat').all()) {
    const s = it.json || {};
    if (s.ordre === undefined || s.ordre === '') continue;
    mallatPerOrdre[Number(s.ordre)] = s;
  }
} catch (e) {}
const acerPerOrdre = {};
try {
  for (const it of $('Detecta acer').all()) {
    const s = it.json || {};
    if (s.ordre === undefined || s.ordre === '') continue;
    acerPerOrdre[Number(s.ordre)] = s;
  }
} catch (e) {}

const entries = {};
const orderKeys = [];

for (const r of files) {
  // Les linies d'encofrat absorbides per una partida composta no van al BC3: comptarien
  // l'encofrat dues vegades.
  if (r.confianca === 'ABSORBIDA') continue;

  const ov = revisat[Number(r.ordre)] || {};
  const excl = ov.EXCLOSA !== undefined && ov.EXCLOSA !== '';
  const corr = ov.CODI_CORRECTE || '';
  const final = corr || String(r.codi_base || '').trim();
  const qty = Number(r.quantitat) || 0;
  // FIX (2026-09-02): la versio anterior (2026-09-01) posava sempre la descripcio
  // sencera del client com a comentari de cada linia de mesura -- amb clients que
  // porten descripcions tecniques molt llargues (com Grifols), aixo omplia el Presto
  // de paragrafs sencers repetits a cada linia, il·legible. Ara nomes es posa comentari
  // quan "Enriquiment IA" ha decidit expressament que calia distingir aquesta linia
  // d'altres del mateix codi ("etiqueta_curta", una frase de 2-5 paraules) -- si no
  // calia distingir-la (la majoria de casos), es deixa BUIT: el titol de la partida
  // ja ho diu tot, i numOrEmpty ja fa que un comentari buit no surti com a "0" ni res.
  // .toUpperCase() com a xarxa de seguretat (2026-09-02): forca majuscules sempre,
  // independentment de si la IA ho ha seguit al peu de la lletra.
  const origen = String(r.etiqueta_curta || '').trim().toUpperCase();

  let key, capKey;
  if (excl) {
    let code = String(r.codi_excel || '').trim() || ('ORD' + r.ordre);
    if (cat[code] || con[code]) code = 'X_' + code;
    key = 'X:' + code;
    capKey = 'FUERA DE ALCANCE';
    if (!entries[key]) {
      entries[key] = { code, ud: String(r.ud || 'UD'), resum: String(r.resum_excel || ''), text: '', preu: 0, desc: '', capKey, qty: 0, lines: [] };
      orderKeys.push(key);
    }
  } else if (final && cat[final]) {
    const c = cat[final];
    capKey = CAPS[r.capitol_desti] ? r.capitol_desti : 'PENDENTS DE CLASSIFICAR';

    // Suplements que s'injecten DINS la descomposicio (formigo, mallazo, acer): es
    // combinen en UNA sola llista de triples i es genera un codi DERIVAT nou (p.ex.
    // "601.S1") amb tots ells afegits i el preu recalculat pel mateix metode que la
    // propia base (rendiment x preu de cada fill, mes el % de despeses generals). La
    // partida base original NO es toca.
    const supl = suplPerOrdre[Number(r.ordre)];
    const mallat = mallatPerOrdre[Number(r.ordre)];
    const acer = acerPerOrdre[Number(r.ordre)];
    // injAbans (formigo/mallazo) van AL COSTAT del material que suplementen, sempre per
    // sobre del %24. injSota (acer) va SEMPRE per sota del %24, mai per sobre.
    let injAbans = [];
    let injSota = [];
    let motius = [];
    let formigoCodiRef = null;
    let acerTextExtra = null;
    let mallatTextExtra = null;
    if (supl && String(supl.codi_base) === final && Array.isArray(supl.suplement_codis)
      && supl.suplement_codis.length && supl.suplement_codis.every((sc) => cat[sc] || con[sc])) {
      const rend = Number(supl.suplement_rendiment) || 0;
      for (const sc of supl.suplement_codis) injAbans.push({ codi: sc, rendiment: rend });
      formigoCodiRef = supl.formigo_codi || null;
      motius.push('Incluye suplemento de hormigon: ' + supl.suplement_motiu + '.');
    }
    if (mallat && String(mallat.codi_base) === final && Array.isArray(mallat.triples)
      && mallat.triples.length && mallat.triples.every((t) => cat[t.codi] || con[t.codi])) {
      for (const t of mallat.triples) injAbans.push(t);
      motius.push('Incluye ' + mallat.motiu + '.');
      // Frase demanada per l'usuari: quan hi ha mallazo, s'afegeix DINS de l'INCLUYE
      // (abans del "No incluye"), amb les mides reals que digui el client.
      mallatTextExtra = mallat.text_extra || null;
    }
    if (acer && String(acer.codi_base) === final && Array.isArray(acer.triples)
      && acer.triples.length && acer.triples.every((t) => cat[t.codi] || con[t.codi])) {
      for (const t of acer.triples) injSota.push(t);
      motius.push('Incluye acero corrugado: ' + acer.motiu + '.');
      // Frase fixa demanada per l'usuari: sempre que es posa l'acer, s'afegeix a sota de
      // tot del text contractual (despres del "No incluye").
      acerTextExtra = acer.text_extra || null;
    }
    const injOk = injAbans.length > 0 || injSota.length > 0;
    const injKey = injOk ? [...injAbans, ...injSota].map((t) => t.codi + '@' + fmt(t.rendiment)).sort().join('+') : '';

    // Suplements fixos (refino/ancoratges/galga/porex/juntes/catas/encofrat i vertit que
    // falta, sempre a quantitat 0): el mateix codi de cataleg pot caldre a mes d'un
    // capitol alhora (p.ex. els 3 ancoratges es posen a CADA capitol tecnic usat), per
    // aixo tambe s'escopen per capitol -- cadascun ha de tenir la seva propia linia
    // ~C/~M encara que sigui el mateix codi de la base.
    const esFix = r.confianca === 'SUPLEMENT_FIX';
    const scope = injOk ? ('S~' + injKey) : (esFix ? ('F~' + capKey) : '');
    key = 'M:' + final + (scope ? ('~' + scope) : '');

    if (!entries[key]) {
      let code = final;
      let desc = String(c.descomposicio || '');
      let preu = Number(c.preu) || 0;
      let text = String(c.text || '');
      let resum = String(c.resum || '');

      // Codi derivat: sempre quan s'injecta alguna cosa a la descomposicio; per als
      // suplements fixos NOMES quan el codi pla ja l'ha agafat una altra ocurrencia (a
      // un altre capitol) -- aixi la primera ocurrencia manté el codi net de la base.
      const necessitaDerivat = injOk || (esFix && orderKeys.some((k) => entries[k].code === final));
      if (necessitaDerivat) {
        const sufix = injOk ? 'S' : 'F';
        let n = 1;
        let derived = final + '.' + sufix + n;
        while (cat[derived] || con[derived] || orderKeys.some((k) => entries[k].code === derived)) { n++; derived = final + '.' + sufix + n; }
        code = derived;
      }

      if (injOk) {
        // Cada injeccio es FUSIONA amb una linia ja existent del mateix codi (p.ex.
        // l'acer "0.0" que moltes partides ja porten a rendiment 0) en lloc de duplicar-
        // la -- mai dos "0.0" separats. Si cal inserir-la de nou: el formigo/mallazo va
        // JUST DESPRES de la linia del material de formigo que suplementa (sempre per
        // sobre del %24); l'acer va SEMPRE per sota del %24 (mai per sobre).
        const triples = tripletsOf(desc);
        const troba = (codi) => triples.findIndex(([kk]) => kk === codi);
        const fusiona = (codi, rendiment) => {
          const idx = troba(codi);
          if (idx === -1) return false;
          triples[idx][2] = fmt((Number(triples[idx][2]) || 0) + rendiment);
          return true;
        };

        // FIX (2026-09-03): abans cada injeccio recalculava idxRef des de zero i sempre
        // inserien JUST DESPRES del material de formigo -- amb mes d'un suplement aixo
        // les deixava en ordre INVERS al de injAbans (la ultima injectada quedava mes a
        // prop de la base). Ara la posicio avança despres de cada insercio, aixi l'ordre
        // final coincideix amb l'ordre de injAbans (grau -> XC3-4 -> XS1 -> ... -> hidrofug).
        let posicioAbans = formigoCodiRef ? troba(formigoCodiRef) : -1;
        if (posicioAbans === -1) posicioAbans = troba('%24') - 1;
        if (posicioAbans === -1) posicioAbans = triples.length - 1;
        for (const t of injAbans) {
          if (fusiona(t.codi, t.rendiment)) continue;
          triples.splice(posicioAbans + 1, 0, [t.codi, '1', fmt(t.rendiment)]);
          posicioAbans += 1;
        }
        for (const t of injSota) {
          if (fusiona(t.codi, t.rendiment)) continue;
          const idxGG = troba('%24');
          const posicio = idxGG === -1 ? triples.length : idxGG + 1;
          triples.splice(posicio, 0, [t.codi, '1', fmt(t.rendiment)]);
        }
        desc = triples.map(([kk, ff, rr]) => kk + BS + ff + BS + rr + BS).join('');

        let sumFills = 0;
        let ggRate = 0;
        for (const [kk, , rendiment] of triples) {
          if (kk === '%24') { ggRate = Number(rendiment) || 0; continue; }
          const src = con[kk] || cat[kk];
          if (!src) continue;
          sumFills += (Number(rendiment) || 0) * (Number(src.preu) || 0);
        }
        preu = Math.round(sumFills * (1 + ggRate) * 100) / 100;
        // Fase 2 (2026-09-02): en lloc d'afegir "+ SUPLEMENTO HORMIGON" al titol, s'edita
        // directament la designacio del formigo dins del propi resum (p.ex. XC1 -> XC4).
        if (supl && supl.resum_nou) resum = supl.resum_nou;
        // Fase 3 (2026-09-02): la mateixa substitucio tambe al text contractual (~T, la
        // "descripcio de l'element" que es veu a Presto), no nomes al titol.
        // Fase 4 (2026-09-02): NO s'hi afegeix cap "Incluye suplemento..." -- de moment
        // l'unic canvi al Texto 1 es la substitucio del formigo feta a dalt. "motius" es
        // manté calculat (per si es reaprofita en un altre lloc mes endavant) pero no
        // s'aplica enlloc del text.
        if (supl && supl.text_nou) text = supl.text_nou;
        // Fase 6 (2026-09-02): quan hi ha mallazo, s'afegeix DINS de l'INCLUYE (abans del
        // "No incluye"), amb les mides reals -- s'aplica ABANS de l'acer perque l'acer
        // sempre ha de quedar al final de tot, despres d'aquesta insercio.
        if (mallatTextExtra) text = inserirDinsIncluye(text, mallatTextExtra);
        // Fase 5 (2026-09-02): sempre que es posa l'acer, s'afegeix aquesta frase fixa a
        // sota de tot del text contractual (despres del "No incluye").
        if (acerTextExtra) text = (text ? text + '\n' : '') + acerTextExtra;
      }

      entries[key] = { code, ud: String(c.ud || ''), resum, text, preu, desc, capKey, qty: 0, lines: [] };
      orderKeys.push(key);
    }
  } else {
    let code = String(r.codi_excel || '').trim() || ('ORD' + r.ordre);
    if (cat[code] || con[code]) code = 'X_' + code;
    key = 'U:' + code;
    capKey = (r.confianca === 'NOTA') ? 'VARIOS Y CONDICIONES GENERALES.' : 'PENDENTS DE CLASSIFICAR';
    if (!entries[key]) {
      entries[key] = { code, ud: String(r.ud || 'UD'), resum: String(r.resum_excel || ''), text: '', preu: 0, desc: '', capKey, qty: 0, lines: [] };
      orderKeys.push(key);
    }
  }

  const e = entries[key];
  e.qty = Math.round((e.qty + qty) * 1000) / 1000;
  // FIX (2026-09-02, ronda 2): "n" anava fixat a 1 sempre, sense passar per numOrEmpty
  // -- per als suplements fixos (qty=0) aixo deixava un "1" visible al camp N de la
  // linia de mesura al Presto, encara que el camp L (quantitat) ja sortis buit. Quan
  // qty es 0, "n" tambe ha de ser 0 perque numOrEmpty el deixi buit igual que "l".
  e.lines.push({ com: origen, n: (qty === 0 ? 0 : 1), l: qty });
}

if (!orderKeys.length) throw new Error('Cap partida per generar. Revisa el full.');

// --- VARIOS Y CONDICIONES GENERALES: es copia SENCER de la base, tal com hi ve i sense
// tocar cap numero (a la base totes les quantitats son 0). Sempre l'ultim capitol.
// La pertinenca es mira a capitols_json, perque a la base moltes d'aquestes partides
// pengen alhora del seu capitol tecnic (MUROS, PILARES, FORJADOS) i de VARIOS.
const esVarios = (s) => { const x = norm(s); return /varios/.test(x) && /condiciones/.test(x); };
const variosBase = [];
for (const c of cataleg) {
  let o = null;
  if (esVarios(c.capitol_desc || c.capitol)) o = Number(c.ordre_dins_capitol) || 0;
  if (o === null) {
    try {
      for (const m of JSON.parse(c.capitols_json || '[]')) if (esVarios(m.d)) o = Number(m.o) || 0;
    } catch (e) {}
  }
  if (o !== null) variosBase.push({ c, o });
}
variosBase.sort((a, b) => a.o - b.o);
let nVarios = 0;
for (const v of variosBase) {
  const c = v.c;
  const key = 'M:' + String(c.codi);
  if (entries[key]) continue;
  nVarios++;
  entries[key] = {
    code: String(c.codi),
    ud: String(c.ud || ''),
    resum: String(c.resum || ''),
    text: String(c.text || ''),
    preu: Number(c.preu) || 0,
    desc: String(c.descomposicio || ''),
    capKey: 'VARIOS Y CONDICIONES GENERALES.',
    qty: 0,
    lines: []
  };
  orderKeys.push(key);
}

// --- capitols usats, amb codis CAP.1#, CAP.2#... ---
const usats = {};
for (const key of orderKeys) {
  const e = entries[key];
  if (!usats[e.capKey]) usats[e.capKey] = { desc: CAPS[e.capKey].desc, ordre: CAPS[e.capKey].ordre, list: [] };
  usats[e.capKey].list.push(e);
}
const capList = Object.values(usats).sort((a, b) => a.ordre - b.ordre);
capList.forEach((cp, i) => { cp.codi = 'CAP.' + (i + 1); });

let total = 0;
for (const cp of capList) {
  cp.tot = Math.round(cp.list.reduce((acc, e) => acc + e.qty * e.preu, 0) * 100) / 100;
  total += cp.tot;
}
total = Math.round(total * 100) / 100;

// --- tancament recursiu: conceptes que arrosseguen les descomposicions ---
const emesos = new Set(orderKeys.map((k) => entries[k].code));
const extra = [];
const vist = new Set();
const cua = [];
for (const key of orderKeys) if (entries[key].desc) for (const k of kidsOf(entries[key].desc)) cua.push(k);
while (cua.length) {
  const k = cua.shift();
  if (vist.has(k) || emesos.has(k)) continue;
  vist.add(k);
  const src = con[k] || cat[k];
  if (!src) continue;
  extra.push({
    code: k, ud: String(src.ud || ''), resum: String(src.resum || ''),
    preu: Number(src.preu) || 0, tipus: String(src.tipus ?? '0') || '0',
    text: String(src.text || ''), desc: String(src.descomposicio || '')
  });
  if (src.descomposicio) for (const kk of kidsOf(src.descomposicio)) cua.push(kk);
}

// --- escriptura ---
const L = [];
L.push('~V|ENCOFRADOS CASTELL|FIEBDC-3/2002|n8n||ANSI|');
L.push('~K|' + BS + '2' + BS + '2' + BS + '3' + BS + '2' + BS + '2' + BS + '2' + BS + '2' + BS + 'EUR' + BS + '|0|');
L.push('~C|GENERAL##|||' + fmt(total) + '|' + data + '|0|');
L.push('~D|GENERAL##|' + capList.map((cp) => cp.codi + '#' + BS + '1' + BS + '1' + BS).join('') + '|');

for (const cp of capList) {
  L.push('~C|' + cp.codi + '#||' + one(cp.desc) + '|' + fmt(cp.tot) + '|' + data + '|0|');
  // FIX (2026-09-02): els suplements fixos (ancoratges, galga, porex, juntes, catas)
  // porten e.qty=0 expressament (l'usuari els vol veure amb la quantitat BUIDA, nomes
  // el preu, no un "0" literal -- un "0" explicit el Presto de l'usuari el mostrava com
  // "1" en importar-lo). numOrEmpty ja fa exactament aixo per als altres camps del BC3.
  L.push('~D|' + cp.codi + '#|' + cp.list.map((e) => one(e.code) + BS + '1' + BS + numOrEmpty(e.qty) + BS).join('') + '|');
}
for (const key of orderKeys) {
  const e = entries[key];
  L.push('~C|' + one(e.code) + '|' + one(e.ud) + '|' + one(e.resum) + '|' + fmt(e.preu) + '|' + data + '|0|');
  if (e.desc) L.push('~D|' + one(e.code) + '|' + e.desc + '|');
}
for (const x of extra) {
  L.push('~C|' + one(x.code) + '|' + one(x.ud) + '|' + one(x.resum) + '|' + fmt(x.preu) + '|' + data + '|' + (x.tipus === '' ? '0' : x.tipus) + '|');
  if (x.desc) L.push('~D|' + one(x.code) + '|' + x.desc + '|');
}
for (const key of orderKeys) { const e = entries[key]; if (e.text && String(e.text).trim()) L.push('~T|' + one(e.code) + '|' + clean(e.text) + '|'); }
for (const x of extra) { if (x.text && String(x.text).trim()) L.push('~T|' + one(x.code) + '|' + clean(x.text) + '|'); }

capList.forEach((cp, ci) => {
  cp.list.forEach((e, j) => {
    if (!e.lines.length) return;
    const lines = e.lines.map((l) => '' + BS + one(l.com || '') + BS + numOrEmpty(l.n) + BS + numOrEmpty(l.l) + BS + BS + BS);
    L.push('~M|' + cp.codi + '#' + BS + one(e.code) + '|' + (ci + 1) + BS + (j + 1) + BS + '|' + numOrEmpty(e.qty) + '|' + lines.join('') + '|');
  });
});

const txt = L.join('\r\n') + '\r\n';
const nomNet = (String(oferta || '').trim() + ' ' + String(obra || '').trim())
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/ñ/g, 'n').replace(/Ñ/g, 'N')
  .replace(/[^A-Za-z0-9 _.\-]/g, ' ').trim().replace(/\s+/g, ' ');
const fileName = (nomNet || 'pressupost') + '.bc3';
const buff = Buffer.from(txt, 'latin1');

const exclosos = orderKeys.filter((k) => k.startsWith('X:')).length;
const pendents = orderKeys.filter((k) => entries[k].capKey === 'PENDENTS DE CLASSIFICAR').length;
const absorbides = files.filter((r) => r.confianca === 'ABSORBIDA').length;
const discrepancies = files.filter((r) => String(r.discrepancia || '').trim()).length;

return [{
  json: {
    fileName, total,
    num_capitols: capList.length,
    capitols: capList.map((cp) => ({ codi: cp.codi, desc: cp.desc, partides: cp.list.length, import: cp.tot })),
    num_partides: orderKeys.length,
    num_instancies: files.length,
    num_conceptes: extra.length,
    varios_base: nVarios,
    pendents, exclosos, absorbides, discrepancies
  },
  binary: { bc3: { data: buff.toString('base64'), mimeType: 'application/octet-stream', fileName } }
}];

