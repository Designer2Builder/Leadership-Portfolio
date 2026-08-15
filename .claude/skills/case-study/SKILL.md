---
name: case-study
description: Use when adding or editing a case study on Alicia's portfolio site (a /work/<slug> route — Tax & AI, Monileo, Orientation, or a new one). Documents the shared case-study layout pattern and the steps to add one consistently.
---

# Adding a case study

## The pattern

Every case study is `CaseStudyPage` / `CaseStudyLayout` from `src/components/case-study/CaseStudyLayout.tsx`, rendering ordered sections via `CaseStudySections` + `BlockRenderer`.

```
Hero (title, hero image, summary)
  ↓
Sections (Context → Impact → Challenge → … → Result)
  ↓
Callout sections = full-bleed Opportunity bands
  ↓
Section media = cream carousel with dots (images pulled out of blocks)
  ↓
Blocks: prose | stats | chart | tabs | list | approach-step | quote
  (image / carousel blocks are collected into the section carousel)
```

| Case study | Impact | Tabs? | Section carousel? | Result | Quotes? |
|---|---|---|---|---|---|
| Tax & AI | 2 stats cards | No | Approach + AI Approach | prose | No |
| Monileo | stats + carousel | Yes | Impact | prose | 2 |
| Orientation | — | No | Hypothesis + Approach | 4 charts | No |

## Steps to add a new case study

1. **Content**: `content/case-studies/<slug>.ts` exporting a `CaseStudy` (`content/types.ts`). Model on an existing file.
2. **Images**: `public/images/case-studies/<slug>/`
3. **Route**: `src/app/work/<slug>/page.tsx` — thin wrapper: `<CaseStudyPage study={...} />`
4. **Homepage card**: add to `content/homepage.ts` work items
5. **Tokens only** — no hardcoded hex/px
6. **Verify** at ~375 / ~768 / ~1440 + `npm run build` / `lint`
