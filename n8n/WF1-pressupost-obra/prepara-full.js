// BLOC 5 - Dona forma a les files per al full de revisio.
// L'ordre de les claus es l'ordre de les columnes al Google Sheet.
const files = $('Aplica enriquiment').all().map((i) => i.json);
const num = (v) => Math.round((Number(v) || 0) * 100) / 100;

// FIX (2026-09-07, Change 17): fins ara el full demanava repassar CADA fila, una a una --
// amb el diccionari convertit en una simple pista per a la IA (vegeu "Resol amb regles" i
// "Consolida"), ara es pot saber quines files son realment noves o dubtoses i quines ja
// estaven confirmades i la IA hi torna a coincidir. Nomes aquestes ultimes necessiten que el
// tecnic hi posi els ulls; la resta es pot donar per bona d'entrada (encara editable si cal).
const necessitaRevisio = (r) => {
  if (r.confianca === 'NOTA_CLIENT' || r.confianca === 'ABSORBIDA' || r.confianca === 'EXCLOSA' || r.confianca === 'FORA_ABAST') return false;
  if (r.confianca !== 'ALTA') return true;
  if (r.coincideix_diccionari !== 'SI') return true; // clau nova, o la IA ha canviat el que ja hi havia
  if (r.discrepancia) return true;
  if (r.flags) return true;
  return false;
};

return files
  .slice()
  .sort((a, b) => (Number(a.capitol_ordre) - Number(b.capitol_ordre)) || (Number(a.ordre) - Number(b.ordre)))
  .map((r) => {
    const revisio = necessitaRevisio(r);
    return { json: {
      ordre: r.ordre,
      confianca: r.confianca,
      revisio_necessaria: revisio ? 'x' : '',
      ud: r.ud,
      quantitat: num(r.quantitat),
      resum_excel: r.resum_excel,
      codi_base: r.codi_base,
      resum_base: r.resum_base,
      // Pre-marcada com a aprovada quan no cal revisio: el tecnic nomes ha d'actuar sobre
      // les files amb 'revisio_necessaria' = x. Segueix sent editable com sempre.
      OK: revisio ? '' : 'x',
      CODI_CORRECTE: '',
      EXCLOSA: '',
      discrepancia: r.discrepancia || '',
      preu: num(r.preu),
      import: num(r.import),
      motiu: r.motiu || '',
      capitol_desti: r.capitol_desti,
      origen: r.origen,
      coincideix_diccionari: r.coincideix_diccionari || '',
      flags: r.flags || '',
      capitol_client: r.capitol_client || '',
      codi_excel: r.codi_excel || '',
      es_composta: r.es_composta || '',
      capitol_origen: r.capitol_origen || ''
    } };
  });
