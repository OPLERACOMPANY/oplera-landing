/**
 * Form submission handlers for N8N integration
 */

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  message?: string
}

export interface DemoFormData {
  fullName: string
  businessEmail: string
  phoneNumber?: string
  companyName: string
  industry?: string
  websiteUrl?: string
  socialMediaLinks?: string
  automationGoal: string
  preferredChannel?: string[]
  solutionType: string
  timeline: string
  message?: string
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form')
    }

    return {
      success: true,
      message: result.message || 'Thank you! We will contact you soon.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred. Please try again.',
    }
  }
}

export async function submitDemoForm(data: DemoFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit demo request')
    }

    return {
      success: true,
      message: result.message || 'Thank you! We will contact you soon to schedule your demo.',
    }
  } catch (error) {
    console.error('Demo form submission error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred. Please try again.',
    }
  }
}

