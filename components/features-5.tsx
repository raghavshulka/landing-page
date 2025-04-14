import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-8 md:pt-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Early Case Assessment</h2>
                            <p className="mt-6  leading-tight">In legal practice, whether you're representing a client in a high-stakes litigation or managing a routine legal matter, the importance of early case assessment (ECA) cannot be overstated. Early case assessment refers to evaluating the facts, evidence, and legal issues of a case as soon as it arises, often before formal litigation or extensive legal proceedings commence. This proactive approach offers a range of benefits that can significantly impact the outcome of a case. Here's why early case assessment is a game-changer in legal practice:</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Informed Decision-Making
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Risk Mitigation
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Streamlined Discovery Process
                                </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-2.5 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
