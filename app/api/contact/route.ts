import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { services } from "@/lib/services";

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export async function POST(request: Request) {
  const { name, email, phone, company, service, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceLabel: Record<string, string> = {
    ...Object.fromEntries(services.map((item) => [item.slug, item.title])),
    other: "Other",
  };

  try {
    await transporter.sendMail({
      from: `"MukaroCore Contact Form" <${process.env.SMTP_USER}>`,
      to: "info@mukarocore.com",
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        company ? `Company: ${company}` : null,
        service ? `Service: ${serviceLabel[service] ?? service}` : null,
        `\nMessage:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#111;max-width:600px">
          <tr><td style="padding:8px 0"><strong>Name</strong><br>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0"><strong>Email</strong><br><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0"><strong>Phone</strong><br>${escapeHtml(phone)}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px 0"><strong>Company</strong><br>${escapeHtml(company)}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:8px 0"><strong>Service</strong><br>${escapeHtml(serviceLabel[service] ?? service)}</td></tr>` : ""}
          <tr><td style="padding:16px 0 8px"><strong>Message</strong><br><p style="white-space:pre-wrap">${escapeHtml(message)}</p></td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}