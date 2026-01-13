
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why SayVeritas",
    description: "Compare manual DO Show and Tell implementation with the SayVeritas platform. See how SayVeritas saves time and provides deeper insights.",
};

export default function WhySayVeritasPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Why SayVeritas?</h1>
                    <p className="page-subtitle">
                        Manual implementation works. A purpose-built platform works faster.
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <p className="intro-text">
                        DO Show and Tell is free and open. You can implement it with Google Forms, email, or any LMS. SayVeritas is an optional platform that makes the process faster and more powerful.
                    </p>

                    {/* Comparison Table */}
                    <section className="comparison-section">
                        <h2>Manual vs. SayVeritas</h2>
                        <div className="table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Manual / DIY</th>
                                        <th>SayVeritas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Collect photo artifacts</td>
                                        <td>✓ Yes (Forms, email, LMS)</td>
                                        <td>✓ Yes (one-tap upload)</td>
                                    </tr>
                                    <tr>
                                        <td>Collect voice recordings</td>
                                        <td>✓ Yes (separate files)</td>
                                        <td>✓ Yes (in-app recorder)</td>
                                    </tr>
                                    <tr>
                                        <td>Variable speed playback</td>
                                        <td>✗ No (need VLC)</td>
                                        <td>✓ Yes (0.5x - 2x)</td>
                                    </tr>
                                    <tr>
                                        <td>Review dashboard</td>
                                        <td>✗ No (spreadsheets/folders)</td>
                                        <td>✓ Yes (by class, assignment)</td>
                                    </tr>
                                    <tr>
                                        <td>Pattern identification</td>
                                        <td>Manual notes</td>
                                        <td>Visual dashboards</td>
                                    </tr>
                                    <tr>
                                        <td>Student progress tracking</td>
                                        <td>Manual tracking</td>
                                        <td>Built-in over time</td>
                                    </tr>
                                    <tr>
                                        <td>AI transcription assist</td>
                                        <td>✗ No</td>
                                        <td>✓ Yes (optional)</td>
                                    </tr>
                                    <tr>
                                        <td>Quick feedback tools</td>
                                        <td>Email/LMS comments</td>
                                        <td>In-app stamps & notes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Time Savings */}
                    <section className="savings-section">
                        <h2>Time Savings</h2>
                        <div className="savings-grid">
                            <div className="savings-item">
                                <div className="savings-label">Manual review</div>
                                <div className="savings-value manual">~45 min</div>
                                <div className="savings-desc">Per class of 30 students</div>
                            </div>
                            <div className="savings-item">
                                <div className="savings-label">SayVeritas review</div>
                                <div className="savings-value sayveritas">~20 min</div>
                                <div className="savings-desc">Same class, same depth</div>
                            </div>
                        </div>
                        <p className="savings-note">
                            The difference: built-in speed control, no file management, streamlined interface, and pattern dashboards that show class trends at a glance.
                        </p>
                    </section>

                    {/* Who Should Use What */}
                    <section className="who-section">
                        <h2>Which Is Right for You?</h2>
                        <div className="who-grid">
                            <div className="who-card diy">
                                <h3>Stay with DIY if...</h3>
                                <ul>
                                    <li>You're trying DO Show and Tell for the first time</li>
                                    <li>You do 1-2 assignments per month</li>
                                    <li>You're comfortable with manual organization</li>
                                    <li>Budget is the primary constraint</li>
                                </ul>
                            </div>
                            <div className="who-card platform">
                                <h3>Consider SayVeritas if...</h3>
                                <ul>
                                    <li>You're using DO Show and Tell weekly</li>
                                    <li>You want faster review with speed control</li>
                                    <li>You need class-wide pattern insights</li>
                                    <li>Multiple teachers are implementing school-wide</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pricing */}
                    <section className="pricing-section">
                        <h2>Pricing</h2>
                        <p>
                            SayVeritas is priced for classroom sustainability:
                        </p>
                        <div className="price-card">
                            <div className="price">$35</div>
                            <div className="price-period">per student / year</div>
                            <div className="price-note">Unlimited assignments, all features included</div>
                        </div>
                        <p className="pricing-details">
                            Many schools fund through Title I, instructional improvement, or assessment budgets. Contact us for district pricing.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="cta-section">
                        <h2>Ready to Try?</h2>
                        <p>
                            Start with a free 30-day trial. No credit card required.
                        </p>
                        <div className="action-buttons">
                            <Link
                                href="https://sayveritas.com/trial"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener"
                            >
                                Start Free Trial →
                            </Link>
                            <Link href="/getting-started" className="btn btn-secondary">
                                Or Start with DIY
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </article>
    );
}
