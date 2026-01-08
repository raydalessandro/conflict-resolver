# Conflict Resolver

Un facilitatore di dialogo basato sull'ontologia EAR (Essenza, Armonia, Risonanza).

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Deploy su Vercel

```bash
npx vercel
```

Oppure connetti GitHub a Vercel.

## 🛠 Stack

- React 18 + TypeScript
- Vite
- Zustand (state)
- Tailwind CSS
- Framer Motion

## 📁 Struttura

```
src/
├── types/          # TypeScript interfaces
├── engine/         # Core EAR logic
│   ├── archetypes.ts
│   ├── analyzer.ts
│   └── questions.ts
├── store/          # Zustand store
├── components/     # React components
└── App.tsx
```

## 🔮 Come funziona

1. Selezione contesto (partner, famiglia, amici, lavoro)
2. Persona A risponde alle domande
3. Passa dispositivo a Persona B
4. Persona B risponde
5. Analisi basata su archetipi
6. Round iterativi di riflessione

---

Basato sull'ontologia EAR • No backend • Privacy-first
