import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    "process-digitisation": "Process Digitisation",
    "workflow-automation": "Workflow Automation",
    "commerce": "Commerce & Payment Operations",
    "agri-research": "Agri Research & Publishing",
    "agri-fundraising": "Agri Fundraising Support",
    "other": "Other",
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
          <tr><td style="padding:8px 0"><strong>Name</strong><br>${name}</td></tr>
          <tr><td style="padding:8px 0"><strong>Email</strong><br><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0"><strong>Phone</strong><br>${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px 0"><strong>Company</strong><br>${company}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:8px 0"><strong>Service</strong><br>${serviceLabel[service] ?? service}</td></tr>` : ""}
          <tr><td style="padding:16px 0 8px"><strong>Message</strong><br><p style="white-space:pre-wrap">${message}</p></td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}