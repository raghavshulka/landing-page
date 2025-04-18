import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto  space-y-6 text-center md:space-y-12">
          <h2 className=" text-5xl font-medium lg:text-5xl">
            Advanced Digital Communications Governance and Compliance
          </h2>
          <p>
            Kentron’s Digital Communications Compliance solution ensures
            compliance, reduces legal risks, and streamlines data management
            across digital communication platforms.
          </p>
        </div>
        <img
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium"> Smart Monitoring</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Continuously track communications across platforms to detect
              policy violations and compliance risks in real time.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Unified Capture</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Seamlessly collect data from email, chat, voice, and video
              channels into a centralized, compliant archive.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium"> Automated Enforcement</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Use AI-driven rules to enforce retention policies, flag sensitive
              content, and ensure regulatory alignment.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium"> Instant Discovery</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Quickly search and retrieve relevant communications for audits,
              investigations, or legal requests with precision{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
