# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build (Turbopack)
npm run lint     # run ESLint
npm start        # start production server
```

No test runner is configured.

## Project

Terminal-style resume/portfolio. All personal data lives in `lib/data.ts` — edit that file to update any resume content.

## Routes

- `/` — Resume/portfolio (homepage)
- `/terminal` — Interactive terminal with command registry

## Architecture

**Next.js 16** App Router with **React 19**, **Tailwind CSS v4**, **TypeScript** strict mode.

### Key files

```
app/
  page.tsx                  # Homepage (resume)
  terminal/page.tsx         # Interactive terminal page
  globals.css               # Tailwind v4 theme (Tokyo Night)
  layout.tsx

components/
  TerminalWindow.tsx         # Outer shell with macOS-style title bar
  TerminalPrompt.tsx         # Reusable prompt line (guest@resume:~$)
  TerminalInteractive.tsx    # Interactive terminal UI
  sections/
    WelcomeSection.tsx
    AboutSection.tsx
    ExperienceSection.tsx
    SkillsSection.tsx
    EducationSection.tsx

hooks/
  useTerminal.ts             # Terminal state and input handling

lib/
  data.ts                    # All resume content (profile, experience, skills, education)
  commands.ts                # Command registry (add new terminal commands here)
```

### Adding a terminal command

Commands live in `lib/commands.ts`. Each command is a named function of type `CommandHandler`:

```ts
const myCommand: CommandHandler = ({ pushHistory }) => {
  pushHistory([{ type: "output", text: "Hello!" }]);
};

// Register it
commands["mycommand"] = myCommand;
```

`CommandContext` provides: `router`, `pushHistory`, `clearHistory`, `clearInput`.

## Stack details

- **Tailwind CSS v4** — no `tailwind.config.js`. Theme tokens defined in `@theme inline {}` inside `globals.css`. Color palette is **Tokyo Night**.
- **ESLint v9** flat config only (`eslint.config.mjs`).
- **Turbopack** is the default bundler for both dev and build.

## Next.js / App Router conventions

- Default to **Server Components** — only add `"use client"` for interactivity or hooks.
- Use `next/link` for all internal navigation (never plain `<a>` tags for same-origin routes).
- Async Request APIs (`cookies()`, `headers()`, `params`, `searchParams`) must all be awaited.

## TypeScript

- Prefer `type` over `interface`.
- Never use `any` — use `unknown` and narrow explicitly.
- Import types with `import type`.
