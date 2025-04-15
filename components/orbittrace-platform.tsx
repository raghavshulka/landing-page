import { Search, Tags, Lock, Shield, ChartBar, Database } from 'lucide-react'

export default function OrbitTracePlatform() {
    return (
        <section className="py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-6 px-6">
                <div className="relative z-10 grid items-center gap-4 md:gap-6">
                    <h2 className="text-4xl text-center font-semibold mb-6">Platform Features</h2>
                </div>
                <div className="relative mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Advanced data protection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Confident collaboration with audit logs and access controls.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">AI-Driven Privilege Detection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Automated privilege analysis using machine learning</p>
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
                            <Database className="size-4" />
                            <h3 className="text-sm font-medium">Smart Export</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Export data with precision and compliance, tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 