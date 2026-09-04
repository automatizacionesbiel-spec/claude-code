// BLOC 2a - Primer intent, 100% determinista. Si algun fitxer no encaixa amb cap dels
// formats coneguts, es marca com a PENDENT (amb la mostra i les dades completes) en lloc
// de fer petar tot el flux: es demanara ajuda a la IA nomes per a la CONFIGURACIO
// (quina columna es quina, com son els codis d'aquest document) -- mai per llegir les xifres.
// ---- FUNCIONS COMPARTIDES (identiques als dos nodes de codi) ----
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
  const UNITATS = ['m', 'm2', 'm3', 'ml', 'm²', 'm³', 'u', 'ut', 'ud', 'uds', 'kg', 'tn', 'h', 'h.', 'pa', 'p.a', 'mes', 'dia', '%'];
  const dotDecimal = override && override.decimal === 'dot';
  const reNumSol = dotDecimal ? /^-?[\d,]*\d\.\d+$/ : /^-?[\d.]*\d,\d+$/;
  const reNum = dotDecimal ? /-?[\d,]*\d\.\d+|\b\d+\b/g : /-?[\d.]*\d,\d+|\b\d+\b/g;
  const toNum = dotDecimal
    ? (s) => parseFloat(String(s).replace(/,/g, '')) || 0
    : (s) => parseFloat(String(s).replace(/\./g, '').replace(',', '.')) || 0;
  const rePeu = /^(--\s*\d+\s+of\s+\d+\s*--|\d{1,4}[ \t]+\d{1,2}\s+\S+\s+\d{4}|\d{1,2}\s+\S+\s+\d{4}([ \t]+\d+)?)$/;
  const reCapcalera = /^(codi|codigo|código)[ \t]+(resum|resumen)/i;
  // FIX (2026-09-04): alguns informes d'amidaments (format TCQ/ITEC, execucio 117) mai
  // deixen el total d'una partida com a linia NOMES amb el numero (reNumSol) -- sempre el
  // precedeixen d'un literal "Total <ud> ......:" (p.ex. "Total m³ ......: 374,387"). Sense
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
    return /^[A-ZÀ-ÖØ-Þ]/.test(rest);
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
        const descOk = teUd ? /^[A-ZÀ-ÖØ-Þ]/.test(desc) : true;
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
  // 'pending' es decideix per si hi ha FULLES de veritat, no nomes si s'ha detectat algun
  // token amb forma de codi (aixo evita el cas fals: 'nodes.length>0' pero tots contenidors).
  if (!out.length) return { pending: true, tipus: 'PDF', mostra: lines.slice(0, 150).join('\n') };
  return { pending: false, parts: out };
}

function parseExcelGroup(rows, aiConfig) {
  const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();
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
  // Nivell 4: columnes indicades per la IA (nomes quan els nivells deterministes fallen)
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

// BLOC 2a (2026-09-01): abans d'aqui s'agrupaven les files pel fitxer d'origen usant el
// 'pairedItem' d'n8n. Amb 1 fitxer ja hi havia una xarxa de seguretat (vegeu historial),
// pero amb 2+ fitxers pujats alhora el pairedItem no era fiable: provat i reproduit amb
// 2 fitxers reals -- CADA FILA queia al seu propi "grup", convertint 2 fitxers en 1606
// "fitxers" pendents en una sola execucio (el tallafoc de 'Prepara peticio columnes IA'
// ho va aturar abans de trucar la IA, pero l'execucio sencera fallava). Solucio definitiva:
// aquest node ara nomes rep UN fitxer per crida, perque viu dins del bucle 'Fitxers loop'
// (Split In Batches, batchSize=1) que envolta Es PDF/Llegeix PDF/Llegeix amidaments. Ja no
// cal cap deteccio de grup: nomes '$runIndex', que dona un identificador unic i estable
// per iteracio del bucle.
const rows = $input.all().map((i) => i.json);
const gi = $runIndex;
const esPdf = rows.length && typeof rows[0].text === 'string' && rows[0].text.length > 200;
const r = esPdf ? parsePdfGroup(rows) : parseExcelGroup(rows);
if (r.pending) {
  return [{ json: { _pending: true, _grup: gi, _tipus: r.tipus, _mostra: r.mostra, _files: rows } }];
}
return r.parts.map((p) => { p.font = esPdf ? 'PDF' : 'EXCEL'; return { json: { _pending: false, _grup: gi, ...p } }; });
