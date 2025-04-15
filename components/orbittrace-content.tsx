import { Cpu, Zap } from "lucide-react";
import Image from "next/image";
import image from "@/public/image.png";
import darkimage from "@/public/darkimage.png";

export default function OrbitTraceContent() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 md:space-y-8">
        <h2 className="relative z-10 max-w-xl text-3xl sm:text-4xl font-medium lg:text-5xl">
          Orbit Trace
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="relative space-y-3 sm:space-y-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              Next-gen eDiscovery is trusted by the world's leading legal innovators.
            </p>
            <p className="text-sm sm:text-md font-semibold">
              Redefining eDiscovery with AI — a platform built to scale with the demands of modern enterprises.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
            Orbit Trace, powered by Kentron Intelligence, is a modern eDiscovery and legal hold solution built for forward-thinking enterprises. It combines advanced compliance features, AI-driven automation, and a user-friendly experience to streamline legal workflows, reduce costs, and scale effortlessly—from small matters to complex investigations.
            </p>
            {/* <p className="text-muted-foreground mt-6">
              Streamline legal workflows from day one— Powered by intelligent, easy-to-use interfaces, advanced analytics, and embedded AI drives every eDiscovery and legal hold process. Whether handling small matters or enterprise-scale investigations, legal ops teams can quickly get up and running with "no-code" connectors, seamless data management, collaborative workspace, and end-to-end control in a secure, scalable environment.
            </p> */}

            {/* <div className="grid grid-cols-2 gap-3 pt-2 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Streamlined Workflows</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Powered by intelligent, easy-to-use interfaces and advanced analytics for every eDiscovery and legal hold process.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">End-to-End Control</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Quick setup with "no-code" connectors, seamless data management, and collaborative workspace in a secure environment.
                </p>
              </div>
            </div> */}
          </div>
          <div className="relative mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src={darkimage}
                className="hidden rounded-[15px] dark:block"
                alt="Orbit Trace platform illustration dark"
                width={1206}
                height={912}
              />
              <Image
                src={image}
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
