// BLOC 3 - Resolucio en cascada: diccionari -> filtre d'unitat (tou) -> IA acotada.
// Nomes fa MATCH de partides: no toca preus, ni descomposicions, ni descripcions.
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const UDMAP = { M: 'ML', ML: 'ML', U: 'UD', UT: 'UD', UD: 'UD', PA: 'PA' };
const normUd = (u) => { const x = String(u ?? '').trim().toUpperCase().replace(/²/g, '2').replace(/³/g, '3').replace(/\.$/, ''); return UDMAP[x] || x; };
const BS = String.fromCharCode(92);
const kidsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push(c); } return o; };

const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
if (!cataleg.length) throw new Error('El cataleg de la base seleccionada es buit. Executa primer el WF0 (ingesta de bases).');
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const partides = $('Parseja amidaments').all().map((i) => i.json);
const baseNom = $('Nova obra').first().json['Base de preus'];

const catMap = {};
for (const c of cataleg) catMap[String(c.codi)] = c;
const conMap = {};
for (const c of conceptes) conMap[String(c.codi)] = c;

// --- DETERMINISTA: quines partides del cataleg son COMPOSTES (encofrat + formigo dins) ---
const teEncofrat = (r) => /encofr/i.test(norm(r.resum));
const teFormigo = (r) => /vertido|hormig/i.test(norm(r.resum));
const compostes = new Set();
for (const c of cataleg) {
  let e = false, f = false;
  for (const k of kidsOf(c.descomposicio)) {
    const s = conMap[k] || catMap[k];
    if (!s) continue;
    if (teEncofrat(s)) e = true;
    if (teFormigo(s)) f = true;
  }
  if (e && f) compostes.add(String(c.codi));
}

// --- DETERMINISTA: on mesura el client l'encofrat per separat? ---
// Aixo decideix si convenen les partides de FORMACION (compostes) o encofrat i vertido solts.
const esEncofratClient = (t) => /encofr|desencofr/.test(norm(t));
// FIX (2026-09-07, Change 18): senyal determinista addicional -- la propia linia esmenta
// ENCOFRAT i FORMIGO/HORMIGO alhora (provat contra execucio real #127, obra 823.26: la IA,
// deixada nomes amb la SUGGERIMENT DEL DICCIONARI en prosa, va interpretar "amb una quantia
// de 14 m2/m3" com si fos nomes informatiu i va triar el codi simple igualment -- exactament
// el patro que ja s'havia confirmat erroni). Es passa com a booleà explícit
// ('narra_encofrat_i_formigo') en lloc de nomes en prosa, perque la IA no l'hagi de deduir.
const teAmbdosEnUnaLinia = (t) => { const n = norm(t); return /encofr|desencofr/.test(n) && /formig|hormig/.test(n); };
const encofratsClient = [];
const capsAmbEncofrat = new Set();
for (const p of partides) {
  if (p.is_nota) continue;
  if (!esEncofratClient(p.resum)) continue;
  capsAmbEncofrat.add(String(p.cap_desc || ''));
  if (encofratsClient.length < 40) encofratsClient.push({ capitol: p.cap_desc || '', ud: p.ud_norm, resum: String(p.resum).slice(0, 120) });
}

// --- CAPA 1: diccionari apres -- ARA ES UNA PISTA PER A LA IA, NO UNA DRECERA ---
const dicc = $input.all().map((i) => i.json).filter((r) => r && r.clau);
const diccMap = {};
for (const r of dicc) diccMap[r.clau] = String(r.codi_base ?? '');

// FIX (2026-09-07, Change 17): abans, si una clau ja tenia entrada al diccionari, es saltava
// la IA per complet -- amb una excepcio afegida al Change 16 nomes per al cas concret de
// mismatch composta/separat. Aquest disseny obligava a anar afegint una comprovacio nova cada
// vegada que es trobava una altra manera que un match vell podia quedar desfasat (el diccionari
// no te memoria del context que el va fer correcte en aquella obra concreta). En comptes de
// seguir ampliant la llista de comprovacions especifiques, la IA ara es crida SEMPRE (l'unica
// excepcio es EXCLOSA, una decisio explicita ja presa per una persona que mai s'ha de tornar a
// preguntar). El diccionari es passa dins el propi missatge com a 'suggerit_diccionari': la IA
// el fa servir com a punt de partida fort (normalment estalvia haver de raonar-ho de zero) pero
// sempre el contrasta amb el que demana AQUESTA linia -- vegeu la nova seccio a REGLES, mes
// avall. 'Consolida' es qui compara la resposta de la IA amb aquest mateix diccionari per saber
// si la confirma o la corregeix, i aquesta comparacio es la base de l'autoaprovacio al full de
// revisio (menys feina manual: nomes cal repassar les files on la IA ha discrepat del que ja se
// sabia, no totes).
const pendents = new Map();
for (const p of partides) {
  if (p.is_nota) continue;
  if (diccMap[p.clau] === 'EXCLOSA') continue;
  if (!pendents.has(p.clau)) {
    pendents.set(p.clau, {
      clau: p.clau, ud: p.ud_norm, resum: p.resum, text: String(p.text || '').slice(0, 250),
      capitol: p.cap_desc || '', encofrat: esEncofratClient(p.resum),
      ambdos: teAmbdosEnUnaLinia(p.resum),
      dicc_suggerit: diccMap[p.clau] || null
    });
  }
}

// --- CAPA 1b (determinista): FILTRE D'ABAST ---
// Oficis que l'empresa NO fa mai. Aixi no es paga per preguntar-ho a la IA.
// Cada paraula esta validada contra les dues bases: cap apareix en cap partida
// ni concepte del cataleg. Si algun dia se n'hi afegeix una, cal comprovar-ho igual,
// o es filtraria feina que SI que es fa.
// Les partides filtrades NO desapareixen: surten al full marcades FORA_ABAST amb
// la paraula que les ha descartat, per poder-ho veure si el filtre s'equivoca.
// 2026-09-01: trets 'installacio'/'instal.lacio'/'instalacio'/'instalacion' -- massa
// generics, disparaven fals positiu amb 'Suministro e INSTALACION de losa maciza...'
// (element estructural real, 'instalacion' vol dir nomes 'col·locacio' aqui). Les
// instal·lacions d'edifici de veritat ja queden cobertes per paraules mes especifiques
// (fontaneria, electric*, climatitzacio, ventilacio, calefaccio, telecomunicacions...).
// Tret tambe 'sanitari' (nomes queda 'sanitaris' en plural): 'sanitari' en singular
// disparava amb 'forjado SANITARIO' (terme estructural estandard, forjat sobre camera
// ventilada), que no te relacio amb aparells de bany.
const FORA_ABAST = ["fontaneria", "lampisteria", "canonada", "canonades", "aixeta", "dutxa", "sanitaris", "inodor", "lavabo", "banyera", "mampara", "desguas", "baixant", "claveguera", "valvula", "canalitzacio", "canalizacion", "evacuacio", "residuals", "residuales", "electric", "electrica", "electricitat", "cablejat", "conductor", "endoll", "interruptor", "lluminaria", "luminaria", "enllumenat", "tensio nominal", "coure", "telecomunicacions", "soterrada", "pintura", "pintar", "esmalt", "vernis", "fusteria", "finestra", "finestres", "persiana", "batent", "alumini", "vidre", "vidres", "vidrieria", "mirall", "climatitzacio", "climatizacion", "aire condicionat", "ventilacio", "conducte", "calefaccio", "radiador", "caldera", "gres", "porcellanic", "porcelanico", "parquet", "rajola", "enrajolat", "sanejament", "socol", "lamines", "reixa", "fals sostre", "cartro guix", "pladur", "guix", "enguixat", "arrebossat", "impermeabilitzacio", "muntacarregues", "jardineria", "plantacio", "mobiliari", "senyalitzacio", "extintor", "ruixador", "detector", "contraincendis"];
const foraAbast = {};
for (const [clau, e] of pendents) {
  // NOMES el resum: el text llarg d'una partida de formigo menciona altres oficis
  // de passada i filtrava feina real (provat amb l'execucio 63: 5 falsos de 11).
  const t = norm(String(e.resum || ''));
  const hit = FORA_ABAST.find((w) => new RegExp('\\b' + w).test(t));
  if (hit) foraAbast[clau] = hit;
}
for (const clau of Object.keys(foraAbast)) pendents.delete(clau);

// --- CAPA 2: filtre d'unitat TOU ---
// Primer nomes candidates de la unitat correcta. Si per a aquella unitat el cataleg no en te
// cap, NO es descarta la partida: es prova amb el cataleg sencer i es marca la fila, perque
// hi ha clients que mesuren l'encofrat en M3 o donen unitats no normalitzades.
const perUnitat = {};
for (const c of cataleg) {
  const u = normUd(c.ud);
  if (!perUnitat[u]) perUnitat[u] = [];
  perUnitat[u].push(c);
}
const aResoldre = {};
const sospitoses = [];
for (const e of pendents.values()) {
  const teCand = (perUnitat[e.ud] || []).length > 0;
  const grup = teCand ? e.ud : '*';
  if (!teCand) sospitoses.push(e.clau);
  if (!aResoldre[grup]) aResoldre[grup] = [];
  aResoldre[grup].push(e);
}

const REGLES = [
  "Ets el tecnic de pressupostos d'Encofrados Castell (encofrats i formigo).",
  "Reps partides d'un amidament d'obra d'un client (en catala o castella) i has d'assignar a cadascuna la partida MES ADEQUADA del cataleg de l'empresa.",
  '',
  'CONTEXT IMPORTANT:',
  "- El client sol descriure ELEMENTS constructius (encepado, losa, muro); el cataleg descriu OPERACIONS que fa l'empresa (vertido, encofrado). Has de traduir d'un llenguatge a l'altre.",
  "- A cada missatge rebras una llista de CODIS VALIDS. Tria NOMES d'aquesta llista.",
  '',
  'COMPOSTA O SEPARAT (decisio clau):',
  "- Les candidates marcades amb [COMPOSTA] son partides de FORMACION que ja porten l'encofrat I el formigo dins.",
  "- Al missatge veuras si el client mesura l'encofrat PER SEPARAT i en quins capitols seus ho fa.",
  "- Si en aquell element el client ja dona una linia d'encofrat a part, NO triis una [COMPOSTA]: triaries dues vegades el mateix encofrat. Tria la partida d'operacio solta (nomes el formigo, o nomes l'encofrat, segons la linia que estiguis emparellant).",
  "- Si el client nomes dona l'element sencer i no mesura cap encofrat per a aquell element, tria la [COMPOSTA].",
  "- Una linia d'encofrat del client sempre ha d'anar a una partida d'encofrat, mai a una composta.",
  "- REGLA OBLIGATORIA quan 'narra_encofrat_i_formigo' es true: aquesta linia descriu TOT l'element (encofrat I formigo) EN UNA SOLA FRASE -- tria SEMPRE una candidata [COMPOSTA] de la familia geometrica correcta, encara que la linia esmenti una quantia d'encofrat en m2/m3 o m2/m2 (\"amb una quantia de 14 m2/m3\", \"amb una quantia d'encofrat 8 m2/m3\"): aquesta quantia es NOMES INFORMATIVA (indica quant encofrat porta cada m3/m2 de l'element), NO vol dir que el client mesuri l'encofrat en una linia diferent. No et desviïs d'aquesta regla per cap altre raonament -- nomes fes marxa enrere si NO existeix cap candidata [COMPOSTA] remotament versemblant per a aquell element (llavors tria la millor operacio solta i explica per que a 'motiu').",
  '',
  "SUGGERIMENT DEL DICCIONARI (camp 'suggerit_diccionari' de cada partida):",
  "- Quan no es null, es el codi que es va triar per a aquesta MATEIXA clau tecnica (element, formigo, unitat...) en una obra anterior.",
  '- Es un indici fort -- normalment es correcte i estalvia haver-hi de pensar de zero -- pero NOMES si tambe encaixa amb el que demana AQUESTA linia concreta. Fixa-t\'hi sobretot en la decisio de COMPOSTA/SEPARAT d\'aqui dalt: un mateix element es pot mesurar de maneres diferents segons l\'obra (en una el client separa l\'encofrat, en una altra no), i el suggeriment nomes es fiable per al patro amb que es va aprendre.',
  "- Si el suggeriment no encaixa amb el que diu aquesta linia (unitat, si dona l'encofrat per separat, parametres geometrics...), ignora'l i tria la candidata que si hi encaixi.",
  "- Si es null, es la primera vegada que es veu aquesta clau: decideix nomes amb el text de la linia.",
  '',
  'CRITERIS DE CONFIANCA:',
  '- ALTA: element, parametres geometrics (gruix, alcada, cares, acabat) i tipus de treball coincideixen clarament.',
  "- MITJANA: element correcte pero algun parametre difereix o el client no l'especifica.",
  '- BAIXA: nomes coincideix la familia de treball; cal que ho revisi el tecnic.',
  "- SENSE_MATCH: cap candidata hi correspon (p.ex. instalacions, fusteria, pintura, o feines fora de l'ambit de l'empresa). Llavors codi_base ha de ser cadena buida.",
  '',
  "Quan hi hagi diverses variants del mateix element (gruixos, cantells, alcades), tria la que millor s'ajusti a les dades geometriques del text del client.",
  'No inventis MAI codis: codi_base ha de ser exactament un dels CODIS VALIDS del missatge, o cadena buida.',
  "motiu: MAXIM 10 PARAULES. Deixa'l BUIT quan confianca sigui ALTA.",
  'Retorna exactament un match per a CADA id rebut.'
].join('\n');

const SCHEMA = {
  type: 'object',
  properties: {
    matches: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          codi_base: { type: 'string' },
          confianca: { type: 'string', enum: ['ALTA', 'MITJANA', 'BAIXA', 'SENSE_MATCH'] },
          motiu: { type: 'string' }
        },
        required: ['id', 'codi_base', 'confianca', 'motiu'],
        additionalProperties: false
      }
    }
  },
  required: ['matches'],
  additionalProperties: false
};

// SENSE prompt caching: n8n fa les crides en PARAL.LEL i cap no llegeix mai la memoria cau
// (mesurat dues vegades: cache_read = 0 sempre). Per aixo cada lot porta nomes les
// candidates de la SEVA unitat.
const LOT = 40;
const out = [];
let idSeq = 0;

const blocEncofrats = capsAmbEncofrat.size
  ? "\n\nEL CLIENT MESURA ENCOFRAT PER SEPARAT en aquests capitols seus: " + JSON.stringify([...capsAmbEncofrat]) +
    "\nLinies d'encofrat que dona el client:\n" + JSON.stringify(encofratsClient)
  : "\n\nEl client NO dona cap linia d'encofrat per separat: per als elements de formigo tria les partides [COMPOSTA] quan existeixin.";

for (const grup of Object.keys(aResoldre).sort()) {
  const cands = grup === '*' ? cataleg : perUnitat[grup];
  const codisValids = cands.map((c) => String(c.codi));
  const candStr = cands
    .map((c) => String(c.codi) + ' | ' + normUd(c.ud) + ' | ' + String(c.resum) + (compostes.has(String(c.codi)) ? ' [COMPOSTA]' : ''))
    .join('\n');
  const items = aResoldre[grup];
  for (let i = 0; i < items.length; i += LOT) {
    const lot = items.slice(i, i + LOT);
    const mapa = lot.map((e) => { idSeq++; return { id: idSeq, clau: e.clau }; });
    out.push({ json: {
      tipus: 'lot',
      unitat: grup,
      unitat_lliure: grup === '*',
      n_candidates: codisValids.length,
      map: mapa,
      codis_valids: codisValids,
      body: {
        model: 'claude-sonnet-5',
        // 2026-09-01: pujat de 8000 a 16000. Provat amb dades reals: un lot gran (grup
        // '*', catalog sencer com a candidates) va esgotar els 8000 tokens NOMES pensant
        // (thinking_tokens=8000, stop_reason='max_tokens') i es va quedar sense escriure
        // mai la resposta -- LES SEVES ~40 PARTIDES VAN QUEDAR SENSE CAP RESPOSTA. Amb mes
        // marge nomes es gasta mes si de veritat cal (el model no allarga el pensament
        // sense motiu), pero evita perdre lots sencers.
        max_tokens: 16000,
        // NO desactivis el raonament aqui. Provat el 2026-07-30 amb el mateix Excel:
        // sense raonament canviaven 18 de 126 codis i els canvis eren PITJORS.
        system: REGLES + '\n\nCODIS VALIDS de la base ' + baseNom +
          (grup === '*' ? ' (cataleg sencer: les partides d\'aquest lot venen amb una unitat que la base no fa servir, fixa\'t en el text)' : ' (unitat ' + grup + ')') +
          '. Nomes pots triar d\'aquesta llista - format: codi | unitat | resum\n' + candStr,
        messages: [{ role: 'user', content:
          'PARTIDES DEL CLIENT. Respon un match per a cada id:\n' +
          JSON.stringify(mapa.map((m, ix) => ({ id: m.id, capitol_client: lot[ix].capitol, ud: lot[ix].ud, es_linia_encofrat: lot[ix].encofrat, narra_encofrat_i_formigo: lot[ix].ambdos, resum: lot[ix].resum, text: lot[ix].text, suggerit_diccionari: lot[ix].dicc_suggerit }))) +
          blocEncofrats }],
        output_config: { format: { type: 'json_schema', schema: SCHEMA } }
      }
    } });
  }
}

if (out.length) out[0].json.fora_abast = foraAbast;
if (!out.length) {
  return [{ json: {
    tipus: 'cap_lot',
    fora_abast: foraAbast,
    total_partides: partides.length,
    exclosa_diccionari: partides.filter((p) => !p.is_nota && diccMap[p.clau] === 'EXCLOSA').length,
    notes: partides.filter((p) => p.is_nota).length,
    unitat_sospitosa: sospitoses.length
  } }];
}
return out;
