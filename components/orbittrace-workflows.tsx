import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FileText, Shield, Brain, User, Lock, Search, Clock, Database } from 'lucide-react'
import { ReactNode } from 'react'

export default function OrbitTraceWorkflows() {
    return (
        <section className="py-8 md:py-4">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Harnessing AI for Smarter Legal Workflows</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid  md:grid-cols-2 lg:grid-cols-3 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-10 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <FileText className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Early Case Assessment (ECA)</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Accelerate Early Case Assessment with in-house eDiscovery, reducing data volumes by 60-70% and enabling smarter, cost-effective legal decisions.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Shield className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Regulatory Response</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Ensure fast, accurate, and compliant regulatory responses with in-house eDiscovery across all communication channels.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Lock className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Proactive Data Monitoring</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Proactively monitor communications with AI-powered in-house eDiscovery to detect risks early, enforce policies, and cut investigation time by up to 70%.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <User className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">PII/PHI Recognition and Audit</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">AI-powered in-house eDiscovery automatically identifies sensitive data like PII and PHI, cutting review time and ensuring fast, compliant audits.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Clock className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Time & Cost Savings</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Automate eDiscovery to cut manual effort by up to 70%, save $25K–$100K per case, and reduce reliance on costly third-party services.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Database className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Data Retention and Governance</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Automate retention policy enforcement across channels, reducing storage costs, legal risk, and ensuring compliance with regulations like SEC, CFTC, GDPR, and HIPAA.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-32 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-10 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
) 