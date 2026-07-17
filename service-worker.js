const CACHE_NAME = 'ozora-2026-v4.4.0';
const CORE = [
  './',
  './index.html',
  './styles.css?v=440',
  './vendor/jszip.min.js?v=440',
  './schedule-data.js?v=440',
  './xlsx-import.js?v=440',
  './app.js?v=440',
  './manifest.json?v=440',
  './icon.svg?v=440',
  './icon-192.png?v=440',
  './icon-512.png?v=440',
  './qr-code.png?v=440',
  './Ozora-2026-Import-Template.xlsx?v=440',
  './stage-ozora.jpg?v=440',
  './stage-dome.jpg?v=440',
  './stage-pumpui.jpg?v=440',
  './stage-dragon-cooking.jpg?v=440',
  './stage-visium.jpg?v=440',
  './cache-reset.html?v=440'
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

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(clients => {
      const existing = clients[0];
      if (existing) {
        existing.navigate('./#plan');
        return existing.focus();
      }
      return self.clients.openWindow('./#plan');
    })
  );
});
