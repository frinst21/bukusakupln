const CACHE_NAME = "jtm-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./isolator.jpg",
  "./JTM.PNG",
  "./PLN.png",
  "./trafo.jpg",
  "./logo.png"
];

// Install Service Worker dan simpan ke cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch offline
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
