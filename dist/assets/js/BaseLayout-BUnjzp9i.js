import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, d as createAstro, r as renderComponent, g as renderSlot, f as renderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from "./astro/server-Bk6MH9UW.js";
import "piccolore";
import { s as siteConfig } from "./Footer-CJD9vIqY.js";
import "clsx";
/* empty css                        */
function generateLocalBusinessSchema(cities) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: `https://${siteConfig.company.domain}`,
    logo: `https://${siteConfig.company.domain}/images/logos/ez2fix-logo.png`,
    description: siteConfig.company.tagline,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: (cities || [
      "Newark",
      "Jersey City",
      "Paterson",
      "Elizabeth",
      "Clifton",
      "Hackensack",
      "Passaic",
      "Bayonne",
      "Union City",
      "East Orange",
      "Montclair",
      "Fair Lawn",
      "Cedar Grove",
      "Little Falls",
      "West Caldwell",
      "North Caldwell"
    ]).map((city) => ({
      "@type": "City",
      name: `${city}, ${siteConfig.coverage.stateAbbr}`
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "$$",
    knowsAbout: [
      "Garage Door Repair",
      "Garage Door Installation",
      "Garage Door Opener Repair",
      "Spring Replacement",
      "Commercial Garage Doors"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Door Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garage Door Repair"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spring Replacement"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Opener Installation"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.trustSignals.rating,
      reviewCount: parseInt(siteConfig.trustSignals.reviewCount.replace(/\D/g, "")) || 500
    }
  };
  {
    schema.sameAs = [
      siteConfig.social.facebook,
      siteConfig.social.googleBusiness
    ].filter(Boolean);
  }
  return schema;
}
function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function generateReviewSchema(review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.reviewRating,
      bestRating: "5",
      worstRating: "1"
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.company.legalName,
      image: `https://${siteConfig.company.domain}/images/logos/ez2fix-logo.png`,
      telephone: siteConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.coverage.primaryHub,
        addressRegion: siteConfig.coverage.stateAbbr,
        addressCountry: "US"
      }
    }
  };
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="scroll-to-top" class="fixed right-6 top-[55%] z-40 opacity-0 pointer-events-none transition-all duration-300 hover:opacity-100 hover:scale-110 bg-gold-500 text-dark-900 p-4 rounded-full shadow-lg hover:shadow-xl border-2 border-white" aria-label="Scroll to top" title="Scroll to top" data-astro-cid-hnzwq3ap> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hnzwq3ap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" data-astro-cid-hnzwq3ap></path> </svg> </button> ${renderScript($$result, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/ScrollToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/ScrollToTop.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c, _d;
const $$Astro = createAstro("https://ez2fixllc.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    canonical,
    noindex = false,
    ogImage = "/images/og/og-default.png",
    schema = [],
    loadRecaptcha = false
    // Default to not loading reCAPTCHA
  } = Astro2.props;
  const fullTitle = `${title} | ${siteConfig.company.name}`;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site).href;
  const ogImageURL = new URL(ogImage, Astro2.site).href;
  const allSchema = [generateLocalBusinessSchema(), ...schema];
  return renderTemplate(_d || (_d = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicons --><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><link rel="apple-touch-icon" sizes="180x180" href="/images/logos/ez2fix-logo.png"><link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#D4AF37"><meta name="generator"', '><!-- Google Tag Manager (Partytown for performance) --><script type="text/partytown">\n            (function (w, d, s, l, i) {\n                w[l] = w[l] || [];\n                w[l].push({\n                    "gtm.start": new Date().getTime(),\n                    event: "gtm.js",\n                });\n                var f = d.getElementsByTagName(s)[0],\n                    j = d.createElement(s),\n                    dl = l != "dataLayer" ? "&l=" + l : "";\n                j.async = true;\n                j.src =\n                    "https://www.googletagmanager.com/gtm.js?id=" +\n                    i +\n                    dl;\n                f.parentNode.insertBefore(j, f);\n            })(window, document, "script", "dataLayer", "GTM-TDFV4QVJ");\n        <\/script><!-- End Google Tag Manager --><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Robots -->", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- AI & LLM Optimization -->", '<meta name="ai-content-declaration" content="non-generated"><meta name="gptbot" content="index, follow"><meta name="googlebot" content="index, follow"><!-- Structured Data -->', "<!-- Fonts are loaded locally in global.css -->", '<!-- DNS prefetch for external resources --><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="https://www.clarity.ms"><link rel="dns-prefetch" href="https://www.clickcease.com"><!-- reCAPTCHA v3 (Only loaded on pages with forms) -->', "", `</head> <body> <!-- Skip Navigation Link for Accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold-500 focus:text-dark-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:shadow-xl">
Skip to main content
</a> <!-- ClickCease.com tracking (Partytown for performance) --> <script type="text/partytown">
            var script = document.createElement("script");
            script.async = true;
            script.type = "text/javascript";
            script.src = "https://www.clickcease.com/monitor/stat.js";
            document.head.appendChild(script);
        <\/script> <noscript> <a href="https://www.clickcease.com" rel="nofollow"><img src="https://monitor.clickcease.com" alt="ClickCease"></a> </noscript> <script type="text/partytown">
            window.initCConvertion = function (val) {
                window.ccConVal = val || 0;
                var script = document.createElement("script");
                var target = "https://www.clickcease.com/monitor/cccontrack.js";
                var elem = document.head;
                elem.appendChild(script);
                script.src = target + "?v=" + Math.floor(Date.now() / 1000);
            };

            document.addEventListener("click", function (e) {
                const link = e.target.closest('a[href^="tel:"]');
                if (link) {
                    if (typeof window.initCConvertion === "function") {
                        window.initCConvertion(0);
                    }
                }
            });
        <\/script> <!-- END CLICKCEASE --> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDFV4QVJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Register Service Worker for PWA (Production Only) --> `, ' <main id="main-content"> ', " </main> <!-- Scroll to Top Button --> ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), !noindex && renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`, allSchema.map((schemaItem) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schemaItem)))), loadRecaptcha && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="preconnect" href="https://www.google.com"><link rel="preconnect" href="https://www.gstatic.com" crossorigin>` })}`, loadRecaptcha && "6LdFn6krAAAAAJXaiq0hr8p3fTd4L9RQr5p0giwR" && renderTemplate(_b || (_b = __template(["<script async defer", "><\/script>"])), addAttribute(`https://www.google.com/recaptcha/api.js?render=${"6LdFn6krAAAAAJXaiq0hr8p3fTd4L9RQr5p0giwR"}`, "src")), renderHead(), renderTemplate(_c || (_c = __template(['<script>\n                    if ("serviceWorker" in navigator) {\n                        window.addEventListener("load", function () {\n                            navigator.serviceWorker\n                                .register("/sw.js")\n                                .catch(function (err) {\n                                    console.log(\n                                        "Service Worker registration failed:",\n                                        err,\n                                    );\n                                });\n                        });\n                    }\n                <\/script>']))), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ScrollToTop", $$ScrollToTop, {}));
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $,
  generateFAQSchema as a,
  generateLocalBusinessSchema as b,
  generateReviewSchema as c,
  generateBreadcrumbSchema as g
};
