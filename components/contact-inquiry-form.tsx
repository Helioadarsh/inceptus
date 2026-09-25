"use client";

import { FormEvent, useState } from "react";

const goals = ["Increase revenue", "Expand to new regions", "Improve ROAS", "Grow organic traffic", "Web development", "Software development", "AI agents development"];
type Status = { type: "success" | "error"; message: string } | null;

export function ContactInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setIsSubmitting(true); setStatus(null);
    const form = event.currentTarget; const data = new FormData(form);
    const response = await fetch("/api/contact-inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), workEmail: data.get("workEmail"), company: data.get("company"), primaryGoal: data.get("primaryGoal"), message: data.get("message") }) }).catch(() => null);
    const result = response ? await response.json().catch(() => ({})) : {};
    if (!response?.ok) setStatus({ type: "error", message: result.error || "We could not send your inquiry. Please try again." });
    else { form.reset(); setStatus({ type: "success", message: result.message || "Thanks — we’ll be in touch shortly." }); }
    setIsSubmitting(false);
  }
  return <form onSubmit={onSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Work email<input name="workEmail" required type="email" placeholder="you@company.com" /></label><label>Company<input name="company" placeholder="Company name" /></label><label>Primary goal<select name="primaryGoal" defaultValue=""><option value="" disabled>Choose a goal</option>{goals.map((goal) => <option key={goal}>{goal}</option>)}</select></label><label className="form-wide">What are you trying to solve?<textarea name="message" placeholder="Share the context that would help us understand the opportunity." /></label><button className="primary-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Start a conversation ↗"}</button>{status && <p className={`form-status form-status--${status.type}`} role="status">{status.message}</p>}<small className="form-wide">Your details will only be used to respond to this enquiry.</small></form>;
}
