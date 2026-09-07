// BLOC 4b - Encofrat/vertit que falta (pilars, murs, forjats). Si a la familia hi ha
// alguna partida matched que es NOMES encofrat (sense vertit/formigo) o NOMES vertit
// (sense encofrat), i CAP de les partides d'aquesta familia es composta (les compostes ja
// porten els dos), s'afegeix el que falta com a partida independent a quantitat 0.
// Per murs: si el client no diu "1 cara", es tria la variant de 2 cares (per defecte).
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;

const yaHiEs = new Set(files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA').map((r) => String(r.codi_base)));

function troba(regex, exclouFn) {
  for (const c of cataleg) {
    const r = norm(c.resum);
    if (regex.test(r) && !(exclouFn && exclouFn(r))) return c;
  }
  return null;
}
const excFraseRegex = (re) => (r) => re.test(r);

const FAMILIES = {
  pilares: { keyword: /pilar/ },
  muros: { keyword: /muro/ },
  forjados: { keyword: /forjado/ }
};

const out = [];
let n = 0;
const afegeix = (c, capKey) => {
  if (!c || yaHiEs.has(String(c.codi)) || !capKey) return;
  n++;
  out.push({ json: {
    ordre: -3000 - n,
    codi_base: String(c.codi),
    confianca: 'SUPLEMENT_FIX',
    resum_excel: 'Suplemento fijo: ' + c.resum,
    text: '',
    ud: c.ud,
    quantitat: 0,
    capitol_desti: capKey
  } });
};

for (const [fam, def] of Object.entries(FAMILIES)) {
  const files_fam = files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA' && cat[r.codi_base] && def.keyword.test(norm(cat[r.codi_base].capitol_desc || cat[r.codi_base].capitol || '')));
  if (!files_fam.length) continue;

  const composta = files_fam.some((r) => r.es_composta === 'x');
  if (composta) continue; // ja porta tots dos, no cal res

  const excl = /suplemento/;
  const encofradoRows = files_fam.filter((r) => /encofr/.test(norm(cat[r.codi_base].resum)) && !excl.test(norm(cat[r.codi_base].resum)));
  const vertidoRows = files_fam.filter((r) => /vertido|hormigon/.test(norm(cat[r.codi_base].resum)) && !excl.test(norm(cat[r.codi_base].resum)) && !/encofr/.test(norm(cat[r.codi_base].resum)));

  const hiHaEncofrat = encofradoRows.length > 0;
  const hiHaVertit = vertidoRows.length > 0;
  if (hiHaEncofrat === hiHaVertit) continue; // tots dos hi son, o cap dels dos -- no toquem res

  const capKey = files_fam[0].capitol_desti;

  if (hiHaEncofrat && !hiHaVertit) {
    let vertit = null;
    if (fam === 'pilares') vertit = troba(/hormigon.*pilares|vertido.*pilares/, excFraseRegex(/ascensor|suplemento/));
    else if (fam === 'muros') vertit = troba(/hormigon.*muros|vertido.*muros/, excFraseRegex(/ascensor|suplemento/));
    else if (fam === 'forjados') vertit = troba(/vertido.*forjados|hormigon.*losas de forjados/, excFraseRegex(/chapa|solera ventilada|suplemento/));
    afegeix(vertit, capKey);
  } else if (hiHaVertit && !hiHaEncofrat) {
    let encofrat = null;
    if (fam === 'pilares') {
      encofrat = troba(/encofrado.*pilares.*rect/, excFraseRegex(/circular|universal/));
    } else if (fam === 'forjados') {
      encofrat = troba(/encofrado.*losa.*plana/, null) || troba(/encofrado.*forjado/, null);
    } else if (fam === 'muros') {
      const textVertit = vertidoRows.map((r) => (r.resum_excel || '') + ' ' + (r.text || '')).join(' ');
      const es1cara = /\b1\s*c(ara)?\b|una\s+cara/.test(norm(textVertit));
      // "catas" nomes exclou quan NO va precedit de "no" (la variant "(NO CATAS)" es la
      // normal; "CATAS" tota sola es una variant diferent i mes cara, no la per defecte).
      encofrat = es1cara
        ? troba(/encofrado (de )?muro recto a 1c/, (r) => /catas/.test(r) && !/no catas/.test(r))
        : troba(/encofrado muro 2c|encof.*muro.*2c/, null);
    }
    afegeix(encofrat, capKey);
  }
}

return out;

