import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { O as OwnerNotificationEmail } from '../../chunks/owner-notification_BVlJ6AXS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Button } from '@react-email/components';
export { renderers } from '../../renderers.mjs';

const ClientConfirmationEmail = (props) => {
  const { name, phone, service, serviceOther } = props;
  const serviceName = service === "other" ? serviceOther || "Other Service" : service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: "We've received your service request - Ez2Fix" }),
    /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
      /* @__PURE__ */ jsxs(Section, { style: header, children: [
        /* @__PURE__ */ jsxs(Heading, { style: h1, children: [
          "Thank You, ",
          name,
          "!"
        ] }),
        /* @__PURE__ */ jsx(Text, { style: leadText, children: "We've received your service request and our team will contact you shortly." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Your Service Request" }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Service:" }),
          " ",
          serviceName
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Contact:" }),
          " ",
          phone
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "What Happens Next?" }),
        /* @__PURE__ */ jsxs("div", { style: stepContainer, children: [
          /* @__PURE__ */ jsx(Text, { style: stepNumber, children: "1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { style: stepTitle, children: "We Review Your Request" }),
            /* @__PURE__ */ jsx(Text, { style: stepText, children: "Our team is reviewing the details of your service request right now." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: stepContainer, children: [
          /* @__PURE__ */ jsx(Text, { style: stepNumber, children: "2" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { style: stepTitle, children: "We'll Contact You" }),
            /* @__PURE__ */ jsxs(Text, { style: stepText, children: [
              "We'll call or text you at ",
              phone,
              " within the next few hours to confirm your appointment and provide any additional details."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: stepContainer, children: [
          /* @__PURE__ */ jsx(Text, { style: stepNumber, children: "3" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Text, { style: stepTitle, children: "We Complete Your Service" }),
            /* @__PURE__ */ jsx(Text, { style: stepText, children: "Our licensed technicians will arrive at your scheduled time to fix your garage door issue professionally." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: trustSection, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Why Choose Ez2Fix?" }),
        /* @__PURE__ */ jsxs("div", { style: trustGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: trustItem, children: [
            /* @__PURE__ */ jsx(Text, { style: trustTitle, children: "Licensed & Insured" }),
            /* @__PURE__ */ jsx(Text, { style: trustText, children: "NJ License #13VH13553300" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: trustItem, children: [
            /* @__PURE__ */ jsx(Text, { style: trustTitle, children: "10-Year Warranty" }),
            /* @__PURE__ */ jsx(Text, { style: trustText, children: "On all installations" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: trustItem, children: [
            /* @__PURE__ */ jsx(Text, { style: trustTitle, children: "5.0★ Rated" }),
            /* @__PURE__ */ jsx(Text, { style: trustText, children: "500+ Google reviews" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Need Prompt Help?" }),
        /* @__PURE__ */ jsx(Text, { style: infoText, children: "If your garage door issue is urgent and requires prompt attention, please don't hesitate to call us directly." }),
        /* @__PURE__ */ jsx(Button, { style: emergencyButton, href: "tel:2015546769", children: "Call (201) 554-6769 - 24/7" })
      ] }),
      /* @__PURE__ */ jsxs(Section, { style: footer, children: [
        /* @__PURE__ */ jsxs(Text, { style: footerText, children: [
          "Ez2Fix Garage Door Service",
          /* @__PURE__ */ jsx("br", {}),
          "Professional Garage Door Repair & Installation in Northern New Jersey",
          /* @__PURE__ */ jsx("br", {}),
          "Licensed & Insured | NJ License #13VH13553300"
        ] }),
        /* @__PURE__ */ jsx(Text, { style: privacyText, children: "We respect your privacy. Your information will not be sold or shared with third parties." })
      ] })
    ] }) })
  ] });
};
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};
const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px"
};
const header = {
  padding: "32px 24px",
  borderBottom: "1px solid #eaeaea",
  textAlign: "center"
};
const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 12px",
  padding: "0"
};
const leadText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0"
};
const section = {
  padding: "24px"
};
const trustSection = {
  padding: "24px",
  backgroundColor: "#fffbeb"
};
const h2 = {
  color: "#1f2937",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 16px"
};
const infoText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "4px 0"
};
const stepContainer = {
  display: "flex",
  gap: "16px",
  marginBottom: "20px",
  alignItems: "flex-start"
};
const stepNumber = {
  backgroundColor: "#f59e0b",
  borderRadius: "50%",
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "bold",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  margin: "0",
  padding: "0",
  lineHeight: "40px",
  textAlign: "center"
};
const stepTitle = {
  color: "#1f2937",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 4px"
};
const stepText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0"
};
const trustGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px"
};
const trustItem = {
  textAlign: "center"
};
const trustTitle = {
  color: "#1f2937",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 4px"
};
const trustText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0"
};
const hr = {
  borderColor: "#e5e7eb",
  margin: "0"
};
const emergencyButton = {
  backgroundColor: "#dc2626",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "14px 32px",
  margin: "16px 0 0"
};
const footer = {
  padding: "24px",
  textAlign: "center",
  borderTop: "1px solid #eaeaea"
};
const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 8px"
};
const privacyText = {
  color: "#9ca3af",
  fontSize: "11px",
  lineHeight: "16px",
  margin: "8px 0 0"
};

const prerender = false;
const bookingSchema = z.object({
  service: z.string().min(1),
  serviceOther: z.string().optional(),
  comments: z.string().optional(),
  addressFull: z.string().optional(),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().default("NJ"),
  zipCode: z.string().regex(/^\d{5}$/),
  aptNumber: z.string().optional(),
  gateCode: z.string().optional(),
  name: z.string().min(1),
  phone: z.string().regex(/^\d{10,11}$/),
  email: z.string().email().optional(),
  consentToContact: z.boolean(),
  agreedToTerms: z.boolean(),
  recaptchaToken: z.string().optional(),
  fax: z.string().optional(),
  // Honeypot
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
  formStartTime: z.string().optional()
});
function generateSessionToken() {
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString("base64");
}
const POST = async ({ request, cookies }) => {
  try {
    const resend = new Resend("re_4iYQ4WJg_82awHXUb1TBESKREh2NxdfaW");
    console.log("=== BOOKING API CALLED ===");
    console.log("Request method:", request.method);
    console.log("Content-Type:", request.headers.get("content-type"));
    let data;
    try {
      const bodyText = await request.text();
      console.log("Raw body text:", bodyText);
      if (!bodyText || bodyText.trim() === "") {
        console.error("Request body is empty");
        return new Response(
          JSON.stringify({ success: false, message: "Request body is empty" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      data = JSON.parse(bodyText);
      console.log("Parsed data successfully");
      console.log("Data keys:", Object.keys(data));
    } catch (jsonError) {
      console.error("JSON parsing failed:", jsonError);
      return new Response(
        JSON.stringify({ success: false, message: "Invalid JSON format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (data.fax) {
      console.log("Honeypot triggered");
      return new Response(
        JSON.stringify({ success: true, token: "fake-token" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    if (data.phone) {
      data.phone = data.phone.replace(/\D/g, "");
      if (data.phone.length === 11 && data.phone.startsWith("1")) {
        data.phone = data.phone.substring(1);
      }
      console.log("Cleaned phone:", data.phone);
    }
    console.log("Starting validation...");
    const validated = bookingSchema.parse(data);
    console.log("Validation passed");
    if (!validated.consentToContact || !validated.agreedToTerms) {
      return new Response(
        JSON.stringify({ success: false, message: "You must agree to the terms and privacy policy" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
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
        console.warn("reCAPTCHA validation failed:", recaptchaData);
        return new Response(
          JSON.stringify({ success: false, message: "reCAPTCHA validation failed. Please try again." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      console.log("reCAPTCHA validated successfully, score:", recaptchaData.score);
    } else {
      console.warn("No reCAPTCHA token provided, proceeding without verification");
    }
    const formattedPhone = validated.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    const serviceName = validated.service === "other" ? validated.serviceOther || "Other Service" : validated.service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
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
      formStartTime: validated.formStartTime
    };
    try {
      console.log("Rendering owner email...");
      const ownerEmailHtml = await render(OwnerNotificationEmail(emailData));
      console.log("Owner email rendered, sending...");
      await resend.emails.send({
        from: "noreply@ez2fixllc.com",
        to: "yaronhayo@gmail.com",
        reply_to: validated.email || formattedPhone,
        subject: `🔔 New Lead: ${serviceName} in ${validated.city}, ${validated.state} - ${validated.name}`,
        html: ownerEmailHtml
      });
      console.log("Owner email sent successfully");
    } catch (emailError) {
      console.error("Failed to send owner notification email:", emailError);
      console.error("Email error stack:", emailError instanceof Error ? emailError.stack : "No stack");
    }
    if (validated.email) {
      try {
        console.log("Rendering client email...");
        const clientEmailHtml = await render(
          ClientConfirmationEmail({
            name: validated.name,
            phone: formattedPhone,
            service: validated.service,
            serviceOther: validated.serviceOther
          })
        );
        console.log("Client email rendered, sending...");
        await resend.emails.send({
          from: "noreply@ez2fixllc.com",
          to: validated.email,
          subject: "✅ Your Garage Door Service Request Confirmed - Ez2Fix",
          html: clientEmailHtml
        });
        console.log("Client email sent successfully");
      } catch (emailError) {
        console.error("Failed to send client confirmation email:", emailError);
        console.error("Email error stack:", emailError instanceof Error ? emailError.stack : "No stack");
      }
    }
    const sessionToken = generateSessionToken();
    console.log("Generated session token");
    cookies.set("booking_session", sessionToken, {
      path: "/",
      maxAge: 3600,
      // 1 hour
      httpOnly: true,
      secure: true,
      sameSite: "lax"
    });
    console.log("Cookie set");
    console.log("Booking API completed successfully");
    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking submitted successfully",
        token: sessionToken
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Booking error:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    console.error("Error details:", JSON.stringify(error, null, 2));
    if (error instanceof z.ZodError) {
      console.error("Zod validation errors:", error.errors);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid form data. Please check your entries and try again.",
          errors: error.errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while submitting your request. Please try again or call us directly."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
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
