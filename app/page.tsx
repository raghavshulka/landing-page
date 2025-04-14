import HeroSection from "@/components/hero-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Features1 from "@/components/features-1";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Integration from "@/components/integrations-4";
export default function Home() {
  return (
    <div>
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <Features1 />
      <Integration />
      <CallToAction />
      <Footer />
    </div>
  );
}
