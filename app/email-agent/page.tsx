import { ComingSoonPage } from '@/components/ComingSoonPage'

export default function EmailAgentPage() {
  return (
    <ComingSoonPage
      icon="📩"
      title="Email AI Agent"
      description="Reads, classifies, and replies to incoming emails — from client inquiries to support requests — fully automated."
      features={[
        'Automatic email classification and routing',
        'Smart reply generation based on context',
        'Multi-language email support',
        'Integration with major email providers',
        'Custom response templates',
        'Priority detection and escalation',
      ]}
    />
  )
}

