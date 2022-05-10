function updateDynamicCache(dynamicCache, req, resp) {
    if (resp.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, resp.clone());
            return resp.clone();
        })
    } else {
        return resp;
    }
}