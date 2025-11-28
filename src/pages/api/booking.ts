// API endpoint for booking form submissions
import type { APIRoute } from 'astro';

// Helper for Email Styling
function getEmailStyle(): string {
    return `
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f6f9fc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px; margin-bottom: 20px; }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; margin-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #1f2937; text-decoration: none; }
        .h1 { color: #1f2937; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .h2 { color: #1f2937; font-size: 20px; font-weight: bold; margin-top: 30px; margin-bottom: 15px; }
        .info-row { margin-bottom: 10px; }
        .label { font-weight: bold; color: #1f2937; }
        .value { color: #4b5563; }
        .button { display: inline-block; background-color: #f59e0b; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; font-size: 12px; color: #9ca3af; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; }
        .highlight { background-color: #fffbeb; padding: 15px; border-radius: 6px; border: 1px solid #fcd34d; }
        .tracking-info { font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 10px; border-radius: 4px; margin-top: 20px; }
    `;
}

// Function to send email via Resend
async function sendResendEmail(
    apiKey: string,
    from: string,
    to: string | string[],
    subject: string,
    html: string,
    replyTo?: string
): Promise<{ code: number; response: any }> {
    try {
        const payload: any = {
            from,
            to: Array.isArray(to) ? to : [to],
            subject,
            html,
        };

        if (replyTo) {
            payload.reply_to = replyTo;
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        return {
            code: response.status,
            response: data,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            code: 500,
            response: { error: String(error) },
        };
    }
}

export const POST: APIRoute = async ({ request }) => {
    try {
        // Parse request body
        const input = await request.json();

        if (!input) {
            return new Response(
                JSON.stringify({ success: false, message: 'Invalid JSON input' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Honeypot check
        if (input.fax) {
            return new Response(
                JSON.stringify({ success: true, message: 'Submission received.' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Get environment variables
        const resendApiKey = import.meta.env.RESEND_API_KEY;
        const recaptchaSecret = import.meta.env.RECAPTCHA_SECRET_KEY;
        const ownerEmail = import.meta.env.RESEND_OWNER_EMAIL;
        const fromEmail = import.meta.env.RESEND_FROM_EMAIL;

        if (!resendApiKey || !recaptchaSecret) {
            return new Response(
                JSON.stringify({ success: false, message: 'Server configuration error: Missing API keys' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Verify reCAPTCHA
        if (input.recaptchaToken) {
            const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: recaptchaSecret,
                    response: input.recaptchaToken,
                }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyData.success || verifyData.score < 0.5) {
                return new Response(
                    JSON.stringify({ success: false, message: 'reCAPTCHA validation failed' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }
        }

        // Data Preparation
        const service = input.service || '';
        const name = input.name || '';
        const email = input.email || '';
        const phone = input.phone || '';
        const address = input.addressFull || '';
        const comments = input.comments || '';
        const utmSource = input.utmSource || 'Direct';
        const utmMedium = input.utmMedium || '-';
        const utmCampaign = input.utmCampaign || '-';

        // Owner Email Template
        const ownerHtml = `
<html>
<head><style>${getEmailStyle()}</style></head>
<body>
    <div class='container'>
        <div class='header'>
            <a href='https://ez2fixllc.com' class='logo'>Ez2Fix Booking</a>
        </div>
        <div class='h1'>New Service Request</div>
        <div class='highlight'>
            <div class='info-row'><span class='label'>Service:</span> <span class='value'>${service}</span></div>
            <div class='info-row'><span class='label'>Customer:</span> <span class='value'>${name}</span></div>
            <div class='info-row'><span class='label'>Phone:</span> <span class='value'><a href='tel:${phone}'>${phone}</a></span></div>
        </div>
        
        <div class='h2'>Details</div>
        <div class='info-row'><span class='label'>Email:</span> <span class='value'>${email}</span></div>
        <div class='info-row'><span class='label'>Address:</span> <span class='value'>${address}</span></div>
        <div class='info-row'><span class='label'>Comments:</span> <br><span class='value'>${comments}</span></div>

        <div class='tracking-info'>
            <strong>Marketing Source:</strong><br>
            Source: ${utmSource} | Medium: ${utmMedium} | Campaign: ${utmCampaign}
        </div>
        
        <div class='footer'>
            Sent from Ez2Fix Website Booking System
        </div>
    </div>
</body>
</html>`;

        // Client Auto-Responder Template
        const clientHtml = `
<html>
<head><style>${getEmailStyle()}</style></head>
<body>
    <div class='container'>
        <div class='header'>
            <a href='https://ez2fixllc.com' class='logo'>Ez2Fix Garage Door Service</a>
        </div>
        <div class='h1'>Thank You, ${name}!</div>
        <p>We have received your request for <strong>${service}</strong>. Our team is reviewing it right now.</p>
        
        <div class='highlight'>
            <div class='h2' style='margin-top:0'>What Happens Next?</div>
            <p>1. <strong>We Review:</strong> A technician will check your details.</p>
            <p>2. <strong>We Contact You:</strong> We'll call or text you at <strong>${phone}</strong> shortly to confirm.</p>
            <p>3. <strong>We Fix It:</strong> Our licensed pro will arrive to solve your problem.</p>
        </div>

        <div style='text-align: center; margin-top: 30px;'>
            <div class='h2'>Need Immediate Help?</div>
            <p>Call our 24/7 Emergency Line:</p>
            <a href='tel:2015546769' class='button'>Call (201) 554-6769</a>
        </div>
        
        <div class='footer'>
            Ez2Fix Garage Door Service | NJ License #13VH13553300<br>
            Professional Repair & Installation
        </div>
    </div>
</body>
</html>`;

        // Send emails
        const ownerResult = await sendResendEmail(
            resendApiKey,
            fromEmail,
            ownerEmail,
            `📅 New Booking: ${service} - ${name}`,
            ownerHtml,
            email
        );

        // Send client auto-responder
        let clientResult = { code: 0, response: 'Skipped' };
        if (email) {
            clientResult = await sendResendEmail(
                resendApiKey,
                fromEmail,
                email,
                `✅ We received your request - Ez2Fix`,
                clientHtml
            );
        }

        // Check success
        if (ownerResult.code >= 200 && ownerResult.code < 300) {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: 'Booking received successfully',
                    redirectUrl: '/thank-you',
                }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Set-Cookie': `form_success_token=${Math.random().toString(36).substring(7)}; Path=/; Max-Age=60; HttpOnly; Secure; SameSite=Strict`,
                    },
                }
            );
        } else {
            console.error('Resend API Error (Owner):', ownerResult.response);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Failed to send email. Please try again later.',
                    debug_owner: ownerResult.response,
                    debug_client: clientResult.response,
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        console.error('Booking API error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'An error occurred. Please try again.',
                error: String(error),
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
