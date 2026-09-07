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

// FIX (2026-09-07, Change 18): el full tenia 23 columnes, moltes nomes d'us intern
// (origen, coincideix_diccionari, capitol_origen, codi_excel...) que no ajuden al tecnic a
// decidir res. Es redueix a les 14 que realment calen per revisar una fila i actuar-hi,
// ordenades d'esquerra a dreta seguint el flux real de treball: primer saber si cal mirar-la
// (REVISAR), despres el context per jutjar-la, i al final les 3 columnes on s'actua.
// 'flags' (UNITAT_SOSPITOSA, etc.) ja no es una columna a part: es plega dins 'motiu' quan
// n'hi ha, perque el motiu de dubte quedi tot junt en un sol lloc.
return files
  .slice()
  .sort((a, b) => (Number(a.capitol_ordre) - Number(b.capitol_ordre)) || (Number(a.ordre) - Number(b.ordre)))
  .map((r) => {
    const revisio = necessitaRevisio(r);
    const motiu = [r.motiu || '', r.flags || ''].filter(Boolean).join(' | ');
    return { json: {
      REVISAR: revisio ? 'x' : '',
      ordre: r.ordre,
      resum_excel: r.resum_excel,
      codi_base: r.codi_base,
      resum_base: r.resum_base,
      discrepancia: r.discrepancia || '',
      motiu,
      confianca: r.confianca,
      ud: r.ud,
      quantitat: num(r.quantitat),
      import: num(r.import),
      // Pre-marcada com a aprovada quan no cal revisio: el tecnic nomes ha d'actuar sobre
      // les files amb REVISAR = x. Segueix sent editable com sempre.
      OK: revisio ? '' : 'x',
      CODI_CORRECTE: '',
      EXCLOSA: ''
    } };
  });
