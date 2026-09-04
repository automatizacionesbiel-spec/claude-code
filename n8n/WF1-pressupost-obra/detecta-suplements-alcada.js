// BLOC 4b - Suplements d'alcada (pilars, murs, forjats). Si el client demana una alcada
// superior a la que ja porta la partida base (sempre H<=3M a la base), s'afegeix el
// suplement d'encofrat corresponent COM A PARTIDA INDEPENDENT dins el mateix capitol (no
// es toca la descomposicio de la partida base). La quantitat es en M2 de superficie
// d'encofrat: si la partida del client ja es en M2 (encofrat sol) es fa servir la mateixa
// quantitat; si es una partida COMPOSTA en M3, es calcula M2 = M3 x rendiment del fill
// d'encofrat dins la descomposicio de la base.
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const BS = String.fromCharCode(92);
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

const yaHiEs = new Set(files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA').map((r) => String(r.codi_base)));

// FIX (2026-09-04): nomes reconeixia frases en castella amb operadors ASCII ("H<=Xm",
// "hasta Xm", "altura de Xm") -- els clients d'aquesta empresa (catalana) sovint escriuen
// "alçada" en lloc de "altura", "fins a" en lloc de "hasta", i muntes ho copien de Word amb
// l'operador unicode "≤" en lloc de "<=". Cap d'aquests queia a cap dels 3 patrons, aixi
// que el suplement d'alçada es saltava silenciosament per a moltes partides d'encofrat que
// si l'havien de portar. norm() ja treu accents (alçada -> alcada), per aixo nomes cal
// buscar "alcada" (sense ç) un cop normalitzat.
function extreuAlcada(text) {
  const t = norm(text);
  let m = t.match(/h\s*[<=≤]{1,2}\s*(\d+(?:[.,]\d+)?)\s*m(?:ts?|etres?|etros?)?\b/);
  if (!m) m = t.match(/(?:hasta|fins\s*a?)\s+(\d+(?:[.,]\d+)?)\s*m(?:ts?|etres?|etros?)?\b/);
  if (!m) m = t.match(/(?:altura|alcada)\s*(?:de\s+|[<=≤]{1,2}\s*)?(\d+(?:[.,]\d+)?)\s*m(?:ts?|etres?|etros?)?\b/);
  if (!m) return null;
  return parseFloat(m[1].replace(',', '.'));
}

const FAMILIES = [
  { keyword: /pilar/ },
  { keyword: /muro/ },
  { keyword: /forjado/ }
];

function trobaSuplementAlcada(familia, alcadaClient) {
  const candidats = [];
  for (const c of cataleg) {
    const r = norm(c.resum);
    if (!/suplemento encofrado/.test(r)) continue;
    if (!familia.keyword.test(r)) continue;
    const m = r.match(/de 3 a (\d+)\s*m/);
    if (!m) continue;
    candidats.push({ c, n: parseInt(m[1], 10) });
  }
  if (!candidats.length) return null;
  candidats.sort((a, b) => a.n - b.n);
  const cobreix = candidats.find((x) => x.n >= alcadaClient);
  return (cobreix || candidats[candidats.length - 1]).c;
}

function trobaFillEncofrat(desc) {
  for (const [kk, , rend] of tripletsOf(desc)) {
    const src = con[kk] || cat[kk];
    if (src && /encofr/i.test(norm(src.resum))) return { codi: kk, rendiment: Number(rend) };
  }
  return null;
}

const out = [];
let n = 0;
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const c = cat[String(r.codi_base)];
  if (!c) continue;

  const capBase = norm(c.capitol_desc || c.capitol || '');
  const familia = FAMILIES.find((f) => f.keyword.test(capBase));
  if (!familia) continue;

  const alcadaClient = extreuAlcada((r.resum_excel || '') + ' ' + (r.text || ''));
  if (alcadaClient === null || alcadaClient <= 3) continue;

  const supl = trobaSuplementAlcada(familia, alcadaClient);
  if (!supl || yaHiEs.has(String(supl.codi))) continue;

  let qty;
  if (String(c.ud).toUpperCase() === 'M2') {
    qty = Number(r.quantitat) || 0;
  } else {
    const fill = trobaFillEncofrat(c.descomposicio);
    if (!fill) continue;
    qty = Math.round((Number(r.quantitat) || 0) * fill.rendiment * 1000) / 1000;
  }
  if (!qty) continue;

  n++;
  out.push({ json: {
    ordre: -2000 - n,
    codi_base: String(supl.codi),
    confianca: 'SUPLEMENT_ALCADA',
    resum_excel: 'Suplemento por altura: ' + supl.resum + ' (client demana ' + alcadaClient + 'm)',
    text: '',
    ud: supl.ud,
    quantitat: qty,
    capitol_desti: r.capitol_desti
  } });
}
return out;

