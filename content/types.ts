export type ProseBlock = {
  type: "prose";
  title?: string;
  body: string | string[];
  bullets?: string[];
};

export type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  /** Natural pixel dimensions — drive section carousel height to the tallest image */
  width?: number;
  height?: number;
};

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ChartColumn = { key: string; label: string };
export type ChartRow = { label: string; values: Record<string, string> };

export type ChartBlock = {
  type: "chart";
  title: string;
  subtitle?: string;
  columns: ChartColumn[];
  rows: ChartRow[];
  note?: string;
};

/** Figma Impact cards — large lime value + muted description with cream emphasis */
export type StatDescriptionPart = { text: string; emphasize?: boolean };

export type StatsBlock = {
  type: "stats";
  cards: {
    label: string;
    value: string;
    description?: string | StatDescriptionPart[];
  }[];
};

export type TabsBlock = {
  type: "tabs";
  items: {
    id: string;
    label: string;
    body?: string;
    bullets?: string[];
    groups?: { title: string; body?: string; bullets?: string[] }[];
  }[];
};

export type CarouselBlock = {
  type: "carousel";
  images: MediaAsset[];
};

export type ListBlock = {
  type: "list";
  title?: string;
  items: string[];
};

export type ApproachStepBlock = {
  type: "approach-step";
  title: string;
  body: string | string[];
  bullets?: string[];
  tags?: string[];
  images?: MediaAsset[];
};

export type QuoteBlock = {
  type: "quote";
  quote: string;
  attribution: string;
};

export type Block =
  | ProseBlock
  | ImageBlock
  | ChartBlock
  | StatsBlock
  | TabsBlock
  | CarouselBlock
  | ListBlock
  | ApproachStepBlock
  | QuoteBlock;

export type CaseStudySection = {
  id: string;
  title: string;
  /** Full-bleed centered band (Figma Opportunity / Real Opportunity) */
  variant?: "default" | "callout" | "approach-grid";
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  year: string;
  company: string;
  summary: string;
  tags: string[];
  heroImage?: string;
  /** CSS object-position for the hero image crop, e.g. "center top" */
  heroImagePosition?: string;
  sections: CaseStudySection[];
};
