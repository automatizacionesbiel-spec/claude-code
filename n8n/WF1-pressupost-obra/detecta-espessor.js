// BLOC 4b - Espessor (gruix) real indicat pel client per a lloses/forjats i soleres/capes.
// Nomes actua a partides M2 que declaren un gruix al seu propi titol ("G=12CMS", "E=10CM")
// I que tenen un fill de FORMIGO en M3 dins la propia descomposicio -- es aquest fill qui
// determina quant formigo (m3) cal per m2, en funcio del gruix.
//
// Calcul del nou rendiment (decidit expressament, 2026-09-04): NO s'escala tot el rendiment
// proporcionalment -- es manté la MERMA de la base FIXA i nomes s'escala la part TEORICA.
// Exemple real (codi "104", E=10CM, rendiment base 0.12 m3/m2 = 0.10 teoric + 0.02 de
// merma): si el client demana E=15CM, el nou rendiment es 0.12 + (15-10)/100 = 0.17 m3/m2
// (0.15 teoric + la mateixa merma de 0.02) -- MAI 0.12 x 15/10 = 0.18 (aixo escalaria
// tambe la merma, que ha de quedar fixa).
//
// Aquest node NOMES calcula els valors nous (rendiment i gruix detectat) -- es "Genera BC3"
// qui decideix on i com substituir el numero al titol/descripcio i on injectar el rendiment,
// igual que ja fa amb l'acer i l'encofrat (mateix patro "Q.estimada=" -> substitueix nomes
// el numero, mai la resta del text).
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const BS = String.fromCharCode(92);
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };

// FIX (2026-09-07): es llegia de "Assigna capitols", que va ABANS de l'enriquiment amb
// IA -- per aixo els camps que la IA extreu (r.mallat_ia, r.gruix_cm_ia...) sempre eren
// undefined aqui i la logica "primer la IA, el regex nomes com a reserva" era codi mort.
// "Aplica enriquiment" retorna les mateixes files en el mateix ordre, amb els camps de la
// IA afegits, i ja s'ha executat molt abans que aquest node.
const files = $('Aplica enriquiment').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

// Gruix declarat al TITOL de la base: "G=12CMS", "E=10CM" (lletra + numero + CM, amb o
// sense "S" final, amb o sense espais al voltant del "=").
const GRUIX_TITOL_RE = /[GE]\s*=\s*(\d+(?:[.,]\d+)?)\s*CM(?:S)?\b/i;

function trobaFillFormigoM3(desc) {
  for (const [kk, , rend] of tripletsOf(desc)) {
    const src = con[kk] || cat[kk];
    if (src && String(src.ud).toUpperCase() === 'M3' && /vertido|hormig/i.test(norm(src.resum))) {
      return { codi: kk, rendiment: Number(rend) || 0 };
    }
  }
  return null;
}

// Gruix que demana el CLIENT: numero+CM amb una paraula clau de gruix a la vora (castella,
// catala i la mateixa notacio "G="/"E=" que la base).
const GRUIX_KEYWORDS_RE = /\b(?:gruix|espesor|espessor|grosor|canto|cantell|[ge]\s*=)\b/i;
function extreuGruixClient(text) {
  const t = String(text || '');
  const re = /(\d+(?:[.,]\d+)?)\s*cm\b/gi;
  let m;
  while ((m = re.exec(t))) {
    const inici = Math.max(0, m.index - 25);
    const final = Math.min(t.length, m.index + m[0].length + 5);
    if (GRUIX_KEYWORDS_RE.test(t.slice(inici, final))) return parseFloat(m[1].replace(',', '.'));
  }
  return null;
}

const out = [];
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const c = cat[String(r.codi_base)];
  if (!c) continue;

  const mTitol = String(c.resum || '').match(GRUIX_TITOL_RE);
  if (!mTitol) continue;
  const fillFormigo = trobaFillFormigoM3(c.descomposicio);
  if (!fillFormigo) continue;

  const gruixBase = parseFloat(mTitol[1].replace(',', '.'));
  // FIX (2026-09-04): prioritat al gruix que ja ha extret "Enriquiment IA" -- enten molt
  // millor el llenguatge natural del client que cap regex. El regex propi nomes queda com a
  // reserva (si aquesta execucio no ha passat per la IA, o no ha trobat res per aquesta fila).
  const gruixIa = Number(r.gruix_cm_ia);
  const gruixClient = (gruixIa > 0) ? gruixIa : extreuGruixClient((r.resum_excel || '') + ' ' + (r.text || ''));
  if (gruixClient === null || gruixClient === gruixBase) continue;

  const delta = (gruixClient - gruixBase) / 100;
  const rendimentNou = Math.round((fillFormigo.rendiment + delta) * 10000) / 10000;
  if (rendimentNou <= 0) continue;

  out.push({ json: {
    ordre: r.ordre,
    codi_base: r.codi_base,
    formigo_codi: fillFormigo.codi,
    gruix_client: gruixClient,
    rendiment_nou: rendimentNou,
    motiu: 'gruix ' + gruixClient + 'cm (base ' + gruixBase + 'cm)'
  } });
}
return out;

