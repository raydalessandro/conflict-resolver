/**
 * NATURAL LANGUAGE GENERATOR
 * Generates human-readable Italian text from ontological analysis
 */

import type { OntologicalAnalysis } from './types'
import type { Context } from '@/types'
import { ARCHETYPE_TRANSLATIONS } from './translations'
import { CONFLICT_TRANSLATIONS } from './conflictTranslations'

export class NaturalLanguageGenerator {

  /**
   * Generate complete analysis in natural language
   */
  generateAnalysis(
    personA: OntologicalAnalysis,
    personB: OntologicalAnalysis,
    context: Context
  ): string {
    const translationA = ARCHETYPE_TRANSLATIONS[personA.inferredArchetype]
    const translationB = ARCHETYPE_TRANSLATIONS[personB.inferredArchetype]

    // Try to find specific conflict translation
    const conflictKey = `${personA.inferredArchetype}-${personB.inferredArchetype}`
    const reverseKey = `${personB.inferredArchetype}-${personA.inferredArchetype}`
    let conflict = CONFLICT_TRANSLATIONS[conflictKey] || CONFLICT_TRANSLATIONS[reverseKey]

    // If no specific translation, generate generic one
    if (!conflict) {
      conflict = this.generateGenericConflict(personA, personB, translationA, translationB)
    }

    // Replace person labels
    const labelA = context.labels.personA || 'Persona A'
    const labelB = context.labels.personB || 'Persona B'

    let output = conflict.translations.structuralNature
    output += '\n\n---\n\n'

    // Person A section
    output += `## 👤 COME OPERA ${labelA.toUpperCase()}\n\n`
    output += translationA.translations.operatingMode
    output += '\n\n'
    output += `**Bisogno Fondamentale:**\n`
    output += translationA.translations.coreNeed
    output += '\n\n'
    output += `**Punto Cieco Strutturale:**\n`
    output += translationA.translations.blindSpot
    output += '\n\n---\n\n'

    // Person B section
    output += `## 👤 COME OPERA ${labelB.toUpperCase()}\n\n`
    output += translationB.translations.operatingMode
    output += '\n\n'
    output += `**Bisogno Fondamentale:**\n`
    output += translationB.translations.coreNeed
    output += '\n\n'
    output += `**Punto Cieco Strutturale:**\n`
    output += translationB.translations.blindSpot
    output += '\n\n---\n\n'

    // Why conflict section
    output += `## ⚠️ PERCHÉ VI SCONTRATE\n\n`
    output += conflict.translations.whyConflict
    output += '\n\n'
    output += `**Cosa vede ${labelA} in ${labelB}:**\n`
    output += conflict.translations.whatASeesInB
    output += '\n\n'
    output += `**Cosa vede ${labelB} in ${labelA}:**\n`
    output += conflict.translations.whatBSeesInA
    output += '\n\n---\n\n'

    // Escalation pattern
    output += `## 📈 PATTERN DI ESCALATION\n\n`
    output += conflict.translations.escalationPattern
    output += '\n\n---\n\n'

    // Bridge strategy
    output += `## 🌉 STRATEGIA DI RISOLUZIONE\n\n`
    output += conflict.translations.bridgeStrategy
    output += '\n\n---\n\n'

    // Specific phrases
    output += `## 💬 FRASI SPECIFICHE DA PROVARE\n\n`
    output += `**Per ${labelA}:**\n\n`
    conflict.translations.bridgePhrases.forA.forEach((phrase, i) => {
      output += `${i + 1}. ${phrase}\n\n`
    })
    output += `\n**Per ${labelB}:**\n\n`
    conflict.translations.bridgePhrases.forB.forEach((phrase, i) => {
      output += `${i + 1}. ${phrase}\n\n`
    })

    // Verification section
    output += `\n---\n\n`
    output += `## 🎯 VERIFICA\n\n`
    output += `Provate per una settimana e osservate:\n\n`
    output += `✓ Quando ${labelA} propone struttura, ${labelB} prova a chiedere: "In quali aree posso avere movimento?"\n\n`
    output += `✓ Quando ${labelB} cerca flessibilità, ${labelA} prova a chiedere: "Quali sono le fondamenta minime che ti servono?"\n\n`
    output += `Se la tensione diminuisce → l'analisi è corretta.\n`
    output += `Se resta uguale → ci sono altri layer da esplorare (tornate qui per un secondo round).`

    // Replace all [LABEL_A] and [LABEL_B] placeholders
    output = output.replace(/\[LABEL_A\]/g, labelA)
    output = output.replace(/\[LABEL_B\]/g, labelB)
    output = output.replace(/\$\{personLabel\('A'\)\}/g, labelA)
    output = output.replace(/\$\{personLabel\('B'\)\}/g, labelB)

    return output
  }

  /**
   * Generate generic conflict description when no specific translation exists
   */
  private generateGenericConflict(
    personA: OntologicalAnalysis,
    personB: OntologicalAnalysis,
    _translationA: typeof ARCHETYPE_TRANSLATIONS[string],
    _translationB: typeof ARCHETYPE_TRANSLATIONS[string]
  ): any {
    // Generate dynamic conflict based on ontological differences
    const dimGap = this.describeDimensionalGap(
      personA.dominantDimension,
      personB.dominantDimension
    )

    const attrGap = this.describeAttributeGap(
      personA.dominantAttribute,
      personB.dominantAttribute
    )

    return {
      patterns: [personA.inferredArchetype, personB.inferredArchetype],
      translations: {
        structuralNature: `
          Questo conflitto emerge da differenze dimensionali e di attributo.

          ${dimGap}

          ${attrGap}

          Non è questione di chi ha ragione - operate in spazi diversi della realtà.
        `,
        whyConflict: `
          Le vostre modalità operano su coordinate diverse:

          - Dimensione: ${this.getDimensionName(personA.dominantDimension)} vs ${this.getDimensionName(personB.dominantDimension)}
          - Attributo: ${this.getAttributeName(personA.dominantAttribute)} vs ${this.getAttributeName(personB.dominantAttribute)}
          - Polarità: ${this.getPolarityName(personA.polarity)} vs ${this.getPolarityName(personB.polarity)}

          Queste differenze creano protocolli incompatibili di interpretazione della realtà.
        `,
        whatASeesInB: `
          [LABEL_A] vede [LABEL_B] attraverso le proprie coordinate, che non corrispondono
          a quelle di [LABEL_B]. Ciò che sembra "sbagliato" è semplicemente "diverso".
        `,
        whatBSeesInA: `
          [LABEL_B] vede [LABEL_A] attraverso le proprie coordinate, che non corrispondono
          a quelle di [LABEL_A]. Ciò che sembra "problematico" è semplicemente "altra modalità".
        `,
        escalationPattern: `
          Il pattern tipico è:
          1. Uno propone soluzione dalla propria dimensione
          2. L'altro la decodifica attraverso coordinate diverse
          3. Entrambi intensificano le proprie modalità
          4. Loop con crescente incomprensione
        `,
        bridgeStrategy: `
          La strategia è riconoscere che operate in spazi diversi:

          1. IDENTIFICATE in quali domini una modalità funziona meglio dell'altra
          2. SEPARATE i domini invece di cercare compromessi
          3. ACCETTATE che entrambe le modalità sono necessarie in contesti diversi

          Non è questione di cambiare personalità - è riconoscere che la realtà richiede
          strumenti diversi per aspetti diversi.
        `,
        bridgePhrases: {
          forA: [
            `Prova: "Capisco che operi in modo diverso. In quali situazioni la tua modalità
            funziona meglio? Possiamo separare i domini invece di combattere?"`,
          ],
          forB: [
            `Prova: "Capisco che hai bisogni diversi dai miei. In quali aree la tua modalità
            è più adatta? Possiamo dividere le responsabilità invece di cercare compromessi?"`,
          ]
        }
      }
    }
  }

  /**
   * Helpers for dynamic conflict generation
   */
  private describeDimensionalGap(dimA: string, dimB: string): string {
    if (dimA === dimB) {
      return `Entrambi operate nella stessa dimensione (${this.getDimensionName(dimA)}), ma con attributi o polarità diverse.`
    }

    const names = {
      'D1': 'Lineare (sequenziale)',
      'D2': 'Planare (ciclica)',
      'D3': 'Volumetrica (strutturale)',
      'D4': 'Temporale (causale)'
    }

    return `[LABEL_A] opera in dimensione ${names[dimA as keyof typeof names]}, mentre [LABEL_B] opera in dimensione ${names[dimB as keyof typeof names]}. Questi sono spazi diversi della realtà.`
  }

  private describeAttributeGap(attrA: string, attrB: string): string {
    if (attrA === attrB) {
      return `Condividete lo stesso attributo dominante (${this.getAttributeName(attrA)}).`
    }

    const names = {
      'A1': 'Distinzione (separazione)',
      'A2': 'Relazione (connessione)',
      'A3': 'Processo (trasformazione)'
    }

    return `[LABEL_A] privilegia ${names[attrA as keyof typeof names]}, mentre [LABEL_B] privilegia ${names[attrB as keyof typeof names]}. Sono lenti diverse per guardare la realtà.`
  }

  private getDimensionName(dim: string): string {
    const names = {
      'D1': 'Lineare',
      'D2': 'Planare',
      'D3': 'Volumetrica',
      'D4': 'Temporale'
    }
    return names[dim as keyof typeof names] || dim
  }

  private getAttributeName(attr: string): string {
    const names = {
      'A1': 'Distinzione',
      'A2': 'Relazione',
      'A3': 'Processo'
    }
    return names[attr as keyof typeof names] || attr
  }

  private getPolarityName(polarity: number): string {
    if (polarity > 0.3) return 'Espansiva'
    if (polarity < -0.3) return 'Contrattiva'
    return 'Equilibrata'
  }
}

// Export singleton
export const nlGenerator = new NaturalLanguageGenerator()
