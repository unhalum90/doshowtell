
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About DO Show and Tell",
    description: "Learn about Eric Chamberlin and the movement to bring authentic formative assessment to grades 3-8 classrooms through DO Show and Tell.",
};

export default function AboutPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">About</h1>
                    <p className="page-subtitle">
                        The story behind DO Show and Tell
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">

                    <section className="bio-section">
                        <div className="bio-content">
                            <h2>Meet Eric Chamberlin</h2>
                            <p>
                                Eric Chamberlin is an educator and technologist who has spent two decades at the intersection of pedagogy and innovation. After years of watching teachers struggle to get authentic insights into student understanding, he became convinced there had to be a better way.
                            </p>
                            <p>
                                The "aha moment" came from a simple observation: show and tell worked. In early elementary, we could see exactly who understood and who was confused—just by listening to kids explain their thinking. Then somewhere around 3rd grade, we abandoned oral assessment because it didn't scale.
                            </p>
                            <p>
                                <strong>DO Show and Tell</strong> is the result of asking a simple question: What if technology could make show and tell sustainable for every grade level?
                            </p>
                        </div>
                    </section>

                    <section className="mission-section">
                        <h2>The Mission</h2>
                        <p>
                            DO Show and Tell exists to bring authentic formative assessment to grades 3-8 classrooms. We believe that:
                        </p>
                        <ul>
                            <li><strong>Students should own their learning.</strong> When they articulate what they understand and where they struggled, they become active participants in their education.</li>
                            <li><strong>Teachers deserve real insight.</strong> Not just compliance data, but genuine understanding of what students know and don't know.</li>
                            <li><strong>Oral reasoning matters.</strong> In an age of AI-generated text, the ability to articulate and defend thinking is more important than ever.</li>
                            <li><strong>Great pedagogy should be free.</strong> The methodology is open. The tools are optional. The goal is better learning outcomes, not revenue.</li>
                        </ul>
                    </section>

                    <section className="relationship-section">
                        <h2>The Relationship with SayVeritas</h2>
                        <p>
                            DO Show and Tell is a free, open methodology. You can implement it tomorrow with nothing but a smartphone camera and a voice memo app.
                        </p>
                        <p>
                            <Link href="https://sayveritas.com" target="_blank" rel="noopener">SayVeritas</Link> is a platform that makes the methodology easier to scale. It handles the collection, organization, and review of student artifacts and voice recordings.
                        </p>
                        <p>
                            Think of it this way:
                        </p>
                        <ul>
                            <li><strong>DO Show and Tell</strong> = the pedagogy (free, open, yours)</li>
                            <li><strong>SayVeritas</strong> = a tool to implement it at scale (paid, optional)</li>
                        </ul>
                        <p>
                            Many teachers start with the methodology using free tools, then adopt SayVeritas when they want more structure. Either way works. The goal is that students explain their thinking—not that you buy software.
                        </p>
                    </section>

                    <section className="values-section">
                        <h2>Our Values</h2>
                        <div className="values-grid">
                            <div className="value-item">
                                <h3>🎯 Pedagogy First</h3>
                                <p>Every decision starts with "what's best for learning?" Technology serves pedagogy, not the other way around.</p>
                            </div>
                            <div className="value-item">
                                <h3>🤲 Open and Free</h3>
                                <p>The methodology is Creative Commons. Share it, adapt it, teach it. Great education practices shouldn't have paywalls.</p>
                            </div>
                            <div className="value-item">
                                <h3>🎤 Voice Matters</h3>
                                <p>In an AI age, human voice reveals human understanding. We'll never replace voice with text analysis or AI scoring.</p>
                            </div>
                            <div className="value-item">
                                <h3>⏱️ Teacher Time</h3>
                                <p>If it doesn't save teachers time, it doesn't work. Every feature, every design decision prioritizes teacher efficiency.</p>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section">
                        <h2>Get in Touch</h2>
                        <p>
                            Have questions? Want to share your classroom story? Interested in bringing DO Show and Tell to your school or district?
                        </p>
                        <p>
                            <a href="mailto:eric@sayveritas.com">eric@sayveritas.com</a>
                        </p>
                    </section>

                    <section className="cta-section">
                        <h2>Ready to Start?</h2>
                        <p>
                            Jump in with our free implementation guide, or explore the methodology in depth.
                        </p>
                        <div className="action-buttons">
                            <Link href="/getting-started" className="btn btn-primary">
                                Get Started
                            </Link>
                            <Link href="/what-is-it" className="btn btn-secondary">
                                Learn the Pedagogy
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </article>
    );
}
