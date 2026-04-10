Posso aiutarti a migliorare `README.md`, ma per farlo **aderente al progetto** (e non con placeholder) mi serve poter vedere i contenuti reali.

✅ Ho recuperato solo i metadati della repo (es. nome, licenza MIT), però **non mi basta** per scrivere:
- descrizione “vera” del progetto
- script esatti `dev/build/test` da `package.json`
- eventuale struttura (entrypoint, cartelle) da `tree`

### Quello che ti chiedo (incollami qui)
1) **contenuto di `package.json`**
2) (facoltativo ma consigliato) output di:
```bash
tree -L 2
```

---

## Intanto: miglioramento “pulito e generico” pronto da incollare
Puoi già sostituire il README attuale con questo (senza inventare comandi non verificati):

```md
# Aeternum — Unfragile Bulbs

Aeternum è un progetto JavaScript pensato per imparare e allenare lo sviluppo del codice e l’organizzazione del repository.

## Obiettivo
- (Aggiungi qui 1–2 frasi su cosa fa il progetto e a cosa serve)
- Esempio: “permette di …”, “serve per …”, “include …”

## Prerequisiti
- Node.js (consigliata versione **LTS**)
- npm (o in alternativa yarn/pnpm)

## Setup
```bash
git clone https://github.com/RiccardoFigliozzi/Aeternum---unfragile-bulbs.git
cd Aeternum---unfragile-bulbs
npm install
```

## Come avviare il progetto
> Aggiornerò questa sezione con i comandi esatti appena mi incolli `package.json`.

- **Sviluppo:** `npm run <dev>`  
- **Build:** `npm run <build>`  
- **Test:** `npm test` oppure `npm run <test>`

## Come funziona
Descrivi qui, in modo breve:
- cosa viene eseguito al lancio
- qual è il punto di ingresso (entry point)
- che output/risultato ci si aspetta (console, pagina, ecc.)

## Struttura del progetto (opzionale)
> Se mi incolli `tree -L 2`, la completo in modo accurato.

- `src/` — (descrivi)
- `public/` — (descrivi)
- `...`

## Contribuire
1. Apri una **Issue** per discutere l’idea o un bug
2. Crea una **Pull Request** spiegando:
   - cosa hai cambiato
   - perché
   - come hai verificato (test/build)

## Licenza
Questo progetto è rilasciato con licenza **MIT**.
```

---

Incollami ora **`package.json`** (e se puoi anche `tree -L 2`) e ti restituisco una versione README **completa e corretta**, con comandi `dev/build/test` effettivi e descrizione basata sul codice.