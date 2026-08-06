"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "EXPERIENCE", href: "#features" },
  { name: "PROJECTS", href: "#pricing" },
  { name: "RESUME", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-(length:--border-width) border-(--foreground) bg-(--background) text-(--foreground)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display tracking-tight text-(--foreground)">
          AS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center font-mono text-xs gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="group relative overflow-hidden px-3 py-2">
              <span className="relative z-10">{link.name}</span>

              <span
                className="
                            absolute inset-0 
                            bg-(--color-1)
                            -translate-x-full
                            transition-transform duration-300 ease-out
                            group-hover:translate-x-0"
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-(--foreground) px-3 py-1.5 text-sm font-medium text-(--foreground) hover:bg-(--foreground) md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="border-t border-[var(--foreground)]/10 bg-[var(--background)] px-4 pt-2 pb-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col space-y-2 border-t border-[var(--foreground)]/10 pt-4">
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-[var(--color-1)] px-3 py-2 text-center text-base font-medium text-white hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
