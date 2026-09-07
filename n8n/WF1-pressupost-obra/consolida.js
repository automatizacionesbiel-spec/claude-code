// BLOC 3 - Consolidacio: diccionari + resposta de la IA + validacions deterministes.
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const UDMAP = { M: 'ML', ML: 'ML', U: 'UD', UT: 'UD', UD: 'UD', PA: 'PA' };
const normUd = (u) => { const x = String(u ?? '').trim().toUpperCase().replace(/²/g, '2').replace(/³/g, '3').replace(/\.$/, ''); return UDMAP[x] || x; };
const BS = String.fromCharCode(92);
const kidsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push(c); } return o; };

const partides = $('Parseja amidaments').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const catMap = {};
for (const c of cataleg) catMap[String(c.codi)] = c;
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const conMap = {};
for (const c of conceptes) conMap[String(c.codi)] = c;

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
const esEncofratClient = (t) => /encofr|desencofr/.test(norm(t));
// Fa servir nomes per a l'ajust d'ABSORBIDA mes avall -- vegeu el comentari alli.
const teAmbdosEnUnaLinia = (t) => { const n = norm(t); return /encofr|desencofr/.test(n) && /formig|hormig/.test(n); };

// idMap i codis valids per clau, reconstruits a partir dels lots preparats
const idMap = {};
const validsPerClau = {};
const sospitosaPerClau = {};
for (const l of $('Resol amb regles').all().map((i) => i.json)) {
  if (l.tipus !== 'lot') continue;
  const valids = new Set((l.codis_valids || []).map(String));
  for (const m of (l.map || [])) {
    idMap[m.id] = m.clau;
    validsPerClau[m.clau] = valids;
    sospitosaPerClau[m.clau] = !!l.unitat_lliure;
  }
}

// paraules d'abast calculades a 'Resol amb regles' (val per a les dues branques de l'IF)
const metaFA = $('Resol amb regles').all().map((i) => i.json).find((x) => x && x.fora_abast) || {};
const foraAbast = metaFA.fora_abast || {};

const dicc = $('Llegeix diccionari').all().map((i) => i.json).filter((r) => r && r.clau);
const diccMap = {};
for (const r of dicc) diccMap[r.clau] = String(r.codi_base ?? '');

const ia = {};
let respostes = [];
try { respostes = $('Matching Claude').all().map((i) => i.json); } catch (e) {}
for (const resp of respostes) {
  const blk = ((resp || {}).content || []).find((b) => b.type === 'text');
  if (!blk) continue;
  let parsed;
  try { parsed = JSON.parse(blk.text); } catch (e) { continue; }
  for (const m of (parsed.matches || [])) {
    const clau = idMap[m.id];
    if (clau) ia[clau] = m;
  }
}

// FIX (2026-09-07, Change 17): el diccionari ha deixat de ser una drecera que salta la IA --
// "Resol amb regles" ara la crida sempre (excepte EXCLOSA) i li passa el match apres com a
// pista. Aqui es compara la resposta de la IA amb aquell mateix diccionari nomes per generar un
// rastre auditable ('origen', 'coincideix_diccionari'): si la IA CONFIRMA el que ja se sabia, si
// ho CANVIA, o si es la primera vegada que es veu aquesta clau (NOU). Aquest senyal es la base
// de l'autoaprovacio del full de revisio: nomes cal que el tecnic miri les files on la IA ha
// discrepat del que ja hi havia, no totes (vegeu 'Prepara full').
const out = [];
for (const p of partides.slice().sort((a, b) => a.ordre - b.ordre)) {
  let codi_base = '';
  let confianca = '';
  let motiu = '';
  let origen = '';
  let coincideix_diccionari = '';

  if (p.is_nota) {
    confianca = 'NOTA_CLIENT'; origen = 'REGLA';
    motiu = 'Text informatiu del client, no es una partida';
  } else if (diccMap[p.clau] === 'EXCLOSA') {
    confianca = 'EXCLOSA'; origen = 'EXCLOSA';
    motiu = "Fora d'abast (exclosa manualment en obres anteriors)";
  } else if (foraAbast[p.clau]) {
    confianca = 'FORA_ABAST'; origen = 'REGLA';
    motiu = "Ofici fora d'abast (paraula: " + foraAbast[p.clau] + "). No s'ha consultat la IA.";
  } else {
    const diccCodi = diccMap[p.clau]; // undefined si es la primera vegada que es veu la clau
    if (ia[p.clau]) {
      const m = ia[p.clau];
      codi_base = String(m.codi_base || '').trim();
      confianca = m.confianca || 'SENSE_MATCH';
      motiu = m.motiu || '';
      if (diccCodi === undefined) {
        origen = 'IA_NOU';
      } else if (diccCodi === codi_base) {
        origen = 'IA_CONFIRMAT';
        coincideix_diccionari = 'SI';
      } else {
        origen = 'IA_CANVIAT';
        coincideix_diccionari = 'NO';
        motiu = (motiu ? motiu + ' | ' : '') + 'el diccionari suggeria ' + diccCodi + ', la IA ha triat un codi diferent per a aquesta linia';
      }
    } else if (diccCodi !== undefined) {
      // La IA no ha arribat a respondre per a aquesta clau (lot fallit, etc.): es manté el
      // valor del diccionari perque sempre calgui un codi_base, pero mai amb la mateixa
      // confianca que una resposta fresca -- es marca per a revisio manual.
      codi_base = diccCodi; confianca = 'BAIXA'; origen = 'DICCIONARI_SOSPITOS';
      motiu = 'Sense resposta de la IA: es manté el match après (' + diccCodi + '), cal revisar-ho';
    } else {
      confianca = 'SENSE_MATCH'; origen = 'REGLA';
      motiu = 'Sense resposta del matching';
    }
  }

  // A la base hi ha codis que acaben en punt (203., 208., 104.) al costat del codi sense
  // punt, que es una partida DIFERENT. La IA els escurca. Si el codi literal no es valid
  // pero si ho es amb el punt final, es recupera: nomes s'accepta si la variant existeix.
  const esOrigenIA = origen === 'IA_NOU' || origen === 'IA_CONFIRMAT' || origen === 'IA_CANVIAT';
  if (codi_base && esOrigenIA) {
    const valids = validsPerClau[p.clau];
    const okCodi = (c) => (valids ? valids.has(c) : !!catMap[c]);
    if (!okCodi(codi_base)) {
      for (const suf of ['.', '..', '...']) {
        if (okCodi(codi_base + suf)) {
          motiu = (motiu ? motiu + ' | ' : '') + 'codi recuperat amb el punt final (' + codi_base + ' -> ' + codi_base + suf + ')';
          codi_base = codi_base + suf;
          break;
        }
      }
    }
  }

  // Validacions deterministes posteriors
  if (codi_base && !catMap[codi_base]) {
    motiu = 'Codi proposat inexistent al cataleg (' + codi_base + ')';
    codi_base = ''; confianca = 'SENSE_MATCH';
  }
  if (codi_base && esOrigenIA && validsPerClau[p.clau] && !validsPerClau[p.clau].has(codi_base)) {
    motiu = 'Codi proposat fora de la llista valida (' + codi_base + ')';
    codi_base = ''; confianca = 'SENSE_MATCH';
  }
  let resum_base = '', preu = 0, capitol_base = '', es_composta = '';
  if (codi_base) {
    const c = catMap[codi_base];
    resum_base = c.resum;
    preu = Number(c.preu) || 0;
    capitol_base = String(c.capitol_desc || c.capitol || '');
    es_composta = compostes.has(codi_base) ? 'x' : '';
    if (normUd(c.ud) !== p.ud_norm) {
      if (confianca === 'ALTA' || confianca === 'MITJANA') confianca = 'BAIXA';
      motiu += (motiu ? ' | ' : '') + 'UNITAT DIFERENT (' + p.ud + ' vs ' + c.ud + ')';
    }
  }
  // FIX (2026-09-07, Change 17): aquest guard reinicialitzava 'FORA_ABAST' a 'SENSE_MATCH'
  // (no exemptat, a diferencia de NOTA_CLIENT/EXCLOSA), ja que una fila fora d'abast tampoc
  // te codi_base -- descobert provant aquest canvi, pero es un bug preexistent independent:
  // sempre havia amagat el motiu real ("ofici fora d'abast") darrere d'un generic "sense
  // match" al full de revisio.
  if (!codi_base && confianca !== 'NOTA_CLIENT' && confianca !== 'EXCLOSA' && confianca !== 'FORA_ABAST') confianca = 'SENSE_MATCH';

  const flags = (p.flags || []).slice();
  if (sospitosaPerClau[p.clau]) flags.push('UNITAT_SOSPITOSA');

  // ABSORBIDA: una linia NOMES d'encofrat del client emparellada amb una partida COMPOSTA
  // comptaria l'encofrat dues vegades (la composta ja el porta dins). No va al BC3.
  // FIX (2026-09-07): "esEncofratClient" nomes mira si la paraula "encofrat" apareix en
  // algun lloc del text -- certa fins i tot per a una linia COMPLETA que narra encofrat i
  // formigo junts (el patro exacte que ara arriba aqui gracies a la revalidacio del
  // diccionari, mes amunt: 823.26, "Llosa...amb muntatge i desmuntatge d'encofrat...
  // formigo..."). Sense aquest afegit, just triar-li correctament la partida composta feia
  // que aquesta comprovacio la marques com "ja inclosa" i la suprimis DEL TOT del BC3 --
  // pitjor que abans (que si es facturava, encara que amb el codi equivocat). Nomes s'ha de
  // suprimir quan la linia es NOMES d'encofrat (no esmenta el formigo): aquesta es la que
  // duplicaria una partida composta d'una altra linia, no una linia que ja es la composta.
  if (codi_base && es_composta && esEncofratClient(p.resum) && !teAmbdosEnUnaLinia(p.resum)) {
    confianca = 'ABSORBIDA';
    motiu = "L'encofrat ja va inclos dins la partida composta " + codi_base + ': no es pressuposta a part';
  }

  out.push({ json: {
    ordre: p.ordre,
    capitol_client: ((p.cap_codi || '') + ' ' + (p.cap_desc || '')).trim(),
    codi_excel: p.codi,
    resum_excel: p.resum,
    text: p.text || '',
    ud: p.ud,
    quantitat: p.qty,
    codi_base,
    resum_base,
    capitol_base,
    preu,
    import: Math.round((Number(p.qty) || 0) * preu * 100) / 100,
    confianca,
    origen,
    coincideix_diccionari,
    es_composta,
    motiu,
    flags: flags.join(', '),
    clau: p.clau || ''
  } });
}
return out;
