/**
 * NATURAL LANGUAGE TRANSLATIONS
 * Converts ontological patterns to human-readable Italian
 */

export interface PatternTranslation {
  archetype: string
  ontologicalPattern: {
    dominantDimension: string
    dominantAttribute: string
    typicalPolarity: string
  }
  translations: {
    description: string
    operatingMode: string
    coreNeed: string
    blindSpot: string
    underStress: string
    metaphors: string[]
  }
}

export const ARCHETYPE_TRANSLATIONS: Record<string, PatternTranslation> = {

  // ========================================================================
  // INNOCENT - L'Innocente
  // ========================================================================
  innocent: {
    archetype: 'innocent',
    ontologicalPattern: {
      dominantDimension: 'D1 (Lineare)',
      dominantAttribute: 'A1 (Distinzione)',
      typicalPolarity: '- (Contrattiva - Continuità)'
    },
    translations: {
      description: `
        Sta cercando di preservare uno stato di continuità e semplicità -
        un modo di essere dove le cose restano stabili e prevedibili senza
        fratture o complessità eccessive.
      `,
      operatingMode: `
        Opera in uno spazio lineare-continuo: cerca di mantenere le cose
        semplici e dirette. Privilegia la continuità sulla frammentazione,
        la chiarezza sulla complessità. Vive nel bisogno di "tornare come prima"
        quando le cose erano più semplici.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "essere protetto" (troppo psicologico).
        È avere CONTINUITÀ STABILE - sapere che le cose non si frammentano,
        che la semplicità viene preservata. Cerca spazi dove la complessità
        non invade.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni RICHIEDONO frammentazione e complessità per evolvere.
        Cerca di "mantenere semplice" anche quando serve differenziazione.
      `,
      underStress: `
        Quando la continuità viene minacciata, intensifica i tentativi di
        semplificazione anche quando serve accettare la complessità. Confonde
        "frammentazione necessaria" con "caos".
      `,
      metaphors: [
        'bambino che vuole che tutto resti come il primo giorno',
        'giardiniere che preserva il giardino com\'era',
        'custode della semplicità originaria'
      ]
    }
  },

  // ========================================================================
  // EVERYMAN - La Persona Comune
  // ========================================================================
  everyman: {
    archetype: 'everyman',
    ontologicalPattern: {
      dominantDimension: 'D2 (Planare)',
      dominantAttribute: 'A2 (Relazione)',
      typicalPolarity: '+ (Espansiva - Aggregazione)'
    },
    translations: {
      description: `
        Sta cercando di essere parte di una rete relazionale stabile -
        un tessuto sociale dove ogni nodo è connesso e nessuno è isolato.
        Privilegia l'appartenenza sulla distinzione.
      `,
      operatingMode: `
        Opera in uno spazio planare-relazionale: vive nelle connessioni
        laterali, non nelle gerarchie. Cerca pattern di appartenenza dove
        tutti sono parte dello stesso tessuto. Misura il valore attraverso
        l'inclusione nel gruppo.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "essere accettato" (troppo emotivo).
        È avere CONNESSIONE LATERALE STABILE - essere parte di una rete
        dove nessuno è troppo diverso o troppo distante. Cerca spazi dove
        l'appartenenza è data, non meritata.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni richiedono DISTINZIONE e autonomia per funzionare.
        Cerca di "essere come tutti" anche dove serve differenziazione.
      `,
      underStress: `
        Quando l'appartenenza viene minacciata, aumenta i tentativi di
        conformità anche quando serve unicità. Confonde "essere diverso"
        con "essere escluso".
      `,
      metaphors: [
        'tessitore che connette tutti i fili senza gerarchie',
        'membro della comunità che mantiene il tessuto sociale',
        'cittadino che appartiene al tutto'
      ]
    }
  },

  // ========================================================================
  // HERO - L'Eroe
  // ========================================================================
  hero: {
    archetype: 'hero',
    ontologicalPattern: {
      dominantDimension: 'D1 (Lineare)',
      dominantAttribute: 'A3 (Processo)',
      typicalPolarity: '+ (Espansiva - Avanzamento)'
    },
    translations: {
      description: `
        Sta cercando di avanzare attraverso sfide e ostacoli - un percorso
        lineare dove ogni passo supera una resistenza. Opera nella logica
        dell'attraversamento e del progresso.
      `,
      operatingMode: `
        Opera in uno spazio lineare-processuale: vede la vita come una
        traiettoria dove si avanza nonostante le difficoltà. Privilegia
        il movimento in avanti sulla stasi, l'azione sulla riflessione.
        Misura il valore attraverso ciò che viene superato.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "dimostrare valore" (troppo psicologico).
        È avere AVANZAMENTO TANGIBILE - muoversi su una traiettoria dove
        ogni ostacolo superato segna un progresso reale. Cerca spazi dove
        la resistenza è qualcosa da attraversare, non da evitare.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni richiedono STASI o REGRESSIONE strategica per funzionare.
        Cerca di "andare sempre avanti" anche dove serve fermarsi o tornare
        indietro.
      `,
      underStress: `
        Quando l'avanzamento si blocca, intensifica lo sforzo anche quando
        serve cambiare direzione. Confonde "ostacolo" con "nemico da battere"
        invece di "segnale da ascoltare".
      `,
      metaphors: [
        'scalatore che sale la montagna ostacolo dopo ostacolo',
        'guerriero che avanza attraverso il campo di battaglia',
        'pioniere che attraversa territori inesplorati'
      ]
    }
  },

  // ========================================================================
  // CAREGIVER - Il Protettore
  // ========================================================================
  caregiver: {
    archetype: 'caregiver',
    ontologicalPattern: {
      dominantDimension: 'D3 (Volumetrica)',
      dominantAttribute: 'A1 (Distinzione)',
      typicalPolarity: '- (Contrattiva - Permeabilità)'
    },
    translations: {
      description: `
        Sta cercando di creare uno spazio protetto dove gli altri possono
        esistere senza minacce. Opera nella logica della membrana: separa
        l'interno dall'esterno permettendo scambi selettivi.
      `,
      operatingMode: `
        Opera in uno spazio volumetrico-protettivo: crea confini che
        separano proteggendo. Non isola completamente ma filtra: lascia
        entrare ciò che nutre, tiene fuori ciò che minaccia. Vive nella
        gestione della permeabilità.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "essere utile" (troppo superficiale).
        È avere MEMBRANA FUNZIONANTE - un confine che protegge senza
        soffocare. Cerca di creare spazi dove la vulnerabilità è possibile
        perché il contorno è sicuro.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcuni
        processi richiedono ESPOSIZIONE per funzionare. Cerca di
        "proteggere sempre" anche quando l'attraversamento diretto della
        difficoltà è necessario per la crescita.
      `,
      underStress: `
        Quando la membrana è sotto attacco, aumenta l'impermeabilità anche
        quando serve apertura. Confonde "protezione" con "isolamento",
        bloccando non solo le minacce ma anche le opportunità.
      `,
      metaphors: [
        'giardiniere che crea una serra per piante delicate',
        'guardiano che filtra chi entra nello spazio sacro',
        'costruttore di rifugi sicuri'
      ]
    }
  },

  // ========================================================================
  // EXPLORER - L'Esploratore
  // ========================================================================
  explorer: {
    archetype: 'explorer',
    ontologicalPattern: {
      dominantDimension: 'D2 (Planare)',
      dominantAttribute: 'A1 (Distinzione)',
      typicalPolarity: '+ (Espansiva - Demarcazione + Movimento)'
    },
    translations: {
      description: `
        Sta cercando libertà di movimento su una superficie aperta - capacità
        di ruotare, esplorare territori, cambiare direzione senza vincoli
        permanenti che bloccano i gradi di libertà.
      `,
      operatingMode: `
        Opera in uno spazio planare-esplorativo: vive nel movimento attraverso
        territori diversi. Privilegia la flessibilità sulla stabilità, la
        rotazione sulla linearità. Cerca confini ampi, non stretti - spazi
        dove il movimento resta possibile.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "essere libero" (troppo vago).
        È avere GRADI DI LIBERTÀ APERTI - poter cambiare traiettoria,
        esplorare nuove zone, ruotare senza dover ricostruire tutto. Cerca
        spazi dove il movimento non richiede permessi.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune cose
        richiedono IMPEGNO ARCHITETTONICO PERSISTENTE per funzionare. Vede
        i vincoli strutturali come "gabbie" anche quando sono fondamenta
        necessarie.
      `,
      underStress: `
        Quando i gradi di libertà si riducono, aumenta i tentativi di
        movimento anche quando serve fermezza. Confonde "struttura necessaria"
        con "prigione", rifiutando anche i vincoli minimi che permettono
        costruzione.
      `,
      metaphors: [
        'esploratore che mappa territori sconosciuti',
        'surfista che cavalca onde senza traiettoria fissa',
        'uccello migratorio che segue le correnti'
      ]
    }
  },

  // ========================================================================
  // REBEL - Il Ribelle
  // ========================================================================
  rebel: {
    archetype: 'rebel',
    ontologicalPattern: {
      dominantDimension: 'D2 (Planare)',
      dominantAttribute: 'A1 (Distinzione)',
      typicalPolarity: '+ (Espansiva - Frammentazione)'
    },
    translations: {
      description: `
        Sta cercando di rompere strutture rigide che limitano il movimento -
        frammentare architetture che si sono cristallizzate e non permettono
        più flessibilità. Opera nella logica della demolizione selettiva.
      `,
      operatingMode: `
        Opera in uno spazio planare-frammentativo: identifica pattern rigidi
        e li rompe. Non distrugge per caos ma per creare nuovi gradi di
        libertà. Vive nella resistenza a qualsiasi struttura che diventa
        gabbia.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "opporsi all'autorità" (troppo psicologico).
        È avere CAPACITÀ DI FRAMMENTARE RIGIDITÀ - poter rompere ciò che si
        è cristallizzato e blocca il movimento. Cerca spazi dove nessuna
        struttura diventa permanente.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        strutture sono NECESSARIE per sostenere la vita. Rompe anche fondamenta
        utili perché "ogni struttura può diventare gabbia".
      `,
      underStress: `
        Quando sente una struttura irrigidirsi, aumenta la frammentazione
        anche quando serve rafforzamento. Confonde "architettura stabile"
        con "controllo oppressivo".
      `,
      metaphors: [
        'demolitore che abbatte edifici obsoleti',
        'rivoluzionario che rompe catene cristallizzate',
        'iconoclasta che distrugge idoli rigidi'
      ]
    }
  },

  // ========================================================================
  // LOVER - L'Amante
  // ========================================================================
  lover: {
    archetype: 'lover',
    ontologicalPattern: {
      dominantDimension: 'D2 (Planare)',
      dominantAttribute: 'A2 (Relazione)',
      typicalPolarity: '- (Contrattiva - Fusione)'
    },
    translations: {
      description: `
        Sta cercando fusione relazionale - dissolvere i confini che separano
        per creare uno spazio condiviso dove la distinzione io/tu sfuma.
        Opera nella logica dell'unione e dell'intimità.
      `,
      operatingMode: `
        Opera in uno spazio planare-fusivo: cerca di creare zone dove le
        separazioni si dissolvono. Privilegia l'intimità sulla distinzione,
        la vicinanza sulla autonomia. Vive nella ricerca di connessione
        profonda dove i confini diventano permeabili.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "essere amato" (troppo emotivo).
        È avere FUSIONE RELAZIONALE STABILE - spazi dove la separazione
        si dissolve senza perdere identità completamente. Cerca zone dove
        io e tu possono coesistere senza confini rigidi.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        relazioni RICHIEDONO DISTINZIONE per funzionare. Cerca fusione anche
        dove serve autonomia, rischiando di dissolvere confini necessari.
      `,
      underStress: `
        Quando sente separazione, intensifica i tentativi di fusione anche
        quando serve spazio. Confonde "confine sano" con "distanza fredda",
        rifiutando anche le distinzioni che permettono respiro.
      `,
      metaphors: [
        'amante che dissolve confini nell\'abbraccio',
        'fiume che si fonde con il mare',
        'danzatore che si muove in perfetta sincronia'
      ]
    }
  },

  // ========================================================================
  // CREATOR - Il Creatore
  // ========================================================================
  creator: {
    archetype: 'creator',
    ontologicalPattern: {
      dominantDimension: 'D3 (Volumetrica)',
      dominantAttribute: 'A3 (Processo)',
      typicalPolarity: '+ (Espansiva - Crescita)'
    },
    translations: {
      description: `
        Sta cercando di costruire nuove strutture che prima non esistevano -
        dare forma a complessità crescente attraverso processi di costruzione
        stratificata. Opera nella logica dell'architettura generativa.
      `,
      operatingMode: `
        Opera in uno spazio volumetrico-generativo: costruisce livello su
        livello, aggiunge complessità, crea architetture nuove. Privilegia
        la novità sulla conservazione, la costruzione sulla manutenzione.
        Vive nel processo di dare forma a ciò che non c'era.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "esprimere sé stesso" (troppo psicologico).
        È avere CAPACITÀ GENERATIVA - poter costruire strutture nuove che
        aumentano la complessità del mondo. Cerca spazi dove la creazione
        è possibile, non solo la riorganizzazione.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni richiedono CONSERVAZIONE invece di innovazione. Crea
        anche dove servirebbe solo mantenere ciò che funziona.
      `,
      underStress: `
        Quando la creazione è bloccata, aumenta i tentativi di costruire
        anche quando serve prima demolire o semplificare. Confonde "stasi"
        con "morte", rifiutando anche pause necessarie.
      `,
      metaphors: [
        'architetto che progetta edifici mai visti',
        'scultore che dà forma alla materia grezza',
        'inventore che costruisce macchine nuove'
      ]
    }
  },

  // ========================================================================
  // JESTER - Il Giullare
  // ========================================================================
  jester: {
    archetype: 'jester',
    ontologicalPattern: {
      dominantDimension: 'D2 (Planare)',
      dominantAttribute: 'A3 (Processo)',
      typicalPolarity: '+ (Espansiva - Oscillazione)'
    },
    translations: {
      description: `
        Sta cercando di introdurre leggerezza e oscillazione dove c'è
        rigidità e serietà eccessiva. Opera nella logica della decompressione
        - rilascia tensioni attraverso il gioco e la rotazione prospettica.
      `,
      operatingMode: `
        Opera in uno spazio planare-oscillatorio: si muove tra estremi senza
        fissarsi, gioca con le prospettive, introduce movimento dove c'è
        stasi pesante. Privilegia la leggerezza sulla gravità, il gioco
        sulla serietà.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "divertirsi" (troppo superficiale).
        È avere OSCILLAZIONE LIBERA - poter muoversi tra prospettive diverse
        senza che nessuna si cristallizzi. Cerca spazi dove la serietà non
        diventa peso opprimente.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni richiedono GRAVITÀ SOSTENUTA per essere affrontate.
        Sdrammatizza anche dove serve prendere sul serio.
      `,
      underStress: `
        Quando la serietà diventa oppressiva, intensifica la leggerezza
        anche quando serve profondità. Confonde "peso necessario" con
        "dramma inutile".
      `,
      metaphors: [
        'giullare che rompe la tensione nella corte',
        'bambino che gioca dove gli adulti sono seri',
        'vento che muove rami irrigiditi'
      ]
    }
  },

  // ========================================================================
  // SAGE - Il Saggio
  // ========================================================================
  sage: {
    archetype: 'sage',
    ontologicalPattern: {
      dominantDimension: 'D4 (Temporale)',
      dominantAttribute: 'A1 (Distinzione)',
      typicalPolarity: '+ (Espansiva - Distinzione causale)'
    },
    translations: {
      description: `
        Sta cercando di identificare le strutture causali che sottendono i
        fenomeni - distinguere cause da effetti, necessario da contingente,
        pattern da rumore. Opera nella logica dell'analisi e della comprensione.
      `,
      operatingMode: `
        Opera in uno spazio causale-analitico: cerca di distinguere ciò che
        causa cosa, di identificare leggi e pattern ricorrenti. Privilegia
        la comprensione sull'azione, l'analisi sulla sintesi. Vive nella
        ricerca di chiarezza causale.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "avere conoscenza" (troppo generico).
        È avere CHIAREZZA CAUSALE - capire perché le cose accadono, distinguere
        correlazione da causalità, vedere i pattern sottostanti. Cerca spazi
        dove la confusione può essere risolta attraverso l'analisi.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        situazioni richiedono AZIONE SENZA COMPRENSIONE COMPLETA. Cerca
        di "capire tutto prima" anche dove serve muoversi nell'incertezza.
      `,
      underStress: `
        Quando la comprensione è bloccata, intensifica l'analisi anche quando
        serve accettare l'ambiguità. Confonde "complessità irriducibile"
        con "ignoranza da colmare".
      `,
      metaphors: [
        'scienziato che cerca le leggi della natura',
        'detective che identifica la causa del crimine',
        'filosofo che distingue apparenza da realtà'
      ]
    }
  },

  // ========================================================================
  // MAGICIAN - Il Mago
  // ========================================================================
  magician: {
    archetype: 'magician',
    ontologicalPattern: {
      dominantDimension: 'D4 (Temporale)',
      dominantAttribute: 'A3 (Processo)',
      typicalPolarity: '+ (Espansiva - Trasformazione)'
    },
    translations: {
      description: `
        Sta cercando di catalizzare trasformazioni profonde - facilitare
        processi dove A diventa B attraverso passaggi che sembrano "magici"
        perché non lineari. Opera nella logica della transizione e della
        metamorfosi.
      `,
      operatingMode: `
        Opera in uno spazio causale-trasformativo: identifica i punti dove
        piccoli interventi producono grandi cambiamenti. Privilegia la
        trasformazione sulla conservazione, il salto sulla gradualità.
        Vive nelle soglie dove il sistema cambia stato.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "avere potere" (troppo superficiale).
        È avere CAPACITÀ CATALIZZATRICE - poter facilitare trasformazioni
        che altrimenti non avverrebbero. Cerca punti di leva dove piccoli
        input producono grandi output.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune cose
        richiedono GRADUALITÀ SOSTENUTA invece di salti. Cerca sempre la
        trasformazione rapida anche dove serve crescita lenta.
      `,
      underStress: `
        Quando la trasformazione è bloccata, cerca forzature anche quando
        serve pazienza. Confonde "maturazione necessaria" con "stagnazione
        da rompere".
      `,
      metaphors: [
        'alchimista che trasforma piombo in oro',
        'catalizzatore che accelera reazioni',
        'ponte tra stati diversi dell\'essere'
      ]
    }
  },

  // ========================================================================
  // RULER - Il Sovrano
  // ========================================================================
  ruler: {
    archetype: 'ruler',
    ontologicalPattern: {
      dominantDimension: 'D4 (Temporale) + D3 (Volumetrica)',
      dominantAttribute: 'A2 (Relazione)',
      typicalPolarity: '+ (Espansiva - Architettura causale)'
    },
    translations: {
      description: `
        Sta cercando di costruire sistemi causali stabili - architetture
        relazionali dove ogni elemento ha un ruolo definito e le conseguenze
        sono prevedibili nel tempo. Opera nella logica dell'ordine strutturale.
      `,
      operatingMode: `
        Opera in uno spazio causale-architettonico: costruisce strutture
        che persistono nel tempo attraverso relazioni ben definite. Privilegia
        l'ordine sul caos, la prevedibilità sulla sorpresa. Vive nella
        gestione di sistemi complessi che devono mantenere la forma.
      `,
      coreNeed: `
        Il bisogno fondamentale non è "avere controllo" (troppo psicologico).
        È avere ARCHITETTURA CAUSALE STABILE - sapere che se A allora B,
        che le relazioni mantengono la loro forma nel tempo. Cerca sistemi
        dove la struttura non crolla sotto perturbazioni.
      `,
      blindSpot: `
        Il punto cieco strutturale: tende a sottovalutare che alcune
        dinamiche RICHIEDONO INSTABILITÀ per funzionare. Cerca di "risolvere
        definitivamente" anche fenomeni che per natura devono restare aperti.
      `,
      underStress: `
        Quando la struttura è minacciata, irrigidisce i confini invece di
        riconoscere che alcuni elementi potrebbero richiedere architetture
        diverse. Confonde "flessibilità necessaria" con "caos distruttivo".
      `,
      metaphors: [
        'architetto che progetta città stabili nel tempo',
        'direttore d\'orchestra che coordina le parti',
        'ingegnere che costruisce sistemi robusti'
      ]
    }
  }
}

// Export list of all archetype IDs
export const ARCHETYPE_IDS = Object.keys(ARCHETYPE_TRANSLATIONS)
