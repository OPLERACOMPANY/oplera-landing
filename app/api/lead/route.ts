import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📤 Sending to N8N:", body);

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await n8nRes.text(); // read raw response
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = text; // fallback if response is not JSON
    }

    console.log("📥 N8N Response:", n8nRes.status, result);

    if (!n8nRes.ok) {
      return NextResponse.json(
        { error: "N8N webhook failed", status: n8nRes.status, result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (e) {
    console.error("❌ API ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error", message: (e as Error).message },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST request" });
}
