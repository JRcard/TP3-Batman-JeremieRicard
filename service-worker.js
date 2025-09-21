//Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v25";
//Add list of files to cache here.
const FILES_TO_CACHE = ["indexOffline.html", "manifest.json", "style/css/style.css", "images/favicon.png", "images/offline_joker.png", "script/offline_mouse.js"];

self.addEventListener("install", (evt) => {
	console.log("[ServiceWorker] Install");
	// Precache static resources here.
	evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("[ServiceWorker] Pre-caching offline page");
			return cache.addAll(FILES_TO_CACHE);
		})
	);
	self.skipWaiting();
});

/*  */

self.addEventListener("activate", (evt) => {
	console.log("[ServiceWorker] Activate");
	//Remove previous cached data from disk.
	evt.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== CACHE_NAME) {
						console.log("[ServiceWorker] Removing old cache", key);
						return caches.delete(key);
					}
				})
			);
		})
	);
	self.clients.claim();
});

/* Si internet coupe load la cache: */
self.addEventListener("fetch", async (evt) => {
	console.log("[ServiceWorker] Fetch", evt.request.url);
	//Add fetch event handler here.
	if (evt.request.mode !== "navigate") {
		// Not a page navigation, bail.
		return;
	}
	evt.respondWith(
		fetch(evt.request).catch(async () => {
			console.log("[ServiceWorker] fetch().catch() open cache");
			return caches.open(CACHE_NAME).then((cache) => {
				return cache.match("indexOffline.html");
			});
		})
	);
});
