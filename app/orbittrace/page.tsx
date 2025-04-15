import React from 'react'
import OrbitTraceContent from '@/components/orbittrace-content'
import OrbitTraceFeatures from '@/components/orbittrace-features'
import OrbitTraceWorkflows from '@/components/orbittrace-workflows'
import OrbitTracePlatform from '@/components/orbittrace-platform'
import CallToAction from '@/components/call-to-action'

const page = () => {
  return (
    <div className='pt-8 md:pt-0'>
      {/* Orbit Trace Introduction */}
      <OrbitTraceContent />
      {/* Why Orbit Trace, Processing Engines & Integration */}
      <OrbitTraceFeatures />
      {/* Harnessing AI for Smarter Legal Workflows */}
      <OrbitTraceWorkflows />
      {/* Platform Features */}
      <OrbitTracePlatform />
      <CallToAction />
    </div>
  )
}

export default page