// BLOC 4b - Suplements fixos (elements que l'empresa afegeix sempre per criteri propi,
// a quantitat 0 perque el client en vegi el preu unitari). Definit per l'usuari 2026-09-01:
// - Si hi ha CIMENTACION: sempre refino manual de tierras.
// - Nomes si A MES hi ha una SOLERA dins de CIMENTACION: tambe galga de polietile +
//   dilatacio de porex.
// - Si hi ha MUROS (el capitol nostre que sigui): les 2 juntes (hidroexpansiva i
//   elastomerica) + el suplement de catas.
// - Els 3 ancoratges (barra corrugada Ø12/16/20) van a CADA capitol tecnic realment usat
//   (independentment dels elements que porti), EXCEPTE VARIOS Y CONDICIONES GENERALES.
//   Tambe s'exclouen FUERA DE ALCANCE (feina que NO fa l'empresa) i PENDENTS DE
//   CLASSIFICAR (no es un capitol real, nomes un calaix temporal) -- son exclusions
//   logiques meves no dites explicitament, a revisar si no es el que es volia.
// Els codis es busquen pel seu TEXT al cataleg (no per numero fix), perque MO+MAT i
// OBRAS COMPLETAS fan servir numeracions diferents pel mateix concepte -- aixo fa que
// el mateix codi funcioni amb qualsevol base sense haver de detectar quina es.
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;

const yaHiEs = new Set(files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA').map((r) => String(r.codi_base)));

function troba(regex) { for (const c of cataleg) if (regex.test(norm(c.resum))) return c; return null; }
function trobaTots(regex) { return cataleg.filter((c) => regex.test(norm(c.resum))); }
function extreuDiametre(resum) { const m = norm(resum).match(/(\d+)\s*mm/); return m ? parseInt(m[1], 10) : null; }

const cimentacio = files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA' && r.capitol_desti === 'CIMENTACION' && cat[r.codi_base]);
const muros = files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA' && cat[r.codi_base] && /muro/.test(norm(cat[r.codi_base].capitol_desc || cat[r.codi_base].capitol || '')));

const CAPITOLS_REALS = ['MOVIMIENTO DE TIERRAS', 'CIMENTACION', 'ESTRUCTURAS'];
const capitolsUsats = [...new Set(
  files.filter((r) => r.codi_base && r.confianca !== 'ABSORBIDA' && CAPITOLS_REALS.includes(r.capitol_desti)).map((r) => r.capitol_desti)
)];

const out = [];
let n = 0;
const afegeix = (c, capKey) => {
  if (!c || yaHiEs.has(String(c.codi)) || !capKey) return;
  n++;
  out.push({ json: {
    ordre: -1000 - n,
    codi_base: String(c.codi),
    confianca: 'SUPLEMENT_FIX',
    resum_excel: 'Suplemento fijo: ' + c.resum,
    text: '',
    ud: c.ud,
    quantitat: 0,
    capitol_desti: capKey
  } });
};

if (cimentacio.length) {
  const capKey = cimentacio[0].capitol_desti;
  afegeix(troba(/refino manual de tierras/), capKey);
  const hiHaSolera = cimentacio.some((r) => /solera/.test(norm(cat[r.codi_base].resum)));
  if (hiHaSolera) {
    afegeix(troba(/galga de polietileno/), capKey);
    afegeix(troba(/dilatacion en porex/), capKey);
  }
}

if (muros.length) {
  const capKey = muros[0].capitol_desti;
  afegeix(troba(/junta hidroexpansiva/), capKey);
  afegeix(troba(/junta elastomerica/), capKey);
  afegeix(troba(/suplemento por ejecucion de catas o damas/), capKey);
}

const candidatsAncoratge = trobaTots(/anclaje con barra.*acero corrugado/);
for (const capKey of capitolsUsats) {
  for (const d of [12, 16, 20]) {
    const c = candidatsAncoratge.find((cc) => extreuDiametre(cc.resum) === d);
    afegeix(c, capKey);
  }
}

return out;

