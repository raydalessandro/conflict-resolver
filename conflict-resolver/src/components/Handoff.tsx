/**
 * HANDOFF - Passaggio dispositivo
 */

import { motion } from 'framer-motion'
import { Container, Title, Subtitle, Button } from './ui'
import { useSessionStore } from '@/store/useSession'

export function Handoff() {
  const { context, continueAsPersonB } = useSessionStore()

  const personBLabel = context?.labels.personB || 'Persona B'

  return (
    <Container className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          className="text-7xl mb-8"
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        >
          📱
        </motion.div>

        <Title className="text-2xl md:text-3xl mb-4">
          Ora tocca all'altro
        </Title>
        
        <Subtitle className="mb-8">
          Passa il dispositivo a {personBLabel}
        </Subtitle>

        <div className="card mb-8 text-left">
          <div className="flex items-start gap-4">
            <div className="text-3xl">👤</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Istruzioni per {personBLabel}
              </h3>
              <ul className="text-surface-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-calm-400">✓</span>
                  <span>Non hai visto cosa ha scritto l'altro/a</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calm-400">✓</span>
                  <span>Rispondi con la tua prospettiva, sinceramente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calm-400">✓</span>
                  <span>Dopo leggerete l'analisi insieme</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-surface-500 text-sm mb-4">
            Quando è pronto/a, può premere continua
          </p>
          
          <Button onClick={continueAsPersonB} size="lg" className="w-full max-w-sm mx-auto">
            Sono {personBLabel}, continua
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  )
}
