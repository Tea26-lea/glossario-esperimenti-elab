# Glossario Esperimenti · ELAB Tutor

Prototipo interattivo che raccoglie e cataloga **tutti i 92 esperimenti** dei 3 volumi di [ELAB Tutor](https://elabtutor.school), il simulatore di elettronica e Arduino per la scuola.

## Che cos'è

Un catalogo sfogliabile dei 92 esperimenti divisi in:

- **📗 Volume 1 — Le Basi** (38 esperimenti): batteria 9V, niente Arduino. LED, pulsanti, potenziometri, sensori di luce, reed switch, plastilina conduttiva, il primo robot.
- **📘 Volume 2 — Approfondiamo** (27 esperimenti): multimetro, resistenze in serie/parallelo, batterie, condensatori, MOSFET, fototransistor, motori DC, Robot Segui Luce.
- **📙 Volume 3 — Arduino** (27 esperimenti): primo programma, pin digitali, pin analogici, Serial Monitor, più extra (LCD, Servo, Simon Says).

## Funzionalità

- **Filtri per volume**: tab "Tutti i Volumi" / "Volume 1" / "Volume 2" / "Volume 3" con conteggio live.
- **Ricerca in tempo reale**: cerca per titolo, descrizione, id o capitolo. Evidenzia i match in giallo.
- **Raggruppamento per capitolo**: all'interno di ogni vista, gli esperimenti sono raggruppati per capitolo come nel libro fisico.
- **Metadata per esperimento**: icona tematica, difficoltà (facile/medio/avanzato), durata stimata, numero di componenti, badge "Progetto avanzato" per i 4 capstone.
- **Card cliccabili**: clic (o Invio/Spazio) su una card apre un modale con il dettaglio dell'esperimento.
- **Glossario per esperimento nel modale**: dentro il dettaglio di ogni esperimento, una sezione "📖 Glossario dell'esperimento" elenca tutti i ~60 termini tecnici rilevanti per quella card. Ogni termine ha: icona, definizione tecnica, definizione per bambini, esempio concreto, lettura vocale in italiano (🔊) e link alla chat UNLIM (💬). Un indicatore "📖 N" sulla card mostra quanti termini contiene ancora prima di aprirla.
- **Navigazione prev/next nel modale**: frecce ← → (o tastiera) per scorrere gli esperimenti senza chiudere il pannello. Posizione "3/92" sempre visibile.
- **Deep-link agli esperimenti**: URL tipo `?exp=v1-cap6-esp1` apre direttamente il modale di quell'esperimento. Bottone "🔗 Copia link" nel modale per condividere un singolo esperimento.
- **Stato nell'URL**: `?volume=2&q=pulsante` rende la vista condivisibile via link.
- **Responsive**: layout fluido da desktop a mobile; il grid usa `auto-fill minmax(300px, 1fr)` e collassa a 1 colonna sotto i 768px.
- **Accessibilità**: ruoli ARIA sui tab, supporto tastiera, `Esc` per chiudere popup o pulire ricerca, contrasto colori WCAG AA.

## Stile

Palette e font estratti direttamente da `elabtutor.school`:

- **Font**: [Open Sans](https://fonts.google.com/specimen/Open+Sans) (via Google Fonts)
- **Blu primario**: `#1E4D8C` (titoli, header, Volume 2)
- **Verde primario**: `#4A7A25` (Volume 1, azioni positive, accenti)
- **Arancio**: `#E49B2E` (Volume 3, progetti avanzati)
- **Sfondo**: `#F7F7F8` · **Testo**: `#1A1A2E`

## Come usarlo

Il prototipo è **HTML + CSS + JS vanilla**, nessun build step.

```bash
# Apri direttamente
open index.html

# Oppure servilo con un server locale (consigliato per evitare CORS sul fetch)
python3 -m http.server 8000
# poi visita http://localhost:8000
```

## Struttura file

```
glossario-esperimenti/
├── index.html     # Struttura semantica (header, controlli, grid)
├── style.css      # Palette ELAB, responsive, card, badges, popup
├── script.js      # Filtri, ricerca, rendering, state URL, popup glossario
├── data.js        # Dataset dei 92 esperimenti + metadata volumi
├── glossary.js    # ~55 voci di glossario contestuale (3 volumi)
└── README.md      # Questo file
```

## Fonte dati

Il dataset è estratto dai file `src/data/experiments-vol{1,2,3}.js` del repo [AndreaMarro/elabtutor](https://github.com/AndreaMarro/elabtutor) (stato al 18/04/2026). Per ogni esperimento:

| Campo | Descrizione |
|---|---|
| `id` | Identificatore tecnico (es. `v1-cap6-esp1`) |
| `volume` | 1, 2 o 3 |
| `chapter` | Capitolo di riferimento nel libro |
| `title` | Titolo dell'esperimento |
| `description` | Descrizione breve per bambini 8-14 |
| `difficulty` | 1 (facile), 2 (medio), 3 (avanzato) |
| `components` | Numero di componenti elettronici |
| `minutes` | Durata stimata (formula: `round((10 + diff*5 + comp*1.5) / 5) * 5`) |
| `icon` | Emoji rappresentativa |
| `isCapstone` | `true` per i 4 progetti finali di volume |

## Estensioni future

- Click su una card apre un modale con il Passo Passo completo
- Integrazione con il Glossario Contestuale (termini tecnici cliccabili)
- Filtri avanzati: difficoltà, durata, componenti specifici
- Vista "percorso consigliato" con dipendenze tra esperimenti
- Marcature di completamento (via localStorage o account)

## Licenza

Prototipo creato per ELAB Tutor (Andrea Marro). Uso interno al progetto.

---

*Prototipo preparato da Tea De Venere · 18 aprile 2026*
