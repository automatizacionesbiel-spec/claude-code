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
const zlib = require('zlib');

// Llegeix els noms de les pestanyes d'un .xlsx SENSE cap libreria externa -- nomes 'zlib'
// (built-in de node). Un .xlsx es un ZIP; els noms de pestanya viuen a xl/workbook.xml.
// Si el fitxer no es un ZIP valid o no te aquesta entrada (p.ex. no es un xlsx real), es
// retorna null i qui crida cau al comportament d'abans (llegir nomes la primera pestanya).
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
  const xml = (target.compMethod === 0 ? compData : zlib.inflateRawSync(compData)).toString('utf8');

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
