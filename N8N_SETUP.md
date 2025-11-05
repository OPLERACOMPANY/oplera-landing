# N8N Integration Setup Guide

## 🔧 Environment Variables

أضف هذه المتغيرات في ملف `.env.local`:

```env
# N8N Webhook URLs
N8N_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
N8N_DEMO_WEBHOOK_URL=https://your-n8n-instance.com/webhook/demo

# Optional: N8N API credentials (if needed)
N8N_API_KEY=your-api-key
N8N_INSTANCE_URL=https://your-n8n-instance.com
```

## 📝 خطوات الإعداد

### 1. إعداد N8N Workflows

#### Workflow 1: Contact Form Handler
- إنشاء Webhook trigger
- URL: `/webhook/contact`
- Method: POST
- Add nodes for:
  - Data validation
  - Lead scoring
  - Expert routing
  - Email notifications
  - Data storage

#### Workflow 2: Demo Request Handler
- إنشاء Webhook trigger
- URL: `/webhook/demo`
- Method: POST
- Add nodes for:
  - Multi-step validation
  - Lead qualification
  - Priority scoring
  - Sales team routing
  - Calendar integration
  - Follow-up sequences

### 2. تحديث الفورمين في الكود

#### ContactTeamSection.tsx
```typescript
import { submitContactForm } from '@/lib/form-handlers'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const result = await submitContactForm(formData)
  if (result.success) {
    // Show success message
  } else {
    // Show error message
  }
}
```

#### Demo Page (app/demo/page.tsx)
```typescript
import { submitDemoForm } from '@/lib/form-handlers'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (validateStep(4)) {
    const result = await submitDemoForm(formData)
    if (result.success) {
      setIsSubmitted(true)
    }
  }
}
```

### 3. Testing

1. اختبار الـ API endpoints محلياً:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","projectType":"ai-agent"}'
```

2. التحقق من N8N webhook reception
3. اختبار الإشعارات (Email, Slack)
4. اختبار تدفق البيانات

## 🎯 Agent Features Implementation

### Lead Scoring Algorithm
```typescript
// في N8N workflow
const score = {
  timeline: timeline === 'asap' ? 30 : timeline === '1-3months' ? 20 : 10,
  hasWebsite: websiteUrl ? 10 : 0,
  hasPhone: phoneNumber ? 10 : 0,
  channels: preferredChannel.length * 5,
  total: calculateTotal()
}
```

### Expert Routing Logic
```typescript
// في N8N workflow
if (projectType === 'ai-agent' || solutionType.includes('omni')) {
  routeTo = 'omni-support-expert'
} else if (solutionType.includes('order')) {
  routeTo = 'orderbot-specialist'
} else if (projectType === 'workflow') {
  routeTo = 'workflow-automation-expert'
}
```

## 📧 Email Templates

### Customer Confirmation Email
```
Subject: Thank you for contacting Oplera!

Hi {name},

We've received your request for {projectType}.
Our {expertName} will contact you within 24 hours.

Best regards,
Oplera Team
```

### Team Notification Email
```
Subject: New Lead: {companyName} - {priority}

New {projectType} request from {name} ({companyName})
Priority: {priority}
Timeline: {timeline}

View details: [Link to CRM/Dashboard]
```

## 🔗 Integration Examples

### Slack Notification Node
```json
{
  "text": "New Demo Request!",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*{fullName}* from *{companyName}*\n\n*Goal:* {automationGoal}\n*Priority:* {priority}"
      }
    }
  ]
}
```

### Google Sheets Storage
- Sheet: "Leads"
- Columns: Name, Email, Company, Project Type, Score, Priority, Timestamp

## 🚀 Next Steps

1. ✅ Create API routes
2. ⏳ Update form handlers
3. ⏳ Set up N8N workflows
4. ⏳ Configure notifications
5. ⏳ Test end-to-end
6. ⏳ Deploy to production

