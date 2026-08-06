"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "EXPERIENCE", href: "#features" },
  { name: "PROJECTS", href: "#pricing" },
  { name: "RESUME", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-(length:--border-width) border-(--foreground) bg-(--background) text-(--foreground)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-50 text-2xl font-display tracking-tight text-(--foreground)" onClick={() => setIsOpen(false)}>
          AS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 font-mono text-xs md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="group relative overflow-hidden px-3 py-2">
              <span className="relative z-10">{link.name}</span>

              <span
                className="
                  absolute inset-0
                  bg-(--color-1)
                  -translate-x-full
                  transition-transform duration-300 ease-out
                  group-hover:translate-x-0
                "
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-0.75 w-6 rounded-full bg-current origin-center transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
            }`}
          />

          <span
            className={`absolute h-0.75 w-6 rounded-full bg-current transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          />

          <span
            className={`absolute h-0.75 w-6 rounded-full bg-current origin-center transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full w-full items-center justify-center bg-(--color-1)">
          <nav className="flex flex-col items-center gap-8 font-display">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl uppercase tracking-wider text-(--foreground) transition-all duration-200 hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
