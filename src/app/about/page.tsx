import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/about";
import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-1 flex-col pb-section pt-10 lg:pb-section-lg lg:pt-16">
      {/* Hero — centered headline + wide portrait */}
      <FadeIn y={20} threshold={0} className="mx-auto w-full max-w-wide px-gutter lg:px-0">
        <h1 className="text-center text-hero leading-hero text-cream">
          {about.intro}
        </h1>
        <div className="relative mt-10 aspect-[1182/566] w-full overflow-hidden rounded-stat lg:mt-12">
          <Image
            src={about.portrait}
            alt="Portrait of Alicia Wood"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>
      </FadeIn>

      {/* Values — frosted panel, 3×2 card grid */}
      <FadeIn y={28} className="mx-auto mt-section w-full max-w-wide px-gutter lg:mt-section-lg lg:px-0">
        <div className="rounded-stat bg-surface-raised p-8 lg:p-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {about.essays.map((essay) => (
              <article
                key={essay.title}
                className="rounded-card border border-border p-6"
              >
                <h2 className="text-[1.25rem] leading-normal text-cream lg:text-[1.5rem]">
                  {essay.title}
                </h2>
                <p className="mt-2 text-[0.875rem] leading-normal text-text-muted lg:mt-3 lg:text-[1rem]">
                  {essay.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Paper Worthy */}
      <FadeIn y={32} className="mx-auto mt-section w-full max-w-wide px-gutter lg:mt-section-lg lg:px-0">
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-hero leading-hero text-cream">
            {about.paperWorthy.title}
          </h2>
          <p className="mt-6 text-center text-body leading-normal text-text-muted lg:mt-8">
            {about.paperWorthy.body}
          </p>
          <div className="mt-6 flex justify-end lg:mt-8">
            <a
              href={about.paperWorthy.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-button-lg text-cream hover:opacity-80"
            >
              {about.paperWorthy.cta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:group-hover:translate-x-0"
                aria-hidden
              />
            </a>
          </div>
        </div>
        <div className="relative mt-10 aspect-[1194/953] w-full overflow-hidden rounded-stat lg:mt-12">
          <Image
            src={about.paperWorthy.image}
            alt="Paper Worthy Company stationery"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </FadeIn>
    </main>
  );
}
