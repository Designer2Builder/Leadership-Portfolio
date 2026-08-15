import { Hero } from "@/components/home/Hero";
import { PrinciplesTable } from "@/components/home/PrinciplesTable";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { WorkPreviewGrid } from "@/components/home/WorkPreviewGrid";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <PrinciplesTable />
      <WorkPreviewGrid />
      <TestimonialCarousel />
    </main>
  );
}
