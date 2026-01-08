/**
 * ANALYZER ENGINE
 * Analizza le risposte e identifica archetipi, pattern, ponti
 */

import type { 
  ArchetypeId, 
  PersonResponses,
  ArchetypeIdentification,
  RoundAnalysis,
  Evolution,
  NextStep,
  PersonAnalysis
} from '@/types'

import { 
  ARCHETYPES, 
  findConflictPattern, 
  BRIDGE_STRATEGIES 
} from './archetypes'

// Keywords per identificare archetipi
const ARCHETYPE_KEYWORDS: Record<ArchetypeId, {
  situation: string[]
  feeling: string[]
  need: string[]
}> = {
  innocent: {
    situation: ['pace', 'tranquillo', 'normale', 'sempre', 'prima', 'bello', 'semplice'],
    feeling: ['paura', 'ansia', 'preoccupato', 'triste', 'perso', 'confuso'],
    need: ['tornare', 'pace', 'armonia', 'come prima', 'tranquillità', 'serenità']
  },
  everyman: {
    situation: ['tutti', 'insieme', 'gruppo', 'famiglia', 'normale', 'comune'],
    feeling: ['solo', 'escluso', 'diverso', 'fuori', 'isolato'],
    need: ['appartenere', 'insieme', 'gruppo', 'normalità', 'accettato']
  },
  hero: {
    situation: ['problema', 'sfida', 'difficile', 'battaglia', 'lotta', 'duro'],
    feeling: ['frustrato', 'arrabbiato', 'impotente', 'bloccato', 'limitato'],
    need: ['risolvere', 'agire', 'fare', 'affrontare', 'vincere', 'dimostrare']
  },
  caregiver: {
    situation: ['preoccupato', 'aiutare', 'proteggere', 'cura', 'bene'],
    feeling: ['preoccupato', 'responsabile', 'in colpa', 'ansioso'],
    need: ['aiutare', 'proteggere', 'essere utile', 'prendermi cura']
  },
  explorer: {
    situation: ['chiuso', 'bloccato', 'fermo', 'sempre uguale', 'routine'],
    feeling: ['soffocato', 'intrappolato', 'annoiato', 'limitato'],
    need: ['spazio', 'libertà', 'respirare', 'muovermi', 'esplorare']
  },
  rebel: {
    situation: ['regole', 'controllo', 'imposizione', 'devo', 'obbligo'],
    feeling: ['arrabbiato', 'ribelle', 'insofferente', 'frustrato'],
    need: ['libertà', 'autonomia', 'scegliere', 'decidere da solo']
  },
  lover: {
    situation: ['distante', 'freddo', 'lontano', 'disconnesso'],
    feeling: ['solo', 'non amato', 'rifiutato', 'abbandonato', 'vuoto'],
    need: ['vicinanza', 'amore', 'connessione', 'intimità', 'sentirmi amato']
  },
  creator: {
    situation: ['stagnante', 'ripetitivo', 'bloccato', 'senza idee'],
    feeling: ['frustrato', 'insoddisfatto', 'bloccato creativamente'],
    need: ['creare', 'costruire', 'esprimere', 'innovare', 'soluzione nuova']
  },
  jester: {
    situation: ['pesante', 'serio', 'drammatico', 'esagerato'],
    feeling: ['oppresso', 'appesantito', 'stanco del dramma'],
    need: ['leggerezza', 'ridere', 'sdrammatizzare', 'divertimento']
  },
  sage: {
    situation: ['confuso', 'non capisco', 'illogico', 'non ha senso'],
    feeling: ['confuso', 'perplesso', 'in cerca di risposte'],
    need: ['capire', 'comprendere', 'chiarezza', 'logica', 'spiegazione']
  },
  magician: {
    situation: ['cambiamento', 'trasformazione', 'evoluzione', 'crescita'],
    feeling: ['in transizione', 'in evoluzione'],
    need: ['trasformare', 'evolvere', 'cambiare profondamente', 'rinnovare']
  },
  ruler: {
    situation: ['caos', 'disordine', 'fuori controllo', 'anarchia'],
    feeling: ['fuori controllo', 'impotente', 'non rispettato'],
    need: ['ordine', 'controllo', 'rispetto', 'autorità', 'decisioni chiare']
  }
}

/**
 * Analizza testo e ritorna scores per archetipo
 */
function analyzeText(text: string): Record<ArchetypeId, number> {
  const normalizedText = text.toLowerCase()
  const scores = {} as Record<ArchetypeId, number>
  
  const archetypeIds = Object.keys(ARCHETYPES) as ArchetypeId[]
  
  archetypeIds.forEach(archId => {
    scores[archId] = 0
    const keywords = ARCHETYPE_KEYWORDS[archId]
    
    if (keywords) {
      Object.values(keywords).flat().forEach(keyword => {
        if (normalizedText.includes(keyword)) {
          scores[archId] += 1
        }
      })
    }
  })
  
  return scores
}

/**
 * Identifica archetipo dominante da risposte
 */
export function identifyArchetype(responses: Partial<PersonResponses>): ArchetypeIdentification {
  const archetypeIds = Object.keys(ARCHETYPES) as ArchetypeId[]
  const combinedScores = {} as Record<ArchetypeId, number>
  
  archetypeIds.forEach(archId => {
    combinedScores[archId] = 0
  })
  
  if (responses.situation) {
    const scores = analyzeText(responses.situation)
    archetypeIds.forEach(arch => {
      combinedScores[arch] += scores[arch] * 1
    })
  }
  
  if (responses.feeling) {
    const scores = analyzeText(responses.feeling)
    archetypeIds.forEach(arch => {
      combinedScores[arch] += scores[arch] * 1.5
    })
  }
  
  if (responses.need) {
    const scores = analyzeText(responses.need)
    archetypeIds.forEach(arch => {
      combinedScores[arch] += scores[arch] * 2
    })
  }
  
  let topArchetype: ArchetypeId = 'everyman'
  let topScore = 0
  
  archetypeIds.forEach(arch => {
    if (combinedScores[arch] > topScore) {
      topScore = combinedScores[arch]
      topArchetype = arch
    }
  })
  
  if (topScore < 2) {
    topArchetype = inferFromFeelings(responses.feeling || '')
  }
  
  return {
    primary: topArchetype,
    scores: combinedScores,
    confidence: topScore > 3 ? 'high' : topScore > 1 ? 'medium' : 'low'
  }
}

function inferFromFeelings(feeling: string): ArchetypeId {
  const f = feeling.toLowerCase()
  
  if (f.includes('solo') || f.includes('non amato') || f.includes('abbandonato')) return 'lover'
  if (f.includes('arrabbiato') || f.includes('frustrato')) return 'hero'
  if (f.includes('soffocato') || f.includes('intrappolato')) return 'explorer'
  if (f.includes('preoccupato') || f.includes('ansia')) return 'caregiver'
  if (f.includes('confuso') || f.includes('non capisco')) return 'sage'
  if (f.includes('fuori controllo')) return 'ruler'
  if (f.includes('triste') || f.includes('paura')) return 'innocent'
  
  return 'everyman'
}

/**
 * Genera analisi completa di un round
 */
export function generateRoundAnalysis(
  personA: PersonResponses,
  personB: PersonResponses,
  round: number = 1
): RoundAnalysis {
  const archA = identifyArchetype(personA)
  const archB = identifyArchetype(personB)
  
  const archetypeA = ARCHETYPES[archA.primary]
  const archetypeB = ARCHETYPES[archB.primary]
  
  const pattern = findConflictPattern(archA.primary, archB.primary)
  const bridge = ARCHETYPES[pattern.bridge]
  const bridgeStrategy = BRIDGE_STRATEGIES[pattern.bridge]
  
  const tension = calculateTension(personA, personB, archA.primary, archB.primary)
  
  const personAAnalysis: PersonAnalysis = {
    archetype: archA.primary,
    archetypeName: archetypeA.name,
    archetypeData: archetypeA,
    confidence: archA.confidence,
    interpretation: {
      whatTheySee: `Sta vivendo questa situazione dal bisogno di ${archetypeA.coreNeed.toLowerCase()}.`,
      whatTheyFear: `La paura sottostante è ${archetypeA.coreFear.toLowerCase()}.`,
      howTheyAct: archetypeA.inConflict.behavior,
      whatTheyNeed: archetypeA.inConflict.needs
    }
  }
  
  const personBAnalysis: PersonAnalysis = {
    archetype: archB.primary,
    archetypeName: archetypeB.name,
    archetypeData: archetypeB,
    confidence: archB.confidence,
    interpretation: {
      whatTheySee: `Sta vivendo questa situazione dal bisogno di ${archetypeB.coreNeed.toLowerCase()}.`,
      whatTheyFear: `La paura sottostante è ${archetypeB.coreFear.toLowerCase()}.`,
      howTheyAct: archetypeB.inConflict.behavior,
      whatTheyNeed: archetypeB.inConflict.needs
    }
  }
  
  const insights = [
    {
      type: 'communication' as const,
      title: 'Come state comunicando',
      content: `${archetypeA.name} tende a dire "${archetypeA.inConflict.language[0]}", mentre ${archetypeB.name} risponde con "${archetypeB.inConflict.language[0]}". Parlate lingue diverse.`
    },
    {
      type: 'needs' as const,
      title: 'Cosa cercate davvero',
      content: `Sotto il conflitto, A cerca ${archetypeA.coreNeed.toLowerCase()} e B cerca ${archetypeB.coreNeed.toLowerCase()}. Non sono necessariamente incompatibili.`
    },
    {
      type: 'fears' as const,
      title: 'Le paure che guidano',
      content: `A teme ${archetypeA.coreFear.toLowerCase()}. B teme ${archetypeB.coreFear.toLowerCase()}. Queste paure stanno guidando le reazioni di entrambi.`
    }
  ]
  
  const nextSteps = generateNextSteps(pattern, bridgeStrategy, archetypeA, archetypeB)
  
  return {
    round,
    personA: personAAnalysis,
    personB: personBAnalysis,
    pattern: {
      name: pattern.name,
      description: pattern.description,
      tension: pattern.tension
    },
    bridge: {
      archetype: pattern.bridge,
      name: bridge.name,
      reason: pattern.bridgeReason,
      strategy: bridgeStrategy,
      resolution: pattern.resolution
    },
    tension: {
      level: tension,
      label: tension > 0.7 ? 'alta' : tension > 0.4 ? 'media' : 'bassa'
    },
    blindSpots: {
      A: archetypeA.inConflict.blindSpot,
      B: archetypeB.inConflict.blindSpot
    },
    insights,
    nextSteps
  }
}

function calculateTension(
  personA: PersonResponses,
  personB: PersonResponses,
  archA: ArchetypeId,
  archB: ArchetypeId
): number {
  let tension = 0.5
  
  const highTensionPairs: [ArchetypeId, ArchetypeId][] = [
    ['ruler', 'rebel'],
    ['caregiver', 'rebel'],
    ['lover', 'explorer'],
    ['sage', 'jester']
  ]
  
  highTensionPairs.forEach(pair => {
    if ((archA === pair[0] && archB === pair[1]) ||
        (archA === pair[1] && archB === pair[0])) {
      tension += 0.2
    }
  })
  
  const intenseWords = ['mai', 'sempre', 'odio', 'impossibile', 'non sopporto', 'basta']
  const allText = `${personA.situation} ${personA.feeling} ${personB.situation} ${personB.feeling}`.toLowerCase()
  
  intenseWords.forEach(word => {
    if (allText.includes(word)) {
      tension += 0.05
    }
  })
  
  return Math.min(1, Math.max(0, tension))
}

function generateNextSteps(
  pattern: ReturnType<typeof findConflictPattern>,
  bridgeStrategy: typeof BRIDGE_STRATEGIES[ArchetypeId],
  archetypeA: typeof ARCHETYPES[ArchetypeId],
  archetypeB: typeof ARCHETYPES[ArchetypeId]
): NextStep[] {
  return [
    {
      type: 'bridge',
      title: `Provate l'approccio ${ARCHETYPES[pattern.bridge].name}`,
      content: bridgeStrategy.approach,
      phrases: bridgeStrategy.phrases
    },
    {
      type: 'awareness',
      title: 'Punti ciechi da considerare',
      content: `A potrebbe non vedere che ${archetypeA.inConflict.blindSpot.toLowerCase()}. B potrebbe non vedere che ${archetypeB.inConflict.blindSpot.toLowerCase()}.`
    },
    {
      type: 'avoid',
      title: 'Cosa evitare',
      content: `Non dire a A "${archetypeB.inConflict.language[0]}" - lo fa sentire ${archetypeA.coreFear}. Non dire a B "${archetypeA.inConflict.language[0]}" - lo fa sentire ${archetypeB.coreFear}.`
    }
  ]
}

/**
 * Analizza evoluzione tra round
 */
export function analyzeEvolution(
  _previousAnalysis: RoundAnalysis,
  currentRound: { personA: PersonResponses; personB: PersonResponses }
): Evolution {
  const evolution: Evolution = {
    tensionChange: 0,
    movements: [],
    stuckPoints: [],
    openings: []
  }
  
  if (currentRound.personA.recognition) {
    evolution.movements.push({
      person: 'A',
      type: 'recognition',
      content: 'A sta iniziando a vedere il punto di vista di B'
    })
    evolution.tensionChange -= 0.1
  }
  
  if (currentRound.personB.recognition) {
    evolution.movements.push({
      person: 'B',
      type: 'recognition',
      content: 'B sta iniziando a vedere il punto di vista di A'
    })
    evolution.tensionChange -= 0.1
  }
  
  const openingWords = ['capisco', 'forse', 'hai ragione', 'non avevo pensato', 'scusa']
  const aText = (currentRound.personA.addition || '').toLowerCase()
  const bText = (currentRound.personB.addition || '').toLowerCase()
  
  openingWords.forEach(word => {
    if (aText.includes(word)) {
      evolution.openings.push({ person: 'A', word })
      evolution.tensionChange -= 0.1
    }
    if (bText.includes(word)) {
      evolution.openings.push({ person: 'B', word })
      evolution.tensionChange -= 0.1
    }
  })
  
  return evolution
}
