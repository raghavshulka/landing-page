import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function LawFirmsContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto space-y-6 text-center md:space-y-12">
          <h2 className="text-5xl font-medium lg:text-5xl">
            Advanced eDiscovery Solutions for Law Firms
          </h2>
          <p>
            Law firms today face mounting pressure to manage growing volumes of digital evidence. 
            Traditional methods fall short in handling modern legal complexities. 
            Advanced eDiscovery solutions offer faster, more accurate, and cost-effective ways to collect, analyze, and review data.
          </p>
        </div>
        <img
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="law firm image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Intelligent Collection</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Quickly gather relevant digital evidence from diverse sources with minimal disruption and maximum accuracy.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Automated Review</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Leverage AI to prioritize, categorize, and surface key documents, drastically reducing manual review time.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Scalable Analysis</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Handle complex, high-volume cases with powerful analytics that uncover patterns, timelines, and key custodians.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Secure Collaboration</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Share case data seamlessly and securely with internal teams or external counsel—no third-party tools required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 