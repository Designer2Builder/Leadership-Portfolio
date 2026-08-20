import { leadership } from "@/content/leadership";
import { FadeIn } from "@/components/motion/FadeIn";
import { ToolsStrip } from "@/components/home/ToolsStrip";
import { LeadershipPillar } from "@/components/leadership/LeadershipPillar";

function EmphasizedCopy({
  parts,
}: {
  parts: readonly { text: string; emphasis: boolean }[];
}) {
  return (
    <>
      {parts.map((part, i) => (
        <span
          key={i}
          className={part.emphasis ? "text-cream" : undefined}
        >
          {part.text}
        </span>
      ))}
    </>
  );
}

export default function LeadershipPage() {
  return (
    <main className="mx-auto flex w-full max-w-content flex-1 flex-col px-gutter pb-section pt-10 lg:px-0 lg:pb-section-lg lg:pt-16">
      <FadeIn y={20} threshold={0}>
        <h1 className="text-[2rem] leading-[2.5rem] text-cream lg:text-[3rem] lg:leading-normal">
          {leadership.headline}
        </h1>
        <p className="mt-8 text-[1.25rem] leading-normal text-text-muted lg:mt-6 lg:text-[2rem]">
          <EmphasizedCopy parts={leadership.intro} />
        </p>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-10 lg:mt-16 lg:gap-12">
        {leadership.pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 50} y={24}>
            <LeadershipPillar pillar={pillar} />
          </FadeIn>
        ))}
      </div>

      <FadeIn y={28} className="mt-14 lg:mt-16">
        <section id="ai-stance" className="scroll-mt-24">
          <h2 className="text-[2rem] leading-tight text-cream lg:text-[3rem] lg:leading-normal">
            {leadership.aiStance.title}
          </h2>
          <p className="mt-6 text-[1.25rem] leading-normal text-text-muted lg:mt-8 lg:text-[2rem]">
            <EmphasizedCopy parts={leadership.aiStance.body} />
          </p>
          <p className="mt-8 text-[1.25rem] leading-normal text-text-muted lg:mt-10 lg:text-[2rem]">
            {leadership.aiStance.toolsIntro}
          </p>
          <ToolsStrip className="mt-10 lg:mt-14" />
        </section>
      </FadeIn>
    </main>
  );
}
