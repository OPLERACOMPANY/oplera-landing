import { NextRequest, NextResponse } from 'next/server'

// N8N Webhook URL (provided)
const N8N_WEBHOOK_URL = 'https://n8n.oplera.com/webhook/oplera/lead'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, message } = body

    // Validation
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send to N8N
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'contact-form',
        payload: {
          name,
          email,
          company: company || '',
          projectType,
          message: message || '',
        },
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('N8N webhook failed')
    }

    let result: unknown = null
    try { result = await response.json() } catch {}

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        data: result,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}