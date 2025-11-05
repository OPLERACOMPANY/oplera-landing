import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })

    let result = null
    try { result = await res.json() } catch {}

    if (!res.ok) {
      return NextResponse.json(
        { error: "N8N webhook failed", details: result },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Lead sent to automation", data: result },
      { status: 200 }
    )

  } catch (err) {
    console.error("Lead API error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Reject GET so we don't get 405
export function GET() {
  return NextResponse.json({ message: "Use POST only" }, { status: 200 })
}
