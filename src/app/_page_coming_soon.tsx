import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center text-center p-6 space-y-8 max-w-4xl mx-auto">
            {/* Brand / Logo Area */}
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary uppercase">
                DO Show and Tell
            </h2>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground mb-4">
                Coming Soon
            </h1>

            {/* Launch Date */}
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-lg md:text-xl font-medium">
                Launching January 14
            </div>

            {/* Hero Image */}
            <div className="w-full mt-8 shadow-xl rounded-xl overflow-hidden border border-border">
                <Image
                    src="/coming_hero.png"
                    alt="Do Show and Tell Launching Soon"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
        </div>
    );
}
