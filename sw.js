/* sw.js — service worker de ReVuelta
   Estrategia:
   - Al instalar: precarga el shell (HTML, manifest, íconos).
   - Navegación (index.html): network-first con respaldo en caché → siempre
     intenta traer la versión más nueva, y si no hay internet abre la copia guardada.
   - Íconos y fotos: cache-first (casi nunca cambian).
*/

const VERSION = "revuelta-v5";
const SHELL = [
  "./",
  "./index.html",
  "./vender.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(VERSION)
      .then((cache) => cache.addAll(SHELL))
      .catch(() => null)          // si algo falla no rompemos la instalación
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves.filter((c) => c !== VERSION).map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (evento) => {
  const req = evento.request;

  // solo GET del mismo origen
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // navegación / HTML / manifest → network-first
  // (el manifest NUNCA debe servirse viejo: Chrome lo usa para identificar la app)
  const esDocumento = req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html") ||
    url.pathname.endsWith("manifest.webmanifest");

  if (esDocumento) {
    evento.respondWith(
      fetch(req)
        .then((resp) => {
          const copia = resp.clone();
          caches.open(VERSION).then((c) => c.put(req, copia));
          return resp;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // el resto → cache-first con relleno
  evento.respondWith(
    caches.match(req).then((enCache) => {
      if (enCache) return enCache;
      return fetch(req).then((resp) => {
        const copia = resp.clone();
        caches.open(VERSION).then((c) => c.put(req, copia));
        return resp;
      }).catch(() => enCache);
    })
  );
});
