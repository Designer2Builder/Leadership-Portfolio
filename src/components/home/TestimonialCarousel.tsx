"use client";

import { useEffect, useState } from "react";
import { homepage } from "@/content/homepage";
import { SurfacePanel } from "@/components/home/SurfacePanel";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const { title, items } = homepage.testimonials;
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full pt-section pb-section lg:pt-section-lg lg:pb-0">
      {/* Mobile title sits above the panel */}
      <FadeIn y={16} className="lg:hidden">
        <h2 className="mx-auto mb-4 max-w-content px-gutter text-center text-section text-cream">
          {title}
        </h2>
      </FadeIn>

      <FadeIn y={32} threshold={0.08}>
        <div className="mx-auto max-w-content px-gutter lg:mx-0 lg:max-w-none lg:px-0">
          <SurfacePanel
            tone="dark"
            className={cn(
              "rounded-card border border-border px-6 py-9",
              /* Desktop: full-bleed, borderless, tall centered panel (Figma 1512×899) */
              "lg:flex lg:min-h-[56.1875rem] lg:flex-col lg:items-center lg:justify-between lg:border-0 lg:px-16 lg:py-36"
            )}
          >
            <div className="mx-auto flex w-full flex-col items-center lg:max-w-[47.9rem] lg:flex-1">
              <h2 className="hidden text-center text-title-lg text-cream lg:block">
                {title}
              </h2>

              <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                className="w-full lg:mt-12"
              >
                <CarouselContent>
                  {items.map((item, i) => (
                    <CarouselItem key={i}>
                      <blockquote className="text-center">
                        <p className="text-meta-lg text-cream lg:text-body">
                          “{item.quote}”
                        </p>
                        <footer className="mt-4 text-meta-lg text-text-muted lg:mt-8 lg:text-body">
                          {item.attribution}
                        </footer>
                      </blockquote>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div
              className="mt-8 flex items-center justify-center gap-6 lg:mt-16"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={cn(
                    "size-3 rounded-full transition-opacity",
                    i === selected ? "bg-lime" : "bg-lime-muted"
                  )}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
          </SurfacePanel>
        </div>
      </FadeIn>
    </section>
  );
}
