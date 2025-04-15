import React from 'react'
import ProactiveDataFeaturesSection from '@/components/proactivedata-features'
import ProactiveDataContentSection from '@/components/proactivedata-content'
import CallToAction from '@/components/call-to-action'

const page = () => {
  return (
    <div className="space-y-2">
        <ProactiveDataFeaturesSection />
        <ProactiveDataContentSection />
        <CallToAction />
    </div>
  )
}

export default page