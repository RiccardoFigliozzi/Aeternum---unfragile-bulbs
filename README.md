Ecco una versione migliorata e “pronta da sostituire” del `README.md` (Italiano, stile pulito, sezioni complete). **Non posso ancora renderla 100% precisa sui comandi** senza leggere `package.json` (in particolare `"scripts"`), quindi ho lasciato solo le parti che probabilmente vanno confermate da quel file (URL dev, eventuale `start`, eventuali test script, ecc.).

> Se vuoi, incolla qui la sezione `"scripts"` di `package.json` e te lo adatto al 100% (con gli script esatti).

```markdown
# Aeternum — Unfragile Bulbs

Un progetto JavaScript rilasciato con licenza **MIT**.  
*(Aggiungi qui 1–2 frasi che descrivano cosa fa l’app e qual è il suo obiettivo.)*

## Caratteristiche

- *(Descrivi 2–4 punti: es. interfaccia web, gestione asset/dati, modalità dev/prod, ecc.)*
- *(Aggiungi eventuali feature principali.)*

## Stack

- **Linguaggio:** JavaScript
- **Librerie/Framework:** *(da confermare in base a package.json — es. Vite/React/Next, ecc.)*

## Prerequisiti

- **Node.js:** *(consigliato Node 18+ — da confermare se indicato nel progetto)*
- **Package manager:** npm *(oppure yarn/pnpm — da confermare)*

## Installazione

```bash
npm install
```

## Sviluppo (Development)

```bash
npm run dev
```

Apri nel browser l’URL indicato in console (tipicamente `http://localhost:5173` o `http://localhost:3000`).  
*(Confermare l’URL esatto.)*

## Build (Produzione)

```bash
npm run build
```

Se previsto dal progetto, avvia il server di produzione con:

```bash
npm run start
```

> Nota: se `start` **non** esiste nel tuo `package.json`, rimuovi questa sezione o dimmelo e la adatto.

## Test

```bash
npm test
```

*(Se nel progetto esistono script alternativi come `test:unit`, `test:e2e`, ecc., vanno indicati qui.)*

## Configurazione (se presente)

Se l’app usa variabili d’ambiente, spesso vengono gestite tramite file `.env`.

- Variabili tipiche:  
  - `NODE_ENV`
  - *(altre — da confermare)*

Se esiste un file template (es. `.env.example`), aggiungi anche:
1. come copiarlo in `.env`
2. quali variabili sono obbligatorie

## Script disponibili

Gli script presenti in `package.json` *(da confermare/aggiornare se necessario)*:

- `dev`: `npm run dev`
- `build`: `npm run build`
- `test`: `npm test`

*(Se esistono altri script utili, includili qui.)*

## Contribuire

1. apri una issue per discutere la modifica
2. crea una branch
3. invia una pull request

## License

Questo progetto è rilasciato con licenza **MIT**.  
Vedi il file [LICENSE](LICENSE) per i dettagli.
```

Vuoi che lo renda **perfettamente accurato**? Incollami qui solo:
- la sezione `"scripts"` di `package.json`

e dimmi anche se preferisci **Italiano** o **Inglese** (ora è in Italiano).