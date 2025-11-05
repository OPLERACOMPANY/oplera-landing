import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    // ✅ Normalize payload to what N8N expects
    const payload = {
      fullName: form.fullName,
      businessEmail: form.businessEmail,
      phoneNumber: form.phoneNumber ?? "",
      companyName: form.companyName ?? "",
      industry: form.industry ?? "",
      websiteUrl: form.websiteUrl ?? "",
      socialMediaLinks: form.socialMediaLinks ?? "",
      automationGoal: form.automationGoal ?? "",
      preferredChannel: form.preferredChannel ?? [],
      solutionType: form.solutionType ?? "",
      timeline: form.timeline ?? "",
      message: form.message ?? "",
      source: "oplera-website",
      timestamp: new Date().toISOString(),
    };

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!n8nRes.ok) {
      const text = await n8nRes.text();
      return NextResponse.json(
        { error: "N8N webhook failed", details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
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
