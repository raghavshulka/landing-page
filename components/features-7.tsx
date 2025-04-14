import { FileText, Shield, Search, Brain, Database, Cpu } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-6 px-6 md:space-y-8">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Why Orbit Insight?</h2>
                    <p className="mt-4 text-2xl font-semibold lg:text-3xl">Built FOR Lightning-Fast Performance</p>
                <div className="relative mx-auto mt-4">
                    <p className="text-muted-foreground">
                        Process millions of documents in record time with Orbit Insight's intelligent automation and scalable infrastructure.
                    </p>
                    <p className="text-muted-foreground mt-3">
                        Orbit Insight is engineered to handle high-volume legal data with unmatched speed and precision—eliminating bottlenecks, reducing manual effort, and accelerating time to insight. Whether you're managing large-scale litigation or responding to a regulatory request, Orbit Insight empowers your legal team to move faster, stay compliant, and drive down review costs—all without compromising accuracy or control.
                    </p>
                </div>
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
                            <FileText className="size-4" />
                            <h3 className="text-sm font-medium">Lightning-Fast Processing</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Process 10,000 documents per minute with our advanced AI-powered engine, reducing review time.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Enterprise-Grade Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Built-in data privacy controls and security ensure compliance without compromising performance.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Search className="size-4" />
                            <h3 className="text-sm font-medium">Cost-Effective</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Reduce manual review time by up to 90%, significantly lowering operational costs while improving accuracy.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />
                            <h3 className="text-sm font-medium">Intelligent Insights</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Surface key patterns, trends, and critical data to support better legal strategy and decision-making.</p>
                    </div>
                </div> */}
                
                <div className="relative z-10 max-w-2xl mt-8">
                    <h2 className="text-2xl font-semibold lg:text-3xl">Powerful Document Processing Engines</h2>
                    <p className="mt-2">Orbit Insight is built on a powerful trio of core engines, purposefully designed for high-volume document processing</p>
                </div>
                <div className="relative mx-auto grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 lg:gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Database className="size-4" />
                            <h3 className="text-sm font-medium">Centralized Ingestion Framework</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Seamlessly ingests structured and unstructured documents from diverse sources ensuring comprehensive data capture.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">OrbitIQ Engine</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">The backbone of intelligent document processing, designed to extract, analyze, and enrich data with unparalleled precision. Powered by advanced machine learning algorithms.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />
                            <h3 className="text-sm font-medium">Cognitive Processing Engine</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">This engine analyzes documents to gain a deep understanding and reveal hidden trends, patterns, and critical insights by leveraging advanced AI and machine learning algorithms.</p>
                    </div>
                </div>
                <div className="relative text-center mt-3">
                    <p className="text-muted-foreground">Together, they establish a robust foundation that guarantees precision, speed, and trust at every stage of the discovery journey.</p>
                </div>
                
                <div className="relative z-10 max-w-2xl mt-8">
                    <h2 className="text-2xl font-semibold lg:text-3xl">Effortless Integration. Powerful Intelligence</h2>
                    <p className="mt-2">Seamlessly connect and collect data from all your cloud storage with zero-code connectors — no complexity, just control.</p>
                </div>
                <div className="relative mx-auto mt-4">
                    <p className="text-muted-foreground">
                        Orbit Insight seamlessly connects with all your cloud storage platforms, including OneDrive, Google Drive, Box, Dropbox, Amazon S3, Google Cloud Storage, and Azure Blob Storage—making data collection effortless and scalable.
                    </p>
                    <p className="text-muted-foreground mt-3">
                        No-code integration captures rich metadata, summarizes documents using generative AI (GenAI), and categorizes — Fast-track your document review and discovery process.
                    </p>
                </div>
            </div>
        </section>
    )
}
