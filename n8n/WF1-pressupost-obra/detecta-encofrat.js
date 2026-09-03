// BLOC 4b - Quantia real d'encofrat (m2/m3) indicada pel client. Moltes partides base
// porten al seu propi text un valor GENERIC per defecte ("...caras.Q.estimada= 5.2
// m2/m3.") que no te relacio amb el projecte concret -- es "Genera BC3" qui decideix: si
// aquest node dona una quantitat real per la fila, la substitueix; si no en dona cap
// (perque el client no l'ha indicada), treu la quantitat generica del text en lloc de
// deixar-la com si fos real. Aquest node NOMES produeix sortida quan hi ha una quantitat
// real al text del client -- no cal que actui quan no n'hi ha, "Genera BC3" ja sap treure
// el valor per defecte sense necessitat de cap avis exprés.
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

const files = $('Assigna capitols').all().map((i) => i.json);

const ENCOFRAT_KEYWORDS_RE = /\b(?:encofrat|encofrado)\b/;
function extreuQuantitatEncofrat(text) {
  const t = norm(text);
  const re = /(\d+(?:[.,]\d+)?)\s*m2\s*\/\s*m3/g;
  let m;
  while ((m = re.exec(t))) {
    const inici = Math.max(0, m.index - 40);
    const final = Math.min(t.length, m.index + m[0].length + 40);
    if (ENCOFRAT_KEYWORDS_RE.test(t.slice(inici, final))) return parseFloat(m[1].replace(',', '.'));
  }
  return null;
}

const out = [];
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const qty = extreuQuantitatEncofrat((r.resum_excel || '') + ' ' + (r.text || ''));
  if (qty === null) continue;
  out.push({ json: { ordre: r.ordre, codi_base: r.codi_base, qty_client: qty } });
}
return out;
