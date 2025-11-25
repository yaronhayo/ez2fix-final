import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://ez2fixllc.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/api/') && !page.includes('/404'),
      changefreq: 'weekly',
      // priority: removed to fix build warning
      lastmod: new Date(),
    }),
    icon({
      include: {
        heroicons: ['*'],
        mdi: ['*'],
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
        debug: false,
      },
    }),
  ],
  image: {
    domains: ['ez2fix.com'],
    formats: ['avif', 'webp'],
    quality: 85,
  },
  vite: {
    ssr: {
      noExternal: ['@heroicons/react'],
    },
    server: {
      headers: {
        'Permissions-Policy': 'attribution-reporting=(self "https://www.googletagmanager.com" "https://www.google-analytics.com")',
      },
    },
  },
});
