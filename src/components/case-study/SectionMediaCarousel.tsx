"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import type { MediaAsset } from "@/content/types";
import { cn } from "@/lib/utils";

type MediaImage = MediaAsset;

/** Falls back to this w/h ratio when an image is missing pixel dimensions */
const DEFAULT_RATIO = 0.672;

/** Frosted section carousel — height driven by the tallest image in the set */
export function SectionMediaCarousel({
  images,
  inset = false,
}: {
  images: MediaImage[];
  /** Keep the carousel in the content column instead of full-bleed */
  inset?: boolean;
}) {
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
    <div className={inset ? "w-full" : "-mx-gutter lg:mx-0"}>
      <Carousel setApi={setApi} opts={{ loop: images.length > 1 }} className="w-full">
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              <div
                className={cn(
                  "relative w-full overflow-hidden bg-surface-raised",
                  inset ? "rounded-card" : "lg:rounded-card"
                )}
                style={{ aspectRatio: `1 / ${maxRatio}` }}
              >
                <div className="absolute inset-0 px-3 pt-3 lg:px-8 lg:pt-8">
                  <div className="relative size-full">
                    <ZoomableImage
                      src={img.src}
                      alt={img.alt}
                      fill
                      width={img.width}
                      height={img.height}
                      className="object-contain object-bottom"
                      sizes="100vw"
                    />
                  </div>
                </div>
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
