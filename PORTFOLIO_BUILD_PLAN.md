# Alicia Wood — Design Leadership Portfolio: Build Plan & Handoff

This project is moving from Claude Code to **Cursor** for the remainder of the build. Everything needed to continue is in this file — Cursor's agent (or Alicia working manually) should read this first.

## Why this handoff happened

The plan was designed and approved in Claude Code, and two prerequisite steps were completed there (poppler installed, Figma Dev Mode MCP Server registered at `http://127.0.0.1:3845/mcp`). But that Claude Code environment doesn't expose locally-registered MCP server tools to the agent (only a fixed set of built-in integrations), so the Figma design-token extraction step was blocked. Cursor has its own MCP client that should connect to the same Figma server without that limitation.

## Figma MCP setup in Cursor

The Figma desktop app's **Dev Mode MCP Server** should already be enabled (Preferences → Enable local MCP Server), listening at `http://127.0.0.1:3845/mcp`. In Cursor: go to Settings → MCP (or add to `.cursor/mcp.json` in this project) and register an HTTP MCP server pointing at that URL. Cursor should then expose Figma tools (get design tokens/variables, get screenshots, get code) directly. If Cursor asks for a transport type, use HTTP/streamable-HTTP (same as was used for the `claude mcp add --transport http` registration).

## Project state as of handoff (2026-08-05)

No code exists yet — this is a from-scratch build. Directory currently contains only source assets:
```
Alicia Leadership Portfolio/
├── Copy/Alicia Wood - Leadership Portfolio Copy.pdf   (33pp, structured copy doc)
├── Images/                                             (16 PNGs, fully cross-referenced, no gaps)
├── logos/                                              (single combined lockup: "Company logos.svg" + ".png")
└── PDF/FTUE_How_it_works.pdf (13pp), FTUE_Member_Research.pdf (1pp) — Orientation case study support docs
```
Environment: Node v26.5.0 / npm 11.17.0 present. **Poppler is installed** (`pdftoppm`/`pdftotext` available) — no need to reinstall.

## Source assets — key facts

- **Copy** (`Copy/Alicia Wood - Leadership Portfolio Copy.pdf`, 33pp): structured content with section dividers and inline component markers: `[Photo X.X_Image_Y.png]` (image placement), `[Chart format starts/ends]` (structured comparison-data tables — Tax&AI revenue/member stats, Orientation's control-vs-enabled lift tables across 4 customer segments — build these as styled semantic `<table>`s, not graphical charts), `[Tab section start/end]` (used in Monileo case study for Goal/Top Problems/Persona/Approach), `[Carousal format starts/ends]` (sic — used 3x: homepage 7-testimonial carousel, Monileo's 3-image impact carousel).
  - Structure: **1.0 Homepage** (Hero w/ bio + Contact/LinkedIn CTA, 3-column Consistent/Clear/Care principles table linking to Leadership page, 3-card "Select Work" preview, 7-testimonial carousel, footer w/ "Let's chat" CTA) → **2.0 About** (grateful-heart intro, 4 mini-essays, Paper Worthy Company stationery-business callout) → **3.0 Work** (divider) → **3.1 Tax & AI** (Impact charts, Challenge, Opportunity, Approach, Real Opportunity pivot to AI, AI Augmented Approach, Result) → **3.2 Monileo** (tabbed Goal/Problems/Persona/Approach, Impact carousel + metrics table, Challenge, Approach, Result, 2 testimonials) → **3.3 Orientation** (Challenge re: Refund Advance/RAD, Opportunity, Hypothesis, 5-step Approach referencing the 2 FTUE PDFs, Result w/ 3 lift-metric tables) → **4.0 Leadership** (Consistent/Clear/Care pillars each with "How I do it" bullets, plus closing "My stance on AI" essay).
  - **No dedicated Contact-page copy exists in the PDF** — only inline "Contact | LinkedIn" links on the homepage. Contact is being built as its own route regardless (per Alicia's decision) — confirm during transcription what content that page actually needs, or reuse the homepage's Contact/LinkedIn content on its own page.
- **Images** (`Images/`, 16 PNGs): naming `<section#>_Image_<n>.png` maps 1:1 to copy sections (`1.0_*` Homepage, `2.0_*` About, `3.1/3.2/3.3_*` the three case studies). Every image the copy references exists; no orphans.
- **Logos** (`logos/`): a single combined lockup — `Company logos.svg` (preferred, crisper) and `Company logos.png` (fallback) — use as one image in the footer/"worked at" logo strip, no per-company files/mapping needed.
- **PDFs** (`PDF/`): `FTUE_How_it_works.pdf` (13pp) and `FTUE_Member_Research.pdf` (1pp, 5.6MB poster), both Figma exports feeding the Orientation case study. Alicia wants **key pages extracted as images** (not linked PDFs) embedded directly in that case study.

## Stack decisions (already made — don't relitigate)

| Concern | Decision |
|---|---|
| Framework | Next.js (latest stable), **App Router**, TypeScript |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` block in `globals.css`) — this file *is* the design-tokens artifact |
| Components | **shadcn/ui** (button, card, tabs, carousel, badge) as owned source in `src/components/ui/`, reskinned with extracted tokens |
| Fonts | `next/font` self-hosting the Figma-specified family |
| Content | Typed TS data files in `/content`, hand-transcribed from the copy PDF into a `Block` union (`prose | image | chart | tabs | carousel`) modeling the bracket markers |
| Charts/tables | Structured `<table>` components, not a charting library (see above) |
| Hosting | Deliberately deferred — build/verify with `next dev`/`next build` only |

## Build order (steps 1–2 done; resume at step 3)

1. ~~Install poppler~~ ✅ done
2. ~~Register Figma Dev Mode MCP Server~~ ✅ done (now needs re-registering in Cursor's own MCP config, per instructions above)
3. **Extract design tokens** via Figma MCP from the homepage desktop + mobile frames: colors, font family/sizes/weights/line-heights, spacing scale, radii, shadows, breakpoints, button/card/nav component specs. **Also capture the responsive *pattern* per section** (e.g. 3-column → stacked, nav → hamburger, carousel item counts, image/text reflow order) — not just token values at each breakpoint. Write into `design/style-guide.md` as reusable rules, since About/Leadership/Contact/case-study pages have no Figma frames of their own and must inherit this responsive behavior rather than the homepage's specific layout.
4. **Scaffold Next.js.** Project root has non-empty asset folders, so `create-next-app` will refuse to scaffold in place — scaffold into a sibling temp dir (`npx create-next-app@latest web-scaffold-tmp --ts --tailwind --app --src-dir --import-alias "@/*" --eslint`), merge its output into the project root, remove the temp dir. Confirm Tailwind v4 landed (`@theme` in `globals.css`). Initialize git if not already done.
5. **Wire tokens into `globals.css`'s `@theme` block** — every component from here on uses these tokens exclusively, never hardcoded hex/px values.
6. **Migrate assets**: `Images/*` → `public/images/{homepage,about,case-studies/<slug>}/`; `logos/Company logos.svg` → `public/images/logos/company-logos.svg`.
7. **Shared layout shell**: `Nav` (all 6 routes + Contact, mobile hamburger) and `Footer` ("Let's chat" CTA, logo strip, LinkedIn) in `src/components/layout/`; wire fonts in `src/app/layout.tsx`.
8. **Base components**: `npx shadcn@latest init` + add button/card/tabs/carousel/badge, reskin with tokens, then build `TestimonialCarousel`, `WorkPreviewGrid`, `PrinciplesTable`.
9. **Homepage first** (`src/app/page.tsx`) — the styling source of truth; iterate until desktop + mobile match the Figma frames before other pages.
   - **⏸ CHECKPOINT — stop here.** Alicia wants to review the homepage (desktop + mobile) and approve it before any other page is built. Do not proceed to step 10 until she's confirmed it looks right — this is the styling baseline every other page inherits.
10. **Content transcription**: `pdftotext -layout` the copy PDF as a disposable typing aid, then hand-transcribe into `content/types.ts` (the `Block` union) + `content/{homepage,about,leadership,contact,case-studies/*}.ts`. Resolve the Contact-page content question here.
11. **Case-study shared components**: `CaseStudyLayout`, `CaseStudySection`, `CaseStudyTabs` (Monileo), `ImageCarousel` (Monileo), `ImpactMetricTable` (Tax & AI, Orientation).
12. **Orientation PDF extraction**: `pdftoppm -png -r 150` both FTUE PDFs into `public/images/case-studies/orientation/ftue/`, curate to only the pages the case study's 5-step Approach references, downsize the oversized Member Research poster with `sips -Z 2000`, rename descriptively.
13. **Build the 3 case study pages** (`src/app/work/{tax-ai,monileo,orientation}/page.tsx`) as thin wrappers around `CaseStudyLayout` + content file.
14. **About, Leadership, Contact pages** — mostly prose + existing components; shared `PillarBlock` for Consistent/Clear/Care, used compactly on homepage and fully on Leadership.
15. **Documentation & skills** — Alicia doesn't expect frequent site changes beyond new case studies, so prioritize the case-study skill:
    - `CLAUDE.md` (root, works for Cursor too as general repo context): stack summary, folder map, "always check `design/style-guide.md` before styling," pointer to case-study pattern.
    - `design/style-guide.md`: the step-3 token artifact, kept living.
    - `.claude/skills/case-study/SKILL.md` (or equivalent Cursor rules/doc): documents the case-study pattern (Hero → Challenge → Opportunity → Approach → Result, optional Tabs/Carousel/ImpactMetricTable) and exact steps to add a new case study.
16. **Verification**: `npm run dev`, walk all 7 routes (`/`, `/about`, `/leadership`, `/contact`, `/work/tax-ai`, `/work/monileo`, `/work/orientation`) against the Figma frames at a full width sweep — mobile (~375px), tablet (~768px), and desktop (~1440px), plus one in-between/laggy width per page to catch reflow breaks the three snap points miss. Confirm nav/footer/token consistency and no horizontal scroll/overlap at any width. `npm run build` and `npm run lint` must pass clean.

## Critical files to create

- `design/style-guide.md` — Figma-extracted design tokens (source of truth for styling)
- `src/app/globals.css` — Tailwind v4 `@theme` token block
- `content/types.ts` — shared `Block` union modeling the copy doc's component markers
- `src/components/case-study/CaseStudyLayout.tsx` — shared case-study page shell
- `.claude/skills/case-study/SKILL.md` — reusable pattern for adding case studies
- `CLAUDE.md` — repo overview and conventions
