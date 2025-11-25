import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BhL58jVL.mjs';
import { manifest } from './manifest_CpBSu68U.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/accessibility.astro.mjs');
const _page4 = () => import('./pages/api/booking.astro.mjs');
const _page5 = () => import('./pages/api/business-info.json.astro.mjs');
const _page6 = () => import('./pages/api/contact.astro.mjs');
const _page7 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page10 = () => import('./pages/booking.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/faq.astro.mjs');
const _page13 = () => import('./pages/privacy-policy.astro.mjs');
const _page14 = () => import('./pages/reviews.astro.mjs');
const _page15 = () => import('./pages/service-areas/_city_.astro.mjs');
const _page16 = () => import('./pages/service-areas.astro.mjs');
const _page17 = () => import('./pages/services/_slug_.astro.mjs');
const _page18 = () => import('./pages/services.astro.mjs');
const _page19 = () => import('./pages/terms-of-service.astro.mjs');
const _page20 = () => import('./pages/thank-you.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/accessibility.astro", _page3],
    ["src/pages/api/booking.ts", _page4],
    ["src/pages/api/business-info.json.ts", _page5],
    ["src/pages/api/contact.ts", _page6],
    ["src/pages/blog/category/[category].astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/blog/[...slug].astro", _page9],
    ["src/pages/booking.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/faq.astro", _page12],
    ["src/pages/privacy-policy.astro", _page13],
    ["src/pages/reviews.astro", _page14],
    ["src/pages/service-areas/[city].astro", _page15],
    ["src/pages/service-areas/index.astro", _page16],
    ["src/pages/services/[slug].astro", _page17],
    ["src/pages/services/index.astro", _page18],
    ["src/pages/terms-of-service.astro", _page19],
    ["src/pages/thank-you.astro", _page20],
    ["src/pages/index.astro", _page21]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/yaronhayo/Desktop/ez2fix-website/rebuild/dist/client/",
    "server": "file:///Users/yaronhayo/Desktop/ez2fix-website/rebuild/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
