import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from "./astro/server-BU2CT6Eb.js";
import "piccolore";
import { I as Icon } from "./Footer-DTyrhOFz.js";
const $$Astro = createAstro("https://ez2fixllc.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(`flex ${className}`, "class")}> <ol role="list" class="flex items-center space-x-2"> <li> <a href="/" class="text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "Icon", Icon, { "name": "home", "className": "w-5 h-5" })} <span class="sr-only">Home</span> </a> </li> ${items.map((item) => renderTemplate`<li class="flex items-center"> ${renderComponent($$result, "Icon", Icon, { "name": "chevronRight", "className": "w-4 h-4 text-gray-400 mx-1" })} ${item.url ? renderTemplate`<a${addAttribute(item.url, "href")} class="text-sm font-medium text-gray-500 hover:text-gold-500 transition-colors"> ${item.name} </a>` : renderTemplate`<span class="text-sm font-medium text-gold-600" aria-current="page"> ${item.name} </span>`} </li>`)} </ol> </nav>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/Breadcrumbs.astro", void 0);
export {
  $$Breadcrumbs as $
};
