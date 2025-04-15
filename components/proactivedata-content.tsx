export default function ProactiveDataContentSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-6 pb-4 md:space-y-10">
        <div className="grid gap-8">
          <div className="relative space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium md:text-3xl">
                Early Identification of Sensitive Data
              </h3>
              <p className="text-muted-foreground">
                A significant advantage of proactive monitoring is the early identification of sensitive data such as PII, SSNs, and credit card information. Automated processes can scan documents, emails, and databases to detect patterns that match sensitive data types. Once identified, these data elements can be flagged for encryption, restricted access, or other protective measures.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl lg:text-3xl font-medium">Strengthening Data Security</h3>
              <p className="text-muted-foreground">
                Identifying sensitive data early helps organizations implement appropriate security controls, such as encryption, redaction, and role-based access. Proactive monitoring minimizes exposure to data theft, which could result in significant financial and reputational damage.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl lg:text-3xl font-medium">Enhancing Compliance Readiness</h3>
              <p className="text-muted-foreground">
                Many regulations such as HIPAA, GDPR, and PCI require organizations to maintain strict control over sensitive data and provide evidence of compliance efforts during audits. Proactive data monitoring simplifies this by maintaining a real-time inventory of where sensitive data resides and how it is used.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl lg:text-3xl font-medium">Preventing Data Leaks and Insider Threats</h3>
              <p className="text-muted-foreground">
                Proactive monitoring can detect unusual data access patterns and alert security teams before data leaks occur. Early detection can prevent significant damage, whether it's an external breach attempt or an insider threat.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl lg:text-3xl font-medium">
                Improving eDiscovery Efficiency
              </h3>
              <p className="text-muted-foreground">
                Proactive monitoring ensures that sensitive data is well-organized and properly classified, making it easier to locate during eDiscovery requests. This reduces the time and cost of legal discovery and ensures relevant information is available when needed.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl lg:text-3xl font-medium">Kentron for Proactive Data Monitoring</h3>
              
              <div>
                <h4 className="text-xl font-medium">Keyword and Sentiment Monitoring</h4>
                <p className="text-muted-foreground">
                  Continuously monitor data for predefined keywords, phrases, or sentiment shifts across platforms. Alert teams to emerging issues (e.g., negative sentiment regarding a policy) that may require legal or compliance attention.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-medium">Preemptive Legal Hold Alerts</h4>
                <p className="text-muted-foreground">
                  Automatically scans organizational data for potential triggers (e.g., internal investigations, regulatory reviews) and recommends placing relevant data sources under legal hold. This reduces data spoliation risk and proactively ensures compliance with preservation obligations.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-medium">Automated Data Source Monitoring</h4>
                <p className="text-muted-foreground">
                  Continuously monitor connected data sources (e.g., Slack, Google Workspace, JIRA) for new or updated information relevant to ongoing or anticipated cases. Enables early identification of relevant data and reduces the risk of missing critical updates during litigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 