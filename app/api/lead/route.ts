import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.oplera.com/webhook/oplera/lead";

export async function POST(req: NextRequest) {
  try {
<<<<<<< HEAD
    const raw = await req.text(); // 👈 نحصل النص الخام بدل JSON مباشرة
    console.log("📦 Raw Body:", raw);

    if (!raw) {
      console.error("❌ Empty body received");
      return NextResponse.json({ error: "Empty request body" }, { status: 400 });
    }

    let body: any;
    try {
      body = JSON.parse(raw);
    } catch (err) {
      console.error("❌ Invalid JSON body:", err);
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
    }

    console.log("📤 Sending to n8n:", body);
=======
    const body = await req.json();
    console.log("📤 Sending to N8N:", body);
>>>>>>> 574c86ccaed6eb39c651c76a39d74059a379e083

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

<<<<<<< HEAD
    const text = await n8nRes.text();
=======
    const text = await n8nRes.text(); // read raw response
>>>>>>> 574c86ccaed6eb39c651c76a39d74059a379e083
    let result;
    try {
      result = JSON.parse(text);
    } catch {
<<<<<<< HEAD
      result = text;
    }

    console.log("📥 n8n Response:", n8nRes.status, result);
=======
      result = text; // fallback if response is not JSON
    }

    console.log("📥 N8N Response:", n8nRes.status, result);
>>>>>>> 574c86ccaed6eb39c651c76a39d74059a379e083

    if (!n8nRes.ok) {
      return NextResponse.json(
        { error: "N8N webhook failed", status: n8nRes.status, result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, result }, { status: 200 });
<<<<<<< HEAD
  } catch (e: any) {
    console.error("🔥 API ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error", message: e.message },
=======
  } catch (e) {
    console.error("❌ API ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error", message: (e as Error).message },
>>>>>>> 574c86ccaed6eb39c651c76a39d74059a379e083
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST request" });
}
