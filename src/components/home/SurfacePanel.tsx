import { cn } from "@/lib/utils";

type SurfaceTone = "frost" | "dark" | "cream";

const toneClass: Record<SurfaceTone, string> = {
  frost: "bg-surface",
  dark: "bg-surface-dark border border-border-subtle",
  cream: "bg-surface-cream",
};

/** Frosted / tinted panel used by Principles + Testimonials (updated Figma) */
export function SurfacePanel({
  children,
  className,
  tone = "frost",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: SurfaceTone;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-panel",
        toneClass[tone],
        className
      )}
    >
      {children}
    </div>
  );
}
