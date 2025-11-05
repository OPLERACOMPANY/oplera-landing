import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // عشان يمنع الـ Edge Runtime
const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  console.log("🚀 /api/lead invoked");

  try {
    const raw = await req.text();
    console.log("📦 RAW BODY:", raw);

    if (!raw) {
      console.error("❌ Empty request body");
      return NextResponse.json({ error: "Empty request body" }, { status: 400 });
    }

    let body: any;
    try {
      body = JSON.parse(raw);
    } catch (err) {
      console.error("❌ Invalid JSON:", err);
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
    }

    console.log("📤 Sending to N8N:", N8N_WEBHOOK_URL);

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await n8nRes.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = text;
    }

    console.log("📥 N8N response:", n8nRes.status, result);

    if (!n8nRes.ok) {
      return NextResponse.json(
        { error: "N8N webhook failed", status: n8nRes.status, result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (e: any) {
    console.error("🔥 API ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error", message: e.message },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST request" });
}
