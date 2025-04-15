import { LockKeyhole, UserCheck, ShieldCheck, Server, ScrollText, RefreshCcw, Clock, Lock, KeyRound } from 'lucide-react'

export default function SecureFeatures() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Secure By Design</h2>
                    <p>Kentron was developed from the ground up with a focus on security, privacy, and compliance. Engineered to safeguard your data.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <UserCheck className="size-4" />
                            <h3 className="text-sm font-medium">Authentication & Verification</h3>
                        </div>
                        <p className="text-sm">To access Kentron's resources, users must authenticate through your enterprise's identity provider.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4" />
                            <h3 className="text-sm font-medium">Role-Based Access Control</h3>
                        </div>
                        <p className="text-sm">Only displays information that you already have permission to access in the source application.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Server className="size-4" />
                            <h3 className="text-sm font-medium">Single Tenant</h3>
                        </div>
                        <p className="text-sm">Kentron isolates all your data and stores it in a dedicated cloud instance.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ScrollText className="size-4" />
                            <h3 className="text-sm font-medium">Audit Logging</h3>
                        </div>
                        <p className="text-sm">Access detailed audit logs of your organization's use of the Kentron platform.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <RefreshCcw className="size-4" />
                            <h3 className="text-sm font-medium">On-Demand Sync</h3>
                        </div>
                        <p className="text-sm">On-demand content creation empowers users to collect data when they need the most.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Encryption of All Data</h3>
                        </div>
                        <p className="text-sm">All data is encrypted at rest and during transit using SHA-2.</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 