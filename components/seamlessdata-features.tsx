import { Activity, DraftingCompass, Mail, Zap, Database, Shield, Clock, Target, FileCheck } from 'lucide-react'
import Image from 'next/image'
import data from "@/public/data.png";

export default function SeamlessDataFeaturesSection() {
    return (
        <section className="py-8 md:pt-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Seamless Data Collection</h2>
                            <p className="mt-6  sm:max-w-none leading-tight">The seamless data collection enables efficient gathering of data from various sources while ensuring accuracy, completeness, and compliance. Automating the data collection process reduces manual efforts, and integration with multiple platforms to provide a streamlined and defensible workflow.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Database className="size-5" />
                                Comprehensive Data Coverage
                            </li>
                            <li>
                                <Shield className="size-5" />
                                Integrity and Authenticity
                            </li>
                            <li>
                                <Clock className="size-5" />
                                Non-Disruptive Collection
                            </li>
                            <li>
                                <Target className="size-5" />
                                Targeted Collection with scalability
                            </li>
                            <li>
                                <FileCheck className="size-5" />
                                Regulatory Compliance
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-2.5 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative max-w-[290px] mx-auto sm:max-w-none rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src={data} className="hidden rounded-[15px] dark:block" alt="data collection illustration dark" width={1207} height={929} />
                            <Image src={data} className="rounded-[15px] shadow dark:hidden" alt="data collection illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 