import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
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
    title: "Coming Soon | DO Show and Tell",
    description: "DO Show and Tell is launching soon. An effective formative assessment practice for grades 3-8 classrooms.",
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
                    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
                        {children}
                    </main>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
