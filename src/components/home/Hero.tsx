import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/content/homepage";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { headline, bio } = homepage.hero;

  return (
    <section className="mx-auto w-full max-w-content px-gutter pt-10 lg:px-0 lg:pt-16">
      <h1 className="text-hero leading-hero text-cream">{headline}</h1>

      <p className="mt-8 max-w-content text-body text-text-muted lg:mt-10">
        {bio.map((part, i) => (
          <span
            key={i}
            className={part.emphasis ? "text-cream" : undefined}
          >
            {part.text}
          </span>
        ))}
      </p>

      <div className="mt-8 flex items-center gap-button-gap lg:mt-10 lg:gap-button-gap-lg">
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

      <div
        className="mt-10 overflow-hidden opacity-50 lg:mt-14"
        aria-label="Companies worked with"
      >
        <div className="logo-marquee flex w-max">
          {[0, 1].map((copy) => (
            <Image
              key={copy}
              src="/images/logos/company-logos.svg"
              alt={
                copy === 0
                  ? "Companies: Intuit, Credit Karma, Capital One, United Income, JPMorganChase, CIBC"
                  : ""
              }
              aria-hidden={copy === 1}
              width={1000}
              height={44}
              className="h-9 w-auto max-w-none shrink-0 pr-12 lg:h-11 lg:pr-16"
              priority={copy === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
