import type { CaseStudy } from "@/content/types";

export const financialPlanSummary: CaseStudy = {
  slug: "financial-plan-summary",
  title: "Financial Plan Redesign",
  role: "Lead UX Designer",
  year: "2020",
  company: "United Income",
  summary:
    "Redesigned the financial plan summary to help wealth managers translate a member's financial life to them clearly — reframing dense graphs and tables into a narrative members and advisors could actually use.",
  tags: ["#UX Research", "#Wealth Management", "#Design Thinking"],
  heroImage: "/images/case-studies/financial-plan-summary/capital-one-hero.jpg",
  heroImagePosition: "center top",
  sections: [
    {
      id: "context",
      title: "Context",
      blocks: [
        {
          type: "prose",
          body: [
            "United Income was a financial planning and investment company focused on holistic wealth management, acquired by Capital One in 2019. I worked as Lead UX Designer alongside a Director of UX, a Creative Director, and a Product Manager.",
            "Due to confidentiality, some project artifacts can't be shown here. Photographs are from unsplash.com.",
          ],
        },
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      blocks: [
        {
          type: "prose",
          body: "The current financial plan summary didn't support a clear narrative — it didn't highlight the value the company created, the work that went into a financial plan, or the information wealth managers most needed to communicate to their members.",
          bullets: [
            "A section showing the chance of success of the financial plan",
            "Graphs, tables, and lists, without a throughline connecting them",
          ],
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/financial-plan-summary/fp-before.jpg",
              alt: "The original financial plan summary before redesign",
              width: 1556,
              height: 3258,
            },
          ],
        },
      ],
    },
    {
      id: "opportunity",
      title: "The Opportunity",
      variant: "callout",
      blocks: [
        {
          type: "prose",
          body: "Redefine the problem as: wealth managers must translate the current financial plan summary to their clients.",
        },
      ],
    },
    {
      id: "approach",
      title: "The Approach",
      blocks: [
        {
          type: "prose",
          body: "I led the team through Understand, Explore, and Materialize phases of the design thinking framework.",
        },
        {
          type: "approach-step",
          title: "Reviewed user sessions and analytics",
          body: "Reviewed 50 user sessions to determine the main purpose of clients logging in, and used a web analytics tool to identify the path users most often took through the application.",
        },
        {
          type: "approach-step",
          title: "Audited the application",
          body: "Reviewed the application to determine elements that could be found in multiple places, then conducted 1:1 interviews with members of the wealth management team to understand how they used the financial summary page day to day.",
        },
        {
          type: "approach-step",
          title: "Brainstormed concepts",
          body: "Using the research insights, the design team ran a brainstorming session and landed on two concepts to explore further: storytelling and timeline.",
        },
        {
          type: "approach-step",
          title: "Gathered feedback and iterated",
          body: "Shared multiple iterations with the wealth managers themselves to gather feedback and improve the design before moving forward.",
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/financial-plan-summary/fp-wireframe.png",
              alt: "Storytelling concept wireframe",
              width: 2880,
              height: 5136,
            },
            {
              src: "/images/case-studies/financial-plan-summary/fp-wireframe-tl-1.png",
              alt: "Timeline concept wireframe, first iteration",
              width: 2880,
              height: 3700,
            },
            {
              src: "/images/case-studies/financial-plan-summary/fp-wireframe-tl-2.png",
              alt: "Timeline concept wireframe, second iteration",
              width: 2880,
              height: 3700,
            },
          ],
        },
      ],
    },
    {
      id: "insights",
      title: "Research Insights",
      blocks: [
        {
          type: "list",
          title: "What we heard qualitatively",
          items: [
            "Wealth managers use the financial summary page to facilitate conversations with clients as an educational walkthrough.",
            "Current versus future is a large part of client conversations, but that sense of time wasn't clear in the application.",
            "Some parts of the application were thought-challenging or confusing to the client.",
            "Wealth managers use the compare-plan feature heavily and consider it a great feature.",
            "The same information could be found in multiple places throughout the application.",
          ],
        },
        {
          type: "stats",
          cards: [
            {
              label: "Purpose",
              value: "72%",
              description:
                "A client's primary purpose was related to the Accounts tab — viewing balances, statements, or performing a transaction.",
            },
            {
              label: "Repetition",
              value: "25%",
              description:
                "Of the elements reviewed could be found in more than one place within the application.",
            },
            {
              label: "Path",
              value: "15%",
              description:
                "Of clients visited the Dashboard after viewing the current financial plan summary.",
            },
            {
              label: "Usage",
              value: "41%",
              description:
                "Members of the wealth team visited the current financial plan summary page more than clients did.",
            },
          ],
        },
      ],
    },
    {
      id: "solution",
      title: "The Solution",
      blocks: [
        {
          type: "prose",
          body: "The team moved forward with the timeline concept. Members would see their financial life laid out on a timeline, with specific moments and milestones displayed visually — a planned trip to Italy, a bequest to a grandchild — instead of a wall of graphs and tables.",
        },
        {
          type: "quote",
          quote:
            "We translated the financial plan summary so the members didn't have to.",
          attribution: "Design team",
        },
      ],
    },
    {
      id: "result",
      title: "The Result",
      blocks: [
        {
          type: "prose",
          body: [
            "Scope expanded to include a dashboard with multiple sections at the top of the page, ahead of the timeline itself. The dashboard shipped first; the timeline continued in development.",
            "After launch, the team identified some data points that could affect the credibility of the page as a whole, and I worked with the cross-functional and wealth management teams on updates to the summary.",
          ],
        },
      ],
    },
  ],
};
