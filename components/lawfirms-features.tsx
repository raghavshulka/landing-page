import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function LawFirmsFeaturesSection() {
  return (
    <section className="overflow-hidden py-16 md:py-4">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Faster Data Collection and Processing
          </h2>
          <p className="mt-6 text-lg">
            Kentron leverages AI to automate data collection and process vast amounts of structured, unstructured, and semi-structured data. Whether dealing with emails, Slack messages, or Confluence pages, Kentron's integrates directly with cloud-based sources and reduces manual collection efforts.
          </p>
          <p className="mt-6 text-lg">
            For instance, a litigation firm handling a corporate fraud case can use Kentron's platform to collect relevant Slack conversations and financial records in real-time—saving weeks of manual document retrieval.
          </p>
          <p className="mt-6 text-lg">
            Speeding up data collection helps law firms meet tight case deadlines while reducing labor-intensive tasks.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Cost Reduction and Predictable Pricing
          </h2>
          <p className="mt-6 text-lg">
            Traditional discovery can be costly due to manual document review and extensive IT support. Kentron's AI-driven advanced eDiscovery solutions reduce costs through automation, AI-powered document review, and cloud-based storage, which eliminates expensive infrastructure investments.
          </p>
          <p className="mt-6 text-lg">
            A mid-sized firm managing a class-action lawsuit can use predictive coding (TAR) to automatically categorize and prioritize relevant documents, reducing attorney review hours by 50%.
          </p>
          <p className="mt-6 text-lg">
            Law firms can more effectively control costs and offer clients predictable pricing models, making their services more competitive.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Enhanced Accuracy with AI-Powered Review
          </h2>
          <p className="mt-6 text-lg">
            Kentron's AI and machine learning algorithms significantly improve document review accuracy by identifying patterns, detecting key entities, and flagging privileged or sensitive information.
          </p>
          <p className="mt-6 text-lg">
            A law firm representing a financial institution in a regulatory investigation can use AI-powered entity recognition to identify risky communications and ensure compliance with legal requirements.
          </p>
          <p className="mt-6 text-lg">
            Reducing human error and increasing the accuracy of document review leads to stronger case strategies and better client outcomes.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Compliance and Risk Management
          </h2>
          <p className="mt-6 text-lg">
            Law firms must ensure that their eDiscovery processes align with industry regulations, including GDPR, HIPAA, and SEC compliance. Kenton offers built-in compliance controls, various roles to manage access, and audit logs.
          </p>
          <p className="mt-6 text-lg">
            A firm advising a multinational client on a data breach can quickly identify and classify personal data across different jurisdictions to meet regulatory reporting deadlines. Kentron offers over 150 data classifiers out of the box such as PII, credit card number, passport number, etc.
          </p>
          <p className="mt-6 text-lg">
            Automated compliance features help law firms mitigate legal risks and avoid penalties.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Conclusion
          </h2>
          <p className="mt-6 text-lg">
            Kentron's advanced eDiscovery solutions empower law firms with cutting-edge technology to streamline workflows, reduce costs, and improve accuracy in legal proceedings. By leveraging AI, automation, and cloud integrations, law firms can enhance their competitive advantage, deliver better client outcomes, and stay ahead in an increasingly digital legal environment.
          </p>
        </div>
      </div>
    </section>
  );
} 