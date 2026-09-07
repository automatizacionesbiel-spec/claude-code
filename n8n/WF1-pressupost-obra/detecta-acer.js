// BLOC 4b - Acer corrugat B-500-S. Nomes a partides COMPOSTES o de VERTIDO/HORMIGON (mai
// a encofrat sol). Sempre s'hi afegeix un EXTRA fix (2 kg, o 5 kg si es una llosa
// d'escala) PER SOBRE del que digui el client. Es retorna com UNA sola quantitat
// (extra + client, ja sumats): es "Genera BC3" qui decideix si fusiona aquest valor amb
// una linia d'acer que la base ja porti (el cas normal) o en crea una de nova -- mai
// dues linies "0.0" separades. Nomes actua si "0.0" (acer corrugado en elementos
// estructurales) existeix al cataleg carregat (avui, OBRAS COMPLETAS; MO+MAT no en te i
// el mecanisme no fa res).
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const BS = String.fromCharCode(92);
const tripletsOf = (s) => { const t = String(s || '').split(BS); const o = []; for (let i = 0; i < t.length - 1; i += 3) { const c = (t[i] || '').trim(); if (c) o.push([c, t[i + 1], t[i + 2]]); } return o; };

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const conceptes = $('Llegeix conceptes').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;
const con = {};
for (const c of conceptes) con[String(c.codi)] = c;

const CODI_ACER = cataleg.find((c) => /acero corrugado.*elementos estructurales/.test(norm(c.resum)));

// FIX (2026-09-03): la versio anterior nomes reconeixia "acero ... X kg" (castella, la
// paraula sempre ABANS del numero). Als excels reals el client sovint escriu en catala i
// amb el numero ABANS de la paraula, amb una frase sencera pel mig ("... amb una quantia
// de 60 kg/m3" ... "i armadura AP500 S d'acer en barres corrugades" -- 40+ caracters entre
// el numero i la paraula clau). Per cobrir qualsevol ordre/redaccio: es busquen TOTES les
// ocurrencies "<num> kg[/unitat]" del text i es retorna la primera que tingui una paraula
// clau d'acer a prop (abans O despres, finestra de 70 caracters -- calibrada contra frases
// reals dels excels dels clients).
// FIX (2026-09-03, ronda 2): amb la finestra de 70 caracters, la dosificacio de ciment
// ("...una quantitat de ciment de 350 kg/m3 i relacio aigua ciment =< 0.5 abocat amb
// cubilot i armadura AP500 S d'acer...") queda sovint a menys de 70 caracters de
// "armadura"/"acer" -- es detectava com si fos la quantitat d'acer (provat amb casos reals
// de l'excel: donava 300/350 en lloc de 80/60). Ara, abans de mirar si hi ha una paraula
// clau d'acer a la vora, es descarta directament qualsevol "<num> kg" que tingui la
// paraula "ciment"/"cemento" a menys de 25 caracters -- es una dosificacio, mai la
// quantitat d'acer, independentment de si "acer" tambe hi cau a prop per casualitat.
const ACER_KEYWORDS_RE = /\b(?:acer|acero|armadura|ferralla|corrugad[oa]s?|b[\s-]?500|ap[\s-]?500)\b/;
const CIMENT_KEYWORDS_RE = /\b(?:ciment|cemento|cement)\b/;
function extreuQuantitatAcer(text) {
  const t = norm(text);
  const kgRe = /(\d+(?:[.,]\d+)?)\s*kg(?:\s*\/\s*(?:m2|m3|ml|ut|ud))?/g;
  let m;
  while ((m = kgRe.exec(t))) {
    const iniciCiment = Math.max(0, m.index - 25);
    const finalCiment = Math.min(t.length, m.index + m[0].length + 25);
    if (CIMENT_KEYWORDS_RE.test(t.slice(iniciCiment, finalCiment))) continue;
    const inici = Math.max(0, m.index - 70);
    const final = Math.min(t.length, m.index + m[0].length + 70);
    if (ACER_KEYWORDS_RE.test(t.slice(inici, final))) return parseFloat(m[1].replace(',', '.'));
  }
  return null;
}

// FIX (2026-09-04): si el client ja porta una partida INDEPENDENT dedicada a l'acer per a
// un element (p.ex. "Acero B500S en muros" com a linia propia del seu Excel, emparellada
// directament amb el mateix codi "0.0"), l'acer NO s'ha de tornar a afegir dins la
// formacio/vertido d'aquell mateix element -- ja queda comptat a la partida a part.
// Com que el codi "0.0" pertany a un capitol generic "ACERO" del cataleg (no te capitol
// propi de muros/pilars/forjats), la familia d'una linia INDEPENDENT d'acer nomes es pot
// saber pel text del CLIENT en aquella fila -- a diferencia de la partida composta, la
// seva familia si ve del capitol de la base (igual que a "Detecta suplements alcada").
// FIX (2026-09-04, ronda 2): amb dades reals (829.26) aquest mecanisme fallava en dos punts:
// 1) La llista nomes tenia pilar/muro/forjado -- li faltaven losa (sinonim de forjado als
//    excels dels clients), viga i zanja/pou/zapata/riostra (cimentacio). Amb el 829.26, les
//    files independents d'acer de "LOSAS ESTRUCTURA", "LOSAS INCLINADAS", "VIGAS" i "ZANJAS
//    Y POZOS" no coincidien amb cap familia i el +2 per defecte es seguia afegint igualment
//    a 310.S1/310.S2/70003.S1/101.S1/103.S1.
// 2) Fins i tot "muro" (que si hi era) fallava sovint: es buscava la paraula clau nomes al
//    text EN CRU de la fila d'acer, pero aquesta fila pot no repetir-la (ve d'un encapçalament
//    de seccio al excel del client, no de la propia descripcio). "Enriquiment IA" ja assigna
//    una etiqueta curta fiable per distingir aquestes files (es exactament el que apareix com
//    a comentari de mesura al BC3: "MURO", "PILARES", "LOSAS ESTRUCTURA"...) -- ara es dona
//    prioritat a aquesta etiqueta abans de recorrer al text en cru.
// FIX (2026-09-07, ronda 4): les paraules clau eren nomes en CASTELLA, pero els excels
// d'aquests clients venen en CATALA i la grafia no coincideix -- "murs" no conte "muro",
// "lloses" no conte "losa", "bigues"/"jasseres" no conten "viga"/"jacena". Nomes coincidien
// per casualitat "pilars" (conte "pilar") i "fonamentacions" (conte "fonament"), i per aixo
// pilars i cimentacio SI es deduplicaven i murs, lloses i vigues no (obra 822.26: l'acer es
// tornava a injectar a 408.S1/408.S2/310.S1/310.S2/70003.S1 tot i tenir el client partides
// d'acer independents per a "murs", "lloses" i "bigues"). Ara cada familia porta les dues
// grafies. L'ordre importa: FORJADO va abans que VIGA perque els textos de lloses solen
// esmentar "jasseres embegudes" de passada.
const FAMILY_MAP = [
  { tag: 'PILAR', re: /pilar/ },
  { tag: 'MURO', re: /muro|\bmurs?\b|pantalla/ },
  { tag: 'FORJADO', re: /forjado|forjat|losa|llos[ae]s?|sostres?/ },
  { tag: 'VIGA', re: /viga|\bbig(?:a|as|ues|es)\b|jacena|jasser/ },
  { tag: 'CIMENTACION', re: /cimentacio|fonament|zanja|\brasa|poz[oa]s?|\bpous?\b|zapata|sabata|riostra|soler[ae]s?|encepado|enceps/ }
];
const familiaDe = (text) => { const t = norm(text); const f = FAMILY_MAP.find((x) => x.re.test(t)); return f ? f.tag : null; };

const familiesAmbAcerIndependent = new Set();
if (CODI_ACER) {
  for (const r of files) {
    if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
    if (String(r.codi_base) !== String(CODI_ACER.codi)) continue;
    const font = r.etiqueta_curta || ((r.resum_excel || '') + ' ' + (r.text || ''));
    const fam = familiaDe(font);
    if (fam) familiesAmbAcerIndependent.add(fam);
  }
}

const out = [];
if (CODI_ACER) {
  for (const r of files) {
    if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
    const c = cat[String(r.codi_base)];
    if (!c) continue;

    const resumNorm = norm(c.resum);
    const esVertitOHormigo = /vertido|hormigon/.test(resumNorm) && !/encofr|suplemento/.test(resumNorm);
    // FIX (2026-09-04): "es_composta" nomes es cert quan la base te ALHORA un fill
    // d'encofrat I un de formigo -- un "forjado colaborante" (p.ex. codi "307") fa servir
    // xapa col·laborant com a encofrat perdut (el seu fill no diu "encofrado" enlloc), aixi
    // que mai queda marcat composta, i el seu titol tampoc diu "vertido"/"hormigon" (diu
    // "FORMACION DE FDO. COLABORANTE"). Resultat real (829.26): l'acer del client mai
    // s'injectava en aquestes partides, i el "Q.estimada=" que es veia al text nomes era
    // el valor per defecte de la base, no el que realment deia el client. Ara nomes cal que
    // la base tingui UN fill de formigo (amb independencia de si tambe en te un d'encofrat).
    const teFormigoFill = tripletsOf(c.descomposicio).some(([kk]) => { const s = con[kk] || cat[kk]; return s && /vertido|hormig/i.test(norm(s.resum)); });
    if (!esVertitOHormigo && !teFormigoFill) continue;

    const textClient = norm((r.resum_excel || '') + ' ' + (r.text || ''));
    // FIX (2026-09-04): prioritat a la quantitat que ja ha extret "Enriquiment IA" -- enten
    // molt millor el llenguatge natural del client (ordre de les paraules, catala/castella
    // barrejat, frases llargues amb la dosificacio de ciment pel mig...) que cap regex
    // escrita a ma. El regex propi nomes queda com a reserva (si aquesta execucio no ha
    // passat per la IA -- lots buits -- o no ha trobat cap quantitat per aquesta fila).
    const qtyClientIa = Number(r.acer_kg_ia);
    const qtyClient = (qtyClientIa > 0) ? qtyClientIa : extreuQuantitatAcer(textClient);
    const teQtyClient = qtyClient !== null && qtyClient > 0;

    // FIX (2026-09-04, ronda 3): la supressio per familia nomes ha d'aplicar-se a l'extra
    // AUTOMATIC (quan aquesta fila concreta no diu cap quantitat propia) -- si el client SI
    // indica una quantitat real al text d'AQUESTA fila (com el "acero corrugado 1,5 kg/m2"
    // del forjado colaborante 307 al 829.26), es una dada directa i mai s'ha de descartar
    // nomes perque una altra fila del mateix capitol ja porti el seu acer a part.
    if (familiesAmbAcerIndependent.size && !teQtyClient) {
      const familiaActual = familiaDe(c.capitol_desc || c.capitol || '');
      if (familiaActual && familiesAmbAcerIndependent.has(familiaActual)) continue;
    }

    const esLlosaEscala = /losa/.test(textClient) && /escalera/.test(textClient);
    const extra = esLlosaEscala ? 5 : 2;
    const total = extra + (teQtyClient ? qtyClient : 0);
    const motiu = teQtyClient ? (qtyClient + 'kg indicats pel client + ' + extra + 'kg extra') : ('extra ' + extra + 'kg/ud');
    const triples = [{ codi: String(CODI_ACER.codi), rendiment: total }];

    // Frase fixa que cal afegir al text contractual (~T) de la partida quan s'hi posa
    // l'acer, a sota de tot (despres del "No incluye"). Sempre la mateixa, literal --
    // NOMES quan el client indica una quantitat real al seu text (com ja fa la propia
    // base en partides com "307": "...Q.estimada=1,5kg/m2.") s'hi afegeix el numero que
    // toqui, amb la mateixa notacio (coma decimal, kg per la unitat de la partida).
    let textExtra = '-. Elaboración, suministro y montaje de acero B500S, en obra.';
    if (teQtyClient) {
      const qtyStr = String(qtyClient).replace('.', ',');
      textExtra += ' Q.estimada=' + qtyStr + 'kg/' + String(c.ud || '').toLowerCase() + '.';
    }

    out.push({ json: { ordre: r.ordre, codi_base: r.codi_base, triples, motiu, text_extra: textExtra, qty_client: teQtyClient ? qtyClient : null } });
  }
}
return out;

