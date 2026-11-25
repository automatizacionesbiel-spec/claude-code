# Clash Royale Coach

Un coach que aprèn dels **millors jugadors del món** i t'ajuda a jugar com ells.
Fa servir l'API oficial de Clash Royale a través del **proxy de RoyaleAPI**.

El projecte té dues parts:

- **`crcoach`** (aquest document): analitza els top jugadors i el teu compte amb l'API.
- **`crbot`** ([BOT.md](BOT.md)): un bot que juga sol a les batalles amistoses i al Camp
  d'entrenament, en un emulador d'Android. Fa servir les dades del coach per jugar com els millors.

## Què fa

| Ordre | Què et diu |
|---|---|
| `meta collect` | Descarrega les últimes batalles dels top 100 de Path of Legends (global o per país). |
| `meta show` | Millors mazos del moment i cartes més usades pels top, ordenats per taxa de victòria **fiable** (interval de Wilson, no s'enganya amb mostres petites). |
| `analyze #TAG` | Analitza les teves batalles: mazos, cartes "nèmesi" que et guanyen, si perds per nivell de cartes, revisió del mazo actual i consells concrets. |
| `recommend #TAG` | Els mazos dels top que **pots jugar amb la teva col·lecció**, ajustats pels teus nivells, quines cartes pujar primer i quines evolucions fan servir. |
| `counter "Carta, Carta"` | Contra un mazo rival: quines cartes i mazos fan servir els top per guanyar-lo. |

## Configuració (5 minuts)

1. Crea un compte a <https://developer.clashroyale.com> i fes **Create New Key**.
2. A *Allowed IP addresses* posa la IP del proxy de RoyaleAPI: **`45.79.218.79`**
   (així funciona des de qualsevol ordinador, sense dependre de la teva IP).
3. Copia el token i exporta'l:

```bash
export CR_API_TOKEN="eyJ0eXAiOiJKV1Qi..."
```

Només cal Python 3.10 o superior; no hi ha dependències.

> Si prefereixes anar directament a l'API oficial: posa la teva IP pública a la clau i
> `export CR_API_BASE=https://api.clashroyale.com/v1`.

## Ús

```bash
cd clash-royale-coach

# 1) Aprèn dels millors (uns 100 jugadors, ~2.500 partides; triga ~1 minut)
python -m crcoach meta collect --players 100
python -m crcoach meta show

# Meta d'un país (p. ex. Espanya = 57000218)
python -m crcoach --data data/meta-es.json meta collect --location 57000218

# 2) Analitza't
python -m crcoach analyze "#TEU_TAG"

# 3) Quin mazo hauria de jugar?
python -m crcoach recommend "#TEU_TAG"

# 4) Em destrossen amb Hog + Fireball, què hi faig?
python -m crcoach counter "Hog Rider, Fireball, The Log" --min-match 2
```

Els noms de carta poden ser aproximats (`hog`, `the log`, `firebal`).
Torna a fer `meta collect` cada pocs dies: el meta canvia amb cada actualització de balanç.

## Com funciona

- **Dades**: `/locations/{id}/pathoflegend/players` (amb el rànquing de trofeus com a alternativa)
  i `/players/{tag}/battlelog` de cada top. Cada partida compta per als dos costats,
  i si dos top s'han enfrontat la partida no es duplica.
- **Filtres**: només 1v1 amb mazo propi (fora 2v2, draft, mirall i amistoses).
  Per al meta, per defecte només Path of Legends i Ladder (`--all-types` per incloure-ho tot).
- **Rànquing**: límit inferior de Wilson al 95%. Un mazo amb 6V-2D no supera un de 60V-30D.
- **Nivells**: es comparen com a "nivells per sota del màxim". Així no importa la raresa.
- **Recomanació**: `puntuació = Wilson − 0,03 × nivells que et falten de mitjana`.

## Tests

```bash
python -m unittest discover -s tests -v
```
