import { FileText, Shield, Search, Brain, Database, Cpu } from 'lucide-react'

export default function OrbitTraceFeatures() {
    return (
        <section className="overflow-hidden py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-10">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Why Orbit Trace?</h2>
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold lg:text-3xl">Built with purpose-driven intelligence</h3>
                        <p className="text-muted-foreground mt-4">
                            Purpose-driven intelligence is at the core of Orbit Trace. From classifying complex communication patterns to surfacing critical insights, Orbit Trace adapts to real-world legal workflows—not the other way around
                        </p>
                    </div>
                </div>

                <div className="relative z-10 max-w-2xl mt-8">
                    <h2 className="text-2xl font-semibold lg:text-3xl">Powerful Data Engine, Purpose-Built for Compliance</h2>
                    <p className="mt-4">Orbit Trace is powered by a robust foundation of three core engines:</p>
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                        <li>A Unified Injection Engine to seamlessly ingest multi-modal communication data,</li>
                        <li>An Intelligent Processing Engine to classify, enrich, and contextualize information,</li>
                        <li>And a Predictive Compliance Engine that proactively identifies risks and ensures regulatory alignment.</li>
                    </ul>
                    <p className="mt-4">
                        Together, they form a powerful data backbone that drives accuracy, agility, and trust across every stage of the compliance and eDiscovery lifecycle.
                    </p>
                </div>
                
                <div className="relative z-10 max-w-2xl mt-8">
                    <h2 className="text-2xl font-semibold lg:text-3xl">Effortless Integration. Powerful Intelligence</h2>
                    <p className="mt-4">
                        Seamlessly connect and collect data from all your enterprise applications with zero-code connectors — no complexity, just control.
                    </p>
                    <p className="mt-4">
                        Orbit Trace effortlessly integrates with 15+ Enterprise applications like Slack Enterprise, Google Workspace, JIRA, Confluence, and Zoom Workplace.
                    </p>
                    <p className="mt-4">
                        But it doesn't stop at content. Our enterprise-grade connectors capture rich metadata, emojis, gifs, and identity, — delivering a secure, personalized, and deeply insightful experience built for today's complex eDiscover needs.
                    </p>
                </div>
            </div>
        </section>
    )
} 