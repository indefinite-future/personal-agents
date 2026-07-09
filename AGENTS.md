# AGENTS.md

## Cursor Cloud specific instructions

### What this repo is
Single product: **Guitar Tone Master**, a TypeScript CLI (`src/guitar-tone-master.ts`) that
generates Neural DSP Quad Cortex presets. It runs via `@cursor/sdk` (`Agent.create`, model
`composer-2`). There is no web server, database, frontend, or Docker.

### Running the app (dev)
- Run: `npm run tone-master "Pink Floyd - Comfortably Numb"` (non-interactive) or `npm run tone-master`
  (interactive prompt). See `package.json` scripts. It executes directly with `tsx` — no build step.
- **Requires `CURSOR_API_KEY`** (via a `.env` file at repo root or an exported env var). Without it the
  process prints an error and exits 1. With an invalid key the SDK fails at `GET /v1/models` with a 401,
  which confirms the code path and outbound network reach the Cursor backend — a valid key is the only
  thing needed to produce real output.
- `uploads/device-list-compact.md` is optional grounding context; the code falls back gracefully if absent.

### Lint / test / build
- No lint config and no test suite: `npm test` is a placeholder that intentionally exits 1. Do not treat
  that failure as a regression.
- Typecheck with `npx tsc --noEmit` (this is the closest thing to a build/lint check; `tsc` emits to
  `dist/` but nothing consumes it — dev runs via `tsx`).

### Gotchas
- `src/parse-devices.ts` is a one-off data-prep helper hard-coded to Windows paths; it is not wired into
  any npm script and will not run on Linux. Ignore it for normal dev.
