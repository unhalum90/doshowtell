"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export function PageWrapper({ children, title, subtitle }: PageWrapperProps) {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">{title}</h1>
                    {subtitle && <p className="page-subtitle">{subtitle}</p>}
                </div>
            </header>
            <div className="container">
                <div className="main-content">
                    {children}
                </div>
            </div>

            <style jsx>{`
        .page-content {
          padding-bottom: var(--space-20);
        }

        .page-header {
          background: linear-gradient(
            to bottom,
            var(--color-surface),
            var(--color-bg)
          );
          padding: var(--space-16) 0 var(--space-12);
          text-align: center;
        }

        .page-title {
          font-family: var(--font-poppins), system-ui, sans-serif;
          font-size: var(--text-4xl);
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 var(--space-4);
        }

        .page-subtitle {
          font-size: var(--text-lg);
          color: var(--color-text-secondary);
          max-width: 55ch;
          margin: 0 auto;
        }

        .container {
          max-width: var(--max-width-page);
          margin: 0 auto;
          padding: 0 var(--space-4);
        }

        @media (min-width: 640px) {
          .container {
            padding: 0 var(--space-6);
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding: 0 var(--space-8);
          }
        }

        .main-content {
          max-width: 800px;
          margin: var(--space-12) auto 0;
        }
      `}</style>
        </article>
    );
}
