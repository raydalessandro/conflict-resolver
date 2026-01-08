/**
 * TYPES
 * Definizioni TypeScript per tutto il sistema
 */

// === ARCHETIPI ===

export type ArchetypeId = 
  | 'innocent' | 'everyman' | 'hero' | 'caregiver'
  | 'explorer' | 'rebel' | 'lover' | 'creator'
  | 'jester' | 'sage' | 'magician' | 'ruler'

export interface ArchetypeConflictBehavior {
  behavior: string
  language: string[]
  blindSpot: string
  needs: string
}

export interface Archetype {
  id: ArchetypeId
  name: string
  essence: string
  coreNeed: string
  coreFear: string
  inConflict: ArchetypeConflictBehavior
  color: string
  icon: string
}

export interface ConflictPattern {
  name: string
  description: string
  tension: string
  bridge: ArchetypeId
  bridgeReason: string
  resolution: string
}

export interface BridgeStrategy {
  approach: string
  phrases: string[]
  mindset: string
}

// === CONTESTO ===

export type ContextId = 'couple' | 'family' | 'friends' | 'work' | 'general'

export interface ContextLabels {
  personA: string
  personB: string
}

export interface Context {
  id: ContextId
  name: string
  icon: string
  description: string
  labels: ContextLabels
}

// === SESSIONE ===

export type PersonId = 'A' | 'B'

export type SessionStatus = 
  | 'welcome' 
  | 'context' 
  | 'round' 
  | 'handoff' 
  | 'processing'
  | 'analysis' 
  | 'reflection' 
  | 'complete'

export interface PersonResponses {
  situation: string
  feeling: string
  need: string
  addition?: string
  recognition?: string
  timestamp: number
}

export interface RoundData {
  number: number
  personA: PersonResponses | null
  personB: PersonResponses | null
  timestamp: number
}

// === ANALISI ===

export interface ArchetypeIdentification {
  primary: ArchetypeId
  scores: Record<ArchetypeId, number>
  confidence: 'high' | 'medium' | 'low'
}

export interface PersonInterpretation {
  whatTheySee: string
  whatTheyFear: string
  howTheyAct: string
  whatTheyNeed: string
}

export interface PersonAnalysis {
  archetype: ArchetypeId
  archetypeName: string
  archetypeData: Archetype
  confidence: 'high' | 'medium' | 'low'
  interpretation: PersonInterpretation
}

export interface PatternAnalysis {
  name: string
  description: string
  tension: string
}

export interface BridgeAnalysis {
  archetype: ArchetypeId
  name: string
  reason: string
  strategy: BridgeStrategy
  resolution: string
}

export interface TensionAnalysis {
  level: number
  label: 'alta' | 'media' | 'bassa'
}

export interface Insight {
  type: 'communication' | 'needs' | 'fears'
  title: string
  content: string
}

export interface NextStep {
  type: 'bridge' | 'awareness' | 'momentum' | 'unstuck' | 'avoid'
  title: string
  content: string
  phrases?: string[]
}

export interface RoundAnalysis {
  round: number
  personA: PersonAnalysis
  personB: PersonAnalysis
  pattern: PatternAnalysis
  bridge: BridgeAnalysis
  tension: TensionAnalysis
  blindSpots: {
    A: string
    B: string
  }
  insights: Insight[]
  nextSteps: NextStep[]
}

export interface Evolution {
  tensionChange: number
  movements: Array<{
    person: PersonId
    type: string
    content: string
  }>
  stuckPoints: Array<{
    person: PersonId
    content: string
  }>
  openings: Array<{
    person: PersonId
    word: string
  }>
}

// === STORE ===

export interface SessionState {
  status: SessionStatus
  context: Context | null
  currentPerson: PersonId
  currentRound: number
  rounds: RoundData[]
  analyses: RoundAnalysis[]
  evolutions: Evolution[]
  isProcessing: boolean
  error: string | null
  _timeoutId?: number
}

export interface SessionActions {
  setStatus: (status: SessionStatus) => void
  setContext: (context: Context) => void
  goToHandoff: () => void
  continueAsPersonB: () => void
  savePersonResponses: (responses: Omit<PersonResponses, 'timestamp'>) => void
  processAnalysis: () => void
  cancelAnalysis: () => void
  startNewRound: () => void
  continueReflection: () => void
  completeSession: () => void
  getCurrentRoundData: () => RoundData | undefined
  getLatestAnalysis: () => RoundAnalysis | null
  setError: (error: string | null) => void
  clearError: () => void
  resetSession: () => void
  goBack: () => void
  exportSession: () => string
}

export type SessionStore = SessionState & SessionActions
