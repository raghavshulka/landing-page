import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="overflow-hidden py-16 md:py-4">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 ">
          <h2 className="text-4xl  font-semibold lg:text-5xl">
            Ensuring Regulatory Compliance
          </h2>
          <p className="mt-6 text-lg">
            Organizations across industries must comply with regulations such as
            GDPR, HIPAA, SEC, FINRA, and CCPA, which require them to store,
            retrieve, and protect sensitive data. Failure to meet these
            compliance requirements can result in hefty fines and reputational
            damage.
          </p>
          <p className="mt-6 text-lg">
            For instance, a healthcare provider must comply with HIPAA
            regulations regarding patient data privacy. Kentron empowers
            compliance teams to quickly locate patient records, communications,
            and audit logs in response to regulatory audits or patient requests.
          </p>
          <p className="mt-6 text-lg">
            Faster compliance with regulatory requests and audits minimizes the
            risk of fines and legal penalties.
          </p>
        </div>
        <div className="relative z-10 ">
          <h2 className="text-4xl  font-semibold lg:text-5xl">
          Streamlining Legal Investigations & Litigation Readiness
          </h2>
          <p className="mt-6 text-lg">
          Organizations must secure, review, and produce relevant data when faced with lawsuits, employee disputes, or corporate fraud investigations. Traditional methods of collecting evidence are manual, time-consuming, and prone to errors. Kentron automates data collection and legal hold management, improving efficiency.
          </p>
          <p className="mt-6 text-lg">
          A financial services firm is involved in a contract dispute with a former client. An AI-powered Kentron platform helps legal teams identify and extract relevant email exchanges, contracts, and meeting transcripts, strengthening their legal position.

          </p>
          <p className="mt-6 text-lg">
          Kentron Speeds up document retrieval while lowering costs and ensures secure, tamper-proof evidence collection.

          </p>
        </div><div className="relative z-10 ">
          <h2 className="text-4xl  font-semibold lg:text-5xl">
          Enhancing Internal Investigations & HR Compliance

          </h2>
          <p className="mt-6 text-lg">
          HR departments and compliance teams often conduct internal investigations related to misconduct, harassment claims, or unethical behavior. Kentron provides powerful search and filtering capabilities to analyze employee communications, shared files, and HR records.

          </p>
          <p className="mt-6 text-lg">
          A large corporation investigates a workplace harassment complaint. With Kentron, HR teams can analyze chat messages, emails, and incident reports to determine whether policies were violated.
          </p>
          <p className="mt-6 text-lg">
          Kentron accelerates workplace investigations while ensuring unbiased, data-driven decision-making.

          </p>
        </div>
        <div className="relative z-10 ">
          <h2 className="text-4xl  font-semibold lg:text-5xl">
            Optimizing Incident Response & Data Breach Management
          </h2>
          <p className="mt-6 text-lg">
            Organizations are increasingly targeted by cyber threats, data breaches, and insider threats. Kentron integrates with security systems to monitor, detect, and investigate potential security incidents on-demand basis.
          </p>
          <p className="mt-6 text-lg">
            An IT team detects unauthorized access to sensitive customer financial data. Using a Kentron platform, security analysts can trace file access history, audit logs, and communications to assess the impact and mitigate risks.
          </p>
          <p className="mt-6 text-lg">
            Rapid incident detection and response reduce the impact of data breaches and financial loss.
          </p>
        </div>
        <div className="relative z-10 ">
          <h2 className="text-4xl  font-semibold lg:text-5xl">
            Conclusion
          </h2>
          <p className="mt-6 text-lg">
            In today's data-driven environment, organizations must be prepared to handle compliance audits, legal disputes, security incidents, and public records requests efficiently. Kentron's AI driven solution empowers businesses to reduce risk, enhance compliance, and improve operational efficiency.
          </p>
          <p className="mt-6 text-lg">
            By adopting the Kentron platform, organizations can future-proof their data management strategies, ensuring agility and compliance in an evolving regulatory landscape.
          </p>
        </div>
        {/* <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-2">
                            <div className="aspect-88/36 relative">
                                <div className="bg-radial-[at_75%_25%] to-background z-1 -inset-17 absolute from-transparent to-75%"></div>
                                <Image src="/mail-upper.png" className="absolute inset-0 z-10" alt="payments illustration dark" width={2797} height={1137} />
                                <Image src="/mail-back.png" className="hidden dark:block" alt="payments illustration dark" width={2797} height={1137} />
                                <Image src="/mail-back-light.png" className="dark:hidden" alt="payments illustration light" width={2797} height={1137} />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div> */}
      </div>
    </section>
  );
}
