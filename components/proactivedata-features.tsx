import { Search, Shield, Clock, Bell, FileSearch } from 'lucide-react'
import Image from 'next/image'
import image from "@/public/image.png";
import darkimage from "@/public/darkimage.png";

export default function ProactiveDataFeaturesSection() {
    return (
        <section className="py-8 md:pt-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Proactive Data Monitoring</h2>
                            <p className="mt-6 max-w-[290px] sm:max-w-none leading-tight">Organizations concerned with eDiscovery and compliance, proactive data monitoring offers a game-changing approach to safeguarding sensitive data, reducing risks, and ensuring adherence to regulatory frameworks.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Search className="size-5" />
                                Early Identification of Sensitive Data
                            </li>
                            <li>
                                <Shield className="size-5" />
                                Strengthening Data Security
                            </li>
                            <li>
                                <Clock className="size-5" />
                                Enhancing Compliance Readiness
                            </li>
                            <li>
                                <Bell className="size-5" />
                                Preventing Data Leaks and Insider Threats
                            </li>
                            <li>
                                <FileSearch className="size-5" />
                                Improving eDiscovery Efficiency
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-2.5 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative max-w-[290px] mx-auto sm:max-w-none rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src={image} className="rounded-[15px] shadow dark:hidden" alt="data monitoring illustration light" width={1207} height={929} />
                            <Image src={darkimage} className="hidden rounded-[15px] dark:block" alt="data monitoring illustration dark" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 