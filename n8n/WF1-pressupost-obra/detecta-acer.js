// BLOC 4b - Acer corrugat B-500-S. Nomes a partides COMPOSTES o de VERTIDO/HORMIGON (mai
// a encofrat sol). Sempre s'hi afegeix un EXTRA fix (2 kg, o 5 kg si es una llosa
// d'escala) PER SOBRE del que digui el client. Es retorna com UNA sola quantitat
// (extra + client, ja sumats): es "Genera BC3" qui decideix si fusiona aquest valor amb
// una linia d'acer que la base ja porti (el cas normal) o en crea una de nova -- mai
// dues linies "0.0" separades. Nomes actua si "0.0" (acer corrugado en elementos
// estructurales) existeix al cataleg carregat (avui, OBRAS COMPLETAS; MO+MAT no en te i
// el mecanisme no fa res).
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

const files = $('Assigna capitols').all().map((i) => i.json);
const cataleg = $('Llegeix cataleg').all().map((i) => i.json).filter((r) => r && r.codi);
const cat = {};
for (const c of cataleg) cat[String(c.codi)] = c;

const CODI_ACER = cataleg.find((c) => /acero corrugado.*elementos estructurales/.test(norm(c.resum)));

// FIX (2026-09-03): la versio anterior nomes reconeixia "acero ... X kg" (castella, la
// paraula sempre ABANS del numero). Als excels reals el client sovint escriu en catala i
// amb el numero ABANS de la paraula, amb una frase sencera pel mig ("... amb una quantia
// de 60 kg/m3" ... "i armadura AP500 S d'acer en barres corrugades" -- 40+ caracters entre
// el numero i la paraula clau). Per cobrir qualsevol ordre/redaccio: es busquen TOTES les
// ocurrencies "<num> kg[/unitat]" del text i es retorna la primera que tingui una paraula
// clau d'acer a prop (abans O despres, finestra de 70 caracters -- calibrada contra frases
// reals dels excels dels clients) -- aixi es descarten quantitats de kg no relacionades
// (p.ex. dosificacio de ciment en kg/m3) perque no tenen cap d'aquestes paraules a la vora.
const ACER_KEYWORDS_RE = /\b(?:acer|acero|armadura|ferralla|corrugad[oa]s?|b[\s-]?500|ap[\s-]?500)\b/;
function extreuQuantitatAcer(text) {
  const t = norm(text);
  const kgRe = /(\d+(?:[.,]\d+)?)\s*kg(?:\s*\/\s*(?:m2|m3|ml|ut|ud))?/g;
  let m;
  while ((m = kgRe.exec(t))) {
    const inici = Math.max(0, m.index - 70);
    const final = Math.min(t.length, m.index + m[0].length + 70);
    if (ACER_KEYWORDS_RE.test(t.slice(inici, final))) return parseFloat(m[1].replace(',', '.'));
  }
  return null;
}

const out = [];
if (CODI_ACER) {
  for (const r of files) {
    if (!r.codi_base || r.confianca === 'ABSORBIDA') continue;
    const c = cat[String(r.codi_base)];
    if (!c) continue;

    const resumNorm = norm(c.resum);
    const esComposta = r.es_composta === 'x';
    const esVertitOHormigo = /vertido|hormigon/.test(resumNorm) && !/encofr|suplemento/.test(resumNorm);
    if (!esComposta && !esVertitOHormigo) continue;

    const textClient = norm((r.resum_excel || '') + ' ' + (r.text || ''));
    const esLlosaEscala = /losa/.test(textClient) && /escalera/.test(textClient);
    const extra = esLlosaEscala ? 5 : 2;

    const qtyClient = extreuQuantitatAcer(textClient);
    const teQtyClient = qtyClient !== null && qtyClient > 0;
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

