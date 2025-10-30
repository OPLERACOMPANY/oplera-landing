import dynamic from 'next/dynamic'
import { OpleraHero } from '@/components/sections/OpleraHero'

// Lazy load sections below the fold for better performance
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection').then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const ApproachSection = dynamic(() => import('@/components/sections/ApproachSection').then(mod => ({ default: mod.ApproachSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[300px]" />,
})

const DemoCTASection = dynamic(() => import('@/components/sections/DemoCTASection').then(mod => ({ default: mod.DemoCTASection })), {
  loading: () => <div className="min-h-[400px]" />,
})

export default function HomePage() {
  return (
    <main>
      <OpleraHero />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsSection />
      <DemoCTASection />
    </main>
  )
}

