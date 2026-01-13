"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="cta-gradient">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to bring back show and tell?</h2>
          <p className="cta-description">
            Start with our free implementation guide. In 4 weeks, you'll have a
            sustainable practice that reveals what your students really know.
          </p>
          <div className="cta-buttons">
            <Link href="/getting-started" className="btn btn-white">
              Get Started Free
            </Link>
            <Link href="/resources" className="btn btn-outline-white">
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
