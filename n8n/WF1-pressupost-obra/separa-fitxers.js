// BLOC 2 - Un item propi per cada (fitxer pujat x pestanya). Poden pujar-se diversos
// fitxers alhora (p.ex. un Excel amb el formigo i un altre amb els encofrats, si l'origen
// els te en fulls separats) i cada fitxer .xlsx pot tenir mes d'una pestanya amb dades --
// ara es llegeixen TOTES automaticament, no nomes la primera (abans calia exportar cada
// pestanya com a fitxer .xlsx a part i pujar-les totes, vegeu la descripcio del formulari
// "Nova obra"). El binari sempre queda sota la clau 'file' perque la resta del flux no hagi
// de saber quants fitxers ni com es diuen les seves propietats; cada pestanya esdevé el seu
// propi item, exactament com si fos un fitxer pujat a part, perque "Fitxers loop" (Split In
// Batches, batchSize=1) proceso cada un en la seva propia iteracio -- "Intenta parseig
// determinista" nomes sap parsejar UNA taula coherent per crida (usa $runIndex, un per
// iteracio del bucle), aixi que barrejar files de dues pestanyes diferents en una mateixa
// iteracio li rebentaria el parsing.
// FIX (2026-09-03): el sandbox de n8n (Task Runner) bloqueja qualsevol 'require', inclos
// 'zlib' encara que sigui un modul natiu de node ("Module 'zlib' is disallowed") -- provat
// en real, execucio 110. Per aixo aqui NO es fa cap require: el descompressor DEFLATE
// (RFC1951) de les entrades del ZIP esta reescrit en JS pur mes avall. Provat bytes a byte
// contra zlib.inflateRawSync en local, contra les 24+29 entrades reals de dos .xlsx (incloent
// una de 3,5MB sense comprimir i una entrada "stored") i contra casos sintetics (dades molt
// repetitives, binari aleatori, buit, 1 byte): coincidencia exacta en tots els casos.
function inflateRaw(input) {
  let pos = 0; // posicio en BITS dins input
  const inputLen = input.length;
  function bit() {
    const byteIdx = pos >>> 3;
    const b = byteIdx < inputLen ? input[byteIdx] : 0;
    const val = (b >>> (pos & 7)) & 1;
    pos++;
    return val;
  }
  function bits(n) {
    let v = 0;
    for (let i = 0; i < n; i++) v |= bit() << i;
    return v >>> 0;
  }
  function alignByte() { pos = (pos + 7) & ~7; }

  function buildHuffman(lengths) {
    const maxBits = 15;
    const counts = new Uint16Array(maxBits + 1);
    for (let i = 0; i < lengths.length; i++) counts[lengths[i]]++;
    counts[0] = 0;
    const offsets = new Uint16Array(maxBits + 2);
    for (let i = 1; i <= maxBits; i++) offsets[i + 1] = offsets[i] + counts[i];
    const symbols = new Uint16Array(lengths.length);
    for (let i = 0; i < lengths.length; i++) {
      const l = lengths[i];
      if (l) { symbols[offsets[l]] = i; offsets[l]++; }
    }
    return { counts, symbols };
  }
  function decodeSymbol(table) {
    let code = 0, first = 0, index = 0;
    for (let len = 1; len <= 15; len++) {
      code |= bit();
      const count = table.counts[len];
      if (code - first < count) return table.symbols[index + (code - first)];
      index += count;
      first += count;
      first <<= 1;
      code <<= 1;
    }
    throw new Error('codi Huffman invalid');
  }

  const LEN_BASE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  const LEN_EXTRA = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  const DIST_BASE = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  const DIST_EXTRA = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  const CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

  let fixedLit = null, fixedDist = null;
  function getFixedTables() {
    if (fixedLit) return [fixedLit, fixedDist];
    const litLens = new Uint8Array(288);
    for (let i = 0; i < 144; i++) litLens[i] = 8;
    for (let i = 144; i < 256; i++) litLens[i] = 9;
    for (let i = 256; i < 280; i++) litLens[i] = 7;
    for (let i = 280; i < 288; i++) litLens[i] = 8;
    const distLens = new Uint8Array(30).fill(5);
    fixedLit = buildHuffman(litLens);
    fixedDist = buildHuffman(distLens);
    return [fixedLit, fixedDist];
  }

  let out = new Uint8Array(Math.max(64, input.length * 4));
  let outLen = 0;
  function ensure(extra) {
    if (outLen + extra <= out.length) return;
    let newSize = out.length * 2;
    while (newSize < outLen + extra) newSize *= 2;
    const bigger = new Uint8Array(newSize);
    bigger.set(out.subarray(0, outLen));
    out = bigger;
  }
  function pushByte(b) { ensure(1); out[outLen++] = b; }

  function inflateBlockData(litTable, distTable) {
    for (;;) {
      const sym = decodeSymbol(litTable);
      if (sym < 256) { pushByte(sym); continue; }
      if (sym === 256) return; // fi de bloc
      const li = sym - 257;
      const length = LEN_BASE[li] + bits(LEN_EXTRA[li]);
      const dsym = decodeSymbol(distTable);
      const distance = DIST_BASE[dsym] + bits(DIST_EXTRA[dsym]);
      ensure(length);
      let from = outLen - distance;
      for (let i = 0; i < length; i++) { out[outLen++] = out[from++]; }
    }
  }

  for (;;) {
    const bfinal = bit();
    const btype = bits(2);
    if (btype === 0) {
      alignByte();
      const byteIdx = pos >>> 3;
      const len = input[byteIdx] | (input[byteIdx + 1] << 8);
      pos += 32; // LEN(16) + NLEN(16)
      const start = pos >>> 3;
      ensure(len);
      out.set(input.subarray(start, start + len), outLen);
      outLen += len;
      pos += len * 8;
    } else if (btype === 1) {
      const [lit, dist] = getFixedTables();
      inflateBlockData(lit, dist);
    } else if (btype === 2) {
      const hlit = bits(5) + 257;
      const hdist = bits(5) + 1;
      const hclen = bits(4) + 4;
      const clenLens = new Uint8Array(19);
      for (let i = 0; i < hclen; i++) clenLens[CLEN_ORDER[i]] = bits(3);
      const clenTable = buildHuffman(clenLens);
      const lens = new Uint8Array(hlit + hdist);
      let i = 0;
      while (i < hlit + hdist) {
        const sym = decodeSymbol(clenTable);
        if (sym < 16) { lens[i++] = sym; }
        else if (sym === 16) { const rep = bits(2) + 3; const prev = lens[i - 1]; for (let r = 0; r < rep; r++) lens[i++] = prev; }
        else if (sym === 17) { const rep = bits(3) + 3; for (let r = 0; r < rep; r++) lens[i++] = 0; }
        else { const rep = bits(7) + 11; for (let r = 0; r < rep; r++) lens[i++] = 0; }
      }
      const litTable = buildHuffman(lens.subarray(0, hlit));
      const distTable = buildHuffman(lens.subarray(hlit));
      inflateBlockData(litTable, distTable);
    } else {
      throw new Error('BTYPE invalid (3)');
    }
    if (bfinal) break;
  }
  return Buffer.from(out.subarray(0, outLen));
}

// Llegeix els noms de les pestanyes d'un .xlsx. Un .xlsx es un ZIP; els noms de pestanya
// viuen a xl/workbook.xml. Si el fitxer no es un ZIP valid o no te aquesta entrada (p.ex.
// no es un xlsx real), es retorna null i qui crida cau al comportament d'abans (llegir
// nomes la primera pestanya).
function llegeixNomsPestanyes(buf) {
  const EOCD_SIG = 0x06054b50;
  let eocd = -1;
  const minPos = Math.max(0, buf.length - 65557);
  for (let i = buf.length - 22; i >= minPos; i--) {
    if (buf.readUInt32LE(i) === EOCD_SIG) { eocd = i; break; }
  }
  if (eocd === -1) return null;
  const nEntries = buf.readUInt16LE(eocd + 10);
  const cdOffset = buf.readUInt32LE(eocd + 16);

  const CD_SIG = 0x02014b50;
  let p = cdOffset;
  let target = null;
  for (let i = 0; i < nEntries; i++) {
    if (buf.readUInt32LE(p) !== CD_SIG) return null;
    const compMethod = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOffset = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    if (name === 'xl/workbook.xml') target = { compMethod, compSize, localOffset };
    p += 46 + nameLen + extraLen + commentLen;
  }
  if (!target) return null;

  const LOCAL_SIG = 0x04034b50;
  if (buf.readUInt32LE(target.localOffset) !== LOCAL_SIG) return null;
  const localNameLen = buf.readUInt16LE(target.localOffset + 26);
  const localExtraLen = buf.readUInt16LE(target.localOffset + 28);
  const dataStart = target.localOffset + 30 + localNameLen + localExtraLen;
  const compData = buf.subarray(dataStart, dataStart + target.compSize);
  const xml = (target.compMethod === 0 ? Buffer.from(compData) : inflateRaw(compData)).toString('utf8');

  const sheetsBlock = (xml.match(/<sheets>([\s\S]*?)<\/sheets>/) || [])[1] || '';
  const noms = [];
  const re = /<sheet\b[^>]*\bname="([^"]*)"/g;
  let m;
  while ((m = re.exec(sheetsBlock))) {
    noms.push(m[1].replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  }
  return noms.length ? noms : null;
}

const it = $input.first();
const bin = it.binary || {};
const keys = Object.keys(bin);
if (!keys.length) throw new Error('No s\'ha rebut cap fitxer d\'amidaments.');

const out = [];
for (const k of keys) {
  const fitxer = bin[k];
  const nom = fitxer.fileName || k;
  const esExcel = /\.xlsx?$/i.test(nom) || /spreadsheet|excel/i.test(fitxer.mimeType || '');

  let pestanyes = null;
  if (esExcel) {
    try {
      let buf;
      if (typeof $helpers !== 'undefined' && $helpers && $helpers.getBinaryDataBuffer) {
        buf = await $helpers.getBinaryDataBuffer(0, k);
      } else if (fitxer.data) {
        buf = Buffer.from(fitxer.data, 'base64');
      }
      if (buf) pestanyes = llegeixNomsPestanyes(buf);
    } catch (e) {
      pestanyes = null; // xarxa de seguretat: si falla la lectura, es tracta com abans
    }
  }

  if (!pestanyes || !pestanyes.length) {
    out.push({ json: { _fitxer: nom }, binary: { file: fitxer } });
    continue;
  }
  for (const sheetName of pestanyes) {
    const etiqueta = pestanyes.length > 1 ? (nom + ' #' + sheetName) : nom;
    out.push({ json: { _fitxer: etiqueta, sheetName }, binary: { file: fitxer } });
  }
}
return out;
