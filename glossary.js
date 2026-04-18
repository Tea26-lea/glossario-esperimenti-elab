/* =============================================================
 * glossary.js — Glossario contestuale ELAB Tutor
 * =============================================================
 * ~60 termini tecnici che compaiono nelle descrizioni degli
 * esperimenti dei 3 volumi.
 *
 * Per ciascuna voce:
 *   title       — la parola come compare nell'interfaccia
 *   technical   — definizione tecnica (mostrata in piccolo nel popup)
 *   icon        — emoji rappresentativa
 *   volume      — volume in cui il termine viene introdotto
 *   kid         — definizione per bambini 8-14 anni
 *   example     — esempio concreto dal mondo reale o dagli esperimenti
 *   aliases     — varianti lessicali che vengono riconosciute nel testo
 *                 (case-insensitive, word-boundary)
 *
 * Regola UX: nella descrizione di una card, ogni termine viene
 * sottolineato SOLO alla prima occorrenza. Gli aliases di un'unica
 * voce (es. "volt" per "tensione") contano come la stessa voce.
 * ============================================================= */

const GLOSSARY = {

  // ===================== COMPONENTI BASE (Vol 1) =====================

  "led-rgb": {
    title: "LED RGB", technical: "Diodo tri-colore (rosso + verde + blu)",
    icon: "🌈", volume: 1,
    kid: "È un LED speciale con 3 luci dentro: rosso, verde e blu. Accendendole insieme in quantità diverse crei qualsiasi colore.",
    example: "Il LED RGB della Xbox, i faretti RGB dei concerti, le lucine dei computer da gaming.",
    aliases: ["LED RGB"]
  },
  "led": {
    title: "LED", technical: "Diodo a emissione luminosa",
    icon: "💡", volume: 1,
    kid: "È una piccola lampadina elettronica che accende luce colorata quando passa la corrente nella direzione giusta.",
    example: "Il LED rosso della torcia, la luce del frigo quando lo apri, i semafori moderni.",
    aliases: ["LED", "diodo"]
  },
  "resistore": {
    title: "Resistore", technical: "Componente passivo che limita la corrente",
    icon: "🛡️", volume: 1,
    kid: "È il guardiano del circuito: rallenta la corrente così non passa troppa elettricità e gli altri componenti non si rompono.",
    example: "Senza resistore il LED si brucia subito! Con 220Ω davanti, vive felice.",
    aliases: ["resistore", "resistori"]
  },
  "batteria": {
    title: "Batteria", technical: "Sorgente di energia elettrica",
    icon: "🔋", volume: 1,
    kid: "È un piccolo serbatoio di elettricità. Ha due uscite: il + (filo rosso) e il – (filo nero).",
    example: "Le batterie AA del telecomando, la batteria 9V degli esperimenti.",
    aliases: ["batteria", "batterie", "pila", "pile"]
  },
  "breadboard": {
    title: "Breadboard", technical: "Basetta di prototipazione senza saldature",
    icon: "🍞", volume: 1,
    kid: "È una tavoletta piena di buchini dove puoi infilare i componenti senza saldarli. I buchi sono collegati in righe nascoste.",
    example: "\"Breadboard\" in inglese vuol dire \"tagliere del pane\" — per la forma allungata!",
    aliases: ["breadboard", "basetta"]
  },
  "pulsante": {
    title: "Pulsante", technical: "Interruttore momentaneo normalmente aperto",
    icon: "🔘", volume: 1,
    kid: "È un bottone: mentre lo premi, la corrente passa. Quando lo lasci, si ferma di nuovo.",
    example: "Il tasto del campanello, il bottone del microonde per aprire la porta.",
    aliases: ["pulsante", "pulsanti", "bottone"]
  },
  "potenziometro": {
    title: "Potenziometro", technical: "Resistore variabile a cursore",
    icon: "🎛️", volume: 1,
    kid: "È una manopola che puoi girare: a sinistra lascia passare poca corrente, a destra tanta. Come il volume della radio!",
    example: "La manopola del volume dello stereo, il regolatore di luminosità delle lampade.",
    aliases: ["potenziometro", "potenziometri", "pot", "trimmer", "manopola"]
  },
  "sensore": {
    title: "Sensore", technical: "Trasduttore ingresso",
    icon: "📡", volume: 1,
    kid: "È un componente che \"sente\" qualcosa del mondo (luce, calore, movimento) e lo trasforma in un segnale elettrico.",
    example: "Il sensore di luce accende i lampioni quando cala la sera.",
    aliases: ["sensore", "sensori"]
  },
  "ldr": {
    title: "LDR", technical: "Light Dependent Resistor — fotoresistore",
    icon: "☀️", volume: 1,
    kid: "È un sensore di luce: cambia la sua resistenza a seconda di quanta luce riceve. Al buio diventa \"spesso\", alla luce diventa \"sottile\".",
    example: "I lampioni stradali usano un LDR per capire quando è notte e accendersi da soli.",
    aliases: ["LDR", "fotoresistore", "sensore di luce"]
  },
  "buzzer": {
    title: "Buzzer", technical: "Trasduttore piezoelettrico sonoro",
    icon: "🔔", volume: 1,
    kid: "È un mini altoparlante che emette un suono continuo quando passa la corrente. Il \"bip bip\" che senti.",
    example: "Il buzzer del microonde quando il cibo è pronto, l'allarme della sveglia digitale.",
    aliases: ["buzzer"]
  },
  "reed-switch": {
    title: "Reed switch", technical: "Interruttore magnetico a lamelle",
    icon: "🧲", volume: 1,
    kid: "È un interruttore che si chiude quando avvicini un magnete. Senza magnete è aperto, con magnete vicino si chiude da solo.",
    example: "Gli allarmi antifurto delle finestre usano reed switch: se apri la finestra, il magnete si allontana e scatta l'allarme.",
    aliases: ["reed switch", "reed"]
  },
  "magnete": {
    title: "Magnete", technical: "Corpo con campo magnetico permanente",
    icon: "🧲", volume: 1,
    kid: "È un pezzo di metallo speciale che attira il ferro e altri magneti. Negli esperimenti lo usi per attivare il reed switch.",
    example: "Le calamite del frigo, i magneti delle chiusure di porte e astucci.",
    aliases: ["magnete", "magneti", "calamita"]
  },
  "plastilina-conduttiva": {
    title: "Plastilina conduttiva", technical: "Materiale modellabile che conduce elettricità",
    icon: "🖐️", volume: 1,
    kid: "È una plastilina speciale che lascia passare la corrente: puoi modellarla come vuoi e usarla al posto dei fili!",
    example: "Si compra già pronta o si fa in casa con farina, sale e acqua.",
    aliases: ["plastilina conduttiva", "elettropongo"]
  },

  // ===================== PARTI & COLLEGAMENTI =====================

  "anodo": {
    title: "Anodo", technical: "Terminale positivo di un diodo / LED",
    icon: "➕", volume: 1,
    kid: "È la gamba lunga del LED. Si collega al lato + della batteria. Ricorda: Anodo = Alto (lungo).",
    example: "Se metti l'anodo al – e il catodo al +, il LED non si accende: polarità sbagliata!",
    aliases: ["anodo"]
  },
  "catodo": {
    title: "Catodo", technical: "Terminale negativo di un diodo / LED",
    icon: "➖", volume: 1,
    kid: "È la gamba corta del LED. Si collega al lato – della batteria. C = Catodo = Corto.",
    example: "Guarda il LED da vicino: dove c'è il taglietto smussato sulla base, lì c'è il catodo.",
    aliases: ["catodo"]
  },
  "polarita": {
    title: "Polarità", technical: "Orientamento elettrico + / –",
    icon: "🧭", volume: 1,
    kid: "Alcuni componenti (LED, batterie, condensatori) hanno un lato + e un lato – e devono essere collegati nel verso giusto.",
    example: "Se infili le pile al contrario nel telecomando, non succede nulla: polarità sbagliata.",
    aliases: ["polarità", "polarita"]
  },
  "vcc": {
    title: "VCC", technical: "Alimentazione positiva",
    icon: "➕", volume: 1,
    kid: "È la riga + della breadboard, collegata al filo rosso della batteria. Da qui parte la corrente.",
    example: "\"VCC\" viene dall'inglese Voltage Common Collector — per te è il +!",
    aliases: ["VCC"]
  },
  "gnd": {
    title: "GND", technical: "Ground — massa",
    icon: "🌍", volume: 1,
    kid: "È la riga – della breadboard, collegata al filo nero della batteria. La corrente torna qui per chiudere il cerchio.",
    example: "\"GND\" viene da Ground (terra in inglese).",
    aliases: ["GND", "ground", "massa"]
  },
  "filo": {
    title: "Filo", technical: "Conduttore elettrico isolato",
    icon: "〰️", volume: 1,
    kid: "È un cavetto con due puntali metallici. Serve a collegare un punto della breadboard con un altro.",
    example: "Rosso = VCC, nero = GND, altri colori = segnali. I colori aiutano a non perdersi!",
    aliases: ["filo", "fili", "cavetto", "jumper"]
  },

  // ===================== ELETTRICITÀ =====================

  "corrente": {
    title: "Corrente", technical: "Flusso di cariche elettriche",
    icon: "🌊", volume: 1,
    kid: "È il fiume di elettricità che scorre nei fili. Va dal + al – della batteria. Più è grande, più lavoro può fare.",
    example: "La corrente è come l'acqua in un tubo: piccola = goccioline, grande = cascata.",
    aliases: ["corrente", "ampere", "milliampere"]
  },
  "tensione": {
    title: "Tensione (volt)", technical: "Differenza di potenziale elettrico",
    icon: "⚡", volume: 1,
    kid: "È la spinta che muove la corrente nei fili. Si misura in volt (V). Più volt = più spinta.",
    example: "Una batteria 9V spinge di più di una AA da 1,5V. Come l'altezza di una cascata.",
    aliases: ["tensione", "voltaggio", "volt"]
  },
  "resistenza": {
    title: "Resistenza (ohm)", technical: "Opposizione al passaggio della corrente",
    icon: "🛑", volume: 1,
    kid: "È quanto un componente rallenta il passaggio della corrente. Si misura in ohm (Ω).",
    example: "220Ω rallenta poco (il LED si accende bene). 10.000Ω rallenta tanto (LED debole).",
    aliases: ["resistenza", "ohm", "Ω"]
  },
  "cortocircuito": {
    title: "Cortocircuito", technical: "Collegamento diretto + con – senza carico",
    icon: "⚠️", volume: 1,
    kid: "Succede quando il + tocca direttamente il – senza passare da un componente. Pericoloso: la batteria si scalda!",
    example: "Un filo di rame che tocca i due poli di una batteria: diventa caldissimo in pochi secondi.",
    aliases: ["cortocircuito", "corto"]
  },
  "circuito": {
    title: "Circuito", technical: "Insieme chiuso di componenti elettrici",
    icon: "🔁", volume: 1,
    kid: "È il percorso ad anello della corrente: parte dal +, attraversa i componenti, torna al –. Se si rompe, niente si accende.",
    example: "Come una pista: se tagli la strada a metà, le macchinine si fermano.",
    aliases: ["circuito", "circuiti"]
  },
  "canale": {
    title: "Canale (RGB)", technical: "Una delle tre uscite colore del LED RGB",
    icon: "🎨", volume: 1,
    kid: "Ogni LED RGB ha 3 canali: rosso, verde, blu. Accendendoli uno alla volta o insieme, mescoli i colori.",
    example: "Canale rosso + canale blu = viola. Canale rosso + canale verde = giallo.",
    aliases: ["canale", "canali"]
  },
  "luminosita": {
    title: "Luminosità", technical: "Intensità della luce emessa",
    icon: "🌟", volume: 1,
    kid: "È quanto è forte la luce del LED. Cambia con il resistore, con il potenziometro o con il codice PWM.",
    example: "Il display del telefono: di giorno luminosità alta, di notte bassa per non disturbare gli occhi.",
    aliases: ["luminosità", "luminosita", "intensità", "intensita"]
  },

  // ===================== STRUMENTI & AVANZATO (Vol 2) =====================

  "multimetro": {
    title: "Multimetro", technical: "Strumento di misura multi-funzione",
    icon: "📟", volume: 2,
    kid: "È un piccolo computer che misura tre cose: tensione (volt), corrente (ampere) e resistenza (ohm). Tre strumenti in uno.",
    example: "L'elettricista lo usa per controllare se una presa funziona, se un filo è rotto, ecc.",
    aliases: ["multimetro"]
  },
  "in-serie": {
    title: "In serie", technical: "Componenti collegati uno dopo l'altro",
    icon: "➡️", volume: 2,
    kid: "Componenti in fila indiana: la corrente passa da uno all'altro. Le tensioni si sommano, le resistenze si sommano.",
    example: "Due LED in serie accesi con una pila: la luce passa attraverso entrambi prima di tornare alla batteria.",
    aliases: ["in serie", "serie"]
  },
  "in-parallelo": {
    title: "In parallelo", technical: "Componenti affiancati sullo stesso percorso",
    icon: "⫽", volume: 2,
    kid: "Componenti affiancati: la corrente si divide tra loro. Le tensioni restano uguali, la resistenza totale scende.",
    example: "Due LED in parallelo: ognuno riceve la stessa tensione ma la corrente si sdoppia.",
    aliases: ["in parallelo", "parallelo"]
  },
  "partitore-di-tensione": {
    title: "Partitore di tensione", technical: "Circuito con due resistori in serie che divide la tensione",
    icon: "📐", volume: 2,
    kid: "Due resistori uguali in serie dimezzano la tensione. Un trucco usato in quasi tutti i circuiti elettronici.",
    example: "9V in entrata → due resistori da 10kΩ → 4,5V in uscita.",
    aliases: ["partitore di tensione", "partitore"]
  },
  "condensatore": {
    title: "Condensatore", technical: "Componente che immagazzina carica elettrica",
    icon: "⚡", volume: 2,
    kid: "È un mini-serbatoio di elettricità: si carica quando gli dai corrente, e la rilascia piano piano dopo. Come una spugna.",
    example: "Il flash della macchina fotografica usa un condensatore: accumula energia e la scarica tutta in un lampo.",
    aliases: ["condensatore", "condensatori", "capacitore"]
  },
  "scarica-rc": {
    title: "Scarica RC", technical: "Svuotamento di un condensatore attraverso una resistenza",
    icon: "⏱️", volume: 2,
    kid: "Quando un condensatore si svuota passando per un resistore, lo fa piano. Più grande il resistore, più lento il calo.",
    example: "Il LED che si spegne dolcemente invece di colpo: è una scarica RC in azione.",
    aliases: ["scarica RC", "scarica"]
  },
  "transistor": {
    title: "Transistor", technical: "Componente elettronico a 3 terminali, interruttore/amplificatore",
    icon: "🎚️", volume: 2,
    kid: "È un interruttore elettronico comandato dall'elettricità invece che dalle dita. Una piccola tensione controlla una grande!",
    example: "Ogni computer contiene miliardi di transistor microscopici.",
    aliases: ["transistor", "BJT"]
  },
  "mosfet": {
    title: "MOSFET", technical: "Metal-Oxide-Semiconductor Field-Effect Transistor",
    icon: "🔀", volume: 2,
    kid: "È un tipo di transistor molto usato: come una porta magnetica che si apre quando dai una tensione al gate.",
    example: "I MOSFET accendono i motori delle stampanti 3D, i LED RGB dei computer da gaming.",
    aliases: ["MOSFET"]
  },
  "gate": {
    title: "Gate", technical: "Terminale di controllo del MOSFET",
    icon: "🚪", volume: 2,
    kid: "È il pulsante magico del MOSFET: gli dai una tensione sul gate e la porta si apre (corrente passa).",
    example: "Sopra una certa tensione (~2V) il gate apre la porta, sotto resta chiusa.",
    aliases: ["gate"]
  },
  "tensione-soglia": {
    title: "Tensione di soglia", technical: "Vth — valore oltre cui il MOSFET si accende",
    icon: "🎯", volume: 2,
    kid: "È il \"numero magico\": il valore di tensione sopra cui il MOSFET scatta da spento ad acceso. Prima nulla, dopo tutto.",
    example: "Per i MOSFET degli esperimenti, la tensione di soglia è circa 2V.",
    aliases: ["tensione di soglia", "Vth", "soglia"]
  },
  "fototransistor": {
    title: "Fototransistor", technical: "Transistor attivato dalla luce",
    icon: "🌙", volume: 2,
    kid: "È come un LDR ma molto più veloce: reagisce alla luce in frazioni di secondo. Sente la luce come un occhio.",
    example: "I telecomandi dei TV usano fototransistor a infrarossi per ricevere i comandi.",
    aliases: ["fototransistor"]
  },
  "motore-dc": {
    title: "Motore DC", technical: "Motore elettrico in corrente continua",
    icon: "⚙️", volume: 2,
    kid: "È un piccolo motore che gira quando gli dai corrente. Invertendo i fili, gira al contrario.",
    example: "I ventilatori piccoli, i giocattoli telecomandati, i mixer da cucina.",
    aliases: ["motore DC", "motore", "motori"]
  },
  "rotore": {
    title: "Rotore", technical: "Parte rotante del motore",
    icon: "🔄", volume: 2,
    kid: "È la parte del motore che gira quando c'è corrente. L'altra parte (fissa) si chiama \"statore\".",
    example: "Nel ventilatore, il rotore è l'elica. Nello statore ci sono i magneti.",
    aliases: ["rotore"]
  },

  // ===================== ARDUINO (Vol 3) =====================

  "arduino": {
    title: "Arduino", technical: "Microcontrollore open-source programmabile",
    icon: "🎛️", volume: 3,
    kid: "È un mini-computer che puoi programmare. Carichi il codice dal PC e Arduino lo esegue da solo, senza schermo.",
    example: "Le stampanti 3D casalinghe, i robot educativi, gli orologi fatti in casa: tutto nasce da Arduino.",
    aliases: ["Arduino"]
  },
  "sketch": {
    title: "Sketch", technical: "Programma Arduino",
    icon: "📝", volume: 3,
    kid: "È il nome che Arduino dà ai suoi programmi: un testo in linguaggio C++ che dice all'Arduino cosa fare.",
    example: "Il primo sketch che impari si chiama \"Blink\": fa lampeggiare un LED.",
    aliases: ["sketch"]
  },
  "led-builtin": {
    title: "LED_BUILTIN", technical: "LED integrato nella scheda Arduino",
    icon: "✨", volume: 3,
    kid: "È un LED già montato sulla scheda Arduino, sul pin 13. Utile per testare che il programma funziona senza collegare niente.",
    example: "Il classico esempio \"Blink\" usa LED_BUILTIN: scrivi il codice, carichi, e il LED lampeggia sulla scheda.",
    aliases: ["LED_BUILTIN"]
  },
  "pin-digitale": {
    title: "Pin digitale", technical: "Terminale a due stati: HIGH (5V) o LOW (0V)",
    icon: "🔢", volume: 3,
    kid: "È un buchino di Arduino che può essere solo acceso (5V) o spento (0V). Come un interruttore: 0 o 1.",
    example: "Arduino Uno ha 14 pin digitali, numerati da 0 a 13.",
    aliases: ["pin digitale", "pin digitali", "digital"]
  },
  "pin-analogico": {
    title: "Pin analogico", technical: "Terminale che legge valori da 0 a 1023",
    icon: "📊", volume: 3,
    kid: "È un buchino che legge valori intermedi, non solo acceso/spento. Può leggere 0, 1, 2, 3... fino a 1023.",
    example: "Arduino Uno ha 6 pin analogici (A0-A5). Un potenziometro dà valori tra 0 (giro a sinistra) e 1023 (giro a destra).",
    aliases: ["pin analogico", "pin analogici", "analogico"]
  },
  "analogread": {
    title: "analogRead", technical: "Funzione Arduino per leggere un pin analogico",
    icon: "📥", volume: 3,
    kid: "È il comando che dice ad Arduino: \"guarda questo pin e dimmi che numero vede\" (tra 0 e 1023).",
    example: "analogRead(A0) → legge il pin A0 e ti restituisce un numero.",
    aliases: ["analogRead"]
  },
  "analogwrite": {
    title: "analogWrite", technical: "Funzione Arduino per generare PWM su un pin",
    icon: "📤", volume: 3,
    kid: "È il comando che dice ad Arduino: \"accendi questo pin al X per cento\" (da 0 a 255). Usato per regolare la luminosità.",
    example: "analogWrite(9, 128) → accende il pin 9 al 50%.",
    aliases: ["analogWrite"]
  },
  "pwm": {
    title: "PWM", technical: "Pulse Width Modulation — modulazione di larghezza d'impulso",
    icon: "〰️", volume: 3,
    kid: "È un trucco: Arduino non può dare davvero metà tensione, ma può accendere e spegnere il pin molto veloce. L'occhio vede una luce \"a metà\".",
    example: "Il dimmer della luce di casa, il controllo velocità del ventilatore, il fade del LED.",
    aliases: ["PWM"]
  },
  "fade": {
    title: "Fade", technical: "Transizione graduale di luminosità",
    icon: "🌗", volume: 3,
    kid: "Il LED che si accende e spegne dolcemente, piano piano, invece che di colpo. Lo ottieni con PWM e un ciclo for.",
    example: "La lampada da comodino smart che simula l'alba: fade lento da buio a luce.",
    aliases: ["fade"]
  },
  "serial-monitor": {
    title: "Serial Monitor", technical: "Finestra di testo che mostra i messaggi di Arduino",
    icon: "📜", volume: 3,
    kid: "È una finestra che si apre nel PC: Arduino ci scrive messaggi mentre funziona. Per capire cosa sta succedendo dentro!",
    example: "Serial.println(\"Ciao!\") → nel Serial Monitor compare \"Ciao!\". Come un diario di bordo.",
    aliases: ["Serial Monitor"]
  },
  "serial-plotter": {
    title: "Serial Plotter", technical: "Visualizzazione grafica di valori numerici nel tempo",
    icon: "📈", volume: 3,
    kid: "Come il Serial Monitor, ma invece di testo mostra un grafico in movimento. Perfetto per vedere i sensori!",
    example: "Leggi un pot e gira la manopola: il Serial Plotter disegna un'onda che sale e scende.",
    aliases: ["Serial Plotter"]
  },
  "serial-println": {
    title: "Serial.println", technical: "Funzione Arduino per scrivere una riga nel Serial Monitor",
    icon: "✍️", volume: 3,
    kid: "È il comando per scrivere un messaggio nel Serial Monitor. Come \"println\" in altri linguaggi: print + line feed.",
    example: "Serial.println(\"Valore: 500\") → nel Serial Monitor appare \"Valore: 500\" e a capo.",
    aliases: ["Serial.println"]
  },
  "pull-up": {
    title: "Pull-up", technical: "Resistore che tiene il pin a 5V quando non premuto",
    icon: "⬆️", volume: 3,
    kid: "Un trucco per i pulsanti: tiene il pin \"alto\" (5V) quando non lo premi. Quando premi, scende a 0V.",
    example: "INPUT_PULLUP in Arduino attiva un pull-up interno: niente resistore extra da collegare.",
    aliases: ["pull-up", "pullup", "INPUT_PULLUP"]
  },
  "pull-down": {
    title: "Pull-down", technical: "Resistore che tiene il pin a 0V quando non premuto",
    icon: "⬇️", volume: 3,
    kid: "Un trucco simmetrico al pull-up: tiene il pin \"basso\" (0V) quando non premi. Premendo sale a 5V.",
    example: "Quando il pulsante non è premuto, il resistore pull-down scarica il pin a massa: il segnale è pulito.",
    aliases: ["pull-down", "pulldown"]
  },
  "debounce": {
    title: "Debounce", technical: "Tecnica software per stabilizzare i pulsanti",
    icon: "🎚️", volume: 3,
    kid: "I pulsanti meccanici \"rimbalzano\" per qualche millisecondo quando li premi. Il debounce aspetta che si fermino e ignora i rimbalzi.",
    example: "Senza debounce, un clic del mouse può registrare 3-4 clic. Con debounce, uno solo.",
    aliases: ["debounce"]
  },
  "dac": {
    title: "DAC", technical: "Digital-to-Analog Converter",
    icon: "🎯", volume: 3,
    kid: "Converte un numero digitale in una tensione analogica reale. Arduino Uno non ha un DAC vero, ma lo simula con PWM filtrato.",
    example: "I DAC sono dentro tutti i lettori audio: convertono i numeri del file MP3 in onde sonore.",
    aliases: ["DAC"]
  },
  "codice-morse": {
    title: "Codice Morse", technical: "Sistema di comunicazione a punti e linee",
    icon: "📡", volume: 3,
    kid: "Un alfabeto a punti (brevi) e linee (lunghe). Ogni lettera ha una sua combinazione. Inventato nel 1830!",
    example: "S = tre punti (···). O = tre linee (———). SOS = ···———··· (il segnale di aiuto universale).",
    aliases: ["codice Morse", "Morse"]
  },
  "semaforo": {
    title: "Semaforo", technical: "Sequenza rosso-giallo-verde temporizzata",
    icon: "🚦", volume: 3,
    kid: "Tre LED che si accendono in sequenza come un vero semaforo: rosso, verde, giallo, rosso, e così via.",
    example: "Programmare un semaforo è l'esercizio classico per imparare come controllare più pin insieme.",
    aliases: ["semaforo"]
  },
  "ciclo-for": {
    title: "Ciclo for", technical: "Costrutto di programmazione che ripete un blocco di codice",
    icon: "🔁", volume: 3,
    kid: "Un modo per dire \"fai questo X volte\" senza riscriverlo X volte. Conta da un numero all'altro eseguendo ogni volta il codice.",
    example: "Per fare il fade del LED da 0 a 255, scrivi: for (int i=0; i<256; i++) analogWrite(9, i);",
    aliases: ["ciclo for", "for loop", "for"]
  },
  "lcd": {
    title: "LCD", technical: "Liquid Crystal Display — schermo a cristalli liquidi",
    icon: "🖥️", volume: 3,
    kid: "È un piccolo schermo che può scrivere lettere e numeri. Si collega ad Arduino con pochi fili.",
    example: "Gli LCD sono dentro calcolatrici, orologi digitali, microonde, stampanti 3D.",
    aliases: ["LCD", "display"]
  },
  "servomotore": {
    title: "Servomotore", technical: "Motore con controllo di posizione angolare",
    icon: "🔄", volume: 3,
    kid: "È un motore speciale che può andare in un angolo preciso (es. 45°, 90°, 180°) e restarci. Non gira all'infinito.",
    example: "Gli sportelli degli aeromodellini, le braccia dei robot giocattolo, i puntatori degli strumenti musicali elettronici.",
    aliases: ["servomotore", "servo"]
  }

};

// Export for Node (used in validation tests)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSSARY };
}
