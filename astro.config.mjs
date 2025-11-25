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
      filter: (page) => !page.includes('/thank-you') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: (page) => {
        if (page === 'https://ez2fixllc.com/') return 1.0;
        if (page.includes('/services/')) return 0.9;
        if (page.includes('/areas/')) return 0.8;
        if (page.includes('/blog/')) return 0.7;
        return 0.6;
      },
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
