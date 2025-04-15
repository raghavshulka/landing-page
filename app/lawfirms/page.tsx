import React from 'react'
import LawFirmsContentSection from '@/components/lawfirms-content'
import LawFirmsFeaturesSection from '@/components/lawfirms-features'
import CallToAction from '@/components/call-to-action'

const page = () => {
  return (
    <div>
        <LawFirmsContentSection />
        <LawFirmsFeaturesSection />
        <CallToAction />
    </div>
  )
}

export default page