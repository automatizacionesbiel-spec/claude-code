# Bot que juga sol (batalles amistoses i Camp d'entrenament)

> **Ús acordat:** només contra un altre compte teu (batalla amistosa) o al Camp
> d'entrenament. El bot **no prem mai el botó de Batalla**: tu obres la partida i ell
> la juga. El risc per al compte l'assumeixes tu.

Un iPhone no es pot controlar des de l'ordinador sense jailbreak. Per això el bot funciona
al teu **ordinador HP (Windows)** amb un **emulador d'Android** i **ADB**.

## Com pensa

Cada ~0,3 s fa una captura de l'emulador i segueix tres passos:

1. **Veu**
   - **Elixir**: compta els segments liles de la barra.
   - **Mà**: reconeix les 4 cartes comparant-les amb les imatges oficials del teu mazo.
   - **Unitats**: troba les barres de vida vermelles (rival) i blaves (teves). Ignora les torres.
2. **Decideix**, amb aquestes prioritats:
   1. **Defensa** el que creua el riu.
      - Encanteri petit si hi ha 3 o més unitats juntes, i gran si n'hi ha 4 o més.
      - Un edifici al centre per desviar-les, o la tropa adequada entre l'amenaça i la torre.
      - No hi posa més elixir si ja hi té prou tropes defensant.
   2. **Contraatac**: hi afegeix la condició de victòria darrere les tropes que han defensat.
   3. **Atac**: llança la condició de victòria pel pont quan li queda elixir per defensar-se. Ataca el carril contrari al de l'última empenta del rival.
      - Els tancs pesats (Golem, Giant...) els posa des del darrere.
      - El Miner, el Goblin Barrel i el Graveyard van directes a la torre.
   4. **No desaprofita elixir**: amb 10 d'elixir juga la carta més barata des del darrere.
   5. **Final de partida**: si no hi ha amenaces, llança els encanteris grans a la torre.
3. **Actua**: arrossega la carta fins a la casella triada amb `adb shell input swipe`.

Si li passes les dades del coach (`--meta data/meta.json`) i fas servir un detector entrenat
(`--model`), sap quina carta ve i tria el counter amb què guanyen els millors jugadors.

## Instal·lació a Windows (un sol cop)

1. **Emulador**: instal·la [LDPlayer 9](https://www.ldplayer.net) o BlueStacks 5.
   - A LDPlayer: *Configuració → Avançat → Resolució: Mòbil 900×1600*.
     A *Altres → Depuració ADB: Connexió local*.
   - A BlueStacks: *Configuració → Avançat → Android Debug Bridge: activat*. Apunta el port (p. ex. `127.0.0.1:5555`).
2. Instal·la **Clash Royale** a l'emulador des de Play Store i entra amb el **compte de proves**.
3. Instal·la **Python 3.11 o superior** des de python.org. Marca "Add python.exe to PATH".
4. Descarrega **ADB**: [Android platform-tools](https://developer.android.com/tools/releases/platform-tools).
   Descomprimeix-lo a `C:\platform-tools` i afegeix aquesta carpeta al PATH.
   Les carpetes de LDPlayer i BlueStacks també porten `adb.exe`.
5. A PowerShell, dins de la carpeta `clash-royale-coach`:

```powershell
pip install -r requirements-bot.txt
$env:CR_API_TOKEN = "el_teu_token"        # el mateix del coach (README.md)
python -m crbot connect 127.0.0.1:5555     # el port del teu emulador
python -m crbot devices                    # ha d'aparèixer l'emulador
python -m crbot setup "#TAG_DEL_COMPTE_DE_PROVES"
```

`setup` desa el mazo actual del compte i baixa les imatges de les 8 cartes.
**Si canvies de mazo, torna a fer `setup`.**

## Calibratge (important per a la precisió)

Cada emulador i resolució col·loca la interfície una mica diferent. Fes-ho així:

1. Obre el Camp d'entrenament i, amb la partida en marxa, executa:
   ```powershell
   python -m crbot calibrate
   ```
2. Obre `calibratge.png`. Hi ha de quadrar:
   - **Quadrícula gris**: 18×32 caselles sobre el camp. Les línies taronja marquen el riu.
   - **Caixes verdes**: les 4 cartes de la mà, amb el nom reconegut i una puntuació de 0 a 1.
   - **Caixa lila**: la barra d'elixir, amb el valor llegit.
   - **Cercles vermells i blaus**: les unitats detectades.
3. Si alguna cosa no quadra, edita `bot/config.json` i repeteix. Els valors són fraccions de la pantalla: `0.5` és la meitat.
   - `arena`: la zona del camp.
   - `hand_slots`: les 4 cartes de la mà.
   - `elixir_bar`: la barra d'elixir.
4. Si una carta es reconeix malament, executa `python -m crbot calibrate --save-crops` durant la partida.
   Després mou cada retall de `bot/templates/_retalls/` a la carpeta de la seva carta (p. ex. `bot/templates/Hog Rider/`).
   Amb captures reals la precisió puja molt.

## Jugar

```powershell
# 1) Primer, en mode prova: mostra què faria però no toca la pantalla
python -m crbot run --dry-run

# 2) De veritat, 5 batalles, fent servir el que fan els top jugadors
python -m crcoach meta collect
python -m crbot run --battles 5 --meta data/meta.json
```

Inicia tu la batalla amistosa o el Camp d'entrenament. El bot la detecta quan veu les teves cartes,
juga fins al final i torna a esperar la següent. Atura'l amb `Ctrl+C`.

## Arribar al màxim nivell: detector entrenat

El detector per colors sap **on** hi ha unitats, però no **quines** són: no distingeix l'aire de terra
ni un Golem d'uns Skeletons. Per a la màxima precisió, entrena un model YOLO:

1. Grava partides: `python -m crbot run --record gravacions/` (desa cada captura i el que ha vist i fet).
2. Etiqueta les unitats en unes 300–1.000 captures amb [Roboflow](https://roboflow.com) o LabelImg.
   Fes servir classes amb el format `enemy_Hog Rider`, `ally_Knight`...
3. Entrena: `pip install ultralytics` i `yolo detect train data=dataset.yaml model=yolov8n.pt imgsz=960`.
4. Juga amb el model: `python -m crbot run --model runs/detect/train/weights/best.pt --meta data/meta.json`.

Per provar canvis d'estratègia sense jugar, fes servir les captures gravades:
`python -m crbot replay gravacions/ --out replay/`.

## Limitacions actuals

- Les posicions per defecte són aproximades: **cal calibrar**.
- Sense model entrenat, el bot no sap quina carta és cada unitat. Decideix per posició, quantitat i rol de les seves cartes.
- No llegeix la vida de les torres ni porta el compte de les cartes del rival.
- No juga cartes Mirror ni gestiona habilitats de campions.
