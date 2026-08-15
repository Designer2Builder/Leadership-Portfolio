"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay after the element enters view (ms) */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  /** Optional scale start (e.g. 0.98) */
  scale?: number;
  /** How much of the element must be visible (0–1) */
  threshold?: number;
  as?: "div" | "section" | "article" | "li";
};

/**
 * Fades (and optionally lifts) into view once when scrolled into the viewport.
 * Stays visible on SSR / before hydrate to avoid blank flashes; only hides when
 * the client confirms the element is below the fold. Honors prefers-reduced-motion.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  scale = 1,
  threshold = 0.12,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const inView = rect.top < vh * 0.92 && rect.bottom > 0;

    if (inView) {
      return;
    }

    setVisible(false);

    let io: IntersectionObserver | null = null;
    const arm = requestAnimationFrame(() => {
      setMotionReady(true);
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io?.unobserve(el);
          }
        },
        { threshold, rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);
    });

    return () => {
      cancelAnimationFrame(arm);
      io?.disconnect();
    };
  }, [threshold]);

  const style = {
    "--fade-y": `${y}px`,
    "--fade-scale": String(scale),
    transitionDelay: visible ? `${delay}ms` : "0ms",
  } as CSSProperties;

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        motionReady && "fade-in-scroll",
        motionReady && visible && "fade-in-scroll--visible",
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
