import { ComingSoonPage } from '@/components/ComingSoonPage'

export default function CRMAssistantPage() {
  return (
    <ComingSoonPage
      icon="📊"
      title="CRM Assistant Agent"
      description="Syncs customer data, updates pipelines, and keeps your CRM always up-to-date through automation."
      features={[
        'Real-time customer data synchronization',
        'Automatic pipeline updates',
        'Data entry automation',
        'Duplicate detection and merging',
        'Custom field mapping',
        'Works with popular CRM platforms',
      ]}
    />
  )
}

