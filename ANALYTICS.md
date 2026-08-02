# Website Analytics Setup

This site is wired to report visitor data to **Google Analytics 4 (GA4)**. The tracking code is already in place inside `src/layouts/BaseLayout.astro`. It only activates when a `PUBLIC_GA_MEASUREMENT_ID` environment variable is set at build time. Nothing is tracked until you complete the steps below.

## What GA4 will show

Once live, GA4 reports:

- Total visitors, sessions, page views
- Traffic sources (Google search, direct, social, referral)
- Top pages by traffic
- Country / region / city breakdown
- Device (mobile vs desktop) and browser
- Real-time visitors on the site right now
- Time on site, bounce rate, engaged sessions
- Any conversion event you decide to track (form submits, phone-tap, quote clicks)

## One-time setup (client / owner)

1. Sign in to **analytics.google.com** with the Google account you want to own the property (typically the same account you use for Search Console and Business Profile).
2. Click **Admin** (gear icon) → **Create** → **Property**.
   - Property name: `Accure Security`
   - Reporting time zone: `(GMT-05:00) Toronto`
   - Currency: `Canadian Dollar (CAD)`
3. On **Business details**: pick industry `Business & Industrial Markets`, size `Small`.
4. On **Business objectives**: pick `Generate leads` and `Examine user behavior`.
5. On **Data collection**: choose `Web`, enter website URL `https://accuresecurity.com` (or whatever the live domain is), name the stream `Accure Website`, then click **Create stream**.
6. Copy the **Measurement ID**. It looks like `G-XXXXXXXXXX`.

## Wire the Measurement ID into the site (developer)

The site is deployed on Vercel. Add the ID as an environment variable so every build injects the tracking script.

1. Open the Vercel project → **Settings** → **Environment Variables**.
2. Add a new variable:
   - Name: `PUBLIC_GA_MEASUREMENT_ID`
   - Value: the `G-XXXXXXXXXX` from step 6 above
   - Environments: check **Production**, **Preview**, and **Development**
3. Save, then trigger a redeploy (Deployments tab → latest deployment → **Redeploy**).

Verify: open the live site, view page source, and search for `googletagmanager.com/gtag/js` — you should see the script tag with your ID. Then open GA4 → **Reports** → **Realtime** and reload the site — you should appear as an active user within 30 seconds.

## Grant additional users access to GA4 (client / owner)

1. GA4 → **Admin** (gear icon) → **Property access management** → click the **+** in the top-right → **Add users**.
2. Enter each email address that needs access (one per line).
3. Pick a role:
   - **Viewer** — can see reports only. Right role for stakeholders and the client's marketing person.
   - **Analyst** — can build custom reports and explorations. For anyone doing analysis work.
   - **Editor** — can change settings and add tracking. Reserve for the developer / agency.
   - **Administrator** — full control including deleting the property. Reserve for the account owner.
4. Uncheck **Notify new users by email** if you want to send the invite yourself. Otherwise leave checked.
5. Click **Add**.

The invited users will get an email; the property will appear in their `analytics.google.com` on next login.

## Where to read the reports

- **Realtime** — who's on the site right now, from which country/city, what pages they're viewing.
- **Life cycle → Acquisition → Traffic acquisition** — where visitors came from (google organic, direct, referral, social).
- **Life cycle → Engagement → Pages and screens** — top pages by views and average engagement time.
- **User → Tech → Overview** — device (mobile/desktop/tablet), browser, screen size.
- **User → Demographics → Overview** — country / region / city breakdown.

## Optional (recommended) next steps

- **Google Search Console**: shows which keywords your pages rank for on Google. Free. Sign up at search.google.com/search-console, verify domain, then link it to GA4 via **Admin → Product links → Search Console links**.
- **Vercel Web Analytics**: one-click alternative built into Vercel dashboard. Free tier included. Enable at Vercel project → **Analytics** tab. Does not replace GA4 but gives a quicker snapshot without a Google account.
- **Conversion events**: once GA4 is live, we can mark "phone-tap on mobile", "quote form submitted", and "WhatsApp click" as conversion events so you can see which pages drive real leads.

## Privacy note

The tracking script has `anonymize_ip: true` set, which truncates the last octet of the visitor IP before it reaches Google. This is a common compliance stance for Canadian small businesses. If PIPEDA becomes a specific concern, we can add a cookie consent banner as a follow-up.
