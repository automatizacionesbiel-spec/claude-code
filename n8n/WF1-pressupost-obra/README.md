# WF1 v2 - Pressupost obra (en construccio)

Mirror of the n8n Code nodes touched by these changes, from the n8n workflow
`WF1 v2 - Pressupost obra (en construccio)` (id `g5iFfCho11pcyVAm`). The live
workflow is edited directly in n8n; these files are kept here as a readable,
version-controlled copy of what was changed and why.

## Change 3: acer/encofrado text placement, a cement-dosage false positive, and a new formwork-quantity node

Reported from two more generated items ("104"-family foundation concrete and
"502" coronation beam), using a real client spreadsheet
(`Amarradors_Lote_1_V2_Estruc._horm.xlsx`):

1. **Cement dosage mistaken for steel quantity.** `detecta-acer.js`'s
   keyword-proximity window (from change 2) was wide enough that a cement
   dosage mention ("...una quantitat de ciment de 350 kg/m3 ... armadura
   AP500 S d'acer...") sometimes fell within reach of an acer keyword,
   producing 300/350 kg instead of the real 60/80 kg. Fixed by explicitly
   excluding any "`<num> kg`" that has "ciment"/"cemento"/"cement" within
   25 characters, before checking for acer keywords.
2. **Acer text placement.** When the client-specified quantity *is* known
   but the base item's text has no pre-existing acer line, the fixed
   phrase was always appended after "NO INCLUYE" — even though the item
   does include the steel. It's now inserted inside the "INCLUYE" section
   instead. When the quantity is *not* known and the base *does* already
   carry its own acer line (now correctly detected even without the word
   "Estimada", e.g. "Q=  kg/m3."), that line is deleted and the generic
   fallback phrase is appended after "NO INCLUYE" — avoiding the previous
   bug where both lines coexisted as duplicates.
3. **Title/text tag fallback removed.** `actualitzaResum` (from change 1)
   no longer appends an additive tag (e.g. "HIDROFUGO") as a trailing word
   when the concrete designation pattern isn't present at all in that
   piece of text — some item titles (like "FORMACIÓN VIGA DE CORONACIÓN")
   never show it, so the tag has nothing to attach to.
4. **New: `detecta-encofrat.js`.** Some base items carry a generic default
   formwork estimate in their own text ("...caras.Q.estimada= 5.2
   m2/m3."), unrelated to the actual project. This new node detects a
   real client-specified value ("amb una quantia d'encofrat 6 m2/m3");
   `genera-bc3.js` substitutes it into the existing placeholder when
   found, or strips the quantity clause entirely (keeping the rest of the
   sentence) when the client didn't specify one — never showing the
   generic default as if it were real. Wired into the existing node chain
   as `Detecta acer` → `Detecta encofrat` → `Genera BC3`.

All four were validated with a standalone simulation against the real base
catalog text and client wording for both items before being pushed.

### Note on deterministic regex vs. AI extraction

The user asked whether these free-text quantity extractions (acer, mallat,
encofrat) might be better done via an AI call (the workflow already has one,
"Enriquiment IA"), given how variable client wording is. Kept the
deterministic regex approach for now: once the cement-dosage exclusion was
added, it correctly handles every real case checked (multiple items, several
phrasings), matches the existing "Detecta *" node pattern and its documented
philosophy (deterministic first, AI review as a fallback for what can't be
determined safely), and avoids adding per-row LLM latency/cost. Worth
revisiting if more parsing edge cases keep surfacing.

## Change 2: real steel quantity and mesh size from variable client text

Reported issues, from a Presto screenshot of a generated item (`301.S1`,
a one-way floor slab):

1. The client's Excel specified 5 kg/m2 of reinforcing steel, in Catalan
   ("una quantia de 5 kg/m2 d'armadura ... d'acer"), with the number
   *before* the keyword. `detecta-acer.js`'s old quantity regex only
   recognized the Spanish word-before-number order ("acero ... X kg"), so
   it silently fell back to just the fixed 2kg safety margin, and the
   item's own pre-built "Q.Estimada= KG/M2" text line was never filled in
   (a second, near-duplicate line was appended at the very end instead).
2. The client specified a 20x20Ø5 mesh; the base item ships with a default
   15x15Ø5 mesh baked into its decomposition. `detecta-mallat.js`'s old
   regex required the grid dimensions to sit immediately after "malla(zo)
   (electrosoldada) de" — real text has extra words in between (steel
   grade, etc.) and states the diameter differently ("20x20 cm, 5 i 5 mm
   de D" instead of "Ø5") — so detection silently produced nothing, and
   the base's default mesh passed through unchanged.

### Fix

- `detecta-acer.js`: `extreuQuantitatAcer` now scans every "`<num> kg[/unit]`"
  occurrence in the text and accepts the first one with an acer-related
  keyword (acer/acero/armadura/ferralla/corrugado/B500/AP500) within a
  70-character window on either side — covering both word orders. The
  parsed quantity is now also returned as `qty_client`.
- `detecta-mallat.js`: `extreuMallat` now locates "malla" first, then
  searches a wide window after it for the `AxB` grid, then a second
  window for the diameter — trying the compact "Ø5" form first and
  falling back to the "N (i N) mm de D" form. Raw `a`/`b`/`d` are now
  also returned.
- `genera-bc3.js`:
  - When the base item's own text already has a "Q.Estimada= .../unit"
    placeholder for steel (filled or not), the real client quantity is
    substituted into it in place, instead of always appending a new
    line — the old fixed line is still appended as a fallback when no
    such placeholder exists.
  - The base's default mesh (material + placement) is now *replaced* by
    the client's requested size instead of being added on top of it: if
    the exact same code is already present (e.g. the placement code,
    which only depends on diameter) it's left untouched; if a different
    code needs to replace an old one (e.g. the material grid), the old
    line's own rendimiento (its calibrated overlap/waste margin) is
    inherited instead of using the generic default. The base text's own
    "mallazo AxBØDmm" mention is substituted in place the same way.

Both fixes were validated with a standalone simulation against the real
client text and catalog data from execution 107 (item 301, "05.02 FORJAT
SANITARI") before being pushed, plus several other real item descriptions
from the same spreadsheet and a few synthetic edge cases (fresh insert
with no pre-existing line, a mesh diameter change), to check the parsing
holds up across differently-worded client text as requested.

## Change 1: correct concrete ("formigó") supplement handling

Reported issues, from a Presto screenshot of a generated item:

1. When a supplement such as HIDRÓFUGO/MR/SR/BLANCO/AUTOCOMPACTABLE applies,
   the item title and the "Texto 1" contractual text appended it as a
   trailing standalone word (e.g. `... EN CIMENTACIONES HIDROFUGO`) instead
   of attaching it to the concrete designation (`.../XS1+HIDROFUGO`).
2. The supplement lines injected into the item's breakdown (right below the
   base concrete material) came out in the wrong, effectively reversed,
   order.
3. The same trailing-word issue from (1) also showed up in the contractual
   text ("Texto 1"), where the tag ended up floating near/after "NO
   INCLUYE" instead of inside the "INCLUYENDO" sentence, next to the
   concrete designation.

### Fix

- `detecta-suplements-formigo.js` (node "Detecta suplements formigo"):
  - `suplementsAplicables` now emits supplements in a fixed order: grade
    (HA-30/HA-35) → exposure classes in a fixed family order (XC3-4 → XD3 →
    XF1 → XS1 → XS2-3 → XA1-2-3) → autocompactable → blanco → SR → MR →
    hidrófugo (always last).
  - `actualitzaResum` now appends the additive tags (autocompactable,
    blanco, SR, MR, hidrófugo) onto the matched `HA-XX/Y/ZZ/XCn` chain with
    `+`, instead of appending them as trailing words at the end of the
    whole text. This function is used for both the item title (`resum_nou`)
    and the contractual text (`text_nou`), so both are fixed together.
- `genera-bc3.js` (node "Genera BC3"):
  - The loop that injects supplement lines into the item's breakdown
    (`injAbans`) always inserted right after the base concrete material's
    position, which reversed the order of multiple supplements. It now
    advances the insertion position after each insert, so the final order
    in the breakdown matches the order produced by
    `suplementsAplicables` above.

Example, for a client designation of `HA-35/B/20/XA3+XC4+XS1` +
hidrófugo, over a base of `HA-25/B/20/XC2`:

- Title/Texto 1: `HA-35/B/20/XA3+XC4+XS1+HIDROFUGO` (was:
  `HA-35/B/20/XA3+XC4+XS1 ... HIDROFUGO` at the very end).
- Breakdown order: base, **HA-35, XC3-4, XS1, XA1-2-3, HIDROFUGO**, vertido,
  gastos generales, acero (was: base, HIDROFUGO, XA1-2-3, XS1, XC3-4, HA-35, ...).
