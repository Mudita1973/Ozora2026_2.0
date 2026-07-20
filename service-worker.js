const CACHE_NAME = 'ozora-2026-v5.3.0';
const CORE = [
  './',
  './index.html',
  './styles.css?v=530',
  './artist-profile.css?v=530',
  './jszip.min.js?v=530',
  './schedule-data.js?v=530',
  './xlsx-import.js?v=530',
  './app.js?v=530',
  './manifest.json?v=530',
  './icon.svg?v=530',
  './icon-192.png?v=530',
  './icon-512.png?v=530',
  './qr-code.png?v=530',
  './Ozora-2026-Import-Template.xlsx?v=530',
  './stage-ozora.jpg?v=530',
  './stage-dome.jpg?v=530',
  './stage-pumpui.jpg?v=530',
  './stage-dragon-cooking.jpg?v=530',
  './stage-visium.jpg?v=530',
  './cache-reset.html?v=530'
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
