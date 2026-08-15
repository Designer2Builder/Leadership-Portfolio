"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type Pillar = {
  title: string;
  summary: string;
  belief: string;
  how: readonly string[];
};

export function LeadershipPillar({ pillar }: { pillar: Pillar }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="border-b border-cream/30 pb-8 lg:pb-10">
      <h2 className="text-[1.5rem] leading-tight text-cream lg:text-[2rem] lg:leading-[3.75rem]">
        {pillar.title}
      </h2>

      <div className="mt-4 space-y-3 text-[1rem] leading-normal lg:mt-3 lg:text-[1.25rem]">
        <p className="font-bold text-cream">{pillar.summary}</p>
        <p className="text-text-muted">{pillar.belief}</p>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center gap-2 text-left text-[1rem] font-medium text-cream transition-opacity hover:opacity-80 lg:mt-5 lg:text-[1.5rem] lg:leading-[3.75rem]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden className="tabular-nums">
          {open ? "−" : "+"}
        </span>
        <span>How I do it</span>
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[1rem] leading-normal text-text-muted lg:text-[1.25rem]">
            {pillar.how.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
