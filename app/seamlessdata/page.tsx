import React from 'react'
import SeamlessDataFeaturesSection from '@/components/seamlessdata-features'
import SeamlessDataContentSection from '@/components/seamlessdata-content'
import CallToAction from '@/components/call-to-action'

const page = () => {
  return (
    <div className="space-y-2">
        <SeamlessDataFeaturesSection />
        <SeamlessDataContentSection />
        <CallToAction />
    </div>
  )
}

export default page