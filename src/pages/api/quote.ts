import type { APIRoute } from "astro";
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

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = import.meta.env.RESEND_TO_EMAIL || "info@accuresecurity.com";

  if (!apiKey) {
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

  if (honeypot) {
    return redirectToThanks();
  }

  if (!name || !email || !service || !site || !message) {
    return new Response("Please fill out all required fields.", { status: 400 });
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
      <p style="margin: 0 0 24px; color: #4a4a4a;">Submitted via accuresecurity.ca &mdash; ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })} ET</p>
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
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Accure Security Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Quote request from ${name} — ${service}`,
      html,
      text,
    });
  } catch (error) {
    console.error("Resend send failed:", error);
    return new Response("Could not send the request right now. Please call or try again shortly.", { status: 502 });
  }

  return redirectToThanks();
};
