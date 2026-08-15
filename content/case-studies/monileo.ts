import type { CaseStudy } from "@/content/types";

export const monileo: CaseStudy = {
  slug: "monileo",
  title: "Redesigning CK money",
  role: "Manager, Product Design",
  year: "2023",
  company: "Intuit Credit Karma",
  summary:
    "Led design through a redesign of Credit Karma Money. When team momentum stalled, introduced a two-week sprint model that restored velocity and executive confidence.",
  tags: ["#Product Redesign", "#Sprint Planning", "#Team Leadership"],
  heroImage: "/images/homepage/1.0_Image_2.png",
  sections: [
    {
      id: "context",
      title: "Context",
      blocks: [
        {
          type: "prose",
          body: [
            "Intuit is a global financial technology company that owns both consumer and business brands. Their leading brands TurboTax, Credit Karma, QuickBooks, and Mailchimp serve over 100 million customers. Over the past 4.5 years I worked for Credit Karma, a free finance platform that allows customers to monitor their credit score and access financial tools and recommendations. I served in various product design roles including as an individual contributor and people manager in a few different business areas.",
            "In 2023, I was put on a redesign project for the banking portion of the Credit Karma app (called Credit Karma Money). A small team was put together to focus on this very large undertaking. It included product management, product marketing, product design, engineering, product analytics, and legal counsel resources dedicated to the redesign.",
            "At the time I was a manager, product design. I worked closely with my director, senior staff product designer, and a contract product designer. My responsibilities included:",
          ],
          bullets: [
            "Review and provide feedback on the experience",
            "Help meet deadlines",
            "Mitigate issues that impacted velocity",
            "Help prep and prepare presentations for the executive committee",
            "Update UI if needed",
          ],
        },
        {
          type: "tabs",
          items: [
            {
              id: "goal",
              label: "Goal",
              body: "Redesign Credit Karma Money to better demonstrate value to members by addressing top pain points uncovered through research and member support data.",
            },
            {
              id: "top-problems",
              label: "Top Problems",
              groups: [
                {
                  title: "Access and multi-session continuity",
                  body: "There’s friction in navigating to Money within our app. Members want to:",
                  bullets: [
                    "View my balance",
                    "View transactions",
                    "Find Credit Builder",
                  ],
                },
                {
                  title: "Usability and discoverability",
                  body: "Important tasks require too many taps or are buried too deep in UX",
                  bullets: [
                    "Transfer money",
                    "Find ATMs",
                    "Deposit a check",
                    "Card and account numbers",
                    "Debit card functionality",
                  ],
                },
                {
                  title: "Know when something needs action",
                  body: "Money notifications are important and get lost in the noise, and required actions are not obvious when opening the app",
                  bullets: [
                    "Declined transaction",
                    "Transaction needs to be confirmed",
                    "Bill payment due",
                  ],
                },
              ],
            },
            {
              id: "persona",
              label: "Persona",
              bullets: [
                "Jordan",
                "25 years old",
                "Credit score: 520",
                "Bank accounts: 2",
                "Works at Target",
                "Annual salary: $32,000",
                "Weekly hours: 38",
                "Family Life: She has a baby girl. Her fiancé has some medical conditions that prevent him from working in the next 6-12 months or even longer. She is now the only income provider for the family.",
              ],
            },
            {
              id: "approach",
              label: "Approach",
              body: "Address top members pain points by:",
              bullets: [
                "Making the most important actions easily accessible",
                "Heroing the most important metric (what the member has available to spend)",
                "Upsell must always be tied to a member’s segment and where they are in their activation journey",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      title: "Impact",
      blocks: [
        {
          type: "prose",
          body: "Improved member experience that resulted in members being able to complete the most important tasks.",
        },
        {
          type: "stats",
          cards: [
            {
              label: "Open Savings",
              value: "+28.5%",
            },
            {
              label: "Open First Savings Funding",
              value: "+23.8%",
            },
            {
              label: "Credit Builder Activation",
              value: "+9.8%",
            },
            {
              label: "New Direct Deposit Activations",
              value: "+1.8%",
            },
          ],
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/monileo/3.2_Image_1.png",
              alt: "Credit Karma Money redesign overview",
              width: 4000,
              height: 1734,
            },
            {
              src: "/images/case-studies/monileo/3.2_Image_2.png",
              alt: "Credit Karma Money redesign key tasks",
              width: 4000,
              height: 1734,
            },
            {
              src: "/images/case-studies/monileo/3.2_Image_3.png",
              alt: "Credit Karma Money redesign member experience",
              width: 4000,
              height: 1734,
            },
          ],
        },
      ],
    },
    {
      id: "challenge",
      title: "Challenge",
      blocks: [
        {
          type: "prose",
          body: [
            "The first few weeks were great. There was momentum and the team made significant progress in a short period of time. They were able to get out a beta version of the main overview tab for members who had an active direct deposit on iOS. But then things started to slow down and priorities were not clear.",
            "My boss came to me with this challenge: “How might we keep the momentum of the team and focus on the most important things?”",
          ],
        },
      ],
    },
    {
      id: "approach",
      title: "The Approach",
      blocks: [
        {
          type: "prose",
          body: "How I approached handling this challenge.",
        },
        {
          type: "approach-step",
          title: "Got the team’s perspective",
          body: "I talked to the team to understand why in their opinion things have slowed down and priorities are not clear. We were a very close knit group that had awesome communication.",
        },
        {
          type: "approach-step",
          title: "Made sense of what I learned",
          body: "I synthesized what I learned into key buckets: ownership, due dates, and prioritization.",
        },
        {
          type: "approach-step",
          title: "Provided a suggested solution",
          body: "Based on what I learned, I suggested implementing a 2 week sprint model which included ownership, due dates, and prioritization. This was what I believed would hold the team accountable.",
        },
        {
          type: "approach-step",
          title: "Developed the solution",
          body: "I worked with product management, design, and engineering leadership to narrow down a list of top priorities in order of importance. I created a sprint document that outlined what was expected when and a google sheet that included the sprint plan (date, topic, design owner, engineer owner, product owner, and roadblock notes).",
        },
        {
          type: "approach-step",
          title: "Rolled it out to the team",
          body: "I rolled it out to the whole team via a team meeting. I communicated clear expectations, owners, topics, and due dates and who to escalate to when/if challenges arose.",
        },
      ],
    },
    {
      id: "result",
      title: "The Result",
      blocks: [
        {
          type: "prose",
          body: "We got back on track delivering items on a 2 week frequency and identifying road blocks. Everyone knew what they were responsible for and who to go to if they needed to escalate. Tapping into a tried and true process not only helped motivate the team, but it gave the executive team confidence we were working on the right things with velocity.",
        },
      ],
    },
    {
      id: "testimonials",
      title: "Testimonials",
      blocks: [
        {
          type: "prose",
          body: "About my leadership on Monileo",
        },
        {
          type: "quote",
          quote:
            "Alicia, I'm really happy we had a chance to work together on MG6 and a little bit for Monileo follow-up work. I really appreciated your organization (e.g. weekly standup meetings and clear documentation of priorities by the owner in Figma) and partnership to resolve blockers for the team. Whether it be on Monileo carousel, CB placements, or on Instant Transfer differing opinions, you always came to the conversation prepared and open to feedback but also firm in your point of view especially when it came to advocating for the member and the member experience. You also are a strong communicator and were constantly working to ensure everyone was clear on priorities and that we were aligned as a team.",
          attribution: "Product Manager Partner",
        },
        {
          type: "quote",
          quote:
            "Strategy & Functional Expertise (Alicia’s strengths): Staying true to the vision of Monileo and not letting it devolve into a surface that is not member centric. This involved a lot of resilience and tough conversations to appease PMs with business goals.",
          attribution: "Engineer Partner",
        },
      ],
    },
  ],
};
