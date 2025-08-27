const CACHE_NAME = 'guest-checkin-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Almaty Museum of Arts.png',

  // Гостевые фото (по списку из HTML)
  '/smagulov.jpg',
  '/nesipbaev.jpg',
  '/tulemissova.jpg',
  '/turzhanov.jpg',
  '/omarov.jpg',
  '/simmons.jpg',
  '/kolomatskiy.jpg',
  '/uteshev.jpg',
  '/sayabayev.jpg',
  '/anarbayev.jpg',
  '/alimukanov.jpg',
  '/sharay.jpg',
  '/kayumova.jpg',
  '/karimova.jpg',
  '/palchikov.jpg',
  '/terre.jpg',
  '/yelikbayev.jpg',
  '/vladimir_kim.jpg',
  '/utemuratov.jpg',
  '/tomsky.jpg',
  '/rakishev.jpg',
  '/tatishev.jpg',
  '/kusama.jpg',
  '/kiefer.jpg',
  '/sadykov.jpg',
  '/kaliyeva.jpg',
  '/turlov.jpg',
  '/opredelenov.jpg',
  '/menlibayeva.jpg',
  '/bagdatkyzy.jpeg',
  '/kulibayev.jpg',
  '/kim.jpg',
  '/lomtadze.jpg',

  // Добавь иконки, если используешь их в manifest.json
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
