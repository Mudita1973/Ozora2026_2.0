const CACHE_NAME = 'ozora-2026-v4.1.0';
const CORE = [
  './',
  './index.html',
  './styles.css?v=410',
  './schedule-data.js?v=410',
  './app.js?v=410',
  './manifest.json?v=410',
  './icon.svg?v=410',
  './icon-192.png?v=410',
  './icon-512.png?v=410',
  './qr-code.png?v=410',
  './stage-ozora.jpg?v=410',
  './stage-dome.jpg?v=410',
  './stage-pumpui.jpg?v=410',
  './stage-dragon-cooking.jpg?v=410',
  './stage-visium.jpg?v=410',
  './cache-reset.html?v=410'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
