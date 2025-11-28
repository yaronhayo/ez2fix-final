import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from "./astro/server-CwXtluzS.js";
import "piccolore";
import { $ as $$ResponsiveImage } from "./ResponsiveImage-BtcVjDxY.js";
import { I as Icon } from "./Footer-DAxRJj5_.js";
const $$Astro$1 = createAstro("https://ez2fixllc.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/services/${service.slug}`, "href")} class="group bg-white rounded-xl shadow-lg border border-gold-200/20 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"> <!-- Service Image or Fallback --> ${service.heroImage ? renderTemplate`<div class="relative h-48 overflow-hidden"> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "src": service.heroImage, "alt": service.title, "width": 400, "height": 300, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })} <div class="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent pointer-events-none"></div> </div>` : renderTemplate`<div class="h-48 bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center"> <div class="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg"> ${renderComponent($$result, "Icon", Icon, { "name": service.icon, "className": "w-12 h-12 text-gold-600" })} </div> </div>`} <div class="p-6 flex flex-col flex-grow"> <h3 class="text-xl font-bold text-dark-700 text-center mb-2 group-hover:text-gold-600 transition-colors"> ${service.title} </h3> <p class="text-dark-600 text-center text-sm leading-relaxed mb-4 line-clamp-2 flex-grow"> ${service.shortDescription} </p> <div class="mt-auto text-center"> <span class="inline-flex items-center justify-center px-6 py-2 bg-gold-500 text-dark-900 font-semibold rounded-lg group-hover:bg-gold-600 group-hover:text-white transition-all shadow-md group-hover:shadow-lg">
View Details
${renderComponent($$result, "Icon", Icon, { "name": "arrowRight", "className": "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })} </span> </div> </div> </a>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/ServiceCard.astro", void 0);
const $$Astro = createAstro("https://ez2fixllc.com");
const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesGrid;
  const {
    title = "Related Services",
    subtitle,
    services,
    className,
    maxServices
  } = Astro2.props;
  const displayedServices = maxServices ? services.slice(0, maxServices) : services;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 bg-cream-100 ${className || ""}`, "class")}> <div class="container mx-auto px-4"> <div class="text-center max-w-3xl mx-auto mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-dark-700 mb-4"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-lg text-dark-600">${subtitle}</p>`} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${displayedServices.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> </div> </section>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/sections/ServicesGrid.astro", void 0);
export {
  $$ServicesGrid as $
};
