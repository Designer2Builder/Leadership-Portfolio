"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SurfacePanel } from "@/components/home/SurfacePanel";

function storageKey(slug: string) {
  return `case-study-unlocked:${slug}`;
}

export function PasswordGate({
  slug,
  password,
  title,
  children,
}: {
  slug: string;
  password: string;
  title: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey(slug)) === "1") {
      setUnlocked(true);
    }
  }, [slug]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === password.toLowerCase()) {
      sessionStorage.setItem(storageKey(slug), "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="mx-auto flex w-full max-w-content flex-1 items-center justify-center px-gutter py-24 lg:px-0">
      <SurfacePanel
        tone="dark"
        className="w-full max-w-[420px] px-8 py-10 text-center"
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface-cream text-lime">
          <Lock className="size-5" aria-hidden />
        </span>
        <h1 className="mt-6 text-title-lg text-cream">{title}</h1>
        <p className="mt-2 text-[1rem] leading-normal text-text-muted">
          This case study is password protected. Enter the password to view
          it.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col items-stretch gap-3"
        >
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className="h-button-h rounded-pill border border-cream/40 bg-transparent px-5 text-center text-cream outline-none placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-cream/60"
          />
          {error && (
            <p className="text-[0.875rem] text-destructive">
              That password isn&apos;t right — try again.
            </p>
          )}
          <Button type="submit" variant="primary" className="self-center">
            Unlock
          </Button>
        </form>
      </SurfacePanel>
    </div>
  );
}
