// BLOC 4b - Suplements de formigo deterministes (Fase 1). Detecta quan la partida base
// porta un formigo (grau/consistencia/exposicio) diferent del que demana el client i, si
// es pot identificar amb seguretat, calcula el codi de suplement de la base corresponent.
// Si no es pot determinar la designacio de la base amb seguretat, NO es proposa res: es
// deixa tal com fins ara (avis del tecnic via Enriquiment IA).
const BS = String.fromCharCode(92);
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };

const CONS_MAP = { b: 'B', f: 'F', l: 'L', blanda: 'B', fluida: 'F', fluido: 'F', liquida: 'L', liquido: 'L' };
const EXP_RE = /\b(x[acdfs]\d)\b/gi;

function parseDesignacio(text) {
  const t = norm(text);
  const out = { ha: null, cons: null, exp: new Set(), autocompactable: false, hidrofug: false, blanco: false, sr: false, mr: false };
  // FIX (2026-09-02): el client sovint escriu "HA - 35" amb espais al voltant del
  // guionet (copiat de Word, o estil catala habitual), no "HA-35" enganxat. La regex
  // nomes permetia un guionet SENSE espais, aixi que cap designacio amb espais feia
  // match mai -- ni tan sols el patro de reserva nomes-HA. Provat contra un cas real
  // ("HA - 35 / B / 20 / xC4 + XS1 + XA3") que abans donava null i ara fa match be.
  const m = t.match(/ha\s*-?\s*(\d{2})\s*\/\s*([bfl])\s*\/\s*(\d{1,2})\s*\/\s*(x[acdfs]\d(?:\s*(?:o|,|\+)\s*x[acdfs]\d)*)/);
  if (m) {
    out.ha = parseInt(m[1], 10);
    out.cons = CONS_MAP[m[2]] || m[2].toUpperCase();
    for (const e of (m[4].match(EXP_RE) || [])) out.exp.add(e.toUpperCase());
  } else {
    const m2 = t.match(/ha\s*-?\s*(\d{2})/);
    if (m2) out.ha = parseInt(m2[1], 10);
    for (const e of (t.match(EXP_RE) || [])) out.exp.add(e.toUpperCase());
    for (const k of Object.keys(CONS_MAP)) {
      if (new RegExp('\\bconsistencia\\s+' + k + '\\b').test(t)) { out.cons = CONS_MAP[k]; break; }
    }
  }
  if (/autocompactant|autocompactable/.test(t)) out.autocompactable = true;
  if (/hidrofug/.test(t)) out.hidrofug = true;
  if (/\b(blanco|blanc)\b/.test(t) && /hormig/.test(t)) out.blanco = true;
  if (/\bsr\b/.test(t)) out.sr = true;
  if (/\bmr\b/.test(t)) out.mr = true;
  return out;
}

// Taula de suplements validada contra el cataleg real d'OBRAS COMPLETAS (comprovat 2026-09-01).
// Si el codi de suplement no existeix al cataleg carregat (p.ex. amb una altra base), el
// suplement es descarta automaticament mes avall: aixo fa que el mecanisme no faci res amb
// bases que no tinguin aquests codis, sense necessitat de detectar quina base es.
const EXP_GRUP = {
  XC3: 'XC3-4', XC4: 'XC3-4',
  XA1: 'XA1-2-3', XA2: 'XA1-2-3', XA3: 'XA1-2-3',
  XF1: 'XF1', XD3: 'XD3', XS1: 'XS1', XS2: 'XS2-3', XS3: 'XS2-3'
};
const EXP_CODI = { 'XC3-4': 'MA00.2.6.', 'XA1-2-3': 'MA00.2.666', XF1: 'MA00.2.8', XD3: 'MA00.2.9', XS1: 'MA00.2.9.', 'XS2-3': 'MA00.2.9.9' };

function suplementsAplicables(client, base) {
  const out = [];
  if (base.ha === null) return out;
  if (client.ha && client.ha > base.ha) {
    if (client.ha >= 35) out.push(['MA00.2.2.2', 'formigo HA-35 (base porta HA-' + base.ha + ')']);
    else if (client.ha >= 30) out.push(['MA00.2.2', 'formigo HA-30 (base porta HA-' + base.ha + ')']);
  }
  if (client.cons && base.cons && client.cons !== base.cons) {
    if (client.cons === 'F') out.push(['MA00.2.3', 'consistencia fluida (base porta consistencia ' + base.cons + ')']);
    else if (client.cons === 'L') out.push(['MA00.3.2', 'consistencia liquida (base porta consistencia ' + base.cons + ')']);
  }
  const expBase = new Set([...base.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
  const expClient = new Set([...client.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
  for (const g of expClient) if (!expBase.has(g)) out.push([EXP_CODI[g], "classe d'exposicio " + g + ' (no la porta la base)']);
  if (client.autocompactable && !base.autocompactable) out.push(['MA00.3.21', 'formigo autocompactable']);
  if (client.hidrofug && !base.hidrofug) out.push(['MA00.2.3.', 'formigo hidrofug']);
  if (client.blanco && !base.blanco) out.push(['MA00.2.9.8', 'formigo blanc']);
  if (client.sr && !base.sr) out.push(['MA00.2.99', 'formigo SR']);
  if (client.mr && !base.mr) out.push(['MA00.2.999', 'formigo MR']);
  return out;
}

// Edita directament el resum (titol de la partida) perque digui la designacio REAL amb
// el suplement aplicat, en lloc d'afegir un text generic com "+ SUPLEMENTO HORMIGON".
// Nomes canvia HA/consistencia/exposicio quan el suplement corresponent s'ha aplicat de
// veritat (mateixes condicions que suplementsAplicables); si no troba el patro
// "HA-XX/Y/ZZ/XCn" al resum original, el deixa tal qual i nomes hi afegeix les etiquetes
// de propietats (hidrofug, autocompactable...) que no formen part d'aquest patro.
function actualitzaResum(resumOriginal, client, base, suplCodis) {
  let text = String(resumOriginal || '');
  const m = text.match(/HA\s*-?\s*(\d{2})\s*\/\s*([BFL])\s*\/\s*(\d{1,2})\s*\/\s*(X[ACDFS]\d(?:\s*[+,]\s*X[ACDFS]\d)*)/i);
  if (m) {
    const haNou = (client.ha && client.ha > base.ha) ? client.ha : m[1];
    const consNou = (client.cons && base.cons && client.cons !== base.cons) ? client.cons : m[2].toUpperCase();
    const aridNou = m[3];
    let expNou = m[4];
    if (client.exp && client.exp.size) {
      const expBase = new Set([...base.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
      const expClient = new Set([...client.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
      if ([...expClient].some((g) => !expBase.has(g))) expNou = [...client.exp].sort().join('+');
    }
    // FIX (2026-09-04): fins ara nomes es substituia la classe d'exposicio quan el client
    // en demanava una MES exigent que la base (via EXP_GRUP, que nomes mapeja XC3/XC4 i
    // amunt). Si el client demanava XC1 -- mes fluixa que el XC2 per defecte de la base --
    // "expClient" sortia buit (XC1 no es a EXP_GRUP) i el titol es quedava amb el XC2 de la
    // base tal qual. XC1 no necessita cap material addicional (no es un suplement de cost,
    // nomes cal corregir la designacio), per aixo es un cas especial: activa el relabel
    // encara que no hi hagi cap grup EXP_GRUP involucrat.
    const xc1Canvia = client.exp.has('XC1') && !base.exp.has('XC1');
    if (xc1Canvia) expNou = [...client.exp].sort().join('+');
    const nova = 'HA-' + haNou + '/' + consNou + '/' + aridNou + '/' + expNou;
    text = text.slice(0, m.index) + nova + text.slice(m.index + m[0].length);
  }
  const tags = [];
  if (suplCodis.includes('MA00.3.21')) tags.push('AUTOCOMPACTABLE');
  if (suplCodis.includes('MA00.2.3.')) tags.push('HIDROFUGO');
  if (suplCodis.includes('MA00.2.9.8')) tags.push('BLANCO');
  if (suplCodis.includes('MA00.2.99')) tags.push('SR');
  if (suplCodis.includes('MA00.2.999')) tags.push('MR');
  if (tags.length) text = text + ' ' + tags.join(' ');
  return text;
}

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

const out = [];
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const c = cat[String(r.codi_base)];
  if (!c) continue;

  let concreteLine = null, ggRate = null;
  for (const [kk, , rend] of tripletsOf(c.descomposicio)) {
    if (kk === '%24') { ggRate = Number(rend); continue; }
    const src = con[kk] || cat[kk];
    if (src && /hormig/i.test(norm(src.resum)) && !concreteLine) concreteLine = { codi: kk, rendiment: Number(rend), resum: src.resum };
  }
  if (!concreteLine || ggRate === null) continue;

  const clientDesig = parseDesignacio((r.resum_excel || '') + ' ' + (r.text || ''));
  if (clientDesig.ha === null) continue;
  const baseDesig = parseDesignacio(concreteLine.resum);
  if (baseDesig.ha === null) continue;

  const supl = suplementsAplicables(clientDesig, baseDesig).filter(([sc]) => cat[sc] || con[sc]);
  // FIX (2026-09-04): quan el client demana XC1 i la base porta una classe mes exigent
  // (normalment XC2 per defecte), cal corregir el titol/Text1 encara que aixo NO impliqui
  // cap suplement de cost (suplementsAplicables no hi afegeix res perque XC1 no es a
  // EXP_GRUP -- vegeu actualitzaResum). Sense aquest cas especial, "if (!supl.length)
  // continue" saltava directament la partida i el XC2 per defecte es quedava tal qual.
  const xc1Relabel = clientDesig.exp.has('XC1') && !baseDesig.exp.has('XC1');
  if (!supl.length && !xc1Relabel) continue;

  const suplCodis = supl.map((s) => s[0]);
  out.push({ json: {
    ordre: r.ordre,
    codi_base: r.codi_base,
    suplement_codis: suplCodis,
    suplement_motiu: supl.length ? supl.map((s) => s[1]).join('; ') : ("classe d'exposicio XC1 (la base porta " + [...baseDesig.exp].join('+') + ')'),
    suplement_rendiment: concreteLine.rendiment,
    suplement_gg_rate: ggRate,
    formigo_codi: concreteLine.codi,
    resum_nou: actualitzaResum(c.resum, clientDesig, baseDesig, suplCodis),
    // Mateixa substitucio, ara sobre el text contractual (~T, "descripcio de l'element" a
    // Presto) perque tambe reflecteixi el formigo nou -- nomes la designacio HA/.../XCn,
    // res mes del text es toca.
    text_nou: actualitzaResum(c.text, clientDesig, baseDesig, suplCodis)
  } });
}
return out;

