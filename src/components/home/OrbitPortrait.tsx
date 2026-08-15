"use client";

import Image from "next/image";
import { useId } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type OrbitPortraitProps = {
  src: string;
  alt: string;
  className?: string;
  /** Outer size classes — defaults match Figma footer (238 mobile / 315 desktop) */
  sizeClassName?: string;
};

/**
 * Circular portrait with SVG textPath orbit that continuously rotates.
 * Face stays fixed; only the ring of copy moves.
 */
export function OrbitPortrait({
  src,
  alt,
  className,
  sizeClassName = "size-[238px] lg:size-[315px]",
}: OrbitPortraitProps) {
  const pathId = `orbit-path-${useId().replace(/:/g, "")}`;
  const text = site.orbitText.trimEnd();

  return (
    <div
      className={cn("relative shrink-0 text-cream", sizeClassName, className)}
      role="img"
      aria-label={alt}
    >
      {/* Orbiting copy — Figma text-path around portrait */}
      <svg
        className="orbit-spin pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          className="uppercase"
          style={{
            fontSize: "4.35px",
            letterSpacing: "0.22em",
            fontFamily:
              "var(--font-google-sans-flex), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Fixed portrait — ~181/315 ≈ 57.5% of outer (inset ~21%) */}
      <div className="absolute inset-[21.3%] overflow-hidden rounded-full border border-cream/50 bg-plum">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 137px, 181px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
