import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Please enter a valid email address").max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(2, "Please choose a service").max(60),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
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
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: firstError?.message ?? "Validation failed" },
        { status: 422 }
      );
    }

    const lead = await db.consultationLead.create({
      data: {
        fullName: parsed.data.fullName.trim(),
        email: parsed.data.email.trim().toLowerCase(),
        phone: parsed.data.phone?.trim() || null,
        company: parsed.data.company?.trim() || null,
        service: parsed.data.service,
        budget: parsed.data.budget || null,
        message: parsed.data.message?.trim() || null,
      },
    });

    return NextResponse.json({
      ok: true,
      id: lead.id,
      message:
        "Thank you. A Techi Champs strategist will reach out within one business day.",
    });
  } catch (err) {
    console.error("[api/consultation] error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
