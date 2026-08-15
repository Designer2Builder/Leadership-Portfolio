# Alicia Wood — Design Leadership Portfolio

Personal portfolio site for Alicia Wood (Senior Manager, Product Design, Intuit Credit Karma). Works for any agent picking this up — Claude Code, Cursor, or manual.

## Current state

Next.js App Router site with all planned routes built (homepage, about, leadership, contact, three case studies). Content in `/content`; tokens in `design/style-guide.md` + `globals.css`.

```
src/app/          / · /about · /leadership · /contact · /work/{tax-ai,monileo,orientation}
content/          homepage, about, leadership, contact, case-studies/*, types
src/components/   layout/, home/, case-study/, motion/, ui/
public/images/    homepage, about, case-studies/* (incl. FTUE), logos
```

Design tokens: `design/style-guide.md` + `src/app/globals.css` `@theme` — never hardcode hex/px values.

## Stack (decided — don't relitigate)

| Concern | Decision |
|---|---|
| Framework | Next.js (latest stable), App Router, TypeScript |
| Styling | Tailwind CSS v4, CSS-first `@theme` block in `globals.css` |
| Components | shadcn/ui, owned source in `src/components/ui/`, reskinned with extracted tokens |
| Fonts | `next/font` self-hosting the Figma-specified family |
| Content | Typed TS data files in `/content`, a `Block` union (`prose \| image \| chart \| tabs \| carousel`) modeling the copy PDF's bracket markers |
| Charts/tables | Semantic `<table>` components, not a charting library |
| Hosting | Deferred — verify with `next dev` / `next build` only |

## Site map

`/` (Homepage) · `/about` · `/leadership` · `/contact` · `/work/tax-ai` · `/work/monileo` · `/work/orientation`

## Conventions once code exists

- Never hardcode colors/spacing — pull from the `@theme` tokens in `globals.css`.
- New case study? Use the `case-study` skill (`.claude/skills/case-study/SKILL.md`) — it documents the shared layout pattern and exact steps.
- Content changes go in `/content/*.ts`, not inline in page components.
- Verify every page at ~375px, ~768px, ~1440px, plus one in-between width, before calling a change done — no horizontal scroll or overlap at any width.

## Reference docs

- `PORTFOLIO_BUILD_PLAN.md` — full build order and stack rationale
- `docs/content-reference.md` — copy PDF structure, bracket-marker legend, image/asset mapping
- `.claude/skills/case-study/SKILL.md` — pattern for adding a new case study (draft — confirm file paths match reality once the first 3 case studies are built)
