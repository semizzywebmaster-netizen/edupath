
const CACHE = 'edupath-v1'
const OFFLINE_URLS = ['/','/offline.html']
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/'])))
})
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(r=>{
      const clone = r.clone()
      caches.open(CACHE).then(c=>c.put(e.request, clone))
      return r
    }).catch(()=>caches.match(e.request).then(r=>r || caches.match('/')))
  )
})
