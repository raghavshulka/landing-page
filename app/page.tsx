import HeroSection from "@/components/hero-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Features1 from "@/components/features-1";
import CallToAction from "@/components/call-to-action";
import Integration from "@/components/integrations-4";
export default function Home() {
  return (
    <div>
      <div className="absolute md:top-4 md:right-4 top-4  right-0 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <Features1 />
      <Integration />
      <CallToAction />
    </div>
  );
}
