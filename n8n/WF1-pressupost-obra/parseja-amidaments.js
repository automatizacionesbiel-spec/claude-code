// BLOC 2b - Ajunta els grups resolts deterministament amb els que han necessitat la
// configuracio de la IA (nomes columnes/format, mai xifres), fa el tancament de cada
// grup pendent amb aquesta configuracio, i fa el pas final (numeracio, claus, avisos
// de cobertura) sobre tota l'obra junta.
function parsePdfGroup(rows, override) {
  const text = rows.map((r) => String(r.text || '')).join('\n');
  const lines = text.replace(/\f/g, '\n').split('\n');

  const EXTRA_CODE_CHARS = (override && override.extraCodeChars) || '';
  const looksLikeCode = (tok) => {
    if (!tok || tok.length > 20) return false;
    if (!/^[A-Za-z0-9]/.test(tok)) return false;
    const re = new RegExp('^[A-Za-z0-9.\\-' + EXTRA_CODE_CHARS.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ']+$');
    if (!re.test(tok)) return false;
    return /\d/.test(tok);
  };
  const reCodi = /^(\S+)[ \t]+(.*)$/;
  const reCodiFi = /^(\S.*[^\s\d.])(\d[A-Za-z0-9.\-]*)$/;
  const UNITATS = ['m', 'm2', 'm3', 'ml', 'm\u00B2', 'm\u00B3', 'u', 'ut', 'ud', 'uds', 'kg', 'tn', 'h', 'h.', 'pa', 'p.a', 'mes', 'dia', '%'];
  const dotDecimal = override && override.decimal === 'dot';
  const reNumSol = dotDecimal ? /^-?[\d,]*\d\.\d+$/ : /^-?[\d.]*\d,\d+$/;
  const reNum = dotDecimal ? /-?[\d,]*\d\.\d+|\b\d+\b/g : /-?[\d.]*\d,\d+|\b\d+\b/g;
  const toNum = dotDecimal
    ? (s) => parseFloat(String(s).replace(/,/g, '')) || 0
    : (s) => parseFloat(String(s).replace(/\./g, '').replace(',', '.')) || 0;
  const rePeu = /^(--\s*\d+\s+of\s+\d+\s*--|\d{1,4}[ \t]+\d{1,2}\s+\S+\s+\d{4}|\d{1,2}\s+\S+\s+\d{4}([ \t]+\d+)?)$/;
  const reCapcalera = /^(codi|codigo|c\u00f3digo)[ \t]+(resum|resumen)/i;
  // FIX (2026-09-04): alguns informes d'amidaments (format TCQ/ITEC, execucio 117) mai
  // deixen el total d'una partida com a linia NOMES amb el numero (reNumSol) -- sempre el
  // precedeixen d'un literal "Total <ud> ......:" (p.ex. "Total m\u00b3 ......: 374,387"). Sense
  // aquest patro, aquesta linia queia al fallback reCodiFi i es confonia amb un codi nou
  // fals (el "387" final, per exemple), deixant la partida real sense total ni linies --
  // esCap sortia true per TOTES les partides (cap "partida" real detectada), 0 items i tot
  // el fitxer com a "no llegible amb ajuda de la IA".
  const reTotalLinia = /^total\b[^:]*:\s*(-?[\d.,]+)\s*$/i;

  const cnt = {};
  for (const l of lines) {
    const t = l.trim();
    let m = /([A-Za-z][A-Za-z0-9]{2,})$/.exec(t);
    if (m) cnt[m[1]] = (cnt[m[1]] || 0) + 1;
    m = /^([A-Za-z][A-Za-z0-9]{2,})/.exec(t);
    if (m) cnt[m[1]] = (cnt[m[1]] || 0) + 1;
  }
  let actTok = '';
  let actN = 0;
  for (const k of Object.keys(cnt)) if (cnt[k] > actN && cnt[k] >= 20 && /\d/.test(k)) { actTok = k; actN = cnt[k]; }
  const esFilaMed = (t) => !!actTok && (t.endsWith(actTok) || t.startsWith(actTok));

  const freq = {};
  for (const l of lines) { const t = l.trim(); if (t) freq[t] = (freq[t] || 0) + 1; }

  const okForma = (rest) => {
    if (!rest) return false;
    if (/^[\d.,]/.test(rest)) return false;
    const p = rest.split(/[ \t]+/)[0];
    if (UNITATS.indexOf(p.toLowerCase()) >= 0 && rest.length > p.length + 1) return true;
    return /^[A-Z\u00C0-\u00D6\u00D8-\u00DE]/.test(rest);
  };

  const nodes = [];
  let cur = null;
  let com = '';
  for (const raw of lines) {
    const t = raw.trim();
    if (!t) continue;
    if (rePeu.test(t) || reCapcalera.test(t)) continue;
    // FIX (2026-09-04): igual que reNumSol, una linia de total (reTotalLinia) tampoc s'ha
    // de descartar mai per repetir-se -- amb molts items d'1 sola unitat, "Total U ......:
    // 1,000" apareix identica desenes de vegades i abans queia aqui com si fos soroll
    // repetit (capçalera/peu de pagina), deixant aquestes partides a quantitat 0.
    if (!reNumSol.test(t) && !reTotalLinia.test(t) && freq[t] >= 5) continue;
    if (esFilaMed(t)) {
      if (!cur) continue;
      let body = t;
      if (body.endsWith(actTok)) body = body.slice(0, -actTok.length);
      if (body.startsWith(actTok)) body = body.slice(actTok.length);
      const nums = body.match(reNum);
      if (!nums || !nums.length) { com = body.replace(/[\s\t]+/g, ' ').trim(); continue; }
      cur.linies.push({ com: (body.replace(reNum, '').replace(/[\s\t]+/g, ' ').trim() || com), p: toNum(nums[nums.length - 1]) });
      continue;
    }
    if (reNumSol.test(t)) { if (cur) cur.total = toNum(t); continue; }
    const mTot = reTotalLinia.exec(t);
    if (mTot) { if (cur) cur.total = toNum(mTot[1]); continue; }
    const mc = reCodi.exec(t);
    if (mc && looksLikeCode(mc[1])) {
      const rest = mc[2].trim();
      if (okForma(rest)) {
        const p0 = rest.split(/[ \t]+/)[0];
        const teUd = UNITATS.indexOf(p0.toLowerCase()) >= 0 && rest.length > p0.length + 1;
        const desc = teUd ? rest.slice(p0.length).trim() : rest;
        const descOk = teUd ? /^[A-Z\u00C0-\u00D6\u00D8-\u00DE]/.test(desc) : true;
        if (descOk) {
          cur = { codi: mc[1], ud: teUd ? p0 : '', resum: desc, text: '', linies: [], total: null };
          nodes.push(cur);
          com = '';
          continue;
        }
      }
    }
    const mf = reCodiFi.exec(t);
    const g2stripped = mf ? mf[2].replace(/\.$/, '') : '';
    if (mf && looksLikeCode(mf[2]) && g2stripped.length >= 2 && okForma(mf[1].trim())) {
      cur = { codi: mf[2], ud: '', resum: mf[1].trim(), text: '', linies: [], total: null };
      nodes.push(cur);
      com = '';
      continue;
    }
    if (cur) cur.text += (cur.text ? '\n' : '') + t;
  }
  for (const nd of nodes) nd.esCap = nd.total === null && nd.linies.length === 0;

  const esFillCode = (child, parent) => {
    if (!parent) return true;
    if (child === parent) return false;
    if (child.length > parent.length && child.slice(0, parent.length) === parent) {
      const sep = child[parent.length];
      return sep === '.' || !/[0-9A-Za-z]/.test(sep);
    }
    return false;
  };
  const stack = [];
  const out = [];
  for (const nd of nodes) {
    if (nd.esCap) {
      while (stack.length && !esFillCode(nd.codi, stack[stack.length - 1].codi)) stack.pop();
      stack.push({ codi: nd.codi, desc: nd.resum });
      continue;
    }
    const suma = nd.linies.reduce((a, x) => a + (Number(x.p) || 0), 0);
    const qty = nd.total !== null ? nd.total : Math.round(suma * 1000) / 1000;
    out.push({
      codi: nd.codi, ud: nd.ud, resum: nd.resum, text: nd.text, qty, linies: nd.linies,
      is_nota: !nd.ud && !nd.linies.length,
      cap_chain: stack.map((c) => ({ codi: c.codi, desc: c.desc })),
      cap_codi: stack.length ? stack[stack.length - 1].codi : '',
      cap_desc: stack.length ? stack[stack.length - 1].desc : ''
    });
  }
  if (!out.length) return { pending: true, tipus: 'PDF', mostra: lines.slice(0, 150).join('\n') };
  return { pending: false, parts: out };
}

function parseExcelGroup(rows, aiConfig) {
  const norm = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  const toArray = (j) => {
    if (Array.isArray(j)) return j;
    if (j && Array.isArray(j.row)) return j.row;
    const keys = Object.keys(j || {});
    if (keys.length && keys.every((k) => /^\d+$/.test(k))) return keys.sort((a, b) => a - b).map((k) => j[k]);
    return keys.map((k) => j[k]);
  };
  const gridRows = rows.map(toArray);

  let hIdx = -1;
  const colmap = {};
  for (let r = 0; r < Math.min(gridRows.length, 10); r++) {
    const nv = gridRows[r].map(norm);
    const natIx = nv.findIndex((v) => /^nat/.test(v));
    if (natIx >= 0 && nv.includes('resumen') && nv.some((v) => v.includes('codigo'))) {
      hIdx = r;
      nv.forEach((v, i) => { if (v && colmap[v] === undefined) colmap[v] = i; });
      colmap['nat'] = natIx;
      break;
    }
  }
  let mode3 = false;
  let startRow = hIdx + 1;
  if (hIdx < 0) {
    const SYN = {
      codigo: ['capitulo', 'codigo'], ud: ['ud'], resumen: ['resumen'], canpres: ['canpres', 'canobj', 'cantidad'],
      n: ['n', 'unidad', 'unidades', 'num', 'numero'], longitud: ['longitud', 'largo'],
      anchura: ['anchura', 'ancho'], altura: ['altura', 'alto'], parcial: ['parcial', 'subtotal']
    };
    for (let r = 0; r < Math.min(gridRows.length, 200); r++) {
      const nv = gridRows[r].map(norm);
      const find = (keys) => { for (const k of keys) { const ix = nv.indexOf(k); if (ix >= 0) return ix; } return undefined; };
      const cCodigo = find(SYN.codigo), cUd = find(SYN.ud), cResum = find(SYN.resumen), cCanpres = find(SYN.canpres);
      if (cCodigo !== undefined && cUd !== undefined && cResum !== undefined && cCanpres !== undefined) {
        hIdx = r; mode3 = true;
        colmap.codigo = cCodigo; colmap.ud = cUd; colmap.resumen = cResum; colmap.canpres = cCanpres; colmap.comentario = cResum;
        const cN = find(SYN.n); if (cN !== undefined) colmap.n = cN;
        const cL = find(SYN.longitud); if (cL !== undefined) colmap.longitud = cL;
        const cA = find(SYN.anchura); if (cA !== undefined) colmap.anchura = cA;
        const cH = find(SYN.altura); if (cH !== undefined) colmap.altura = cH;
        const cP = find(SYN.parcial); if (cP !== undefined) colmap.parcial = cP;
        break;
      }
    }
    if (mode3) startRow = hIdx + 1;
  }
  if (hIdx < 0 && aiConfig && Number.isInteger(aiConfig.headerRow) &&
      Number.isInteger(aiConfig.codigo) && Number.isInteger(aiConfig.ud) &&
      Number.isInteger(aiConfig.resumen) && Number.isInteger(aiConfig.canpres)) {
    hIdx = aiConfig.headerRow; mode3 = true;
    colmap.codigo = aiConfig.codigo; colmap.ud = aiConfig.ud; colmap.resumen = aiConfig.resumen;
    colmap.canpres = aiConfig.canpres; colmap.comentario = aiConfig.resumen;
    startRow = hIdx + 1;
  }
  if (hIdx < 0) return { pending: true, tipus: 'EXCEL', mostra: gridRows.slice(0, 60) };

  const codKey = Object.keys(colmap).find((k) => k.includes('codigo'));
  const g = (vals, key) => { const ix = colmap[key]; return ix === undefined ? null : (vals[ix] ?? null); };
  const hasMed = colmap['longitud'] !== undefined && colmap['n'] !== undefined;
  const lineParcialKey = colmap['cantidad'] !== undefined ? 'cantidad' : (colmap['parcial'] !== undefined ? 'parcial' : null);

  const out = [];
  let stack = [];
  let cur = null;
  for (let r = startRow; r < gridRows.length; r++) {
    const vals = gridRows[r];
    const codi = g(vals, codKey);
    const ud = g(vals, 'ud');
    const resum = g(vals, 'resumen');
    let rowType;
    if (mode3) {
      const udNonEmpty = ud !== null && String(ud).trim() !== '';
      const codiNonEmpty = codi !== null && String(codi).trim() !== '';
      if (udNonEmpty) rowType = 'partida';
      else if (codiNonEmpty) rowType = 'cap';
      else rowType = 'detall';
    } else {
      const natS = norm(g(vals, 'nat'));
      if (natS.includes('cap')) rowType = 'cap';
      else if (natS === 'partida') rowType = 'partida';
      else if ((codi === null || String(codi).trim() === '') && natS === '') rowType = 'detall';
      else rowType = 'ignora';
    }
    if (rowType === 'cap') {
      const cc = String(codi ?? '').trim();
      while (stack.length && !(cc.length > stack[stack.length - 1].codi.length && cc.indexOf(stack[stack.length - 1].codi) === 0)) stack.pop();
      stack.push({ codi: cc, desc: String(resum ?? '').trim() });
      cur = null;
    } else if (rowType === 'partida') {
      const q = colmap['canpres'] !== undefined ? g(vals, 'canpres') : null;
      cur = {
        codi: String(codi ?? '').trim(), ud: String(ud ?? '').trim(), resum: String(resum ?? '').trim(), text: '',
        qty: (typeof q === 'number' ? q : (parseFloat(String(q ?? '').replace(',', '.')) || 0)),
        linies: [], is_nota: String(ud ?? '').trim() === '.',
        cap_chain: stack.map((c) => ({ codi: c.codi, desc: c.desc })),
        cap_codi: stack.length ? stack[stack.length - 1].codi : '',
        cap_desc: stack.length ? stack[stack.length - 1].desc : ''
      };
      out.push(cur);
    } else if (rowType === 'detall') {
      if (mode3 && colmap['canpres'] !== undefined) {
        const totVal = g(vals, 'canpres');
        const resumEmpty = resum === null || String(resum).trim() === '';
        if (typeof totVal === 'number' && resumEmpty && cur) { cur.qty = totVal; continue; }
      }
      if (hasMed) {
        const n_ = g(vals, 'n'), l_ = g(vals, 'longitud'), a_ = g(vals, 'anchura'), h_ = g(vals, 'altura');
        const par = lineParcialKey ? g(vals, lineParcialKey) : null;
        const com = g(vals, 'comentario');
        const isMed = String(ud ?? '').startsWith('Spc') || [n_, l_, a_, h_].some((x) => typeof x === 'number');
        if (isMed && cur) { cur.linies.push({ com: String(com ?? '').trim(), p: (typeof par === 'number' ? par : 0) }); continue; }
      }
      if (resum !== null && String(resum).trim() !== '' && cur) cur.text += (cur.text ? '\n' : '') + String(resum);
    }
  }
  for (const p of out) {
    if (!p.is_nota && !String(p.ud || '').trim() && !(p.linies && p.linies.length) && !p.qty) {
      p.is_nota = true;
    }
  }
  return { pending: false, parts: out };
}

const norm = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
const normText = (s) => norm(s).replace(/\s+/g, ' ');

// Empremta tecnica (2026-08-26): extreu fets objectius del text (element, formigo,
// consistencia, granulat, exposicio, gruix) perque DUES redaccions diferents del mateix
// element generin la MATEIXA clau al diccionari. Nomes fets, mai "semblanca" de text --
// si no hi ha prou fets clars, cau al text normalitzat sencer (com abans) per no arriscar-se
// a ajuntar sota una mateixa clau dos elements que en realitat son diferents.
const ELEMENTS_TIPUS = [
  ['PANTALLA', /\bpantalla/],
  ['MUR', /\bmur[os]?\b/],
  ['PILAR', /\bpilars?\b|\bpilarets?\b/],
  ['LLOSA', /\bllosa|\blosa/],
  ['FORJAT', /\bforjat|\bforjado/],
  ['VIGA', /\bviga|\bjacena|\bjacena|\bjassera/],
  ['ESCALA', /\bescala|\bescalera/],
  ['SOLERA', /\bsolera/],
  ['SABATA', /\bsabata|\bzapata/],
  ['FOSO', /\bfoso\b/],
];
const empremtaTecnica = (text) => {
  const t = norm(text);
  let element = '';
  for (const [nom, re] of ELEMENTS_TIPUS) { if (re.test(t)) { element = nom; break; } }
  if (!element) return null;
  const m = t.match(/ha-?(\d{2})\s*\/\s*([bfl])\s*\/\s*(\d{1,2})\s*\/\s*(x[a-z]\d(?:\s*\+\s*x[a-z]\d)*)/);
  let ha = '', cons = '', arid = '', exp = '';
  if (m) {
    ha = m[1]; cons = m[2].toUpperCase(); arid = m[3]; exp = m[4].toUpperCase().replace(/\s+/g, '');
  } else {
    ha = (t.match(/ha-?(\d{2})/) || [])[1] || '';
  }
  const gruix = (t.match(/(\d{1,3})\s*cm\b/) || [])[1] || '';
  if (!ha) return null;
  return [
    'E:' + element, 'HA' + ha,
    cons ? 'C:' + cons : '', arid ? 'A:' + arid : '', exp ? 'X:' + exp : '', gruix ? 'G:' + gruix : ''
  ].filter(Boolean).join('|');
};
const UDMAP = { M: 'ML', ML: 'ML', U: 'UD', UT: 'UD', UD: 'UD', 'M.': 'ML', PA: 'PA' };
const normUd = (u) => { const x = String(u ?? '').trim().toUpperCase().replace(/\u00B2/g, '2').replace(/\u00B3/g, '3').replace(/\.$/, ''); return UDMAP[x] || x; };

const form = $('Nova obra').first().json;
const obra = form['Nom obra'];
const base = form['Base de preus'];
const email = form['Email'];

// FIX (2026-09-02): igual que 'Prepara peticio columnes IA', aquest node llegia
// $('Intenta parseig determinista').all() pel NOM -- un node que viu DINS del bucle
// 'Fitxers loop', i a n8n aixo nomes retorna la seva ULTIMA iteracio, no l'acumulat de
// tots els fitxers (amb 2 fitxers es perdia tot el primer, silenciosament: nomes 35
// partides en lloc de centenars). Es llegeix ara del node passarel·la 'Acumula
// resultats fitxers', penjat directament de la sortida 'done' del bucle, que si te
// el conjunt acumulat complet.
const tots = $('Acumula resultats fitxers').all().map((i) => i.json);
const resolts = tots.filter((x) => !x._pending);
const pendentsRaw = tots.filter((x) => x._pending);

let peticions = [];
let respostes = [];
try { peticions = $('Prepara peticio columnes IA').all().map((i) => i.json); } catch (e) {}
try { respostes = $('Detecta columnes IA').all().map((i) => i.json); } catch (e) {}

const configPerGrup = {};
for (let i = 0; i < peticions.length; i++) {
  const p = peticions[i];
  if (p.tipus !== 'lot') continue;
  const resp = respostes[i];
  if (!resp) continue;
  const blk = ((resp || {}).content || []).find((b) => b.type === 'text');
  if (!blk) continue;
  let parsed;
  try { parsed = JSON.parse(blk.text); } catch (e) { continue; }
  configPerGrup[p._grup] = parsed;
}

let parts = resolts.map((p) => { const { _pending, _grup, ...rest } = p; return rest; });
const errors = [];
const assistides = [];

for (const pend of pendentsRaw) {
  const cfg = configPerGrup[pend._grup];
  let resultat = null;
  if (cfg && cfg.es_amidaments && cfg.confianca !== 'BAIXA') {
    if (pend._tipus === 'EXCEL') {
      const hdr = cfg.headerRow, co = cfg.codigo, ud = cfg.ud, re = cfg.resumen, ca = cfg.canpres;
      const dinsRang = [hdr, co, ud, re, ca].every((v) => Number.isInteger(v) && v >= 0 && v < 500);
      if (dinsRang) resultat = parseExcelGroup(pend._files, { headerRow: hdr, codigo: co, ud, resumen: re, canpres: ca });
    } else {
      const hdrEx = String(cfg.header_example || '');
      const totEx = String(cfg.total_example || '');
      const textComplet = pend._files.map((r) => String(r.text || '')).join('\n');
      if (hdrEx && textComplet.includes(hdrEx)) {
        const decimal = /^-?\d[\d,]*\.\d+$/.test(totEx.trim()) ? 'dot' : 'comma';
        const codePart = hdrEx.trim().split(/[ \t]+/)[0];
        const extra = [...new Set(codePart.replace(/[A-Za-z0-9]/g, ''))].join('');
        resultat = parsePdfGroup(pend._files, { decimal, extraCodeChars: extra });
      }
    }
  }
  if (resultat && !resultat.pending && resultat.parts.length) {
    for (const p of resultat.parts) { p.font = pend._tipus; p._config_ia = 'x'; parts.push(p); }
    assistides.push(pend._grup);
  } else {
    errors.push('Fitxer ' + (pend._grup + 1) + ' (' + pend._tipus + '): no s\'ha pogut llegir ni amb ajuda de la IA' + (cfg && cfg.motiu ? ' (' + cfg.motiu + ')' : '') + '.');
  }
}

if (errors.length) throw new Error(errors.join(' | '));
if (!parts.length) throw new Error('S\'han trobat 0 partides als amidaments.');

let ordre = 0;
for (const p of parts) {
  ordre++;
  p.ordre = ordre;
  if (p._config_ia === undefined) p._config_ia = '';
  p.ud_norm = normUd(p.ud);
  p.clau = (empremtaTecnica(p.resum) || normText(p.resum)) + '|' + p.ud_norm;
  const flags = (p.flags || []).slice();
  if (!p.is_nota && (!p.qty || p.qty === 0)) flags.push('QUANTITAT_0');
  if (p.linies && p.linies.length) {
    const s = p.linies.reduce((acc, x) => acc + (Number(x.p) || 0), 0);
    if (p.qty && Math.abs(s - p.qty) > Math.max(0.02, Math.abs(p.qty) * 0.005)) flags.push('AMIDAMENT_DESQUADRAT(' + (Math.round(s * 100) / 100) + ' vs ' + p.qty + ')');
  }
  p.flags = flags;
  p.obra = obra;
  p.base = base;
  p.email = email;
}

const real = parts.filter((p) => !p.is_nota);
const n = real.length;
const nQ0 = real.filter((p) => (p.flags || []).includes('QUANTITAT_0')).length;
const ambLinies = real.filter((p) => p.linies && p.linies.length);
const nDesq = ambLinies.filter((p) => (p.flags || []).some((f) => f.startsWith('AMIDAMENT_DESQUADRAT'))).length;
const nCapitols = new Set(real.map((p) => p.cap_desc || '')).size;
const pctQ0 = n ? nQ0 / n : 0;
const pctDesq = ambLinies.length ? nDesq / ambLinies.length : 0;
const avisosCobertura = [];
if (n < 5) avisosCobertura.push('Molt poques partides trobades (' + n + '). Revisa si el document s\'ha llegit be.');
if (pctQ0 > 0.15) avisosCobertura.push('Massa partides a quantitat 0: ' + Math.round(pctQ0 * 100) + '% (' + nQ0 + '/' + n + ').');
if (pctDesq > 0.05 && ambLinies.length >= 5) avisosCobertura.push('Massa amidaments desquadrats: ' + Math.round(pctDesq * 100) + '% (' + nDesq + '/' + ambLinies.length + ').');
if (assistides.length) avisosCobertura.push('Fitxer(s) ' + assistides.map((g) => g + 1).join(', ') + ' llegits amb ajuda de la IA (configuracio de columnes/format): revisa amb mes atencio les partides marcades amb _config_ia.');

const stats = { n_partides: n, pct_quantitat_0: Math.round(pctQ0 * 1000) / 10, pct_desquadrat: Math.round(pctDesq * 1000) / 10, n_capitols: nCapitols, avisos: avisosCobertura };
for (const p of parts) p._stats = stats;

return parts.map((p) => ({ json: p }));
