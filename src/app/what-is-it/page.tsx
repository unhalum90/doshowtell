
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Pedagogy Behind DO Show and Tell",
    description: "Understand the educational philosophy behind DO Show and Tell. Learn why show and tell can be an effective assessment—and how to use it in grades 3-8 classrooms.",
};

export default function WhatIsItPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">The Pedagogy</h1>
                    <p className="page-subtitle">
                        Understanding why show and tell was one of our most effective assessments—and why we're bringing it back
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="content-grid">
                    <div className="main-content">

                        <section className="content-section">
                            <h2>The History: Show and Tell Worked</h2>
                            <p>
                                Think back to early elementary school. Remember show and tell? A child brings something meaningful—a rock from vacation, a drawing they made, a family photo—and explains it to the class.
                            </p>
                            <p>
                                This wasn't just a fun activity. It was one of the most effective formative assessments we've ever had in education. In those few minutes, teachers could observe:
                            </p>
                            <ul>
                                <li><strong>Language development</strong>: How clearly can the child communicate ideas?</li>
                                <li><strong>Thinking organization</strong>: Can they structure their explanation logically?</li>
                                <li><strong>Personal connection</strong>: Do they understand why this matters?</li>
                                <li><strong>Confidence</strong>: Are they developing oral presentation skills?</li>
                            </ul>
                            <p>
                                No worksheets. No multiple choice tests. Just a child explaining their thinking in their own words. And we could instantly tell who understood.
                            </p>
                        </section>

                        <section className="content-section">
                            <h2>Why We Stopped: The Logistics Problem</h2>
                            <p>
                                Around 3rd grade, show and tell typically disappears from classrooms. Not because it stopped working—but because the math stopped adding up.
                            </p>
                            <div className="callout">
                                <p><strong>30 students × 5 minutes = 2.5 hours</strong></p>
                                <p>That's more than half a school day, just for one round of oral presentations.</p>
                            </div>
                            <p>
                                As curricula got more demanding and class sizes grew, we abandoned oral assessment in favor of written work. It was more "efficient"—teachers could collect 30 papers and grade them at home. But we lost something critical in that trade.
                            </p>
                        </section>

                        <section className="content-section">
                            <h2>What We Lost: The Voice of Understanding</h2>
                            <p>
                                When we stopped asking students to explain their thinking out loud, we lost the ability to:
                            </p>
                            <ul>
                                <li><strong>Hear real understanding</strong>: Written work can be copied, paraphrased from AI, or surface-level. Voice reveals depth.</li>
                                <li><strong>Catch misconceptions early</strong>: A student who says "I think photosynthesis is when plants breathe" reveals a fixable misconception that a correct written answer might hide.</li>
                                <li><strong>Develop oral reasoning skills</strong>: The ability to articulate thinking is crucial for college, careers, and life.</li>
                                <li><strong>Assess authentically</strong>: You can't fake both a thoughtful artifact AND a coherent oral explanation.</li>
                            </ul>
                            <p>
                                We traded depth for efficiency. And now, with AI able to generate polished written work in seconds, that trade looks worse every day.
                            </p>
                        </section>

                        <section className="content-section">
                            <h2>The Modern Solution: Technology Makes It Scalable</h2>
                            <p>
                                What if we could bring back the power of show and tell without the logistical nightmare?
                            </p>
                            <p>
                                That's exactly what <strong>DO Show and Tell</strong> does. Students:
                            </p>
                            <ol>
                                <li><strong>DO</strong> the thinking work (handwritten notes, diagrams, problem-solving)</li>
                                <li><strong>SHOW</strong> their work (take a photo, upload it)</li>
                                <li><strong>TELL</strong> what they learned (record 90 seconds of voice explanation)</li>
                            </ol>
                            <p>
                                Teachers can now listen to 30 student defenses in 30 minutes at 1.5x speed, instead of spending 5-6 hours reading written responses. More importantly, they can <em>hear</em> who gets it and who's stuck.
                            </p>
                        </section>

                        <section className="content-section">
                            <h2>Research Backing</h2>
                            <p>
                                DO Show and Tell isn't just intuitive—it's grounded in decades of educational research:
                            </p>
                            <ul>
                                <li>
                                    <strong>Constructivism</strong> (Piaget, Vygotsky): Learning happens when students actively construct meaning, not passively receive information. Explaining your thinking reinforces learning.
                                </li>
                                <li>
                                    <strong>Metacognition</strong> (Flavell): Thinking about your own thinking improves learning outcomes. Articulating "where I struggled" and "how I solved it" develops metacognitive skills.
                                </li>
                                <li>
                                    <strong>Formative Assessment</strong> (Black & Wiliam): Assessment should inform instruction, not just measure it. Hearing student explanations reveals what to reteach tomorrow.
                                </li>
                                <li>
                                    <strong>Authentic Assessment</strong> (Wiggins): Real-world tasks assess understanding better than standardized tests. Defending your work mirrors professional expectations.
                                </li>
                            </ul>
                        </section>

                        <section className="content-section quote-section">
                            <blockquote className="featured-quote">
                                <p>"Show and tell was never broken. We just couldn't sustain it. Now we can."</p>
                            </blockquote>
                        </section>

                        <section className="content-section cta-section">
                            <h2>Ready to Learn How?</h2>
                            <p>
                                The methodology is free and open. Start with our step-by-step guide to see exactly how DO Show and Tell works in practice.
                            </p>
                            <div className="action-buttons">
                                <Link href="/how-it-works" className="btn btn-primary">
                                    See How It Works
                                </Link>
                                <Link href="/getting-started" className="btn btn-secondary">
                                    Get Started
                                </Link>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <nav className="page-nav">
                            <h3>On This Page</h3>
                            <ul>
                                <li><a href="#the-history">The History</a></li>
                                <li><a href="#why-we-stopped">Why We Stopped</a></li>
                                <li><a href="#what-we-lost">What We Lost</a></li>
                                <li><a href="#the-solution">The Solution</a></li>
                                <li><a href="#research">Research Backing</a></li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>

        </article>
    );
}
