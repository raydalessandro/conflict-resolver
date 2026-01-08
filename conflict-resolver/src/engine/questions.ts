/**
 * QUESTIONS & CONTEXTS
 */

import type { Context, ContextId } from '@/types'

export const CONTEXTS: Record<ContextId, Context> = {
  couple: {
    id: 'couple',
    name: 'Partner',
    icon: '💑',
    description: 'Conflitto con il/la partner',
    labels: {
      personA: 'Partner A',
      personB: 'Partner B'
    }
  },
  family: {
    id: 'family',
    name: 'Famiglia',
    icon: '👨‍👩‍👧‍👦',
    description: 'Conflitto familiare',
    labels: {
      personA: 'Familiare A',
      personB: 'Familiare B'
    }
  },
  friends: {
    id: 'friends',
    name: 'Amici',
    icon: '👯',
    description: 'Conflitto tra amici',
    labels: {
      personA: 'Amico/a A',
      personB: 'Amico/a B'
    }
  },
  work: {
    id: 'work',
    name: 'Lavoro',
    icon: '💼',
    description: 'Conflitto con colleghi',
    labels: {
      personA: 'Collega A',
      personB: 'Collega B'
    }
  },
  general: {
    id: 'general',
    name: 'Altro',
    icon: '🤝',
    description: 'Altro tipo di conflitto',
    labels: {
      personA: 'Persona A',
      personB: 'Persona B'
    }
  }
}

export interface Question {
  id: string
  label: string
  placeholder: Record<ContextId, string>
  hint?: string
  required?: boolean
}

export const ROUND_1_QUESTIONS: Question[] = [
  {
    id: 'situation',
    label: 'Cosa è successo?',
    placeholder: {
      couple: 'Racconta la situazione dal tuo punto di vista...',
      family: 'Descrivi cosa è successo tra voi...',
      friends: 'Cosa è successo che ha creato questa tensione?',
      work: 'Descrivi la situazione lavorativa...',
      general: 'Racconta cosa è successo...'
    },
    hint: 'Non serve essere perfetti, racconta quello che ti viene',
    required: true
  },
  {
    id: 'feeling',
    label: 'Come ti sei sentito/a?',
    placeholder: {
      couple: 'Quali emozioni hai provato?',
      family: 'Come ti ha fatto sentire?',
      friends: 'Che emozioni stai provando?',
      work: 'Come ti ha fatto sentire?',
      general: 'Descrivi le tue emozioni...'
    },
    hint: 'Le emozioni sono informazioni, non giudizi',
    required: true
  },
  {
    id: 'need',
    label: 'Cosa vorresti?',
    placeholder: {
      couple: 'Cosa vorresti che capisse?',
      family: 'Cosa vorresti dall\'altro?',
      friends: 'Cosa ti aspetti?',
      work: 'Cosa vorresti che cambiasse?',
      general: 'Cosa vorresti?'
    },
    hint: 'Pensa a cosa ti renderebbe più sereno/a',
    required: false
  }
]

export const FOLLOWUP_QUESTIONS: Question[] = [
  {
    id: 'addition',
    label: 'Vuoi aggiungere qualcosa?',
    placeholder: {
      couple: 'Dopo aver letto l\'analisi...',
      family: 'C\'è qualcosa che non è emerso?',
      friends: 'Vuoi aggiungere qualcosa?',
      work: 'C\'è un aspetto che manca?',
      general: 'Aggiungi quello che senti...'
    },
    required: false
  },
  {
    id: 'recognition',
    label: 'Cosa capisci ora del punto di vista dell\'altro?',
    placeholder: {
      couple: 'Cosa ti ha colpito di quello che prova?',
      family: 'C\'è qualcosa che prima non vedevi?',
      friends: 'Riesci a vedere la sua prospettiva?',
      work: 'Cosa comprendi meglio ora?',
      general: 'Cosa vedi ora che prima non vedevi?'
    },
    hint: 'Anche un piccolo riconoscimento può aprire molto',
    required: false
  }
]

export const DISCLAIMERS = {
  intro: 'Questo strumento facilita il dialogo ma non sostituisce un professionista. Se c\'è qualsiasi forma di abuso, cercate aiuto qualificato.',
  analysis: 'Questa analisi è basata su pattern generali. Solo voi conoscete la vostra situazione.',
  ending: 'Avete fatto un passo importante. Se serve, un professionista può aiutarvi ad andare più in profondità.'
}
