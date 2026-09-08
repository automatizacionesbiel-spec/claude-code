// BLOC 2a - Per a cada fitxer pendent, prepara UNA peticio a la IA. La IA NOMES decideix
// configuracio (quina columna es quina a l'Excel; com son els codis i els totals al PDF):
// mai llegeix ni proposa cap xifra. La lectura real la fa sempre el mateix codi determinista,
// amb aquesta configuracio aplicada.
// 2026-09-01: aquest node ja no penja directament d''Intenta parseig determinista' (que
// ara viu dins del bucle 'Fitxers loop' i nomes dona UN fitxer per crida) sino de la
// sortida 'done' del bucle.
// FIX (2026-09-02): l'anterior versio llegia $('Intenta parseig determinista').all() pel
// NOM del node -- pero aquest node viu DINS del bucle, i a n8n una referencia pel nom a
// un node de dins d'un bucle nomes retorna la seva ULTIMA iteracio, no l'acumulat de
// totes. Amb 2 fitxers aixo feia que nomes el segon (l'ultim) arribes aqui, i el primer
// es perdia silenciosament -- per aixo nomes es demanava 1 configuracio en lloc de 2.
// La sortida 'done' del bucle SI acumula tots els fitxers correctament: com que aquest
// node hi penja directament, el seu propi $input.all() ja te tots els resultats.
const items = $input.all().map((i) => i.json).filter((x) => x._pending);
if (!items.length) return [{ json: { tipus: 'cap_lot' } }];

// TALLAFOC DE COST (2026-08-13). Segona linia de defensa, independent de l'agrupacio:
// encara que algun dia es torni a colar un error que multipliqui els grups, aqui es para.
// Mai s'han de demanar mes de 3 configuracions en una sola execucio.
const LIMIT_FITXERS_PENDENTS = 3;
if (items.length > LIMIT_FITXERS_PENDENTS) {
  throw new Error(
    'ATURAT PER SEGURETAT: hi ha ' + items.length + ' fitxers pendents de configurar en una ' +
    'sola pujada, quan com a molt n\'hi hauria d\'haver ' + LIMIT_FITXERS_PENDENTS + '. ' +
    'Aixo vol dir que les files no s\'han agrupat be per fitxer. NO s\'ha cridat la IA. ' +
    'Revisa el node "Intenta parseig determinista" abans de tornar-ho a llancar.'
  );
}

const SCHEMA_EXCEL = {
  type: 'object',
  properties: {
    es_amidaments: { type: 'boolean' },
    headerRow: { type: 'integer' },
    codigo: { type: 'integer' },
    ud: { type: 'integer' },
    resumen: { type: 'integer' },
    canpres: { type: 'integer' },
    confianca: { type: 'string', enum: ['ALTA', 'MITJANA', 'BAIXA'] },
    motiu: { type: 'string' }
  },
  required: ['es_amidaments', 'headerRow', 'codigo', 'ud', 'resumen', 'canpres', 'confianca', 'motiu'],
  additionalProperties: false
};
const REGLES_EXCEL = [
  "Ets un tecnic que ha de configurar un lector de fulls de calcul d'amidaments d'obra.",
  "Reps una mostra de files (matriu de matrius, index de columna des de 0) d'un full que el lector determinista NO ha pogut entendre perque no reconeix els noms de columna.",
  '',
  'Busca la fila que fa de CAPCALERA de la taula de partides i identifica l\'index (des de 0, comptant des de dalt de la mostra) de:',
  '- headerRow: la fila de capcalera en si',
  '- codigo: la columna que distingeix les files de TITOL DE SECCIO de les files de PARTIDA REAL (vegeu IMPORTANT mes avall -- es el camp mes decisiu de tots)',
  '- ud: la columna amb la unitat de mesura (m2, m3, kg, ut...). NOMES les files amb aquesta columna plena son partides reals',
  '- resumen: la columna amb la descripcio/nom de l\'element',
  '- canpres: la columna amb la QUANTITAT o mesura total de la partida (un numero)',
  '',
  'IMPORTANT sobre "codigo" -- es el camp que MES SOVINT s\'equivoca, perque decideix si una',
  'fila es un titol de seccio o una partida real amb quantitat propia:',
  '- NO TRIIS MAI una columna de numeracio simplement CORRELATIVA (1, 2, 3, 4, 5... sense',
  '  saltar mai, present per igual a TOTES les files, sovint amb capcalera "ORDEN", "Nº",',
  '  "Item", "Linea"...) nomes perque sembli un "identificador de cada fila" -- aquesta mena',
  '  de columna es identica en forma a totes les files (titol o partida) i per tant MAI pot',
  '  servir per distingir-les, encara que tecnicament sigui un "identificador".',
  '- LA COLUMNA CORRECTA es aquella on les files de TITOL DE SECCIO porten una etiqueta de',
  '  nivell ("Capitol", "Capitulo", "Subcapitol", "Obra elemental", "Activitat", "Nivel 1",',
  '  "Nivel 2"...) i les files de PARTIDA REAL porten en canvi un codi/referencia propi de',
  '  l\'element (lletres+numeros com "G21B3002", o un numero de cataleg intern com "0.3").',
  '  Si veus columnes on el mateix index alterna entre aquestes dues coses -- etiqueta de',
  '  nivell en unes files, codi real en altres -- aquesta ES la columna "codigo", encara que',
  '  n\'hi hagi una altra de purament correlativa que sembli mes "neta".',
  '- Si autenticament no hi ha cap columna aixi (totes les files son partides soltes sense',
  '  jerarquia de titols visible), tria la que faci de referencia/codi de l\'element -- pot',
  '  quedar buida en files de capitol si n\'hi ha, o fins i tot ser sempre buida.',
  '',
  'codigo, ud, resumen i canpres han de ser SEMPRE un index real de columna (0 o mes) present a',
  'la mostra: mai tornis -1 ni cap altre valor negatiu o inventat en aquests quatre camps. Si',
  'autenticament no trobes cap columna que faci de codi/identificador, respon es_amidaments=false',
  'en lloc d\'inventar-ne un index.',
  '',
  'Si no hi ha una taula reconeixible d\'amidaments a la mostra, respon es_amidaments=false.',
  'confianca ALTA nomes si les 4 columnes son clares i inequivoques. Si dubtes, BAIXA.',
  'motiu: una frase curta explicant que has trobat o per que no ho tens clar.'
].join('\n');

const SCHEMA_PDF = {
  type: 'object',
  properties: {
    es_amidaments: { type: 'boolean' },
    header_example: { type: 'string' },
    total_example: { type: 'string' },
    confianca: { type: 'string', enum: ['ALTA', 'MITJANA', 'BAIXA'] },
    motiu: { type: 'string' }
  },
  required: ['es_amidaments', 'header_example', 'total_example', 'confianca', 'motiu'],
  additionalProperties: false
};
const REGLES_PDF = [
  "Ets un tecnic que ha de configurar un lector de PDFs d'amidaments d'obra.",
  "Reps una mostra de text pla extret d'un PDF que el lector determinista NO ha pogut entendre.",
  '',
  "Busca UNA linia que sigui l'inici d'una partida (codi + unitat + descripcio de l'element) i copia-la EXACTAMENT, caracter per caracter, tal com surt al text -- no la reescriguis ni la resumeixis.",
  'Busca tambe UNA linia que sigui NOMES la quantitat total d\'una partida (un numero sol, res mes) i copia-la EXACTAMENT igual.',
  '',
  'Si el text no sembla un informe d\'amidaments o pressupost d\'obra, respon es_amidaments=false amb els exemples buits.',
  'Els exemples HAN de ser copia literal d\'una linia del text rebut: si no en trobes cap de clara, deixa\'ls buits i confianca BAIXA.',
  'motiu: una frase curta.'
].join('\n');

return items.map((it) => {
  const esExcel = it._tipus === 'EXCEL';
  const sampleText = esExcel
    ? JSON.stringify((it._mostra || []).map((r) => (Array.isArray(r) ? r : (r && r.row) || [])))
    : String(it._mostra || '').slice(0, 6000);
  return {
    json: {
      tipus: 'lot',
      _grup: it._grup,
      _tipus: it._tipus,
      body: {
        model: 'claude-sonnet-5',
        max_tokens: 1500,
        thinking: { type: 'disabled' },
        system: esExcel ? REGLES_EXCEL : REGLES_PDF,
        messages: [{ role: 'user', content: (esExcel ? 'MOSTRA (matriu de files):\n' : 'MOSTRA DE TEXT:\n') + sampleText }],
        output_config: { format: { type: 'json_schema', schema: esExcel ? SCHEMA_EXCEL : SCHEMA_PDF } }
      }
    }
  };
});

