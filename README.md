Ecco una versione migliorata e più “leggibile/pronta all’uso” del tuo `README.md`, mantenendo **placeholder solo dove servirebbe verificare** (es. framework/comandi e struttura). Puoi incollarla direttamente in `README.md`:

```md
# Aeternum — Unfragile Bulbs

Progetto web in **JavaScript**.

> Repo: **RiccardoFigliozzi/Aeternum---unfragile-bulbs**

---

## Panoramica

**Aeternum — Unfragile Bulbs** è un progetto per:
- descrivere in 1–2 frasi cosa fa l’app
- [es. simulare / visualizzare / gestire …]

**A chi è rivolto:**
- [studenti, appassionati, progetto scolastico, ecc.]

Se disponibile, aggiungi:
- screenshot o GIF
- link a una demo/preview

---

## Funzionalità

- [Funzionalità 1]
- [Funzionalità 2]
- [Funzionalità 3]

---

## Tecnologie

- **Linguaggio:** JavaScript
- **Tooling/Framework:** [da verificare]
- **Test:** [da verificare]

> Nota: per rendere questa sezione **100% specifica** (senza placeholder) servono i dettagli su `package.json` e la struttura delle cartelle.

---

## Prerequisiti

- **Node.js** (consigliata: `>= 18`)
- **npm** (oppure yarn/pnpm)

Verifica:
```bash
node -v
npm -v
```

---

## Installazione

```bash
npm install
```

---

## Avvio in sviluppo

I comandi dipendono dagli script definiti nel `package.json`.

Prova:
```bash
npm run dev
```

Se non funziona nel tuo ambiente, prova:
```bash
npm start
```

---

## Build (produzione)

```bash
npm run build
```

Se prevista una preview locale:
```bash
npm run preview
```

---

## Test

```bash
npm test
```

Se lo script non è presente in `package.json`, potrebbe non essere configurato un framework di test.

---

## Struttura del progetto

Questa sezione descrive le cartelle principali.  
Per una versione accurata (senza assunzioni) servirebbe l’output di:
- `tree -L 2`

Esempio (da adattare):
- `src/` — sorgenti dell’app
- `public/` — asset statici (se presenti)
- `tests/` o `__tests__/` — test (se presenti)
- file di config (es. `vite.config.*`, `next.config.*`, ecc.)

---

## License

Questo progetto è distribuito con **MIT License**.

---

## Contribuire

Contributi benvenuti! Se vuoi migliorare il progetto:
1. Apri una **issue** per discutere la modifica
2. Invia una **pull request** con una descrizione chiara

---

## Contatti

- Autore: **RiccardoFigliozzi**
```

Se vuoi che lo renda **specifico al 100%** (framework e comandi esatti per `dev/build/test`), dimmi/manda:
1) contenuto di `package.json`
2) output di `tree -L 2`