import type { CaseStudy } from "@/content/types";

export const orientation: CaseStudy = {
  slug: "orientation",
  title: "Reducing account draining",
  role: "Staff Product Design",
  year: "2022",
  company: "Intuit Credit Karma",
  summary:
    "Designed an in-product orientation experience for Refund Advance members that reduced account draining and increased key activation actions across Credit Karma Money.",
  tags: ["#Onboarding", "#Behavioral Design", "#Cross-functional"],
  heroImage: "/images/homepage/1.0_Image_3.png",
  sections: [
    {
      id: "context",
      title: "Context",
      blocks: [
        {
          type: "prose",
          body: [
            "Intuit is a global financial technology company that owns both consumer and business brands. Their leading brands TurboTax, Credit Karma, QuickBooks, and Mailchimp serve over 100 million customers. Over the past 4.5 years I worked for Credit Karma, a free finance platform that allows customers to monitor their credit score and access financial tools and recommendations. I served in various product design roles including as an individual contributor and people manager in a few different business areas.",
            "In 2022, my squad focused on onboarding new Credit Karma Money members. I worked as a Staff Product Designer helping to create and improve onboarding experiences.",
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
            "I worked on the banking part of the app. Every tax season there was an opportunity for TurboTax customers to become Credit Karma Money members through offers. A large number of TurboTax customers took advantage of Refund Advance. A Refund Advance (RAD) is a zero-fee, 0% APR short-term loan that members can get (if approved) once they file their taxes with TurboTax. It gives members fast access to cash—often within minutes of the IRS accepting their e-filed return—without impacting their credit score. The amount is based on their refund amount. In order for them to get RAD they had to open a Credit Karma Money Spend account (checking account).",
            "In the 2021 tax season, most TurboTax customers who took refund advance and opened a Credit Karma money account: drained their accounts (immediately transferred funds out of the account).",
          ],
        },
      ],
    },
    {
      id: "opportunity",
      title: "The Opportunity",
      blocks: [
        {
          type: "prose",
          body: "Lower the number of TurboTax customers who:",
          bullets: [
            "Take refund advance",
            "Open a Credit Karma Money account, and",
            "Drain it",
          ],
        },
        {
          type: "prose",
          body: "Increase the number of TurboTax customers who",
          bullets: [
            "Take refund advance",
            "Open a Credit Karma Money account, and",
            "Do key actions to get the most out of their Credit Karma account.",
          ],
        },
      ],
    },
    {
      id: "hypothesis",
      title: "The Hypothesis",
      blocks: [
        {
          type: "prose",
          body: "If we encourage RAD customers to do key actions during a specific time, they would be more likely to not drain their Credit Karma Money account and perform key account actions.",
        },
        {
          type: "carousel",
          images: [
            {
              src: "/images/case-studies/orientation/3.3_Image_1.png",
              alt: "Hypothesis framing for reducing Refund Advance account draining",
              width: 4000,
              height: 1734,
            },
            {
              src: "/images/case-studies/orientation/UI-1.svg",
              alt: "Orientation in-product experience UI across member actions and states",
              width: 20803,
              height: 11979,
            },
          ],
        },
      ],
    },
    {
      id: "approach",
      title: "The Approach",
      blocks: [
        {
          type: "approach-step",
          title: "Understood how RAD and regular Credit Karma members use the account",
          body: [
            "As part of the discovery stage of this project I worked with product analytics to understand how past RAD and nonRAD (customers from TurboTax who never took RAD) used the accounts. The product analysis pulled data related to members completing key actions:",
            "After reviewing the data, we had a better sense of when members usually took these key actions and in what order.",
          ],
          bullets: [
            "Adding money to account",
            "Activating their debit card",
            "Connecting Apple or Google wallet",
            "First purchase",
            "Opening a save account or credit builder account, and",
            "Connecting direct deposit.",
          ],
        },
        {
          type: "approach-step",
          title: "Brought the team together to define",
          body: "I developed and facilitated a cross-functional workshop where I brought design, product marketing, and product management together to brainstorm ideal paths for RAD members. The workshop included great discussion, clear alignment, and next steps to develop high level member journeys.",
          images: [
            {
              src: "/images/case-studies/orientation/team/Team-1.png",
              alt: "Cross-functional workshop whiteboard mapping TurboTax, Credit Karma, and Credit Karma Money member journeys",
              width: 2400,
              height: 1800,
            },
          ],
        },
        {
          type: "approach-step",
          title: "Mapped out ideal member journeys",
          body: "I took the results of the workshop and the previous analysis of past actions a member took and developed high level journeys for each member type which included the action we wanted members to take and when we wanted them to do it.",
          images: [
            {
              src: "/images/case-studies/orientation/path/3.3_Image_3A.png",
              alt: "Ideal journey for RAD members with a Credit Karma account and no Credit Karma Money account, score above 619",
              width: 6816,
              height: 2472,
            },
            {
              src: "/images/case-studies/orientation/path/3.3_Image_3B.png",
              alt: "Ideal journey for RAD members with a Credit Karma account and no Credit Karma Money account, score below 619",
              width: 6816,
              height: 2472,
            },
            {
              src: "/images/case-studies/orientation/path/3.3_Image_3C.png",
              alt: "Ideal journey for RAD members who already have Credit Karma and Credit Karma Money accounts",
              width: 6816,
              height: 2472,
            },
            {
              src: "/images/case-studies/orientation/path/3.3_Image_3D.png",
              alt: "Ideal journey for non-RAD members without a Credit Karma Money account, score above 619",
              width: 6816,
              height: 2472,
            },
            {
              src: "/images/case-studies/orientation/path/3.3_Image_3E.png",
              alt: "Ideal journey for non-RAD members without a Credit Karma Money account, score below 619",
              width: 6816,
              height: 2472,
            },
          ],
        },
        {
          type: "approach-step",
          title: "Designed a new in-product experience",
          body: [
            "At the time the account included a small section for next steps with minimal logic. It wasn’t very prominent and was missing key actions we wanted the member to take. As part of this experiment I designed a new section using existing design system components which included:",
            "The section changed based on the action the member took or specific time that has passed.",
          ],
          bullets: [
            "A large visual encouraging a specific action",
            "A list with description text and key symbols for status, and",
            "Link outs to areas of the apps where they could get more information about the action before they took it",
          ],
          images: [
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-0.png",
              alt: "How it Works title slide",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-1.png",
              alt: "Orientation as a guided onboarding path for RAD members",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-2.png",
              alt: "Orientation To do section on the Money tab suggesting next account actions",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-3.png",
              alt: "Members move between Orientation stages by taking an action or after a set amount of time",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-4.png",
              alt: "Orientation parts: Level 1, Level 2, additional info and actions, and dynamic statuses",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-5.png",
              alt: "Level 1 as the most important action, shown as a large visual with Add money",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-6.png",
              alt: "Level 2 as an in-stage action that does not move the member to a new stage",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-7.png",
              alt: "Additional info and actions with expanded debit card setup options",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-8.png",
              alt: "Dynamic status symbols for completed, skipped, active, and not started",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-9.png",
              alt: "Experimenting on stage order, timing, copy, and components",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-10.png",
              alt: "Keep a single Level 1 or Level 2 focus when experimenting",
              width: 4352,
              height: 2672,
            },
            {
              src: "/images/case-studies/orientation/how-it-works/Summary-11.png",
              alt: "Orientation principles: discovery, intention, focus, and encouraging the next undone action",
              width: 4352,
              height: 2672,
            },
          ],
        },
        {
          type: "approach-step",
          title: "Gathered member feedback",
          body: [
            "Partnering with content design and research, we did 2 unmoderated UserTesting sessions. The learning objectives were to:",
            "The results helped us improve the experience and gave us new ideas to explore.",
          ],
          bullets: [
            "Understand members perception of onboarding and account setup",
            "Identify ways to improve onboarding, and",
            "Identify opportunities to improve section copy",
          ],
          images: [
            {
              src: "/images/case-studies/orientation/user-testing/UT-1.png",
              alt: "Most participants understood the To do section as a checklist of setup actions",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-2.png",
              alt: "Most people thought the clock symbol meant time sensitivity",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-3.png",
              alt: "Most people thought the dot meant not started or a list item",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-4.png",
              alt: "Most people understood what virtual card meant",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-5.png",
              alt: "Most participants did not understand what Get card ready means",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-6.png",
              alt: "Most participants understood Get rewards as rewards from spending",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-7.png",
              alt: "Most participants did not know what Get paid means",
              width: 3499,
              height: 2443,
            },
            {
              src: "/images/case-studies/orientation/user-testing/UT-8.png",
              alt: "Participants did not understand how Credit Builder helps them build credit",
              width: 3499,
              height: 2443,
            },
          ],
        },
        {
          type: "prose",
          title: "What we learned",
          body: "The results helped us improve the experience and gave us new ideas to explore.",
        },
        {
          type: "approach-step",
          title: "Connected in-product experiences with email marketing",
          body: "While doing this work our team identified an opportunity to better align email marketing efforts with the in-product experience. I worked closely with an email marketing partner to ensure the lifecycle campaigns were closely aligned to what the member would see in the product at a specific time. Although not perfect, this one was the first effort for our line of business to work more collaboratively with our email marketing team.",
          images: [
            {
              src: "/images/case-studies/orientation/3.3_Image_2.png",
              alt: "Alignment between in-product Orientation and email marketing",
              width: 4000,
              height: 1734,
            },
          ],
        },
        {
          type: "approach-step",
          title: "Worked closely with engineering to develop",
          body: "I worked closely with the engineering team to develop the experience. From 1:1 working sessions to extensive testing in app, I took design ownership of the full experience, ensuring what was shipped was what was designed. At the time we did not have a formal or robust design QA process, so this required overcoming technical challenges and working closely with my engineering partners.",
        },
        {
          type: "approach-step",
          title: "Created a scalable system",
          body: "This was a complex system that I wanted to make sure would scale. I developed guidance documentation and figma reusable components and shared it with the design team. I wanted any designer to be able to optimize the experience once I moved on to other projects and teams.",
          images: [
            {
              src: "/images/case-studies/orientation/scale/Scale-1.png",
              alt: "Figma reusable Orientation components across account actions and states",
              width: 2400,
              height: 1672,
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
            "This was a great win for the team. Orientation reduced draining of the account and increased the number of key actions the RAD member took.",
            "It was so successful for RAD members, we decided to roll it out to all members as is.",
          ],
        },
        {
          type: "chart",
          title: "New Refund Advance Customer",
          subtitle: "RAD",
          columns: [
            { key: "control", label: "Control" },
            { key: "enabled", label: "Enabled" },
            { key: "lift", label: "Lift" },
          ],
          rows: [
            {
              label: "n",
              values: { control: "3,947", enabled: "4,079", lift: "—" },
            },
            {
              label: "Purchase",
              values: { control: "78%", enabled: "82%", lift: "+6%" },
            },
            {
              label: "DD Setup",
              values: { control: "3%", enabled: "4%", lift: "+29%" },
            },
            {
              label: "Credit Builder",
              values: { control: "7%", enabled: "7%", lift: "+5%" },
            },
            {
              label: "Savings",
              values: { control: "14%", enabled: "15%", lift: "+4%" },
            },
            {
              label: "Average card purchase",
              values: { control: "$1,722", enabled: "$1,956", lift: "+14%" },
            },
            {
              label: "Average External Bank withdraw",
              values: { control: "$1,277", enabled: "$1,033", lift: "-19%" },
            },
            {
              label: "Average self deposit",
              values: { control: "$327", enabled: "$394", lift: "+20%" },
            },
          ],
        },
        {
          type: "chart",
          title: "Returning Refund Advance Customer",
          subtitle: "RAD",
          columns: [
            { key: "control", label: "Control" },
            { key: "enabled", label: "Enabled" },
            { key: "lift", label: "Lift" },
          ],
          rows: [
            {
              label: "n",
              values: { control: "4,203", enabled: "4,337", lift: "—" },
            },
            {
              label: "Purchase",
              values: { control: "87%", enabled: "88%", lift: "+1%" },
            },
            {
              label: "DD Setup",
              values: { control: "4%", enabled: "4%", lift: "-11%" },
            },
            {
              label: "Credit Builder",
              values: { control: "6%", enabled: "6%", lift: "-10%" },
            },
            {
              label: "Savings",
              values: { control: "9%", enabled: "10%", lift: "+10%" },
            },
            {
              label: "Average card purchase",
              values: { control: "$2,425", enabled: "$2,477", lift: "+2%" },
            },
            {
              label: "Average External Bank withdraw",
              values: { control: "$1,011", enabled: "$949", lift: "-6%" },
            },
            {
              label: "Average self deposit",
              values: { control: "$878", enabled: "$906", lift: "+3%" },
            },
          ],
        },
        {
          type: "chart",
          title: "NonRAD New Customer",
          columns: [
            { key: "control", label: "Control" },
            { key: "enabled", label: "Enabled" },
            { key: "lift", label: "Lift" },
          ],
          rows: [
            {
              label: "n",
              values: { control: "30,269", enabled: "30,080", lift: "—" },
            },
            {
              label: "Purchase",
              values: { control: "28%", enabled: "29%", lift: "+3%" },
            },
            {
              label: "DD Setup",
              values: { control: "2%", enabled: "2%", lift: "-8%" },
            },
            {
              label: "Credit Builder",
              values: { control: "4%", enabled: "3%", lift: "-13%" },
            },
            {
              label: "Savings",
              values: { control: "7%", enabled: "7%", lift: "+5%" },
            },
            {
              label: "Average card purchase",
              values: { control: "$388", enabled: "$397", lift: "+2%" },
            },
            {
              label: "Average External Bank withdraw",
              values: { control: "$286", enabled: "$298", lift: "+4%" },
            },
            {
              label: "Average self deposit",
              values: { control: "$110", enabled: "$108", lift: "-1%" },
            },
          ],
        },
        {
          type: "chart",
          title: "NonRAD Returning Customer",
          columns: [
            { key: "control", label: "Control" },
            { key: "enabled", label: "Enabled" },
            { key: "lift", label: "Lift" },
          ],
          rows: [
            {
              label: "n",
              values: { control: "31,875", enabled: "31,735", lift: "—" },
            },
            {
              label: "Purchase",
              values: { control: "66%", enabled: "66%", lift: "0%" },
            },
            {
              label: "DD Setup",
              values: { control: "2%", enabled: "2%", lift: "+5%" },
            },
            {
              label: "Credit Builder",
              values: { control: "3%", enabled: "3%", lift: "-4%" },
            },
            {
              label: "Savings",
              values: { control: "5%", enabled: "5%", lift: "+5%" },
            },
            {
              label: "Average card purchase",
              values: { control: "$1,452", enabled: "$1,469", lift: "+1%" },
            },
            {
              label: "Average External Bank withdraw",
              values: { control: "$730", enabled: "$719", lift: "-1%" },
            },
            {
              label: "Average self deposit",
              values: { control: "$1,050", enabled: "$1,083", lift: "+3%" },
            },
          ],
        },
        {
          type: "prose",
          body: "As you can see, although the results were great for some actions, not all were positive. The opportunity here was to go back to the original strategy and perform a similar activity of mapping out the journey for members who were not RAD members.",
        },
      ],
    },
  ],
};
