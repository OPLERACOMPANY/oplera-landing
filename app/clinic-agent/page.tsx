import { ComingSoonPage } from '@/components/ComingSoonPage'

export default function ClinicAgentPage() {
  return (
    <ComingSoonPage
      icon="💉"
      title="Clinic AI Agent"
      description="Manages patient appointments, responds to inquiries, and automates reminders for clinics & healthcare centers."
      features={[
        'Automated appointment scheduling',
        'Patient inquiry handling',
        'Appointment reminders via SMS/WhatsApp',
        'Medical record integration',
        'Multi-clinic support',
        'HIPAA-compliant data handling',
      ]}
    />
  )
}

