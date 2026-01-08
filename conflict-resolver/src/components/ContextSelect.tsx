/**
 * CONTEXT SELECT
 */

import { motion } from 'framer-motion'
import { Container, Title, Subtitle, Button } from './ui'
import { useSessionStore } from '@/store/useSession'
import { CONTEXTS } from '@/engine/questions'
import type { Context } from '@/types'

export function ContextSelect() {
  const { setContext, goBack } = useSessionStore()

  const handleSelect = (context: Context) => {
    console.log('Selecting context:', context)
    setContext(context)
  }

  return (
    <Container className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Title className="text-2xl md:text-3xl">Con chi è il conflitto?</Title>
        <Subtitle className="mt-3">
          Questo ci aiuta a fare le domande giuste
        </Subtitle>
      </motion.div>

      <div className="grid gap-4">
        {Object.values(CONTEXTS).map((context, index) => (
          <motion.div
            key={context.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(context)}
            className="card cursor-pointer hover:border-primary-500/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{context.icon}</div>
              <div>
                <h3 className="font-display font-semibold text-lg">
                  {context.name}
                </h3>
                <p className="text-surface-400 text-sm">
                  {context.description}
                </p>
              </div>
              <div className="ml-auto text-surface-600 text-xl">
                →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Button variant="ghost" onClick={goBack} className="mt-6 mx-auto">
        ← Indietro
      </Button>
    </Container>
  )
}
