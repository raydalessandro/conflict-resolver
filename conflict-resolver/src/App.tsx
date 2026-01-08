/**
 * APP - Main orchestrator
 */

import { AnimatePresence, motion } from 'framer-motion'
import { useSessionStore } from '@/store/useSession'
import {
  Welcome,
  ContextSelect,
  QuestionFlow,
  Handoff,
  Processing,
  Analysis,
  Reflection,
  Complete
} from '@/components'

function App() {
  const { status, isProcessing } = useSessionStore()

  const renderContent = () => {
    if (isProcessing || status === 'processing') {
      return <Processing />
    }

    switch (status) {
      case 'welcome':
        return <Welcome />
      case 'context':
        return <ContextSelect />
      case 'round':
        return <QuestionFlow />
      case 'handoff':
        return <Handoff />
      case 'analysis':
        return <Analysis />
      case 'reflection':
        return <Reflection />
      case 'complete':
        return <Complete />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="min-h-screen bg-surface-950">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-calm-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={status + (isProcessing ? '-processing' : '')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
