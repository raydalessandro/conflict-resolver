/**
 * ONTOLOGICAL ANALYZER
 * Analyzes text and activates symbols in the 72-symbol matrix
 */

import type {
  DimensionScores,
  AttributeScores,
  ActivatedSymbol,
  OntologicalAnalysis,
  Dimension,
  Attribute,
  ReasoningStep
} from './types'
import { ALL_SYMBOLS } from './symbols'
import type { PersonResponses } from '@/types'

export class OntologicalAnalyzer {

  /**
   * Main analysis function
   */
  analyzeResponses(responses: Partial<PersonResponses>): OntologicalAnalysis {
    // Combine all text
    const allText = [
      responses.situation || '',
      responses.feeling || '',
      responses.need || '',
      responses.addition || '',
      responses.recognition || ''
    ].filter(Boolean).join(' ')

    const normalizedText = allText.toLowerCase()

    // Step 1: Analyze dimensions
    const dimensions = this.analyzeDimensions(normalizedText)
    const dominantDimension = this.getDominantDimension(dimensions)

    // Step 2: Analyze attributes
    const attributes = this.analyzeAttributes(normalizedText)
    const dominantAttribute = this.getDominantAttribute(attributes)

    // Step 3: Calculate polarity
    const polarity = this.analyzePolarity(normalizedText)

    // Step 4: Activate symbols
    const activatedSymbols = this.activateSymbols(
      normalizedText,
      dimensions,
      attributes,
      polarity
    )

    // Step 5: Generate reasoning
    const reasoning = this.generateReasoning(
      dimensions,
      dominantDimension,
      attributes,
      dominantAttribute,
      polarity,
      activatedSymbols
    )

    // Step 6: Infer archetype (for compatibility)
    const { archetype, confidence } = this.inferArchetype(activatedSymbols)

    return {
      dimensions,
      dominantDimension,
      attributes,
      dominantAttribute,
      polarity,
      activatedSymbols,
      topSymbols: activatedSymbols.slice(0, 5),
      reasoning,
      inferredArchetype: archetype,
      archetypeConfidence: confidence
    }
  }

  /**
   * Analyze dimensional presence in text
   */
  private analyzeDimensions(text: string): DimensionScores {
    const scores = {
      D1_Linear: 0,
      D2_Planar: 0,
      D3_Volumetric: 0,
      D4_Temporal: 0
    }

    // D1 - Linear: sequential, ordered, directional
    const d1Keywords = [
      'prima', 'dopo', 'poi', 'seguito', 'sequenza', 'ordine', 'lista',
      'passo', 'successivo', 'precedente', 'avanti', 'indietro',
      'primo', 'secondo', 'ultimo', 'inizio', 'fine', 'direzione'
    ]
    scores.D1_Linear = this.countKeywords(text, d1Keywords)

    // D2 - Planar: cyclical, networked, recurring
    const d2Keywords = [
      'sempre', 'ancora', 'ripete', 'ciclo', 'pattern', 'rete',
      'connesso', 'collegato', 'intrecciato', 'circolare', 'giro',
      'torna', 'ricorre', 'ruota', 'spirale', 'loop'
    ]
    scores.D2_Planar = this.countKeywords(text, d2Keywords)

    // D3 - Volumetric: hierarchical, structured, layered
    const d3Keywords = [
      'struttura', 'sistema', 'livello', 'strato', 'profondo',
      'superficiale', 'dentro', 'fuori', 'interno', 'esterno',
      'organizzazione', 'architettura', 'gerarchia', 'complesso',
      'fondamento', 'base', 'sopra', 'sotto'
    ]
    scores.D3_Volumetric = this.countKeywords(text, d3Keywords)

    // D4 - Temporal: causal, evolutionary, transformative
    const d4Keywords = [
      'perché', 'causa', 'conseguenza', 'quindi', 'allora',
      'cambiamento', 'evoluzione', 'trasformazione', 'diventare',
      'sviluppo', 'crescita', 'processo', 'tempo', 'storia',
      'origine', 'futuro', 'passato', 'divenire'
    ]
    scores.D4_Temporal = this.countKeywords(text, d4Keywords)

    // Normalize scores
    const total = Object.values(scores).reduce((a, b) => a + b, 0)
    if (total > 0) {
      (Object.keys(scores) as Array<keyof DimensionScores>).forEach(key => {
        scores[key] = scores[key] / total
      })
    } else {
      // Default: assume D2 (most common for conflicts)
      scores.D2_Planar = 0.4
      scores.D3_Volumetric = 0.3
      scores.D1_Linear = 0.2
      scores.D4_Temporal = 0.1
    }

    return scores
  }

  /**
   * Analyze attribute presence in text
   */
  private analyzeAttributes(text: string): AttributeScores {
    const scores = {
      A1_Distinction: 0,
      A2_Relation: 0,
      A3_Process: 0
    }

    // A1 - Distinction: separating, defining boundaries
    const a1Keywords = [
      'separare', 'dividere', 'distinguere', 'differenza', 'diverso',
      'confine', 'limite', 'bordo', 'definire', 'categorizzare',
      'solo', 'unico', 'distinto', 'specifico', 'particolare',
      'isolare', 'autonomo', 'indipendente'
    ]
    scores.A1_Distinction = this.countKeywords(text, a1Keywords)

    // A2 - Relation: connecting, structuring bonds
    const a2Keywords = [
      'connettere', 'legare', 'collegare', 'relazione', 'legame',
      'insieme', 'unire', 'condividere', 'comune', 'reciproco',
      'coordinare', 'sincronizzare', 'armonizzare', 'cooperare',
      'rete', 'gruppo', 'team', 'collettivo'
    ]
    scores.A2_Relation = this.countKeywords(text, a2Keywords)

    // A3 - Process: transforming, evolving
    const a3Keywords = [
      'cambiare', 'trasformare', 'evolvere', 'crescere', 'sviluppare',
      'diventare', 'modificare', 'adattare', 'migliorare', 'peggiorare',
      'procedere', 'avanzare', 'progredire', 'regredire', 'movimento',
      'dinamico', 'attivo', 'fluido', 'transizione'
    ]
    scores.A3_Process = this.countKeywords(text, a3Keywords)

    // Normalize scores
    const total = Object.values(scores).reduce((a, b) => a + b, 0)
    if (total > 0) {
      (Object.keys(scores) as Array<keyof AttributeScores>).forEach(key => {
        scores[key] = scores[key] / total
      })
    } else {
      // Default: balanced
      scores.A1_Distinction = 0.33
      scores.A2_Relation = 0.33
      scores.A3_Process = 0.34
    }

    return scores
  }

  /**
   * Analyze polarity (expansive vs contractive)
   */
  private analyzePolarity(text: string): number {
    const expansiveKeywords = [
      'crescere', 'espandere', 'aprire', 'aumentare', 'più',
      'nuovo', 'creare', 'costruire', 'sviluppare', 'amplificare',
      'esplorare', 'aggiungere', 'includere', 'estendere'
    ]

    const contractiveKeywords = [
      'ridurre', 'chiudere', 'diminuire', 'meno', 'limitare',
      'bloccare', 'fermare', 'finire', 'togliere', 'escludere',
      'restringere', 'concentrare', 'focalizzare', 'eliminare'
    ]

    const expansive = this.countKeywords(text, expansiveKeywords)
    const contractive = this.countKeywords(text, contractiveKeywords)

    const total = expansive + contractive
    if (total === 0) return 0

    // Return value between -1 (fully contractive) and +1 (fully expansive)
    return (expansive - contractive) / total
  }

  /**
   * Activate symbols based on analysis
   */
  private activateSymbols(
    text: string,
    dimensions: DimensionScores,
    attributes: AttributeScores,
    polarity: number
  ): ActivatedSymbol[] {
    const activated: ActivatedSymbol[] = []

    ALL_SYMBOLS.forEach(symbol => {
      let activation = 0
      const evidence: string[] = []

      // 1. Dimensional contribution (40%)
      const dimKey = `${symbol.dimension}_${symbol.dimensionName}` as keyof DimensionScores
      const dimScore = dimensions[dimKey] || 0
      activation += dimScore * 0.4

      // 2. Attribute contribution (30%)
      const attrKey = `${symbol.attribute}_${symbol.attributeName}` as keyof AttributeScores
      const attrScore = attributes[attrKey] || 0
      activation += attrScore * 0.3

      // 3. Polarity contribution (20%)
      const polarityMatch = symbol.polarity === '+'
        ? (polarity > 0 ? polarity : 0)
        : (polarity < 0 ? -polarity : 0)
      activation += polarityMatch * 0.2

      // 4. Direct keyword matching (10%)
      const keywordMatches = symbol.semanticField.filter(keyword =>
        text.includes(keyword)
      )
      const keywordScore = Math.min(keywordMatches.length / 3, 1)
      activation += keywordScore * 0.1

      if (keywordMatches.length > 0) {
        evidence.push(...keywordMatches.slice(0, 3))
      }

      // Only include symbols with meaningful activation
      if (activation > 0.15) {
        activated.push({
          symbol,
          activation,
          evidence
        })
      }
    })

    // Sort by activation (highest first)
    return activated.sort((a, b) => b.activation - a.activation)
  }

  /**
   * Generate reasoning trace
   */
  private generateReasoning(
    dimensions: DimensionScores,
    dominantDim: Dimension,
    attributes: AttributeScores,
    dominantAttr: Attribute,
    polarity: number,
    activated: ActivatedSymbol[]
  ): ReasoningStep[] {
    const dimNames = {
      'D1': 'Lineare (sequenziale)',
      'D2': 'Planare (ciclica)',
      'D3': 'Volumetrica (strutturale)',
      'D4': 'Temporale (causale)'
    }

    const attrNames = {
      'A1': 'Distinzione (separazione)',
      'A2': 'Relazione (connessione)',
      'A3': 'Processo (trasformazione)'
    }

    const polarityLabel = polarity > 0.3 ? 'espansiva' :
                          polarity < -0.3 ? 'contrattiva' : 'equilibrata'

    return [
      {
        step: 'Analisi Dimensionale',
        evidence: `Punteggi: ${Object.entries(dimensions)
          .map(([k, v]) => `${k.split('_')[0]}: ${(v * 100).toFixed(0)}%`)
          .join(', ')}`,
        conclusion: `Dimensione dominante: ${dimNames[dominantDim]}`
      },
      {
        step: 'Identificazione Attributo',
        evidence: `Punteggi: ${Object.entries(attributes)
          .map(([k, v]) => `${k.split('_')[0]}: ${(v * 100).toFixed(0)}%`)
          .join(', ')}`,
        conclusion: `Attributo primario: ${attrNames[dominantAttr]}`
      },
      {
        step: 'Calcolo Polarità',
        evidence: `Valore: ${polarity.toFixed(2)} (-1=contrattiva, +1=espansiva)`,
        conclusion: `Polarità: ${polarityLabel}`
      },
      {
        step: 'Attivazione Simbolica',
        evidence: `Simboli attivati: ${activated.length}, Top 5: ${activated.slice(0, 5).map(a => a.symbol.notation).join(', ')}`,
        conclusion: `Pattern ontologico identificato`
      }
    ]
  }

  /**
   * Infer archetype from activated symbols (for backward compatibility)
   */
  private inferArchetype(activated: ActivatedSymbol[]): { archetype: string; confidence: number } {
    const archetypeScores: Record<string, number> = {}

    // Accumulate scores from activated symbols
    activated.forEach(({ symbol, activation }) => {
      Object.entries(symbol.archetypeResonance).forEach(([archetype, weight]) => {
        archetypeScores[archetype] = (archetypeScores[archetype] || 0) + activation * weight
      })
    })

    // Find top archetype
    const entries = Object.entries(archetypeScores)
    if (entries.length === 0) {
      return { archetype: 'everyman', confidence: 0.3 }
    }

    entries.sort(([, a], [, b]) => b - a)
    const [topArchetype, topScore] = entries[0]

    // Calculate confidence (normalize to 0-1)
    const totalScore = entries.reduce((sum, [, score]) => sum + score, 0)
    const confidence = totalScore > 0 ? topScore / totalScore : 0.3

    return {
      archetype: topArchetype,
      confidence: Math.min(confidence, 1)
    }
  }

  /**
   * Helper: count keyword occurrences
   */
  private countKeywords(text: string, keywords: string[]): number {
    return keywords.reduce((count, keyword) => {
      return count + (text.includes(keyword) ? 1 : 0)
    }, 0)
  }

  /**
   * Helper: get dominant dimension
   */
  private getDominantDimension(scores: DimensionScores): Dimension {
    const entries = Object.entries(scores) as [keyof DimensionScores, number][]
    entries.sort(([, a], [, b]) => b - a)
    return entries[0][0].split('_')[0] as Dimension
  }

  /**
   * Helper: get dominant attribute
   */
  private getDominantAttribute(scores: AttributeScores): Attribute {
    const entries = Object.entries(scores) as [keyof AttributeScores, number][]
    entries.sort(([, a], [, b]) => b - a)
    return entries[0][0].split('_')[0] as Attribute
  }
}

// Export singleton instance
export const ontologicalAnalyzer = new OntologicalAnalyzer()
