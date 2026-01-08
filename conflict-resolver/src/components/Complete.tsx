/**
 * COMPLETE - Fine sessione
 */

import { motion } from 'framer-motion'
import { Container, Title, Subtitle, Button, Alert } from './ui'
import { useSessionStore } from '@/store/useSession'
import { DISCLAIMERS } from '@/engine/questions'

export function Complete() {
  const { 
    rounds, 
    analyses, 
    evolutions,
    resetSession,
    exportSession 
  } = useSessionStore()

  const totalRounds = rounds.length
  const lastAnalysis = analyses[analyses.length - 1]

  const hasImproved = evolutions.length > 0 && 
    evolutions.some(e => e.tensionChange < 0 || e.openings.length > 0)

  const handleExport = () => {
    const data = exportSession()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `conflict-resolver-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Container className="py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-8"
      >
        <motion.div 
          className="text-6xl mb-4"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1 }}
        >
          {hasImproved ? '🌟' : '🤝'}
        </motion.div>

        <Title className="text-2xl md:text-3xl mb-3">
          {hasImproved ? 'Ottimo lavoro!' : 'Avete fatto un passo importante'}
        </Title>
        
        <Subtitle>
          {hasImproved 
            ? 'Avete iniziato ad avvicinarvi' 
            : 'Comunicare è già un grande traguardo'}
        </Subtitle>
      </motion.div>

      <div className="card mb-6">
        <h3 className="font-display font-semibold mb-4">Questa sessione</h3>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-400">{totalRounds}</div>
            <div className="text-sm text-surface-400">Round</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-calm-400">
              {evolutions.filter(e => e.openings.length > 0).length}
            </div>
            <div className="text-sm text-surface-400">Aperture</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-warm-400">
              {lastAnalysis?.tension.label || '-'}
            </div>
            <div className="text-sm text-surface-400">Tensione</div>
          </div>
        </div>
      </div>

      {lastAnalysis && (
        <div className="card mb-6">
          <h3 className="font-display font-semibold mb-4">Cosa è emerso</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">🎯</span>
              <div>
                <h4 className="font-medium text-sm">Il pattern</h4>
                <p className="text-surface-400 text-sm">{lastAnalysis.pattern.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-xl">🌉</span>
              <div>
                <h4 className="font-medium text-sm">Il ponte suggerito</h4>
                <p className="text-surface-400 text-sm">
                  {lastAnalysis.bridge.name}: {lastAnalysis.bridge.strategy.approach}
                </p>
              </div>
            </div>

            {hasImproved && (
              <div className="flex items-start gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <h4 className="font-medium text-sm">Progressi</h4>
                  <p className="text-surface-400 text-sm">
                    Ci sono state aperture durante il dialogo.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="card mb-6 bg-gradient-to-br from-calm-500/10 to-primary-500/10 border-calm-500/30">
        <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
          <span>💡</span> Prossimi passi
        </h3>
        
        <ul className="space-y-3 text-sm text-surface-300">
          <li className="flex items-start gap-2">
            <span className="text-calm-400">→</span>
            <span>Datevi tempo per elaborare. Non dovete risolvere tutto subito.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-calm-400">→</span>
            <span>Provate a usare le frasi ponte nella prossima conversazione.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-calm-400">→</span>
            <span>Potete tornare qui quando volete per un'altra sessione.</span>
          </li>
        </ul>
      </div>

      <Alert type="info" className="mb-6">
        {DISCLAIMERS.ending}
      </Alert>

      <div className="space-y-3">
        <Button onClick={resetSession} className="w-full">
          Nuova sessione
        </Button>
        
        <Button variant="secondary" onClick={handleExport} className="w-full">
          📥 Esporta sessione
        </Button>
        
        <Button variant="ghost" onClick={() => window.location.reload()} className="w-full">
          Chiudi
        </Button>
      </div>

      <motion.p 
        className="text-center text-surface-600 text-xs mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Conflict Resolver • Basato sull'ontologia EAR
      </motion.p>
    </Container>
  )
}
