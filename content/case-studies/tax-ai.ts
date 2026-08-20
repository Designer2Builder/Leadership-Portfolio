import type { CaseStudy } from "@/content/types";

export const taxAi: CaseStudy = {
  slug: "tax-ai",
  title: "AI Augmented Tax",
  role: "Senior Manager, Product Design",
  year: "2026",
  company: "Intuit Credit Karma",
  summary:
    "Led a product design team of 5 through a winning tax season for Credit Karma and TurboTax. When workshops proved too slow to scale, built a custom Gemini AI tool used by design and product management to plan.",
  tags: ["#Team Leadership", "#AI Adjacent Design", "#Revenue Impact"],
  heroImage: "/images/homepage/1.0_Image_1.png",
  sections: [
    {
      id: "context",
      title: "Context",
      blocks: [
        {
          type: "prose",
          body: [
            "Intuit is a global financial technology company that owns both consumer and business brands. Their leading brands TurboTax, Credit Karma, QuickBooks, and Mailchimp serve over 100 million customers. Over the past 4.5 years I worked for Credit Karma, a free finance platform that allows customers to monitor their credit score and access financial tools and recommendations. I served in various product design roles including as an individual contributor and people manager in a few different business areas.",
            "In 2025 I was assigned to lead a group of 5 designers focused on experiences that led to Credit Karma members filing their taxes with TurboTax. The focus of my team included experiences related to tax tools (for example refund estimator and document checklist), entry points to TurboTax, and a Tax tab found in Credit Karma.",
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
          body: "Under my design leadership we had a great season. We surpassed our goals and grew our member base.",
        },
        {
          type: "stats",
          cards: [
            {
              label: "Total Revenue",
              value: "$134.2M",
              description: [
                {
                  text: "Led the design team that contributed towards earning ",
                },
                {
                  text: "$132.2M in total revenue",
                  emphasize: true,
                },
                { text: " for TurboTax. This was a " },
                { text: "42% growth from prior year", emphasize: true },
                { text: "." },
              ],
            },
            {
              label: "New & Returning Members",
              value: "1.42M",
              description: [
                {
                  text: "Led the design team that contributed towards acquiring ",
                },
                { text: "933,700", emphasize: true },
                { text: " and retaining " },
                { text: "493,600", emphasize: true },
                { text: " return members. This was an over " },
                { text: "30% growth from prior year", emphasize: true },
                { text: "." },
              ],
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
          body: "Working on Tax experiences came with a lot of nuances.",
          bullets: [
            "We looked at everything through the lens of seasons and planned the experience and business around it. Tax seasons included off-season, pre-season, in-season, and post-season.",
            "Business goals change with time and with different segments.",
          ],
        },
        {
          type: "prose",
          body: [
            "Previously the team leaned heavily on a one size fits all approach when developing experiences. The only “segmentation” practice was if the Credit Karma member filed their taxes with TurboTax the previous year (new and returning).",
            "In August 2025 the product marketing team developed a Go-to-Market Strategy that included segmentation work.",
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
          body: "Use the newly identified segments to develop in-product experiences that were hyper-personalized.",
        },
      ],
    },
    {
      id: "approach",
      title: "The Approach",
      blocks: [
        {
          type: "approach-step",
          title: "Understand the segments",
          body: "The product marketing team developed extensive documentation about the different segments. My job included sharing this information with the design and product team as well as facilitating open discussion with our Product Marketing partner.",
        },
        {
          type: "approach-step",
          title: "Bring the team together to define",
          body: "I developed a workshop which included a few activities to help develop hyper-personalized experiences for our segments. I brought together our cross-functional team (product design, product marketing, and product management) to help define key tax areas including season definition, business goals, intent building, and experience considerations for each segment. It was so important for these key areas to be defined not just by one group, but input and consideration by different areas helping to build the product experience.",
        },
        {
          type: "approach-step",
          title: "Brainstorm experience ideas",
          body: [
            "The workshop included a brainstorming section where the team brainstormed different experience building blocks that could be explored for a particular segment during different times in tax seasons.",
            "This resulted in fruitful discussion and ideas we used to enhance the in-product experience for our members. The only problem was it took a long time to get there. The workshop took about 5 hours spread across multiple sessions and we were only able to complete 1 segment out of the 5 we wanted to cover. If we wanted to do all 5, that would have been over 25 hours commitment from all cross-functional partners. At the time this was a very unrealistic ask for the team.",
            "This is when I had the idea to utilize AI.",
          ],
        },
        {
          type: "image",
          src: "/images/case-studies/tax-ai/3.1_Image_1.png",
          alt: "Workshop materials for segment definition",
          width: 3171,
          height: 4000,
        },
      ],
    },
    {
      id: "real-opportunity",
      title: "The Real Opportunity",
      variant: "callout",
      blocks: [
        {
          type: "prose",
          body: "Develop an AI tool that will help plan experiences in-product that are hyper-personalized to the newly identified segments.",
        },
      ],
    },
    {
      id: "ai-approach",
      title: "The AI Augmented Approach",
      blocks: [
        {
          type: "prose",
          body: "With the help of a Senior Staff Product Designer on the team we reverse engineered the activity and developed a Gemini Gem that can be used by anyone wanting to plan future experiences.",
        },
        {
          type: "approach-step",
          title: "Define important info to build context",
          body: "I created a google sheet that included important definitions and context including segmentation information for each segment (description, who they are, how they relate to taxes, etc).",
        },
        {
          type: "approach-step",
          title: "Develop instructions",
          body: "The Senior Staff Product Designer developed instructions (role and objective, response logic/trigger conditions, what to do and what not to do, triangulate factors, tone, terminology, and format) that was later added to the AI tool chosen.",
        },
        {
          type: "approach-step",
          title: "Select AI Tool",
          body: "We decided to go with Google Gemini. The Senior Staff Product Designer created a Gemini Gem, a custom AI assistant using the google sheet I created and instructions he developed. Being able to share easily was one of the deciding factors.",
        },
        {
          type: "approach-step",
          title: "Share with Team",
          body: "The Gemini Gem, AI assistant was shared with the design, engineering, and product management teams via a link to the Gem.",
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/tax-ai/3.1_Image_3.png",
              alt: "Gemini Gem AI planning tool shared with the team",
              width: 4000,
              height: 1734,
            },
            {
              src: "/images/case-studies/tax-ai/3.1_Image_4.png",
              alt: "AI-augmented planning for tax experiences",
              width: 4000,
              height: 1734,
            },
          ],
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
            "The Gemini Gem, AI tool was used to help plan vision work for next season. This tool has been used by not only design but product managers to help plan future in-product experiences.",
            "This was a great example of how we can use AI to help accelerate work. The key to the success of this was the deep work completed cross-functionally, which was used as the foundation in the development of this AI tool.",
          ],
        },
      ],
    },
  ],
};
