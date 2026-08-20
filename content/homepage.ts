export const homepage = {
  hero: {
    headline:
      "Hi! I’m Alicia, a nurturing player-coach product leader that leads with both conviction & care.",
    bio: [
      { text: "My design journey started over ", emphasis: false },
      { text: "15 years ago", emphasis: true },
      { text: ". I’m currently a ", emphasis: false },
      { text: "Senior Manager, Product Design", emphasis: true },
      { text: " at ", emphasis: false },
      { text: "Intuit Credit Karma ", emphasis: true },
      {
        text: "leading a design team through the AI revolution. Previously I solved problems at ",
        emphasis: false,
      },
      { text: "Capital One", emphasis: true },
      { text: ", ", emphasis: false },
      { text: "United Income", emphasis: true },
      { text: ", ", emphasis: false },
      { text: "JPMorganChase", emphasis: true },
      { text: ", and ", emphasis: false },
      { text: "CIBC", emphasis: true },
      { text: ".", emphasis: false },
    ],
  },
  principles: {
    intro: "These principles reflect how I strive to lead every day.",
    items: [
      {
        title: "Consistent",
        body: "I create consistency that helps teams do their best work.",
      },
      {
        title: "Clear",
        body: "I communicate with clarity so teams can move with confidence.",
      },
      {
        title: "Care",
        body: "I lead with care because great products start with people.",
      },
    ],
    cta: { label: "Learn more about how I lead", href: "/leadership" },
  },
  work: {
    title: "Select work",
    seeAll: { label: "See all", href: "/work" },
    items: [
      {
        slug: "tax-ai",
        title: "AI Augmented Tax",
        mobileTitle: "AI Augmented Tax",
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
        href: "/work/orientation",
        image: "/images/homepage/1.0_Image_3.png",
        role: "Staff Product Design",
        mobileRole: "Staff Product Designer",
        year: "2022",
        tags: "#Onboarding #Behavioral Design #Cross-functional",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    items: [
      {
        quote:
          "Alicia is an exceptional manager, open, collaborative, and deeply invested in her team’s success. She’s straightforward and transparent in her communication, balancing encouragement with constructive feedback that truly accelerates growth. She pushes me to think more strategically, ask sharper questions, and raise the quality bar in my work. Her ability to balance empathy with accountability sets a high standard for leadership.",
        attribution: "Team Member",
      },
      {
        quote:
          "Alicia is an incredible leader, perhaps one of the strongest in the entire design org. She balances empathy with practicality and does a great job providing insightful design critiques or asking questions that inspire deeper thinking and thoughts. She's meticulous, has an artist's eye and I know a roadmap or excel spreadsheet hates to see her coming.",
        attribution: "Team Member",
      },
      {
        quote:
          "I appreciate Alicia's efforts to elevate Design's role, especially through encouraging team-led workshops and stronger collaboration with PMs and Eng. This support has helped me feel more empowered in my work.",
        attribution: "Team Member",
      },
      {
        quote:
          "Alicia is an extremely effective driver of the CK Tax design team. She raised the bar on customer empathy on the team by mentoring designers and PM's on how to use UserTesting and how to work directly with members. She also runs the design team day to day and makes sure we have a strong collaborative culture on the team and always get stuff done.",
        attribution: "Cross-functional partner",
      },
      {
        quote:
          "I really appreciated your organization (e.g. weekly standup meetings and clear documentation of priorities by the owner in Figma) and partnership to resolve blockers for the team. Whether it be on Monileo carousel, CB placements, or on Instant Transfer differing opinions, you always came to the conversation prepared and open to feedback but also firm in your point of view especially when it came to advocating for the member and the member experience.",
        attribution: "Cross-functional partner",
      },
      {
        quote:
          "I think I was only able to join 1 or 2 of your brainstorming session but wow! You were incredibly prepared, thoughtful, and they were a very productive use of time - I hope I can learn more from you in the future and would love the chance to work together again!",
        attribution: "Cross-functional partner",
      },
      {
        quote:
          "Alicia has been an incredible design manager and an essential partner to the product team. She brings structure, clarity, and direction to the design process while also creating space for meaningful collaboration across functions. She’s a strong advocate for her team and helps product managers deeply understand design needs and workflows.",
        attribution: "Cross Functional Partner",
      },
      {
        quote:
          "What stands out most is the energy and insight she brings to every conversation. Alicia has a strong member-first mindset and always elevates discussions with thoughtful perspectives rooted in both customer empathy and product vision. She’s been a key force behind the success of this year's tax season, and it’s been a joy to partner with her.",
        attribution: "Cross Functional Partner",
      },
    ],
  },
  aiMeetsDesign: {
    title: "AI meets design",
    body: "AI is a powerful partner, but human judgment remains essential to validate decisions, refine outcomes, and ensure every experience is intentional, inclusive, and held to the highest standard.",
    cta: {
      label: "Learn more about my stance on AI and the tools I use",
      href: "/leadership#ai-stance",
    },
    tools: {
      src: "/images/logos/tools.svg",
      alt: "Tools: Claude, Gemini Notebook, Perplexity, Cursor",
    },
  },
  footer: {
    portrait: "/images/homepage/1.0_Image_4_portrait.png",
    heading: "Let’s chat.",
  },
} as const;
