# Contact Form / Resend Setup

The quote form on `/contact/` posts to `/api/quote`, a Vercel serverless function that emails the submission via [Resend](https://resend.com). It reads three environment variables. No email is sent until they are set on Vercel.

## What already works in the code

- **Form**: `src/pages/contact.astro` posts to `/api/quote` with a hidden honeypot field (`company_website`) to trap bots.
- **API route**: `src/pages/api/quote.ts` validates the payload, escapes HTML, and calls Resend.
- **Success page**: `/contact/thanks/` renders after a successful send (303 redirect).
- **Error handling**: missing keys return `500`, invalid payloads return `400`, upstream failures return `502` with a plain-text message the user can retry.
- **Reply-To**: the customer's email is set as the `Reply-To` header so hitting Reply in Gmail replies to them, not to Resend.

## Environment variables to set on Vercel

Open the Vercel project → **Settings** → **Environment Variables** → **Add New**. Add each of these three, ticking **Production**, **Preview**, and **Development** for each:

| Name | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_...` (from resend.com dashboard → API Keys) | The one Jagat received on 2026-08-03 has been exposed in chat — rotate it in the Resend dashboard and use the fresh key here. |
| `RESEND_TO_EMAIL` | `info@accuresecurity.com` | Where quote requests land. Change here to redirect leads to another inbox. |
| `RESEND_FROM_EMAIL` | `noreply@accuresecurity.com` (once domain is verified) | See "Verify a sender domain" below. Until verified, leave unset — the API route falls back to `onboarding@resend.dev`, which works but shows the Resend brand and lands in spam more often. |

After adding: **Deployments → latest deploy → Redeploy** so the fresh env vars are picked up.

## Verify a sender domain in Resend (one-time)

Sending from your own domain (`noreply@accuresecurity.com`) is what makes emails reliable and unbranded. Steps:

1. Resend dashboard → **Domains** → **Add Domain** → enter `accuresecurity.com`.
2. Resend shows a set of DNS records: 3 for SPF/DKIM, 1 for return-path (MX), and optionally 1 for DMARC.
3. Log into wherever the domain's DNS is managed (Vercel Domains, Cloudflare, GoDaddy, etc.) and add each record exactly as shown. Resend has one-click copy for each value.
4. Back in Resend, click **Verify DNS Records**. Verification usually completes within 5–30 minutes.
5. Once the domain shows green, set `RESEND_FROM_EMAIL=noreply@accuresecurity.com` in Vercel and redeploy.

Note: the recipient email (`RESEND_TO_EMAIL`) and site both use `.com`, so verify `accuresecurity.com` for the sender domain.

## Testing the live form

1. Go to `https://www.accuresecurity.com/contact/`.
2. Fill in every required field with a real email you control.
3. Submit — you should land on `/contact/thanks/`.
4. Check `info@accuresecurity.com` — a formatted quote email arrives within seconds.
5. If nothing arrives:
   - Vercel → project → **Functions** logs → look for the `/api/quote` invocation for the error message.
   - Common issues: missing env var, unverified sender domain, or Resend API key was revoked.

## Rate-limiting & spam

- Honeypot field in the form catches most bots (submissions with the hidden field filled are silently treated as success without sending an email).
- No CAPTCHA is wired up. If bot volume becomes a problem later, hCaptcha or Cloudflare Turnstile can be added in ~1 hour.

## Cost

Resend's free tier is 100 emails per day / 3,000 per month, which is more than enough for a lead-gen form. Upgrade only if quote volume exceeds that.
