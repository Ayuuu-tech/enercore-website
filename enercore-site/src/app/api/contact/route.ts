import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name:        string;
  company:     string;
  email:       string;
  phone:       string;
  state?:      string;
  projectType?:string;
  message?:    string;
  website?:    string; /* honeypot */
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  /* Honeypot — silently accept bots */
  if (body.website) {
    return NextResponse.json({ ok: true, message: "Accepted" });
  }

  /* Validation */
  if (!body.name?.trim() || !body.company?.trim() || !body.email?.trim() || !body.phone?.trim()) {
    return NextResponse.json({ ok: false, message: "Name, company, email, and phone are required." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(body.email)) {
    return NextResponse.json({ ok: false, message: "Invalid email address." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_EMAIL ?? "sales@enercore.org";

  /* Send via Resend if key is present */
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Enercore Website <onboarding@resend.dev>",
        to:   [toEmail],
        replyTo: body.email,
        subject: `New inquiry from ${body.name} — ${body.company}`,
        html: `
          <h2>New Website Inquiry</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:560px">
            <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
            <tr><td><strong>Company</strong></td><td>${body.company}</td></tr>
            <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
            ${body.state       ? `<tr><td><strong>State</strong></td><td>${body.state}</td></tr>` : ""}
            ${body.projectType ? `<tr><td><strong>Project Type</strong></td><td>${body.projectType}</td></tr>` : ""}
            ${body.message     ? `<tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${body.message}</td></tr>` : ""}
          </table>
        `,
      });
    } catch (err) {
      console.error("[contact] Resend error:", err);
      return NextResponse.json({ ok: false, message: "Failed to send email. Please try again." }, { status: 500 });
    }
  } else {
    /* Dev fallback — log to console */
    console.info("[contact] No RESEND_API_KEY — logging inquiry:", {
      name: body.name, company: body.company, email: body.email,
      phone: body.phone, state: body.state, projectType: body.projectType,
    });
  }

  return NextResponse.json({ ok: true, message: "Inquiry submitted" });
}
