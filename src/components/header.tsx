"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, contact } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Ink & Impact
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={contact.calendly}
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/80 md:inline-flex"
          >
            Book a call
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 text-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-white/80 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contact.calendly}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/80"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
