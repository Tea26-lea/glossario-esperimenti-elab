/* =============================================================
 * data.js — Dataset degli esperimenti ELAB Tutor
 * =============================================================
 * 92 esperimenti suddivisi in 3 volumi:
 *   Volume 1 - Le Basi         (38 esperimenti, Cap 6-14)
 *   Volume 2 - Approfondiamo   (27 esperimenti, Cap 3-12)
 *   Volume 3 - Arduino         (27 esperimenti, Cap 5-8 + Extra)
 *
 * Ogni esperimento contiene:
 *   id           — identificatore tecnico (es. "v1-cap6-esp1")
 *   volume       — 1 | 2 | 3
 *   chapter      — nome del capitolo
 *   title        — titolo visualizzato
 *   description  — descrizione breve per bambini (1-2 frasi)
 *   difficulty   — 1 (facile) | 2 (medio) | 3 (avanzato)
 *   components   — numero di componenti
 *   minutes      — durata stimata in minuti
 *   icon         — emoji rappresentativa
 *   isCapstone   — true per i 4 progetti "avanzati" di fine volume
 *
 * La durata è calcolata con la formula: round((10 + diff*5 + comp*1.5)/5)*5
 * (vedi Quick_Wins_Pack_2026-04-18.docx per il razionale)
 * ============================================================= */

const VOLUMES = {
  1: { name: "Le Basi",       subtitle: "Batteria 9V, niente Arduino", color: "#4A7A25", icon: "📗", count: 38 },
  2: { name: "Approfondiamo", subtitle: "Multimetro, transistor, motori", color: "#1E4D8C", icon: "📘", count: 27 },
  3: { name: "Arduino",       subtitle: "Codice, pin, Serial Monitor", color: "#E49B2E", icon: "📙", count: 27 },
};

const EXPERIMENTS = [
  // ==================== VOLUME 1 — LE BASI ====================

  // Cap 6 — Cos'è il diodo LED?
  { id: "v1-cap6-esp1", volume: 1, chapter: "Cap. 6 — Cos'è il diodo LED?", title: "Accendi il tuo primo LED",
    description: "Il tuo primo circuito! Collega batteria 9V, resistore e LED sulla breadboard.",
    difficulty: 1, components: 4, minutes: 20, icon: "💡", isCapstone: false },
  { id: "v1-cap6-esp2", volume: 1, chapter: "Cap. 6 — Cos'è il diodo LED?", title: "LED senza resistore (cosa NON fare!)",
    description: "Un controesempio: cosa succede se colleghi il LED senza resistore di protezione?",
    difficulty: 1, components: 3, minutes: 20, icon: "🚫", isCapstone: false },
  { id: "v1-cap6-esp3", volume: 1, chapter: "Cap. 6 — Cos'è il diodo LED?", title: "Cambia luminosità con resistenze diverse",
    description: "Scopri come il valore del resistore cambia la luminosità del LED.",
    difficulty: 1, components: 4, minutes: 20, icon: "🔦", isCapstone: false },

  // Cap 7 — Cos'è il LED RGB?
  { id: "v1-cap7-esp1", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Accendi il rosso del RGB",
    description: "Il LED RGB ha 3 LED in uno. Accendi solo il canale rosso.",
    difficulty: 1, components: 4, minutes: 20, icon: "🔴", isCapstone: false },
  { id: "v1-cap7-esp2", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Accendi il verde del RGB",
    description: "Stesso LED, canale diverso: ora tocca al verde.",
    difficulty: 1, components: 4, minutes: 20, icon: "🟢", isCapstone: false },
  { id: "v1-cap7-esp3", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Accendi il blu del RGB",
    description: "Completa il trio: ora accendi il canale blu.",
    difficulty: 1, components: 4, minutes: 20, icon: "🔵", isCapstone: false },
  { id: "v1-cap7-esp4", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Mescola 2 colori: il viola!",
    description: "Accendi rosso e blu insieme e ottieni il viola. Prima mescolanza!",
    difficulty: 2, components: 5, minutes: 25, icon: "💜", isCapstone: false },
  { id: "v1-cap7-esp5", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Tutti e 3: bianco!",
    description: "Con rosso + verde + blu insieme al massimo ottieni il bianco.",
    difficulty: 2, components: 6, minutes: 30, icon: "⚪", isCapstone: false },
  { id: "v1-cap7-esp6", volume: 1, chapter: "Cap. 7 — Cos'è il LED RGB?", title: "Crea il tuo colore!",
    description: "Sfida libera: combina i 3 canali per creare il colore che preferisci.",
    difficulty: 2, components: 6, minutes: 30, icon: "🎨", isCapstone: false },

  // Cap 8 — Cos'è un pulsante?
  { id: "v1-cap8-esp1", volume: 1, chapter: "Cap. 8 — Cos'è un pulsante?", title: "LED con pulsante",
    description: "Premi il pulsante per accendere il LED. Il tuo primo interruttore!",
    difficulty: 1, components: 5, minutes: 25, icon: "🔘", isCapstone: false },
  { id: "v1-cap8-esp2", volume: 1, chapter: "Cap. 8 — Cos'è un pulsante?", title: "Cambia colore e luminosità",
    description: "Il pulsante non solo accende: prova a cambiare resistore e LED.",
    difficulty: 1, components: 5, minutes: 25, icon: "🎚️", isCapstone: false },
  { id: "v1-cap8-esp3", volume: 1, chapter: "Cap. 8 — Cos'è un pulsante?", title: "RGB + pulsante = viola",
    description: "Un pulsante controlla 2 canali del RGB per creare il viola a comando.",
    difficulty: 2, components: 6, minutes: 30, icon: "💜", isCapstone: false },
  { id: "v1-cap8-esp4", volume: 1, chapter: "Cap. 8 — Cos'è un pulsante?", title: "3 pulsanti → 3 colori RGB",
    description: "Un pulsante per ogni canale: premi, rilascia, combina.",
    difficulty: 2, components: 9, minutes: 35, icon: "🌈", isCapstone: false },
  { id: "v1-cap8-esp5", volume: 1, chapter: "Cap. 8 — Cos'è un pulsante?", title: "Mix avanzato con resistori diversi",
    description: "Usa resistori di valore diverso per creare intensità personalizzate.",
    difficulty: 2, components: 9, minutes: 35, icon: "🎛️", isCapstone: false },

  // Cap 9 — Il potenziometro
  { id: "v1-cap9-esp1", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Dimmer LED con potenziometro",
    description: "Gira la manopola per regolare la luminosità del LED. Come il volume della radio!",
    difficulty: 1, components: 5, minutes: 25, icon: "🎛️", isCapstone: false },
  { id: "v1-cap9-esp2", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Inverti la rotazione",
    description: "Scambia i due estremi del pot: ora la luce cresce al contrario.",
    difficulty: 1, components: 5, minutes: 25, icon: "↩️", isCapstone: false },
  { id: "v1-cap9-esp3", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "LED di colore diverso",
    description: "Scopri come lo stesso pot si comporta con LED di colori diversi.",
    difficulty: 1, components: 5, minutes: 25, icon: "🎨", isCapstone: false },
  { id: "v1-cap9-esp4", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Miscelatore blu/rosso",
    description: "Un pot che regola due canali del RGB contemporaneamente.",
    difficulty: 2, components: 6, minutes: 30, icon: "🟣", isCapstone: false },
  { id: "v1-cap9-esp5", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Mix RGB con 2 pot",
    description: "Due potenziometri per due canali: crea transizioni morbide tra i colori.",
    difficulty: 2, components: 7, minutes: 30, icon: "🌈", isCapstone: false },
  { id: "v1-cap9-esp6", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Lampada RGB con 3 potenziometri",
    description: "Tre manopole, un LED RGB: la tua lampada a colore regolabile.",
    difficulty: 2, components: 9, minutes: 35, icon: "💡", isCapstone: false },
  { id: "v1-cap9-esp7", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Sfida: aggiungi pulsanti alla lampada",
    description: "Sfida aperta! Aggiungi 3 pulsanti ON/OFF per ogni canale del RGB.",
    difficulty: 3, components: 6, minutes: 35, icon: "⭐", isCapstone: false },
  { id: "v1-cap9-esp8", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Sfida: combina esperimenti 5+6",
    description: "Sfida aperta! Unisci miscelatore e lampada 3 pot in un circuito solo.",
    difficulty: 3, components: 7, minutes: 35, icon: "⭐", isCapstone: false },
  { id: "v1-cap9-esp9", volume: 1, chapter: "Cap. 9 — Il potenziometro", title: "Sfida: aggiungi pulsante all'esp 8",
    description: "Sfida aperta! Un pulsante master per accendere/spegnere tutto.",
    difficulty: 3, components: 8, minutes: 40, icon: "⭐", isCapstone: false },

  // Cap 10 — Il sensore di luce (LDR)
  { id: "v1-cap10-esp1", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "LED controllato dalla luce",
    description: "Un sensore di luce accende o spegne il LED. Le luci dei lampioni funzionano così!",
    difficulty: 2, components: 4, minutes: 25, icon: "☀️", isCapstone: false },
  { id: "v1-cap10-esp2", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "LED diverso colore con LDR",
    description: "Prova con colori diversi: come cambia la sensibilità?",
    difficulty: 2, components: 4, minutes: 25, icon: "🌗", isCapstone: false },
  { id: "v1-cap10-esp3", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "3 LDR controllano RGB",
    description: "Tre sensori di luce, un LED RGB: la tua stanza diventa un sensore colorato.",
    difficulty: 3, components: 6, minutes: 35, icon: "🌈", isCapstone: false },
  { id: "v1-cap10-esp4", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "LED bianco illumina LDR → LED blu",
    description: "Un LED bianco illumina un LDR che comanda un LED blu. Effetto cascata!",
    difficulty: 3, components: 6, minutes: 35, icon: "🔗", isCapstone: false },
  { id: "v1-cap10-esp5", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "Aggiungi pot per controllare LED bianco",
    description: "Un pot regola l'intensità del LED bianco che illumina l'LDR. Feedback loop!",
    difficulty: 3, components: 7, minutes: 40, icon: "🔄", isCapstone: false },
  { id: "v1-cap10-esp6", volume: 1, chapter: "Cap. 10 — Il sensore di luce (LDR)", title: "Aggiungi pulsante al circuito LDR",
    description: "Un pulsante manuale sovrascrive il sensore. Override a comando!",
    difficulty: 2, components: 7, minutes: 30, icon: "🔘", isCapstone: false },

  // Cap 11 — Il buzzer
  { id: "v1-cap11-esp1", volume: 1, chapter: "Cap. 11 — Il buzzer", title: "Buzzer suona continuo",
    description: "Il primo componente che fa rumore! Il buzzer suona finché c'è corrente.",
    difficulty: 1, components: 3, minutes: 20, icon: "🔔", isCapstone: false },
  { id: "v1-cap11-esp2", volume: 1, chapter: "Cap. 11 — Il buzzer", title: "Campanello con pulsante",
    description: "Un pulsante + un buzzer = il tuo campanello. Premi e suona!",
    difficulty: 1, components: 4, minutes: 20, icon: "🛎️", isCapstone: false },

  // Cap 12 — Il reed switch
  { id: "v1-cap12-esp1", volume: 1, chapter: "Cap. 12 — Il reed switch", title: "LED con reed switch",
    description: "Il reed switch si attiva con un magnete. Avvicina il magnete e il LED si accende!",
    difficulty: 2, components: 5, minutes: 25, icon: "🧲", isCapstone: false },
  { id: "v1-cap12-esp2", volume: 1, chapter: "Cap. 12 — Il reed switch", title: "Cambia luminosità con magnete",
    description: "Un magnete vicino o lontano cambia come si comporta il circuito.",
    difficulty: 2, components: 5, minutes: 25, icon: "🌗", isCapstone: false },
  { id: "v1-cap12-esp3", volume: 1, chapter: "Cap. 12 — Il reed switch", title: "Sfida: RGB + reed switch",
    description: "Sfida: usa il magnete per cambiare il colore di un LED RGB.",
    difficulty: 3, components: 5, minutes: 30, icon: "⭐", isCapstone: false },
  { id: "v1-cap12-esp4", volume: 1, chapter: "Cap. 12 — Il reed switch", title: "Sfida: pot + RGB + reed switch",
    description: "Sfida combinata: pot per colore + magnete per ON/OFF.",
    difficulty: 3, components: 6, minutes: 35, icon: "⭐", isCapstone: false },

  // Cap 13 — Elettropongo (plastilina conduttiva)
  { id: "v1-cap13-esp1", volume: 1, chapter: "Cap. 13 — Elettropongo", title: "LED nell'elettropongo",
    description: "La plastilina conduttiva diventa il tuo circuito: modella e accendi!",
    difficulty: 1, components: 2, minutes: 15, icon: "💡", isCapstone: false },
  { id: "v1-cap13-esp2", volume: 1, chapter: "Cap. 13 — Elettropongo", title: "Circuiti artistici con plastilina",
    description: "Crea forme e disegni che si accendono: arte + elettronica.",
    difficulty: 2, components: 4, minutes: 25, icon: "🖐️", isCapstone: false },

  // Cap 14 — Il Primo Robot (capstone Vol 1)
  { id: "v1-cap14-esp1", volume: 1, chapter: "Cap. 14 — Il Primo Robot", title: "Il Primo Robot ELAB",
    description: "Progetto finale del Volume 1: metti insieme tutto ciò che hai imparato in un robot completo.",
    difficulty: 3, components: 13, minutes: 45, icon: "🤖", isCapstone: true },

  // ==================== VOLUME 2 — APPROFONDIAMO ====================

  // Cap 3 — Il Multimetro
  { id: "v2-cap3-esp1", volume: 2, chapter: "Cap. 3 — Il Multimetro", title: "Controlliamo la carica della batteria",
    description: "Il multimetro è uno strumento per misurare: impariamo a leggere la tensione.",
    difficulty: 1, components: 2, minutes: 15, icon: "📟", isCapstone: false },
  { id: "v2-cap3-esp2", volume: 2, chapter: "Cap. 3 — Il Multimetro", title: "Diario di misurazione della pila",
    description: "Tieni traccia della carica nel tempo: ogni settimana una misura.",
    difficulty: 1, components: 2, minutes: 15, icon: "📊", isCapstone: false },
  { id: "v2-cap3-esp3", volume: 2, chapter: "Cap. 3 — Il Multimetro", title: "Misuriamo una resistenza",
    description: "Il multimetro legge anche gli ohm. Verifica i valori dichiarati sui resistori.",
    difficulty: 1, components: 2, minutes: 15, icon: "🛡️", isCapstone: false },
  { id: "v2-cap3-esp4", volume: 2, chapter: "Cap. 3 — Il Multimetro", title: "Misuriamo la corrente in un circuito",
    description: "Misurare la corrente richiede di aprire il circuito: vedi quanti milliampere scorrono.",
    difficulty: 2, components: 4, minutes: 25, icon: "🌊", isCapstone: false },

  // Cap 4 — Resistenze
  { id: "v2-cap4-esp1", volume: 2, chapter: "Cap. 4 — Resistenze", title: "Due resistori in parallelo",
    description: "Cosa succede quando metti due resistori in parallelo? La resistenza scende!",
    difficulty: 2, components: 4, minutes: 25, icon: "⫽", isCapstone: false },
  { id: "v2-cap4-esp2", volume: 2, chapter: "Cap. 4 — Resistenze", title: "Tre resistori in serie",
    description: "Resistori in fila: la resistenza totale è la somma.",
    difficulty: 2, components: 5, minutes: 30, icon: "➕", isCapstone: false },
  { id: "v2-cap4-esp3", volume: 2, chapter: "Cap. 4 — Resistenze", title: "Partitore di tensione",
    description: "Due resistori dividono la tensione a metà. Un trucco usato in tutti i circuiti!",
    difficulty: 2, components: 6, minutes: 30, icon: "📐", isCapstone: false },

  // Cap 5 — Batterie
  { id: "v2-cap5-esp1", volume: 2, chapter: "Cap. 5 — Batterie", title: "Batterie in serie (più spinta!)",
    description: "Due batterie in serie danno il doppio della tensione. Più volt = più lavoro!",
    difficulty: 1, components: 3, minutes: 20, icon: "🔋", isCapstone: false },
  { id: "v2-cap5-esp2", volume: 2, chapter: "Cap. 5 — Batterie", title: "Batterie in antiserie",
    description: "Se le metti al contrario si annullano: risultato zero volt.",
    difficulty: 2, components: 3, minutes: 20, icon: "❌", isCapstone: false },

  // Cap 6 — LED avanzati
  { id: "v2-cap6-esp1", volume: 2, chapter: "Cap. 6 — LED avanzati", title: "LED in serie con 1 resistore",
    description: "Due LED in fila con un solo resistore: funzionano davvero?",
    difficulty: 1, components: 5, minutes: 25, icon: "💡", isCapstone: false },
  { id: "v2-cap6-esp2", volume: 2, chapter: "Cap. 6 — LED avanzati", title: "LED in serie colori diversi",
    description: "LED di colore diverso in serie: ognuno ha la sua tensione di caduta.",
    difficulty: 1, components: 5, minutes: 25, icon: "🌈", isCapstone: false },
  { id: "v2-cap6-esp3", volume: 2, chapter: "Cap. 6 — LED avanzati", title: "Tre LED in serie",
    description: "Con 3 LED in serie servono almeno 9V. Controlla con il multimetro!",
    difficulty: 2, components: 6, minutes: 30, icon: "🔗", isCapstone: false },
  { id: "v2-cap6-esp4", volume: 2, chapter: "Cap. 6 — LED avanzati", title: "Misurare Vf con multimetro",
    description: "Misura la tensione di soglia (Vf) dei LED di colore diverso.",
    difficulty: 2, components: 5, minutes: 30, icon: "📟", isCapstone: false },

  // Cap 7 — Condensatori
  { id: "v2-cap7-esp1", volume: 2, chapter: "Cap. 7 — Condensatori", title: "Scarica condensatore + multimetro",
    description: "Il condensatore è un serbatoio di energia: osserva come si svuota nel tempo.",
    difficulty: 2, components: 6, minutes: 30, icon: "⚡", isCapstone: false },
  { id: "v2-cap7-esp2", volume: 2, chapter: "Cap. 7 — Condensatori", title: "Scarica con LED rosso",
    description: "Il condensatore alimenta un LED anche dopo aver staccato la batteria!",
    difficulty: 2, components: 7, minutes: 30, icon: "💡", isCapstone: false },
  { id: "v2-cap7-esp3", volume: 2, chapter: "Cap. 7 — Condensatori", title: "Condensatori in parallelo",
    description: "Due condensatori in parallelo: la capacità totale si somma.",
    difficulty: 2, components: 8, minutes: 35, icon: "⫽", isCapstone: false },
  { id: "v2-cap7-esp4", volume: 2, chapter: "Cap. 7 — Condensatori", title: "Variare R nella scarica RC",
    description: "La resistenza cambia la velocità di scarica. Più R = più tempo.",
    difficulty: 2, components: 7, minutes: 30, icon: "⏱️", isCapstone: false },

  // Cap 8 — MOSFET
  { id: "v2-cap8-esp1", volume: 2, chapter: "Cap. 8 — MOSFET (transistor)", title: "MOSFET come interruttore",
    description: "Il MOSFET è un interruttore elettronico: gate a 9V accende, a 0V spegne.",
    difficulty: 2, components: 5, minutes: 30, icon: "🔀", isCapstone: false },
  { id: "v2-cap8-esp2", volume: 2, chapter: "Cap. 8 — MOSFET (transistor)", title: "MOSFET e carica del corpo",
    description: "Gate flottante: tocca con il dito e la carica statica accende il LED!",
    difficulty: 2, components: 5, minutes: 30, icon: "👆", isCapstone: false },
  { id: "v2-cap8-esp3", volume: 2, chapter: "Cap. 8 — MOSFET (transistor)", title: "Trova il numero magico del MOSFET",
    description: "Gira la manopola: a un certo numero il LED scatta acceso. Qual è il numero magico?",
    difficulty: 3, components: 7, minutes: 35, icon: "🎲", isCapstone: false },

  // Cap 9 — Fototransistor
  { id: "v2-cap9-esp1", volume: 2, chapter: "Cap. 9 — Fototransistor", title: "Fototransistor come sensore",
    description: "Come l'LDR ma più rapido: reagisce alla luce come un sensore digitale.",
    difficulty: 2, components: 5, minutes: 30, icon: "🌙", isCapstone: false },
  { id: "v2-cap9-esp2", volume: 2, chapter: "Cap. 9 — Fototransistor", title: "Luce notturna automatica",
    description: "Un circuito che si accende quando fa buio. La tua prima lampada intelligente!",
    difficulty: 3, components: 10, minutes: 40, icon: "🌃", isCapstone: false },

  // Cap 10 — Motori DC
  { id: "v2-cap10-esp1", volume: 2, chapter: "Cap. 10 — Motori DC", title: "Far girare il motore",
    description: "Il primo motore: collega e il rotore gira. Il movimento dalla corrente!",
    difficulty: 1, components: 3, minutes: 20, icon: "⚙️", isCapstone: false },
  { id: "v2-cap10-esp2", volume: 2, chapter: "Cap. 10 — Motori DC", title: "Invertire la rotazione",
    description: "Scambia i fili e il motore gira al contrario. Semplice e potente.",
    difficulty: 1, components: 3, minutes: 20, icon: "↩️", isCapstone: false },
  { id: "v2-cap10-esp3", volume: 2, chapter: "Cap. 10 — Motori DC", title: "Motore con pulsante",
    description: "Un pulsante controlla il motore: premi per avviare, rilascia per fermare.",
    difficulty: 1, components: 4, minutes: 20, icon: "🔘", isCapstone: false },
  { id: "v2-cap10-esp4", volume: 2, chapter: "Cap. 10 — Motori DC", title: "Motore + pulsante + LED indicatore",
    description: "Un LED spia ti dice quando il motore è in funzione. Come le macchine reali!",
    difficulty: 2, components: 6, minutes: 30, icon: "🚨", isCapstone: false },

  // Cap 12 — Robot Segui Luce (capstone Vol 2)
  { id: "v2-cap12-esp1", volume: 2, chapter: "Cap. 12 — Robot Segui Luce", title: "Robot Segui Luce",
    description: "Progetto finale del Volume 2: un robot che insegue una sorgente di luce.",
    difficulty: 3, components: 12, minutes: 45, icon: "🤖", isCapstone: true },

  // ==================== VOLUME 3 — ARDUINO ====================

  // Cap 5 — Il primo programma
  { id: "v3-cap5-esp1", volume: 3, chapter: "Cap. 5 — Il primo programma", title: "Blink con LED_BUILTIN",
    description: "Il classico Blink: il LED integrato lampeggia. Il 'Hello World' di Arduino!",
    difficulty: 1, components: 2, minutes: 15, icon: "✨", isCapstone: false },
  { id: "v3-cap5-esp2", volume: 3, chapter: "Cap. 5 — Il primo programma", title: "Modifica tempi del Blink",
    description: "Cambia i numeri e il LED lampeggia diversamente: più veloce o più lento.",
    difficulty: 1, components: 2, minutes: 15, icon: "⏱️", isCapstone: false },

  // Cap 6 — I pin digitali
  { id: "v3-cap6-esp1", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Circuito AND/OR con pulsanti",
    description: "Due pulsanti controllano un LED con logica AND o OR. Le prime operazioni logiche!",
    difficulty: 1, components: 6, minutes: 25, icon: "🔢", isCapstone: false },
  { id: "v3-cap6-esp2", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Colleghiamo la resistenza",
    description: "Aggiungi un resistore pull-down per stabilizzare il pulsante.",
    difficulty: 1, components: 4, minutes: 20, icon: "🛡️", isCapstone: false },
  { id: "v3-cap6-morse", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "SOS in codice Morse",
    description: "Programma un LED per trasmettere S-O-S in codice Morse. Salvavita!",
    difficulty: 2, components: 4, minutes: 25, icon: "📡", isCapstone: false },
  { id: "v3-cap6-esp3", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Cambia il numero di pin",
    description: "Scopri come cambiare il pin dell'Arduino nel codice e nel circuito.",
    difficulty: 1, components: 4, minutes: 20, icon: "🔄", isCapstone: false },
  { id: "v3-cap6-esp4", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Due LED: effetto polizia",
    description: "Due LED lampeggiano alternati: l'effetto della sirena della polizia!",
    difficulty: 2, components: 8, minutes: 35, icon: "🚔", isCapstone: false },
  { id: "v3-cap6-semaforo", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Il semaforo",
    description: "Rosso, giallo, verde: programma la sequenza di un vero semaforo.",
    difficulty: 2, components: 8, minutes: 35, icon: "🚦", isCapstone: false },
  { id: "v3-cap6-esp5", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Pulsante con INPUT_PULLUP",
    description: "Un trucco di Arduino: il pull-up interno evita di usare un resistore extra.",
    difficulty: 2, components: 5, minutes: 25, icon: "🔘", isCapstone: false },
  { id: "v3-cap6-esp6", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Mini-progetto: 2 LED + pulsante",
    description: "Un pulsante sceglie quale dei due LED deve accendersi. Primo mini-progetto!",
    difficulty: 2, components: 7, minutes: 30, icon: "🎯", isCapstone: false },
  { id: "v3-cap6-esp7", volume: 3, chapter: "Cap. 6 — I pin digitali", title: "Debounce del pulsante",
    description: "I pulsanti a volte 'rimbalzano': il debounce nel software li stabilizza.",
    difficulty: 2, components: 5, minutes: 25, icon: "🎚️", isCapstone: false },

  // Cap 7 — I pin analogici
  { id: "v3-cap7-esp1", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "analogRead base",
    description: "analogRead legge valori da 0 a 1023. Il pin analogico apre un mondo nuovo!",
    difficulty: 2, components: 5, minutes: 25, icon: "📊", isCapstone: false },
  { id: "v3-cap7-esp2", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "analogRead con tensione",
    description: "Converti il valore 0-1023 in volt. Il tuo primo calcolo!",
    difficulty: 2, components: 5, minutes: 25, icon: "⚡", isCapstone: false },
  { id: "v3-cap7-esp3", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "Trimmer controlla 3 LED",
    description: "Un pot accende 1, 2 o 3 LED a seconda della posizione. Soglie multiple!",
    difficulty: 2, components: 9, minutes: 35, icon: "🎛️", isCapstone: false },
  { id: "v3-cap7-esp4", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "analogWrite (PWM fade)",
    description: "analogWrite crea il fade: il LED si accende e si spegne dolcemente.",
    difficulty: 2, components: 4, minutes: 25, icon: "🌗", isCapstone: false },
  { id: "v3-cap7-esp5", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "PWM con valori manuali",
    description: "Scrivi tu i valori di PWM: 0, 64, 128, 192, 255. Controllo manuale.",
    difficulty: 1, components: 4, minutes: 20, icon: "✍️", isCapstone: false },
  { id: "v3-cap7-esp6", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "Fade up/down con for",
    description: "Il ciclo for automatizza il fade: un'istruzione = 256 stati diversi.",
    difficulty: 2, components: 4, minutes: 25, icon: "🔁", isCapstone: false },
  { id: "v3-cap7-esp7", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "Trimmer controlla PWM",
    description: "Il pot regola il PWM in tempo reale: una manopola per la luminosità.",
    difficulty: 2, components: 5, minutes: 25, icon: "🎚️", isCapstone: false },
  { id: "v3-cap7-esp8", volume: 3, chapter: "Cap. 7 — I pin analogici", title: "DAC reale (10 bit)",
    description: "Da PWM a tensione reale: filtra il segnale per ottenere un DAC.",
    difficulty: 3, components: 3, minutes: 30, icon: "🎯", isCapstone: false },

  // Cap 8 — Serial Monitor
  { id: "v3-cap8-esp1", volume: 3, chapter: "Cap. 8 — Serial Monitor", title: "Serial.println in setup",
    description: "Stampa la tua prima frase nel Serial Monitor. Hello from Arduino!",
    difficulty: 1, components: 2, minutes: 15, icon: "📜", isCapstone: false },
  { id: "v3-cap8-esp2", volume: 3, chapter: "Cap. 8 — Serial Monitor", title: "Serial.println in loop",
    description: "Stampa in continuazione: il Serial Monitor diventa il tuo log.",
    difficulty: 1, components: 2, minutes: 15, icon: "🔁", isCapstone: false },
  { id: "v3-cap8-esp3", volume: 3, chapter: "Cap. 8 — Serial Monitor", title: "analogRead + Serial Monitor",
    description: "Leggi un pot e vedi i valori scorrere nel Serial Monitor in tempo reale.",
    difficulty: 2, components: 3, minutes: 20, icon: "📊", isCapstone: false },
  { id: "v3-cap8-esp4", volume: 3, chapter: "Cap. 8 — Serial Monitor", title: "Serial Plotter con 2 pot",
    description: "Il Serial Plotter disegna grafici: vedi 2 pot muoversi come onde.",
    difficulty: 2, components: 4, minutes: 25, icon: "📈", isCapstone: false },
  { id: "v3-cap8-esp5", volume: 3, chapter: "Cap. 8 — Serial Monitor", title: "Pot + 3 LED + Serial",
    description: "Progetto finale del Volume 3: pot comanda 3 LED e stampa tutto su Serial.",
    difficulty: 3, components: 9, minutes: 40, icon: "🎨", isCapstone: true },

  // Extra
  { id: "v3-extra-lcd-hello", volume: 3, chapter: "Extra", title: "LCD Hello World",
    description: "Il tuo primo display LCD: scrivi una frase che rimane visibile sul pannello.",
    difficulty: 2, components: 3, minutes: 25, icon: "🖥️", isCapstone: false },
  { id: "v3-extra-servo-sweep", volume: 3, chapter: "Extra", title: "Servo Sweep",
    description: "Un servomotore si muove da 0° a 180° e torna indietro. Movimento preciso!",
    difficulty: 2, components: 3, minutes: 25, icon: "🔄", isCapstone: false },
  { id: "v3-extra-simon", volume: 3, chapter: "Extra", title: "Simon Says — Gioco di Memoria",
    description: "Il classico gioco di memoria: Arduino genera sequenze di luci, tu le ripeti.",
    difficulty: 3, components: 15, minutes: 50, icon: "🎮", isCapstone: true },
];

// Export for script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXPERIMENTS, VOLUMES };
}
