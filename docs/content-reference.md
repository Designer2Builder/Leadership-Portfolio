# Content Reference — Copy PDF Structure

Source: `Copy/Alicia Wood - Leadership Portfolio Copy.pdf` (33pp). This doc maps its structure and bracket-marker conventions so transcription into `/content/*.ts` (plan step 10) doesn't require re-reading the whole PDF each time. Regenerate the raw text with `pdftotext -layout "Copy/Alicia Wood - Leadership Portfolio Copy.pdf" -` if you need exact wording — this doc is a map, not a copy-paste source.

## Bracket-marker legend

The copy PDF embeds component placement as inline bracket markers. Treat each as a `Block` variant (see `content/types.ts` once it exists):

| Marker | Meaning | Build as |
|---|---|---|
| `[Photo X.X_Image_Y.png]` | Image placement | `image` block, path `public/images/...` per the file's section prefix |
| `[Chart format starts] … [Chart format ends]` | Structured comparison data (revenue/member stats, control-vs-enabled lift tables) | `chart` block → semantic `<table>`, **not** a charting library |
| `[Tab section start] … [Tab section end]` | Tabbed content (Monileo only: Goal / Top Problems / Persona / Approach) | `tabs` block |
| `[Carousal format starts] … [Carousal format ends]` (sic, PDF typo) | Rotating item set — homepage testimonials (7 items), Monileo impact images (3 items) | `carousel` block |

## Section map

**1.0 Homepage** (`/`)
1. Hero — bio + "Contact \| LinkedIn" CTA
2. Principles table — Consistent / Clear / Care, 3 columns, links to `/leadership`
3. Select Work — 3 cards (`[Photo 1.0_Image_1-3.png]`): Tax & AI, Monileo, Orientation, each with role/year, blurb, hashtags
4. Team Appreciation — 7-testimonial carousel
5. Footer — `[Photo 1.0_Image_4.png]`, "Let's chat" CTA, Contact \| LinkedIn, tagline, location, copyright

**2.0 About** (`/about`)
1. Intro line + `[Photo 2.0_Image_1.png]`
2. 4 mini-essays: Life Learner/Problem Solver, Collaboration is my default, AI Adjacent not Replacement, My leadership style (links to `/leadership`) — plus 2 more short ones: Lover of Design, Family Oriented
3. Paper Worthy Company callout (stationery business) + `[Photo 2.0_Image_2.png]`

**3.0 Work** (divider only, no standalone content)

**3.1 Tax & AI** (`/work/tax-ai`)
Intuit/Credit Karma context → **Impact** (2 chart blocks: Revenue, Members — YTD figures, `[Photo 3.1_Image_1-2.png]`) → **Challenge** (seasonal nuance, prior one-size-fits-all approach) → **Opportunity** (use new segments for hyperpersonalization) → **Approach** (understand segments; continues past what was previewed — read PDF for full approach + AI pivot section) → Result. `[Photo 3.1_Image_3-4.png]` land later in Approach/Result.

**3.2 Monileo** (`/work/monileo`)
Intuit/Credit Karma context, role/responsibilities as list → **Tabs block**: Goal / Top Problems (3 sub-groups: Access & continuity, Usability & discoverability, Know when something needs action) / Persona ("Jordan", demographic bullet list) / Approach → **Impact** — 3-image carousel (`[Photo 3.2_Image_1-3.png]`) + metrics table (Control vs Enabled member counts) → Challenge → Approach → Result → 2 testimonials.

**3.3 Orientation** (`/work/orientation`)
Context re: Refund Advance (RAD) / account draining problem → **Opportunity** (increase RAD uptake, CK Money account opens, key activation actions) → **Hypothesis** (encourage key actions early → less draining, more activation) → `[Photo 3.3_Image_1-3.png]` → **Approach** — 5 steps, references both FTUE PDFs (`PDF/FTUE_How_it_works.pdf`, `PDF/FTUE_Member_Research.pdf`) → **Result** — 4 chart blocks (lift-metric tables across customer segments, e.g. Control 512,924 / Enabled 514,086; includes a note that not all actions lifted positively, opening a follow-up opportunity).

**4.0 Leadership** (`/leadership`)
Intro (same "nurturing player-coach" framing as homepage hero) → 3 pillar sections, each with a one-line description + "How I do it:" bullet list:
- **Consistent** — 7 bullets (protected 1:1s, critiques/rituals, follow-through, continuous feedback, repeatable principles, celebrate wins, steady during change)
- **Clear** — 8 bullets (share the "why", set expectations, direct feedback, visible priorities, simplify complexity, healthy discussion + timely decisions, document decisions, connect to outcomes)
- **Care** — 8 bullets (invest in growth, psychological safety, coach not answer, recognize strengths, sustainable workloads, remove obstacles, celebrate progress, lead with empathy)
- Closing essay: **"My stance on AI"**

**Contact** (`/contact`) — no dedicated copy in the PDF. Only inline "Contact \| LinkedIn" links exist on the homepage (hero + footer). Being built as its own route regardless (Alicia's decision, confirmed 2026-08-05). **Open question to resolve during transcription**: reuse homepage's Contact/LinkedIn content verbatim, or write dedicated copy? Ask Alicia if not obvious from Figma's Contact frame (if one exists).

## Asset inventory

- **Images** (`Images/`, 16 PNGs) — naming `<section#>_Image_<n>.png` maps 1:1 to the sections above. All referenced images exist; no orphans, no gaps.
- **Logos** (`logos/`) — one combined lockup: `Company logos.svg` (preferred) + `Company logos.png` (fallback). Single image in footer/"worked at" strip — no per-company files.
- **FTUE PDFs** (`PDF/`) — `FTUE_How_it_works.pdf` (13pp) and `FTUE_Member_Research.pdf` (1pp, 5.6MB poster). Feed the Orientation case study's 5-step Approach. Plan step 12: `pdftoppm -png -r 150` extract only the referenced pages into `public/images/case-studies/orientation/ftue/`, downsize the poster with `sips -Z 2000`, rename descriptively — embed as images, not linked PDFs.

## Companies referenced (for logo/context, not per-logo assets)

Intuit / Credit Karma / TurboTax, Capital One, United Income, JP Morgan Chase, CIBC.
