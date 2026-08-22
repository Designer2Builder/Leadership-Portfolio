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
    image: { src: string; alt: string; width: number; height: number };
  };
  discoveries: { heading: string; cards: string[] };
  solutions: {
    heading: string;
    images: { src: string; alt: string; width: number; height: number }[];
  };
  closing: {
    heading: string;
    body: string[];
    image: { src: string; alt: string; width: number; height: number };
  };
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
    image: {
      src: "/images/case-studies/paper-digital/figma-prototype-test.png",
      alt: "Prototype testing of the multi-step and collapsed form concepts",
      width: 3408,
      height: 1874,
    },
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
    images: [
      {
        src: "/images/case-studies/paper-digital/figma-summary-1.png",
        alt: "Digital trust application summary, screen 1",
        width: 1852,
        height: 1106,
      },
      {
        src: "/images/case-studies/paper-digital/figma-summary-2.png",
        alt: "Digital trust application summary, screen 2",
        width: 1856,
        height: 1110,
      },
      {
        src: "/images/case-studies/paper-digital/figma-summary-3.png",
        alt: "Digital trust application summary, screen 3",
        width: 1854,
        height: 1108,
      },
      {
        src: "/images/case-studies/paper-digital/figma-summary-4.png",
        alt: "Digital trust application summary, screen 4",
        width: 1854,
        height: 1110,
      },
      {
        src: "/images/case-studies/paper-digital/figma-summary-5.png",
        alt: "Digital trust application summary, screen 5",
        width: 1856,
        height: 1106,
      },
    ],
  },
  closing: {
    heading: "Summary",
    body: [
      "During the discovery stage I was trying to determine the amount of errors or rejections of the paper forms. Unfortunately this data was not tracked. As part of this work to digitalize the paper form, these are the types of analytics we could capture in the future.",
      "As a designer practicing design thinking, it's so important to understand the end to end experience of all projects. This project was no different. What was in scope did not reflect what truly needed to be done to improve the end to end experience of the Wealth Associate and client. Working with the Product Management team, I hoped to implement a solution for the whole open account process that would save the Wealth Associate and clients time and energy.",
    ],
    image: {
      src: "/images/case-studies/paper-digital/figma-trust-application.png",
      alt: "Digital trust application",
      width: 1382,
      height: 1944,
    },
  },
};
