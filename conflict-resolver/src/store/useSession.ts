/**
 * SESSION STORE
 * Gestisce tutto lo stato con Zustand
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { 
  SessionStore, 
  SessionStatus, 
  Context, 
  PersonResponses,
  RoundData
} from '@/types'
import { generateRoundAnalysis, analyzeEvolution } from '@/engine/analyzer'

const INITIAL_STATE = {
  status: 'welcome' as SessionStatus,
  context: null as Context | null,
  currentPerson: 'A' as const,
  currentRound: 1,
  rounds: [] as RoundData[],
  analyses: [],
  evolutions: [],
  isProcessing: false,
  error: null as string | null
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      setStatus: (status) => set({ status }),

      setContext: (context) => {
        console.log('setContext called with:', context)
        set({ 
          context, 
          status: 'round',
          currentPerson: 'A',
          currentRound: 1
        })
      },

      goToHandoff: () => {
        set({ status: 'handoff' })
      },

      continueAsPersonB: () => {
        set({ 
          currentPerson: 'B', 
          status: 'round' 
        })
      },

      savePersonResponses: (responses) => {
        const { currentPerson, currentRound, rounds } = get()
        
        const fullResponses: PersonResponses = {
          ...responses,
          timestamp: Date.now()
        }
        
        let roundData = rounds.find(r => r.number === currentRound)
        
        if (!roundData) {
          roundData = {
            number: currentRound,
            personA: null,
            personB: null,
            timestamp: Date.now()
          }
        } else {
          roundData = { ...roundData }
        }

        if (currentPerson === 'A') {
          roundData.personA = fullResponses
        } else {
          roundData.personB = fullResponses
        }

        const updatedRounds = rounds.filter(r => r.number !== currentRound)
        updatedRounds.push(roundData)

        set({ rounds: updatedRounds })

        if (roundData.personA && roundData.personB) {
          get().processAnalysis()
        } else {
          get().goToHandoff()
        }
      },

      processAnalysis: () => {
        set({ isProcessing: true, status: 'processing', error: null })

        // Piccolo delay per UX
        setTimeout(() => {
          try {
            const { currentRound, rounds, analyses } = get()
            const roundData = rounds.find(r => r.number === currentRound)

            if (!roundData?.personA || !roundData?.personB) {
              throw new Error('Dati incompleti')
            }

            const analysis = generateRoundAnalysis(
              roundData.personA,
              roundData.personB,
              currentRound
            )

            let evolution = null
            if (analyses.length > 0) {
              const previousAnalysis = analyses[analyses.length - 1]
              evolution = analyzeEvolution(previousAnalysis, {
                personA: roundData.personA,
                personB: roundData.personB
              })
            }

            const updatedAnalyses = [...analyses, analysis]
            const updatedEvolutions = evolution 
              ? [...get().evolutions, evolution] 
              : get().evolutions

            set({
              analyses: updatedAnalyses,
              evolutions: updatedEvolutions,
              isProcessing: false,
              status: 'analysis'
            })

          } catch (error) {
            console.error('Analysis error:', error)
            set({ 
              isProcessing: false, 
              error: error instanceof Error ? error.message : 'Errore'
            })
          }
        }, 1500)
      },

      startNewRound: () => {
        const { currentRound } = get()
        set({
          currentRound: currentRound + 1,
          currentPerson: 'A',
          status: 'reflection'
        })
      },

      continueReflection: () => {
        set({ status: 'round' })
      },

      completeSession: () => {
        set({ status: 'complete' })
      },

      getCurrentRoundData: () => {
        const { rounds, currentRound } = get()
        return rounds.find(r => r.number === currentRound)
      },

      getLatestAnalysis: () => {
        const { analyses } = get()
        return analyses.length > 0 ? analyses[analyses.length - 1] : null
      },

      setError: (error) => set({ error }),
      
      clearError: () => set({ error: null }),

      resetSession: () => {
        set(INITIAL_STATE)
      },

      goBack: () => {
        const { status, currentPerson } = get()
        
        switch (status) {
          case 'context':
            set({ status: 'welcome' })
            break
          case 'round':
            if (currentPerson === 'B') {
              set({ status: 'handoff' })
            } else {
              set({ status: 'context' })
            }
            break
          case 'handoff':
            set({ status: 'round', currentPerson: 'A' })
            break
          case 'analysis':
            // Non si può tornare indietro dall'analisi
            break
          case 'reflection':
            set({ status: 'analysis' })
            break
          default:
            break
        }
      },

      exportSession: () => {
        const { context, rounds, analyses, evolutions } = get()
        return JSON.stringify({
          context,
          rounds,
          analyses,
          evolutions,
          exportedAt: new Date().toISOString()
        }, null, 2)
      }
    }),
    {
      name: 'conflict-resolver-session',
      partialize: (state) => ({
        context: state.context,
        rounds: state.rounds,
        analyses: state.analyses,
        evolutions: state.evolutions,
        currentRound: state.currentRound,
        status: state.status,
        currentPerson: state.currentPerson
      })
    }
  )
)
