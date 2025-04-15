import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function SecureContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Enterprise-grade security designed to protect your data</h2>
                    <div className="space-y-6">
                        <p>Role-Based Access Control: Build-in roles such as Global admin, admin, member, and auditor empower organizations to manage permission at a granular level.</p>
                        <p>
                            Audit Logging: <span className="font-bold">Access detailed audit logs of your organization's use of the Kentron platform.</span> You can export these logs to your SIEM for monitoring and alerts.
                        </p>
                        <p>
                            Retention Controls: Customers maintain complete control over the retention and disposal of their data. All data is encrypted at rest and during transit using SHA-2. Measures are implemented to mitigate the risk of data exfiltration.
                        </p>
                        <p>
                            SSO Support (coming soon): Enhanced authentication options are in development to provide even greater security for enterprise customers.
                        </p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 