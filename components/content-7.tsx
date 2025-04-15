import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-6 px-6 md:space-y-8">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Orbit Insight
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="relative space-y-4">
            <p className="max-w-[290px] sm:max-w-none text-muted-foreground">
              AI-Powered Documents Review Platform for Modern Legal Teams
            </p>
            <p className="max-w-[290px] sm:max-w-none text-md font-semibold">
              Revolutionizing Legal Documents Review: AI-Powered Speed,
              Accuracy, and Cost Efficiency at Scale
            </p>
            <p className="max-w-[290px] sm:max-w-none text-muted-foreground">
              Orbit Insight is an AI-powered Document Review Platform that is
              purpose-built for insurance agencies, corporate legal departments,
              law firms, and legal service providers seeking speed, scalability,
              and cost-efficiency in eDiscovery.
            </p>
            <p className="max-w-[290px] sm:max-w-none text-muted-foreground">
              Designed to process millions of documents with lightning-fast
              performance (10,000 doc/min), the platform leverages advanced
              machine learning to surface relevant insights, reduce manual
              review time, and streamline complex legal workflows.
            </p>

            {/* <p className="text-muted-foreground">
              With built-in data privacy controls, enterprise-grade security,
              and seamless integration into existing legal ecosystems, the
              platform empowers legal teams to accelerate case timelines,
              improve accuracy, and minimize costs—without compromising
              compliance or control.
            </p> */}

            <div className="grid grid-cols-2 gap-3 pt-2 sm:gap-4">
              {/* <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Lightning-Fast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Process millions of documents with lightning-fast performance (10,000 doc/min), dramatically reducing review time and costs.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">AI-Powered</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Advanced machine learning surfaces relevant insights, reduces manual review time, and streamlines complex legal workflows with precision.
                </p>
              </div> */}
            </div>
          </div>
          <div className="relative mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative max-w-[290px] mx-auto sm:max-w-none rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/exercice-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="Orbit Trace platform illustration dark"
                width={1206}
                height={912}
              />
              <Image
                src="/exercice.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="Orbit Trace platform illustration light"
                width={1206}
                height={912}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
