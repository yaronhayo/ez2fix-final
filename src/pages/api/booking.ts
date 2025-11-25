import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import OwnerNotificationEmail from '../../emails/owner-notification';
import ClientConfirmationEmail from '../../emails/client-confirmation';

// Force this API route to render on-demand (not prerender)
export const prerender = false;

const bookingSchema = z.object({
  service: z.string().min(1),
  serviceOther: z.string().optional(),
  comments: z.string().optional(),

  addressFull: z.string().optional(),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().default('NJ'),
  zipCode: z.string().regex(/^\d{5}$/),
  aptNumber: z.string().optional(),
  gateCode: z.string().optional(),

  name: z.string().min(1),
  phone: z.string().regex(/^\d{10,11}$/),
  email: z.string().email().optional(),

  consentToContact: z.boolean(),
  agreedToTerms: z.boolean(),

  recaptchaToken: z.string().optional(),
  fax: z.string().optional(), // Honeypot

  // Tracking fields
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  referrer: z.string().optional(),
  landingPage: z.string().optional(),
  deviceType: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  userAgent: z.string().optional(),
  sessionStart: z.string().optional(),
  formStartTime: z.string().optional(),
});

// Generate a simple session token for thank-you page access
function generateSessionToken(): string {
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    console.log('=== BOOKING API CALLED ===');
    console.log('Request method:', request.method);
    console.log('Content-Type:', request.headers.get('content-type'));

    let data;
    try {
      // Read body as text first, then parse
      const bodyText = await request.text();
      console.log('Raw body text:', bodyText);

      if (!bodyText || bodyText.trim() === '') {
        console.error('Request body is empty');
        return new Response(
          JSON.stringify({ success: false, message: 'Request body is empty' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      data = JSON.parse(bodyText);
      console.log('Parsed data successfully');
      console.log('Data keys:', Object.keys(data));
    } catch (jsonError) {
      console.error('JSON parsing failed:', jsonError);
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid JSON format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Honeypot check - silent success for bots
    if (data.fax) {
      console.log('Honeypot triggered');
      return new Response(
        JSON.stringify({ success: true, token: 'fake-token' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Clean phone number - remove all non-digits
    if (data.phone) {
      data.phone = data.phone.replace(/\D/g, '');
      // Remove leading 1 if 11 digits
      if (data.phone.length === 11 && data.phone.startsWith('1')) {
        data.phone = data.phone.substring(1);
      }
      console.log('Cleaned phone:', data.phone);
    }

    console.log('Starting validation...');
    // Validate input
    const validated = bookingSchema.parse(data);
    console.log('Validation passed');

    // Verify consent
    if (!validated.consentToContact || !validated.agreedToTerms) {
      return new Response(
        JSON.stringify({ success: false, message: 'You must agree to the terms and privacy policy' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify reCAPTCHA (only if token provided)
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
        console.warn('reCAPTCHA validation failed:', recaptchaData);
        return new Response(
          JSON.stringify({ success: false, message: 'reCAPTCHA validation failed. Please try again.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      console.log('reCAPTCHA validated successfully, score:', recaptchaData.score);
    } else {
      console.warn('No reCAPTCHA token provided, proceeding without verification');
    }

    // Format phone number
    const formattedPhone = validated.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    // Get service name for subject
    const serviceName = validated.service === 'other'
      ? validated.serviceOther || 'Other Service'
      : validated.service.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

    // Prepare email data with tracking
    const emailData = {
      name: validated.name,
      phone: formattedPhone,
      email: validated.email,
      service: validated.service,
      serviceOther: validated.serviceOther,
      comments: validated.comments,
      addressFull: validated.addressFull,
      street: validated.street,
      city: validated.city,
      state: validated.state,
      zipCode: validated.zipCode,
      aptNumber: validated.aptNumber,
      gateCode: validated.gateCode,
      // Tracking data
      utmSource: validated.utmSource,
      utmMedium: validated.utmMedium,
      utmCampaign: validated.utmCampaign,
      utmContent: validated.utmContent,
      utmTerm: validated.utmTerm,
      referrer: validated.referrer,
      landingPage: validated.landingPage,
      deviceType: validated.deviceType,
      browser: validated.browser,
      os: validated.os,
      userAgent: validated.userAgent,
      sessionStart: validated.sessionStart,
      formStartTime: validated.formStartTime,
    };

    // Send owner notification email
    try {
      console.log('Rendering owner email...');
      const ownerEmailHtml = await render(OwnerNotificationEmail(emailData));
      console.log('Owner email rendered, sending...');

      await resend.emails.send({
        from: import.meta.env.RESEND_FROM_EMAIL || 'Ez2Fix <notifications@ez2fixllc.com>',
        to: import.meta.env.RESEND_OWNER_EMAIL || 'ez2fixllc@gmail.com',
        reply_to: validated.email || formattedPhone,
        subject: `🔔 New Lead: ${serviceName} in ${validated.city}, ${validated.state} - ${validated.name}`,
        html: ownerEmailHtml,
      });
      console.log('Owner email sent successfully');
    } catch (emailError) {
      console.error('Failed to send owner notification email:', emailError);
      console.error('Email error stack:', emailError instanceof Error ? emailError.stack : 'No stack');
      // Continue anyway - don't fail the whole request
    }

    // Send client confirmation email (only if email provided)
    if (validated.email) {
      try {
        console.log('Rendering client email...');
        const clientEmailHtml = await render(
          ClientConfirmationEmail({
            name: validated.name,
            phone: formattedPhone,
            service: validated.service,
            serviceOther: validated.serviceOther,
          })
        );
        console.log('Client email rendered, sending...');

        await resend.emails.send({
          from: import.meta.env.RESEND_FROM_EMAIL || 'Ez2Fix <notifications@ez2fixllc.com>',
          to: validated.email,
          subject: "✅ Your Garage Door Service Request Confirmed - Ez2Fix",
          html: clientEmailHtml,
        });
        console.log('Client email sent successfully');
      } catch (emailError) {
        console.error('Failed to send client confirmation email:', emailError);
        console.error('Email error stack:', emailError instanceof Error ? emailError.stack : 'No stack');
        // Continue anyway - don't fail the whole request
      }
    }

    // Generate session token for thank-you page
    const sessionToken = generateSessionToken();
    console.log('Generated session token');

    // Set cookie for thank-you page access (1 hour expiration)
    cookies.set('booking_session', sessionToken, {
      path: '/',
      maxAge: 3600, // 1 hour
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
    });
    console.log('Cookie set');

    console.log('Booking API completed successfully');
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Booking submitted successfully',
        token: sessionToken,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Booking error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Error details:', JSON.stringify(error, null, 2));

    if (error instanceof z.ZodError) {
      console.error('Zod validation errors:', error.errors);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid form data. Please check your entries and try again.',
          errors: error.errors,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred while submitting your request. Please try again or call us directly.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
