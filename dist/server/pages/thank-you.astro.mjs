import { d as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dtj6r08Z.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, b as $$Icon, a as $$Button, c as $$Footer } from '../chunks/Footer_CgO5adBe.mjs';
import { $ as $$Header } from '../chunks/Header_C1S3cZ41.mjs';
import { s as siteConfig } from '../chunks/site.config_B-PzYkwI.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _c;
const $$Astro = createAstro("https://ez2fixllc.com");
const prerender = false;
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThankYou;
  const noIndex = true;
  const url = new URL(Astro2.request.url);
  const sessionToken = url.searchParams.get("token");
  const sessionCookie = Astro2.cookies.get("booking_session");
  console.log("Thank-you page access attempt:", {
    hasToken: !!sessionToken,
    hasCookie: !!sessionCookie?.value,
    tokenValue: sessionToken,
    cookieValue: sessionCookie?.value,
    url: url.toString()
  });
  if (!sessionToken && !sessionCookie?.value) {
    console.log("No valid session found (token or cookie), redirecting to homepage");
  }
  console.log("Valid session found, allowing access to thank-you page");
  if (sessionCookie) {
    Astro2.cookies.delete("booking_session", { path: "/" });
    console.log("Session cookie cleared");
  }
  return renderTemplate(_c || (_c = __template(["", " <!-- Google Ads Conversion Tracking --> ", " <!-- Microsoft Ads (Bing) Conversion Tracking --> ", ` <!-- Google Analytics 4 Event --> <script type="text/partytown">
    gtag('event', 'generate_lead', {
        'event_category': 'engagement',
        'event_label': 'booking_form_submission',
        'value': 1
    });
</script> <!-- ClickCease.com Conversion tracking --> <script type="text/javascript">
    window.ccConVal = 0;
    var script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    var target = 'https://www.clickcease.com/monitor/cccontrack.js';
    script.src = target; var elem = document.head; elem.appendChild(script);
</script> <noscript> <a href="https://www.clickcease.com" rel="nofollow"><img src="https://monitor.clickcease.com/conversions/conversions.aspx?value=0" alt="ClickCease"></a> <!-- ClickCease.com Conversion tracking --></noscript>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank You - Service Request Received | Ez2Fix", "description": "Thank you for choosing Ez2Fix. We have received your service request and will contact you shortly.", "noindex": noIndex }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-br from-dark-700 to-dark-600 text-cream-100 py-20 md:py-32"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <!-- Success Icon --> <div class="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:check", "class": "w-12 h-12 text-dark-700" })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-cream-100">Thank You!</h1> <p class="text-2xl text-cream-200 mb-8">
We've Received Your Request
</p> <p class="text-lg text-cream-200 mb-8">
A member of our team will contact you shortly to confirm
                    your appointment and answer any questions you may have.
</p> <!-- What Happens Next --> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left border border-gold-200/20"> <h2 class="text-2xl font-bold mb-6 text-center text-cream-100">
What Happens Next?
</h2> <div class="space-y-4"> <div class="flex items-start"> <div class="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1"> <span class="text-dark-700 font-bold">1</span> </div> <div> <h3 class="text-xl font-semibold mb-2 text-cream-100">
We Review Your Request
</h3> <p class="text-cream-200">
Our team will review the details of your
                                    service request and gather any necessary
                                    information.
</p> </div> </div> <div class="flex items-start"> <div class="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1"> <span class="text-dark-700 font-bold">2</span> </div> <div> <h3 class="text-xl font-semibold mb-2 text-cream-100">
We Contact You
</h3> <p class="text-cream-200">
We'll call or email you within a few hours
                                    to confirm your appointment and provide any
                                    additional details.
</p> </div> </div> <div class="flex items-start"> <div class="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1"> <span class="text-dark-700 font-bold">3</span> </div> <div> <h3 class="text-xl font-semibold mb-2 text-cream-100">
We Complete Your Service
</h3> <p class="text-cream-200">
Our licensed technicians will arrive at your
                                    scheduled appointment time to fix your
                                    garage door issue.
</p> </div> </div> </div> </div> </div> </div> </section>  <section class="section bg-cream-100"> <div class="container mx-auto px-4"> <div class="max-w-2xl mx-auto text-center"> <h2 class="text-3xl font-bold text-dark-700 mb-4">
Have an Emergency?
</h2> <p class="text-dark-600 mb-6">
If your garage door issue is urgent and you need prompt
                    assistance, please call us now.
</p> ${renderComponent($$result2, "Button", $$Button, { "variant": "emergency", "size": "lg", "href": `tel:${siteConfig.contact.phoneRaw}` }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "heroicons:phone", "class": "w-5 h-5 mr-2" })}
Call ${siteConfig.contact.phone} - 24/7
` })} </div> </div> </section>  <section class="section bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-dark-700 mb-8 text-center">
Why Our Customers Choose Ez2Fix
</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:shield-check", "class": "w-8 h-8 text-gold-600" })} </div> <h3 class="text-xl font-bold text-dark-700 mb-2">
Licensed & Insured
</h3> <p class="text-dark-600">
NJ License ${siteConfig.contact.license} </p> </div> <div class="text-center"> <div class="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:clock", "class": "w-8 h-8 text-gold-600" })} </div> <h3 class="text-xl font-bold text-dark-700 mb-2">
10-Year Warranty
</h3> <p class="text-dark-600">On All Installations</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:star-solid", "class": "w-8 h-8 text-gold-600" })} </div> <h3 class="text-xl font-bold text-dark-700 mb-2">
5.0★ Rated
</h3> <p class="text-dark-600">500+ Reviews</p> </div> </div> </div> </div> </section>  <section class="section bg-gradient-to-br from-dark-700 to-dark-600 text-white text-center"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-4 text-cream-100">Browse Our Services</h2> <p class="text-xl text-cream-200 mb-6">
Learn more about our garage door repair and installation
                services
</p> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "lg", "href": "/services" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "heroicons:wrench-screwdriver", "class": "w-5 h-5 mr-2" })}
View All Services
` })} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }), "", "");
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/pages/thank-you.astro", void 0);
const $$file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ThankYou,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
