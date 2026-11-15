# Continuació del projecte: bot de Clash Royale

Aquest document resumeix la conversa i l'estat del projecte, per poder continuar en una altra
sessió de Claude (al teu HP o on sigui).

- **Codi:** carpeta `clash-royale-coach/` del repositori `automatizacionesbiel-spec/claude-code`.
- **Branca:** `claude/eloquent-planck-0fzob7`.
- **Pull request (esborrany):** https://github.com/automatizacionesbiel-spec/claude-code/pull/1
- També tens el ZIP `clash-royale-coach.zip` amb tots els fitxers.

## 1. Resum de la conversa

1. **Petició inicial:** un bot "definitiu" per jugar a Clash Royale com els millors del món,
   fent servir RoyaleAPI.
2. **Primera resposta:** l'API oficial i RoyaleAPI només donen dades (perfils, batalles,
   rànquings), no permeten jugar. Es va crear primer un **coach** (`crcoach`) que estudia els top
   jugadors i analitza el compte de l'usuari.
3. **L'usuari va demanar que el bot jugués sol.** Va dir que acceptava el risc de bloqueig en un
   compte nou. Claude no va acceptar un bot que jugui contra altres persones (ladder o Path of
   Legends). Va proposar un bot limitat a partides on no hi ha ningú més perjudicat.
4. **Acord:** el bot **només s'utilitza en batalles amistoses contra un altre compte de l'usuari o
   al Camp d'entrenament**. El bot no prem mai el botó de Batalla: la partida la inicia l'usuari.
5. **Equip de l'usuari:** ordinador HP (Windows) i iPhone. Com que un iPhone no es pot controlar
   sense jailbreak, el bot funciona a l'HP amb un **emulador d'Android** (LDPlayer o BlueStacks)
   controlat per **ADB**.
6. Es va crear el bot (`crbot`) i la guia `BOT.md`.
7. L'usuari va demanar que Claude ho instal·lés tot prenent el control de l'ordinador. Aquella
   sessió funcionava al núvol i no hi tenia accés. Per això es va preparar aquest document per
   continuar en una sessió que funcioni a l'HP.

## 2. Què hi ha fet

### `crcoach` — coach amb l'API (Python estàndard, sense dependències)

| Ordre | Funció |
|---|---|
| `python -m crcoach meta collect` | Descarrega les batalles dels top 100 de Path of Legends → `data/meta.json` |
| `python -m crcoach meta show` | Millors mazos i cartes dels top (taxa de victòria amb interval de Wilson) |
| `python -m crcoach analyze "#TAG"` | Anàlisi del jugador: mazos, cartes nèmesi, nivells i consells |
| `python -m crcoach recommend "#TAG"` | Mazos dels top que pots jugar amb les teves cartes |
| `python -m crcoach counter "Hog Rider, Fireball"` | Amb què guanyen els top contra aquestes cartes |

Necessita `CR_API_TOKEN`: una clau de https://developer.clashroyale.com amb la IP `45.79.218.79`
(el proxy de RoyaleAPI) a la llista blanca.

### `crbot` — bot que juga sol (Python + OpenCV + ADB)

| Fitxer | Funció |
|---|---|
| `crbot/device.py` | Control de l'emulador per ADB: captura, toc i arrossegament |
| `crbot/vision.py` | Elixir (segments liles), cartes de la mà (plantilles), unitats (barres de vida vermelles i blaves) |
| `crbot/strategy.py` | Decisions: defensa → contraatac → final de partida → atac → evitar perdre elixir |
| `crbot/bot.py` | Bucle veure → decidir → actuar. Detecta l'inici i el final de batalla; mode de prova i gravació |
| `crbot/arena.py` | Geometria del camp (18×32 caselles): ponts, centre, torres |
| `crbot/cards.py` | Tipus i rols de les cartes |
| `crbot/config.py` | Posicions de la pantalla (fraccions) i paràmetres → `bot/config.json` |
| `crbot/yolo.py` | Detector YOLO opcional, per saber quina carta és cada unitat |
| `crbot/cli.py` | Ordres `setup`, `devices`, `connect`, `calibrate`, `run`, `replay` |

**Tests:** `python -m unittest discover -s tests`. Són 45 tests i passen tots. Fan servir captures
sintètiques i dades simulades: **encara no s'ha provat amb el joc real ni amb l'API real.**

## 3. Què falta (per ordre)

1. [ ] Instal·lar a l'HP: Python 3.11 o superior, Git i les Android platform-tools (ADB).
       Després, `pip install -r requirements-bot.txt`.
2. [ ] Instal·lar LDPlayer 9 amb la resolució "Mòbil 900×1600" i la depuració ADB activada.
       També serveix BlueStacks 5 amb ADB activat.
3. [ ] *(L'usuari)* Instal·lar Clash Royale a l'emulador i entrar amb el **compte de proves**.
4. [ ] *(L'usuari)* Crear la clau de l'API a developer.clashroyale.com amb la IP `45.79.218.79`.
       Després, `$env:CR_API_TOKEN = "..."`.
5. [ ] `python -m crbot connect 127.0.0.1:5555` i després `python -m crbot devices`.
6. [ ] `python -m crbot setup "#TAG_COMPTE_PROVES"`, que baixa el mazo i les imatges de les cartes.
7. [ ] Obrir el Camp d'entrenament, executar `python -m crbot calibrate` i revisar `calibratge.png`.
       Ajustar `bot/config.json` fins que quadri: `arena`, `hand_slots` i `elixir_bar`.
       Comprovar també els colors HSV de l'elixir i de les barres de vida.
8. [ ] `python -m crbot calibrate --save-crops` i moure els retalls a `bot/templates/<Carta>/`.
9. [ ] `python -m crbot run --dry-run`: comprovar que les decisions tenen sentit.
10. [ ] `python -m crcoach meta collect` i després `python -m crbot run --battles 5 --meta data/meta.json`.
11. [ ] Per a la màxima precisió: gravar partides (`run --record gravacions/`), etiquetar-les i
        entrenar YOLO (`--model`). Els passos són a `BOT.md`.

Limitacions conegudes:
- Les posicions de la pantalla per defecte són aproximades.
- Sense YOLO, el bot no sap quina carta és cada unitat.
- No llegeix la vida de les torres.
- No juga Mirror ni habilitats de campions.

## 4. Text per començar una nova sessió de Claude

Copia això al principi de la nova conversa, a l'HP (Claude Code o l'aplicació d'escriptori):

```
Continuo un projecte: un coach i un bot de Clash Royale a la carpeta clash-royale-coach/
(repo automatizacionesbiel-spec/claude-code, branca claude/eloquent-planck-0fzob7).
Llegeix primer clash-royale-coach/CONTINUACIO.md i clash-royale-coach/BOT.md.
Acord d'ús: el bot només juga batalles amistoses contra un altre compte meu o el Camp
d'entrenament, i no inicia mai batalles. Estic a un HP amb Windows. Fes la secció
"Què falta" començant per la instal·lació. Avisa'm quan calgui que faci jo alguna cosa
(iniciar sessió, acceptar instal·ladors, obrir la partida).
```
