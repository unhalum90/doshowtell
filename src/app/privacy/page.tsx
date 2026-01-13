
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for DoShowAndTell.com",
};

export default function PrivacyPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Privacy Policy</h1>
                    <p className="page-subtitle">Last updated: January 2026</p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <section>
                        <h2>Overview</h2>
                        <p>
                            DoShowAndTell.com ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2>Information We Collect</h2>
                        <h3>Information You Provide</h3>
                        <ul>
                            <li><strong>Newsletter subscriptions:</strong> Email address when you subscribe to our newsletter</li>
                            <li><strong>Contact forms:</strong> Name, email, and message content when you reach out</li>
                            <li><strong>Pilot program applications:</strong> Name, email, school, and related professional information</li>
                        </ul>

                        <h3>Automatic Information</h3>
                        <p>We use privacy-focused analytics that do not track you across sites:</p>
                        <ul>
                            <li>Pages visited</li>
                            <li>Referring websites</li>
                            <li>Browser and device type (anonymized)</li>
                            <li>Geographic region (country level only)</li>
                        </ul>
                        <p>We do not use cookies for tracking purposes.</p>
                    </section>

                    <section>
                        <h2>How We Use Your Information</h2>
                        <ul>
                            <li>To send you newsletters and updates (if subscribed)</li>
                            <li>To respond to your inquiries</li>
                            <li>To process pilot program applications</li>
                            <li>To improve our website and content</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Third-Party Services</h2>
                        <p>We use the following third-party services:</p>
                        <ul>
                            <li><strong>MailerLite:</strong> Email newsletter management</li>
                            <li><strong>Vercel:</strong> Website hosting</li>
                            <li><strong>Plausible Analytics:</strong> Privacy-focused analytics (no cookies)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2>Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Unsubscribe from our newsletter at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Children's Privacy</h2>
                        <p>
                            Our website is intended for educators and adults. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>
                            For privacy-related questions, contact us at: <a href="mailto:eric@sayveritas.com">eric@sayveritas.com</a>
                        </p>
                    </section>
                </div>
            </div>

        </article>
    );
}
