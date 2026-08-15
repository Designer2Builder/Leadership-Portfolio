export const site = {
  name: "Alicia Wood",
  title: "Product Design Leader",
  location: "Charlotte, NC | Available Remote",
  tagline: "Problem solving through design since 2011.",
  copyright: "© 2026 Alicia Wood",
  linkedInUrl: "https://www.linkedin.com/in/aliciaedmonds",
  /** Resume destination — LinkedIn until a PDF is added */
  resumeUrl: "https://www.linkedin.com/in/aliciaedmonds",
  orbitText:
    "OVER 15 YEARS OF EXPERIENCE IN FINTECH BASED IN CHARLOTTE, NC. ",
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Leadership", href: "/leadership" },
  { label: "Resume", href: site.resumeUrl, external: true },
  { label: "Contact", href: "/contact" },
] as const;
