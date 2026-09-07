// BLOC 4b - Suplements de formigo deterministes (Fase 1). Detecta quan la partida base
// porta un formigo (grau/consistencia/exposicio) diferent del que demana el client i, si
// es pot identificar amb seguretat, calcula el codi de suplement de la base corresponent.
// Si no es pot determinar la designacio de la base amb seguretat, NO es proposa res: es
// deixa tal com fins ara (avis del tecnic via Enriquiment IA).
const BS = String.fromCharCode(92);
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };

const CONS_MAP = { b: 'B', f: 'F', l: 'L', blanda: 'B', fluida: 'F', fluido: 'F', liquida: 'L', liquido: 'L' };
const EXP_RE = /\b(x[acdfs]\d)\b/gi;

function parseDesignacio(text) {
  const t = norm(text);
  const out = { tipus: null, ha: null, cons: null, arid: null, exp: new Set(), autocompactable: false, hidrofug: false, blanco: false, sr: false, mr: false };
  // FIX (2026-09-02): el client sovint escriu "HA - 35" amb espais al voltant del
  // guionet (copiat de Word, o estil catala habitual), no "HA-35" enganxat. La regex
  // nomes permetia un guionet SENSE espais, aixi que cap designacio amb espais feia
  // match mai -- ni tan sols el patro de reserva nomes-HA. Provat contra un cas real
  // ("HA - 35 / B / 20 / xC4 + XS1 + XA3") que abans donava null i ara fa match be.
  // FIX (2026-09-07): nomes es reconeixia el prefix "HA" (formigo armat). El formigo EN
  // MASSA (HM) i el DE NETEJA (HL) fan servir el mateix format ("HM-20/B/20") pero amb un
  // altre prefix, i sovint sense la 4a part (classe d'exposicio -- nomes te sentit per a
  // l'armat, encara que a vegades el client hi posi "X0"). Amb el prefix fix a "ha" i
  // l'exposicio obligatoria, CAP designacio HM/HL feia match mai: un client que demanava
  // "HM-25/F/20" (consistencia fluida) quan la base porta "HM-20/B/20" no s'assabentava de
  // res (potExposicio sortia fals) i es quedava amb la consistencia B per defecte (obra
  // 823.26). Ara accepta H[AML] i fa l'exposicio OPCIONAL; tambe es guarda "tipus"
  // (HA/HM/HL, per no confondre mai un suplement propi de l'armat -- com la pujada de grau
  // HA-30 -- amb formigo en massa, que no en te cap d'equivalent) i "arid" (abans es
  // capturava pero es llençava; ara cal per detectar quan el client demana un arid
  // diferent expressat DINS la propia designacio, no nomes en prosa lliure).
  const m = t.match(/h([aml])\s*-?\s*(\d{2,3})\s*\/\s*([bfl])\s*\/\s*(\d{1,3})(?:\s*\/\s*(x[acdfs]\d(?:\s*(?:o|,|\+)\s*x[acdfs]\d)*))?/);
  if (m) {
    out.tipus = 'H' + m[1].toUpperCase();
    out.ha = parseInt(m[2], 10);
    out.cons = CONS_MAP[m[3]] || m[3].toUpperCase();
    out.arid = parseInt(m[4], 10);
    if (m[5]) for (const e of (m[5].match(EXP_RE) || [])) out.exp.add(e.toUpperCase());
  } else {
    const m2 = t.match(/h([aml])\s*-?\s*(\d{2,3})/);
    if (m2) { out.tipus = 'H' + m2[1].toUpperCase(); out.ha = parseInt(m2[2], 10); }
    for (const e of (t.match(EXP_RE) || [])) out.exp.add(e.toUpperCase());
    for (const k of Object.keys(CONS_MAP)) {
      if (new RegExp('\\bconsistencia\\s+' + k + '\\b').test(t)) { out.cons = CONS_MAP[k]; break; }
    }
  }
  if (/autocompactant|autocompactable/.test(t)) out.autocompactable = true;
  if (/hidrofug/.test(t)) out.hidrofug = true;
  if (/\b(blanco|blanc)\b/.test(t) && /hormig/.test(t)) out.blanco = true;
  if (/\bsr\b/.test(t)) out.sr = true;
  if (/\bmr\b/.test(t)) out.mr = true;
  return out;
}

// Taula de suplements validada contra el cataleg real d'OBRAS COMPLETAS (comprovat 2026-09-01).
// Si el codi de suplement no existeix al cataleg carregat (p.ex. amb una altra base), el
// suplement es descarta automaticament mes avall: aixo fa que el mecanisme no faci res amb
// bases que no tinguin aquests codis, sense necessitat de detectar quina base es.
const EXP_GRUP = {
  XC3: 'XC3-4', XC4: 'XC3-4',
  XA1: 'XA1-2-3', XA2: 'XA1-2-3', XA3: 'XA1-2-3',
  XF1: 'XF1', XD3: 'XD3', XS1: 'XS1', XS2: 'XS2-3', XS3: 'XS2-3'
};
const EXP_CODI = { 'XC3-4': 'MA00.2.6.', 'XA1-2-3': 'MA00.2.666', XF1: 'MA00.2.8', XD3: 'MA00.2.9', XS1: 'MA00.2.9.', 'XS2-3': 'MA00.2.9.9' };

function suplementsAplicables(client, base) {
  const out = [];
  if (base.ha === null) return out;
  // FIX (2026-09-07): el suplement de grau (HA-30/HA-35, materials MA00.2.2/MA00.2.2.2) es
  // especific del formigo ARMAT -- son additius pensats per a HA, i no hi ha cap material al
  // cataleg que representi pujar de grau un formigo EN MASSA (HM). Si el client demana
  // HM-25 quan la base porta HM-20 nomes queda com a avis pel tecnic ("discrepancia",
  // ja el detecta la IA): no s'injecta res, perque no hi ha cap material real que ho
  // representi correctament.
  if (client.tipus === 'HA' && base.tipus === 'HA' && client.ha && client.ha > base.ha) {
    if (client.ha >= 35) out.push(['MA00.2.2.2', 'formigo HA-35 (base porta HA-' + base.ha + ')']);
    else if (client.ha >= 30) out.push(['MA00.2.2', 'formigo HA-30 (base porta HA-' + base.ha + ')']);
  }
  if (client.cons && base.cons && client.cons !== base.cons) {
    if (client.cons === 'F') out.push(['MA00.2.3', 'consistencia fluida (base porta consistencia ' + base.cons + ')']);
    else if (client.cons === 'L') out.push(['MA00.3.2', 'consistencia liquida (base porta consistencia ' + base.cons + ')']);
  }
  const expBase = new Set([...base.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
  const expClient = new Set([...client.exp].map((e) => EXP_GRUP[e]).filter(Boolean));
  for (const g of expClient) if (!expBase.has(g)) out.push([EXP_CODI[g], "classe d'exposicio " + g + ' (no la porta la base)']);
  if (client.autocompactable && !base.autocompactable) out.push(['MA00.3.21', 'formigo autocompactable']);
  if (client.hidrofug && !base.hidrofug) out.push(['MA00.2.3.', 'formigo hidrofug']);
  if (client.blanco && !base.blanco) out.push(['MA00.2.9.8', 'formigo blanc']);
  if (client.sr && !base.sr) out.push(['MA00.2.99', 'formigo SR']);
  if (client.mr && !base.mr) out.push(['MA00.2.999', 'formigo MR']);
  return out;
}

// FIX (2026-09-04): suplement d'arid 10mm. La base no te cap material d'arid 10 -- nomes
// arriba a "ARIDO 12" (MA00.2.4, confirmat al BC3 real: ja es fa servir tal qual en
// partides existents com "00.5" HA-25/L/12/XC2, sempre al mateix rendiment que el propi
// formigo). Quan el client demana arid 10, s'injecta MA00.2.4 (la mida mes petita
// disponible) i es mostra "10" al titol/Text1 -- no "12" -- perque es el que ha demanat
// el client. A diferencia del sistema HA/exposicio (nomes formigo ARMAT), l'arid tambe
// s'ha d'aplicar a formigo EN MASSA (HM/HL): els titols reals de la base ("FORMACIÓN DE
// CAPA DE LIMPIEZA...HM-20/B/20") fan servir el mateix patro "HX-NN/C/ZZ" pero SENSE la
// classe d'exposicio (nomes 3 trossos, no 4) -- per aixo es un patro i una funcio a part,
// independents dels guards "client.ha===null"/"base.ha===null" que nomes tenen sentit pel
// sistema d'exposicio (armat).
const ARID_KEYWORDS_RE = /\b(?:arido|arid)\b/;
function volArid10(text) {
  const t = norm(text);
  const re = /\b10(?!\d)/g;
  let m;
  while ((m = re.exec(t))) {
    const inici = Math.max(0, m.index - 25);
    const final = Math.min(t.length, m.index + m[0].length + 25);
    if (ARID_KEYWORDS_RE.test(t.slice(inici, final))) return true;
  }
  return false;
}
const DESIGNACIO_ARID_RE = /h[aml]\s*-?\s*\d{2,3}\s*\/\s*[bflc]\s*\/\s*(\d{1,3})/i;
function arid10DeLaBase(resumBase) {
  const m = norm(resumBase).match(DESIGNACIO_ARID_RE);
  return m ? parseInt(m[1], 10) : null;
}
function substitueixArid10(textOriginal) {
  const text = String(textOriginal || '');
  const re = /(H[AML]\s*-?\s*\d{2,3}\s*\/\s*[BFLC]\s*\/\s*)(\d{1,3})((?:\s*\/\s*X[ACDFS]\d(?:\s*[+,]\s*X[ACDFS]\d)*)?)/i;
  const m = text.match(re);
  if (!m) return { text, canviat: false };
  const nouText = text.slice(0, m.index) + m[1] + '10' + m[3] + text.slice(m.index + m[0].length);
  return { text: nouText, canviat: true };
}

// Edita directament el resum (titol de la partida) perque digui la designacio REAL amb
// el suplement aplicat, en lloc d'afegir un text generic com "+ SUPLEMENTO HORMIGON".
// Nomes canvia HA/consistencia/exposicio quan el suplement corresponent s'ha aplicat de
// veritat (mateixes condicions que suplementsAplicables); si no troba el patro
// "HA-XX/Y/ZZ/XCn" al resum original, el deixa tal qual i nomes hi afegeix les etiquetes
// de propietats (hidrofug, autocompactable...) que no formen part d'aquest patro.
function actualitzaResum(resumOriginal, client, base, suplCodis, volArido10) {
  let text = String(resumOriginal || '');
  // FIX (2026-09-07): nomes es reconeixia "HA" amb exposicio OBLIGATORIA (4 trossos). El
  // formigo en massa (HM/HL) fa servir el mateix format pero sovint amb nomes 3 trossos
  // (sense exposicio: "HM-20/B/20") -- amb aquest patro cap titol de formigo en massa
  // trobava mai el forat on corregir la consistencia, encara que "suplementsAplicables" ja
  // hagues decidit que calia (823.26: "HM-20/B/20" es quedava tal qual quan el client
  // demanava fluid). Ara "H[AML]" i l'exposicio son opcionals.
  const m = text.match(/H([AML])\s*-?\s*(\d{2,3})\s*\/\s*([BFL])\s*\/\s*(\d{1,3})(?:\s*\/\s*(X[ACDFS]\d(?:\s*[+,]\s*X[ACDFS]\d)*))?/i);
  if (m) {
    const tipusText = 'H' + m[1].toUpperCase();
    // FIX (2026-09-07): totes les comparacions es fan ara contra el que REALMENT diu aquest
    // text (m[2]/m[3]/m[5]), no contra "base" (la designacio del material fill) -- mateix
    // motiu que ja es va corregir per a l'exposicio: a la base real el titol i el material
    // no sempre coincideixen (408 es titulava XC1 amb material XC2), i el mateix pot passar
    // amb grau o consistencia. El grau nomes es reescriu quan el client demana un formigo
    // ARMAT (HA) de grau superior -- es l'unic cas amb material real (MA00.2.2/.2.2.2); cap
    // material representa un salt de grau en massa (HM), aixi que reescriure'l sense cost
    // real associat seria enganyos -- es queda tal qual i nomes avisa (discrepancia).
    const gradeActual = parseInt(m[2], 10);
    const haNou = (client.tipus === 'HA' && tipusText === 'HA' && client.ha && client.ha > gradeActual) ? client.ha : m[2];
    const consActual = m[3].toUpperCase();
    const consNou = (client.cons && client.cons !== consActual) ? client.cons : consActual;
    const aridNou = m[4];
    let expNou = m[5] || '';
    if (m[5] && client.exp && client.exp.size) {
      const expClient = [...client.exp].sort().join('+');
      const expActual = (m[5].match(EXP_RE) || []).map((e) => e.toUpperCase()).sort().join('+');
      if (expClient !== expActual) expNou = expClient;
    }
    const nova = tipusText + '-' + haNou + '/' + consNou + '/' + aridNou + (expNou ? '/' + expNou : '');
    text = text.slice(0, m.index) + nova + text.slice(m.index + m[0].length);
  }
  // FIX (2026-09-04): arid 10mm -- corre DESPRES del bloc HA d'aqui dalt (per si ja ha
  // canviat el text) i fa servir el seu propi patro mes ampli (HA/HM/HL, amb o sense
  // classe d'exposicio), aixi funciona tant per a formigo armat com en massa.
  let aridSubstituit = false;
  if (volArido10) {
    const r = substitueixArid10(text);
    text = r.text;
    aridSubstituit = r.canviat;
  }
  const tags = [];
  if (suplCodis.includes('MA00.3.21')) tags.push('AUTOCOMPACTABLE');
  if (suplCodis.includes('MA00.2.3.')) tags.push('HIDROFUGO');
  if (suplCodis.includes('MA00.2.9.8')) tags.push('BLANCO');
  if (suplCodis.includes('MA00.2.99')) tags.push('SR');
  if (suplCodis.includes('MA00.2.999')) tags.push('MR');
  // Si no hi havia cap patro "HX-NN/C/ZZ[/XCn]" al text (rar, pero possible en formigo en
  // massa amb redaccio no estandard) no hi ha cap lloc on substituir el numero -- s'afegeix
  // com a etiqueta, igual que la resta de propietats.
  if (volArido10 && !aridSubstituit) tags.push('ÁRIDO 10');
  if (tags.length) text = text + ' ' + tags.join(' ');
  return text;
}

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

const out = [];
for (const r of files) {
  if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
  const c = cat[String(r.codi_base)];
  if (!c) continue;

  let concreteLine = null, ggRate = null;
  for (const [kk, , rend] of tripletsOf(c.descomposicio)) {
    if (kk === '%24') { ggRate = Number(rend); continue; }
    const src = con[kk] || cat[kk];
    if (src && /hormig/i.test(norm(src.resum)) && !concreteLine) concreteLine = { codi: kk, rendiment: Number(rend), resum: src.resum };
  }
  if (!concreteLine || ggRate === null) continue;

  const textClientCru = (r.resum_excel || '') + ' ' + (r.text || '');
  const clientDesig = parseDesignacio(textClientCru);
  const baseDesig = parseDesignacio(concreteLine.resum);
  const titolDesig = parseDesignacio(c.resum);

  // FIX (2026-09-07): el sistema de grau/consistencia/exposicio abans nomes es disparava amb
  // "HA" (formigo armat) -- ara tambe cobreix HM/HL (formigo en massa/neteja), no nomes per
  // grau/exposicio sino perque aquestes bases sovint tenen UN sol material HM generic sense
  // consistencia ni arid propis (p.ex. "HORMIGÓN HM - 20", sense "/B/20"): baseDesig.cons i
  // baseDesig.arid es queden null encara que el TITOL de la partida SI ho digui
  // ("...HM-20/B/20"). "baseEfectiu" fa servir el material com a font principal (el preu ja
  // reflecteix exactament aixo) i el titol nomes de reserva quan el material no ho especifica.
  const baseEfectiu = {
    ha: baseDesig.ha, tipus: baseDesig.tipus,
    cons: baseDesig.cons || titolDesig.cons,
    exp: baseDesig.exp,
    autocompactable: baseDesig.autocompactable, hidrofug: baseDesig.hidrofug,
    blanco: baseDesig.blanco, sr: baseDesig.sr, mr: baseDesig.mr
  };
  // El sistema de grau/consistencia/exposicio nomes te sentit quan es pot identificar una
  // designacio HA/HM/HL real, tant al client com a la base: si algun dels dos no en porta,
  // es descarta sencer (com sempre).
  const potExposicio = clientDesig.ha !== null && baseDesig.ha !== null;
  const supl = potExposicio ? suplementsAplicables(clientDesig, baseEfectiu).filter(([sc]) => cat[sc] || con[sc]) : [];
  // FIX (2026-09-07): qualsevol diferencia de classe d'exposicio entre el que demana el
  // client i el que diu el TITOL de la partida obliga a corregir titol/Text1, encara que no
  // impliqui cap suplement de cost (ni XC1 ni XC2 son a EXP_GRUP, aixi que
  // suplementsAplicables no hi afegeix res -- vegeu actualitzaResum). Es compara contra el
  // titol, no contra "baseDesig" (que surt del material fill): a la base real la partida 408
  // es titula XC1 pero esta feta amb material XC2, aixi que un client que demanava XC2
  // donava "cap diferencia" i el titol es quedava a XC1 (obra 822.26, murs de contencio).
  const expRelabel = clientDesig.ha !== null && titolDesig.ha !== null && clientDesig.exp.size > 0
    && [...clientDesig.exp].sort().join('+') !== [...titolDesig.exp].sort().join('+');

  // FIX (2026-09-04): arid 10mm -- a diferencia de dalt, aixo SI s'aplica a formigo en
  // massa (HM/HL), no nomes armat -- per aixo es independent de "potExposicio".
  // FIX (2026-09-07): fins ara nomes es detectava quan el client ho deia en PROSA lliure
  // ("arido 10mm"). Molt sovint el client nomes ho indica DINS la propia designacio
  // estructurada ("HA-25/B/10/XC2", "HA-25/F/10/XC1" -- el 10 es l'arid, tercer tros) sense
  // repetir mai la paraula "arido"/"arid" enlloc del text -- volArid10() no en trobava cap
  // rastre i l'arid es quedava tal qual (823.26: murs i cimentacions demanaven arid 10 dins
  // la seva propia "HA-.../10/..." i el titol final es quedava amb el 20 de la base). Ara
  // tambe es dispara quan la propia designacio del client (ja parsejada a "clientDesig")
  // diu arid=10.
  const ARID_CODI = 'MA00.2.4';
  const volArido10 = (cat[ARID_CODI] || con[ARID_CODI])
    && (volArid10(textClientCru) || clientDesig.arid === 10) && arid10DeLaBase(concreteLine.resum) !== 10;
  if (volArido10) supl.push([ARID_CODI, "arido 10mm indicat pel client (la base nomes disposa d'arido 12, la mida mes petita)"]);

  if (!supl.length && !expRelabel) continue;

  const suplCodis = supl.map((s) => s[0]);
  const motius = supl.map((s) => s[1]);
  if (expRelabel) motius.push("classe d'exposicio " + [...clientDesig.exp].sort().join('+') + ' (el titol de la base deia ' + ([...titolDesig.exp].join('+') || 'cap') + ')');
  out.push({ json: {
    ordre: r.ordre,
    codi_base: r.codi_base,
    suplement_codis: suplCodis,
    suplement_motiu: motius.join('; '),
    suplement_rendiment: concreteLine.rendiment,
    suplement_gg_rate: ggRate,
    formigo_codi: concreteLine.codi,
    resum_nou: actualitzaResum(c.resum, clientDesig, baseDesig, suplCodis, volArido10),
    // Mateixa substitucio, ara sobre el text contractual (~T, "descripcio de l'element" a
    // Presto) perque tambe reflecteixi el formigo nou -- nomes la designacio HA/.../XCn,
    // res mes del text es toca.
    text_nou: actualitzaResum(c.text, clientDesig, baseDesig, suplCodis, volArido10)
  } });
}
return out;

