import React from 'react'
import EducationContentSection from '@/components/education-content'
import EducationFeaturesSection from '@/components/education-features'
import CallToAction from '@/components/call-to-action'

const page = () => {
  return (
    <div>
        <EducationContentSection />
        <EducationFeaturesSection />
        <CallToAction />
    </div>
  )
}

export default page