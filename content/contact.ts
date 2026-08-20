import { site } from "@/content/site";

/** Contact has no dedicated PDF section — reuses homepage CTA framing. */
export const contact = {
  title: "Contact",
  headline: "Let’s chat.",
  body: "I’m based in Charlotte, NC and available for remote opportunities. Reach out or connect with me on LinkedIn.",
  location: site.location,
  primaryCta: { label: "LinkedIn", href: site.linkedInUrl },
} as const;
