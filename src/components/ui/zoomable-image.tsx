"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { cn } from "@/lib/utils";

const DRAG_THRESHOLD = 10;

type ZoomableImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
};

export function ZoomableImage({
  alt,
  className,
  frameClassName,
  width,
  height,
  fill,
  src,
  sizes,
  priority,
  style,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const pointerRef = useRef({ x: 0, y: 0, dragged: false });
  const srcString = typeof src === "string" ? src : "";
  const numericWidth = typeof width === "number" ? width : undefined;
  const numericHeight = typeof height === "number" ? height : undefined;
  const label = alt.trim() ? `View larger: ${alt}` : "View larger image";

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={label}
        className={cn(
          "group cursor-zoom-in touch-manipulation",
          fill ? "absolute inset-0" : "relative",
          frameClassName
        )}
        onPointerDown={(event) => {
          pointerRef.current = {
            x: event.clientX,
            y: event.clientY,
            dragged: false,
          };
        }}
        onPointerMove={(event) => {
          if (
            Math.hypot(
              event.clientX - pointerRef.current.x,
              event.clientY - pointerRef.current.y
            ) > DRAG_THRESHOLD
          ) {
            pointerRef.current.dragged = true;
          }
        }}
        onClick={() => {
          if (!pointerRef.current.dragged) setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt=""
            fill
            className={className}
            sizes={sizes}
            priority={priority}
            style={style}
            draggable={false}
          />
        ) : (
          <Image
            src={src}
            alt=""
            width={width ?? 1600}
            height={height ?? 900}
            className={className}
            sizes={sizes}
            priority={priority}
            style={style}
            draggable={false}
          />
        )}
        <span
          className="pointer-events-none absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-full border border-cream/40 bg-plum/70 text-cream backdrop-blur-sm lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
          aria-hidden
        >
          <ZoomIn className="size-4" />
        </span>
      </div>
      {srcString ? (
        <ImageLightbox
          open={open}
          onOpenChange={setOpen}
          src={srcString}
          alt={alt}
          width={numericWidth}
          height={numericHeight}
        />
      ) : null}
    </>
  );
}
