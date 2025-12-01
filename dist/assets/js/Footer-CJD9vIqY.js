import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, g as renderSlot, m as maybeRenderHead, b as addAttribute } from "./astro/server-Bk6MH9UW.js";
import "piccolore";
import { jsx } from "react/jsx-runtime";
import "react";
import { HelpCircle, Facebook, Youtube, Instagram, AlertTriangle, BookOpen, Home, Pause, Play, Smile, Clock, ChevronLeft, Send, ShieldCheck, BarChart3, ClipboardList, Heart, Users, MessageCircle, Settings, CheckCircle, DollarSign, Shield, ArrowRight, X, Menu, ChevronRight, ChevronDown, Check, Calendar, Phone, Mail, Info, Star, MapPin, Map, Building2, LayoutDashboard, Link, Wrench, DoorOpen, Wifi, Activity, Zap } from "lucide-react";
/* empty css                        */
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
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-700 text-cream-100" data-astro-cid-35ed7um5> <div class="container mx-auto px-4 sm:px-6 pt-16 pb-8" data-astro-cid-35ed7um5> <!-- Main Footer Content --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12 text-center sm:text-left" data-astro-cid-35ed7um5> <!-- Column 1: Company Info --> <div class="sm:col-span-2 xl:col-span-2" data-astro-cid-35ed7um5> <a href="/" class="inline-block mb-4" data-astro-cid-35ed7um5> <img src="/images/logos/ez2fix-logo.png" alt="Ez2Fix Garage Doors"${addAttribute(180, "width")}${addAttribute(48, "height")} class="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" data-astro-cid-35ed7um5> </a> <p class="text-cream-200 mb-4 max-w-sm mx-auto sm:mx-0" data-astro-cid-35ed7um5> ${siteConfig.company.tagline} </p> <div class="text-sm" data-astro-cid-35ed7um5> <span class="text-gold-300 font-semibold" data-astro-cid-35ed7um5>Licensed, Bonded & Insured</span> <p class="text-cream-200" data-astro-cid-35ed7um5>
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
</p> <p class="text-xs text-cream-300 pt-2" data-astro-cid-35ed7um5>
This site is protected by reCAPTCHA and the Google
<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="hover:text-gold-300 underline" data-astro-cid-35ed7um5>Privacy Policy</a> and
<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="hover:text-gold-300 underline" data-astro-cid-35ed7um5>Terms of Service</a> apply.
</p> </div> </div> </footer> `;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/layout/Footer.astro", void 0);
export {
  $$Button as $,
  Icon as I,
  $$Footer as a,
  siteConfig as s
};
