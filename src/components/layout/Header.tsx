"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/what-is-it", label: "The Pedagogy" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/by-grade-level", label: "By Grade" },
  { href: "/getting-started", label: "Get Started" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <span className="logo-do">DO</span>
          <span className="logo-text">Show and Tell</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Link
            href="https://sayveritas.com"
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener"
          >
            See the Platform →
          </Link>
          <Link
            href="https://sayveritas.com/#webinars"
            className="btn btn-secondary btn-sm ml-2"
            target="_blank"
            rel="noopener"
          >
            Webinars
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className="nav-mobile-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://sayveritas.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
              onClick={() => setMobileMenuOpen(false)}
            >
              See the Platform →
            </Link>
          </li>
          <li>
            <Link
              href="https://sayveritas.com/#webinars"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener"
              onClick={() => setMobileMenuOpen(false)}
            >
              Weekly Webinars
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
