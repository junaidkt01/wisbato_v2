export const clearStorage = async () => {
  localStorage.clear();
  sessionStorage.clear();
  if ("caches" in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cache) => caches.delete(cache)));
  }
};
