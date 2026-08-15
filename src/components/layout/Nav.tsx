"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-cream/20 px-gutter pt-5 pb-4 lg:px-gutter-lg lg:pt-12 lg:pb-7">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-nav items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="font-medium text-nav text-cream"
          onClick={() => setOpen(false)}
        >
          <span className="lg:hidden">{site.name}</span>
          <span className="hidden lg:inline">
            {site.name}{" "}
            <span className="font-normal">— {site.title}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-nav text-cream lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="hover:opacity-80">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex size-6 items-center justify-center text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "absolute inset-x-0 top-full origin-top border-b border-cream/20 bg-plum px-gutter pb-6 pt-4 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col gap-4 text-body text-cream">
          {navLinks.map((link) => (
            <li key={link.href}>
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
