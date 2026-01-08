/**
 * ERROR BOUNDARY
 */

import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    localStorage.removeItem('conflict-resolver-session')
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface-950 flex items-center justify-center p-6">
          <div className="card max-w-md text-center">
            <div className="text-5xl mb-4">😵</div>
            <h1 className="text-xl font-display font-semibold mb-2">
              Qualcosa è andato storto
            </h1>
            <p className="text-surface-400 mb-6">
              Si è verificato un errore. Puoi riprovare ricominciando.
            </p>
            <button 
              onClick={this.handleReset}
              className="btn btn-primary w-full"
            >
              Ricomincia
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
