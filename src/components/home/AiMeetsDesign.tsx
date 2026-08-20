import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homepage } from "@/content/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { ToolsStrip } from "@/components/home/ToolsStrip";

export function AiMeetsDesign() {
  const { title, body, cta } = homepage.aiMeetsDesign;

  return (
    <section className="mx-auto w-full max-w-content px-gutter pt-section lg:px-0 lg:pt-section-lg">
      <FadeIn y={24}>
        <h2 className="text-section leading-hero text-cream">{title}</h2>
        <p className="mt-6 text-body leading-normal text-text-muted lg:mt-8">
          {body}
        </p>
        <Link
          href={cta.href}
          className="group mt-6 inline-flex max-w-full flex-wrap items-center gap-1.5 text-footer text-cream hover:opacity-80 lg:mt-8 lg:gap-2 lg:text-button-lg"
        >
          <span>{cta.label}</span>
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 lg:size-5"
            aria-hidden
          />
        </Link>

        <ToolsStrip className="mt-10 lg:mt-14" />
      </FadeIn>
    </section>
  );
}
