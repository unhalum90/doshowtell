
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How It Works",
    description: "Learn the DO Show and Tell methodology step-by-step. See how students complete work, show their thinking, and articulate their learning—while teachers assess efficiently.",
};

export default function HowItWorksPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">How It Works</h1>
                    <p className="page-subtitle">
                        The complete student and teacher workflow—from assignment to insight
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">

                    {/* Student Workflow Section */}
                    <section className="workflow-section">
                        <h2 className="section-title">Student Workflow</h2>
                        <p className="section-intro">
                            Students complete three steps that together reveal authentic understanding. No AI can fake this combination.
                        </p>

                        <div className="steps-detailed">
                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">1</span>
                                    <h3 className="step-title">DO the Work</h3>
                                </div>
                                <div className="step-content">
                                    <p>Complete the thinking work—reading, annotating, problem-solving, note-taking.</p>
                                    <ul>
                                        <li>Use whatever method helps you think: handwritten notes, sketches, diagrams</li>
                                        <li>This is YOUR thinking time—messy is fine, mistakes are expected</li>
                                        <li>The goal is genuine engagement with the material, not perfection</li>
                                    </ul>
                                    <div className="step-example">
                                        <strong>Example prompts:</strong>
                                        <ul>
                                            <li>"Read Chapter 5 and annotate for main ideas."</li>
                                            <li>"Solve problems 1-5 and show your work."</li>
                                            <li>"Take notes on the video and identify key concepts."</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">2</span>
                                    <h3 className="step-title">SHOW Your Work</h3>
                                </div>
                                <div className="step-content">
                                    <p>Take a photo of your physical work and upload it.</p>
                                    <ul>
                                        <li>This is your receipt—proof you did the work</li>
                                        <li>Bring the original to class for verification</li>
                                        <li>The artifact shows effort and process, not just final answers</li>
                                    </ul>
                                    <div className="step-example">
                                        <strong>What gets photographed:</strong>
                                        <ul>
                                            <li>Annotated text passages with highlighting and notes</li>
                                            <li>Math problem-solving steps on paper</li>
                                            <li>Concept maps and diagrams</li>
                                            <li>Lab notebooks with observations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">3</span>
                                    <h3 className="step-title">TELL What You Learned</h3>
                                </div>
                                <div className="step-content">
                                    <p>Record 90 seconds of voice explanation.</p>
                                    <ul>
                                        <li>"Here's what I figured out..."</li>
                                        <li>"Here's where I struggled..."</li>
                                        <li>"This is how I solved it..."</li>
                                    </ul>
                                    <p>Your voice reveals your real understanding. It's the part that can't be faked.</p>
                                    <div className="step-example">
                                        <strong>Sentence starters:</strong>
                                        <ul>
                                            <li>"The main idea I learned was..."</li>
                                            <li>"At first I thought... but then I realized..."</li>
                                            <li>"I would use this in real life by..."</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Teacher Workflow Section */}
                    <section className="workflow-section teacher-section">
                        <h2 className="section-title">Teacher Workflow</h2>
                        <p className="section-intro">
                            Teachers assign, review patterns, and act on insights—all in a fraction of traditional grading time.
                        </p>

                        <div className="steps-detailed">
                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">1</span>
                                    <h3 className="step-title">Assign the Work</h3>
                                </div>
                                <div className="step-content">
                                    <ul>
                                        <li>Give students the thinking task</li>
                                        <li>Explain DO → SHOW → TELL expectations</li>
                                        <li>Set submission deadline</li>
                                        <li>Provide rubric or success criteria</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">2</span>
                                    <h3 className="step-title">Review Patterns</h3>
                                </div>
                                <div className="step-content">
                                    <ul>
                                        <li>Look at artifacts—did students do thorough work?</li>
                                        <li>Listen to defenses at 1.5x speed</li>
                                        <li>Identify class patterns: who's getting it, who's stuck, what misconceptions exist</li>
                                        <li>Take notes on common themes</li>
                                    </ul>
                                    <p className="highlight">
                                        <strong>Pro tip:</strong> Don't grade each individually first. Listen for patterns, then go back with targeted feedback.
                                    </p>
                                </div>
                            </div>

                            <div className="step-detailed">
                                <div className="step-header">
                                    <span className="step-number">3</span>
                                    <h3 className="step-title">Act on Insights</h3>
                                </div>
                                <div className="step-content">
                                    <ul>
                                        <li>Reteach tomorrow what students missed</li>
                                        <li>Provide targeted feedback where needed</li>
                                        <li>Grade based on understanding (revealed in TELL), not compliance</li>
                                        <li>Celebrate strong examples with the class (with permission)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Time Comparison Section */}
                    <section className="comparison-section">
                        <h2 className="section-title">Time Comparison</h2>
                        <p className="section-intro">
                            See the real difference in teacher time and feedback quality.
                        </p>

                        <div className="comparison-table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Task</th>
                                        <th>Traditional</th>
                                        <th>DO Show and Tell</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Collect work</td>
                                        <td>Collect 30 notebooks</td>
                                        <td>Review 30 photos</td>
                                    </tr>
                                    <tr>
                                        <td>Review responses</td>
                                        <td>Read 30 responses (5-6 hours)</td>
                                        <td>Listen to 30 defenses at 1.5x (30 min)</td>
                                    </tr>
                                    <tr>
                                        <td>Identify patterns</td>
                                        <td>Manual note-taking</td>
                                        <td>Patterns emerge while listening</td>
                                    </tr>
                                    <tr>
                                        <td>Return feedback</td>
                                        <td>2 weeks later</td>
                                        <td>Next class</td>
                                    </tr>
                                    <tr className="highlight-row">
                                        <td><strong>Total teacher time</strong></td>
                                        <td><strong>5-6 hours</strong></td>
                                        <td><strong>30-45 minutes</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="content-section cta-section">
                        <h2>Ready to Try It?</h2>
                        <p>
                            Start with our step-by-step implementation guide. You'll be up and running in a week.
                        </p>
                        <div className="action-buttons">
                            <Link href="/getting-started" className="btn btn-primary">
                                Get Started
                            </Link>
                            <Link href="/by-grade-level" className="btn btn-secondary">
                                See Grade-Level Examples
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </article>
    );
}
