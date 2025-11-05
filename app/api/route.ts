import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let result = null;
    try { result = await n8nRes.json(); } catch {}

    if (!n8nRes.ok) {
      return NextResponse.json(
        { error: "N8N webhook failed", details: result },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: result },
      { status: 200 }
    );
  } catch (e) {
    console.error("API ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST request" });
}
