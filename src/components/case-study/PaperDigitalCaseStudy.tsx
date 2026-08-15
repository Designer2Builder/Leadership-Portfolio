import type { PaperDigitalCaseStudy as PaperDigitalCaseStudyData } from "@/content/case-studies/paper-digital";
import {
  BlockRenderer,
  CaseStudyCallout,
  CaseStudyLayout,
  CaseStudySection,
} from "@/components/case-study/CaseStudyLayout";
import { SectionMediaCarousel } from "@/components/case-study/SectionMediaCarousel";

export function PaperDigitalCaseStudy({
  study,
}: {
  study: PaperDigitalCaseStudyData;
}) {
  return (
    <CaseStudyLayout
      title={study.title}
      summary={study.summary}
      heroImage={study.heroImage.src}
    >
      <CaseStudySection title={study.context.heading}>
        <BlockRenderer block={{ type: "prose", body: study.context.body }} />
      </CaseStudySection>

      <CaseStudySection title={study.problem.heading}>
        <BlockRenderer block={{ type: "prose", body: study.problem.body }} />
      </CaseStudySection>

      <CaseStudyCallout
        title={study.opportunity.title}
        body={study.opportunity.body}
      />

      <section className="mx-auto w-full max-w-content px-gutter lg:px-0">
        <div className="mx-auto max-w-[41.5rem] text-center">
          <p className="text-[1.25rem] font-medium leading-normal text-cream">
            {study.approach.kicker}
          </p>
          <p className="mt-6 text-[1.5rem] leading-normal text-cream lg:text-hero-lg lg:leading-hero-lg">
            {study.approach.statement}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {study.approach.items.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-border px-6 py-8"
            >
              <p className="text-[1.25rem] text-cream">{item.title}</p>
              <p className="mt-2 text-[1rem] leading-normal text-text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection title={study.discoveries.heading}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {study.discoveries.cards.map((card) => (
            <div
              key={card}
              className="flex min-h-[20rem] flex-col justify-end rounded-card border border-border bg-surface-dark p-8"
            >
              <p className="text-[1.5rem] leading-normal text-text-muted">
                {card}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title={study.solutions.heading}>
        {study.solutions.items.map((item) => (
          <BlockRenderer
            key={item.title}
            block={{ type: "prose", title: item.title, body: item.body }}
          />
        ))}
        <SectionMediaCarousel
          images={[
            {
              src: study.solutions.image.src,
              alt: study.solutions.image.alt,
              width: 1080,
              height: 1103,
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title={study.closing.heading}>
        <BlockRenderer block={{ type: "prose", body: study.closing.body }} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
