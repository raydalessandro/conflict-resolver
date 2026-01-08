/**
 * ARCHETYPES ENGINE
 * I 12 archetipi con le loro caratteristiche, bisogni, paure,
 * e pattern di conflitto.
 */

import type { 
  Archetype, 
  ArchetypeId, 
  ConflictPattern, 
  BridgeStrategy 
} from '@/types'

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  innocent: {
    id: 'innocent',
    name: 'Innocente',
    essence: 'Purezza e fiducia',
    coreNeed: 'Sicurezza e armonia',
    coreFear: 'Essere punito, abbandonato o tradito',
    inConflict: {
      behavior: 'Evita, minimizza, cerca di fare pace a tutti i costi',
      language: ['Non litighiamo', 'Va tutto bene', 'Facciamo finta di niente'],
      blindSpot: 'Non vede i problemi reali per paura di affrontarli',
      needs: 'Rassicurazione che il conflitto non distruggerà la relazione'
    },
    color: '#A7F3D0',
    icon: '🌱'
  },
  everyman: {
    id: 'everyman',
    name: 'Persona Comune',
    essence: 'Appartenenza e connessione',
    coreNeed: 'Essere accettato e appartenere',
    coreFear: 'Essere escluso o lasciato solo',
    inConflict: {
      behavior: 'Cerca compromesso, vuole che tutti stiano bene',
      language: ['Siamo tutti nella stessa barca', 'Cerchiamo un punto comune', 'Non voglio creare problemi'],
      blindSpot: 'Sacrifica i propri bisogni per mantenere la pace',
      needs: 'Sapere che fa ancora parte del gruppo/relazione'
    },
    color: '#FDE68A',
    icon: '🤝'
  },
  hero: {
    id: 'hero',
    name: 'Eroe',
    essence: 'Coraggio e competenza',
    coreNeed: 'Dimostrare il proprio valore attraverso azioni coraggiose',
    coreFear: 'Essere debole, vulnerabile o codardo',
    inConflict: {
      behavior: 'Affronta direttamente, vuole "vincere" o risolvere',
      language: ['Affrontiamo il problema', 'Non mi tiro indietro', 'Devo fare qualcosa'],
      blindSpot: 'Vede tutto come battaglia, non capisce che a volte serve solo ascolto',
      needs: 'Riconoscimento del suo impegno e delle sue intenzioni'
    },
    color: '#FCA5A5',
    icon: '⚔️'
  },
  caregiver: {
    id: 'caregiver',
    name: 'Protettore',
    essence: 'Cura e generosità',
    coreNeed: 'Proteggere e prendersi cura degli altri',
    coreFear: 'Egoismo, ingratitudine',
    inConflict: {
      behavior: 'Si preoccupa, cerca di aiutare anche quando non richiesto',
      language: ['Mi preoccupo per te', 'Lo faccio per il tuo bene', 'Lascia che ti aiuti'],
      blindSpot: 'La cura può diventare controllo, soffoca l\'autonomia altrui',
      needs: 'Che la sua cura sia vista e apprezzata, non rifiutata'
    },
    color: '#F9A8D4',
    icon: '💝'
  },
  explorer: {
    id: 'explorer',
    name: 'Esploratore',
    essence: 'Libertà e scoperta',
    coreNeed: 'Libertà di scoprire se stesso e il mondo',
    coreFear: 'Essere intrappolato, conformarsi, vuoto interiore',
    inConflict: {
      behavior: 'Si allontana, ha bisogno di spazio, può sembrare distaccato',
      language: ['Ho bisogno di spazio', 'Non soffocarmi', 'Devo pensarci'],
      blindSpot: 'La fuga può sembrare abbandono, non comunica i suoi bisogni',
      needs: 'Spazio senza che questo sia interpretato come rifiuto'
    },
    color: '#93C5FD',
    icon: '🧭'
  },
  rebel: {
    id: 'rebel',
    name: 'Ribelle',
    essence: 'Liberazione e cambiamento',
    coreNeed: 'Rivoluzionare ciò che non funziona',
    coreFear: 'Essere impotente, insignificante, conformarsi',
    inConflict: {
      behavior: 'Sfida, provoca, rompe le regole',
      language: ['Le regole sono stupide', 'Non mi dire cosa fare', 'Perché dovrei?'],
      blindSpot: 'La ribellione può diventare distruttiva, non costruttiva',
      needs: 'Che la sua voce abbia peso, che il suo dissenso sia ascoltato'
    },
    color: '#C4B5FD',
    icon: '🔥'
  },
  lover: {
    id: 'lover',
    name: 'Amante',
    essence: 'Intimità e passione',
    coreNeed: 'Intimità, connessione profonda, bellezza',
    coreFear: 'Essere solo, non amato, non desiderato',
    inConflict: {
      behavior: 'Intenso emotivamente, cerca connessione anche nel conflitto',
      language: ['Non mi ami più?', 'Voglio sentirti vicino', 'Perché sei così distante?'],
      blindSpot: 'L\'intensità emotiva può sopraffare l\'altro',
      needs: 'Rassicurazione sull\'amore, vicinanza emotiva'
    },
    color: '#FDA4AF',
    icon: '❤️'
  },
  creator: {
    id: 'creator',
    name: 'Creatore',
    essence: 'Innovazione e visione',
    coreNeed: 'Creare qualcosa di valore duraturo',
    coreFear: 'Mediocrità, visione non realizzata',
    inConflict: {
      behavior: 'Cerca soluzioni creative, può sembrare che ignori il problema emotivo',
      language: ['Troviamo un\'altra via', 'Pensiamo fuori dagli schemi', 'E se provassimo...'],
      blindSpot: 'Vuole "risolvere" quando l\'altro vuole solo essere ascoltato',
      needs: 'Che le sue idee siano considerate, spazio per creare soluzioni'
    },
    color: '#FCD34D',
    icon: '✨'
  },
  jester: {
    id: 'jester',
    name: 'Giullare',
    essence: 'Gioia e leggerezza',
    coreNeed: 'Vivere nel momento con piena gioia',
    coreFear: 'Essere noioso o annoiare gli altri',
    inConflict: {
      behavior: 'Sdrammatizza, usa umorismo, può sembrare che non prenda sul serio',
      language: ['Dai, non è così grave', 'Ridiamoci su', 'Non prendiamoci troppo sul serio'],
      blindSpot: 'L\'umorismo può sembrare invalidazione dei sentimenti altrui',
      needs: 'Che la leggerezza non sia vista come superficialità'
    },
    color: '#F472B6',
    icon: '🎭'
  },
  sage: {
    id: 'sage',
    name: 'Saggio',
    essence: 'Saggezza e verità',
    coreNeed: 'Comprendere il mondo attraverso intelligenza e analisi',
    coreFear: 'Ignoranza, essere ingannato',
    inConflict: {
      behavior: 'Analizza, razionalizza, cerca di capire prima di agire',
      language: ['Ragioniamoci', 'Guardiamo i fatti', 'Non essere emotivo'],
      blindSpot: 'L\'analisi può sembrare freddezza, invalida le emozioni',
      needs: 'Tempo per elaborare, che la logica abbia spazio'
    },
    color: '#A5B4FC',
    icon: '📚'
  },
  magician: {
    id: 'magician',
    name: 'Mago',
    essence: 'Trasformazione e visione',
    coreNeed: 'Comprendere le leggi fondamentali dell\'universo',
    coreFear: 'Conseguenze negative non intenzionali',
    inConflict: {
      behavior: 'Vede il quadro generale, cerca trasformazione profonda',
      language: ['C\'è qualcosa di più grande qui', 'Questa è un\'opportunità', 'Trasformiamo questo'],
      blindSpot: 'Può sembrare distaccato dalla realtà pratica',
      needs: 'Che la sua visione sia compresa, non ridicolizzata'
    },
    color: '#818CF8',
    icon: '🔮'
  },
  ruler: {
    id: 'ruler',
    name: 'Sovrano',
    essence: 'Controllo e responsabilità',
    coreNeed: 'Controllo, creare ordine dal caos',
    coreFear: 'Caos, essere rovesciato',
    inConflict: {
      behavior: 'Prende il controllo, stabilisce regole, può sembrare autoritario',
      language: ['Facciamo così', 'Questa è la decisione', 'Basta discussioni'],
      blindSpot: 'Il controllo può soffocare, non lascia spazio all\'altro',
      needs: 'Rispetto per la sua posizione, ordine e chiarezza'
    },
    color: '#FDE047',
    icon: '👑'
  }
}

export const CONFLICT_PATTERNS: Record<string, ConflictPattern> = {
  'ruler-rebel': {
    name: 'Controllo vs Libertà',
    description: 'Uno cerca ordine e controllo, l\'altro libertà e autodeterminazione',
    tension: 'Più uno controlla, più l\'altro si ribella. Più l\'altro si ribella, più il primo controlla.',
    bridge: 'magician',
    bridgeReason: 'Il Mago può mostrare che trasformazione e struttura non sono opposti',
    resolution: 'Trovare regole condivise che lascino spazio all\'espressione individuale'
  },
  'caregiver-hero': {
    name: 'Protezione vs Autonomia',
    description: 'Uno vuole proteggere, l\'altro vuole dimostrare di essere capace da solo',
    tension: 'La cura viene vissuta come sfiducia. L\'autonomia viene vissuta come rifiuto.',
    bridge: 'everyman',
    bridgeReason: 'L\'Everyman ricorda che siamo una squadra, né superiori né inferiori',
    resolution: 'Riconoscere che proteggere non significa sminuire, essere autonomi non significa rifiutare'
  },
  'lover-explorer': {
    name: 'Intimità vs Spazio',
    description: 'Uno cerca vicinanza costante, l\'altro ha bisogno di spazio',
    tension: 'La vicinanza soffoca. La distanza viene letta come non-amore.',
    bridge: 'creator',
    bridgeReason: 'Il Creatore può costruire una forma di relazione che includa entrambi i bisogni',
    resolution: 'Definire insieme ritmi di vicinanza e distanza che nutrano entrambi'
  },
  'sage-jester': {
    name: 'Serietà vs Leggerezza',
    description: 'Uno vuole analizzare e capire, l\'altro vuole alleggerire e sdrammatizzare',
    tension: 'L\'analisi sembra pesantezza. La leggerezza sembra superficialità.',
    bridge: 'innocent',
    bridgeReason: 'L\'Innocente ricorda che si può affrontare le cose con serietà mantenendo la speranza',
    resolution: 'Dare spazio sia alla comprensione profonda che alla gioia'
  },
  'hero-innocent': {
    name: 'Azione vs Armonia',
    description: 'Uno vuole agire e affrontare, l\'altro vuole mantenere la pace',
    tension: 'L\'azione sembra aggressione. L\'armonia sembra evitamento.',
    bridge: 'caregiver',
    bridgeReason: 'Il Protettore può agire con cura, proteggere senza aggredire',
    resolution: 'Affrontare i problemi in modo che protegga la relazione'
  },
  'ruler-creator': {
    name: 'Ordine vs Innovazione',
    description: 'Uno vuole procedure chiare, l\'altro vuole sperimentare',
    tension: 'L\'ordine sembra rigidità. L\'innovazione sembra caos.',
    bridge: 'sage',
    bridgeReason: 'Il Saggio può valutare quando serve struttura e quando sperimentazione',
    resolution: 'Creare spazi definiti per l\'innovazione dentro una struttura'
  },
  'caregiver-rebel': {
    name: 'Cura vs Indipendenza',
    description: 'Uno vuole prendersi cura, l\'altro rifiuta di essere "curato"',
    tension: 'La cura sembra controllo. L\'indipendenza sembra ingratitudine.',
    bridge: 'explorer',
    bridgeReason: 'L\'Esploratore mostra che si può essere indipendenti e comunque connessi',
    resolution: 'Offrire supporto senza condizioni, accettarlo senza sentirsi diminuiti'
  },
  'lover-sage': {
    name: 'Emozione vs Ragione',
    description: 'Uno comunica con le emozioni, l\'altro con la logica',
    tension: 'Le emozioni sembrano irrazionalità. La logica sembra freddezza.',
    bridge: 'magician',
    bridgeReason: 'Il Mago integra mente e cuore, vede la saggezza nelle emozioni',
    resolution: 'Riconoscere che entrambi i linguaggi sono validi e necessari'
  },
  'everyman-rebel': {
    name: 'Appartenenza vs Distinzione',
    description: 'Uno vuole fare parte del gruppo, l\'altro vuole distinguersi',
    tension: 'L\'appartenenza sembra conformismo. La distinzione sembra tradimento.',
    bridge: 'hero',
    bridgeReason: 'L\'Eroe può essere parte di una causa più grande pur mantenendo la propria identità',
    resolution: 'Si può appartenere celebrando le differenze individuali'
  },
  'innocent-magician': {
    name: 'Semplicità vs Complessità',
    description: 'Uno vede le cose semplici, l\'altro vede strati nascosti',
    tension: 'La semplicità sembra ingenuità. La complessità sembra paranoia.',
    bridge: 'jester',
    bridgeReason: 'Il Giullare può tenere insieme profondità e leggerezza',
    resolution: 'Alcune cose sono semplici, altre complesse. Saper distinguere.'
  }
}

export const BRIDGE_STRATEGIES: Record<ArchetypeId, BridgeStrategy> = {
  innocent: {
    approach: 'Torna alla semplicità',
    phrases: [
      'In fondo vogliamo entrambi stare bene insieme',
      'Cosa ci renderebbe felici qui?',
      'Possiamo ricominciare da zero?'
    ],
    mindset: 'Ricorda il bene che c\'è nella relazione, prima del problema'
  },
  everyman: {
    approach: 'Ricorda l\'umanità condivisa',
    phrases: [
      'Siamo nella stessa squadra',
      'Entrambi stiamo facendo del nostro meglio',
      'Cosa farebbe chiunque nella nostra situazione?'
    ],
    mindset: 'Né superiori né inferiori, solo due persone che cercano di capirsi'
  },
  hero: {
    approach: 'Trasforma il conflitto in missione comune',
    phrases: [
      'Affrontiamo questo insieme',
      'Qual è la vera sfida qui?',
      'Come possiamo vincere entrambi?'
    ],
    mindset: 'Il nemico non è l\'altro, è il problema stesso'
  },
  caregiver: {
    approach: 'Porta cura nella conversazione',
    phrases: [
      'Come ti senti veramente?',
      'Cosa posso fare per te in questo momento?',
      'La tua felicità mi importa'
    ],
    mindset: 'Prima la relazione, poi il problema'
  },
  explorer: {
    approach: 'Cerca nuove prospettive',
    phrases: [
      'E se guardassimo da un\'altra angolazione?',
      'Cosa non stiamo vedendo?',
      'Prendiamoci un momento per riflettere'
    ],
    mindset: 'C\'è sempre più di quello che vediamo a prima vista'
  },
  rebel: {
    approach: 'Sfida i pattern abituali',
    phrases: [
      'Perché facciamo sempre così?',
      'E se rompessimo questo schema?',
      'Chi ha deciso che deve essere così?'
    ],
    mindset: 'A volte serve rompere per costruire meglio'
  },
  lover: {
    approach: 'Connetti attraverso il cuore',
    phrases: [
      'Ti amo anche quando litighiamo',
      'Cosa ti fa sentire amato/a?',
      'Voglio capirti davvero'
    ],
    mindset: 'L\'amore è più grande di questo momento'
  },
  creator: {
    approach: 'Crea nuove possibilità',
    phrases: [
      'Inventiamo una soluzione nuova',
      'E se costruissimo qualcosa insieme?',
      'Cosa potremmo creare da questo?'
    ],
    mindset: 'Ogni conflitto è materia prima per qualcosa di nuovo'
  },
  jester: {
    approach: 'Alleggerisci con saggezza',
    phrases: [
      'Tra dieci anni rideremo di questo',
      'Prendiamo un respiro',
      'Siamo proprio buffi quando litighiamo'
    ],
    mindset: 'La leggerezza non è superficialità, è prospettiva'
  },
  sage: {
    approach: 'Cerca la comprensione profonda',
    phrases: [
      'Aiutami a capire il tuo punto di vista',
      'Cosa c\'è davvero sotto?',
      'Quali sono i fatti e quali le interpretazioni?'
    ],
    mindset: 'Capire prima di reagire'
  },
  magician: {
    approach: 'Trasforma la situazione',
    phrases: [
      'Questa è un\'opportunità di crescita',
      'Cosa sta cercando di emergere?',
      'Possiamo trasformare questo in qualcosa di meglio'
    ],
    mindset: 'Ogni crisi contiene i semi della trasformazione'
  },
  ruler: {
    approach: 'Crea struttura e chiarezza',
    phrases: [
      'Stabiliamo delle regole per questa conversazione',
      'Decidiamo insieme come procedere',
      'Qual è il risultato che vogliamo?'
    ],
    mindset: 'L\'ordine aiuta a navigare il caos emotivo'
  }
}

/**
 * Trova il pattern di conflitto tra due archetipi
 */
export function findConflictPattern(arch1: ArchetypeId, arch2: ArchetypeId): ConflictPattern {
  const key1 = `${arch1}-${arch2}`
  const key2 = `${arch2}-${arch1}`
  
  if (CONFLICT_PATTERNS[key1]) return CONFLICT_PATTERNS[key1]
  if (CONFLICT_PATTERNS[key2]) return CONFLICT_PATTERNS[key2]
  
  return generateGenericPattern(arch1, arch2)
}

function generateGenericPattern(arch1: ArchetypeId, arch2: ArchetypeId): ConflictPattern {
  const a1 = ARCHETYPES[arch1]
  const a2 = ARCHETYPES[arch2]
  
  return {
    name: `${a1.essence} vs ${a2.essence}`,
    description: `${a1.name} cerca ${a1.coreNeed.toLowerCase()}, mentre ${a2.name} cerca ${a2.coreNeed.toLowerCase()}`,
    tension: 'I bisogni di entrambi possono sembrare in competizione.',
    bridge: 'everyman',
    bridgeReason: 'Ricordare l\'umanità condivisa può aiutare a trovare un punto comune',
    resolution: 'Riconoscere che entrambi i bisogni sono legittimi e trovare modi per onorarli'
  }
}
