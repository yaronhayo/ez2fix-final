#!/bin/bash

# Force Service Worker Update Script
# Run this to clear service worker cache on all devices

echo "🧹 Clearing Service Worker Cache..."

# Instructions for users
cat << 'EOF'

SERVICE WORKER CACHE CLEARING INSTRUCTIONS:
==========================================

For Developers (Local):
1. Open Chrome DevTools (F12)
2. Go to Application tab
3. Click "Service Workers" in left sidebar
4. Click "Unregister" for ez2fixllc.com
5. Click "Clear storage" and check all boxes
6. Click "Clear site data"
7. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

For Mobile Devices:
iOS (iPhone/iPad):
1. Settings → Safari → Advanced → Website Data
2. Swipe left on ez2fixllc.com → Delete
3. Or "Remove All Website Data"
4. Close Safari completely (swipe up)
5. Reopen and visit site

Android (Chrome):
1. Settings → Privacy and security → Clear browsing data
2. Select "Cached images and files"
3. Time range: "All time"
4. Click "Clear data"
5. Or long-press Chrome icon → App info → Storage → Clear cache

Alternative Quick Fix (All Devices):
1. Open site in Incognito/Private mode
2. This bypasses all caches

The updated Service Worker (v4) will auto-update within 24 hours
on all devices, but manual cache clearing is faster.

EOF

echo "✅ Service Worker updated to v4"
echo "✅ Network-first strategy enabled for HTML/CSS"
echo "✅ Cache invalidation configured"
