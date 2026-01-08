# Conflict Resolver

**Un'app intelligente per l'analisi e la risoluzione di conflitti basata sull'ontologia EAR (Enti, Attributi, Relazioni).**

> **Privacy-first, no backend, analisi ontologica completa con 72 simboli e 8 pattern di conflitto**

---

## 📋 Indice

- [Cos'è Conflict Resolver](#cosè-conflict-resolver)
- [Quick Start](#-quick-start)
- [Architettura](#-architettura)
- [Sistema Ontologico EAR](#-sistema-ontologico-ear)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Come Funziona](#-come-funziona)
- [Guida per Sviluppatori](#-guida-per-sviluppatori)
- [Deploy](#-deploy)
- [Troubleshooting](#-troubleshooting)
- [Robustness & Error Handling](#-robustness--error-handling)

---

## Cos'è Conflict Resolver

Conflict Resolver è un'applicazione web che aiuta due persone in conflitto a:

1. **Comprendere** il proprio pattern operativo attraverso analisi dimensionale
2. **Identificare** la natura strutturale del conflitto (non psicologica)
3. **Prevedere** i pattern di escalation con precisione verificabile
4. **Risolvere** attraverso strategie ponte basate su separazione dimensionale

### Differenze chiave da altre app di "conflict resolution":

- **No psicologia pop**: usa ontologia formale (matrice 4×3×3×2 = 72 simboli)
- **Analisi strutturale**: spiega conflitti come incompatibilità dimensionali
- **Predizioni verificabili**: pattern di escalation concreti, non vaghi
- **Privacy totale**: tutto locale, niente server, niente tracciamento
- **Linguaggio naturale**: output in italiano chiaro senza simboli matematici

---

## 🚀 Quick Start

### Prerequisiti

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installazione

```bash
# Clone repository
git clone <repository-url>
cd conflict-resolver

# Installa dipendenze
npm install

# Avvia dev server
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`

### Build per Produzione

```bash
npm run build
```

L'output sarà in `dist/` - pronto per deploy.

---

## 🏗 Architettura

### Stack Tecnologico

| Tecnologia | Versione | Uso |
|------------|----------|-----|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.6.2 | Type Safety |
| **Vite** | 5.4.21 | Build Tool & Dev Server |
| **Zustand** | 5.0.2 | State Management |
| **Framer Motion** | 11.14.4 | Animazioni |
| **Tailwind CSS** | 3.4.17 | Styling |

### Architettura a 3 Layer

```
┌──────────────────────────────────────────┐
│           UI LAYER (React)               │
│  Components: Welcome, Context, Questions │
│             Analysis, Complete           │
└──────────────┬───────────────────────────┘
               │
┌──────────────▼───────────────────────────┐
│       STATE LAYER (Zustand)              │
│  Store: Session, Rounds, Analyses        │
│  Persistence: LocalStorage               │
└──────────────┬───────────────────────────┘
               │
┌──────────────▼───────────────────────────┐
│      ENGINE LAYER (Ontological)          │
│  - Analyzer: 72 symbols activation       │
│  - Translations: Natural language        │
│  - Patterns: 8 conflict translations     │
└──────────────────────────────────────────┘
```

### Flusso Dati

```
User Input → Questions
    ↓
PersonResponses → Store
    ↓
Store.processAnalysis() → Ontological Analyzer
    ↓
72 Symbols Activated → Dimensional Scores
    ↓
Archetype Inference + Conflict Pattern
    ↓
Natural Language Generator → Italian Text
    ↓
RoundAnalysis → UI Display
```

---

## 🔮 Sistema Ontologico EAR

### Matrice Completa: 72 Simboli

Il sistema si basa su una matrice ontologica **4×3×3×2 = 72 simboli**:

```
4 Dimensioni × 3 Attributi × 3 Assi × 2 Polarità = 72 Simboli
```

#### 4 Dimensioni (D1-D4)

| Dimensione | Nome | Descrizione | Esempi |
|------------|------|-------------|---------|
| **D1** | Lineare | Sequenze, direzioni, confini | Incisione, Sequenza, Traiettoria |
| **D2** | Planare | Reti, cicli, superficie | Rete, Sincronizzazione, Rotazione |
| **D3** | Volumetrica | Gerarchie, strutture, profondità | Stratificazione, Architettura, Sistema |
| **D4** | Temporale | Causale, evoluzione, storia | Origine, Eredità, Trascendenza |

#### 3 Attributi (A1-A3)

| Attributo | Nome | Focus |
|-----------|------|-------|
| **A1** | Distinzione | Separare, definire, classificare |
| **A2** | Relazione | Connettere, coordinare, integrare |
| **A3** | Processo | Trasformare, muovere, evolvere |

#### 3 Assi (X1-X3)

| Asse | Nome | Livello |
|------|------|---------|
| **X1** | Foundational | Base, primitivo |
| **X2** | Recursive | Iterativo, ricorsivo |
| **X3** | Synthetic | Integrato, complesso |

#### 2 Polarità (+/-)

- **+** (Espansiva): Crescita, apertura, costruzione
- **-** (Contrattiva): Riduzione, chiusura, dissoluzione

### Esempio di Simbolo

```typescript
Σ₃₁₃₊ - "Architettura"
├─ D3 (Volumetrica): Opera in spazio gerarchico
├─ A1 (Distinzione): Focus su classificazione
├─ X3 (Synthetic): Livello integrato
└─ + (Espansiva): Costruisce strutture

Semantic Field: ['architettura', 'struttura', 'edificio',
                  'sistema complesso', 'organizzazione']

Archetype Resonance:
  - ruler: 0.6
  - creator: 0.5
  - sage: 0.4
```

### 12 Archetipi Mappati

Ogni archetipo risuona con specifici simboli della matrice:

| Archetipo | Dimensione Dominante | Attributo | Polarità |
|-----------|---------------------|-----------|----------|
| Innocent | D2 (Planare) | A2 (Relazione) | + |
| Everyman | D2 (Planare) | A2 (Relazione) | + |
| Hero | D1 (Lineare) | A3 (Processo) | + |
| Caregiver | D3 (Volumetrica) | A2 (Relazione) | + |
| Explorer | D2 (Planare) | A1 (Distinzione) | + |
| Rebel | D2 (Planare) | A1 (Distinzione) | - |
| Lover | D2 (Planare) | A2 (Relazione) | + |
| Creator | D3 (Volumetrica) | A3 (Processo) | + |
| Jester | D2 (Planare) | A3 (Processo) | + |
| Sage | D4 (Temporale) | A1 (Distinzione) | + |
| Magician | D4 (Temporale) | A3 (Processo) | + |
| Ruler | D4/D3 | A2 (Relazione) | + |

### 8 Pattern di Conflitto Tradotti

Ogni pattern include analisi dimensionale completa + frasi concrete:

1. **ruler-explorer**: D4/D3 vs D2 - Ordine vs Libertà
2. **lover-explorer**: D2-fusionale vs D2-esplorativo - Connessione vs Autonomia
3. **hero-caregiver**: D1 vs D3 - Azione vs Cura
4. **sage-jester**: D4 vs D2 - Profondità vs Leggerezza
5. **ruler-rebel**: D4/D3 vs D2 - Struttura vs Indipendenza
6. **innocent-magician**: D2-stabile vs D4-trasformativo - Conservazione vs Evoluzione
7. **caregiver-explorer**: D3-protettivo vs D2-libero - Protezione vs Autonomia
8. **creator-everyman**: D3-creativo vs D2-comunitario - Unicità vs Appartenenza

---

## 📁 Struttura del Progetto

```
conflict-resolver/
├── src/
│   ├── types/
│   │   └── index.ts                 # Type definitions complete
│   │
│   ├── ontology/                    # 🔥 CORE ONTOLOGICAL ENGINE
│   │   ├── types.ts                 # Ontological type system
│   │   ├── symbols.ts               # 72 symbols database (2067 lines)
│   │   ├── analyzer.ts              # Dimensional analysis engine
│   │   ├── translations.ts          # 12 archetype → Italian
│   │   ├── conflictTranslations.ts  # 8 conflict patterns → Italian
│   │   ├── nlGenerator.ts           # Natural language generator
│   │   └── index.ts                 # Module exports
│   │
│   ├── engine/                      # ANALYSIS ORCHESTRATION
│   │   ├── archetypes.ts            # 12 archetypes + patterns
│   │   ├── analyzer.ts              # Integrates ontological engine
│   │   └── questions.ts             # Question flow definitions
│   │
│   ├── store/
│   │   └── useSession.ts            # Zustand store + persistence
│   │
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   ├── Welcome.tsx              # Landing screen
│   │   ├── Context.tsx              # Context selection
│   │   ├── QuestionFlow.tsx         # Questions interface
│   │   ├── Handoff.tsx              # Device handoff
│   │   ├── Analysis.tsx             # Results display
│   │   ├── Reflection.tsx           # Between rounds
│   │   └── Complete.tsx             # Session end
│   │
│   ├── App.tsx                      # Main router
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Tailwind imports
│
├── public/
│   └── favicon.ico
│
├── dist/                            # Build output (gitignored)
│
├── vercel.json                      # Vercel deployment config
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

### File Critici da Conoscere

#### 1. `src/ontology/symbols.ts` (2067 linee)

**Cosa contiene**: Tutti i 72 simboli con:
- Coordinate ontologiche (D, A, X, polarity)
- Semantic fields (10 keywords italiani)
- Archetype resonance (pesi per ogni archetipo)
- Relazioni (opposite, complementary, conflictual)

**Quando modificare**:
- Se vuoi aggiungere/modificare keyword semantici
- Se vuoi ribilanciare archetype resonance
- Se vuoi espandere relazioni tra simboli

#### 2. `src/ontology/analyzer.ts` (394 linee)

**Cosa fa**:
```typescript
analyzeResponses(responses: PersonResponses) → OntologicalAnalysis
```

**Pipeline**:
1. Normalizza testo (lowercase, trim)
2. Calcola dimension scores (D1-D4) da keywords
3. Calcola attribute scores (A1-A3) da keywords
4. Calcola polarity (+/-) da sentiment keywords
5. Attiva simboli (40% dim + 30% attr + 20% pol + 10% keywords)
6. Inferisce archetipo da symbol activation
7. Genera reasoning steps

**Quando modificare**:
- Se vuoi cambiare pesi di attivazione simboli
- Se vuoi aggiungere nuove dimensioni di analisi
- Se vuoi modificare algoritmo di inferenza

#### 3. `src/ontology/conflictTranslations.ts` (900+ linee)

**Cosa contiene**: 8 pattern tradotti con:
- `ontologicalNature`: coordinate dimensionali del conflitto
- `structuralNature`: spiegazione strutturale (non psicologica)
- `whyConflict`: perché si scontrano
- `whatASeesInB` / `whatBSeesInA`: decodifiche reciproche
- `escalationPattern`: loop prevedibile con PREDIZIONE
- `bridgeStrategy`: soluzione basata su separazione dimensionale
- `bridgePhrases`: frasi concrete da usare

**Quando modificare**:
- Per aggiungere nuovi pattern (coppie archetipiche)
- Per migliorare traduzioni esistenti
- Per aggiungere più frasi ponte

#### 4. `src/engine/analyzer.ts` (400+ linee)

**Cosa fa**: Orchestrazione analysis
```typescript
// Main functions
identifyArchetype(responses) → ArchetypeIdentification
generateRoundAnalysis(personA, personB, round) → RoundAnalysis
analyzeEvolution(prev, current) → Evolution
```

**Integra**:
- Ontological analyzer (`ontologicalAnalyzer.analyzeResponses()`)
- Translations (`ARCHETYPE_TRANSLATIONS`, `CONFLICT_TRANSLATIONS`)
- Legacy archetypes (`ARCHETYPES`, `BRIDGE_STRATEGIES`)

**Quando modificare**:
- Per cambiare come vengono usate le traduzioni ontologiche
- Per aggiungere nuovi tipi di analisi
- Per modificare calcolo della tensione

#### 5. `src/store/useSession.ts` (240 linee)

**Cosa gestisce**:
- State dell'intera sessione (status, rounds, analyses)
- Persistenza su localStorage (via zustand/persist)
- Orchestrazione del flusso (save → process → analyze)
- Error handling e timeout management

**Actions chiave**:
```typescript
setContext(context)           // Imposta contesto (coppia, amici, etc)
savePersonResponses(responses) // Salva risposte Persona A/B
processAnalysis()             // Triggera analisi ontologica
cancelAnalysis()              // Cleanup timeout (prevenire memory leak)
startNewRound()               // Nuovo round di dialogo
exportSession()               // Esporta JSON sessione
```

**Quando modificare**:
- Per aggiungere nuovi stati nel flusso
- Per modificare persistenza
- Per aggiungere validazioni

---

## 🔄 Come Funziona

### Flow Completo

```
1. WELCOME
   ↓
2. CONTEXT SELECTION (partner/family/friends/work/general)
   ↓
3. ROUND START (Persona A)
   ↓
4. QUESTIONS (situation, feeling, need, addition, recognition)
   ↓
5. HANDOFF (passa dispositivo)
   ↓
6. QUESTIONS (Persona B)
   ↓
7. PROCESSING (1.5s delay per UX)
   ↓
8. ONTOLOGICAL ANALYSIS
   │  ├─ Analizza risposte di A → Dimensioni + Simboli + Archetipo
   │  ├─ Analizza risposte di B → Dimensioni + Simboli + Archetipo
   │  ├─ Trova pattern conflitto (A vs B)
   │  ├─ Applica traduzioni ontologiche (se disponibili)
   │  └─ Genera analisi in italiano naturale
   ↓
9. ANALYSIS DISPLAY
   │  ├─ Tension meter
   │  ├─ Archetype cards (A e B)
   │  ├─ Pattern del conflitto
   │  ├─ Blind spots
   │  ├─ Bridge strategy
   │  └─ Insights
   ↓
10. REFLECTION
    ↓
11. NEW ROUND? → Torna a (3) oppure → COMPLETE

12. COMPLETE
    └─ Mostra evoluzione, può esportare JSON
```

### Esempio di Analisi

**Input**:
```json
{
  "personA": {
    "situation": "Non riesco mai a fare quello che voglio",
    "feeling": "Frustrato e soffocato",
    "need": "Libertà e spazio per muovermi"
  },
  "personB": {
    "situation": "Devo sempre decidere tutto io",
    "feeling": "Sovraccarico di responsabilità",
    "need": "Che l'altro si prenda responsabilità"
  }
}
```

**Ontological Analysis Pipeline**:

1. **Person A Analysis**:
   - Keywords match: "mai", "soffocato", "libertà", "spazio", "muovermi"
   - D2 (Planare): 0.7 - movimento su superficie
   - A1 (Distinzione): 0.8 - bisogno di separazione
   - Polarity: - (contrattiva: fuga)
   - Top symbols: Σ₂₁₁₋ (Fusione-), Σ₃₂₂₋ (Indipendenza), Σ₂₁₃₋ (Transizione)
   - **Inferred archetype**: Explorer (confidence: 0.85)

2. **Person B Analysis**:
   - Keywords match: "decidere", "responsabilità", "prendere responsabilità"
   - D4 (Temporale): 0.6 - causale, decisionale
   - D3 (Volumetrica): 0.7 - gerarchica, strutturale
   - A2 (Relazione): 0.8 - coordinamento
   - Polarity: + (espansiva: costruzione)
   - Top symbols: Σ₄₂₁₊ (Eredità), Σ₃₂₁₊ (Coordinamento), Σ₃₁₃₊ (Architettura)
   - **Inferred archetype**: Ruler (confidence: 0.82)

3. **Conflict Pattern Matching**:
   - Conflict key: "ruler-explorer"
   - Pattern found in `CONFLICT_TRANSLATIONS`
   - Ontological nature: "D4/D3 (Causale-Strutturale) vs D2 (Planare-Esplorativo)"

4. **Natural Language Generation**:
   ```
   Natura strutturale:
   "Questo conflitto emerge perché operate su DIMENSIONI DIVERSE.
   Ruler cerca ARCHITETTURA CAUSALE stabile. Explorer cerca
   LIBERTÀ DI MOVIMENTO. Non è 'tiranno vs irresponsabile' -
   è incompatibilità dimensionale."

   Predizione di escalation:
   "PREDIZIONE: Ruler irrigidirà confini (cercando stabilità),
   Explorer intensificherà fuga (cercando spazio). Loop infinito."

   Bridge strategy:
   "La soluzione NON è compromesso. È SEPARAZIONE DIMENSIONALE:
   identificate 3-5 regole NECESSARIE per stabilità strutturale
   (non negoziabili). Su tutto il resto: Explorer ha autonomia totale."
   ```

**Output UI**: Mostra tutto in cards navigabili con animazioni Framer Motion.

---

## 👨‍💻 Guida per Sviluppatori

### Setup Development

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Type checking in watch mode
npm run typecheck -- --watch

# Lint
npm run lint

# Build
npm run build

# Preview build locally
npm run preview
```

### Aggiungere un Nuovo Simbolo

Se vuoi espandere oltre 72 simboli:

1. Apri `src/ontology/symbols.ts`
2. Crea nuovo simbolo seguendo il pattern:

```typescript
export const SYMBOL_XXX_PLUS: OntologicalSymbol = {
  id: 'symbol_xxx_plus',
  notation: 'Σ₁₂₃₊',
  name: 'Nome Simbolo',
  position: 73, // Next available
  dimension: 'D1', // D1-D4
  dimensionName: 'Linear', // Linear/Planar/Volumetric/Temporal
  attribute: 'A1', // A1-A3
  attributeName: 'Distinction', // Distinction/Relation/Process
  axis: 'X1', // X1-X3
  axisName: 'Foundational', // Foundational/Recursive/Synthetic
  polarity: '+', // +/-
  description: 'Descrizione breve',
  semanticField: [
    // 10 keywords italiani che attivano questo simbolo
    'keyword1', 'keyword2', 'keyword3', '...'
  ],
  oppositeSymbol: 'symbol_xxx_minus',
  complementarySymbols: ['symbol_yyy_plus'],
  conflictualSymbols: ['symbol_zzz_minus'],
  archetypeResonance: {
    'archetype_name': 0.5, // peso 0-1
    // ... altri archetipi
  }
}
```

3. Aggiungi a `SYMBOLS_DATABASE`:

```typescript
export const SYMBOLS_DATABASE: Record<string, OntologicalSymbol> = {
  // ... existing
  'symbol_xxx_plus': SYMBOL_XXX_PLUS,
}
```

4. Rebuild e testa.

### Aggiungere un Nuovo Pattern di Conflitto

1. Apri `src/ontology/conflictTranslations.ts`
2. Identifica la coppia di archetipi (es. `'sage-hero'`)
3. Analizza le loro dimensioni dominanti
4. Scrivi la traduzione completa:

```typescript
'sage-hero': {
  patterns: ['sage', 'hero'],
  ontologicalNature: 'D4 (Temporale-Analitico) vs D1 (Lineare-Direzionale)',
  translations: {
    structuralNature: `
      Spiegazione della natura strutturale del conflitto.
      Usa ${personLabel('A')} e ${personLabel('B')} per riferimenti.
      Focus su dimensioni, non psicologia.
    `,
    whyConflict: `Perché si scontrano...`,
    whatASeesInB: `Cosa A vede in B...`,
    whatBSeesInA: `Cosa B vede in A...`,
    escalationPattern: `
      Loop prevedibile:
      1. A fa X → B reagisce Y
      2. B fa Z → A si sente W
      ...
      PREDIZIONE: Se continuate, A diventerà X e B diventerà Y.
    `,
    bridgeStrategy: `
      La soluzione è [PRINCIPIO STRUTTURALE]:
      → Step 1...
      → Step 2...
      Non è compromesso - è [SPIEGAZIONE].
    `,
    bridgePhrases: {
      forA: [
        `Quando B fa/dice X, NON significa Y. Significa Z.`,
        `Prova: "Frase concreta da dire a B..."`
      ],
      forB: [
        `Quando A fa/dice X, NON significa Y. Significa Z.`,
        `Prova: "Frase concreta da dire ad A..."`
      ]
    }
  }
}
```

5. Rebuild e il nuovo pattern sarà automaticamente disponibile.

### State Management Best Practices

**Zustand store** è l'unica fonte di verità. Componenti React sono puramente presentazionali.

```typescript
// ✅ GOOD: Read from store, trigger actions
function MyComponent() {
  const { status, analyses, processAnalysis } = useSessionStore()

  return (
    <button onClick={processAnalysis}>
      Analyze
    </button>
  )
}

// ❌ BAD: Local state che duplica store
function MyComponent() {
  const [localAnalyses, setLocalAnalyses] = useState([])
  // Don't do this - use store directly
}
```

**Persistence**: Lo store è già configurato con `persist` middleware. Salva automaticamente su localStorage:

```typescript
// Persisted keys (vedi useSession.ts:222-230)
{
  context,
  rounds,
  analyses,
  evolutions,
  currentRound,
  status,
  currentPerson
}
```

### Type Safety

Tutti i types sono in `src/types/index.ts`. Il progetto usa **strict mode**:

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

**Mai usare `any`**. Se hai un caso complesso, usa `unknown` e type guards:

```typescript
// ✅ GOOD
function process(data: unknown) {
  if (typeof data === 'object' && data !== null && 'field' in data) {
    // Now TypeScript knows data has 'field'
  }
}

// ❌ BAD
function process(data: any) {
  // Loses all type safety
}
```

### Testing

Attualmente non ci sono test automatici. Per testare manualmente:

1. **Flow completo**: Welcome → Context → Round → Analysis → Complete
2. **Edge cases**:
   - Testo vuoto nelle risposte
   - Campi opzionali undefined
   - Doppio click su "Avanti"
   - Refresh durante processing
   - LocalStorage pieno

3. **Robustness** (già fixati 7 critical issues):
   - Memory leak su unmount ✅
   - Null pointer exceptions ✅
   - Race conditions ✅
   - Export errors ✅

---

## 🚀 Deploy

### Vercel (Raccomandato)

Vercel è già configurato con `vercel.json`:

```bash
# Deploy automatico
npm install -g vercel
vercel

# Oppure collega GitHub
# 1. Push su GitHub
# 2. Importa progetto su vercel.com
# 3. Deploy automatico ad ogni push su main
```

**Configurazione Vercel** (`vercel.json`):

- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrites per SPA routing: `/*` → `/index.html`
- Headers di sicurezza (X-Frame-Options, CSP, etc)

### Altri Provider

#### Netlify

```bash
# netlify.toml (crea questo file)
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### GitHub Pages

```bash
# Aggiungi a package.json
"homepage": "https://<username>.github.io/<repo>",

# Build e deploy
npm run build
npx gh-pages -d dist
```

#### Docker

```dockerfile
# Dockerfile (crea questo file)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```nginx
# nginx.conf
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🐛 Troubleshooting

### Build Errors

#### "Cannot find module '@/...'"

**Problema**: Path alias non risolto.

**Soluzione**: Verifica `tsconfig.json` e `vite.config.ts`:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

#### "Type error: Cannot find namespace 'NodeJS'"

**Problema**: NodeJS types non installate.

**Soluzione**:
```bash
npm install --save-dev @types/node
```

Oppure usa `number` invece di `NodeJS.Timeout` (già fatto nel commit 49f7b2b).

### Runtime Errors

#### "localStorage is not defined"

**Problema**: SSR o testing environment senza localStorage.

**Soluzione**: Aggiungi check:

```typescript
if (typeof window !== 'undefined' && window.localStorage) {
  // Use localStorage
}
```

#### "Maximum update depth exceeded"

**Problema**: Loop infinito nel render.

**Soluzione**: Verifica che actions non triggherino re-render infiniti. Usa `useEffect` con dependencies corrette:

```typescript
// ❌ BAD
useEffect(() => {
  setState(newValue) // No dependencies - infinite loop
})

// ✅ GOOD
useEffect(() => {
  setState(newValue)
}, [dependency])
```

#### "Memory leak detected"

**Problema**: Timeout non cancellato.

**Soluzione**: Già fixato nel commit 49f7b2b. Se crei nuovi timeout, usa sempre cleanup:

```typescript
useEffect(() => {
  const id = setTimeout(() => {}, 1000)
  return () => clearTimeout(id) // Cleanup
}, [])
```

### UI Issues

#### "Text overflow not handled"

**Soluzione**: Usa utility classes Tailwind:

```tsx
<p className="truncate">...</p>          // Single line truncate
<p className="line-clamp-3">...</p>      // Multi-line clamp
<p className="break-words">...</p>       // Break long words
```

#### "Animations stuttering"

**Problema**: Troppi re-render o animazioni pesanti.

**Soluzione**: Usa `useMemo` e `useCallback`:

```typescript
const expensiveValue = useMemo(() => computeValue(), [deps])
const stableCallback = useCallback(() => doSomething(), [deps])
```

### Data Issues

#### "Archetype not inferred correctly"

**Problema**: Semantic keywords non matchano.

**Soluzione**:
1. Controlla `src/ontology/symbols.ts` - semantic fields
2. Verifica che le keyword siano lowercase
3. Aggiungi sinonimi ai semantic fields se necessario
4. Debug con `console.log(ontologicalAnalysis.activatedSymbols)`

#### "Conflict pattern not found"

**Problema**: Pattern non esiste in `CONFLICT_TRANSLATIONS`.

**Soluzione**:
1. Verifica che la coppia sia definita (es. `'sage-hero'` o `'hero-sage'`)
2. L'analyzer cerca sia `archA-archB` che `archB-archA`
3. Se manca, viene usato fallback generico
4. Aggiungi il pattern seguendo la guida sopra

### Performance Issues

#### "Build size too large"

**Attuale**: ~407KB (123KB gzipped)

**Se supera 500KB**:

1. Analizza bundle:
```bash
npm run build -- --mode analyze
```

2. Lazy load components:
```typescript
const Analysis = lazy(() => import('./components/Analysis'))
```

3. Rimuovi dipendenze inutilizzate.

#### "App slow on mobile"

**Soluzioni**:
1. Verifica animazioni Framer Motion - usa `useReducedMotion`
2. Lazy load heavy components
3. Memoizza calculations pesanti
4. Disabilita animazioni se `prefersReducedMotion`

---

## 🛡 Robustness & Error Handling

### Fixes Implementati (Commit 49f7b2b)

L'app è stata auditata e fixati **7 problemi critici/high**:

#### 1. Memory Leak Prevention ✅

**Problema**: setTimeout non cancellato causava memory leak.

**Fix**:
- Timeout ID salvato in state (`_timeoutId`)
- Cleanup in `cancelAnalysis()`
- Clear existing timeout prima di crearne uno nuovo

```typescript
// Before processAnalysis
const { _timeoutId } = get()
if (_timeoutId) clearTimeout(_timeoutId)
```

#### 2. Null Safety ✅

**Problema**: Optional chaining incompleto causava crashes.

**Fix**: Usato `?.` completo su tutte le chains:

```typescript
// Before
translationA?.translations.field // ❌ Crashes if translations is undefined

// After
translationA?.translations?.field // ✅ Safe
```

#### 3. Input Validation ✅

**Problema**: Dati corrotti potevano essere salvati.

**Fix**: Validazione completa in `savePersonResponses()`:

```typescript
// Check object validity
if (!responses || typeof responses !== 'object') {
  set({ error: 'Dati non validi' })
  return
}

// Check required fields
if (!responses.situation || !responses.feeling || !responses.need) {
  set({ error: 'Campi obbligatori mancanti' })
  return
}
```

#### 4. Race Condition Protection ✅

**Problema**: Doppio click causava stati inconsistenti.

**Fix**: Lock con `isProcessing` flag:

```typescript
if (state.isProcessing) {
  console.warn('Already processing, skipping save')
  return
}
```

#### 5. Error Handling ✅

**Problema**: Export senza try-catch.

**Fix**: Wrapped con error handling user-friendly:

```typescript
try {
  const data = exportSession()
  // ... export logic
} catch (error) {
  console.error('Export failed:', error)
  alert('Errore durante l\'esportazione. Riprova.')
}
```

### Error Boundaries (Future)

Per implementare React Error Boundaries:

```typescript
// src/components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />
    }
    return this.props.children
  }
}
```

### Logging & Monitoring

Per produzione, considera:

1. **Sentry** per error tracking:
```bash
npm install @sentry/react
```

2. **Analytics** (privacy-first):
```bash
npm install @vercel/analytics  # Se su Vercel
```

3. **Performance monitoring**:
```typescript
// Use React Profiler
<Profiler id="Analysis" onRender={callback}>
  <Analysis />
</Profiler>
```

---

## 📚 Resources & References

### Ontologia EAR

- Matrice completa: `src/ontology/symbols.ts`
- Documentazione pattern: `src/ontology/conflictTranslations.ts`
- Paper teorico: (aggiungi link se disponibile)

### Archetipi

Basati su framework Jungiano con mappatura dimensionale originale:

- Innocent, Everyman, Hero, Caregiver
- Explorer, Rebel, Lover, Creator
- Jester, Sage, Magician, Ruler

### Tech Stack Docs

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🤝 Contributing

Se vuoi contribuire:

1. **Fork** il repository
2. **Crea branch** per feature: `git checkout -b feature/amazing-feature`
3. **Commit** con messaggi chiari: `git commit -m "Add amazing feature"`
4. **Push** al branch: `git push origin feature/amazing-feature`
5. **Apri Pull Request** con descrizione dettagliata

### Code Style

- **TypeScript strict mode** sempre
- **No `any` types** - usa `unknown` con type guards
- **Functional components** con hooks (no class components)
- **Tailwind** per styling (no CSS inline o styled-components)
- **Commit messages** descrittivi (vedi git log per esempi)

### Testing Checklist

Prima di PR, verifica:

- [ ] `npm run build` passa senza errori
- [ ] `npm run typecheck` passa senza warnings
- [ ] Flow completo funziona (Welcome → Complete)
- [ ] Nessun console.error in production
- [ ] Responsive su mobile (Chrome DevTools)
- [ ] Export JSON funziona
- [ ] LocalStorage persiste correttamente

---

## 📝 License

Specifica la licenza del progetto (MIT, GPL, proprietary, etc).

---

## 👤 Autore

Rayda Alessandro (aggiungi contatti se vuoi)

---

## 🎯 Roadmap (Opzionale)

Future features da considerare:

- [ ] Visualizzazione grafica della matrice 72 simboli (D3.js)
- [ ] Export PDF professionale dell'analisi
- [ ] Multi-lingua support (EN, ES, FR)
- [ ] Voice input per risposte
- [ ] Modalità "therapist" con più round guidati
- [ ] Analytics anonime sui pattern più comuni
- [ ] A/B testing su frasi ponte
- [ ] Machine learning per migliorare inferenza

---

## ⚠️ Note Importanti per Riprendere il Progetto

### Se riapri dopo mesi:

1. **Aggiorna dipendenze** (potrebbero esserci breaking changes):
```bash
npm outdated
npm update
```

2. **Controlla build** prima di modificare:
```bash
npm run build
```

3. **Rileggi audit** in questo README - sezione Robustness

4. **Testa flow completo** prima di nuove feature

### File da NON modificare senza capire:

- `src/ontology/symbols.ts` - Cambiamenti qui impattano TUTTA l'analisi
- `src/store/useSession.ts` - Modifiche qui possono rompere persistence
- `vercel.json` - Modifiche qui rompono deployment

### File sicuri da modificare:

- `src/components/*.tsx` - UI components (solo presentazione)
- `src/ontology/translations.ts` - Traduzioni (safe, backward compatible)
- `src/ontology/conflictTranslations.ts` - Aggiungere pattern (safe)
- `README.md` - Questo file :)

### Debug Quick Start:

```typescript
// In browser console
localStorage.getItem('conflict-resolver-session') // Vedi stato salvato
localStorage.clear() // Reset completo
```

```bash
# Build con source maps per debug
npm run build -- --mode development
```

---

**Domande? Controlla prima questo README. Se non trovi risposta, check git history:**

```bash
git log --oneline --graph --all  # Vedere storia commits
git show <commit-hash>            # Vedere dettagli commit specifico
```

---

*Ultimo aggiornamento: 2026-01-08*
*Versione: 2.0.0 (Sistema ontologico completo a 72 simboli)*
