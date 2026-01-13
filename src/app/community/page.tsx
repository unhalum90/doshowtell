
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Teacher Community",
    description: "Join the DO Show and Tell teacher community. Share your classroom stories, connect with other educators, and learn from real implementations.",
};

export default function CommunityPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Teacher Community</h1>
                    <p className="page-subtitle">
                        Connect, share, and learn from educators implementing DO Show and Tell
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">

                    <section className="coming-soon">
                        <div className="coming-soon-content">
                            <span className="badge">Coming Soon</span>
                            <h2>We're Building Something Special</h2>
                            <p>
                                The DO Show and Tell community is launching soon. We're gathering teacher stories, creating discussion spaces, and building resources based on real classroom implementation.
                            </p>
                        </div>
                    </section>

                    <section className="pilot-section">
                        <h2>Join Our Pilot Program</h2>
                        <p>
                            Be among the first teachers to shape DO Show and Tell. Pilot participants get:
                        </p>
                        <ul>
                            <li>Early access to resources and tools</li>
                            <li>Direct connection with Eric Chamberlin</li>
                            <li>Opportunity to feature your classroom stories</li>
                            <li>Input on future development</li>
                        </ul>

                        <form className="pilot-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School / District</label>
                                <input type="text" id="school" name="school" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="grade">Grade Level(s) You Teach</label>
                                <input type="text" id="grade" name="grade" placeholder="e.g., 5th grade, Middle School ELA" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="interest">What interests you about DO Show and Tell?</label>
                                <textarea id="interest" name="interest" rows={4} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Apply to Join Pilot
                            </button>
                        </form>
                    </section>

                    <section className="share-section">
                        <h2>Already Using DO Show and Tell?</h2>
                        <p>
                            We'd love to hear your story. How has it worked in your classroom? What surprised you? What challenges did you face?
                        </p>
                        <Link href="mailto:eric@sayveritas.com?subject=My DO Show and Tell Story" className="btn btn-secondary">
                            Share Your Story →
                        </Link>
                    </section>

                    <section className="cta-section">
                        <h2>Not Ready to Join?</h2>
                        <p>
                            Explore the methodology at your own pace. Everything you need to get started is free.
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
