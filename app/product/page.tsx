import React from 'react'
import Content7 from '@/components/content-7'
import Features7 from '@/components/features-7'
import Features2 from '@/components/features-2'
import Features6 from '@/components/features-6'
import { HeroHeader } from '@/components/hero5-header'
import Footer from '@/components/footer'
import CallToAction from '@/components/call-to-action'
const page = () => {
  return (
    <div>
      {/* Orbit Insight Introduction */}
      <Content7 />
      {/* Why Orbit Insight, Processing Engines & Integration */}
      <Features7 />
      {/* Documents review platform for an AI era */}
      <Features2 />
      {/* Platform Features */}
      <Features6 />
      <CallToAction />
    </div>
  )
}

export default page