/**
 * QUESTION FLOW
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Title, Button, TextArea, Alert, FadeIn } from './ui'
import { useSessionStore } from '@/store/useSession'
import { ROUND_1_QUESTIONS, FOLLOWUP_QUESTIONS, type Question } from '@/engine/questions'

export function QuestionFlow() {
  const { context, currentPerson, currentRound, savePersonResponses, goBack } = useSessionStore()
  
  const [responses, setResponses] = useState<Record<string, string>>({
    situation: '',
    feeling: '',
    need: '',
    addition: '',
    recognition: ''
  })
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isFirstRound = currentRound === 1
  const questions: Question[] = isFirstRound ? ROUND_1_QUESTIONS : FOLLOWUP_QUESTIONS
  const currentQuestion = questions[currentStep]
  
  const personLabel = currentPerson === 'A' 
    ? context?.labels.personA || 'Persona A'
    : context?.labels.personB || 'Persona B'

  const contextId = context?.id || 'general'

  const handleChange = (value: string) => {
    setResponses(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }))
    if (errors[currentQuestion.id]) {
      setErrors(prev => ({ ...prev, [currentQuestion.id]: '' }))
    }
  }

  const validate = (): boolean => {
    const value = responses[currentQuestion.id]
    
    if (currentQuestion.required && (!value || value.trim().length < 5)) {
      setErrors(prev => ({
        ...prev,
        [currentQuestion.id]: 'Scrivi almeno qualche parola'
      }))
      return false
    }
    return true
  }

  const handleNext = () => {
    if (!validate()) return

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      savePersonResponses({
        situation: responses.situation || '',
        feeling: responses.feeling || '',
        need: responses.need || '',
        addition: responses.addition,
        recognition: responses.recognition
      })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    } else {
      goBack()
    }
  }

  const canSkip = !currentQuestion.required

  return (
    <Container className="min-h-screen flex flex-col py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          {personLabel} • Round {currentRound}
        </div>
        
        <Title className="text-2xl md:text-3xl">
          {isFirstRound ? 'Raccontaci la tua prospettiva' : 'Momento di riflessione'}
        </Title>
      </motion.div>

      <div className="flex justify-center gap-2 mb-8">
        {questions.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentStep 
                ? 'w-8 bg-primary-500' 
                : index < currentStep 
                  ? 'w-4 bg-calm-500' 
                  : 'w-4 bg-surface-700'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <div className="card h-full flex flex-col">
              <label className="block text-lg font-medium text-surface-200 mb-1">
                {currentQuestion.label}
              </label>
              
              {currentQuestion.hint && (
                <p className="text-surface-500 text-sm mb-4">
                  {currentQuestion.hint}
                </p>
              )}

              <TextArea
                value={responses[currentQuestion.id] || ''}
                onChange={handleChange}
                placeholder={currentQuestion.placeholder[contextId]}
                error={errors[currentQuestion.id]}
                className="flex-1"
                style={{ minHeight: '150px' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-6">
        <Button variant="secondary" onClick={handleBack} className="flex-shrink-0">
          ← Indietro
        </Button>
        
        {canSkip && !responses[currentQuestion.id] && (
          <Button variant="ghost" onClick={handleNext} className="flex-shrink-0">
            Salta
          </Button>
        )}

        <Button onClick={handleNext} className="flex-1">
          {currentStep < questions.length - 1 ? 'Continua' : 'Fatto'}
        </Button>
      </div>

      {isFirstRound && currentStep === 0 && (
        <FadeIn delay={0.5}>
          <Alert type="info" className="mt-6">
            <strong>Consiglio:</strong> Non devi essere perfetto/a. 
            Scrivi quello che ti viene, come lo diresti a un amico.
          </Alert>
        </FadeIn>
      )}
    </Container>
  )
}
