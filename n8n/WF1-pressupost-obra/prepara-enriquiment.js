// BLOC 4c - Avisos per al tecnic + etiqueta curta de comentari + extraccio de valors
// tecnics de text lliure. NO es toca cap descripcio ni cap preu: nomes s'assenyala on el
// client demana alguna cosa que la partida emparellada no cobreix (com abans), es decideix
// si cal una etiqueta curta al comentari de cada linia de mesura del BC3 (2026-09-02), i
// ADEMES (2026-09-04) s'extreuen els valors numerics que el client hagi indicat en text
// lliure (kg d'acer, mides de mallat, gruix) -- abans aixo nomes s'intentava amb regex a
// "Detecta acer"/"Detecta mallat"/"Detecta espessor", pero el llenguatge natural del client
// (ordre de les paraules, catala/castella barrejat, frases llargues amb la dosificacio de
// ciment pel mig...) es massa variable per cap regex fiable. La IA ho entén molt millor;
// els nodes "Detecta..." fan servir aquest valor com a font PRINCIPAL i nomes recorren al
// seu propi regex com a reserva (si aquesta execucio no ha passat per aqui, o no hi ha res).
const files = $input.all().map((i) => i.json);

// Un codi del cataleg = UN concepte al BC3. S'agrupa per codi, pero ara es guarda CADA
// fila per separat (amb el seu ordre), no deduplicat com abans -- cal decidir etiqueta
// per FILA, no per codi: dues files amb el mateix codi poden necessitar etiquetes diferents
// (o cap) segons si son basicament la mateixa cosa o elements realment diferents.
const perCodi = new Map();
for (const r of files) {
  if (!r.codi_base) continue;
  if (r.confianca === 'ABSORBIDA') continue;
  const k = String(r.codi_base);
  if (!perCodi.has(k)) perCodi.set(k, { codi: k, resum_base: r.resum_base, files: [] });
  const titol = String(r.resum_excel || '').trim();
  const detall = String(r.text || '').trim().slice(0, 1500);
  if (!titol && !detall) continue;
  perCodi.get(k).files.push({ ordre: r.ordre, titol, detall });
}
const items = [...perCodi.values()]
  .map((v) => ({ codi: v.codi, resum_base: v.resum_base, files: v.files.slice(0, 15) }))
  .filter((v) => v.files.length);

if (!items.length) return [{ json: { tipus: 'cap_lot' } }];

const SCHEMA = {
  type: 'object',
  properties: {
    avisos: {
      type: 'array',
      items: {
        type: 'object',
        properties: { codi: { type: 'string' }, discrepancia: { type: 'string' } },
        required: ['codi', 'discrepancia'],
        additionalProperties: false
      }
    },
    etiquetes: {
      type: 'array',
      items: {
        type: 'object',
        properties: { ordre: { type: 'integer' }, etiqueta: { type: 'string' } },
        required: ['ordre', 'etiqueta'],
        additionalProperties: false
      }
    },
    acer: {
      type: 'array',
      items: {
        type: 'object',
        properties: { ordre: { type: 'integer' }, kg: { type: 'number' } },
        required: ['ordre', 'kg'],
        additionalProperties: false
      }
    },
    mallat: {
      type: 'array',
      items: {
        type: 'object',
        properties: { ordre: { type: 'integer' }, a: { type: 'integer' }, b: { type: 'integer' }, d: { type: 'integer' } },
        required: ['ordre', 'a', 'b', 'd'],
        additionalProperties: false
      }
    },
    gruix: {
      type: 'array',
      items: {
        type: 'object',
        properties: { ordre: { type: 'integer' }, cm: { type: 'number' } },
        required: ['ordre', 'cm'],
        additionalProperties: false
      }
    }
  },
  required: ['avisos', 'etiquetes', 'acer', 'mallat', 'gruix'],
  additionalProperties: false
};

const REGLES = [
  "Ets el tecnic de pressupostos d'Encofrados Castell.",
  "Reps partides del cataleg de l'empresa (codi + resum_base) i, per a cadascuna, la llista de files del client (amb el seu 'ordre') que hi han anat a parar -- inclou titol curt i, quan hi es, la descripcio tecnica llarga.",
  '',
  'TENS TRES TASQUES INDEPENDENTS:',
  '',
  "1) AVISOS (com sempre): avisa quan el client demana alguna cosa que la partida NO cobreix i que necessita un SUPLEMENT o un canvi que fara el tecnic a ma.",
  '',
  'AVISA de diferencies en:',
  "- Designacio del formigo: resistencia (HA-25 vs HA-30), consistencia (B, F, L), mida de l'arid, classe d'exposicio (XC, XA, XS, XF, XD), formigo autocompactable, hidrofug, blanc, SR o MR.",
  '- Alcada (el client demana H<=5M i la partida es H<=3M).',
  '- Gruix, cantell o dimensions (E=, G=, seccions) -- pero NOMES si el gruix demanat queda FORA del rang que la propia partida ja declara (p.ex. si la partida diu "E<=30CM" i el client demana 25 o 28cm, aixo JA hi entra: no cal avisar-ne).',
  '- Geometria (corb, inclinat, circular, per catas o dames) -- si el client ho especifica i no coincideix amb el que digui la partida.',
  '- Nombre de cares (1C / 2C).',
  "- Acabat (el client demana vist i la partida es NV, o a l'inreves).",
  "- Quantia d'acer que el client indiqui al text (kg/m3 o kg/m2), si la partida no la porta.",
  '',
  'NO avisis de detalls que no afecten el preu (si es fa amb bomba o amb cubilot, com anomena el client l’element...).',
  '- Inclou NOMES els codis amb diferencia real de les que has d’avisar. OMET la resta.',
  '- discrepancia: MAXIM 20 PARAULES, concreta.',
  '',
  '2) ETIQUETES CURTES per al comentari de cada linia de mesura del BC3:',
  '- Per a cada codi, mira TOTES les seves files juntes.',
  '- Si son basicament la mateixa cosa (mateix titol, mateixa descripcio en essencia -- encara que el text sigui llarg, o hi hagi petites variacions de redaccio que no canvien l’element), NO calen etiquetes: ja se sap que son diverses medicions repetides del mateix element, el titol de la partida ja ho diu tot.',
  '- Si dins del mateix codi hi ha files que descriuen elements o condicions REALMENT diferents entre si (per exemple: "zapatas aisladas" vs "zapatas corridas", un gruix clarament diferent, una zona/ubicacio diferent, un element o versio clarament distinta), llavors SI cal una etiqueta per a CADA fila d’aquest grup, perque el tecnic sapiga quina es quina al Presto.',
  '- L’etiqueta ha de ser una FRASE MOLT CURTA (2 a 5 paraules), NOMES amb la paraula o paraules clau diferenciadores -- MAI una copia ni un resum de la descripcio sencera.',
  '- REGLA OBLIGATORIA I ABSOLUTA per al camp "etiqueta": SEMPRE en CASTELLA i TOTA EN MAJUSCULES, INDEPENDENTMENT de l’idioma en que estigui escrit el text original del client (fins i tot si tot el text que reps es en catala, l’etiqueta ha de sortir en castella).',
  '  Exemples de traduccio obligatoria (catala del client -> etiqueta que has d’escriure):',
  '  "Enceps" -> "ENCEPADOS" (NO "ENCEPS")',
  '  "Riostres i basaments" -> "RIOSTRAS Y BASAMENTOS" (NO "RIOSTRES I BASAMENTS")',
  '  "Fonament armat" -> "CIMIENTO ARMADO" (NO "FONAMENT ARMAT")',
  '  Aquesta regla es IGUAL D’IMPORTANT per a TOTES les etiquetes que generis, no nomes algunes -- revisa cada etiqueta abans de respondre i comprova que esta en castella.',
  '  Aixo val NOMES per al camp "etiqueta"; no afecta "discrepancia".',
  '- Si un codi nomes te 1 fila, o totes les seves files son essencialment iguals entre si, NO li posis etiqueta a cap (deixa-les fora de l’array "etiquetes").',
  '- Inclou NOMES els "ordre" que necessiten etiqueta. OMET la resta.',
  '',
  '3) EXTRACCIO DE VALORS TECNICS -- llig el detall de cada fila i extreu, NOMES quan el client ho digui de manera clara i inequivoca per aquell element concret (mai inventis, mai dedueixis, i mai confonguis la dosificacio de ciment/formigo -p.ex. "350 kg/m3 de cemento"- amb la quantitat d’acer):',
  "- ACER (kg): quantitat real d'acer/armadura/ferralla corrugada que el client indiqui, en KG per unitat de la partida (kg/m2 o kg/m3, la xifra tal qual, sense l'extra de seguretat que ja afegeix el sistema per la seva banda).",
  '- MALLAT: si el client esmenta un mallazo/malla electrosoldada amb dues mides (A x B, en cm) i un diametre de filferro (D, en mm) -- independentment de l’ordre en que ho escrigui, o si ho fa en catala o en castella.',
  '- GRUIX (cm): NOMES si el client indica explicitament un gruix/espessor/grosor/canto en centimetres per a l’element (llosa, forjat, solera, capa de neteja) que sigui una dada real d’aquest projecte -- si nomes repeteix el mateix gruix que ja porta el titol de la partida no cal reportar-lo (no fa cap mal si ho fas, pero no es necessari).',
  '- Inclou NOMES els "ordre" on hi hagi una xifra clara d’aquell tipus concret. Si no hi ha cap valor d’un tipus per cap fila, deixa aquell array buit.',
  '',
  'El camp "discrepancia" (tasca 1), escriu-lo en catala. El camp "etiqueta" (tasca 2), en castella i majuscules, com s’ha indicat. Els valors de la tasca 3 (acer/mallat/gruix) son sempre numeros.'
].join('\n');

const LOT = 15;
const lots = [];
for (let i = 0; i < items.length; i += LOT) {
  lots.push({ json: {
    tipus: 'lot',
    body: {
      model: 'claude-sonnet-5', max_tokens: 8000, thinking: { type: 'disabled' }, system: REGLES,
      messages: [{ role: 'user', content: 'PARTIDES A REVISAR:\n' + JSON.stringify(items.slice(i, i + LOT)) }],
      output_config: { format: { type: 'json_schema', schema: SCHEMA } }
    }
  } });
}
return lots;

