Perfetto — ho recuperato la repository **`RiccardoFigliozzi/Aeternum---unfragile-bulbs`**. Con i soli tool disponibili in chat, però, non mi è attualmente possibile leggere direttamente i file interni (tipo `README.md` attuale, `package.json`, struttura cartelle, ecc.). Quindi non posso ancora adattare il README ai **comandi reali** e alla **descrizione precisa** del progetto.

Detto questo, posso comunque migliorare subito il README rendendolo più chiaro, completo e “pronto” da rifinire appena mi incolli `package.json` (e se vuoi anche `tree`).

Incolla qui:
1) il contenuto di **`package.json`**  
2) (facoltativo) l’output di **`tree -L 2`** oppure l’elenco delle cartelle principali

…e poi ti restituisco una versione 100% aderente.

Intanto, qui sotto trovi una **versione migliorata** (pulita e pronta da usare) che aggiorna la tua bozza, mantenendo i punti da completare minimi.

```md
# Aeternum — Unfragile Bulbs

Un progetto JavaScript per esplorare e allenare lo sviluppo del codice e l’organizzazione del repository.

> **Da completare (1-2 frasi):** descrivi qui cosa fa “concretamente” l’app (es. “serve per …”, “permette di …”, “include …”).

## Caratteristiche
- Linguaggio: **JavaScript**
- Struttura pensata per essere estendibile
- (Da completare) Funzionalità principali:
  - `...`

## Prerequisiti
- Node.js (consigliata versione **LTS**)
- npm (o yarn/pnpm)

## Installazione e avvio

1. Clona la repository
   ```bash
   git clone https://github.com/RiccardoFigliozzi/Aeternum---unfragile-bulbs.git
   ```

2. Entra nella cartella
   ```bash
   cd Aeternum---unfragile-bulbs
   ```

3. Installa le dipendenze
   ```bash
   npm install
   ```

4. Avvia in sviluppo
   ```bash
   npm run dev
   ```
   Se `dev` non esiste, prova:
   ```bash
   npm start
   ```

> Nota: i comandi possono variare in base a come è configurato il progetto.  
> **Appena mi incolli `package.json` aggiornerò questa sezione con comandi esatti (dev/build/test).**

## Comandi utili
- **Sviluppo:** `npm run dev`
- **Build:** `npm run build` *(se presente in `package.json`)*
- **Test:** `npm test` *(se presente in `package.json`)*

## Struttura (opzionale)
(Se vuoi, incolla qui una breve guida. Esempio:)
- `src/` — codice sorgente
- `public/` — risorse statiche
- `...`

## Contribuire
1. Apri una **Issue** per discutere modifiche/feature
2. Crea una **Pull Request** con una descrizione chiara di cosa hai cambiato

Linee guida suggerite:
- mantieni il codice leggibile
- aggiorna test e documentazione se applicabile

## Licenza
Questo progetto è rilasciato con licenza **MIT**.
```

Quando mi incolli **`package.json`**, lo adeguo con:
- descrizione reale del progetto (basata su entry point e script)
- sezione “Come funziona” (se c’è un comportamento evidente)
- comandi esatti per `dev`, `build`, `test`
- eventuali variabili d’ambiente da impostare