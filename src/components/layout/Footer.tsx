"use client";

import Link from "next/link";
import { homepage } from "@/content/homepage";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { OrbitPortrait } from "@/components/home/OrbitPortrait";

/**
 * Desktop spacing from Figma footer 108:4845 (1512×900):
 * top 134 → portrait 315 → heading 78 → gap 24 → buttons 50 → gap 186 → meta 60 → bottom 51
 *
 * Mobile from 171:5776 (~393×592):
 * top 48 → portrait 238 → heading → buttons → tagline → bottom meta
 */
export function Footer() {
  return (
    <footer className="mt-auto flex flex-col bg-surface-footer lg:min-h-[56.25rem]">
      <FadeIn y={36} threshold={0.1} className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-content flex-1 flex-col items-center px-gutter pt-12 text-center lg:px-0 lg:pt-[8.375rem]">
          <OrbitPortrait
            src={homepage.footer.portrait}
            alt="Portrait of Alicia Wood — over 15 years of experience in fintech based in Charlotte, NC"
          />

          <h2 className="mt-0 text-[2rem] leading-[3.75rem] text-cream lg:text-hero-lg lg:leading-hero-lg">
            {homepage.footer.heading}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-button-gap lg:mt-6 lg:gap-button-gap-lg">
            <Button asChild variant="primary">
              <Link href="/contact">Contact me</Link>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>

          <p className="mt-8 max-w-[258px] text-center text-[1.25rem] leading-normal text-cream lg:hidden">
            {site.tagline}
          </p>

          {/* Spacer matching Figma gap between CTAs and meta (186px desktop) */}
          <div className="mt-12 flex-1 lg:mt-[11.625rem]" aria-hidden />
        </div>
      </FadeIn>

      {/* Bottom meta — Figma: 128px side inset, 60px row, ~51px below */}
      <div className="w-full px-7 pb-12 lg:px-gutter-lg lg:pb-[3.1875rem]">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 text-[0.75rem] leading-none text-cream lg:grid lg:h-[3.75rem] lg:grid-cols-3 lg:text-footer lg:leading-[3.75rem]">
          <p className="hidden lg:block">{site.copyright}</p>
          <p className="hidden text-center lg:block">{site.tagline}</p>
          <p className="lg:text-right">{site.location}</p>
          <p className="text-right lg:hidden">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
