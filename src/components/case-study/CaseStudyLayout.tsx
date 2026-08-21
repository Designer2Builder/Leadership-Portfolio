import Image from "next/image";
import type {
  Block,
  CaseStudy,
  CaseStudySection as CaseStudySectionData,
  ChartBlock,
  MediaAsset,
  StatDescriptionPart,
  StatsBlock,
} from "@/content/types";
import { SectionMediaCarousel } from "@/components/case-study/SectionMediaCarousel";
import { CaseStudyTabs } from "@/components/case-study/CaseStudyTabs";
import { cn } from "@/lib/utils";

type MediaImage = MediaAsset;

function Paragraphs({ body }: { body: string | string[] }) {
  const parts = Array.isArray(body) ? body : [body];
  return (
    <div className="space-y-4">
      {parts.map((p, i) => (
        <p
          key={i}
          className="text-[1rem] leading-normal text-text-muted lg:text-[1.25rem]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-[1.875rem] text-[1rem] leading-normal text-text-muted lg:text-[1.25rem]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function StatDescription({
  description,
}: {
  description: string | StatDescriptionPart[];
}) {
  if (typeof description === "string") {
    return (
      <p className="text-[0.875rem] leading-normal text-text-muted">
        {description}
      </p>
    );
  }

  return (
    <p className="text-[0.875rem] leading-normal text-text-muted">
      {description.map((part, i) => (
        <span key={i} className={part.emphasize ? "text-cream" : undefined}>
          {part.text}
        </span>
      ))}
    </p>
  );
}

export function ImpactStatCards({ block }: { block: StatsBlock }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
      {block.cards.map((card) => (
        <div
          key={card.label}
          className="flex min-w-0 flex-1 flex-col items-start rounded-stat bg-surface-dark px-6 py-9"
        >
          <p className="text-[0.875rem] leading-normal text-cream">{card.label}</p>
          <p className="mt-1 font-medium text-[2rem] leading-[3.75rem] text-lime lg:text-[3rem]">
            {card.value}
          </p>
          {card.description && (
            <div className="mt-2">
              <StatDescription description={card.description} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ImpactMetricTable({ block }: { block: ChartBlock }) {
  const liftKey = block.columns.find((c) => c.key === "lift")?.key;

  return (
    <div className="overflow-x-auto rounded-stat bg-surface-dark px-6 py-9">
      <div className="mb-6">
        <h3 className="text-[0.875rem] leading-normal text-cream">{block.title}</h3>
        {block.subtitle ? (
          <p className="mt-1 text-[0.875rem] text-text-muted">{block.subtitle}</p>
        ) : null}
      </div>
      <table className="w-full min-w-[28rem] border-collapse text-left text-[0.875rem] text-cream">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 font-medium text-text-muted">Metric</th>
            {block.columns.map((col) => (
              <th key={col.key} className="py-3 pr-4 font-medium text-text-muted">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.label} className="border-b border-border/60 last:border-0">
              <th scope="row" className="py-3 pr-4 font-normal text-cream">
                {row.label}
              </th>
              {block.columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "py-3 pr-4",
                    col.key === liftKey ? "font-medium text-lime" : "text-text-muted"
                  )}
                >
                  {row.values[col.key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {block.note ? (
        <p className="mt-4 text-[0.875rem] text-text-muted">{block.note}</p>
      ) : null}
    </div>
  );
}

function collectSectionImages(blocks: Block[]): MediaImage[] {
  const images: MediaImage[] = [];
  for (const block of blocks) {
    if (block.type === "image") {
      images.push({
        src: block.src,
        alt: block.alt,
        width: block.width,
        height: block.height,
      });
    } else if (block.type === "carousel") {
      images.push(...block.images);
    } else if (block.type === "approach-step" && block.images?.length) {
      images.push(...block.images);
    }
  }
  return images;
}

function withoutMediaBlocks(blocks: Block[]): Block[] {
  return blocks
    .filter((b) => b.type !== "image" && b.type !== "carousel")
    .map((block) => {
      if (block.type === "approach-step" && block.images?.length) {
        return {
          type: "approach-step" as const,
          title: block.title,
          body: block.body,
          bullets: block.bullets,
          tags: block.tags,
        };
      }
      return block;
    });
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <div>
          {block.title ? (
            <h3 className="mb-3 text-[1.25rem] font-normal text-cream">
              {block.title}
            </h3>
          ) : null}
          <Paragraphs body={block.body} />
          {block.bullets ? <Bullets items={[...block.bullets]} /> : null}
        </div>
      );
    case "image":
    case "carousel":
      // Media is rendered as a section-level carousel
      return null;
    case "chart":
      return <ImpactMetricTable block={block} />;
    case "stats":
      return <ImpactStatCards block={block} />;
    case "list":
      return (
        <div>
          {block.title ? (
            <h3 className="mb-3 text-[1.25rem] font-normal text-cream">
              {block.title}
            </h3>
          ) : null}
          <Bullets items={[...block.items]} />
        </div>
      );
    case "tabs":
      return <CaseStudyTabs items={block.items} />;
    case "approach-step":
      return (
        <div className="space-y-4">
          <h3 className="text-[1.25rem] font-normal text-cream">{block.title}</h3>
          <Paragraphs body={block.body} />
          {block.bullets ? <Bullets items={[...block.bullets]} /> : null}
          {block.tags?.length ? (
            <p className="text-meta-lg text-lime">
              {block.tags.map((t) => (t.startsWith("#") ? t : `#${t}`)).join(" ")}
            </p>
          ) : null}
        </div>
      );
    case "quote":
      return (
        <blockquote className="rounded-stat bg-surface-dark p-6 lg:p-8">
          <p className="text-[1rem] leading-normal text-cream lg:text-[1.25rem]">
            “{block.quote}”
          </p>
          <footer className="mt-4 text-meta-lg text-text-muted">
            {block.attribution}
          </footer>
        </blockquote>
      );
    default:
      return null;
  }
}

export function CaseStudyLayout({
  title,
  summary,
  heroImage,
  heroImagePosition = "center",
  children,
}: {
  title: string;
  role?: string;
  year?: string;
  company?: string;
  summary: string;
  tags?: string[];
  heroImage?: string;
  heroImagePosition?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col pb-section lg:pb-section-lg">
      <header className="mx-auto w-full max-w-content px-gutter pt-10 lg:px-0 lg:pt-16">
        <h1 className="text-hero leading-hero text-cream">{title}</h1>
        {heroImage ? (
          <div className="relative mt-8 aspect-[994/384] overflow-hidden rounded-card border border-border bg-cream lg:mt-10">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: heroImagePosition }}
              sizes="1000px"
              priority
            />
          </div>
        ) : null}
        <p className="mt-8 text-body leading-normal text-text-muted lg:mt-10">
          {summary}
        </p>
      </header>
      <div className="mt-section flex w-full flex-col gap-section lg:mt-section-lg lg:gap-section-lg">
        {children}
      </div>
    </main>
  );
}

export function CaseStudyCallout({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="w-full bg-surface px-gutter py-16 text-center lg:py-[5.1875rem]">
      <div className="mx-auto flex max-w-[41.5rem] flex-col items-center gap-6">
        <p className="text-[1.25rem] font-medium leading-normal text-cream">
          {title}
        </p>
        <p className="text-[1.5rem] leading-normal text-cream lg:text-[2.25rem]">
          {body}
        </p>
      </div>
    </section>
  );
}

export function CaseStudySection({
  title,
  children,
  media,
  className,
}: {
  title: string;
  children: React.ReactNode;
  media?: MediaImage[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-content scroll-mt-24 px-gutter lg:px-0",
        className
      )}
    >
      <h2 className="text-[1.5rem] leading-tight text-cream lg:text-[2rem] lg:leading-[3.75rem]">
        {title}
      </h2>
      <div className="mt-6 flex flex-col gap-8 lg:mt-4 lg:gap-8">{children}</div>
      {media && media.length > 0 ? (
        <div className="mt-10 lg:mt-12">
          <SectionMediaCarousel images={media} />
        </div>
      ) : null}
    </section>
  );
}

function calloutBody(section: CaseStudySectionData): string {
  const prose = section.blocks.find((b) => b.type === "prose");
  if (!prose || prose.type !== "prose") return "";
  return Array.isArray(prose.body) ? prose.body[0] ?? "" : prose.body;
}

export function CaseStudySections({
  sections,
}: {
  sections: CaseStudySectionData[];
}) {
  return (
    <>
      {sections.map((section) => {
        if (section.variant === "callout") {
          return (
            <CaseStudyCallout
              key={section.id}
              title={section.title}
              body={calloutBody(section)}
            />
          );
        }

        const media = collectSectionImages(section.blocks);
        const blocks = withoutMediaBlocks(section.blocks);

        return (
          <CaseStudySection
            key={section.id}
            title={section.title}
            media={media}
          >
            {blocks.map((block, i) => (
              <BlockRenderer key={`${section.id}-${i}`} block={block} />
            ))}
          </CaseStudySection>
        );
      })}
    </>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <CaseStudyLayout
      title={study.title}
      role={study.role}
      year={study.year}
      company={study.company}
      summary={study.summary}
      tags={study.tags}
      heroImage={study.heroImage}
      heroImagePosition={study.heroImagePosition}
    >
      <CaseStudySections sections={study.sections} />
    </CaseStudyLayout>
  );
}
