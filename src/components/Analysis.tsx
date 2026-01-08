/**
 * ANALYSIS - Visualizza analisi del conflitto
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Title, Subtitle, Button, Alert, FadeIn } from './ui'
import { useSessionStore } from '@/store/useSession'
import { ARCHETYPES } from '@/engine/archetypes'
import { DISCLAIMERS } from '@/engine/questions'
import type { Archetype, PersonAnalysis, Insight } from '@/types'

export function Analysis() {
  const { context, getLatestAnalysis, startNewRound, completeSession } = useSessionStore()
  
  const analysis = getLatestAnalysis()
  const [expandedSection, setExpandedSection] = useState<string>('pattern')

  if (!analysis) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🔍</div>
          <p className="text-surface-400">Caricamento analisi...</p>
        </div>
      </Container>
    )
  }

  const personALabel = context?.labels.personA || 'Persona A'
  const personBLabel = context?.labels.personB || 'Persona B'

  return (
    <Container className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="text-5xl mb-4">🔮</div>
        <Title className="text-2xl md:text-3xl">
          Ecco cosa sta succedendo
        </Title>
        <Subtitle className="mt-2">
          Leggete insieme questa analisi
        </Subtitle>
      </motion.div>

      <FadeIn delay={0.2}>
        <TensionMeter level={analysis.tension.level} label={analysis.tension.label} />
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="card mb-6">
          <h3 className="font-display font-semibold text-lg mb-4 text-center">
            I vostri bisogni in questo momento
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ArchetypeCard 
              person={personALabel}
              data={analysis.personA}
              archetype={ARCHETYPES[analysis.personA.archetype]}
            />
            <ArchetypeCard 
              person={personBLabel}
              data={analysis.personB}
              archetype={ARCHETYPES[analysis.personB.archetype]}
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <ExpandableSection
          icon="⚡"
          title={analysis.pattern.name}
          subtitle="Il pattern di questo conflitto"
          expanded={expandedSection === 'pattern'}
          onToggle={() => setExpandedSection(expandedSection === 'pattern' ? '' : 'pattern')}
        >
          <p className="text-surface-300 mb-4">
            {analysis.pattern.description}
          </p>
          <div className="bg-surface-800/50 rounded-lg p-4">
            <p className="text-warm-400 text-sm italic">
              "{analysis.pattern.tension}"
            </p>
          </div>
        </ExpandableSection>
      </FadeIn>

      <FadeIn delay={0.5}>
        <ExpandableSection
          icon="👁️"
          title="Punti ciechi"
          subtitle="Cosa potreste non vedere"
          expanded={expandedSection === 'blindspots'}
          onToggle={() => setExpandedSection(expandedSection === 'blindspots' ? '' : 'blindspots')}
        >
          <div className="space-y-4">
            <BlindSpotItem person={personALabel} content={analysis.blindSpots.A} color="primary" />
            <BlindSpotItem person={personBLabel} content={analysis.blindSpots.B} color="calm" />
          </div>
        </ExpandableSection>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="card mb-6 bg-gradient-to-br from-primary-500/10 to-calm-500/10 border-primary-500/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌉</span>
            <div>
              <h3 className="font-display font-semibold text-lg">
                Il Ponte: {analysis.bridge.name}
              </h3>
              <p className="text-surface-400 text-sm">
                L'approccio che può aiutarvi
              </p>
            </div>
          </div>

          <p className="text-surface-300 mb-4">
            {analysis.bridge.reason}
          </p>

          <div className="bg-surface-900/50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-calm-400 mb-2">
              {analysis.bridge.strategy.approach}
            </h4>
            <ul className="space-y-2">
              {analysis.bridge.strategy.phrases.map((phrase, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-surface-300">
                  <span className="text-calm-400">💬</span>
                  <span>"{phrase}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-calm-500/10 rounded-lg p-4">
            <h4 className="font-medium text-calm-400 mb-1">L'obiettivo</h4>
            <p className="text-surface-300 text-sm">
              {analysis.bridge.resolution}
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="card mb-6">
          <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
            <span>💡</span> Insights
          </h3>
          <div className="space-y-4">
            {analysis.insights.map((insight, index) => (
              <InsightItem key={index} insight={insight} />
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.8}>
        <Alert type="info" className="mb-6">
          {DISCLAIMERS.analysis}
        </Alert>
      </FadeIn>

      <FadeIn delay={0.9}>
        <div className="space-y-3">
          <Button onClick={startNewRound} className="w-full">
            Continuiamo il dialogo
          </Button>
          <Button variant="secondary" onClick={completeSession} className="w-full">
            Per ora basta così
          </Button>
        </div>
      </FadeIn>
    </Container>
  )
}

// Sub-components

function TensionMeter({ level, label }: { level: number; label: string }) {
  const percentage = Math.round(level * 100)
  
  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-surface-300">Livello di tensione</span>
        <span className={`text-sm font-semibold ${
          level > 0.7 ? 'text-red-400' : level > 0.4 ? 'text-warm-400' : 'text-calm-400'
        }`}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </span>
      </div>
      <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            level > 0.7 ? 'bg-red-500' : level > 0.4 ? 'bg-warm-500' : 'bg-calm-500'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function ArchetypeCard({ person, data, archetype }: { 
  person: string
  data: PersonAnalysis
  archetype: Archetype 
}) {
  return (
    <div className="bg-surface-800/50 rounded-xl p-4">
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: archetype.color + '30' }}
        >
          {archetype.icon}
        </div>
        <div>
          <p className="text-surface-400 text-sm">{person}</p>
          <h4 className="font-semibold">{archetype.name}</h4>
        </div>
      </div>
      
      <p className="text-surface-300 text-sm mb-3">
        {data.interpretation.whatTheySee}
      </p>
      
      <div className="text-xs space-y-1">
        <p className="text-surface-500">
          <strong className="text-surface-400">Bisogno:</strong> {archetype.coreNeed}
        </p>
        <p className="text-surface-500">
          <strong className="text-surface-400">Paura:</strong> {archetype.coreFear}
        </p>
      </div>
    </div>
  )
}

function ExpandableSection({ 
  icon, 
  title, 
  subtitle, 
  expanded, 
  onToggle, 
  children 
}: {
  icon: string
  title: string
  subtitle: string
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="card mb-6">
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <div>
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="text-surface-400 text-sm">{subtitle}</p>
            </div>
          </div>
          <span className="text-surface-500 text-xl">
            {expanded ? '−' : '+'}
          </span>
        </div>
      </button>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-surface-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BlindSpotItem({ person, content, color }: { 
  person: string
  content: string
  color: 'primary' | 'calm' 
}) {
  const colorClasses = {
    primary: 'border-primary-500/30 bg-primary-500/5',
    calm: 'border-calm-500/30 bg-calm-500/5'
  }

  return (
    <div className={`rounded-lg p-3 border ${colorClasses[color]}`}>
      <p className="text-surface-400 text-xs mb-1">{person}</p>
      <p className="text-surface-300 text-sm">{content}</p>
    </div>
  )
}

function InsightItem({ insight }: { insight: Insight }) {
  const icons: Record<string, string> = {
    communication: '💬',
    needs: '❤️',
    fears: '😰'
  }

  return (
    <div className="border-l-2 border-primary-500/30 pl-4">
      <div className="flex items-center gap-2 mb-1">
        <span>{icons[insight.type] || '💡'}</span>
        <h4 className="font-medium text-sm">{insight.title}</h4>
      </div>
      <p className="text-surface-400 text-sm">{insight.content}</p>
    </div>
  )
}
