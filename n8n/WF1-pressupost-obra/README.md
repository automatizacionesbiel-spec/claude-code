# WF1 v2 - Pressupost obra (en construccio)

Mirror of the n8n Code nodes touched by these changes, from the n8n workflow
`WF1 v2 - Pressupost obra (en construccio)` (id `g5iFfCho11pcyVAm`). The live
workflow is edited directly in n8n; these files are kept here as a readable,
version-controlled copy of what was changed and why.

## Change 16: stop trusting stale dictionary hits over the composta/separat context

Follow-up to Change 15's "not yet addressed" item. The user pushed back
(correctly): "didn't we already discuss using composite items when
appropriate? Why doesn't the AI matching figure it out on its own — is it
the dictionary, and does that need to change?"

**My Change 15 diagnosis was wrong.** I had claimed this catalog has no
true `[COMPOSTA]` (concrete+formwork combined) items for losa/pilar/mur.
That check only looked children up in `Llegeix cataleg`, not
`Llegeix conceptes` — most composite decompositions reference their
formwork/concrete children as *conceptes* (materials/labor), not catalog
items, so the check silently found nothing. Re-checked properly (children
resolved as `conMap[k] || catMap[k]`, matching what `resol-amb-regles.js`
and `Consolida` actually do): this catalog has **23** genuine `[COMPOSTA]`
items, including exactly the families reported broken — `304`
("FORMACIÓN DE LOSA..."), `601` ("FORMACIÓN PILARES..."), `404`/`404.`/
`406`/`520`/`521` ("FORMACIÓN MURO...").

**Root cause, confirmed against execution #125:** every one of the 8
reported-wrong rows (llosa: 12, 13, 30, 31, 32; pilar: 17, 36; mur: 18) had
`confianca: DICCIONARI`, `origen: DICCIONARI`, `motiu: "Match apres en
obres anteriors"`. `resol-amb-regles.js` skips AI matching *unconditionally*
for any client `clau` that already has a dictionary entry, however old or
however different the context that produced it. The dictionary key does
not encode "did the client measure formwork separately in that obra" — so
a `clau` correctly learned as encofrat-only (`311`) or concrete-only
(`604`/`408`) in some earlier obra stays wrong forever afterwards, even
when *this* obra's own row narrates both scopes in one sentence ("Llosa de
formigó armat...amb muntatge i desmuntatge d'encofrat...formigó..."). The
AI's `[COMPOSTA]` logic in the matching prompt was never broken — it just
never got a chance to run on these rows.

### Fix

Added the same revalidation check to both **`resol-amb-regles.js`** and
**`consolida.js`** (the two places that independently re-derive the
dictionary lookup — see below for why both needed it):

```js
const teAmbdosEnUnaLinia = (t) => {
  const n = norm(t);
  return /encofr|desencofr/.test(n) && /formig|hormig/.test(n);
};
```

If a client row's own text mentions both encofrat and formigó/hormigó
together, but the dictionary-learned `codi_base` for its `clau` is **not**
a `[COMPOSTA]` item, the dictionary hit is treated as unresolved:

- `resol-amb-regles.js` sends it to AI matching like any fresh row
  (previously it was skipped outright whenever *any* dictionary entry
  existed for the clau).
- `consolida.js` — which is the node that actually decides the final
  `codi_base` — independently re-derives the same dictionary lookup and,
  until now, *always* gave it priority over any AI answer. Fixing only
  `resol-amb-regles.js` would have been silently overridden here. Now, when
  the same mismatch is detected and the AI answered, the AI's match wins
  (`origen: 'IA'`); if the AI didn't answer for some reason, the old
  dictionary value is kept (a row is never left without a `codi_base`) but
  downgraded to `confianca: 'BAIXA'` with a `SOSPITOS` note in `motiu` so a
  technician catches it on the review sheet instead of it passing silently.

Rows where the dictionary hit is still valid — a pure encofrat-only line,
a pure formigó-only line, or a clau already correctly learned as
composta — are completely unaffected and still skip AI matching as before,
so the fix doesn't add cost/latency outside the narrow mismatch case.

**Second bug uncovered while testing this:** `Consolida`'s `ABSORBIDA`
suppression (meant to drop a client's *separate*, formwork-only line when
a composta item on another line already covers that formwork) checked only
`esEncofratClient(p.resum)` — true for *any* row that merely mentions
"encofrat" anywhere, including a full row that narrates both scopes and
*is itself* the composta match. Once such a row correctly got a composta
`codi_base` from the fix above, this would have marked it `ABSORBIDA` and
dropped it from the BC3 entirely — worse than the original bug (which at
least billed something, with the wrong code). Narrowed the condition to
`esEncofratClient(p.resum) && !teAmbdosEnUnaLinia(p.resum)`, so it only
fires for a genuinely formwork-only line.

### Validation

Standalone test harness (`test_dicc_revalidacio.js`, run via `node`,
`eval`-loading both files against a mocked `$`/`$input`) covering: the 3
real obra 823.26 families (llosa/pilar/mur, each verified to route to AI
and land on the correct composta code with real catalog units and
decompositions from execution #125's `Llegeix cataleg`/`Llegeix
conceptes`), 2 regression cases where the client genuinely separates
encofrat/formigó into different rows (must stay on the dictionary,
unaffected), 1 case of a clau already correctly learned as composta (must
stay on the dictionary, not bounce to AI needlessly), 1 fresh clau with no
dictionary entry (must go to AI exactly as before), and 1 case simulating
the AI failing to answer a revalidated clau (must fall back to the old
dictionary value with a `BAIXA`/`SOSPITOS` flag, never a blank
`codi_base`). All passed before pushing.

`consolida.js` was not previously mirrored in this repo (it's a Code node
that was never touched before this change); added it here alongside
`resol-amb-regles.js`.

## Change 15: obra 823.26 review — arid-10 structured detection + HM/HL support

Prompted by the user reporting multiple failures in obra 823.26's generated
BC3 (uploading the review spreadsheet, the generated BC3, and a labor-rate
Excel): arid size wasn't corrected to 10 when the client asked for it, an
HM (mass concrete) item requested "fluid" consistency but kept the base's
default "B", the losa item used the formwork code instead of the concrete
one, and composite (concrete+formwork) items weren't billed with separate
formwork.

**Fixed in `detecta-suplements-formigo.js`:**

1. **Arid-10 only detected from free prose.** `volArid10()` scanned the
   surrounding text for the literal word "arido"/"arid" near a standalone
   "10" — but several 823.26 rows state the arid size only inside the
   client's own structured designation (`HA-25/F/10/XC2`, arid as the 3rd
   slash-separated segment), never repeating the word "arido" anywhere in
   the text. `parseDesignacio()` now also captures an `arid` field, and the
   arid-10 trigger is extended to `volArid10(text) || clientDesig.arid ===
   10`. Confirmed against execution #125: ordre 6 and 18 both state arid 10
   only in their own `HA-.../10/...` designation and were previously left
   at the base's 20.
   - **Known remaining gap, not fixed by this change:** several other
     823.26 rows (ordre 12, 13, 17, 30, 31, 32, 36) have the arid size
     corrupted in the source Excel as `"1 O"` (digit, space, capital letter
     O) instead of `"10"` — an apparent PDF/OCR artifact in the client's
     file, not a workflow bug. This is deliberately **not** patched with a
     blanket regex (e.g. `/1\s*o\b/i` → `10`), because standalone `"o"` is
     a legitimate Catalan/Spanish word for "or" (as in `"20 o 25"`) and a
     blind substitution risks corrupting genuine prose elsewhere. These
     rows will keep needing a manual correction on the review sheet.
2. **HM/HL (mass/lean concrete) never entered the grade/consistency/
   exposure system at all.** `parseDesignacio()`'s regex required a literal
   `HA` prefix, so `client.ha`/`base.ha` stayed `null` for any `HM-.../...`
   or `HL-.../...` item and `potExposicio` was always false — the entire
   supplement system silently no-op'd. Confirmed via execution #125: ordre
   5 (HM cimentació, client requests fluid consistency) produced zero
   output from this node. Broadened the regex to `h([aml])...` with an
   **optional** 4th (exposure) segment — HM/HL titles are frequently only
   3 segments since exposure class is an armat-only concept — and captured
   the matched prefix as a new `tipus` field (`'HA'`/`'HM'`/`'HL'`).
   - The HA-30/HA-35 grade-upgrade materials (`MA00.2.2`/`MA00.2.2.2`) are
     gated to `tipus === 'HA'` only: no catalog material represents a grade
     bump for mass concrete, so an HM grade mismatch is deliberately left
     as an AI-flagged discrepancy rather than silently relabelled without
     real cost backing.
   - The base's HM/HL *material* line often doesn't itself encode
     consistency (e.g. "HORMIGÓN HM - 20" with no `/B/20`), unlike HA
     materials which always do. Added a `baseEfectiu` object that prefers
     the material's own parsed consistency and falls back to the item's
     *title* (`titolDesig`) when the material doesn't state one.
   - `actualitzaResum()` had the same `HA`-only, exposure-mandatory pattern
     for rewriting the title/Texto 1, so it never found a substitution
     point in 3-segment HM/HL titles either. Broadened the same way, and
     switched all its internal grade/consistency/exposure comparisons to
     read from what the *text being edited* actually says (its own regex
     capture groups) rather than the external `base` parameter — consistent
     with the fix already applied earlier for the exposure-class relabel.

All changes validated with a standalone test script covering 4 real cases
from obra 823.26's execution #125 plus 8 regression cases from earlier
validated scenarios (12/12 passed) before pushing.

**Superseded by Change 16 below.** The diagnosis in this section turned out
to be wrong — this catalog *does* have genuine `[COMPOSTA]` items for
losa/pilar/mur (`304`, `601`, `404` and others); my check here had only
looked up decomposition children in `Llegeix cataleg` and missed that most
of them live in `Llegeix conceptes`. The real root cause and the actual
fix (revalidating stale dictionary hits instead of building a new
formwork-quantity mechanism) are in Change 16.

## Change 14: fixed the root cause of a bad learned dictionary match

Prompted by the user asking whether the `diccionari_matches` data table (which
`Resol amb regles` queries to skip AI matching for previously-seen client
wording) might hold entries wrongly learned from earlier bugs, and if so to
delete them.

**Checked first: none of Changes 11-13 could have written a bad `codi_base`
match.** `Desa diccionari` only stores `clau -> codi_base`, produced by the
matching stage (`Resol amb regles`/`Matching Claude`/`Classifica capitols`),
which runs entirely before any of the decomposition-time nodes touched in
those changes (acer/mallat/gruix/alçada injection, XC-relabel, Genera BC3).

**Found the real mechanism while investigating:** `Prepara diccionari` has
two paths — `Aplica enriquiment` feeds it directly and learns every match
*immediately*, with no human review; `Llegeix full revisat` feeds it a
second time and *overwrites* (upsert on base+clau) with the technician's
correction, if and when the review sheet actually gets filled in. So a wrong
match from any historical bug — not necessarily one from this session — can
sit in the dictionary indefinitely if nobody ever corrected it.

**Audited the table** (218 rows, sampled via the `Llegeix diccionari` node's
output from execution #124 for the 822.26 obra, since there is no row-level
read/list tool for n8n data tables on this MCP surface) by cross-checking
each client `clau` against its assigned `codi_base`'s own catalog family.
Found and traced the one concrete bad entry (the beam-inside-wall report from
Change 11 point 5) to its exact root cause:

`E:MUR|HA30|C:B|A:20|X:XC1|M3` was upserted into the dictionary from a
genuine wall item at some earlier obra. A beam item in 822.26 ("Formigó per a
bigues, HA-30/B/20/XC1...") computed the **identical** key and collided with
it, inheriting the wall's code (408). Root cause, in `parseja-amidaments.js`'s
`empremtaTecnica()` (the function that builds this structured key so two
different wordings of the same element share one dictionary entry):

1. **Missing Catalan plural forms.** Auditing all ten element keywords against
   their singular/plural, Catalan/Spanish forms found 7 of 10 only matched the
   Catalan *singular* (`llosa` but not `lloses`, `solera` not `soleres`,
   `sabata` not `sabates`, `escala` not `escales`, `pantalla` not `pantalles`,
   `jassera` not `jasseres`) or missed the Spanish plural (`muro` but not
   `muros`, `forjado` but not `forjados`) — despite plural being the more
   common phrasing in real amidaments. `VIGA` didn't recognise the Catalan
   word for beam at all (`biga`/`bigues`), only Spanish `viga`/`jácena`. When
   an element isn't recognised, the key falls back to the whole normalized
   text — defeating the fingerprint's purpose (two wordings of the same
   element no longer share a key) — or, worse:
2. **False-positive collision.** With `VIGA` not recognised, the beam item's
   *own* text ("...es formigonarà d'un sol cop tota l'alçada del **mur**...")
   contains "mur" later on, in generic filler boilerplate — not because it's
   about a wall. The old code searched the element keyword against the whole
   text with no positional preference, so this false match won and produced
   the wall's key.

Fixed both: every element keyword now covers singular+plural in both
languages, and detection now checks only the first clause (up to the first
comma — where the client reliably states the element: "Formigó per a
bigues,", "Hormigonado de muros de contención,") before ever falling back to
the full text.

Verified against a battery of real texts from this obra plus synthetic
plural/false-positive-collision cases (12 scenarios, including the exact bug
reproduction) — all pass. Pushed and diffed byte-for-byte against the live
node.

**Does not retroactively fix bad entries already in the table.** This
prevents new collisions of this kind; the known-bad `E:MUR|HA30|...` entry
(and any other pre-existing bad entries this audit didn't catch, since only
822.26's 218-row slice was sampled) still needs correcting from the n8n UI —
the MCP data-table surface exposes insert and column operations only, no
row-level read, update, or delete, so this could not be done from here.
**The user was advised against wiping the whole table**: it holds many
correct, valuable matches built up over time, and clearing it would force
every future obra back through slower/costlier AI matching for items already
known-good.

## Change 13: extended Change 12's fix to the height-supplement node

`detecta-suplements-alcada.js` turned out to carry the exact same two bugs
Change 12 fixed elsewhere:

1. It read `$('Assigna capitols')` (pre-enrichment), so any future AI-extracted
   height value would have been invisible to it, same as acer/mallat/gruix
   before Change 12. Fixed the same way — reads `$('Aplica enriquiment')` now.
2. Its family lookup (which of pilar/muro/forjado a base item belongs to, to
   pick the right height-supplement code) only checked `capitol_desc`/`capitol`
   — which real bases often leave generic ("ESTRUCTURAS"), exactly the bug
   fixed in `detecta-acer.js` in Change 11. Fixed the same way: check the
   item's own title (`c.resum`, which reliably says "EN MUROS H=<3MTS.") first,
   falling back to the chapter only if the title doesn't match.

Also added `alcada` (height, m) as a fifth field to the AI enrichment schema,
consistent with acer/mallat/gruix — the client's phrasing for "taller than
the base's default 3m" varies just as much as those. `detecta-suplements-
alcada.js` now prefers `r.alcada_ia` over its own regex, same pattern as the
other three detectors.

Verified with a standalone simulation using the real base's item 401
(`ENCOFRADO MURO 2C. RECTO NV H=<3M.`, chapter "ESTRUCTURAS") and item 417's
real supplement chain: family resolves via title fallback, and the AI/regex
height sources both feed through correctly.

## Change 12: connected the AI-enrichment layer to the nodes meant to use it

Prompted by the question "wouldn't AI handle these varying Excels better than
regex?" — the honest answer turned out to be that a substantial AI layer
already existed (added 2026-09-04, see Change 11's intro) and was already
extracting exactly this kind of thing (steel kg, mesh size, thickness, a short
disambiguation label) from free-form client text — but it was wired to the
wrong place, so `detecta-acer.js` / `detecta-mallat.js` / `detecta-espessor.js`
never actually saw its output.

**Root cause.** All three read `$('Assigna capitols')`, the node that runs
*before* AI enrichment. `r.acer_kg_ia`, `r.mallat_ia`, `r.gruix_cm_ia` and
`r.etiqueta_curta` are added later, by `Aplica enriquiment`. So every "prefer
the AI value, fall back to regex" comment in those three files was describing
dead code — the AI branch could never be taken, the fallback ran 100% of the
time. This is the real reason the Change 11 acer fix still needed a
keyword-matching fallback at all: the fix was correct, but the actually-working
AI classification sitting right there in the workflow was invisible to it.

**Fix, part 1 — rewire.** All three now read `$('Aplica enriquiment')` instead
(same rows, same order, with the AI fields present). One-line change per file.

**Fix, part 2 — give the AI the family question directly**, rather than
inferring family from free text at all. `prepara-enriquiment.js` gained a
fourth extraction task: for every standalone steel row, return its structural
family as one of a closed list (`PILAR`/`MURO`/`FORJADO`/`VIGA`/`CIMENTACION`/
`OTROS`). `Aplica enriquiment` validates the answer against that same list
(an unrecognized value, including `OTROS`, is dropped) and attaches it as
`r.familia_ia`. `detecta-acer.js` uses it as the primary signal, falling back
to the Change 11 keyword table only when a run never reached the AI. The
payload sent to the model also gained `capitol` — the client's own
chapter/subchapter ("Subcapítol Sostres i lloses") — which was available on
every row all along but was never actually sent; it's a far more reliable
signal than parsing a paragraph of free text, and lets the same mechanism
correctly cover Catalan chapter names the keyword table doesn't.

Verified against the real payload of execution #124 (obra 822.26): the AI's
own `etiquetes` output for that run already read `MUROS DE CONTENCIÓN`, `LOSAS`,
`VIGAS`, `PILARES`, `RASAS, POZOS Y ENCEPADOS` for the exact rows in question —
simulating `familia_ia` from that data correctly deduplicates all five
families, matching against the real base's chapters (408/310/70003/101/604).

**What this does and doesn't fix.** This connects the *existing* AI layer to
where it was always meant to feed — it is not a new capability, and it does
not remove the deterministic regex/keyword paths anywhere: every "Detecta ..."
node keeps its own extraction as a fallback for whichever rows the AI didn't
classify (or executions where enrichment didn't run at all — the `Cal enriquir`
gate can skip it), so behavior only improves, never regresses, relative to
Change 11. See the reply in this session for the fuller answer on which AI
layers already exist and where a genuinely new one would help.

## Change 11: five defects found in obra 822.26 (Hospital Sant Camil)

Reported against the BC3 of execution #124, cross-checked against the client's
Excel and the price base. All five are fixed and pushed; each node was re-fetched
from n8n afterwards and diffed byte-for-byte against the file here.

Note: this batch starts from commit `2ab0032`, which re-baselines every mirrored
node from the live workflow. The live workflow had drifted well ahead of this
repo (an AI-enrichment layer, a new `Detecta espessor` node and a reworked
`detecta-acer.js`, all pushed straight to n8n on 2026-09-04 and never committed).
**Always diff live-vs-repo before assuming this repo is current.**

1. **Steel injected again on top of a standalone steel item** (`detecta-acer.js`).
   The family keywords that detect "the client already bills this family's steel
   separately" were Spanish-only, but these clients write in Catalan: `murs` does
   not contain `muro`, `lloses` does not contain `losa`, `bigues`/`jàsseres`
   contain neither `viga` nor `jacena`. Only `pilar` and `fonament` matched by
   accident — which is exactly why columns and foundations deduplicated correctly
   while walls, slabs and beams did not, and 408.S1/408.S2/310.S1/310.S2/70003.S1
   all carried a spurious `0.0` at 2 kg. `FAMILY_MAP` now carries both spellings,
   with `FORJADO` ordered before `VIGA` (slab texts mention "jàsseres embegudes"
   in passing).

2. **Exposure class stuck at the base's value** (`detecta-suplements-formigo.js`).
   The client asked for XC2 and the title kept saying XC1. The relabel compared
   the client's classes against the *child material's* designation, but base item
   408 is titled `HA-25/B/20/XC1` while being built from `MA00.2.1`
   (`HORMIGÓN HA-25/B/20/XC2`) — so the comparison said "no difference" and the
   title was never touched. The relabel now compares against what the title itself
   says; cost supplements still compare against the material (neither XC1 nor XC2
   is in `EXP_GRUP`, they are designation only). This also replaces the previous
   XC1-only special case with a single rule covering every direction.

3. **Height supplements carried a real quantity** (`detecta-suplements-alcada.js`).
   417 went out with 923,285 m² and 611 with 19,323 m² — the parent formwork
   item's whole surface, inherited as if it had been measured. Supplements now
   always go out at 0, like the fixed ones. The computed area is still used, but
   only as the gate deciding whether the supplement applies at all; when the
   client has their own line for that supplement, `yaHiEs` already suppresses ours
   and their quantity stands.

4. **Base "optional" lines left at 0** (`genera-bc3.js`). Many base items ship
   lines at rendiment 0 as a menu the estimator resolves by hand — steel `0.0`,
   `FRATASADO MECÁNICO + CORTE JUNTAS`, `MOQUETA PROTECCIÓN`. They were emitted
   verbatim, so Presto showed lines with a blank quantity, and the contract text
   promised things the decomposition never priced: an `acero b500s ... Q=  kg/m3`
   with no number, and a mesh layer nobody had asked for. A new pass now resolves
   each one for every item: activated at 1 when the client's own description asks
   for it, removed — line *and* sentence — when it does not. Catalan "remolinat
   mecànic" counts as fratasado (confirmed with the user), and activating it also
   flips the title's `NO FRATASADO` and drops the matching `No incluye` line. The
   steel sentence is only removed when it carries the fillable `Q=` placeholder:
   the `-. Elaboración ... de acero B500S` that many bases list under `No incluye`
   is a legitimate exclusion and is left alone. Prices are recomputed by the same
   formula the injection path uses.

5. **Beam rows landing inside the wall item** — *not a code defect*. Client item
   `P4537-IMS0` ("Formigó per a bigues, HA-30/B/20/XC1") is mapped to base code
   `408` (muros) in the `diccionari_matches` data table, learned from an earlier
   obra; the row shows `confianca: DICCIONARI`, "Match apres en obres anteriors".
   The workflow is doing what the dictionary tells it. The fix is to correct that
   entry — either in the revision sheet on the next obra (which re-learns it) or
   by deleting the row in the n8n data table UI. The MCP surface exposes no
   row-level update or delete, so it was not changed from here.

## Change 10: recreated the missing `Detecta encofrat` node

Requested after Change 9 flagged it: `genera-bc3.js` had been reading `$('Detecta encofrat')`
for a client-specified formwork-quantity substitution since at least Change 5, but no node
by that name existed live (only the unrelated `Detecta encofrat vertit`) — the `try/catch`
around the call swallowed the "node not found" error, so the substitution was silent dead
code with no error or warning.

Recreated the node verbatim from this repo's `detecta-encofrat.js` (which had stayed
committed as an orphaned file, unreferenced by any live node, since whenever it was
originally dropped from the workflow): it extracts a real client-specified formwork
quantity (`X m2/m3`, with an `encofrat`/`encofrado` keyword nearby) from the client's Excel
text, keyed by `ordre`/`codi_base`, only emitting a row when a real quantity is found.
`genera-bc3.js` already knew how to consume this (`encofratQtyClient`) to substitute the
real number into the base's generic `"Q.estimada= X m2/m3"` placeholder instead of leaving
the generic default — that logic just never received any input before now.

Wired into the existing trigger chain as `Detecta acer` → `Detecta encofrat` → `Genera BC3`,
with `alwaysOutputData: true` set from the start (the same protection Change 5 had to add
retroactively to `Detecta encofrat vertit` after its missing setting silently broke the
whole chain) so an empty-output run (no client row mentions a real quantity) doesn't stop
`Genera BC3` from firing.

## Change 9: acer/mallat duplicate injection, and a workflow regression found in passing

1. **Acer injected twice when the client already itemizes it separately.** Requested: if
   the client's Excel already has an independent line item dedicated to acer for a given
   element family (e.g. a standalone "Acero B500S en muros" row, matched directly to the
   acer catalog code), the formación/vertido composite items of that same family
   (muros/pilares/forjados) must not also get acer injected into their own decomposition
   — it's already accounted for separately. Since the acer catalog code itself sits under
   a generic "ACERO" chapter (not a family-specific one), which family an independent acer
   line covers can only be read from the *client's own text* for that row — unlike a
   composite item, whose family comes from the base catalog's chapter (same pattern
   `detecta-suplements-alcada.js` already uses). `detecta-acer.js` now builds the set of
   families that already have an independent acer line, and skips injection for any
   composite/vertido item in one of those families. Validated with a synthetic scenario
   matching the user's own example (independent "Acero B500S en muros" line → both
   "Formación de muros" and "Vertido en muros" skip injection; an unrelated "Formación de
   pilares" item still gets it).

2. **Regression found while implementing the above, unrelated to this request**: the live
   `Detecta acer` and `Detecta mallat` nodes had reverted to earlier, simpler versions —
   missing the cement-dosage exclusion and `qty_client` output field (acer), and the
   wide-window Catalan-diameter parsing plus `a`/`b`/`d` output fields (mallat) — all
   previously built, validated, and shipped earlier in this same working session (see
   Change 2 and Change 3 below). `genera-bc3.js`'s real-quantity-substitution logic for
   both (`acerQtyClient`, `mallatMida`) silently degraded to always using the generic
   fallback text once these fields stopped being produced, with no error or warning.
   Restored both nodes from this repo's last-known-good committed version, merging the
   new acer family-dedup fix on top. Root cause unconfirmed — no changes from this session
   explain it, so it most likely happened via n8n's own workflow version history outside
   this repo's tracking. Worth keeping an eye on: if it recurs, the fix each time is to
   diff the live node against this repo's committed copy before assuming the repo is stale.

3. **Also surfaced, not fixed here**: `genera-bc3.js` reads a node called `Detecta
   encofrat` for a client-specified formwork-quantity substitution (`encofratQtyClient`)
   — that node did not exist in the live workflow (only the unrelated `Detecta encofrat
   vertit` did, which fills in missing encofrado/vertido sub-items, not quantities). This
   repo still had an orphaned `detecta-encofrat.js` file describing what that missing node
   used to do — it was apparently dropped from the live workflow without the caller in
   `genera-bc3.js` being updated, so that substitution had been silent dead code (the
   `try/catch` around `$('Detecta encofrat').all()` swallows the "node not found" error)
   since at least Change 5. Recreated in Change 10 below, once the user confirmed they
   wanted the functionality back.

## Change 8: height-supplement phrasing, XC1 exposure downgrade, and phantom "Pendents" rows

A batch of fixes requested together, covering formwork height supplements, concrete
exposure class, and two real jobs (825.26, 831.26) with data-quality problems.

1. **Height supplement (`detecta-suplements-alcada.js`) only recognized Spanish/ASCII
   phrasing.** `extreuAlcada` matched `"H<=Xm"`, `"hasta Xm"`, `"altura de Xm"` — but not
   Catalan (`"alçada"`, `"fins a"`) or the `≤` unicode comparison operator often pasted
   from Word. Real client text in either of those forms silently skipped the height
   supplement even when the working elevation required it. Broadened the regex to cover
   both languages and the unicode operator. Cross-checked against the live catalog
   (`base_partides`, 210 rows) that `pilar`/`muro`/`forjado` are the *only* families with
   a "Suplemento encofrado ... de 3 a Nm" SKU — so the family list itself needed no change.
2. **XC1 (a *downgrade* from the base's default XC2) was silently dropped**
   (`detecta-suplements-formigo.js`, `genera-bc3.js`). `EXP_GRUP` only mapped upgrade
   classes (XC3 and above) to a cost-supplement code; a client-requested XC1 matched
   nothing, so the title/Texto 1 kept showing the base's XC2. Added an explicit XC1 case:
   no cost supplement (there's nothing to buy, it's a plain relabel), but the title/text
   substitution now fires for it — and that substitution had to be pulled out of the
   `injOk`-only block in `genera-bc3.js`, since a pure relabel with no cost injection
   never set `injOk`. Validated with synthetic downgrade/no-op/upgrade/combined scenarios.
3. **Real hidden/junk rows contaminating "Pendents de classificar"** — audited on request
   for two live jobs:
   - **Obra 831.26** ("Mano de obra Hormigon.xlsx"): 324 of 335 pending rows were
     identical phantom entries (`ud="Spc0010"`, empty code/description, qty 0). Root
     cause: this file's own row-type marker column and its measurement-detail rows (the
     `Uts./Llargada/Amplada/Alçada` breakdown under each item, exactly like the TCQ/ITEC
     PDF format in Change 7) tag detail rows with an internal `"SpcNNNN"` code in the "ud"
     column — `parseExcelGroup`'s `mode3` classifier already special-cased that prefix in
     its NAT-column path, but not in the synonym/AI-assisted path, so any non-empty "ud"
     (including `"SpcNNNN"`) was promoted to a full phantom line item.
   - **Obra 825.26** ("26187_EST FORM.xlsx", a 3.69M€ multi-trade BRCAT rail-corridor
     budget): 637 of 2,117 pending rows were section-title rows (`codi_excel` =
     "Capítol"/"Obra elemental"/"Activitat", the literal row-type label, with the real
     title in `resum_excel` and a section index like `"01"` sitting in `ud`) — the mapped
     "ud" column being non-empty promoted these headings to phantom partides too. (The
     other ~1,480 pending rows there are genuine other-trade items — paving, electrical,
     signage — correctly priced at €0 and out of this company's scope; not a bug.)
   - Fix: `parseExcelGroup`'s `mode3` row classifier now recognizes both signals before
     falling back to the old "any non-empty ud ⇒ partida" rule — a `codigo` value that's
     exactly a known hierarchy-level label (Capítol/Capítulo/Obra elemental/Activitat/
     Actividad/Partida/Subcapítol) is always a chapter heading regardless of what's in
     "ud", and a `ud` value matching `/^spc\d/i` is always a detail row regardless of
     being non-empty. Chapter nesting for the label-based case is now tracked by level
     rank instead of string-prefix matching, since the same label repeats verbatim at
     every section of that level (unlike numeric/dotted codes, which do prefix-nest).
     Validated against the real raw rows from both executions (113 and 119).
   - **Secondary finding, not fixed here**: for 831.26, the AI column-detection step
     (`Detecta columnes IA`) answered `headerRow: 1` for a file with no real header
     row at all, pointing at the first genuine data row ("05.04") — that row is silently
     skipped as if it were a header, losing exactly one item per file. Lower priority
     than the phantom-row flood above (one item lost vs. hundreds of phantom ones); worth
     a follow-up prompt fix in `prepara-peticio-columnes-ia.js` if it recurs.
   - Also found, unrelated to this batch: `genera-bc3.js` reads `$('Detecta encofrat')`
     for a client-specified formwork quantity substitution, but no node by that name
     exists (only `Detecta encofrat vertit`, which is unrelated and does something else)
     — this has been dead code (always empty, silently caught by its own try/catch) since
     at least Change 5. Left as-is pending a decision on whether that substitution feature
     is still wanted; flagged to the user rather than guessing.

## Change 7: PDF total lines misread as new item codes (TCQ/ITEC format)

Reported: a real PDF upload (execution 117, a Catalan "amidaments" report in TCQ/ITEC
style) failed entirely with "no s'ha pogut llegir ni amb ajuda de la IA", even though
the AI column-detection step correctly identified the file as a valid budget report
(`confianca: "ALTA"`).

`parsePdfGroup` — a function duplicated identically in both `intenta-parseig-
determinista.js` (the first, fully deterministic attempt) and `parseja-amidaments.js`
(the AI-assisted fallback) — parses PDF text line by line, and closes off the current
item's quantity when it sees a line that is *only* a number (`reNumSol`). This report's
format never writes a bare number for an item's total: it always writes `"Total m³
......: 374,387"`. Two bugs compounded from that mismatch:

1. That line doesn't match `reNumSol`, so it fell through to the generic "new item"
   fallback regex, which greedily matched a trailing number in the line (e.g. the "387"
   in "...374,387") as if it were a brand-new item code. This left the *real* item with
   no total and no measurement lines at all — indistinguishable from a chapter/section
   header — so it silently became a phantom "chapter" instead of a real line item.
   Every item in the file was affected the same way, leaving **zero** real items
   detected and the whole file rejected as unreadable.
2. Separately, the line-deduplication filter (meant to strip repeated page
   headers/footers) was also discarding *legitimate* total lines whenever they happened
   to repeat identically — e.g. "Total U ......: 1,000" appears on 47 unrelated
   single-unit items in this file, tripping the "seen 5+ times, treat as noise" rule.
   This would have zeroed the quantity for those items even once bug 1 was fixed.

### Fix

Added a `reTotalLinia` pattern (`/^total\b[^:]*:\s*(-?[\d.,]+)\s*$/i`) that recognizes
this "`Total <ud> ......: <num>`" shape and correctly closes the current item's total,
and exempted it from the repeat-line dedup filter the same way `reNumSol` already was.
Applied identically to both `intenta-parseig-determinista.js` and
`parseja-amidaments.js`, keeping the shared function in sync as documented in both
files' comments.

Validated against the real extracted text of execution 117's PDF (3217 lines, 157
distinct "Total ...:" lines): before the fix, 0 items were found; after, all 157 parse
with correct, non-zero quantities matching every total line in the source, and the
file now parses fully deterministically (without even needing the AI-assisted
fallback this format previously required).

### Known remaining limitation (not fixed here)

While validating, a second, narrower issue surfaced: about 12 of the ~169 raw
line-groups in this same document get corrupted when a wrapped PDF line happens to
start with a number immediately followed by a short abbreviation that isn't a
recognized measurement unit — e.g. a line break lands as `"230 V de tensió, ..."`
(230 volts) or `"500 S, quantia ..."` (steel grade B500S), and the parser's generic
"code + description" fallback mistakes the number for a new item code. This corrupts
that one item (wrong code, wrong description, its real total attributed elsewhere)
and, since the real item never received the total that would mark it as "not a
chapter", it lingers as a phantom chapter heading that mislabels every subsequent
item's `cap_desc` until the next real item is detected. This is a pre-existing
heuristic limitation (not introduced by the fix above) affecting a small minority of
items in this specific file; a robust general fix would need validation against a
broader set of real PDFs (of varying layouts) to avoid regressing formats that
already parse correctly today, which wasn't available here. Flagged to the user as a
residual risk worth reviewing in the generated BC3 for this file.

## Change 6: sandbox-incompatible `zlib`, a blank line in Texto 1, and a bad AI sentinel value

Three issues found from real executions after change 5 shipped:

1. **`Module 'zlib' is disallowed` (execution 110).** n8n's Task Runner
   sandbox blocks *every* `require()` call, including Node's own built-in
   modules — not just third-party libraries as assumed when change 5 was
   written. `separa-fitxers.js`'s `zlib.inflateRawSync` call for
   decompressing ZIP entries broke the whole upload. Fixed by replacing it
   with a hand-written, dependency-free DEFLATE (RFC 1951) decoder
   (`inflateRaw`): bit-level reader, canonical Huffman table builder for
   both dynamic and fixed blocks, and stored-block passthrough. Validated
   byte-for-byte against `zlib.inflateRawSync` on all 53 real ZIP entries
   from two uploaded `.xlsx` files (including a 3.5MB stored entry) plus
   five synthetic edge cases (repetitive data, random binary, empty input,
   1-byte input) before shipping — the change-5 note below about using
   Node's built-in `zlib` is superseded by this.
2. **Blank line in "Texto 1" before the acer line (Presto screenshot).**
   When the client's steel quantity isn't known and the base item's own
   contractual text has no pre-existing acer placeholder, the fixed
   fallback phrase is appended with `text + '\n' + phrase`. Base catalog
   texts often already end in their own trailing `\r\n`, so this produced
   two consecutive line breaks — an empty line above the appended phrase.
   Fixed in `genera-bc3.js` (`inserirDinsIncluye`'s fallback branch and
   both acer-appending branches) by trimming trailing whitespace/newlines
   off the existing text before appending, so exactly one line break
   separates the last existing line from the new one. Validated against
   the exact reported scenario (item "101"'s base text + unknown client
   steel quantity + no existing placeholder) before shipping.
3. **"EST FOR.xlsx" failed to parse even with AI assistance (execution
   115).** The AI column-detection step (`Detecta columnes IA`) returned
   `codigo: -1` for a file whose "código" column had no explicit header
   text — even though its own stated reasoning correctly identified
   column 0 as the code/level column by position. `Parseja amidaments`'s
   existing range guard (`v >= 0`) correctly rejected the out-of-range
   `-1` and reported the file as unparseable, which is the right
   fail-safe behavior — but the AI should have reported `0`, not `-1`.
   Fixed by clarifying `REGLES_EXCEL` (the prompt in `prepara-peticio-
   columnes-ia.js`, node "Prepara peticio columnes IA"): the AI is now
   told explicitly to infer `codigo`'s column index from data
   position/content even without an explicit header — matching how it
   already does this for `ud`/`resumen`/`canpres` — and to never answer
   `-1` or any invented value for these four fields; when it genuinely
   can't identify a column, it should answer `es_amidaments=false`
   instead. No parsing logic changed — the existing guard against invalid
   indices was already correct.

## Change 5: read every sheet of an uploaded Excel, and a critical trigger-chain bug

Two issues from the same session:

1. **BC3 not generated at all.** The most recent execution stopped after
   "Desa diccionari" and never reached "Genera BC3"/"Envia BC3". Root cause:
   the new "Detecta encofrat" node (change 4) is the last link in a
   sequential trigger chain (`Detecta suplements formigo` → `Detecta
   mallat` → `Detecta acer` → `Detecta encofrat` → `Genera BC3`) — every
   other node in that chain has `alwaysOutputData: true` set specifically
   so the chain keeps firing even when a node finds nothing to report;
   the new node was missing it, so on a project where no row mentioned an
   explicit formwork quantity, it returned zero items and n8n never
   triggered `Genera BC3` at all. Fixed by setting `alwaysOutputData: true`
   on it, matching the rest of the chain.
2. **Only the first sheet of an uploaded Excel was ever read.** The form's
   own description used to instruct users to manually export each
   relevant tab as a separate .xlsx file, because `extractFromFile`
   (n8n's xlsx reader) only supports one sheet per call and there's no
   built-in "read all sheets" option. `separa-fitxers.js` now detects
   every sheet name in each uploaded .xlsx by reading the ZIP's
   `xl/workbook.xml` directly (originally via Node's built-in `zlib`; see
   change 6 below for why that had to be replaced with a pure-JS decoder)
   and expands each file into one item per sheet, each
   still carrying the same binary — exactly as if every sheet had been
   uploaded as its own file, which is what the rest of the pipeline
   (`Fitxers loop`, a Split-In-Batches loop; `Intenta parseig
   determinista`, which only knows how to parse one coherent table per
   loop iteration) already expects. `Llegeix amidaments` reads the right
   sheet via a `sheetName` expression sourced from that item. Any failure
   in sheet detection falls back to the old single-sheet behavior rather
   than breaking the upload. The form description was updated to drop the
   now-unnecessary manual-export instruction.

The sheet-detection and full item-expansion logic were validated locally
against both real uploaded files (1 sheet and 2 sheets) and against a
simulated dual-file upload, matching expected output exactly. The
critical-bug fix and the sheet expansion could not be end-to-end tested
through an actual form submission from here — worth a real upload check
after this lands.

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
