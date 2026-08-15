import Link from "next/link";
import { contact } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-content flex-1 flex-col items-start px-gutter pb-section pt-10 lg:px-0 lg:pb-section-lg lg:pt-16">
      <FadeIn y={20} threshold={0}>
        <p className="text-meta-lg text-text-muted">{contact.title}</p>
        <h1 className="mt-3 text-hero leading-hero text-cream lg:text-hero-lg lg:leading-hero-lg">
          {contact.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-body text-text-muted">{contact.body}</p>
        <p className="mt-4 text-meta-lg text-cream">{contact.location}</p>

        <div className="mt-10 flex flex-wrap items-center gap-button-gap lg:gap-button-gap-lg">
          <Button asChild variant="primary">
            <a
              href={contact.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.primaryCta.label}
            </a>
          </Button>
          <Button asChild variant="ghost">
            <Link href={contact.secondaryCta.href}>{contact.secondaryCta.label}</Link>
          </Button>
        </div>

        <p className="mt-12 text-meta-lg text-text-muted">
          Prefer the long version?{" "}
          <Link href="/about" className="text-cream underline underline-offset-4">
            Read about me
          </Link>{" "}
          or{" "}
          <Link
            href="/leadership"
            className="text-cream underline underline-offset-4"
          >
            how I lead
          </Link>
          .
        </p>
      </FadeIn>
    </main>
  );
}
