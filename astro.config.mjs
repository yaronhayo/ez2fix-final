import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

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
        local: ['*'],
      },
    }),


  ],
  image: {
    domains: ['ez2fix.com'],
    formats: ['avif', 'webp'],
    quality: 80, // Reduced for better compression without visible quality loss
    experimentalObjectFit: 'cover',
    experimentalLayout: 'responsive',
  },
  compressHTML: true, // Minify HTML output
  vite: {
    ssr: {
      noExternal: ['@heroicons/react'],
    },
    server: {
      hmr: {
        clientPort: 4321,
      },
      headers: {
        'Permissions-Policy': 'attribution-reporting=(self "https://www.googletagmanager.com" "https://www.google-analytics.com"), run-ad-auction=(self "https://www.googletagmanager.com" "https://www.google-analytics.com"), join-ad-interest-group=(self "https://www.googletagmanager.com" "https://www.google-analytics.com"), browsing-topics=(self "https://www.googletagmanager.com" "https://www.google-analytics.com")',
        'Cache-Control': 'public, max-age=31536000',
      },
    },
    build: {
      target: 'es2022', // Modern build target for better optimization
      minify: 'terser', // Use terser for aggressive minification
      assetsInlineLimit: 4096,
      cssCodeSplit: true, // Split CSS for better caching
      reportCompressedSize: false, // Faster builds
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            // Code splitting for better caching
            // 'react-vendor': ['react', 'react-dom'],
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(-1);
            if (/png|jpe?g|gif|svg|webp|avif|ico/i.test(extType)) {
              return `assets/img/[name]-[hash][extname]`;
            }
            if (/mp4|webm|mov/i.test(extType)) {
              return `assets/video/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          // Optimize chunk file naming
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2, // Multiple passes for better compression
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false, // Remove all comments
        },
      },
    },
  },
});
