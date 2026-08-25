import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export const prerender = false;

const escapeHtml = (input: string) =>
  input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const redirectToThanks = () =>
  new Response(null, {
    status: 303,
    headers: { Location: "/contact/thanks/" },
  });

type TurnstileVerification = {
  success: boolean;
  action?: string;
  "error-codes"?: string[];
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = import.meta.env.RESEND_TO_EMAIL || "info@accuresecurity.com";
  const smtpUser =
    import.meta.env.SMTP_USER ||
    import.meta.env.GMAIL_SMTP_USER ||
    import.meta.env.GMAIL_FROM_EMAIL;
  const smtpPassword = import.meta.env.SMTP_APP_PASSWORD || import.meta.env.GMAIL_APP_PASSWORD;
  const smtpToEmail =
    import.meta.env.SMTP_TO_EMAIL ||
    import.meta.env.EMAIL_TO_EMAIL ||
    "info@accuresecurity.com";
  const smtpConfigured = Boolean(smtpUser && smtpPassword);

  if (!smtpConfigured && !apiKey) {
    return new Response("Email service is not configured.", { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return new Response("Invalid form submission.", { status: 400 });
  }

  const get = (key: string) => (formData.get(key) ?? "").toString().trim();

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const service = get("service");
  const site = get("site");
  const message = get("message");
  const honeypot = get("company_website");
  const turnstileToken = get("cf-turnstile-response");

  if (honeypot) {
    return redirectToThanks();
  }

  if (!name || !email || !service || !site || !message) {
    return new Response("Please fill out all required fields.", { status: 400 });
  }

  if (turnstileSecret && !turnstileToken) {
    return new Response("Please complete the spam-protection check and try again.", { status: 400 });
  }

  if (turnstileSecret) {
    const verificationBody = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });
    const remoteIp = request.headers.get("CF-Connecting-IP");
    if (remoteIp) verificationBody.set("remoteip", remoteIp);

    let turnstile: TurnstileVerification;
    try {
      const verificationResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: verificationBody,
        },
      );
      if (!verificationResponse.ok) throw new Error(`Turnstile returned ${verificationResponse.status}`);
      turnstile = (await verificationResponse.json()) as TurnstileVerification;
    } catch (error) {
      console.error("Turnstile verification failed:", error);
      return new Response("Could not verify the spam-protection check. Please try again.", { status: 502 });
    }

    if (!turnstile.success || turnstile.action !== "quote-form") {
      console.warn("Turnstile rejected quote submission:", turnstile["error-codes"] ?? []);
      return new Response("Spam-protection verification failed. Please refresh and try again.", { status: 403 });
    }
  }

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "(not provided)"],
    ["Service needed", service],
    ["Site address or city", site],
    ["Coverage details", message],
  ];

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #151515; max-width: 640px; margin: 0 auto;">
      <h2 style="margin: 0 0 16px; color: #b31f25;">New security quote request</h2>
      <p style="margin: 0 0 24px; color: #4a4a4a;">Submitted via accuresecurity.com &mdash; ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })} ET</p>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 10px 14px; background: #fffdf8; border: 1px solid #eadfd0; font-weight: 700; width: 200px; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 10px 14px; background: #ffffff; border: 1px solid #eadfd0; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="margin: 24px 0 0; color: #4a4a4a; font-size: 12px;">Reply directly to reach the requester.</p>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: import.meta.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(import.meta.env.SMTP_PORT || 465),
        secure: true,
        auth: { user: smtpUser, pass: smtpPassword },
      });
      await transporter.sendMail({
        from: `Accure Security Website <${smtpUser}>`,
        to: smtpToEmail,
        replyTo: email,
        subject: `Quote request from ${name} — ${service}`,
        html,
        text,
      });
    } else {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `Accure Security Website <${fromEmail}>`,
        to: [toEmail],
        replyTo: email,
        subject: `Quote request from ${name} — ${service}`,
        html,
        text,
      });
    }
  } catch (error) {
    console.error("Quote email send failed:", error);
    return new Response("Could not send the request right now. Please call or try again shortly.", { status: 502 });
  }

  return redirectToThanks();
};
