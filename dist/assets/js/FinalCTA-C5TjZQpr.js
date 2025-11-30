import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from "./astro/server-BU2CT6Eb.js";
import "piccolore";
import { I as Icon } from "./Footer-7dGzek7_.js";
const $$Astro = createAstro("https://ez2fixllc.com");
const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FinalCTA;
  const {
    title = "Ready to Fix Your Garage Door?",
    subtitle = "Contact us today for prompt, reliable service in Northern NJ.",
    ctaText = "Get Free Estimate",
    ctaLink = "/booking?utm_source=website&utm_medium=cta&utm_campaign=final-cta",
    className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-20 bg-dark-900 text-cream-100 ${className || ""}`, "class")}> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl md:text-5xl font-bold mb-6 text-cream-100"> ${title} </h2> <p class="text-xl text-cream-200 mb-10 max-w-2xl mx-auto"> ${subtitle} </p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a${addAttribute(ctaLink, "href")} class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-dark-900 bg-gold-500 rounded-xl hover:bg-gold-400 hover:text-white transition-colors transform hover:scale-105 shadow-lg"> ${renderComponent($$result, "Icon", Icon, { "name": "clipboard", "className": "w-5 h-5 mr-2" })} ${ctaText} </a> <div class="inline-flex flex-col sm:flex-row"> <a href="tel:2015546769" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-dark-900 transition-colors lg:hidden"> ${renderComponent($$result, "Icon", Icon, { "name": "phone", "className": "w-5 h-5 mr-2" })}
Call (201) 554-6769
</a> <a href="/services" class="hidden lg:inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-dark-900 transition-colors"> ${renderComponent($$result, "Icon", Icon, { "name": "wrench", "className": "w-5 h-5 mr-2" })}
View All Services
</a> </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/sections/FinalCTA.astro", void 0);
export {
  $$FinalCTA as $
};
