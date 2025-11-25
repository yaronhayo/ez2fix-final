import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Button } from '@react-email/components';
import { formatInTimeZone } from 'date-fns-tz';

const OwnerNotificationEmail = (props) => {
  const {
    name,
    phone,
    email,
    service,
    serviceOther,
    comments,
    addressFull,
    street,
    city,
    state,
    zipCode,
    aptNumber,
    gateCode,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    referrer,
    landingPage,
    deviceType,
    browser,
    os,
    sessionStart,
    formStartTime
  } = props;
  const serviceName = service === "other" ? serviceOther || "Other Service" : service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const addressForMap = addressFull || `${street}, ${city}, ${state} ${zipCode}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressForMap)}`;
  const timezone = "America/New_York";
  const submittedTime = formatInTimeZone(/* @__PURE__ */ new Date(), timezone, "EEEE, MMMM d, yyyy 'at' h:mm a zzz");
  let sessionDuration = "";
  if (sessionStart && formStartTime) {
    const duration = new Date(formStartTime).getTime() - new Date(sessionStart).getTime();
    const minutes = Math.floor(duration / 6e4);
    const seconds = Math.floor(duration % 6e4 / 1e3);
    sessionDuration = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
  }
  const getTrafficSource = () => {
    if (utmSource) {
      if (utmMedium === "cpc" || utmMedium === "ppc") {
        return `💰 Paid (${utmSource})`;
      }
      return `🔗 ${utmSource.charAt(0).toUpperCase() + utmSource.slice(1)}`;
    }
    if (!referrer || referrer === "") return "🔗 Direct";
    try {
      const domain = new URL(referrer).hostname;
      if (domain.includes("google")) return "🔍 Google Organic";
      if (domain.includes("bing")) return "🔍 Bing Organic";
      if (domain.includes("facebook")) return "📘 Facebook";
      if (domain.includes("instagram")) return "📸 Instagram";
      return `🔗 Referral (${domain})`;
    } catch {
      return "🔗 Unknown";
    }
  };
  const trafficSource = getTrafficSource();
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsxs(Preview, { children: [
      "New service request from ",
      name,
      " - ",
      serviceName,
      " in ",
      city,
      ", ",
      state
    ] }),
    /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
      /* @__PURE__ */ jsxs(Section, { style: header, children: [
        /* @__PURE__ */ jsx(Heading, { style: h1, children: "🔔 New Lead Alert" }),
        /* @__PURE__ */ jsx(Text, { style: timestamp, children: submittedTime })
      ] }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Service Requested" }),
        /* @__PURE__ */ jsx(Text, { style: infoTextLarge, children: serviceName }),
        comments && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Heading, { as: "h3", style: h3, children: "Customer Notes" }),
          /* @__PURE__ */ jsx(Text, { style: commentBox, children: comments })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Customer Information" }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Name:" }),
          " ",
          name
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
          " ",
          phone
        ] }),
        email && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Email:" }),
          " ",
          email
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Service Address" }),
        /* @__PURE__ */ jsx(Text, { style: infoText, children: street }),
        aptNumber && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          "Apt: ",
          aptNumber
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          city,
          ", ",
          state,
          " ",
          zipCode
        ] }),
        gateCode && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Gate Code:" }),
          " ",
          gateCode
        ] }),
        /* @__PURE__ */ jsx(Button, { style: button, href: mapUrl, children: "📍 View on Google Maps" })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Lead Source & Tracking" }),
        /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Source:" }),
          " ",
          trafficSource
        ] }),
        utmCampaign && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Campaign:" }),
          " ",
          utmCampaign
        ] }),
        utmContent && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Content:" }),
          " ",
          utmContent
        ] }),
        utmTerm && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Search Term:" }),
          " ",
          utmTerm
        ] }),
        landingPage && /* @__PURE__ */ jsxs(Text, { style: infoTextSmall, children: [
          /* @__PURE__ */ jsx("strong", { children: "Landing Page:" }),
          " ",
          landingPage
        ] }),
        referrer && /* @__PURE__ */ jsxs(Text, { style: infoTextSmall, children: [
          /* @__PURE__ */ jsx("strong", { children: "Referrer:" }),
          " ",
          referrer
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Device & Session" }),
        deviceType && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Device:" }),
          " ",
          deviceType === "Mobile" ? "📱" : deviceType === "Tablet" ? "📊" : "💻",
          " ",
          deviceType
        ] }),
        browser && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Browser:" }),
          " ",
          browser
        ] }),
        os && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "OS:" }),
          " ",
          os
        ] }),
        sessionDuration && /* @__PURE__ */ jsxs(Text, { style: infoText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Time on Site:" }),
          " ",
          sessionDuration
        ] })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Action Items" }),
        /* @__PURE__ */ jsx(Button, { style: buttonPrimary, href: `tel:${phone}`, children: "📞 Call Customer Now" }),
        email && /* @__PURE__ */ jsx(Button, { style: button, href: `mailto:${email}`, children: "✉️ Send Email" })
      ] }),
      /* @__PURE__ */ jsx(Section, { style: footer, children: /* @__PURE__ */ jsxs(Text, { style: footerText, children: [
        "Ez2Fix Garage Door Service",
        /* @__PURE__ */ jsx("br", {}),
        "Licensed & Insured | NJ License #13VH13553300",
        /* @__PURE__ */ jsx("br", {}),
        "389 E 54th St, Elmwood Park, NJ 07407"
      ] }) })
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
  textAlign: "center",
  backgroundColor: "#fef3c7"
};
const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 8px",
  padding: "0"
};
const timestamp = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0"
};
const section = {
  padding: "24px"
};
const h2 = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 12px"
};
const h3 = {
  color: "#374151",
  fontSize: "16px",
  fontWeight: "600",
  margin: "16px 0 8px"
};
const infoText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "4px 0"
};
const infoTextLarge = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "28px",
  margin: "4px 0"
};
const infoTextSmall = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "2px 0",
  wordBreak: "break-all"
};
const commentBox = {
  backgroundColor: "#f3f4f6",
  borderLeft: "4px solid #f59e0b",
  padding: "12px 16px",
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "8px 0",
  borderRadius: "4px"
};
const hr = {
  borderColor: "#e5e7eb",
  margin: "0"
};
const button = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
  margin: "8px 8px 0 0"
};
const buttonPrimary = {
  ...button,
  backgroundColor: "#f59e0b",
  color: "#1f2937",
  fontSize: "16px",
  padding: "14px 32px"
};
const footer = {
  padding: "24px",
  textAlign: "center",
  borderTop: "1px solid #eaeaea"
};
const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "18px"
};

export { OwnerNotificationEmail as O };
