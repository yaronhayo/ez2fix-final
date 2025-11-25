import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import OwnerNotificationEmail from '../../emails/owner-notification';

export const prerender = false;

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().regex(/^\d{10,11}$/),
    message: z.string().min(1),
    consent: z.boolean().refine(val => val === true, "Consent is required"),
    recaptchaToken: z.string().optional(),
    fax: z.string().optional(), // Honeypot
});

// Generate a simple session token for thank-you page access
function generateSessionToken(): string {
    return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const resend = new Resend(import.meta.env.RESEND_API_KEY);
        const data = await request.json();

        // Honeypot check
        if (data.fax) {
            return new Response(JSON.stringify({ success: true, token: 'fake-token' }), { status: 200 });
        }

        // Clean phone
        if (data.phone) {
            data.phone = data.phone.replace(/\D/g, '');
            // Remove leading 1 if 11 digits
            if (data.phone.length === 11 && data.phone.startsWith('1')) {
                data.phone = data.phone.substring(1);
            }
        }

        // Validate
        const validated = contactSchema.parse(data);

        // Verify reCAPTCHA
        if (validated.recaptchaToken) {
            const recaptchaResponse = await fetch(
                `https://www.google.com/recaptcha/api/siteverify`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${validated.recaptchaToken}`,
                }
            );
            const recaptchaData = await recaptchaResponse.json();
            if (!recaptchaData.success || recaptchaData.score < 0.5) {
                return new Response(
                    JSON.stringify({ success: false, message: 'reCAPTCHA validation failed' }),
                    { status: 400 }
                );
            }
        }

        // Format phone
        const formattedPhone = validated.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

        // Send email to owner
        // We reuse the OwnerNotificationEmail but adapt the fields
        const emailHtml = await render(OwnerNotificationEmail({
            name: validated.name,
            email: validated.email,
            phone: formattedPhone,
            service: 'General Inquiry', // Static for contact form
            comments: validated.message,
            // Empty address fields
            addressFull: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
        }));

        await resend.emails.send({
            from: import.meta.env.RESEND_FROM_EMAIL || 'Ez2Fix <notifications@ez2fixllc.com>',
            to: import.meta.env.RESEND_OWNER_EMAIL || 'ez2fixllc@gmail.com',
            reply_to: validated.email,
            subject: `📩 New Contact Message: ${validated.name}`,
            html: emailHtml,
        });

        // Generate session token for thank-you page
        const sessionToken = generateSessionToken();

        // Set cookie for thank-you page access (1 hour expiration)
        cookies.set('booking_session', sessionToken, {
            path: '/',
            maxAge: 3600, // 1 hour
            httpOnly: true,
            secure: import.meta.env.PROD,
            sameSite: 'lax',
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Message sent successfully',
                token: sessionToken
            }),
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Server error' }),
            { status: 500 }
        );
    }
};
