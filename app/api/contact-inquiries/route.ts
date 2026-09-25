import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const goals = new Set(["Increase revenue", "Expand to new regions", "Improve ROAS", "Grow organic traffic", "Web development", "Software development", "AI agents development"]);
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 }); }
  const name = text(body.name, 120);
  const workEmail = text(body.workEmail, 320).toLowerCase();
  const company = text(body.company, 160);
  const primaryGoal = text(body.primaryGoal, 80);
  const message = text(body.message, 3000);
  if (!name || !/^\S+@\S+\.\S+$/.test(workEmail)) return NextResponse.json({ error: "Enter your name and a valid work email." }, { status: 400 });
  if (primaryGoal && !goals.has(primaryGoal)) return NextResponse.json({ error: "Choose a valid primary goal." }, { status: 400 });
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return NextResponse.json({ error: "The contact form is temporarily unavailable. Please try again later." }, { status: 503 });
  const supabase = createClient(url, serviceRoleKey, { auth: { autoRefreshToken: false, persistSession: false } });
  const { error } = await supabase.from("contact_inquiries").insert({ name, work_email: workEmail, company: company || null, primary_goal: primaryGoal || null, message: message || null });
  if (error) { console.error("Failed to save contact inquiry", error.message); return NextResponse.json({ error: "We could not send your inquiry. Please try again." }, { status: 500 }); }
  return NextResponse.json({ message: "Thanks — we’ll be in touch shortly." }, { status: 201 });
}
