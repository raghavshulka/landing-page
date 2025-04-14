import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Kentron for Early Case Assessment</h2>
                    <p className="mt-4">Transforming chaotic datasets into organized, actionable insights, streamlining litigation and compliance processes.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Precise Identification</h3>
                        </CardHeader>

                        <CardContent>
                            
                            <p className="text-sm">Kentron’s advanced search capabilities allow users to quickly pinpoint relevant data across vast data sources such as Slack, JIRA, Confluence, Teams, etc. In addition, Kentron’s auto-classification feature can identify and label over 150 data into predefined categories such as personal identifiable information (PII), credit card number, name, age, passport, etc. 
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">AI-Powered Insights</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Incorporating natural language processing (NLP) and machine learning helps surface patterns, key custodians, and communication trends without manually sifting through data. Kentron automatically also identifies and categorizes over 100 file types of business plans, contract agreements, compensation policies, etc. </p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Pre-Review Culling</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Deduplication, threading, and filtering by metadata (e.g., date ranges, participants, and file types) significantly reduce data volume, lowering review costs.
                            </p>
                            <p className="mt-3 text-sm">By leveraging Kentron’s robust data classification feature, you can transform chaotic datasets into organized, actionable insights, streamlining the litigation and compliance processes.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
)
