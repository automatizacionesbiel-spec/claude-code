# WF1 v2 - Pressupost obra (en construccio)

Mirror of the two n8n Code nodes touched by this change, from the n8n workflow
`WF1 v2 - Pressupost obra (en construccio)` (id `g5iFfCho11pcyVAm`). The live
workflow is edited directly in n8n; these files are kept here as a readable,
version-controlled copy of what was changed and why.

## Change: correct concrete ("formigó") supplement handling

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
