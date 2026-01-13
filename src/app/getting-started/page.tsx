
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Getting Started",
    description: "Your 4-week implementation guide for DO Show and Tell. Start with low-stakes practice and build to full formative assessment in your grades 3-8 classroom.",
};

export default function GettingStartedPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Getting Started</h1>
                    <p className="page-subtitle">
                        A 4-week implementation guide to bring DO Show and Tell into your classroom
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <p className="intro-text">
                        You don't need fancy technology to start. This guide walks you through a gradual implementation that builds student comfort and teacher confidence week by week.
                    </p>

                    {/* Week 1 */}
                    <section className="week-section">
                        <div className="week-header">
                            <span className="week-badge">Week 1</span>
                            <h2>Introduce the Concept</h2>
                        </div>
                        <div className="week-content">
                            <p><strong>Goal:</strong> Get students comfortable with the format, not content mastery.</p>

                            <h3>What to do:</h3>
                            <ul>
                                <li><strong>Explain what DO Show and Tell is</strong>—and what it isn't. It's not about producing perfect artifacts. It's about articulating thinking.</li>
                                <li><strong>Model it yourself.</strong> Do a mini show-and-tell where YOU explain something you learned or struggled with. Show vulnerability.</li>
                                <li><strong>Practice with a fun, low-stakes topic.</strong> "My favorite weekend activity," "Something I'm curious about," or "A skill I'm trying to improve."</li>
                            </ul>

                            <div className="week-example">
                                <h4>Sample first assignment:</h4>
                                <p>"Draw or write about something you did this weekend. Take a photo. Record yourself explaining why it mattered to you. You have 60 seconds."</p>
                            </div>

                            <div className="week-tip">
                                <strong>💡 Tip:</strong> Keep it NO-stake this week. No grades, no rubric. Just practice getting comfortable with voice recording.
                            </div>
                        </div>
                    </section>

                    {/* Week 2 */}
                    <section className="week-section">
                        <div className="week-header">
                            <span className="week-badge">Week 2</span>
                            <h2>First Academic Application</h2>
                        </div>
                        <div className="week-content">
                            <p><strong>Goal:</strong> Apply the format to academic content with heavy scaffolding.</p>

                            <h3>What to do:</h3>
                            <ul>
                                <li><strong>Choose familiar content</strong>—review material from a previous unit, not brand new learning.</li>
                                <li><strong>Use heavy scaffolding.</strong> Provide sentence stems and frameworks for the voice recording.</li>
                                <li><strong>Make it low-stakes.</strong> Consider extra credit or "practice grade" only.</li>
                            </ul>

                            <div className="week-example">
                                <h4>Sentence stems for voice recording:</h4>
                                <ul>
                                    <li>"The main idea I wanted to capture was..."</li>
                                    <li>"I organized my notes this way because..."</li>
                                    <li>"Something that surprised me was..."</li>
                                    <li>"If I had more time, I would also..."</li>
                                </ul>
                            </div>

                            <div className="week-tip">
                                <strong>💡 Tip:</strong> Listen to a few recordings this week and share (with permission) what made them strong. Students learn from examples.
                            </div>
                        </div>
                    </section>

                    {/* Week 3 */}
                    <section className="week-section">
                        <div className="week-header">
                            <span className="week-badge">Week 3</span>
                            <h2>Increase Rigor</h2>
                        </div>
                        <div className="week-content">
                            <p><strong>Goal:</strong> Apply to current unit content with less scaffolding.</p>

                            <h3>What to do:</h3>
                            <ul>
                                <li><strong>Use current unit content</strong>—material students are actively learning.</li>
                                <li><strong>Reduce scaffolding.</strong> Provide fewer prompts, expect more independence.</li>
                                <li><strong>Introduce low-stakes grading.</strong> 5-10% of assignment weight.</li>
                                <li><strong>Provide clear rubric.</strong> What does "meets expectations" look like?</li>
                            </ul>

                            <div className="week-example">
                                <h4>Simple rubric categories:</h4>
                                <ul>
                                    <li><strong>Artifact quality:</strong> Does the work show genuine engagement?</li>
                                    <li><strong>Explanation clarity:</strong> Can you follow the student's thinking?</li>
                                    <li><strong>Self-awareness:</strong> Do they identify struggles AND solutions?</li>
                                </ul>
                            </div>

                            <div className="week-tip">
                                <strong>💡 Tip:</strong> Start identifying class patterns. Take notes: "3 students confused about X," "Most students missed Y."
                            </div>
                        </div>
                    </section>

                    {/* Week 4 */}
                    <section className="week-section">
                        <div className="week-header">
                            <span className="week-badge">Week 4</span>
                            <h2>Full Implementation</h2>
                        </div>
                        <div className="week-content">
                            <p><strong>Goal:</strong> Sustainable formative assessment as a regular classroom routine.</p>

                            <h3>What to do:</h3>
                            <ul>
                                <li><strong>Regular scheduling.</strong> Weekly or bi-weekly—find your rhythm.</li>
                                <li><strong>Students know expectations.</strong> The DO → SHOW → TELL format is habit.</li>
                                <li><strong>Teacher reviews efficiently.</strong> Pattern detection, not individual grading.</li>
                                <li><strong>Act on insights.</strong> Tomorrow's lesson responds to today's recordings.</li>
                            </ul>

                            <div className="week-tip">
                                <strong>💡 Tip:</strong> Mix high-stakes and low-stakes. Not every assignment needs a grade. The goal is consistent practice, not constant assessment.
                            </div>
                        </div>
                    </section>

                    {/* Ongoing Section */}
                    <section className="ongoing-section">
                        <h2>Ongoing: Finding Your Rhythm</h2>
                        <div className="rhythm-grid">
                            <div className="rhythm-item">
                                <h3>Frequency</h3>
                                <p>Weekly or bi-weekly works for most classrooms. More frequent = more data, but also more teacher time.</p>
                            </div>
                            <div className="rhythm-item">
                                <h3>Stakes</h3>
                                <p>Vary between graded and practice. Students build the habit regardless. Low-stakes practice often reveals more honesty.</p>
                            </div>
                            <div className="rhythm-item">
                                <h3>Subjects</h3>
                                <p>Start with your strongest subject. Once comfortable, expand to others. Each subject has different prompt styles.</p>
                            </div>
                            <div className="rhythm-item">
                                <h3>Feedback</h3>
                                <p>Not every recording needs individual feedback. Class-wide patterns matter more. Reserve detailed feedback for struggling students.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <h2>Need Resources?</h2>
                        <p>
                            Download our free templates, rubrics, and student handouts to get started even faster.
                        </p>
                        <div className="action-buttons">
                            <Link href="/resources" className="btn btn-primary">
                                Download Resources
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
