# Design style guide

Extracted from Figma **Leadership Portfolio** homepage frames (2026-08-05):

| Frame | Node | Size |
|---|---|---|
| Homepage – Desktop | `102:4565` | 1512 × 6550 |
| Homepage – Mobile | `171:5775` | 393 × 3460 |

File: [`ESFuVAZfK3WAgGHx1vkhDJ`](https://www.figma.com/design/ESFuVAZfK3WAgGHx1vkhDJ/Leadership-Portfolio)

No Figma Variables were defined on these frames — values below are measured from Dev Mode / MCP design context. Wire these into Tailwind v4 `@theme` in `src/app/globals.css` (build plan step 5). **Never hardcode hex/px in components** — always reference tokens.

About / Leadership / Contact / case-study pages have no Figma frames. Inherit **tokens + responsive patterns** from this guide; do not copy the homepage’s section composition.

---

## Color

| Token | Value | Usage |
|---|---|---|
| `--color-bg` / `--color-plum` | `#5D1E4C` | Page background; ghost-button fill |
| `--color-cream` | `#FCFBF9` | Primary text, borders, primary-button fill |
| `--color-text` | `#FCFBF9` | Headings, nav, strong emphasis |
| `--color-text-muted` | `rgba(255, 255, 255, 0.75)` | Body copy, attributions |
| `--color-text-on-primary` | `#5D1E4C` | Label on cream (primary) buttons |
| `--color-accent` / `--color-lime` | `#8CFF7A` | Carousel active dots; role-meta bullets |
| `--color-accent-muted` / `--color-lime-muted` | `rgba(140, 255, 122, 0.25)` | Inactive carousel dots |
| `--color-border` | `rgba(252, 251, 249, 0.5)` | Cards, striped panels, image frames |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.5)` | Principles / testimonial panel outline |
| `--color-surface` | `rgba(255, 255, 255, 0.1)` | Work-card background |
| `--color-surface-footer` | `rgba(255, 255, 255, 0.05)` | Footer band |
| `--color-stripe` | `rgba(11, 30, 66, 0.07)` | Vertical pinstripe fill (25px bars) |
| `--color-stripe-edge` | `rgba(252, 251, 249, 0.05)` | Pinstripe bar border |

**Emphasis in prose:** muted body with selected spans at full `--color-text` (not bold weight — color contrast only). Used in the hero bio for titles, years, and company names.

---

## Typography

**Family:** Google Sans Flex (variable). Axes observed in Figma: `GRAD 0`, `ROND 0`, `wdth 100`.

| Weight | When |
|---|---|
| Regular (`400`) | Almost everything — headlines, body, buttons, footer |
| Medium (`500`) | Nav wordmark only (“Alicia Wood…”) |

Self-host via `next/font` (or equivalent Google Fonts loader that supports Google Sans Flex). Fallback stack: `ui-sans-serif, system-ui, sans-serif`.

### Type scale

| Role | Desktop | Mobile | Notes |
|---|---|---|---|
| Display / footer CTA | 48px / 60px lh | 32px / 60px lh | “Let’s chat.” |
| Hero headline | 64px / 60px lh | 48px / 40px lh | |
| Section headline (principles intro) | 48px / 60px lh | 24px / normal | Left-aligned desktop; in mobile panel |
| Section title (“Select work”, “Testimonials”) | 48px / 60px lh | 24–44px | “See all →” sits opposite Select work on desktop |
| Work-card title | 36px | 24px | Blurbs removed on homepage cards |
| Body / principle copy / quote | 32px (quote); 24px (principle body) | 16px (principle) | Quote attribution uses muted |
| Button label | 20px desktop / 12px mobile | 12px | |
| Text link (“Learn more…”, “See all”) | 14px (principles) / 20px (See all) | 14px | Arrow icon after label |
| Nav / meta / tags / footer meta | 16–20px | 16px (nav); 10px (card meta) | |
| Work-card description | 16px | 10px | |

Line-height is often `normal` except hero/display (explicit 40–60px). Prefer tokenized `leading-*` that match the table rather than inventing a fluid scale.

---

## Spacing & layout

| Token / rule | Desktop | Mobile |
|---|---|---|
| Frame / artboard | 1512px | 393px |
| Page gutter | ~128px | ~32px |
| Content / nav max | 1000px centered | ~328–334px |
| Nav inset | ~128px sides | ~32px |
| Section vertical rhythm | Large (hero→principles≈200px+ gaps) | Tighter; keep clear section breaks |
| Button gap (CTA pair) | ~24px | ~12–16px |
| Work-card internal pad | Image inset ~27px; copy inset ~35px | Image inset ~8px; copy ~11–13px |
| Pinstripe bar | 25px wide, 35px pitch (25 + 10 gap) | Same bar width |

**Suggested breakpoints for implementation** (Figma only supplies two frames — interpolate tablet):

| Name | Width | Behavior source |
|---|---|---|
| `sm` / mobile | ≤767px | Mobile frame (393) |
| `md` / tablet | 768–1199px | Prefer mobile patterns until content fits; expand gutters |
| `lg` / desktop | ≥1200px | Desktop frame (1512); verify at ~1440 |

---

## Radii

| Token | Value | Usage |
|---|---|---|
| `--radius-pill` | `50px` (effectively full pill) | All buttons |
| `--radius-panel` | `25px` | Legacy; prefer card radius for new panels |
| `--radius-card` | `10px` | Work cards, principle cards, testimonials |

---

## Shadows

None observed. Depth comes from border + translucent surfaces on the plum ground. Do not invent drop shadows.

---

## Components

### Buttons

Two variants, same geometry:

| Variant | Fill | Border | Label |
|---|---|---|---|
| **Primary** (“Contact me”) | `--color-cream` | `--color-cream` | `--color-text-on-primary` |
| **Ghost** (“LinkedIn”, “Learn more”) | `--color-plum` | `--color-cream` | `--color-cream` |

| | Desktop | Mobile |
|---|---|---|
| Height | 68px | 40px |
| Radius | pill (`50px`) | pill |
| Label size | 24px | 16px |
| Typical widths | Contact ~181 · LinkedIn ~159 · Learn more ~200 | Contact ~134 · LinkedIn ~112 · Learn more ~119 |

Always pair Contact + LinkedIn as a horizontal CTA group (hero + footer).

### Navigation

| | Desktop | Mobile |
|---|---|---|
| Wordmark | “Alicia Wood — Product Design Leader” (Medium + Regular) | “Alicia Wood” only (Medium) |
| Links | About · Work · Leadership · Resume · Contact — 16px Regular, right-aligned | Hidden behind hamburger |
| Menu control | — | 32×32 icon, right |

Routes in the build plan also include `/contact` as its own page; keep Contact in the nav set.

### Principles

- Intro headline sits above the cards (desktop) or inside the mobile panel.
- **Desktop:** 3 tall cards (`~301×551`, `--radius-card`, `--color-surface-dark`) with large top padding; title + body + “Learn more about how I lead →” in each card.
- **Mobile:** Single dark panel; stacked Consistent / Clear / Care; one CTA with arrow at bottom.

### Select work

- Header row: “Select work” + “See all →” (desktop only).
- **Desktop:** Compact cards — image + title left / role·year + tags right (no blurb).
- **Mobile:** Stacked compact cards with short titles.

### Testimonials

- **Desktop:** Full-bleed panel (edge-to-edge), `--radius-card`, dark surface, no border; centered title + quote (~766px) + muted attribution; tall ~899px panel.
- **Mobile:** Title above inset bordered panel.
- **7** dots; active = `--color-accent`, inactive = `--color-accent-muted`.

### Work preview cards

- Surface `--color-surface`, border `--color-border`, `--radius-card`.
- Image on cream underlay, same radius + border.
- Meta row: green accent dots (`#8CFF7A`) flanking role · year; tags as `#Hashtag` string.
- **Desktop:** Compact stacked cards (~1000×575); no homepage blurb.
- **Mobile:** Stacked compact cards (~327×256).

### Footer

- Band: `--color-surface-footer` (full-bleed).
- Composite portrait asset (~315px desktop / ~238px mobile) with baked-in orbit text; `mix-blend-screen` so black knockouts against plum.
- “Let’s chat.” at **48px** desktop / **32px** mobile — not display-lg.
- Primary + ghost CTAs under the heading.
- **Desktop meta:** 14px three columns — © · tagline · location (page gutters).
- **Mobile:** tagline under CTAs; bottom row location | ©.

### Logo strip

Company lockup (`logos/Company logos.svg`), white/monochrome, **opacity 50%**. Desktop fits content width; mobile may overflow horizontally — allow scroll or scale-to-width, do not clip awkwardly.

---

## Responsive patterns (reuse site-wide)

These are the rules other pages inherit — not homepage-specific layouts.

1. **Nav → hamburger** below desktop breakpoint; wordmark shortens to name-only.
2. **Multi-column → carousel or stack:** 3-up principles become a 1-up carousel; stacked work cards become a horizontal slider when width can’t hold a comfortable card.
3. **Type steps down** per the scale table; don’t keep 64px headlines on narrow viewports.
4. **Buttons shrink** 68→40 height and 24→16 label; keep pill radius.
5. **Gutters** 128→32; content column stays centered.
6. **CTA pairs stay horizontal** (wrap only if a single button would overflow).
7. **Footer meta** collapses from 3 columns → stacked / 2-column.
8. **No horizontal page scroll** at 375 / 768 / 1440 (and one in-between). Overflow is allowed only inside intentional sliders (work cards, logo strip).

---

## Suggested `@theme` mapping (step 5)

Sketch for `globals.css` — refine names to match Tailwind v4 conventions when scaffolding:

```css
@theme {
  --color-plum: #5d1e4c;
  --color-cream: #fcfbf9;
  --color-accent: #8cff7a;
  --color-accent-muted: rgb(140 255 122 / 0.25);
  --color-text-muted: rgb(255 255 255 / 0.75);
  --color-border: rgb(252 251 249 / 0.5);
  --color-surface: rgb(255 255 255 / 0.1);
  --color-surface-footer: rgb(255 255 255 / 0.05);
  --color-stripe: rgb(11 30 66 / 0.07);

  --font-sans: "Google Sans Flex", ui-sans-serif, system-ui, sans-serif;

  --radius-pill: 50px;
  --radius-panel: 25px;
  --radius-card: 10px;

  --spacing-gutter-mobile: 32px;
  --spacing-gutter-desktop: 128px;
  --container-content: 1000px;
  --container-nav: 1000px;

  --text-hero-desktop: 64px;
  --text-hero-mobile: 48px;
  --text-body-desktop: 32px;
  --text-body-mobile: 20px;
  --text-button-desktop: 24px;
  --text-button-mobile: 16px;
}
```

---

## Source references

- Desktop hero `124:5165` · nav `124:5166` · principles `103:4594` · work card `121:4992` · testimonials `108:4766` · footer `108:4845`
- Mobile hero `138:5331` · nav `138:5339` · principles `138:5330` · work card `121:5019`
