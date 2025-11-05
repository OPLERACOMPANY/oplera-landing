import { NextRequest, NextResponse } from 'next/server'

// N8N Webhook URL (provided)
const N8N_WEBHOOK_URL = 'https://n8n.oplera.com/webhook/oplera/lead'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      businessEmail,
      phoneNumber,
      companyName,
      industry,
      websiteUrl,
      socialMediaLinks,
      automationGoal,
      preferredChannel,
      solutionType,
      timeline,
      message,
    } = body

    // Validation
    if (!fullName || !businessEmail || !companyName || !automationGoal || !solutionType || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Calculate lead score (simple scoring algorithm)
    let leadScore = 0
    if (timeline === 'asap') leadScore += 30
    else if (timeline === '1-3months') leadScore += 20
    else if (timeline === '3-6months') leadScore += 10

    if (websiteUrl) leadScore += 10
    if (phoneNumber) leadScore += 10
    if (preferredChannel && preferredChannel.length > 0) leadScore += 10

    // Determine priority
    const priority = leadScore >= 40 ? 'HIGH' : leadScore >= 20 ? 'MEDIUM' : 'LOW'

    // Send to N8N with enriched data
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'demo-request-form',
        payload: {
          fullName,
          businessEmail,
          phoneNumber: phoneNumber || '',
          companyName,
          industry: industry || '',
          websiteUrl: websiteUrl || '',
          socialMediaLinks: socialMediaLinks || '',
          automationGoal,
          preferredChannel: preferredChannel || [],
          solutionType,
          timeline,
          message: message || '',
        },
        leadScore,
        priority,
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
        message: 'Demo request submitted successfully',
        data: result,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Demo form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit demo request' },
      { status: 500 }
    )
  }
}

