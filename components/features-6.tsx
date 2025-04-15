import { Search, Tags, Lock, Users, Shield, ChartBar, FileSearch } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-6 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-4xl font-semibold">Platform Features</h2>
                    {/* <p className="max-w-sm sm:ml-auto">AI-Powered Search & Smart Document Review</p> */}
                </div>
                {/* <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-88/36 relative">
                        <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        <Image src="/mail-upper.png" className="absolute inset-0 z-10" alt="payments illustration dark" width={2797} height={1137} />
                        <Image src="/mail-back.png" className="hidden dark:block" alt="payments illustration dark" width={2797} height={1137} />
                        <Image src="/mail-back-light.png" className="dark:hidden" alt="payments illustration light" width={2797} height={1137} />
                    </div>
                </div> */}
                <div className="relative mx-auto grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-3 lg:gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Advanced Data Protection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Confident collaboration with audit logs and access controls.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">AI-Driven Privilege Detection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Automated privilege analysis using machine learning.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ChartBar className="size-4" />
                            <h3 className="text-sm font-medium">Insightful Intelligence</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Actionable insights powered by advanced analytics.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Search className="size-4" />
                            <h3 className="text-sm font-medium">Intelligence Search</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Seamlessly integrate text, voice, and video data with intuitive AI processing.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Tags className="size-4" />
                            <h3 className="text-sm font-medium">Precision Classification</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Share case data with law firms or internal stakeholders securely—no external tools required.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FileSearch className="size-4" />
                            <h3 className="text-sm font-medium">Smart Export</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Export data with precision and compliance, tailored to your needs.</p>
                    </div>
                </div>
                <div className="relative text-center mt-2">
                    <p className="text-muted-foreground">Together, they establish a robust foundation that guarantees precision, speed, and trust at every stage of the discovery journey.</p>
                </div>
            </div>
        </section>
    )
}
