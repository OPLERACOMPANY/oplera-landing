import { ComingSoonPage } from '@/components/ComingSoonPage'

export default function SalesAgentPage() {
  return (
    <ComingSoonPage
      icon="💬"
      title="Sales AI Agent"
      description="Engages new leads, qualifies prospects, and books meetings or demos automatically."
      features={[
        'Automated lead engagement and follow-up',
        'Intelligent prospect qualification',
        'Calendar integration for meeting booking',
        'Personalized conversation flows',
        'Lead scoring and prioritization',
        'CRM integration and data sync',
      ]}
    />
  )
}

