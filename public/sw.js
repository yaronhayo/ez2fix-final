// Service Worker for caching and offline support
const CACHE_NAME = 'ez2fix-v4'; // Updated version to force cache refresh
const STATIC_ASSETS = [
    '/',
    '/offline',
    '/manifest.json',
    '/favicon.png',
    '/images/logos/ez2fix-logo.png',
    '/images/hero/hero-2.webp',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS).catch((err) => {
                console.error('Cache addAll failed:', err);
            });
        })
    );
    self.skipWait(); // Force immediate activation
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim(); // Take control immediately
});

// Fetch event - network-first for HTML/CSS, cache-first for images
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    const url = new URL(event.request.url);

    // Network-first for HTML and CSS (always get fresh styles)
    if (url.pathname.endsWith('.html') || url.pathname.endsWith('.css') || url.pathname.endsWith('/') || url.pathname.includes('/thank-you')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache the fresh response
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if offline
                    return caches.match(event.request).then((cachedResponse) => {
                        return cachedResponse || caches.match('/offline');
                    });
                })
        );
        return;
    }

    // Cache-first for images and static assets (better performance)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                return caches.match('/offline');
            });
        })
    );
});
