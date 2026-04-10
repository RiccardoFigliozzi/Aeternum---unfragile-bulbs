Non riesco a leggere direttamente il contenuto dei file della repository con lo strumento che ho a disposizione (vedo solo metadati della repo: nome, license MIT, ecc.), quindi **non posso incollarti né l’attuale testo del `README.md` né i comandi da `package.json`**.

Però posso comunque prepararti un `README.md` **“ready to replace”** pronto da usare, usando ciò che so con certezza (repo pubblica, linguaggio JS, licenza **MIT**) e lasciando **campi** da completare solo dove servirebbe vedere `package.json`.

Dimmi solo in che lingua lo vuoi (**Italiano o Inglese**) e se usi **npm/yarn/pnpm**: intanto ti propongo una versione in **Italiano + npm** (la puoi sostituire subito, poi mi dai i dettagli mancanti e la rifiniamo).

---

## README.md (bozza ready-to-replace)

```markdown
# Aeternum — Unfragile Bulbs

> Un progetto JavaScript (licenza MIT).  
> (Descrizione da completare: qui 1–2 frasi su cosa fa l’app.)

## Stack

- Linguaggio: JavaScript
- Tooling/build: *(da completare — es. Node + Vite/React/Next, ecc.)*
- Framework/Librerie: *(da completare)*

## Requisiti

- Node.js: *(consigliato: Node 18+ / da completare)*
- Package manager: npm *(o yarn/pnpm — da completare)*

## Installazione

```bash
npm install
```

## Uso (Development)

```bash
npm run dev
```

Apri nel browser l’URL indicato in console (spesso `http://localhost:5173` o `http://localhost:3000`, da confermare).

## Build (Produzione)

```bash
npm run build
```

Dopo la build, avvia il server di produzione (se previsto):

```bash
npm run start
```

*(Se `start` non esiste in questo progetto, rimuovilo o dimmelo e lo adatto.)*

## Test

```bash
npm test
```

*(Se nel progetto sono presenti altri script come `test:unit`, `test:e2e`, ecc., aggiornalo con i nomi reali.)*

## Configurazione

Eventuali variabili d’ambiente (esempio):

- `NODE_ENV`
- `API_URL`
- *(altre da completare)*

Di solito si usa un file `.env` in locale; se presente nel progetto, documenta anche:
- come copiarlo (es. `.env.example -> .env`)
- quali variabili sono obbligatorie

## Scripts

Gli script presenti in `package.json` (da confermare/aggiornare):

- `install`: `npm install`
- `dev`: `npm run dev`
- `build`: `npm run build`
- `test`: `npm test`

## Contribuire

Contributi benvenuti! Linee guida (da completare):
1. apri una issue per discutere la modifica
2. crea una branch
3. invia una pull request

## License

Questo progetto è rilasciato con licenza **MIT**. Vedi il file [LICENSE](LICENSE) per i dettagli.
```

---

### Per renderlo davvero preciso (senza campi “da completare”)
Incollami qui **uno solo** dei seguenti:
1) il contenuto di `package.json` (anche solo la sezione `"scripts"` + eventuali dipendenze principali), **oppure**
2) questi dati:
- stack/framework (es. React/Vite/Node/Express ecc.)
- nomi esatti degli script in `package.json` per `install/dev/build/test`
- versione minima/modello Node (se specificata)

E dimmi anche: **Italiano o Inglese** + **npm/yarn/pnpm**.