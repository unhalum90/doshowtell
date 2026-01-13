import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doshowandtell.com"),
  title: {
    default: "DO Show and Tell | Formative Assessment for Grades 3-8",
    template: "%s | DO Show and Tell",
  },
  description:
    "An effective formative assessment practice for grades 3-8 classrooms. Students DO the work, SHOW their thinking, and TELL what they learned.",
  keywords: [
    "show and tell",
    "formative assessment",
    "grades 3-8 education",
    "oral assessment",
    "student voice",
    "authentic assessment",
    "teacher methodology",
  ],
  authors: [{ name: "Eric Chamberlin" }],
  creator: "Eric Chamberlin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doshowandtell.com",
    siteName: "DO Show and Tell",
    title: "DO Show and Tell | Formative Assessment for Grades 3-8",
    description:
      "An effective formative assessment practice for grades 3-8 classrooms. Made sustainable with modern tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DO Show and Tell - DO the work, SHOW your thinking, TELL what you learned",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DO Show and Tell | Formative Assessment for Grades 3-8",
    description:
      "An effective formative assessment practice for grades 3-8 classrooms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${outfit.variable}`}>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
