import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  email: z.string().email("Please enter a valid email address").max(120),
  source: z.string().max(40).optional().default("footer"),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid email" },
        { status: 422 }
      );
    }

    const email = parsed.data.email.trim().toLowerCase();
    const existing = await db.newsletterSubscription.findUnique({
      where: { email },
    });
    if (existing) {
      return NextResponse.json({
        ok: true,
        message: "You're already subscribed to Techi Champs insights.",
      });
    }
    await db.newsletterSubscription.create({
      data: { email, source: parsed.data.source },
    });
    return NextResponse.json({
      ok: true,
      message: "Subscribed. Watch your inbox for the next briefing.",
    });
  } catch (err) {
    console.error("[api/newsletter] error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
