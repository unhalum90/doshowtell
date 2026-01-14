
import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

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
                        <section key={category.category} className="resource-section mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">{category.category}</h2>
                            <div className="resources-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((resource) => (
                                    <div key={resource.title} className="resource-card bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
                                        <div className="resource-meta flex gap-2 mb-4">
                                            <span className="resource-format inline-block bg-slate-200 text-slate-800 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">{resource.format}</span>
                                            <span className="resource-audience inline-block bg-blue-100 text-blue-900 text-xs font-bold px-2 py-1 rounded-md">{resource.audience}</span>
                                        </div>
                                        <h3 className="text-xl font-bold !text-slate-900 mb-3">{resource.title}</h3>
                                        <p className="!text-slate-900 font-medium mb-6 flex-grow">{resource.description}</p>

                                        {resource.title === "Student Handout: How to DO Show and Tell" ? (
                                            <a href="/resources/How-to-DO-Show-and-Tell-Handout.html" target="_blank" className="btn btn-primary w-full text-center">
                                                Download
                                            </a>
                                        ) : (
                                            <button className="btn btn-secondary btn-sm w-full opacity-70 cursor-not-allowed bg-slate-200 text-slate-500 border-none pointer-events-none font-medium" disabled>
                                                Coming Soon
                                            </button>
                                        )}
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
                        <NewsletterForm />
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
