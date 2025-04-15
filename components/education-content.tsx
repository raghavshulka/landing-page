import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function EducationContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto space-y-6 text-center md:space-y-12">
          <h2 className="text-5xl font-medium lg:text-5xl">
            Smart eDiscovery for Education
          </h2>
          <p>
            In today's digital-first environment, educational institutions manage vast data across emails, collaboration tools, and LMS platforms. Kentron's advanced eDiscovery solution streamlines data retrieval, ensures compliance, and enhances incident response.
          </p>
        </div>
        <img
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="education image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Data Governance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Maintain control over digital records, ensuring secure storage, proper retention, and defensible deletion across systems.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Privacy Compliance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Automatically detect and protect sensitive information like student records to meet FERPA, GDPR, and other regulations.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Fast Retrieval</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Quickly locate emails, chats, or documents across platforms for audits, investigations, or information requests.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Incident Response</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Respond swiftly to data breaches or policy violations with real-time alerts and audit-ready documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 