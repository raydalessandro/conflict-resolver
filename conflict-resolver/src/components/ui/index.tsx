/**
 * UI COMPONENTS
 */

import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes, TextareaHTMLAttributes } from 'react'

// === LAYOUT ===

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-2xl mx-auto px-4 py-8 ${className}`}>
      {children}
    </div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <motion.div 
      className={`card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

// === BUTTONS ===

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: ReactNode
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || loading}
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size="sm" />
          <span>Attendi...</span>
        </>
      ) : children}
    </motion.button>
  )
}

// === FORM ===

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string
  hint?: string
  error?: string
  value: string
  onChange: (value: string) => void
}

export function TextArea({
  label,
  hint,
  error,
  value,
  onChange,
  className = '',
  ...props
}: TextAreaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-surface-300">
          {label}
          {hint && <span className="text-surface-500 font-normal ml-2">({hint})</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`textarea ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
}

// === FEEDBACK ===

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ size = 'md' }: SpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <svg 
      className={`animate-spin ${sizes[size]}`} 
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle 
        className="opacity-25" 
        cx="12" cy="12" r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

interface AlertProps {
  type?: 'info' | 'warning' | 'error' | 'success'
  title?: string
  children: ReactNode
  className?: string
}

export function Alert({ type = 'info', title, children, className = '' }: AlertProps) {
  const styles = {
    info: 'bg-primary-500/10 border-primary-500/30 text-primary-300',
    warning: 'bg-warm-500/10 border-warm-500/30 text-warm-400',
    error: 'bg-red-500/10 border-red-500/30 text-red-300',
    success: 'bg-calm-500/10 border-calm-500/30 text-calm-400'
  }

  return (
    <div className={`rounded-xl border p-4 ${styles[type]} ${className}`}>
      {title && <div className="font-medium mb-1">{title}</div>}
      <div className="text-sm opacity-90">{children}</div>
    </div>
  )
}

// === TYPOGRAPHY ===

interface TitleProps {
  children: ReactNode
  className?: string
}

export function Title({ children, className = '' }: TitleProps) {
  return (
    <h1 className={`text-3xl md:text-4xl font-display font-bold text-gradient ${className}`}>
      {children}
    </h1>
  )
}

export function Subtitle({ children, className = '' }: TitleProps) {
  return (
    <p className={`text-lg text-surface-400 ${className}`}>
      {children}
    </p>
  )
}

// === ANIMATION WRAPPERS ===

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// === PAGE TRANSITION ===

interface PageTransitionProps {
  children: ReactNode
  keyProp: string
}

export function PageTransition({ children, keyProp }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
