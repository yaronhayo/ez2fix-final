import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from "./astro/server-BU2CT6Eb.js";
import "piccolore";
import { I as Icon, a as $$Button } from "./Footer-7dGzek7_.js";
const $$Astro = createAstro("https://ez2fixllc.com");
const $$FAQSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQSection;
  const {
    title = "Frequently Asked Questions",
    subtitle = "Get answers to common questions about this service",
    faqs,
    className,
    showCTA = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 bg-white ${className || ""}`, "class")}> <div class="container mx-auto px-4 max-w-4xl"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-dark-700 mb-4"> ${title} </h2> <p class="text-lg text-dark-600"> ${subtitle} </p> </div> <div class="space-y-4"> ${faqs.map((faq, index) => renderTemplate`<details class="group bg-gradient-to-br from-white to-cream-50 rounded-xl border-2 border-gold-200/30 hover:border-gold-300/50 open:border-gold-400/60 open:bg-white open:shadow-lg transition-all duration-300"${addAttribute(index === 0, "open")}> <summary class="flex items-start gap-4 p-6 cursor-pointer list-none hover:bg-cream-50/50 rounded-xl transition-colors"${addAttribute(`faq-q-${index}`, "id")}${addAttribute(`faq-a-${index}`, "aria-controls")}> <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"> ${renderComponent($$result, "Icon", Icon, { "name": "helpCircle", "className": "w-6 h-6 text-white" })} </div> <div class="flex-grow"> <h3 class="text-lg font-bold text-dark-800 group-hover:text-gold-600 transition-colors pr-8"${addAttribute(`faq-heading-${index}`, "id")}> ${faq.question} </h3> </div> <span class="flex-shrink-0 transform transition-transform duration-300 group-open:rotate-180 text-gold-500"> ${renderComponent($$result, "Icon", Icon, { "name": "chevronDown", "className": "w-6 h-6" })} </span> </summary> <div${addAttribute(`faq-a-${index}`, "id")} role="region"${addAttribute(`faq-heading-${index}`, "aria-labelledby")} class="px-6 pb-6 pl-20 text-dark-600 leading-relaxed border-t border-gold-200/20 pt-6 animate-fadeIn"> <p class="text-base">${faq.answer}</p> </div> </details>`)} </div> ${showCTA && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "lg", "href": "/faq" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", Icon, { "name": "arrowRight", "className": "w-5 h-5 mr-2" })}
View All FAQs
` })} </div>`} </div> </section>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/sections/FAQSection.astro", void 0);
export {
  $$FAQSection as $
};
