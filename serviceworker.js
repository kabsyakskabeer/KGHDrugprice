    self.addEventListener("fetch", function(event) {
        event.respondWith(
        fetch(event.request).catch(function() {
        return caches.match("/index-offline.html");
        })
     );
    });

    self.addEventListener("install", function(event) {
        event.waitUntil(
        caches.open("ghi-cache").then(function(cache) {
        return cache.add("/index-offline.html");
        }).then(function() {
            return cache.add("/drug-offline.json");
            })
        );
        console.log("installing sw");
    });