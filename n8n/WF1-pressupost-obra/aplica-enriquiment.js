// BLOC 4c - Aplica els avisos i les etiquetes curtes. No s'afegeix ni es reescriu res:
// nomes s'omple la columna 'discrepancia' del full de revisio (com abans) i, ADEMES,
// s'afegeix 'etiqueta_curta' per fila quan la IA ha decidit que calia distingir-la
// (2026-09-02) -- Genera BC3 fara servir aixo per al comentari de cada linia de mesura.
// FIX (2026-09-04): la IA tambe extreu ara els valors tecnics de text lliure (acer_kg_ia,
// mallat_ia, gruix_cm_ia) que abans nomes s'intentaven detectar amb regex a "Detecta
// acer"/"Detecta mallat"/"Detecta espessor" -- la IA enten molt millor el llenguatge
// natural del client (ordre de les paraules, catala/castella barrejat, frases llargues amb
// la dosificacio de ciment pel mig...) que cap regex escrita a ma. Els nodes "Detecta..."
// fan servir aquest valor com a font PRINCIPAL i nomes recorren al seu propi regex com a
// reserva (si la IA no ha corregut en aquesta execucio, o no ha trobat res per aquella fila).
const files = $('Assigna capitols').all().map((i) => i.json);

const desc = {};
const etiquetes = {};
const acerIa = {};
const mallatIa = {};
const gruixIa = {};
const alcadaIa = {};
const familiaIa = {};
const FAMILIES_VALIDES = new Set(['PILAR', 'MURO', 'FORJADO', 'VIGA', 'CIMENTACION']);
let respostes = [];
try { respostes = $('Enriquiment IA').all().map((i) => i.json); } catch (e) {}
for (const resp of respostes) {
  const blk = ((resp || {}).content || []).find((b) => b.type === 'text');
  if (!blk) continue;
  let p;
  try { p = JSON.parse(blk.text); } catch (e) { continue; }
  for (const a of (p.avisos || [])) {
    if (!a.codi) continue;
    desc[String(a.codi)] = String(a.discrepancia || '').trim();
  }
  for (const e of (p.etiquetes || [])) {
    if (e.ordre === undefined || e.ordre === null) continue;
    etiquetes[Number(e.ordre)] = String(e.etiqueta || '').trim();
  }
  for (const v of (p.acer || [])) {
    if (v.ordre === undefined || v.ordre === null) continue;
    const kg = Number(v.kg);
    if (kg > 0) acerIa[Number(v.ordre)] = kg;
  }
  for (const v of (p.mallat || [])) {
    if (v.ordre === undefined || v.ordre === null) continue;
    const a = Number(v.a), b = Number(v.b), d = Number(v.d);
    if (a > 0 && b > 0 && d > 0) mallatIa[Number(v.ordre)] = { a, b, d };
  }
  for (const v of (p.gruix || [])) {
    if (v.ordre === undefined || v.ordre === null) continue;
    const cm = Number(v.cm);
    if (cm > 0) gruixIa[Number(v.ordre)] = cm;
  }
  for (const v of (p.alcada || [])) {
    if (v.ordre === undefined || v.ordre === null) continue;
    const m = Number(v.m);
    if (m > 3) alcadaIa[Number(v.ordre)] = m;
  }
  // FIX (2026-09-07): familia estructural de les partides d'acer independents. Es valida
  // contra la llista tancada (les mateixes etiquetes que fa servir "Detecta acer"): si la
  // IA retorna qualsevol altra cosa, o "OTROS", es descarta i el node cau al seu metode de
  // sempre. Aixi la IA nomes pot AFEGIR informacio, mai empitjorar el que ja funcionava.
  for (const v of (p.families || [])) {
    if (v.ordre === undefined || v.ordre === null) continue;
    const f = String(v.familia || '').trim().toUpperCase();
    if (FAMILIES_VALIDES.has(f)) familiaIa[Number(v.ordre)] = f;
  }
}

return files.map((r0) => {
  const r = { ...r0 };
  r.discrepancia = (r.codi_base && r.confianca !== 'ABSORBIDA') ? (desc[String(r.codi_base)] || '') : '';
  r.etiqueta_curta = etiquetes[Number(r.ordre)] || '';
  if (acerIa[Number(r.ordre)] !== undefined) r.acer_kg_ia = acerIa[Number(r.ordre)];
  if (mallatIa[Number(r.ordre)] !== undefined) r.mallat_ia = mallatIa[Number(r.ordre)];
  if (gruixIa[Number(r.ordre)] !== undefined) r.gruix_cm_ia = gruixIa[Number(r.ordre)];
  if (alcadaIa[Number(r.ordre)] !== undefined) r.alcada_ia = alcadaIa[Number(r.ordre)];
  if (familiaIa[Number(r.ordre)] !== undefined) r.familia_ia = familiaIa[Number(r.ordre)];
  return { json: r };
});

