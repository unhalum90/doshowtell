import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ThreeStepsSection } from "@/components/sections/ThreeStepsSection";
import { WhyItWorksSection } from "@/components/sections/WhyItWorksSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ThreeStepsSection />
      <WhyItWorksSection />
      <CTASection />
    </>
  );
}
