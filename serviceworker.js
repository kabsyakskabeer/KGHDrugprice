    self.addEventListener("fetch", function(event) {
        event.respondWith(
        fetch(event.request).catch(function() {
        return caches.match("index-offline.html");
        })
     );
    });
        var CACHE_NAME = "acache";
        var CACHED_URLS =[
            "drug-offline.json",
            "index-offline.html"
        ];

        self.addEventListener("install", function(event) {
            event.waitUntil(
            caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(CACHED_URLS);
        })
        );
        });

  