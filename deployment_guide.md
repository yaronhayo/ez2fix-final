# Hostinger Deployment Guide for Ez2Fix

This guide details how to deploy your Astro/Node.js application to Hostinger.

## Prerequisites

1.  **GitHub Repo**: Ensure your Hostinger account is connected to the `ez2fix-final` repository.
2.  **Node.js Version**: Ensure your Hostinger Node.js version is set to **v18** or **v20** (Recommended).

## Deployment Settings

When configuring the deployment in Hostinger (Web Hosting -> Node.js or VPS), use the following settings:

*   **Build Command**: `npm run build`
*   **Output Directory**: `dist`
*   **Start Command**: `npm start` (This now runs `node dist/server/entry.mjs`)
*   **Root Directory**: `/` (or leave blank)

## Environment Variables

You **MUST** configure the following environment variables in your Hostinger dashboard for the site to function correctly (especially forms and maps).

| Variable Name | Value (Copy from your local .env) | Description |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | `https://ez2fixllc.com` | The live URL of your site. |
| `RESEND_API_KEY` | `re_4iYQ4WJg_82awHXUb1TBESKREh2NxdfaW` | Required for sending emails. |
| `RESEND_FROM_EMAIL` | `noreply@ez2fixllc.com` | The email address emails are sent from. |
| `RESEND_OWNER_EMAIL` | `yaron@gettmarketing.com` | The email address that receives notifications. |
| `PUBLIC_NOTIFICATION_EMAIL` | `ez2fixllc@gmail.com` | Public contact email. |
| `PUBLIC_GOOGLE_MAPS_API_KEY` | `AIzaSyCC7AYmLnyP7XLdADdhYFpzRRjiCqmlkhw` | Required for Google Maps. |
| `PUBLIC_RECAPTCHA_SITE_KEY` | `6LdFn6krAAAAAJXaiq0hr8p3fTd4L9RQr5p0giwR` | Required for contact forms. |
| `RECAPTCHA_SECRET_KEY` | `6LdFn6krAAAAAEocGQx8UOmiwizKFnet4Op5QTL4` | Secret key for reCAPTCHA verification. |
| `PUBLIC_GOOGLE_ANALYTICS_ID` | `G-XXXXXXXXXX` | Google Analytics 4 Measurement ID. |
| `PUBLIC_GOOGLE_ADS_CONVERSION_ID` | *(Optional)* | Google Ads ID. |
| `PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | *(Optional)* | Google Ads Label. |
| `PUBLIC_MICROSOFT_UET_TAG_ID` | *(Optional)* | Bing Ads Tag ID. |

## Troubleshooting

*   **"Internal Server Error"**: Check the application logs. Ensure `npm start` is actually running `node dist/server/entry.mjs`.
*   **Forms not working**: Verify `RESEND_API_KEY` and `RECAPTCHA_SECRET_KEY` are set correctly in the environment variables.
*   **Images missing**: Ensure the `dist/client` folder is being served correctly as the static assets folder. In some Node setups, you may need to configure Nginx/Apache to serve `/` from `dist/client` for static files and proxy other requests to the Node app. However, Astro's Node adapter in standalone mode handles static file serving automatically.

## Updates

To update the site:
1.  Push changes to the `main` branch of `ez2fix-final`.
2.  Hostinger should automatically detect the change and re-deploy (if auto-deploy is enabled).
3.  If not, manually click "Deploy" in the Hostinger dashboard.
