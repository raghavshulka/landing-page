import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function EducationFeaturesSection() {
  return (
    <section className="overflow-hidden py-16 md:py-4">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Ensuring Compliance with Data Protection Laws
          </h2>
          <p className="mt-6 text-lg">
            Educational institutions must comply with regulations such as FERPA (Family Educational Rights and Privacy Act), GDPR (General Data Protection Regulation), and state privacy laws. Kentron's eDiscovery platform helps institutions efficiently locate and manage student records, faculty communications, and other sensitive information in response to legal or regulatory requests.
          </p>
          <p className="mt-6 text-lg">
            A university receives a FERPA request from a parent seeking access to their child's educational records. An eDiscovery solution enables administrators to quickly search and retrieve relevant documents while ensuring confidential information is protected.
          </p>
          <p className="mt-6 text-lg">
            As a result, enables faster compliance with legal requests without manually sorting through vast amounts of data. Reduces legal risks associated with non-compliance.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Efficient Handling of Internal Investigations
          </h2>
          <p className="mt-6 text-lg">
            Educational institutions often face internal investigations related to student misconduct, faculty disputes, or financial audits. Traditional methods of collecting and reviewing data can be time-consuming and prone to human error. Kentron's solutions provide automated data collection and analysis, allowing institutions to efficiently manage internal investigations.
          </p>
          <p className="mt-6 text-lg">
            For instance, a college is investigating a plagiarism case involving multiple students. With Kentron's AI-powered platform, administrators can search emails, shared documents, and learning management systems (LMS) data to find relevant communications and evidence.
          </p>
          <p className="mt-6 text-lg">
            Faster resolution of disputes and investigations, accurate, defensible documentation for hearings or legal proceedings.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Streamlined Public Records Requests (FOIA Compliance)
          </h2>
          <p className="mt-6 text-lg">
            Public universities and institutions are subject to Freedom of Information Act (FOIA) requests, requiring them to disclose specific records upon request. Without a centralized eDiscovery system, responding to these requests can be challenging.
          </p>
          <p className="mt-6 text-lg">
            A journalist submits a FOIA request for university expenditure records. Leveraging Kentron's platform can automatically search and filter relevant financial documents, ensuring timely compliance while protecting sensitive information.
          </p>
          <p className="mt-6 text-lg">
            It reduces manual effort in searching for records and ensures transparency while protecting confidential data.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Preventing Data Breaches and Cyber Threats
          </h2>
          <p className="mt-6 text-lg">
            Cybersecurity threats in education are on the rise, with schools and universities being prime targets for data breaches and ransomware attacks. Kentron integrates with cloud platforms like Google Workspace, Slack, and Microsoft 365, providing real-time monitoring and proactive risk management.
          </p>
          <p className="mt-6 text-lg">
            A school IT team detects suspicious file-sharing activities involving sensitive student data. The Kentron can flag the potential breach, allowing administrators to take immediate action to secure the data and prevent unauthorized access.
          </p>
          <p className="mt-6 text-lg">
            Proactive risk management to prevent data leaks reduces response time to security incidents.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Conclusion
          </h2>
          <p className="mt-6 text-lg">
            Educational institutions handle vast amounts of sensitive digital information daily. Kentron's advanced AI-driven solution offers a powerful way to manage compliance, investigations, and data security efficiently. By integrating Kentron into their IT infrastructure, schools and universities can protect data, enhance transparency, and ensure legal compliance with minimal effort.
          </p>
        </div>
      </div>
    </section>
  );
} 