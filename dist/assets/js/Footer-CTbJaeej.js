import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, d as createAstro, r as renderComponent, f as renderSlot, k as renderHead, b as addAttribute, u as unescapeHTML } from "./astro/server-CwXtluzS.js";
import "piccolore";
import "clsx";
/* empty css                        */
import { jsx } from "react/jsx-runtime";
import "react";
import { HelpCircle, Facebook, Youtube, Instagram, AlertTriangle, BookOpen, Home, Pause, Play, Smile, Clock, ChevronLeft, Send, ShieldCheck, BarChart3, ClipboardList, Heart, Users, MessageCircle, Settings, CheckCircle, DollarSign, Shield, ArrowRight, X, Menu, ChevronRight, ChevronDown, Check, Calendar, Phone, Mail, Info, Star, MapPin, Map, Building2, LayoutDashboard, Link, Wrench, DoorOpen, Wifi, Activity, Zap } from "lucide-react";
const siteConfig = {
  company: {
    name: "Ez2Fix",
    legalName: "Ez2Fix LLC",
    tagline: "Professional Garage Door Repair & Installation in Northern New Jersey",
    domain: "ez2fixllc.com"
  },
  contact: {
    phone: "(201) 554-6769",
    phoneRaw: "2015546769",
    email: "ez2fixllc@gmail.com",
    license: "#13VH13553300"
  },
  coverage: {
    primaryHub: "Northern New Jersey",
    counties: ["Essex County", "Bergen County", "Hudson County", "Passaic County", "Morris County"],
    stateAbbr: "NJ"
  },
  social: {
    googleBusiness: "https://maps.app.goo.gl/cRHSWB5sdghwCxV66",
    instagram: "https://www.instagram.com/ez2fix_garage_doors_/",
    youtube: "https://www.youtube.com/@EZ2FIXGARAGEDOORNEWJERSEY",
    facebook: ""
    // Not provided yet
  },
  businessHours: {
    weekdays: "Mon-Fri: 8am-8pm",
    weekends: "Sat-Sun: 9am-6pm",
    emergency: "Emergency: 24/7 Available"
  },
  trustSignals: {
    yearsInBusiness: 11,
    customersServed: "12,000+",
    rating: "5.0",
    reviewCount: "148+",
    warranty: "10-Year Warranty"
  },
  // Service Area Business mode (no street address display)
  attribution: {
    url: "https://gettmarketing.com"
  }
};
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
const $$Astro$1 = createAstro("https://ez2fixllc.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    canonical,
    noindex = false,
    ogImage = "/images/og/og-default.png",
    schema = []
  } = Astro2.props;
  const fullTitle = `${title} | ${siteConfig.company.name}`;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site).href;
  const ogImageURL = new URL(ogImage, Astro2.site).href;
  const allSchema = [generateLocalBusinessSchema(), ...schema];
  return renderTemplate(_d || (_d = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicons --><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><link rel="apple-touch-icon" sizes="180x180" href="/images/logos/ez2fix-logo.png"><link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#D4AF37"><meta name="generator"', '><!-- Google Tag Manager (Deferred for Performance) --><script>\n            // Defer GTM until page interactive\n            window.addEventListener("load", function () {\n                setTimeout(function () {\n                    (function (w, d, s, l, i) {\n                        w[l] = w[l] || [];\n                        w[l].push({\n                            "gtm.start": new Date().getTime(),\n                            event: "gtm.js",\n                        });\n                        var f = d.getElementsByTagName(s)[0],\n                            j = d.createElement(s),\n                            dl = l != "dataLayer" ? "&l=" + l : "";\n                        j.async = true;\n                        j.src =\n                            "https://www.googletagmanager.com/gtm.js?id=" +\n                            i +\n                            dl;\n                        f.parentNode.insertBefore(j, f);\n                    })(window, document, "script", "dataLayer", "GTM-TDFV4QVJ");\n                }, 1000);\n            });\n        <\/script><!-- End Google Tag Manager --><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Robots -->", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- AI & LLM Optimization -->", '<meta name="ai-content-declaration" content="non-generated"><meta name="gptbot" content="index, follow"><meta name="googlebot" content="index, follow"><!-- Structured Data -->', `<!-- Preconnect to important domains --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Defer Google Fonts to eliminate render-blocking --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" media="print" onload="this.media='all'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"></noscript><!-- Preload critical fonts for better LCP --><link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2" as="font" type="font/woff2" crossorigin><!-- Preconnect to reCAPTCHA --><link rel="preconnect" href="https://www.google.com"><link rel="preconnect" href="https://www.gstatic.com" crossorigin><!-- DNS prefetch for external resources --><link rel="dns-prefetch" href="https://www.google.com"><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="preconnect" href="https://www.gstatic.com" crossorigin><!-- reCAPTCHA v3 (Deferred - async) -->', "", `</head> <body> <!-- Skip Navigation Link for Accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold-500 focus:text-dark-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:shadow-xl">
Skip to main content
</a> <!-- ClickCease.com tracking --> <script>
            window.addEventListener("load", function () {
                var script = document.createElement("script");
                script.async = true;
                script.type = "text/javascript";
                var target = "https://www.clickcease.com/monitor/stat.js";
                script.src = target;
                var elem = document.head;
                elem.appendChild(script);
            });
        <\/script> <noscript> <a href="https://www.clickcease.com" rel="nofollow"><img src="https://monitor.clickcease.com" alt="ClickCease"></a> </noscript> <script>
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
        <\/script> <!-- END CLICKCEASE --> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDFV4QVJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Register Service Worker for PWA (Production Only) --> `, " ", " <!-- Scroll to Top Button --> ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), !noindex && renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`, allSchema.map((schemaItem) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schemaItem)))), maybeRenderHead(), renderTemplate(_b || (_b = __template(["<script async defer", "><\/script>"])), addAttribute(`https://www.google.com/recaptcha/api.js?render=${"6LdFn6krAAAAAJXaiq0hr8p3fTd4L9RQr5p0giwR"}`, "src")), renderHead(), renderTemplate(_c || (_c = __template(['<script>\n                    if ("serviceWorker" in navigator) {\n                        window.addEventListener("load", function () {\n                            navigator.serviceWorker\n                                .register("/sw.js")\n                                .catch(function (err) {\n                                    console.log(\n                                        "Service Worker registration failed:",\n                                        err,\n                                    );\n                                });\n                        });\n                    }\n                <\/script>']))), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ScrollToTop", $$ScrollToTop, {}));
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/layouts/BaseLayout.astro", void 0);
const $$Astro = createAstro("https://ez2fixllc.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    type = "button",
    href,
    class: className = "",
    disabled = false
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = {
    primary: "bg-gold-500 text-dark-900 shadow-lg hover:bg-gold-600 hover:text-white hover:shadow-xl hover:scale-105 active:scale-100 focus:ring-gold-300",
    secondary: "bg-white text-dark-900 border-2 border-dark-900 hover:bg-gray-50 hover:border-dark-700 active:bg-gray-100 focus:ring-gray-300 shadow-md",
    emergency: "bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl hover:scale-105 active:scale-100 focus:ring-red-300",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-dark-900 focus:ring-white/30"
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const Tag = href ? "a" : "button";
  const { variant: _, size: __, class: ___, ...htmlProps } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": classes, "type": href ? void 0 : type, "href": href, "disabled": disabled, ...htmlProps }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/Button.astro", void 0);
const iconMap = {
  bolt: Zap,
  spring: Activity,
  remote: Wifi,
  door: DoorOpen,
  wrench: Wrench,
  cable: Link,
  panel: LayoutDashboard,
  track: Pause,
  building: Building2,
  // General UI
  question: HelpCircle,
  helpCircle: HelpCircle,
  map: Map,
  mapPin: MapPin,
  star: Star,
  info: Info,
  mail: Mail,
  phone: Phone,
  calendar: Calendar,
  check: Check,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  shield: Shield,
  dollar: DollarSign,
  checkCircle: CheckCircle,
  settings: Settings,
  message: MessageCircle,
  users: Users,
  heart: Heart,
  clipboard: ClipboardList,
  barChart: BarChart3,
  shieldCheck: ShieldCheck,
  send: Send,
  chevronLeft: ChevronLeft,
  clock: Clock,
  smile: Smile,
  play: Play,
  pause: Pause,
  home: Home,
  bookOpen: BookOpen,
  alertTriangle: AlertTriangle,
  // Social Media
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  default: HelpCircle
};
const Icon = ({ name, className, ...props }) => {
  const IconComponent = iconMap[name] || iconMap.default;
  if (name === "star") {
    return /* @__PURE__ */ jsx(IconComponent, { className, fill: "currentColor", ...props });
  }
  return /* @__PURE__ */ jsx(IconComponent, { className, ...props });
};
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const mainLinks = [
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" }
  ];
  const secondaryLinks = [
    { name: "FAQ", href: "/faq" },
    {
      name: "Book Online",
      href: "/booking?utm_source=website&utm_medium=cta&utm_campaign=footer"
    },
    {
      name: "Contact Us",
      href: "/contact?utm_source=website&utm_medium=cta&utm_campaign=footer"
    }
  ];
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Accessibility", href: "/accessibility" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-700 text-cream-100" data-astro-cid-35ed7um5> <div class="container mx-auto px-4 sm:px-6 pt-16 pb-8" data-astro-cid-35ed7um5> <!-- Main Footer Content --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12 text-center sm:text-left" data-astro-cid-35ed7um5> <!-- Column 1: Company Info --> <div class="sm:col-span-2 xl:col-span-2" data-astro-cid-35ed7um5> <a href="/" class="inline-block mb-4" data-astro-cid-35ed7um5> <img src="/images/logos/ez2fix-logo.png" alt="Ez2Fix LLC Logo" class="h-14 w-auto" width="171" height="48" data-astro-cid-35ed7um5> </a> <p class="text-cream-200 mb-4 max-w-sm mx-auto sm:mx-0" data-astro-cid-35ed7um5> ${siteConfig.company.tagline} </p> <div class="text-sm" data-astro-cid-35ed7um5> <span class="text-gold-300 font-semibold" data-astro-cid-35ed7um5>Licensed, Bonded & Insured</span> <p class="text-cream-200" data-astro-cid-35ed7um5>
NJ License: ${siteConfig.contact.license} </p> </div> <!-- Social Media Links --> <div class="flex justify-center sm:justify-start gap-4 mt-6" data-astro-cid-35ed7um5> <a${addAttribute(siteConfig.social.googleBusiness, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-dark-600 hover:bg-gold-500 flex items-center justify-center transition-all group" aria-label="Visit our Google Business Profile" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "mapPin", "className": "w-5 h-5 text-cream-100 group-hover:text-dark-900 transition-colors", "data-astro-cid-35ed7um5": true })} </a> <a${addAttribute(siteConfig.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-dark-600 hover:bg-gold-500 flex items-center justify-center transition-all group" aria-label="Follow us on Instagram" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "instagram", "className": "w-5 h-5 text-cream-100 group-hover:text-dark-900 transition-colors", "data-astro-cid-35ed7um5": true })} </a> <a${addAttribute(siteConfig.social.youtube, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-dark-600 hover:bg-gold-500 flex items-center justify-center transition-all group" aria-label="Subscribe to our YouTube channel" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "youtube", "className": "w-5 h-5 text-cream-100 group-hover:text-dark-900 transition-colors", "data-astro-cid-35ed7um5": true })} </a> </div> </div> <!-- Column 2: Site Links --> <div data-astro-cid-35ed7um5> <h3 class="text-lg font-semibold text-gold-300 mb-4 flex items-center justify-center sm:justify-start" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "map", "className": "w-5 h-5 mr-2", "data-astro-cid-35ed7um5": true })}
Explore
</h3> <ul class="space-y-2" data-astro-cid-35ed7um5> ${mainLinks.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="text-cream-100 hover:text-gold-200 hover:underline transition-colors" data-astro-cid-35ed7um5> ${link.name} </a> </li>`)} </ul> </div> <!-- Column 3: Get Help --> <div data-astro-cid-35ed7um5> <h3 class="text-lg font-semibold text-gold-300 mb-4 flex items-center justify-center sm:justify-start" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "helpCircle", "className": "w-5 h-5 mr-2", "data-astro-cid-35ed7um5": true })}
Get Help
</h3> <ul class="space-y-2" data-astro-cid-35ed7um5> ${secondaryLinks.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="text-cream-100 hover:text-gold-200 hover:underline transition-colors" data-astro-cid-35ed7um5> ${link.name} </a> </li>`)} </ul> </div> <!-- Column 4: Contact Us --> <div class="text-sm" data-astro-cid-35ed7um5> <h3 class="text-lg font-semibold text-gold-300 mb-4 flex items-center justify-center sm:justify-start" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "phone", "className": "w-5 h-5 mr-2", "data-astro-cid-35ed7um5": true })}
Contact Us
</h3> <div class="space-y-3" data-astro-cid-35ed7um5> <a${addAttribute(`tel:${siteConfig.contact.phoneRaw}`, "href")} class="flex items-center justify-center sm:justify-start text-cream-100 hover:text-gold-200 transition-colors" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "phone", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} ${siteConfig.contact.phone} </a> <a${addAttribute(`mailto:${siteConfig.contact.email}`, "href")} class="flex items-center justify-center sm:justify-start text-cream-100 hover:text-gold-200 transition-colors" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "mail", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} ${siteConfig.contact.email} </a> <p class="flex items-center justify-center sm:justify-start" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "mapPin", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })}
Serving ${siteConfig.coverage.primaryHub} </p> </div> <p class="text-gold-300 font-semibold mt-4" data-astro-cid-35ed7um5>
24/7 Emergency Service
</p> </div> </div> <!-- Trust Badges --> <div class="border-y border-dark-600 py-6 mb-8" data-astro-cid-35ed7um5> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center" data-astro-cid-35ed7um5> <div class="flex items-center justify-center" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "shield", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} <span data-astro-cid-35ed7um5>Licensed & Insured</span> </div> <div class="flex items-center justify-center" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "star", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} <span data-astro-cid-35ed7um5>${siteConfig.trustSignals.rating}★ Google Rating</span> </div> <div class="flex items-center justify-center" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "checkCircle", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} <span data-astro-cid-35ed7um5>${siteConfig.trustSignals.warranty}</span> </div> <div class="flex items-center justify-center" data-astro-cid-35ed7um5> ${renderComponent($$result, "Icon", Icon, { "name": "users", "className": "w-5 h-5 mr-2 text-gold-400", "data-astro-cid-35ed7um5": true })} <span data-astro-cid-35ed7um5>${siteConfig.trustSignals.customersServed}+ Customers</span> </div> </div> </div> <!-- Bottom Bar --> <div class="text-center text-sm space-y-4" data-astro-cid-35ed7um5> <p class="text-cream-200" data-astro-cid-35ed7um5>
Made with ${renderComponent($$result, "Icon", Icon, { "name": "heart", "className": "w-5 h-5 text-gold-400 inline-block animate-heartbeat fill-current", "data-astro-cid-35ed7um5": true })}
by <a${addAttribute(siteConfig.attribution.url, "href")} class="font-semibold text-gold-300 hover:text-gold-200" target="_blank" rel="noopener noreferrer" data-astro-cid-35ed7um5>Gett Marketing</a> </p> <div class="flex justify-center items-center gap-x-4 gap-y-2 flex-wrap" data-astro-cid-35ed7um5> ${legalLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-cream-100 hover:text-gold-200 hover:underline transition-colors" data-astro-cid-35ed7um5> ${link.name} </a>`)} </div> <p class="text-cream-200" data-astro-cid-35ed7um5>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Ez2Fix LLC. All rights reserved.
</p> <p class="text-xs text-dark-400 pt-2" data-astro-cid-35ed7um5>
This site is protected by reCAPTCHA and the Google
<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="hover:text-gold-300 underline" data-astro-cid-35ed7um5>Privacy Policy</a> and
<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="hover:text-gold-300 underline" data-astro-cid-35ed7um5>Terms of Service</a> apply.
</p> </div> </div> </footer> `;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/layout/Footer.astro", void 0);
export {
  $$BaseLayout as $,
  Icon as I,
  $$Button as a,
  $$Footer as b,
  generateFAQSchema as c,
  generateLocalBusinessSchema as d,
  generateReviewSchema as e,
  generateBreadcrumbSchema as g,
  siteConfig as s
};
