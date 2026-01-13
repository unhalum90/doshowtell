
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free Resources",
    description: "Download free DO Show and Tell templates, rubrics, student handouts, and implementation guides. Creative Commons licensed for classroom use.",
};

export default function ResourcesPage() {
    const resources = [
        {
            category: "Student Resources",
            items: [
                {
                    title: "Student Handout: How to DO Show and Tell",
                    description: "One-page guide explaining the DO → SHOW → TELL process for students",
                    format: "PDF",
                    audience: "Grades 3-8",
                },
                {
                    title: "Sentence Stems for Voice Recording",
                    description: "Scaffolding prompts to help students structure their explanations",
                    format: "PDF",
                    audience: "All grades",
                },
                {
                    title: "Self-Reflection Checklist",
                    description: "Students rate their own work before submitting",
                    format: "PDF",
                    audience: "Grades 4-8",
                },
            ]
        },
        {
            category: "Teacher Resources",
            items: [
                {
                    title: "4-Week Implementation Guide",
                    description: "Detailed week-by-week plan for rolling out DO Show and Tell",
                    format: "PDF",
                    audience: "Teachers",
                },
                {
                    title: "Basic Rubric Template",
                    description: "Customizable rubric for assessing artifacts and voice explanations",
                    format: "PDF / Editable",
                    audience: "Teachers",
                },
                {
                    title: "Parent Letter Template",
                    description: "Explain DO Show and Tell to families",
                    format: "PDF / Editable",
                    audience: "Teachers",
                },
                {
                    title: "Assignment Prompt Templates",
                    description: "Ready-to-use prompts for ELA, Math, Science, Social Studies",
                    format: "PDF",
                    audience: "Teachers",
                },
            ]
        },
        {
            category: "Subject-Specific",
            items: [
                {
                    title: "ELA Prompt Collection",
                    description: "20 reading response prompts for narrative and informational text",
                    format: "PDF",
                    audience: "ELA Teachers",
                },
                {
                    title: "Math Problem-Solving Prompts",
                    description: "Prompts focused on showing mathematical reasoning",
                    format: "PDF",
                    audience: "Math Teachers",
                },
                {
                    title: "Science Lab Reflection Guide",
                    description: "Connect observations to scientific concepts",
                    format: "PDF",
                    audience: "Science Teachers",
                },
            ]
        }
    ];

    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Free Resources</h1>
                    <p className="page-subtitle">
                        Templates, rubrics, and guides to implement DO Show and Tell in your classroom
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <div className="license-notice">
                        <p>
                            All resources are <strong>Creative Commons BY-NC</strong> licensed.
                            Use freely in your classroom. Share with colleagues. Just don't sell them.
                        </p>
                    </div>

                    {resources.map((category) => (
                        <section key={category.category} className="resource-section">
                            <h2>{category.category}</h2>
                            <div className="resources-grid">
                                {category.items.map((resource) => (
                                    <div key={resource.title} className="resource-card">
                                        <div className="resource-meta">
                                            <span className="resource-format">{resource.format}</span>
                                            <span className="resource-audience">{resource.audience}</span>
                                        </div>
                                        <h3>{resource.title}</h3>
                                        <p>{resource.description}</p>
                                        <button className="btn btn-secondary btn-sm" disabled>
                                            Coming Soon
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section className="newsletter-section">
                        <h2>Get Notified When Resources Launch</h2>
                        <p>
                            We're finalizing our resource library. Subscribe to be the first to know when new materials are available.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Notify Me
                            </button>
                        </form>
                    </section>

                    <section className="cta-section">
                        <h2>Start Without Resources</h2>
                        <p>
                            You don't need fancy templates to get started. Follow our implementation guide and begin with any content you're already teaching.
                        </p>
                        <div className="action-buttons">
                            <Link href="/getting-started" className="btn btn-primary">
                                Get Started
                            </Link>
                            <Link href="/by-subject" className="btn btn-secondary">
                                See Subject Examples
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </article>
    );
}
