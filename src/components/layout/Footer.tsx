"use client";

import Link from "next/link";

const methodologyLinks = [
  { href: "/what-is-it", label: "The Pedagogy" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/by-grade-level", label: "By Grade Level" },
  { href: "/by-subject", label: "By Subject" },
];

const getStartedLinks = [
  { href: "/getting-started", label: "Implementation Guide" },
  { href: "/resources", label: "Resources" },
  { href: "/community", label: "Community" },
];

const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/why-sayveritas", label: "Why SayVeritas" },
  { href: "https://sayveritas.com", label: "SayVeritas Platform", external: true },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-do">DO</span>
              <span className="logo-text">Show and Tell</span>
            </Link>
            <p className="footer-tagline">
              An effective formative assessment practice for grades 3-8 classrooms.
            </p>

            <div className="newsletter">
              <h3 className="newsletter-title">Stay updated</h3>
              <p className="newsletter-desc">
                Get teaching tips and new resources delivered to your inbox.
              </p>
              <form className="newsletter-form" action="#" method="POST">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h3 className="footer-heading">Methodology</h3>
              <ul className="footer-list">
                {methodologyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Get Started</h3>
              <ul className="footer-list">
                {getStartedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">About</h3>
              <ul className="footer-list">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener" }
                        : {})}
                    >
                      {link.label}
                      {link.external && (
                        <span className="external-icon" aria-hidden="true">
                          {" ↗"}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Eric Chamberlin. Methodology is Creative
            Commons BY-NC.
          </p>
          <ul className="legal-links">
            <li>
              <Link href="/privacy" className="legal-link">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="legal-link">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
