
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "By Subject",
    description: "Subject-specific DO Show and Tell applications for Reading/ELA, Math, Science, and Social Studies. Prompt examples and assessment strategies for each discipline.",
};

export default function BySubjectPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">By Subject</h1>
                    <p className="page-subtitle">
                        Subject-specific applications for every core discipline
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <p className="intro-text">
                        Each subject has unique opportunities for DO Show and Tell. Here's how to adapt the methodology for your discipline.
                    </p>

                    <div className="space-y-16">

                        {/* ELA Section */}
                        <section className="subject-section">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl" role="img" aria-label="books">📚</span>
                                <h2 className="text-3xl font-bold m-0">Reading / ELA</h2>
                            </div>
                            <div className="subject-content grid md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">What students DO:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-900 font-medium">
                                        <li>Annotate texts—underline, margin notes, questions</li>
                                        <li>Graphic organizers for character, theme, structure</li>
                                        <li>Response journals with personal connections</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold mb-4 text-blue-900">What students TELL:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-blue-900 font-medium">
                                        <li>"The main idea the author wants me to understand is..."</li>
                                        <li>"I noticed the author's choice to... because..."</li>
                                        <li>"This connected to my own experience when..."</li>
                                    </ul>
                                </div>

                                <div className="prompt-box md:col-span-2 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <h4 className="font-bold text-yellow-900 mb-2 uppercase tracking-wide text-sm">Sample prompt</h4>
                                    <p className="text-lg text-slate-900 italic font-medium">"Read the short story and annotate for literary devices. In your recording, pick one device the author used and explain why it was effective."</p>
                                </div>
                            </div>
                        </section>

                        {/* Math Section */}
                        <section className="subject-section">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl" role="img" aria-label="numbers">🔢</span>
                                <h2 className="text-3xl font-bold m-0">Math</h2>
                            </div>
                            <div className="subject-content grid md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">What students DO:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-900 font-medium">
                                        <li>Show all work for multi-step problems</li>
                                        <li>Write out strategy before calculating</li>
                                        <li>Create visual representations (number lines, diagrams)</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold mb-4 text-blue-900">What students TELL:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-blue-900 font-medium">
                                        <li>"First I noticed... so I decided to..."</li>
                                        <li>"The tricky part was... but I figured out..."</li>
                                        <li>"I checked my work by..."</li>
                                    </ul>
                                </div>

                                <div className="prompt-box md:col-span-2 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <h4 className="font-bold text-yellow-900 mb-2 uppercase tracking-wide text-sm">Sample prompt</h4>
                                    <p className="text-lg text-slate-900 italic font-medium">"Solve problems 1-5. Pick the one that was most challenging. Show your work, then explain your thinking step-by-step and why you chose that approach."</p>
                                </div>
                            </div>
                        </section>

                        {/* Science Section */}
                        <section className="subject-section">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl" role="img" aria-label="microscope">🔬</span>
                                <h2 className="text-3xl font-bold m-0">Science</h2>
                            </div>
                            <div className="subject-content grid md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">What students DO:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-900 font-medium">
                                        <li>Lab notebooks with observations and data</li>
                                        <li>Diagrams with labels and annotations</li>
                                        <li>Hypothesis testing and evidence recording</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold mb-4 text-blue-900">What students TELL:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-blue-900 font-medium">
                                        <li>"I predicted... but found... which means..."</li>
                                        <li>"The evidence that supports my conclusion is..."</li>
                                        <li>"If I did this experiment again, I would change..."</li>
                                    </ul>
                                </div>

                                <div className="prompt-box md:col-span-2 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <h4 className="font-bold text-yellow-900 mb-2 uppercase tracking-wide text-sm">Sample prompt</h4>
                                    <p className="text-lg text-slate-900 italic font-medium">"After the experiment, record your observations. In your voice explanation, connect what you observed to the scientific concept we studied."</p>
                                </div>
                            </div>
                        </section>

                        {/* Social Studies Section */}
                        <section className="subject-section">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl" role="img" aria-label="globe">🌍</span>
                                <h2 className="text-3xl font-bold m-0">Social Studies</h2>
                            </div>
                            <div className="subject-content grid md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">What students DO:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-900 font-medium">
                                        <li>Primary source analysis with evidence marks</li>
                                        <li>Timeline annotations and cause-effect maps</li>
                                        <li>Comparison charts across time periods or cultures</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold mb-4 text-blue-900">What students TELL:</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-blue-900 font-medium">
                                        <li>"The most significant cause of... was..."</li>
                                        <li>"This primary source reveals... because..."</li>
                                        <li>"I would argue that... and my evidence is..."</li>
                                    </ul>
                                </div>

                                <div className="prompt-box md:col-span-2 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <h4 className="font-bold text-yellow-900 mb-2 uppercase tracking-wide text-sm">Sample prompt</h4>
                                    <p className="text-lg text-slate-900 italic font-medium">"Analyze the historical document. Annotate for perspective, bias, and key claims. In your recording, explain what this source tells us and what it might be leaving out."</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Cross-curricular tip */}
                    <section className="tip-section">
                        <h2>Cross-Curricular Tip</h2>
                        <p>
                            The best DO Show and Tell integrates content knowledge with metacognitive reflection. Regardless of subject, always include:
                        </p>
                        <ul>
                            <li><strong>What did you learn?</strong> (content)</li>
                            <li><strong>How do you know?</strong> (evidence)</li>
                            <li><strong>Where did you struggle?</strong> (reflection)</li>
                        </ul>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <h2>Get Subject-Specific Resources</h2>
                        <p>
                            Download free rubrics, prompt templates, and sentence stems for your subject area.
                        </p>
                        <div className="action-buttons">
                            <Link href="/resources" className="btn btn-primary">
                                Download Resources
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
