# alwaysAgent

A TypeScript project scaffold.

## Requirements

- Node.js >= 18
- npm >= 9

## Getting Started

```bash
npm install
npm run build   # compile src/*.ts -> dist/
npm start       # run dist/index.js
```

## Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `npm run build`    | Compile TypeScript (`tsc`).          |
| `npm run typecheck`| Type-check without emitting output.  |
| `npm start`        | Run the compiled program.            |
| `npm run dev`      | Build and run in one step.           |

## Project Layout

```
.
├── src/
│   └── index.ts    # entry point
├── dist/           # build output (gitignored)
├── package.json
├── tsconfig.json
└── README.md
```
