// Service Worker for caching and offline support
const CACHE_NAME = 'ez2fix-v2';
const STATIC_ASSETS = [
    '/',
    '/offline',
    '/manifest.json',
    '/favicon.png',
    '/images/logos/ez2fix-logo.png',
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
    self.skipWait();
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
    self.clients.claim();
});

// Fetch event - cache-first strategy for static assets
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((response) => {
                // Don't cache non-successful responses
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                // Cache successful responses for static assets
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Return offline page if available
                return caches.match('/offline');
            });
        })
    );
});
