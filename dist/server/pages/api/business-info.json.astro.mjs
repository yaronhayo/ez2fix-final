import { s as siteConfig } from '../../chunks/site.config_B-PzYkwI.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  if (request.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Allow": "GET"
        }
      }
    );
  }
  const businessInfo = {
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    phone: siteConfig.contact.phone,
    phoneRaw: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    license: siteConfig.contact.license,
    serviceAreas: {
      primaryHub: siteConfig.coverage.primaryHub,
      counties: siteConfig.coverage.counties
    },
    hours: {
      weekdays: siteConfig.businessHours.weekdays,
      weekends: siteConfig.businessHours.weekends,
      emergency: siteConfig.businessHours.emergency
    },
    social: siteConfig.social,
    schema: {
      url: siteConfig.company.domain,
      description: siteConfig.company.tagline
    }
  };
  return new Response(
    JSON.stringify(businessInfo, null, 2),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache for 1 hour on client, 24 hours on CDN
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200",
        // CORS - allow requests from our domain only
        "Access-Control-Allow-Origin": `https://${siteConfig.company.domain}`,
        "Access-Control-Allow-Methods": "GET",
        // Security headers
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
