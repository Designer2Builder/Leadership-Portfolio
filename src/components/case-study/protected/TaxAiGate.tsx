"use client";

import dynamic from "next/dynamic";
import { protectedCaseStudies } from "@/content/protected";
import { PasswordGate } from "@/components/case-study/PasswordGate";

// Lazy, client-only import: the case study copy must not ship in the
// initial HTML/RSC payload or the main JS bundle before the gate unlocks.
const TaxAiContent = dynamic(
  () => import("@/components/case-study/protected/TaxAiContent"),
  { ssr: false }
);

export function TaxAiGate() {
  return (
    <PasswordGate
      slug="tax-ai"
      password={protectedCaseStudies["tax-ai"].password}
      title="AI Augmented Tax"
    >
      <TaxAiContent />
    </PasswordGate>
  );
}
