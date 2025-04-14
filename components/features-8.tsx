import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Search, Tags, Lock, ChartBar, FileSearch } from 'lucide-react'
import Image from 'next/image'

export default function Features8() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 grid items-center gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Platform Features</h2>
                    <p className="max-w-sm sm:ml-auto">AI-Powered Search & Smart Document Review</p>
                                </div>
                <div className="relative mx-auto mt-12 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Search className="size-4" />
                            <h3 className="text-sm font-medium">AI-Powered Search</h3>
                                </div>
                        <p className="text-muted-foreground text-sm">Accelerate review and automatically classify documents as responsive, non-responsive, privileged, or confidential. Surface key information faster with natural language and keyword search.</p>
                                </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Tags className="size-4" />
                            <h3 className="text-sm font-medium">Automated Tagging & Smart Filters</h3>
                                </div>
                        <p className="text-muted-foreground text-sm">Automatically tag documents and apply intelligent filters to organize and prioritize review tasks.</p>
                                </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Custom LLM Workflows</h3>
                                    </div>
                        <p className="text-muted-foreground text-sm">Enable retrieval-augmented generation (RAG) to extract insights without exposing sensitive data. Benefit from redaction-aware LLM queries, ensuring compliance while unlocking powerful, data-driven results.</p>
                                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Collaboration & Governance</h3>
                                </div>
                        <p className="text-muted-foreground text-sm">Ensure strict control over document access with user-based permissions and secure, private collaboration spaces for internal teams and external counsel.</p>
                                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Data Privacy & Security</h3>
                                </div>
                        <p className="text-muted-foreground text-sm">Sensitive data detection (PII/PHI/IP), Redaction without decryption, Role-based access control for LLM outputs, Privacy Vault for anonymized data storage.</p>
                                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <ChartBar className="size-4" />
                            <h3 className="text-sm font-medium">Insights & Case Strategy</h3>
                                    </div>
                        <p className="text-muted-foreground text-sm">Risk assessment & trend detection via Cognitive Engine. Document clustering & visualization. Predictive tagging and prioritization.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
