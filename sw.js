const CACHE_NAME = "site-cache-v3";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/scripts.js",
];

// 安装阶段预缓存关键资源
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE)),
  );
});

// 激活阶段清除旧缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        }),
      )
    ).then(() => self.clients.claim()),
  );
});

// 拦截请求，实现缓存优先策略
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    ),
  );
});
