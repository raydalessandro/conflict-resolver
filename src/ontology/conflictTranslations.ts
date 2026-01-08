/**
 * CONFLICT TRANSLATIONS
 * Natural language translations for archetype vs archetype conflicts
 */

export interface ConflictTranslation {
  patterns: [string, string]
  ontologicalNature: string
  translations: {
    structuralNature: string
    whyConflict: string
    whatASeesInB: string
    whatBSeesInA: string
    escalationPattern: string
    bridgeStrategy: string
    bridgePhrases: {
      forA: string[]
      forB: string[]
    }
  }
}

export const CONFLICT_TRANSLATIONS: Record<string, ConflictTranslation> = {

  // ========================================================================
  // RULER vs EXPLORER - Ordine vs Libertà
  // ========================================================================
  'ruler-explorer': {
    patterns: ['ruler', 'explorer'],
    ontologicalNature: 'D4/D3 (Causale-Strutturale) vs D2 (Planare-Ciclico) + A2 (Relazione) vs A1 (Distinzione)',
    translations: {
      structuralNature: `
        Questo non è conflitto di personalità - è conflitto DIMENSIONALE.

        ${personLabel('A')} opera in spazio CAUSALE-STRUTTURALE (D4+D3): cerca
        di costruire architetture che persistono nel tempo attraverso relazioni
        stabili e prevedibili.

        ${personLabel('B')} opera in spazio PLANARE-ESPLORATIVO (D2): cerca
        libertà di movimento su superfici aperte, senza vincoli che bloccano
        i gradi di libertà.

        Non è "controllo vs libertà" (troppo banale). È "architettura temporale
        vs movimento planare".
      `,
      whyConflict: `
        Il conflitto emerge perché le modalità sono ORTOGONALI - non semplicemente
        diverse, ma operanti su assi perpendicolari.

        Quando ${personLabel('A')} dice "dobbiamo pianificare", intende "costruiamo
        una causalità che persiste nel tempo, dove ogni parte ha un ruolo stabile".

        Quando ${personLabel('B')} sente "pianificare", decodifica "bloccare il
        movimento, chiudere gradi di libertà che per me sono ossigeno".

        State usando protocolli incompatibili. Come mandare JSON a chi si aspetta XML.
      `,
      whatASeesInB: `
        ${personLabel('A')} vede ${personLabel('B')} come "caotico, inaffidabile,
        incapace di impegno, che mette a rischio la struttura".

        MA non è vero: ${personLabel('B')} è affidabilissimo... nei contesti che
        richiedono adattamento. ${personLabel('A')} sta misurando ${personLabel('B')}
        con metri causali, dove ${personLabel('B')} opera con logica rotazionale.

        È come giudicare un surfista perché non costruisce ponti.
      `,
      whatBSeesInA: `
        ${personLabel('B')} vede ${personLabel('A')} come "rigido, controllante,
        che soffoca la vita spontanea con regole inutili".

        MA non è vero: ${personLabel('A')} cerca solo di costruire fondamenta
        che non crollino. ${personLabel('B')} sta interpretando "struttura
        necessaria" come "gabbia arbitraria".

        È come giudicare un architetto perché non improvvisa.
      `,
      escalationPattern: `
        L'escalation segue SEMPRE questo loop:

        1. ${personLabel('A')} propone struttura → ${personLabel('B')} lo vive
           come restrizione
        2. ${personLabel('B')} cerca flessibilità → ${personLabel('A')} lo vive
           come caos minaccioso
        3. ${personLabel('A')} irrigidisce (per compensare l'instabilità) →
           ${personLabel('B')} si ribella (per respirare)
        4. Loop infinito con tensione crescente

        PREDIZIONE VERIFICABILE: Se non interrompete questo loop, vedrete:
        - ${personLabel('A')} diventa sempre più "controllante" (in realtà:
          cerca disperatamente stabilità in un sistema che percepisce instabile)
        - ${personLabel('B')} diventa sempre più "sfuggente" (in realtà: cerca
          disperatamente movimento in uno spazio che percepisce soffocante)
      `,
      bridgeStrategy: `
        La soluzione NON è compromesso ("un po' di struttura, un po' di libertà" -
        farebbe soffrire entrambi).

        La soluzione è SEPARAZIONE DIMENSIONALE:

        → IDENTIFICATE quali aree della vostra vita DEVONO operare in spazio
          causale-strutturale:
          • Finanze (budget, investimenti, spese fisse)
          • Casa (manutenzione, mutuo, bollette)
          • Impegni a lungo termine (lavoro, famiglia)
          • Progetti con scadenze fisse

          In queste aree: ${personLabel('A')} ha ragione strutturalmente.
          ${personLabel('B')}: accetta che qui serve architettura stabile.
          La tua libertà in questi domini mette a rischio fondamenta necessarie.

        → IDENTIFICATE quali aree DEVONO operare in spazio ciclico-esplorativo:
          • Tempo libero non vincolato
          • Creatività e esplorazione personale
          • Socialità spontanea
          • Hobbies e passioni
          • Decisioni reversibili

          In queste aree: ${personLabel('B')} ha ragione strutturalmente.
          ${personLabel('A')}: accetta che qui serve movimento libero.
          Il tuo ordine in questi domini soffoca la vitalità necessaria.

        → SMETTETE di combattere su "chi ha ragione in generale".
          La domanda corretta è: "quale modalità serve in QUESTO specifico dominio?"

        Non state sbagliando - state usando strumenti diversi. Il martello non è
        sbagliato perché non avvita viti.
      `,
      bridgePhrases: {
        forA: [
          `Quando ${personLabel('B')} dice "mi sento soffocato", NON significa
          "non mi importa della nostra vita insieme". Significa "questa specifica
          struttura sta chiudendo gradi di libertà che per me sono ossigeno".

          Prova: "Capisco che hai bisogno di movimento. Identifichiamo insieme
          le fondamenta minime di cui HO DAVVERO bisogno per sentire stabilità.
          Su tutto il resto, puoi avere libertà completa."`,

          `Quando ${personLabel('B')} "evita" impegni, NON significa "è inaffidabile".
          Significa "sta operando in modalità ciclica dove gli impegni rigidi
          non hanno senso strutturale".

          Prova: "Quali sono le 3 strutture fondamentali che non posso negoziare
          perché senza crollerei? Il resto può restare fluido."`,
        ],
        forB: [
          `Quando ${personLabel('A')} dice "dobbiamo decidere", NON significa
          "ti voglio controllare". Significa "ho bisogno di sapere che alcune
          cose non crolleranno domani, che posso contare su fondamenta stabili".

          Prova: "Capisco che hai bisogno di prevedibilità su alcune cose.
          Dimmi quali sono gli impegni minimi su cui posso essere fermo,
          e ti prometto che su tutto il resto mantengo flessibilità totale."`,

          `Quando ${personLabel('A')} "insiste" su pianificazione, NON significa
          "è rigido per principio". Significa "sta cercando di costruire
          un'architettura che tenga nel tempo".

          Prova: "Fammi una lista di cosa ti serve per sentirti sicuro.
          Su quelle cose mi impegno con te. Sul resto, lasciami libero di
          esplorare senza sentirti minacciato."`,
        ]
      }
    }
  },

  // ========================================================================
  // LOVER vs EXPLORER - Fusione vs Autonomia
  // ========================================================================
  'lover-explorer': {
    patterns: ['lover', 'explorer'],
    ontologicalNature: 'D2 (Relazionale-Fusionale) + A2 (Relazione massimizzata) vs D2 (Planare-Esplorativo) + A1 (Distinzione)',
    translations: {
      structuralNature: `
        Questo è un conflitto tra due modalità OPPOSTE di vivere lo spazio relazionale.

        ${personLabel('A')} cerca FUSIONE RELAZIONALE: ridurre la distanza a zero,
        massimizzare la connessione, sentire l'altro come parte continua di sé.
        Opera in spazio D2 dove la relazione è il tessuto stesso della realtà.

        ${personLabel('B')} cerca AUTONOMIA ESPLORATIVA: mantenere gradi di libertà,
        preservare lo spazio individuale, muoversi senza vincoli di connessione costante.
        Opera in spazio D2 ma con focus su movimento libero, non su connessione.

        Non è "bisognoso vs freddo". È "fusione vs distinzione" su scala relazionale.
      `,
      whyConflict: `
        Il conflitto emerge perché state usando la STESSA DIMENSIONE (D2 planare) ma con
        ATTRIBUTI OPPOSTI (A2 relazione vs A1 distinzione).

        Quando ${personLabel('A')} cerca vicinanza, ${personLabel('B')} la sente come
        "chiusura dello spazio di movimento". Quando ${personLabel('B')} cerca spazio,
        ${personLabel('A')} lo sente come "rottura della connessione".

        State entrambi operando nello stesso spazio ma con bisogni strutturalmente opposti.
      `,
      whatASeesInB: `
        ${personLabel('A')} vede ${personLabel('B')} come "distaccato, freddo, evasivo,
        non interessato alla relazione".

        MA non è vero: ${personLabel('B')} È relazionale, solo che la sua relazione
        richiede SPAZIO. ${personLabel('A')} sta confondendo "bisogno di spazio" con
        "mancanza di amore". Sono cose completamente diverse.
      `,
      whatBSeesInA: `
        ${personLabel('B')} vede ${personLabel('A')} come "appiccicoso, soffocante,
        bisognoso, che non capisce i confini".

        MA non è vero: ${personLabel('A')} non è "bisognoso" - cerca FUSIONE RELAZIONALE
        STABILE. ${personLabel('B')} sta confondendo "bisogno di connessione" con
        "dipendenza patologica". Sono cose completamente diverse.
      `,
      escalationPattern: `
        Loop prevedibile:
        1. ${personLabel('A')} cerca più vicinanza → ${personLabel('B')} si sente soffocato
        2. ${personLabel('B')} si allontana → ${personLabel('A')} si sente abbandonato
        3. ${personLabel('A')} insegue di più → ${personLabel('B')} fugge di più
        4. Spirale infinita con distanza crescente

        PREDIZIONE: Se continuate, ${personLabel('A')} diventerà sempre più "ansioso"
        (in realtà: terrorizzato dall'abbandono), ${personLabel('B')} sempre più
        "evitante" (in realtà: disperato per respirare).
      `,
      bridgeStrategy: `
        La soluzione NON è "un po' di spazio, un po' di vicinanza" (compromesso che
        fa soffrire entrambi).

        La soluzione è RITMO ALTERNATO:

        → DEFINITE tempi di FUSIONE TOTALE:
          • Momenti dove ${personLabel('A')} ha vicinanza piena
          • ${personLabel('B')} accetta che qui si è "insieme", non "vicini"
          • Niente telefoni, niente "uscite separate"
          • Connessione massima per tempo definito

        → DEFINITE tempi di AUTONOMIA TOTALE:
          • Momenti dove ${personLabel('B')} ha spazio completo
          • ${personLabel('A')} accetta che qui "distanza non significa abbandono"
          • Niente messaggi continui, niente check-in emotivi
          • Libertà massima per tempo definito

        La chiave è ALTERNANZA PULITA, non mescolanza continua.
      `,
      bridgePhrases: {
        forA: [
          `Quando ${personLabel('B')} dice "ho bisogno di spazio", NON significa
          "non mi interessi". Significa "ho bisogno di movimento libero per poi
          tornare e darti connessione piena". Il suo allontanarsi è parte del suo
          modo di amarti, non una negazione dell'amore.`,

          `Prova: "Dimmi quanto spazio ti serve per sentirti libero. In quel tempo
          io faccio le mie cose e non ti cerco. Poi quando torni, sono qui per
          connetterci davvero. Il tuo spazio non mi spaventa se so che poi torni."`,
        ],
        forB: [
          `Quando ${personLabel('A')} dice "mi manchi", NON significa "sei difettoso
          se non stai sempre con me". Significa "la mia architettura relazionale
          richiede connessione frequente per sentirsi stabile". Non è dipendenza -
          è come funziona la sua struttura.`,

          `Prova: "Dimmi di quanta vicinanza hai bisogno per sentirti sicuro.
          In quei momenti ti do connessione piena, senza riserve. Poi quando ho
          bisogno di spazio, tu sai che non è abbandono - è solo il mio modo di
          ricaricarmi per tornare da te."`,
        ]
      }
    }
  },

  // ========================================================================
  // HERO vs CAREGIVER - Azione vs Cura
  // ========================================================================
  'hero-caregiver': {
    patterns: ['hero', 'caregiver'],
    ontologicalNature: 'D1 (Lineare-Direzionale) + A3 (Processo-Azione) vs D3 (Volumetrica-Relazionale) + A2 (Relazione-Cura)',
    translations: {
      structuralNature: `
        Conflitto tra MODALITÀ DI INTERVENTO opposte.

        ${personLabel('A')} opera in spazio LINEARE-DIREZIONALE: vede problema →
        traccia linea verso soluzione → agisce con forza → problema risolto.
        Focus su AZIONE DIRETTA che modifica lo stato delle cose.

        ${personLabel('B')} opera in spazio VOLUMETRICO-RELAZIONALE: vede problema →
        considera il contesto → protegge le persone coinvolte → offre supporto.
        Focus su PRESERVARE BENESSERE di tutti gli elementi del sistema.

        Non è "freddo vs caldo". È "intervento diretto vs cura sistemica".
      `,
      whyConflict: `
        Il conflitto emerge perché state operando su DIMENSIONI DIVERSE (D1 vs D3)
        e ATTRIBUTI DIVERSI (A3 processo vs A2 relazione).

        ${personLabel('A')} vede ogni problema come "ostacolo da superare con azione".
        ${personLabel('B')} vede ogni problema come "situazione che richiede cura".

        Quando ${personLabel('A')} agisce, ${personLabel('B')} vede "azione che
        danneggia le persone". Quando ${personLabel('B')} si prende cura, ${personLabel('A')}
        vede "procrastinazione che peggiora il problema".
      `,
      whatASeesInB: `
        ${personLabel('A')} vede ${personLabel('B')} come "troppo emotivo, che
        rallenta tutto, che protegge quando serve agire, debole".

        MA non è vero: ${personLabel('B')} NON è debole - sta proteggendo l'integrità
        del sistema. La sua "lentezza" è attenzione alle conseguenze relazionali.
      `,
      whatBSeesInA: `
        ${personLabel('B')} vede ${personLabel('A')} come "insensibile, che non
        considera le persone, che agisce senza pensare alle conseguenze emotive".

        MA non è vero: ${personLabel('A')} NON è insensibile - sta risolvendo il
        problema per proteggere tutti. La sua "durezza" è focus sull'efficacia.
      `,
      escalationPattern: `
        Loop tipico:
        1. Emerge problema → ${personLabel('A')} vuole agire subito
        2. ${personLabel('B')} chiede di considerare le persone → ${personLabel('A')}
           vede "rallentamento inutile"
        3. ${personLabel('A')} agisce lo stesso → ${personLabel('B')} vede "mancanza
           di rispetto per chi soffre"
        4. ${personLabel('B')} critica l'azione → ${personLabel('A')} vede "sabotaggio"

        PREDIZIONE: ${personLabel('A')} diventerà sempre più "bulldozer" (cercando
        di superare la resistenza), ${personLabel('B')} sempre più "difensivo"
        (proteggendo chi viene travolto).
      `,
      bridgeStrategy: `
        La soluzione è SEQUENZA COORDINATA invece di competizione:

        → FASE 1 - Valutazione (guidata da ${personLabel('B')}):
          • Chi verrà impattato dall'azione?
          • Quali sono i costi relazionali/emotivi?
          • Come proteggere le persone vulnerabili?

        → FASE 2 - Azione (guidata da ${personLabel('A')}):
          • Tracciare la linea più diretta alla soluzione
          • Agire con decisione e forza
          • Superare ostacoli e resistenze

        → FASE 3 - Integrazione (insieme):
          • ${personLabel('A')} risolve il problema tecnico
          • ${personLabel('B')} ripara i danni relazionali
          • Due competenze complementari, non opposte

        NON compete su "chi ha ragione" - collaborate in sequenza.
      `,
      bridgePhrases: {
        forA: [
          `Quando ${personLabel('B')} dice "pensa alle persone", NON significa
          "non fare niente". Significa "la tua azione sarà più efficace se consideri
          prima l'impatto umano". Non sta sabotando - sta completando la tua visione.`,

          `Prova: "Ok, prima dimmi: chi verrà danneggiato dalla mia azione? Come
          posso proteggere quella persona mentre risolvo il problema? Poi agisco,
          ma con la tua mappa delle conseguenze umane."`,
        ],
        forB: [
          `Quando ${personLabel('A')} dice "dobbiamo agire", NON significa "non
          mi importa delle persone". Significa "vedo un problema che peggiorerà
          se non interveniamo". La sua urgenza è protezione, non insensibilità.`,

          `Prova: "Hai ragione, dobbiamo agire. Dammi 5 minuti per mappare chi
          verrà impattato, poi procedi pure. Ti darò la lista di chi avrà bisogno
          di supporto dopo la tua azione, e io me ne occupo."`,
        ]
      }
    }
  },

  // ========================================================================
  // SAGE vs JESTER - Serietà vs Leggerezza
  // ========================================================================
  'sage-jester': {
    patterns: ['sage', 'jester'],
    ontologicalNature: 'D4 (Temporale-Causale) + A1 (Distinzione-Analisi) vs D2 (Planare-Ciclico) + A3 (Processo-Trasformazione)',
    translations: {
      structuralNature: `
        Conflitto tra DUE MODALITÀ di processare la realtà.

        ${personLabel('A')} opera in SPAZIO CAUSALE-ANALITICO: scompone, analizza,
        cerca verità profonde, costruisce comprensioni logiche. Ogni cosa ha peso,
        significato, conseguenze che vanno comprese.

        ${personLabel('B')} opera in SPAZIO CICLICO-TRASFORMATIVO: usa ironia,
        sdrammatizza, trova angoli alternativi. Ogni cosa può essere vista da
        infinite prospettive, incluse quelle che alleggeriscono.

        Non è "intelligente vs stupido". È "profondità vs prospettiva".
      `,
      whyConflict: `
        ${personLabel('A')} vede la serietà come RISPETTO per la complessità.
        Prendere tutto seriamente = riconoscere che tutto ha conseguenze.

        ${personLabel('B')} vede la leggerezza come LIBERTÀ dalla rigidità.
        Sdrammatizzare = liberarsi da strutture mentali soffocanti.

        Quando ${personLabel('A')} analizza profondamente, ${personLabel('B')}
        vede "pesantezza che blocca il movimento". Quando ${personLabel('B')}
        sdrammatizza, ${personLabel('A')} vede "superficialità che insulta
        la complessità".
      `,
      whatASeesInB: `
        ${personLabel('A')} vede ${personLabel('B')} come "superficiale, che non
        capisce la gravità, immaturo, che banalizza tutto".

        MA non è vero: ${personLabel('B')} CAPISCE perfettamente - usa leggerezza
        come STRUMENTO per non restare intrappolato. La sua ironia è intelligenza,
        non stupidità.
      `,
      whatBSeesInA: `
        ${personLabel('B')} vede ${personLabel('A')} come "pesante, noioso, che
        complica tutto, che si perde in dettagli inutili".

        MA non è vero: ${personLabel('A')} NON complica - sta rispettando la
        complessità reale. La sua serietà è precisione, non pesantezza gratuita.
      `,
      escalationPattern: `
        Loop classico:
        1. ${personLabel('A')} analizza qualcosa in profondità
        2. ${personLabel('B')} fa battuta/sdrammatizza → ${personLabel('A')}
           si sente "non rispettato"
        3. ${personLabel('A')} insiste sulla serietà → ${personLabel('B')}
           si sente "soffocato dalla pesantezza"
        4. ${personLabel('B')} aumenta l'ironia → ${personLabel('A')}
           aumenta la serietà

        PREDIZIONE: ${personLabel('A')} diventerà "professorale" (tentando di
        forzare la profondità), ${personLabel('B')} diventerà "sarcastico"
        (difendendosi dalla pesantezza).
      `,
      bridgeStrategy: `
        La soluzione è SEPARAZIONE TEMPORALE per contesto:

        → QUANDO SERVE PROFONDITÀ (decisioni importanti, analisi complesse):
          • ${personLabel('A')} guida
          • ${personLabel('B')} accetta che qui serve serietà
          • "Ok, questo è momento-analisi. Prendo sul serio."

        → QUANDO SERVE LEGGEREZZA (momenti sovraccarichi, tensione alta):
          • ${personLabel('B')} guida
          • ${personLabel('A')} accetta che qui serve sdrammatizzare
          • "Ok, questo è momento-prospettiva. Allento la presa."

        → RICONOSCETE che state bilanciandovi a vicenda:
          • ${personLabel('A')} impedisce a ${personLabel('B')} di essere
            troppo superficiale
          • ${personLabel('B')} impedisce a ${personLabel('A')} di essere
            troppo pesante
          • Siete correttivi reciproci, non nemici
      `,
      bridgePhrases: {
        forA: [
          `Quando ${personLabel('B')} sdrammatizza, NON significa "non capisco
          la gravità". Significa "ho capito perfettamente e ora sto liberando
          lo spazio mentale dalla paralisi". La leggerezza è intelligenza che
          mantiene movimento.`,

          `Prova: "Ok, hai ragione - sto appesantendo troppo. Fammi vedere
          l'angolo alternativo. Poi torno alla mia analisi, ma con più
          prospettiva."`,
        ],
        forB: [
          `Quando ${personLabel('A')} insiste sulla serietà, NON significa "sono
          noioso/pesante". Significa "vedo complessità che richiede rispetto".
          La profondità è intelligenza che onora la realtà.`,

          `Prova: "Hai ragione, questo è importante. Dimmi cosa stai vedendo
          che io non sto considerando. Dopo alleggerisco, ma prima voglio capire
          la tua mappa completa."`,
        ]
      }
    }
  },

  // ========================================================================
  // RULER vs REBEL - Controllo vs Autonomia
  // ========================================================================
  'ruler-rebel': {
    patterns: ['ruler', 'rebel'],
    ontologicalNature: 'D4/D3 (Causale-Gerarchico) + A2 (Relazione strutturata) vs D2 (Planare-Libero) + A1 (Distinzione)',
    translations: {
      structuralNature: `
        Questo è conflitto tra NECESSITÀ STRUTTURALE vs LIBERTÀ INDIVIDUALE.

        ${personLabel('A')} cerca ARCHITETTURA CAUSALE: sistemi che funzionano,
        gerarchie chiare, decisioni che tengono nel tempo. Opera costruendo
        strutture che persistono attraverso coordinamento.

        ${personLabel('B')} cerca AUTONOMIA DECISIONALE: libertà di scegliere,
        rifiuto di imposizioni esterne, autodeterminazione. Opera rifiutando
        vincoli che limitano la libertà individuale.

        Non è "tiranno vs ribelle adolescente". È "necessità di ordine vs
        necessità di libertà".
      `,
      whyConflict: `
        Il conflitto è tra due NECESSITÀ GENUINE:
        - ${personLabel('A')} ha ragione: senza struttura, i sistemi collassano
        - ${personLabel('B')} ha ragione: senza libertà, le persone muoiono dentro

        Quando ${personLabel('A')} stabilisce regole, ${personLabel('B')} vede
        "oppressione della libertà". Quando ${personLabel('B')} rifiuta regole,
        ${personLabel('A')} vede "minaccia al sistema".

        Entrambi state difendendo valori legittimi che sembrano incompatibili.
      `,
      whatASeesInB: `
        ${personLabel('A')} vede ${personLabel('B')} come "anarchico, irresponsabile,
        che mette a rischio tutto, immaturo".

        MA non è vero: ${personLabel('B')} NON è irresponsabile - sta difendendo
        la libertà individuale da quella che percepisce come tirannia.
      `,
      whatBSeesInA: `
        ${personLabel('B')} vede ${personLabel('A')} come "autoritario, controllante,
        che soffoca la vita, tiranno".

        MA non è vero: ${personLabel('A')} NON è tiranno - sta cercando di
        mantenere in piedi sistemi che servono a tutti, incluso ${personLabel('B')}.
      `,
      escalationPattern: `
        Loop pericoloso:
        1. ${personLabel('A')} stabilisce regola → ${personLabel('B')} la vive
           come oppressione
        2. ${personLabel('B')} viola/ignora regola → ${personLabel('A')} vede
           minaccia al sistema
        3. ${personLabel('A')} rafforza controllo → ${personLabel('B')} intensifica
           ribellione
        4. Escalation verso rottura totale

        PREDIZIONE: ${personLabel('A')} diventerà "dittatoriale" (cercando di
        salvare il sistema), ${personLabel('B')} diventerà "distruttivo" (cercando
        di salvare la libertà).
      `,
      bridgeStrategy: `
        La soluzione è DISTINZIONE tra STRUTTURE NECESSARIE vs CONTROLLO ARBITRARIO:

        → ${personLabel('A')}: quali sono le 3-5 regole VERAMENTE necessarie
          per cui il sistema collasserebbe senza?
          • Non 20 regole - le 3-5 FONDAMENTALI
          • Quelle dove il caos creerebbe danno reale
          • Su queste: non negoziabili

        → ${personLabel('B')}: su quelle 3-5 regole fondamentali, accetti che
          la libertà totale causerebbe danno reale?
          • Non "piace/non piace" - causerebbe DANNO REALE?
          • Se sì: accetta vincolo come necessario
          • In cambio: libertà totale su tutto il resto

        → SU TUTTO IL RESTO: ${personLabel('B')} ha autonomia completa
          • ${personLabel('A')} non controlla
          • Libertà vera, non "concessione graziosa"

        Non è compromesso - è SEPARAZIONE tra necessità strutturale e libertà.
      `,
      bridgePhrases: {
        forA: [
          `Quando ${personLabel('B')} rifiuta le tue regole, NON significa
          "voglio distruggere tutto". Significa "sento la mia libertà soffocata
          da vincoli che mi sembrano arbitrari". Distingui per lui cosa è NECESSARIO
          vs cosa è solo TUA preferenza.`,

          `Prova: "Dimmi quali regole senti come oppressive. Se riesco a ridurle
          alle sole necessarie per non far collassare il sistema, su tutto il
          resto hai libertà totale. Ma quelle necessarie, sono non negoziabili."`,
        ],
        forB: [
          `Quando ${personLabel('A')} insiste su regole, NON sempre è "controllo
          per controllo". A volte difende strutture che proteggono ANCHE te.
          Chiedigli di distinguere cosa è necessario vs cosa è preferenza.`,

          `Prova: "Ok, spiegami: se ignoro questa regola, cosa collassa
          OGGETTIVAMENTE? Se la risposta è reale, accetto il vincolo. Se è solo
          tua preferenza, chiedo libertà. Ma sono disposto ad accettare necessità
          strutturali vere."`,
        ]
      }
    }
  },

}

// Helper function for person labels
function personLabel(person: 'A' | 'B'): string {
  return `[LABEL_${person}]` // Will be replaced by actual names/labels
}

// Export list of all available conflict patterns
export const CONFLICT_PATTERN_IDS = Object.keys(CONFLICT_TRANSLATIONS)
