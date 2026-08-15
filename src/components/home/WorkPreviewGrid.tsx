"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homepage } from "@/content/homepage";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkCardDesktop, WorkCardMobile } from "@/components/work/WorkCard";

export function WorkPreviewGrid() {
  const { title, seeAll, items } = homepage.work;

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-content scroll-mt-24 px-gutter pt-section lg:px-0 lg:pt-section-lg"
    >
      <FadeIn y={20}>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-section leading-hero text-cream">{title}</h2>
          <Link
            href={seeAll.href}
            className="group hidden items-center gap-2 text-button-lg text-cream hover:opacity-80 lg:inline-flex"
          >
            {seeAll.label}
            <ArrowRight
              className="size-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
        </div>
      </FadeIn>

      <div className="mt-8 hidden flex-col gap-8 lg:mt-10 lg:flex">
        {items.map((item, i) => (
          <FadeIn key={item.slug} delay={120 + i * 140} y={40} scale={0.985}>
            <WorkCardDesktop item={item} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:hidden">
        {items.map((item, i) => (
          <FadeIn key={item.slug} delay={80 + i * 100} y={32} scale={0.98}>
            <WorkCardMobile item={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
