import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FileText, Shield, Brain, User, Lock, Search } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-8 md:py-16">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Documents review platform for an AI era</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-8 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <FileText className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Early Case Assessment (ECA)</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Quickly identify relevant documents, key custodians, and communication patterns to evaluate a case's merits and risks before the full-scale review begins.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Shield className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Privilege & Confidentiality Review</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Automatically detect attorney-client privileged content and sensitive/confidential documents to reduce risk and ensure legal defensibility.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Lock className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Protect Sensitive Data from LLM Exposure</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Securely detect and redact sensitive data without decryption, ensuring LLM outputs are free of exposed PII. All sensitive information is anonymized and stored in a privacy vault—following best practices pioneered by Apple and Netflix.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <User className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">PII/PHI & Compliance Detection</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Leverage AI to identify and tag personally identifiable information (PII), protected health information (PHI), and other regulated data to meet privacy and compliance requirements (e.g., GDPR, HIPAA).</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Brain className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Responsive vs. Non-Responsive Classification</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Use machine learning models to classify documents as responsive or non-responsive to streamline legal review and reduce manual workload.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-2">
                            <CardDecorator>
                                <Search className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-4 font-medium">Intelligent Search & Smart Querying</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Empower legal teams with advanced lexical and natural language search to surface key documents, facts, and patterns with precision—supporting everything from investigations to litigation prep.</p>
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

