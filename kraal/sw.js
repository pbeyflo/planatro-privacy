/* Caché mínima para que Kraal abra sin conexión desde el icono del escritorio.
   Estrategia: se pide a la red primero y se guarda copia; si no hay red, se
   sirve la copia. Así nunca se queda con una versión vieja teniendo cobertura. */

const CACHE = "kraal-v1";
const BASICOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icono-180.png",
  "./icono-192.png",
  "./icono-512.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(BASICOS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", ev => {
  const pet = ev.request;
  if(pet.method !== "GET" || new URL(pet.url).origin !== self.location.origin) return;

  ev.respondWith(
    fetch(pet)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(pet, copia)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(pet).then(res => res || caches.match("./index.html")))
  );
});
