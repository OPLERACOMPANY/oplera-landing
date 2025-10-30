import { ComingSoonPage } from '@/components/ComingSoonPage'

export default function VoiceAgentPage() {
  return (
    <ComingSoonPage
      icon="🎙"
      title="AI Voice Agent"
      description="Handles phone calls and voice messages using real speech recognition and intent understanding."
      features={[
        'Natural speech recognition',
        'Multi-language voice support',
        'Intent detection and routing',
        'Voice-to-text transcription',
        'Automated call handling',
        'Integration with phone systems',
      ]}
    />
  )
}

