/**
 * REFLECTION - Transizione tra round
 */

import { motion } from 'framer-motion'
import { Container, Title, Subtitle, Button } from './ui'
import { useSessionStore } from '@/store/useSession'

export function Reflection() {
  const { context, currentRound, continueReflection, goBack } = useSessionStore()

  const personALabel = context?.labels.personA || 'Persona A'
  const personBLabel = context?.labels.personB || 'Persona B'

  return (
    <Container className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div 
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💭
        </motion.div>

        <Title className="text-2xl md:text-3xl mb-3">
          Round {currentRound}: Riflessione
        </Title>
        
        <Subtitle className="mb-8">
          Avete letto l'analisi insieme.<br />
          Ora c'è spazio per aggiungere o chiarire.
        </Subtitle>

        <div className="card mb-8 text-left">
          <h3 className="font-semibold mb-4">Come funziona questo round:</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 
                              flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span className="text-surface-300">
                {personALabel} può aggiungere o dire cosa ha capito dell'altro
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 
                              flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span className="text-surface-300">
                Poi tocca a {personBLabel}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 
                              flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span className="text-surface-300">
                Vedrete come evolve la conversazione
              </span>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <p className="text-surface-500 text-sm">
            Chi vuole iniziare?
          </p>
          
          <Button onClick={continueReflection} size="lg" className="w-full max-w-sm">
            Sono pronto/a
          </Button>

          <Button variant="ghost" onClick={goBack} className="mx-auto">
            ← Torna all'analisi
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  )
}
