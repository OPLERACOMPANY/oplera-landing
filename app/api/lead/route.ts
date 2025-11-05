import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      companyName: form.companyName,
      businessType: form.businessType,
      website: form.website,
      social: form.social,
      automationGoal: form.automationGoal,
      preferredChannel: form.preferredChannel,
      solutionType: form.solutionType,
      timeline: form.timeline,
      projectDescription: form.projectDescription,
      source: "oplera-landing",
      timestamp: new Date().toISOString()
    };

    console.log("🚀 Sending to N8N:", payload);

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const text = await n8nRes.text();
    console.log("📩 N8N:", text);

    if (!n8nRes.ok) {
      return NextResponse.json({ error: "N8N failed", details: text }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (e: any) {
    console.error("❌ API ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST" });
}
