import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl  px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Transform Your Legal Strategy</h2>
                    <p className="mt-4">Early case assessment is more than just a preliminary step—it's a strategic advantage that can influence every aspect of legal practice.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/">
                                <span>Get Started</span>
                            </Link>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <Link href="/">
                                <span>Schedule Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
