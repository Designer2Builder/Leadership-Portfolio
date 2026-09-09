import type { WorkItem } from "@/components/work/WorkCard";

export const work: { title: string; intro: string; items: WorkItem[] } = {
  title: "Work",
  intro: "Case studies from my past designing across fintech.",
  items: [
    {
      slug: "tax-ai",
      title: "AI Augmented Tax",
      mobileTitle: "AI Augmented Tax",
      summary:
        "Led a design team of 5 through a winning tax season and turned a 25-hour planning bottleneck into a reusable AI assistant.",
      href: "/work/tax-ai",
      image: "/images/homepage/1.0_Image_1.png",
      role: "Senior Manager, Product Design",
      year: "2026",
      tags: "#Team Leadership #AI Adjacent Design #Revenue Impact",
      locked: true,
    },
    {
      slug: "monileo",
      title: "Redesigning CK money",
      mobileTitle: "Redesigning CK money",
      summary:
        "Co-led the Credit Karma Money redesign, driving double-digit lifts in key actions.",
      href: "/work/monileo",
      image: "/images/homepage/1.0_Image_2.png",
      role: "Manager, Product Design",
      year: "2023",
      tags: "#Product Redesign #Sprint Planning #Team Leadership",
    },
    {
      slug: "orientation",
      title: "Reducing account draining",
      mobileTitle: "Reducing account draining",
      summary:
        "Reduced account draining and lifted key activation actions for CK Money members.",
      href: "/work/orientation",
      image: "/images/homepage/1.0_Image_3.png",
      role: "Staff Product Design",
      mobileRole: "Staff Product Designer",
      year: "2022",
      tags: "#Onboarding #Behavioral Design #Cross-functional",
    },
    {
      slug: "paper-digital",
      title: "Paper to Digital",
      mobileTitle: "Paper to Digital",
      summary:
        "Converted a manual paper-based trust application process into a digital form to reduce chances of errors.",
      href: "/work/paper-digital",
      image: "/images/case-studies/paper-digital/figma-hero.png",
      role: "Lead UX Designer",
      year: "2021",
      tags: "#Enterprise UX #Process Design #Design Thinking",
    },
    {
      slug: "financial-plan-summary",
      title: "Financial Plan Redesign",
      mobileTitle: "Financial Plan Redesign",
      summary:
        "Redesigned the financial plan summary to help wealth managers translate a member's financial life to them clearly.",
      href: "/work/financial-plan-summary",
      image: "/images/case-studies/financial-plan-summary/capital-one-hero.jpg",
      imagePosition: "center top",
      role: "Lead UX Designer",
      year: "2020",
      tags: "#UX Research #Wealth Management #Design Thinking",
    },
  ],
};
