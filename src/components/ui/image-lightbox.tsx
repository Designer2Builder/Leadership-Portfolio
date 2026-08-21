"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { Dialog, VisuallyHidden } from "radix-ui";
import imageLoader from "@/lib/image-loader";
import { cn } from "@/lib/utils";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const DOUBLE_TAP_MS = 280;
const DRAG_CLOSE_PX = 90;

type Point = { x: number; y: number };

function distance(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function midpoint(a: Point, b: Point): Point {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function touchPoint(t: Touch): Point {
  return { x: t.clientX, y: t.clientY };
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function readableStartScale(displayW: number, displayH: number, viewW: number, viewH: number) {
  if (displayW <= 0 || displayH <= 0) return 1;
  const isWide = displayW / displayH > 1.6;
  if (!isWide) return 1;
  const targetH = viewH * 0.62;
  return clamp(targetH / displayH, 1, 3);
}

function clampPan(
  tx: number,
  ty: number,
  scale: number,
  displayW: number,
  displayH: number,
  viewW: number,
  viewH: number
): Point {
  const maxX = Math.max(0, (displayW * scale - viewW) / 2);
  const maxY = Math.max(0, (displayH * scale - viewH) / 2);
  return {
    x: clamp(tx, -maxX, maxX),
    y: clamp(ty, -maxY, maxY),
  };
}

export function ImageLightbox({
  open,
  onOpenChange,
  src,
  alt,
  width,
  height,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const panRef = useRef<Point>({ x: 0, y: 0 });
  const pinchRef = useRef<{ dist: number; scale: number; pan: Point; mid: Point } | null>(null);
  const panStartRef = useRef<{ pointer: Point; pan: Point } | null>(null);
  const lastTapRef = useRef<{ time: number; point: Point } | null>(null);
  const movedRef = useRef(false);

  const [view, setView] = useState({ w: 0, h: 0 });
  const [loaded, setLoaded] = useState({ w: 0, h: 0 });
  const [userScale, setUserScale] = useState<number | null>(null);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [hintExpired, setHintExpired] = useState(false);

  const natural = {
    w: width || loaded.w,
    h: height || loaded.h,
  };
  const fit =
    natural.w > 0 && natural.h > 0 && view.w > 0 && view.h > 0
      ? Math.min(view.w / natural.w, view.h / natural.h)
      : 0;
  const displayW = natural.w * fit;
  const displayH = natural.h * fit;
  const baseScale = readableStartScale(displayW, displayH, view.w, view.h);
  const scale = userScale ?? baseScale;

  const apply = useCallback(
    (nextScale: number, nextPan: Point) => {
      const s = clamp(nextScale, MIN_SCALE, MAX_SCALE);
      const p = clampPan(nextPan.x, nextPan.y, s, displayW, displayH, view.w, view.h);
      scaleRef.current = s;
      panRef.current = p;
      setUserScale(s);
      setPan(p);
    },
    [displayW, displayH, view.w, view.h]
  );

  const zoomAt = useCallback(
    (clientX: number, clientY: number, factor: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const point = { x: clientX - rect.left - rect.width / 2, y: clientY - rect.top - rect.height / 2 };
      const prev = scaleRef.current;
      const next = clamp(prev * factor, MIN_SCALE, MAX_SCALE);
      const ratio = next / prev;
      apply(next, {
        x: point.x - (point.x - panRef.current.x) * ratio,
        y: point.y - (point.y - panRef.current.y) * ratio,
      });
    },
    [apply]
  );

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!next) {
        setUserScale(null);
        setPan({ x: 0, y: 0 });
        setHintExpired(false);
      }
      onOpenChange(next);
    },
    [onOpenChange]
  );

  useLayoutEffect(() => {
    scaleRef.current = scale;
    panRef.current = pan;
  }, [scale, pan]);

  useLayoutEffect(() => {
    if (!open) return;
    const el = canvasRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setView({ w: r.width, h: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => setHintExpired(true), 2400);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onTouchStart = (event: TouchEvent) => {
      movedRef.current = false;
      if (event.touches.length === 2) {
        event.preventDefault();
        const a = touchPoint(event.touches[0]);
        const b = touchPoint(event.touches[1]);
        pinchRef.current = {
          dist: distance(a, b),
          scale: scaleRef.current,
          pan: { ...panRef.current },
          mid: midpoint(a, b),
        };
        panStartRef.current = null;
        lastTapRef.current = null;
        return;
      }
      if (event.touches.length === 1) {
        panStartRef.current = {
          pointer: touchPoint(event.touches[0]),
          pan: { ...panRef.current },
        };
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2 && pinchRef.current) {
        event.preventDefault();
        const a = touchPoint(event.touches[0]);
        const b = touchPoint(event.touches[1]);
        const factor = distance(a, b) / pinchRef.current.dist;
        const mid = midpoint(a, b);
        const canvasRect = canvas.getBoundingClientRect();
        const point = {
          x: pinchRef.current.mid.x - canvasRect.left - canvasRect.width / 2,
          y: pinchRef.current.mid.y - canvasRect.top - canvasRect.height / 2,
        };
        const nextScale = clamp(pinchRef.current.scale * factor, MIN_SCALE, MAX_SCALE);
        const ratio = nextScale / pinchRef.current.scale;
        apply(nextScale, {
          x: point.x - (point.x - pinchRef.current.pan.x) * ratio + (mid.x - pinchRef.current.mid.x),
          y: point.y - (point.y - pinchRef.current.pan.y) * ratio + (mid.y - pinchRef.current.mid.y),
        });
        movedRef.current = true;
        return;
      }
      if (event.touches.length === 1 && panStartRef.current) {
        const point = touchPoint(event.touches[0]);
        const dx = point.x - panStartRef.current.pointer.x;
        const dy = point.y - panStartRef.current.pointer.y;
        if (Math.hypot(dx, dy) > 6) movedRef.current = true;
        if (scaleRef.current > MIN_SCALE + 0.02) {
          event.preventDefault();
          apply(scaleRef.current, {
            x: panStartRef.current.pan.x + dx,
            y: panStartRef.current.pan.y + dy,
          });
        }
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (event.touches.length < 2) pinchRef.current = null;
      if (event.touches.length === 0) {
        const start = panStartRef.current;
        panStartRef.current = null;
        if (!start || movedRef.current) {
          if (
            start &&
            scaleRef.current <= MIN_SCALE + 0.05 &&
            event.changedTouches[0]
          ) {
            const dy = event.changedTouches[0].clientY - start.pointer.y;
            if (dy > DRAG_CLOSE_PX) handleOpenChange(false);
          }
          return;
        }
        const point = touchPoint(event.changedTouches[0]);
        const now = Date.now();
        const last = lastTapRef.current;
        if (last && now - last.time < DOUBLE_TAP_MS && distance(last.point, point) < 36) {
          lastTapRef.current = null;
          if (scaleRef.current > 1.15) {
            apply(MIN_SCALE, { x: 0, y: 0 });
          } else {
            zoomAt(point.x, point.y, 2.4);
          }
          return;
        }
        lastTapRef.current = { time: now, point };
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      zoomAt(event.clientX, event.clientY, event.deltaY > 0 ? 0.9 : 1.12);
    };

    const opts: AddEventListenerOptions = { passive: false };
    canvas.addEventListener("touchstart", onTouchStart, opts);
    canvas.addEventListener("touchmove", onTouchMove, opts);
    canvas.addEventListener("touchend", onTouchEnd, opts);
    canvas.addEventListener("touchcancel", onTouchEnd, opts);
    canvas.addEventListener("wheel", onWheel, opts);
    return () => {
      canvas.removeEventListener("touchstart", onTouchStart, opts);
      canvas.removeEventListener("touchmove", onTouchMove, opts);
      canvas.removeEventListener("touchend", onTouchEnd, opts);
      canvas.removeEventListener("touchcancel", onTouchEnd, opts);
      canvas.removeEventListener("wheel", onWheel, opts);
    };
  }, [open, apply, handleOpenChange, zoomAt]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    event.currentTarget.setPointerCapture(event.pointerId);
    panStartRef.current = {
      pointer: { x: event.clientX, y: event.clientY },
      pan: { ...panRef.current },
    };
    movedRef.current = false;
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const start = panStartRef.current;
    if (!start || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const dx = event.clientX - start.pointer.x;
    const dy = event.clientY - start.pointer.y;
    if (Math.hypot(dx, dy) > 4) movedRef.current = true;
    if (scaleRef.current > MIN_SCALE + 0.02) {
      apply(scaleRef.current, { x: start.pan.x + dx, y: start.pan.y + dy });
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    const start = panStartRef.current;
    panStartRef.current = null;
    if (movedRef.current || !start) return;
    const now = Date.now();
    const point = { x: event.clientX, y: event.clientY };
    const last = lastTapRef.current;
    if (last && now - last.time < DOUBLE_TAP_MS && distance(last.point, point) < 36) {
      lastTapRef.current = null;
      if (scaleRef.current > 1.15) apply(MIN_SCALE, { x: 0, y: 0 });
      else zoomAt(point.x, point.y, 2.4);
      return;
    }
    lastTapRef.current = { time: now, point };
  };

  const srcUrl = imageLoader({ src, width: natural.w || 1600 });
  const label = alt.trim() || "Zoomed image";
  const hint = open && baseScale > 1.05 && userScale === null && !hintExpired;

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-plum/95" />
        <Dialog.Content
          className="fixed inset-0 z-[100] flex h-dvh w-full flex-col outline-none"
          aria-describedby={undefined}
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>{label}</Dialog.Title>
          </VisuallyHidden.Root>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border border-cream/40 bg-plum/70 text-cream backdrop-blur-sm hover:opacity-80"
                aria-label="Zoom out"
                onClick={() => {
                  const canvas = canvasRef.current?.getBoundingClientRect();
                  if (!canvas) return;
                  zoomAt(canvas.left + canvas.width / 2, canvas.top + canvas.height / 2, 0.72);
                }}
              >
                <Minus className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border border-cream/40 bg-plum/70 text-cream backdrop-blur-sm hover:opacity-80"
                aria-label="Zoom in"
                onClick={() => {
                  const canvas = canvasRef.current?.getBoundingClientRect();
                  if (!canvas) return;
                  zoomAt(canvas.left + canvas.width / 2, canvas.top + canvas.height / 2, 1.4);
                }}
              >
                <Plus className="size-4" aria-hidden />
              </button>
            </div>
            <Dialog.Close
              className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-cream/40 bg-plum/70 text-cream backdrop-blur-sm hover:opacity-80"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden />
            </Dialog.Close>
          </div>

          <div
            ref={canvasRef}
            className={cn(
              "relative min-h-0 flex-1 touch-none overflow-hidden overscroll-none",
              scale > 1.02 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
            )}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="absolute top-1/2 left-1/2 origin-center will-change-transform"
              style={{
                width: displayW || undefined,
                height: displayH || undefined,
                transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              }}
            >
              {src ? (
                // Native img so pinch/pan transforms aren't fighting next/image layout.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={srcUrl}
                  alt={alt}
                  draggable={false}
                  className="pointer-events-none size-full max-w-none select-none object-contain"
                  onLoad={(event) => {
                    if (width && height) return;
                    const img = event.currentTarget;
                    if (img.naturalWidth && img.naturalHeight) {
                      setLoaded({ w: img.naturalWidth, h: img.naturalHeight });
                    }
                  }}
                />
              ) : null}
            </div>
          </div>

          <p
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-6 text-center text-[0.875rem] text-cream transition-opacity duration-500",
              hint ? "opacity-100" : "opacity-0"
            )}
          >
            Pinch or drag to explore
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
