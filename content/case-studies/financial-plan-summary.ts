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
          body: "The problem presented to the creative team by the business and product manager was: the current financial plan summary didn't support a clear narrative that highlighted the value created by the company, the work that went into a financial plan, and the information wealth managers most often needed to communicate to their members.",
          bullets: [
            "A section that showed the chance of success of the financial plan",
            "Graphs, tables, and lists",
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
          body: "After conducting research and discovery, we redefined the problem to be: wealth managers must translate the current financial plan summary to their clients.",
        },
      ],
    },
    {
      id: "approach",
      title: "The Approach",
      variant: "approach-grid",
      blocks: [
        {
          type: "prose",
          body: "We followed a design thinking framework to solve the problem.",
        },
        {
          type: "approach-step",
          title: "User Session Reviews",
          body: "I reviewed 50 user sessions to determine the main purpose of clients logging in.",
        },
        {
          type: "approach-step",
          title: "Application Analytics",
          body: "Using a web analytics tool, I identified the path users often take while using the application.",
        },
        {
          type: "approach-step",
          title: "Application Review",
          body: "I did a review of the application to determine elements that could be found in multiple places.",
        },
        {
          type: "approach-step",
          title: "1:1 Interviews",
          body: "I conducted 1:1 interviews with members of the wealth management team to understand how they use the financial summary page and the application.",
        },
        {
          type: "approach-step",
          title: "Brainstorming Session",
          body: "Using the insights, the design team had a brainstorming session where we came up with two concepts: storytelling and timeline.",
        },
        {
          type: "approach-step",
          title: "Design Feedback",
          body: "We shared multiple iterations with the wealth managers to gather feedback and improve the design.",
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
          items: [
            "Wealth managers use the financial summary page to facilitate conversations with clients as an educational walkthrough.",
            "Current versus future is a large part of client conversations, but that sense of time wasn't clear in the application.",
            "Some parts of the application were thought-challenging or confusing to the client.",
            "Wealth managers use the compare-plan feature heavily and consider it a great feature.",
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
          body: "We moved forward with the timeline concept. Members would see their financial life on a timeline, with specific moments and milestones displayed visually — like a planned trip to Italy or a bequest to a grandchild.",
        },
      ],
    },
    {
      id: "solution-statement",
      title: "The Solution",
      variant: "callout",
      blocks: [
        {
          type: "prose",
          body: "We translated the financial plan summary so the members didn't have to.",
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
            "Additional scope was added to the project, including a dashboard with multiple sections at the top of the page before the member sees the timeline. The timeline is currently in development.",
            "After launching the top portion of the page, we identified some data points that may impact the credibility of all the data points on the page. I'm currently working with our cross-functional and Wealth Management team to make updates to the summary.",
          ],
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/financial-plan-summary/fp-current-plan.png",
              alt: "The redesigned current financial plan page",
              width: 1582,
              height: 1922,
            },
          ],
        },
      ],
    },
  ],
};
