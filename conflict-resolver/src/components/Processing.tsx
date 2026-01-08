/**
 * PROCESSING - Loading durante analisi
 */

import { motion } from 'framer-motion'
import { Container } from './ui'
import { useSessionStore } from '@/store/useSession'

export function Processing() {
  const { error } = useSessionStore()

  if (error) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-xl font-semibold mb-2">Qualcosa non ha funzionato</h2>
          <p className="text-surface-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Riprova
          </button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative w-24 h-24 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary-500/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-calm-500/30"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-4 rounded-full bg-primary-500/20 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-3xl">🔮</span>
          </motion.div>
        </div>

        <motion.h2 
          className="text-xl font-display font-semibold mb-2"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Sto analizzando...
        </motion.h2>
        
        <p className="text-surface-400">
          Cerco i pattern nel vostro dialogo
        </p>
      </motion.div>
    </Container>
  )
}
