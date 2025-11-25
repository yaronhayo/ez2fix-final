import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { O as OwnerNotificationEmail } from '../../chunks/owner-notification_BVlJ6AXS.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10,11}$/),
  message: z.string().min(1),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  recaptchaToken: z.string().optional(),
  fax: z.string().optional()
  // Honeypot
});
function generateSessionToken() {
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString("base64");
}
const POST = async ({ request, cookies }) => {
  try {
    const resend = new Resend("re_4iYQ4WJg_82awHXUb1TBESKREh2NxdfaW");
    const data = await request.json();
    if (data.fax) {
      return new Response(JSON.stringify({ success: true, token: "fake-token" }), { status: 200 });
    }
    if (data.phone) {
      data.phone = data.phone.replace(/\D/g, "");
      if (data.phone.length === 11 && data.phone.startsWith("1")) {
        data.phone = data.phone.substring(1);
      }
    }
    const validated = contactSchema.parse(data);
    if (validated.recaptchaToken) {
      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${"6LdFn6krAAAAAEocGQx8UOmiwizKFnet4Op5QTL4"}&response=${validated.recaptchaToken}`
        }
      );
      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return new Response(
          JSON.stringify({ success: false, message: "reCAPTCHA validation failed" }),
          { status: 400 }
        );
      }
    }
    const formattedPhone = validated.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    const emailHtml = await render(OwnerNotificationEmail({
      name: validated.name,
      email: validated.email,
      phone: formattedPhone,
      service: "General Inquiry",
      // Static for contact form
      comments: validated.message,
      // Empty address fields
      addressFull: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    }));
    await resend.emails.send({
      from: "noreply@ez2fixllc.com",
      to: "yaronhayo@gmail.com",
      reply_to: validated.email,
      subject: `📩 New Contact Message: ${validated.name}`,
      html: emailHtml
    });
    const sessionToken = generateSessionToken();
    cookies.set("booking_session", sessionToken, {
      path: "/",
      maxAge: 3600,
      // 1 hour
      httpOnly: true,
      secure: true,
      sameSite: "lax"
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully",
        token: sessionToken
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
