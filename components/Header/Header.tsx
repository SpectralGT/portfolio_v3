"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "BUILDS", href: "#builds" },
  { name: "HACKATHONS", href: "#hackathons" },
  { name: "WRITING", href: "#writing" },
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
    <>
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#top" className="logo" onClick={() => setIsOpen(false)}>
          AS
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-button"
        >
          <span
            className={`menu-line menu-line-top ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
            }`}
          />

          <span
            className={`menu-line menu-line-middle ${isOpen ? "opacity-0" : "opacity-100"}`}
          />

          <span
            className={`menu-line menu-line-bottom ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
            }`}
          />
        </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`mobile-menu ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mobile-menu-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
