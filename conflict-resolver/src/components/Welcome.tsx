/**
 * WELCOME
 */

import { motion } from 'framer-motion'
import { Container, Title, Subtitle, Button, Card, Alert } from './ui'
import { useSessionStore } from '@/store/useSession'
import { DISCLAIMERS } from '@/engine/questions'

export function Welcome() {
  const { setStatus, resetSession } = useSessionStore()

  const handleStart = () => {
    resetSession()
    setStatus('context')
  }

  return (
    <Container className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.div 
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🌉
        </motion.div>
        
        <Title>Conflict Resolver</Title>
        <Subtitle className="mt-3">
          Un facilitatore di dialogo per capirvi meglio
        </Subtitle>
      </motion.div>

      <Card className="mb-6">
        <h2 className="font-display font-semibold text-lg mb-4">
          Come funziona
        </h2>
        
        <div className="space-y-4">
          {[
            { n: 1, title: 'Entrambi raccontate', desc: 'Prima uno, poi l\'altro. Ognuno racconta la sua prospettiva.' },
            { n: 2, title: 'Leggete insieme l\'analisi', desc: 'Il sistema identifica i bisogni e le paure di entrambi.' },
            { n: 3, title: 'Continuate il dialogo', desc: 'Potete aggiungere, chiarire, riconoscere qualcosa dell\'altro.' }
          ].map((step, i) => (
            <motion.div 
              key={step.n}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 
                              text-primary-400 flex items-center justify-center font-semibold">
                {step.n}
              </div>
              <div>
                <h3 className="font-medium text-surface-200">{step.title}</h3>
                <p className="text-surface-400 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      <Alert type="warning" className="mb-6">
        {DISCLAIMERS.intro}
      </Alert>

      <Button onClick={handleStart} size="lg" className="w-full">
        Iniziamo
      </Button>

      <p className="text-center text-surface-600 text-sm mt-6">
        Nessun dato viene salvato sui server. Tutto rimane sul vostro dispositivo.
      </p>
    </Container>
  )
}
