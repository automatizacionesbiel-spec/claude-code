// BLOC 4b - Mallazo esmentat al text del client. Nomes actua si el cataleg carregat te
// codis de mallazo (avui nomes OBRAS COMPLETAS; MO+MAT no en te cap i el mecanisme no fa
// res -- es descarta automaticament perque els codis no existeixen al cataleg carregat).
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
const totCataleg = [...cataleg, ...conceptes];

// FIX (2026-09-03): la versio anterior exigia que la graella (AxB) vingues ENGANXADA a
// "malla(zo) (electrosoldada) de" i el diametre ENGANXAT a la graella com "Ø5". Als excels
// reals hi sol haver text pel mig (marca/grau d'acer, p.ex. "malla electrosoldada AP500 T
// de 20x20 cm...") i el diametre s'expressa sovint "20x20 cm, 5 i 5 mm de D" (catala, amb
// el diametre repetit i sense simbol Ø). Ara es busca "malla" primer, despres es cerca la
// graella AxB en una finestra ampla de text darrere seu (sigui quin sigui el text pel mig),
// i despres el diametre en una segona finestra mes curta just despres de la graella --
// primer el format compacte "Ø5"/"diametro 5", i si no en fa match, el format catala "5 (i
// 5) mm de D".
function extreuMallat(text) {
  const t = norm(text);
  const iMalla = t.search(/\bmalla(?:zo|t)?\b/);
  if (iMalla === -1) return null;
  const finestra = t.slice(iMalla, iMalla + 160);
  const grid = finestra.match(/(\d+)\s*x\s*(\d+)/);
  if (!grid) return null;
  const desGrid = finestra.slice(grid.index + grid[0].length, grid.index + grid[0].length + 60);
  let d = desGrid.match(/^\s*(?:o|ø|diametro|diam\.?|di[aà]metre)\s*(\d+)/);
  if (!d) d = desGrid.match(/(\d+)(?:\s*i\s*\d+)?\s*mm\s*(?:de\s*)?(?:d\b|di[aà]metre|diametro)?/);
  if (!d) return null;
  return { a: parseInt(grid[1], 10), b: parseInt(grid[2], 10), d: parseInt(d[1], 10) };
}

function trobaMaterial(a, b, d) {
  for (const c of totCataleg) {
    const r = norm(c.resum);
    const mm = r.match(/malla(?:zo)?(?:\s+electrosoldada)?\s*(\d+)\s*x\s*(\d+)\s*(?:o|ø)?\s*(\d+)/);
    if (!mm) continue;
    const ca = parseInt(mm[1], 10), cb = parseInt(mm[2], 10), cd = parseInt(mm[3], 10);
    if (cd !== d) continue;
    if ((ca === a && cb === b) || (ca === b && cb === a)) return c;
  }
  return null;
}
function trobaColocacio(d) {
  for (const c of totCataleg) {
    const r = norm(c.resum);
    const mm = r.match(/colocacion\s*(?:de\s*)?malla(?:zo)?\s*(?:o|ø)?\s*(\d+)/);
    if (mm && parseInt(mm[1], 10) === d) return c;
  }
  return null;
}
function trobaFillEncofrat(desc) {
  for (const [kk, , rend] of tripletsOf(desc)) {
    const src = con[kk] || cat[kk];
    if (src && /encofr/i.test(norm(src.resum))) return { codi: kk, rendiment: Number(rend) };
  }
  return null;
}

const out = [];
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const c = cat[String(r.codi_base)];
  if (!c) continue;

  const mallat = extreuMallat((r.resum_excel || '') + ' ' + (r.text || ''));
  if (!mallat) continue;

  const material = trobaMaterial(mallat.a, mallat.b, mallat.d);
  const colocacio = trobaColocacio(mallat.d);
  if (!material || !colocacio) continue;

  const jaHiEs = tripletsOf(c.descomposicio).some(([kk]) => kk === material.codi);
  if (jaHiEs) continue;

  let rend;
  if (String(c.ud).toUpperCase() === 'M2') {
    rend = 1;
  } else {
    const fill = trobaFillEncofrat(c.descomposicio);
    if (!fill) continue;
    rend = fill.rendiment;
  }

  // Frase per al text contractual (~T), DINS de l'INCLUYE (abans del "No incluye") --
  // mateix format que ja fa servir la propia base en partides com "307": "Suministro y
  // colocación de una capa de mallazo 20x20Ø6mm.". Nomes canvien els numeros (les mides
  // que ha dit el client), el text es sempre el mateix.
  const textExtra = '-. Suministro y colocación de una capa de mallazo ' + mallat.a + 'x' + mallat.b + 'Ø' + mallat.d + 'mm.';

  out.push({ json: {
    ordre: r.ordre,
    codi_base: r.codi_base,
    triples: [{ codi: String(material.codi), rendiment: rend }, { codi: String(colocacio.codi), rendiment: rend }],
    motiu: 'mallazo ' + mallat.a + 'x' + mallat.b + ' Ø' + mallat.d,
    text_extra: textExtra,
    a: mallat.a,
    b: mallat.b,
    d: mallat.d
  } });
}
return out;

