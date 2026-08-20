import Image from "next/image";
import { homepage } from "@/content/homepage";
import { cn } from "@/lib/utils";

export function ToolsStrip({ className }: { className?: string }) {
  const { src, alt } = homepage.aiMeetsDesign.tools;

  return (
    <div
      className={cn("overflow-hidden opacity-50", className)}
      aria-label="AI tools"
    >
      <div className="logo-marquee flex w-max">
        {[0, 1].map((copy) => (
          <Image
            key={copy}
            src={src}
            alt={copy === 0 ? alt : ""}
            aria-hidden={copy === 1}
            width={4096}
            height={101}
            className="h-9 w-auto max-w-none shrink-0 pr-12 lg:h-11 lg:pr-16"
          />
        ))}
      </div>
    </div>
  );
}
