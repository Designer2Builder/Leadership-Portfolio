export const protectedCaseStudies: Record<string, { password: string }> = {
  "tax-ai": { password: process.env.NEXT_PUBLIC_TAX_AI_PASSWORD ?? "" },
};
