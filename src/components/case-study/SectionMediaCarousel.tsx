"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { MediaAsset } from "@/content/types";
import { cn } from "@/lib/utils";

type MediaImage = MediaAsset;

/** Falls back to this w/h ratio when an image is missing pixel dimensions */
const DEFAULT_RATIO = 0.672;

/** Frosted section carousel — height driven by the tallest image in the set */
export function SectionMediaCarousel({ images }: { images: MediaImage[] }) {
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

  if (images.length === 0) return null;

  const ratios = images
    .filter((img): img is MediaImage & { width: number; height: number } =>
      Boolean(img.width && img.height)
    )
    .map((img) => img.height / img.width);
  const maxRatio = ratios.length > 0 ? Math.max(...ratios) : DEFAULT_RATIO;

  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: images.length > 1 }} className="w-full">
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              <div
                className="relative w-full overflow-hidden rounded-card bg-surface-raised"
                style={{ aspectRatio: `1 / ${maxRatio}` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover pb-0 pl-6 pr-6 pt-6 lg:pl-8 lg:pr-8 lg:pt-8"
                  sizes="(max-width: 1024px) 100vw, 859px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 ? (
        <div
          className="mt-4 flex items-center justify-center gap-3"
          role="tablist"
          aria-label="Section images"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Show image ${i + 1}`}
              className={cn(
                "size-3 rounded-full transition-opacity",
                i === selected ? "bg-lime" : "bg-lime-muted"
              )}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
