"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homepage } from "@/content/homepage";
import { SurfacePanel } from "@/components/home/SurfacePanel";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

function LearnMoreLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex w-full items-center justify-between gap-2 text-[0.875rem] text-cream hover:opacity-80",
        className
      )}
    >
      <span>{label}</span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        aria-hidden
      />
    </Link>
  );
}

export function PrinciplesTable() {
  const { intro, items, cta } = homepage.principles;

  return (
    <section className="mx-auto w-full max-w-content px-gutter pt-section lg:px-0 lg:pt-section-lg">
      {/* Desktop: intro + 3 tall cards */}
      <div className="hidden lg:block">
        <FadeIn y={20}>
          <h2 className="text-center text-section leading-hero text-cream">
            {intro}
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-3 gap-12">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={100 + i * 120} y={36}>
              <SurfacePanel
                tone="dark"
                className="flex min-h-[551px] flex-col justify-end gap-3 rounded-card border border-border px-8 pb-8 pt-[275px]"
              >
                <h3 className="text-body-lg text-cream">{item.title}</h3>
                <p className="text-title text-text-muted">{item.body}</p>
                <LearnMoreLink
                  href={cta.href}
                  label={cta.label}
                  className="mt-3"
                />
              </SurfacePanel>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile: single panel, stacked principles */}
      <FadeIn y={28} className="lg:hidden">
        <SurfacePanel
          tone="dark"
          className="rounded-card border border-border px-6 pb-3 pt-12"
        >
          <h2 className="text-hero leading-hero text-cream">{intro}</h2>
          <div className="mt-9 flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.title}>
                <h3 className="text-meta-lg text-cream">{item.title}</h3>
                <p className="mt-1 text-meta-lg text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <LearnMoreLink href={cta.href} label={cta.label} className="mt-9" />
        </SurfacePanel>
      </FadeIn>
    </section>
  );
}
