/**
 * ONTOLOGY TYPES
 * Type definitions for the EAR ontological system
 */

// Core ontological coordinates
export type Dimension = 'D1' | 'D2' | 'D3' | 'D4'
export type Attribute = 'A1' | 'A2' | 'A3'
export type Axis = 'X1' | 'X2' | 'X3'
export type Polarity = '+' | '-'

// Dimension names
export type DimensionName = 'Linear' | 'Planar' | 'Volumetric' | 'Temporal'

// Attribute names
export type AttributeName = 'Distinction' | 'Relation' | 'Process'

// Axis names
export type AxisName = 'Foundational' | 'Recursive' | 'Synthetic'

// Symbol ID format: symbol_[D][A][X]_[polarity]
export type SymbolId = string

/**
 * Ontological Symbol
 * Represents one of the 72 positions in the EAR matrix
 */
export interface OntologicalSymbol {
  // Identity
  id: SymbolId
  notation: string // Σ notation (e.g., "Σ₁₁₁₊")
  name: string
  position: number // 1-72

  // Ontological coordinates
  dimension: Dimension
  dimensionName: DimensionName
  attribute: Attribute
  attributeName: AttributeName
  axis: Axis
  axisName: AxisName
  polarity: Polarity

  // Semantics
  description: string
  semanticField: string[] // Keywords that activate this symbol

  // Relationships
  oppositeSymbol: SymbolId // The complementary polarity
  complementarySymbols: SymbolId[] // Symbols that work well together
  conflictualSymbols: SymbolId[] // Symbols in tension

  // Archetype mapping (for backward compatibility)
  archetypeResonance: Record<string, number> // archetype -> weight
}

/**
 * Dimension scores from text analysis
 */
export interface DimensionScores {
  D1_Linear: number
  D2_Planar: number
  D3_Volumetric: number
  D4_Temporal: number
}

/**
 * Attribute scores from text analysis
 */
export interface AttributeScores {
  A1_Distinction: number
  A2_Relation: number
  A3_Process: number
}

/**
 * Activated symbol with evidence
 */
export interface ActivatedSymbol {
  symbol: OntologicalSymbol
  activation: number // 0-1
  evidence: string[] // Text fragments that activated it
}

/**
 * Ontological analysis result
 */
export interface OntologicalAnalysis {
  // Dimensional breakdown
  dimensions: DimensionScores
  dominantDimension: Dimension

  // Attribute breakdown
  attributes: AttributeScores
  dominantAttribute: Attribute

  // Polarity
  polarity: number // -1 (contractive) to +1 (expansive)

  // Activated symbols
  activatedSymbols: ActivatedSymbol[]
  topSymbols: ActivatedSymbol[] // Top 5

  // Reasoning trace
  reasoning: ReasoningStep[]

  // Inferred archetype (for compatibility)
  inferredArchetype: string
  archetypeConfidence: number
}

/**
 * Reasoning step
 */
export interface ReasoningStep {
  step: string
  evidence: string
  conclusion: string
}
