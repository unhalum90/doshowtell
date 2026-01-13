
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "By Grade Level",
    description: "See how DO Show and Tell adapts for grades 3-5 and 6-8 classrooms. Age-appropriate prompts, timing, and expectations for every developmental stage.",
};

export default function ByGradeLevelPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">By Grade Level</h1>
                    <p className="page-subtitle">
                        Age-appropriate adaptations for grades 3-5 and 6-8 classrooms
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <p className="intro-text">
                        DO Show and Tell works across grades 3-8, but the expectations should match developmental stages. Here's how to adapt the methodology for each age group.
                    </p>


                    {/* 3-5 Section */}
                    <section className="grade-section">
                        <div className="grade-header g35">
                            <span className="grade-badge">Grades 3-5</span>
                            <h2>Developing Reasoning</h2>
                        </div>
                        <div className="grade-content">
                            <div className="grade-specs">
                                <div className="spec">
                                    <strong>Recording time:</strong> 60 seconds
                                </div>
                                <div className="spec">
                                    <strong>Prompts:</strong> Structured frameworks
                                </div>
                                <div className="spec">
                                    <strong>Focus:</strong> Explanation + reflection
                                </div>
                            </div>

                            <h3>What grades 3-5 look like:</h3>
                            <ul>
                                <li>Written notes, annotations, and diagrams</li>
                                <li>Use frameworks like RACE (Restate, Answer, Cite, Explain)</li>
                                <li>Expect main idea + supporting detail + personal connection</li>
                                <li>Introduce rubrics with clear success criteria</li>
                            </ul>

                            <div className="example-box">
                                <h4>Sample prompts:</h4>
                                <ul>
                                    <li>"Read Chapter 3. Annotate for main ideas. Explain the most important thing the author wants you to understand."</li>
                                    <li>"Solve problems 1-5. Pick one that was tricky and explain how you figured it out."</li>
                                    <li>"After the science experiment, explain: What did you predict? What happened? Why do you think that occurred?"</li>
                                </ul>
                            </div>

                            <div className="key-insight">
                                <strong>Key insight:</strong> This is where students transition from describing to analyzing. Push for "why" and "how," not just "what."
                            </div>
                        </div>
                    </section>

                    {/* 6-8 Section */}
                    <section className="grade-section">
                        <div className="grade-header g68">
                            <span className="grade-badge">Grades 6-8</span>
                            <h2>Deepening Analysis</h2>
                        </div>
                        <div className="grade-content">
                            <div className="grade-specs">
                                <div className="spec">
                                    <strong>Recording time:</strong> 90 seconds
                                </div>
                                <div className="spec">
                                    <strong>Prompts:</strong> Open-ended, analytical
                                </div>
                                <div className="spec">
                                    <strong>Focus:</strong> Metacognition + synthesis
                                </div>
                            </div>

                            <h3>What grades 6-8 look like:</h3>
                            <ul>
                                <li>Sophisticated note-taking, concept maps, problem-solving</li>
                                <li>Open-ended prompts that require synthesis</li>
                                <li>Expect self-awareness: "Where I struggled" and "How I overcame"</li>
                                <li>Connect to real-world applications</li>
                            </ul>

                            <div className="example-box">
                                <h4>Sample prompts:</h4>
                                <ul>
                                    <li>"After reading the article, explain the author's argument. Do you agree? Why or why not?"</li>
                                    <li>"You've finished the unit on fractions. What was the hardest concept for you? How did you work through it?"</li>
                                    <li>"Design a solution to the engineering challenge. Explain your design choices and what trade-offs you made."</li>
                                </ul>
                            </div>

                            <div className="key-insight">
                                <strong>Key insight:</strong> At this level, students should be defending their thinking, not just reporting it. Ask them to anticipate counterarguments or alternative approaches.
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <h2>See Subject-Specific Examples</h2>
                        <p>
                            Every subject has different prompt patterns. See how DO Show and Tell adapts for ELA, Math, Science, and Social Studies.
                        </p>
                        <div className="action-buttons">
                            <Link href="/by-subject" className="btn btn-primary">
                                By Subject
                            </Link>
                            <Link href="/getting-started" className="btn btn-secondary">
                                Get Started
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </article>
    );
}
