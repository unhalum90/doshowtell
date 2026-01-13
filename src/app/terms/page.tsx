
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description: "Terms of use for DoShowAndTell.com",
};

export default function TermsPage() {
    return (
        <article className="page-content">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Terms of Use</h1>
                    <p className="page-subtitle">Last updated: January 2026</p>
                </div>
            </header>

            <div className="container">
                <div className="main-content">
                    <section>
                        <h2>Acceptance of Terms</h2>
                        <p>
                            By accessing and using DoShowAndTell.com ("the Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
                        </p>
                    </section>

                    <section>
                        <h2>Use of Content</h2>
                        <p>
                            The educational methodology, guides, and written content on this Site are provided under a <strong>Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)</strong>. This means you are free to:
                        </p>
                        <ul>
                            <li><strong>Share:</strong> Copy and redistribute the material in any medium or format</li>
                            <li><strong>Adapt:</strong> Remix, transform, and build upon the material</li>
                        </ul>
                        <p>Under the following terms:</p>
                        <ul>
                            <li><strong>Attribution:</strong> You must give appropriate credit to DO Show and Tell</li>
                            <li><strong>NonCommercial:</strong> You may not use the material for commercial purposes</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Downloadable Resources</h2>
                        <p>
                            PDFs, templates, rubrics, and other downloadable resources are licensed under the same CC BY-NC 4.0 license. You may use these in your classroom and share them with colleagues, but you may not sell them or include them in commercial products.
                        </p>
                    </section>

                    <section>
                        <h2>Intellectual Property</h2>
                        <p>
                            The DO Show and Tell name, logo, and visual branding are proprietary and may not be used without permission. The CC BY-NC license applies to educational content only, not to branding or trademarks.
                        </p>
                    </section>

                    <section>
                        <h2>User Submissions</h2>
                        <p>
                            By submitting content to us (such as teacher stories or pilot program applications), you grant us permission to use, edit, and share that content for promotional and educational purposes. You retain ownership of your submissions.
                        </p>
                    </section>

                    <section>
                        <h2>Disclaimer</h2>
                        <p>
                            The Site and its content are provided "as is" without warranties of any kind. We make no guarantees about the accuracy, completeness, or suitability of the information for any particular purpose.
                        </p>
                    </section>

                    <section>
                        <h2>Limitation of Liability</h2>
                        <p>
                            We shall not be liable for any damages arising from the use of this Site or the implementation of the DO Show and Tell methodology in your classroom.
                        </p>
                    </section>

                    <section>
                        <h2>External Links</h2>
                        <p>
                            This Site may contain links to third-party websites. We are not responsible for the content or practices of those sites.
                        </p>
                    </section>

                    <section>
                        <h2>Changes to Terms</h2>
                        <p>
                            We may update these Terms of Use from time to time. Continued use of the Site after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2>Contact</h2>
                        <p>
                            For questions about these Terms, contact us at: <a href="mailto:eric@sayveritas.com">eric@sayveritas.com</a>
                        </p>
                    </section>
                </div>
            </div>

        </article>
    );
}
