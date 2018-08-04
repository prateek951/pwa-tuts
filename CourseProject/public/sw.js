//Give me access to the background process service worker
//NO DOM ACCESS IN SERVICE WORKER
self.addEventListener("install", function(event) {
  console.log(`[Service Worker] Installing Service Worker ....`, event);
});

self.addEventListener("activate", function(event) {
  console.log(`[Service Worker] Activating Service Worker ....`, event);
  return self.clients.claim();
});
// Service worker can be considered as the nw proxy
self.addEventListener("fetch", function(event) {
    console.log(`[Service Worker] Fetching something .....`,event);
    event.respondWith(fetch(event.request));
});
