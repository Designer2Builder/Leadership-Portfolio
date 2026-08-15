import { work } from "@/content/work";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkCardDesktop, WorkCardMobile } from "@/components/work/WorkCard";

export default function WorkPage() {
  return (
    <main className="mx-auto flex w-full max-w-content flex-1 flex-col px-gutter pb-section pt-10 lg:px-0 lg:pb-section-lg lg:pt-16">
      <FadeIn y={20} threshold={0}>
        <h1 className="text-hero leading-hero text-cream">{work.title}</h1>
        <p className="mt-4 text-body leading-normal text-text-muted lg:mt-6">
          {work.intro}
        </p>
      </FadeIn>

      <div className="mt-10 hidden flex-col gap-8 lg:mt-12 lg:flex">
        {work.items.map((item, i) => (
          <FadeIn key={item.slug} delay={120 + i * 100} y={40} scale={0.985}>
            <WorkCardDesktop item={item} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:hidden">
        {work.items.map((item, i) => (
          <FadeIn key={item.slug} delay={80 + i * 80} y={32} scale={0.98}>
            <WorkCardMobile item={item} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
