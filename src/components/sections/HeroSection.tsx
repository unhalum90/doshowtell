"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">DO · SHOW · TELL</span>
            <span className="hero-title-sub">
              It Worked in 2nd Grade. It can work in 8th grade.
            </span>
          </h1>
          <p className="hero-description">
            The most effective formative assessment from early elementary—brought
            back for grades 3-8 classrooms. Made sustainable with modern tools.
          </p>
          <div className="hero-ctas">
            <Link href="#learn-more" className="btn btn-primary">
              Learn the Methodology
            </Link>
            <Link
              href="https://sayveritas.com"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener"
            >
              See the Platform
            </Link>
            <Link
              href="https://sayveritas.com/#webinars"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener"
            >
              Weekly Webinars
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="artifact-card">
            <div className="artifact-image">
              <svg viewBox="0 0 200 150" fill="none" className="artifact-svg">
                <rect
                  x="10"
                  y="10"
                  width="180"
                  height="130"
                  rx="4"
                  fill="white"
                  stroke="oklch(90% 0.01 60)"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="30"
                  x2="180"
                  y2="30"
                  stroke="oklch(85% 0.01 60)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="50"
                  x2="160"
                  y2="50"
                  stroke="oklch(85% 0.01 60)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="70"
                  x2="170"
                  y2="70"
                  stroke="oklch(85% 0.01 60)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="90"
                  x2="140"
                  y2="90"
                  stroke="oklch(85% 0.01 60)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="110"
                  x2="155"
                  y2="110"
                  stroke="oklch(85% 0.01 60)"
                  strokeWidth="1"
                />
                <path
                  d="M25 28 Q40 26 50 30 T80 28"
                  stroke="oklch(25% 0.01 60)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M25 48 Q60 45 90 50 T140 48"
                  stroke="oklch(25% 0.01 60)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="160"
                  cy="100"
                  r="20"
                  fill="oklch(78% 0.12 180 / 0.2)"
                  stroke="oklch(78% 0.12 180)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="artifact-footer">
              <span className="artifact-label">Student Notes</span>
              <div className="voice-badge">
                <span className="voice-icon">
                  <span className="voice-bar"></span>
                  <span className="voice-bar"></span>
                  <span className="voice-bar"></span>
                  <span className="voice-bar"></span>
                </span>
                90 sec voice
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
