export type PaperDigitalCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  heroImage: { src: string; alt: string };
  context: { heading: string; body: string[] };
  problem: { heading: string; body: string };
  opportunity: { title: string; body: string };
  approach: {
    kicker: string;
    statement: string;
    items: { title: string; body: string }[];
  };
  discoveries: { heading: string; cards: string[] };
  solutions: {
    heading: string;
    items: { title: string; body: string }[];
    image: { src: string; alt: string };
  };
  closing: { heading: string; body: string[] };
};

export const paperDigital: PaperDigitalCaseStudy = {
  slug: "paper-digital",
  title: "Paper to Digital",
  summary:
    "Converted a manual, paper-based trust application process into a digital form — designing a faster experience that lowered the chances of error and improved the account-opening experience for Wealth Associates.",
  heroImage: {
    src: "/images/case-studies/paper-digital/figma-hero.png",
    alt: "Illustration of two people exchanging house keys over a paper application",
  },
  context: {
    heading: "Context",
    body: [
      "United Income was a fintech company founded by Matt Fellowes in 2016 to provide retirement planning and investment management for retirees. Capital One acquired the company in 2019, after which it operated as United Income from Capital One, an SEC-registered investment adviser. In 2020, it was renamed Capital One Investing, Inc. Capital One exited the investment-adviser business in 2022.",
      "In 2021, I worked on product experiences that helped Wealth Managers do their jobs and customers get the most out of their financial plan.",
    ],
  },
  problem: {
    heading: "The Problem",
    body: "Wealth Associates used a paper application to open trust accounts for clients. The paper application was manual and increased the chances of manual errors.",
  },
  opportunity: {
    title: "The Opportunity",
    body: "We set out to design a digital application process that's faster, lowers the chances of errors, and improves the transfer/open accounts experience.",
  },
  approach: {
    kicker: "The Approach",
    statement:
      "We used design thinking to design, test, and prototype a more efficient solution.",
    items: [
      {
        title: "1:1 Interviews",
        body: "I conducted 1:1 interviews with members of the wealth management team to understand the open account process and trust account process.",
      },
      {
        title: "Knowledge Building",
        body: "I reviewed the Operations Manual for Wealth Associate and educational pieces on trusts to gain further understanding of the end to end experience.",
      },
      {
        title: "Task Analysis",
        body: "I created an end to end process map of the current paper trust application process.",
      },
      {
        title: "Problem Identification",
        body: "Although the problem presented was related to only trust accounts, we identified multiple problems with the open account process.",
      },
      {
        title: "Ideation",
        body: "With a focus on solving the problems identified, I came up with two design concepts (multi-step and collapsed form) with feedback from the design team.",
      },
      {
        title: "Prototype Testing",
        body: "I created prototypes of the two design concepts and tested them with Wealth Associates. We landed on the longer form with the ability to collapse sections.",
      },
    ],
  },
  discoveries: {
    heading: "Research Discoveries",
    cards: [
      "Application forms did not include any ability to save and revisit, only create.",
      "The current application process did not include any progress bar or clear indicator of where you are in the process of opening.",
      "Searching for pending applications was cumbersome and did not work.",
      "Account opening page isn't clear. Not sure who the account is being opened for.",
    ],
  },
  solutions: {
    heading: "The Solutions",
    items: [
      {
        title: "Save Application",
        body: "We added the ability to save application. Wealth Associates will be able to start and application and revisit if they need more information from clients.",
      },
      {
        title: "Ref Numbers",
        body: "We added a reference ID and confirmation # to every application to connect application to outside activities that aren't \"digitized\".",
      },
      {
        title: "Expand/Collapse",
        body: "Long forms can feel overwhelming and be hard to review so we added expand/collapsed sections to give the Wealth Associate the ability to view collapsed version of form.",
      },
      {
        title: "Checkmarks",
        body: "We added checkmarks to each section once a Wealth Associate completes it, to let them know what sections still need to be complete.",
      },
      {
        title: "Progress Bar",
        body: "We added a progress bar at the top so the Wealth Associate would know exactly where they are in the open account process.",
      },
    ],
    image: {
      src: "/images/case-studies/paper-digital/figma-application-form.png",
      alt: "Digital application prototype showing step progress, save draft, and expandable form sections",
    },
  },
  closing: {
    heading: "Summary",
    body: [
      "During the discovery stage I was trying to determine the amount of errors or rejections of the paper forms. Unfortunately this data was not tracked. As part of this work to digitalize the paper form, these are the types of analytics we could capture in the future.",
      "As a designer practicing design thinking, it's so important to understand the end to end experience of all projects. This project was no different. What was in scope did not reflect what truly needed to be done to improve the end to end experience of the Wealth Associate and client. Working with the Product Management team, I hoped to implement a solution for the whole open account process that would save the Wealth Associate and clients time and energy.",
    ],
  },
};
