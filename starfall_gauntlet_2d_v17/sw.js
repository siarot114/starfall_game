const V="sg-v19",FILES=['./','LICENSE.txt','MUSIC-LICENSES.md','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','music/overdrive.mp3','music/in-the-face-of-evil.mp3','music/turbo-killer.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);if(u.origin!==location.origin)return;
 // audio uses range requests: answer from cache with a proper 206 so every browser can seek/loop
 if(u.pathname.endsWith('.mp3')){e.respondWith(caches.match(u.href).then(async r=>{
  if(!r)return fetch(e.request);
  const rg=e.request.headers.get('range'),m=rg&&/bytes=(\d+)-(\d*)/.exec(rg);
  if(!m)return r;
  const b=await r.arrayBuffer(),a=+m[1],z=m[2]?Math.min(+m[2],b.byteLength-1):b.byteLength-1;
  return new Response(b.slice(a,z+1),{status:206,headers:{'Content-Type':'audio/mpeg','Content-Range':'bytes '+a+'-'+z+'/'+b.byteLength,'Content-Length':z-a+1,'Accept-Ranges':'bytes'}})}));return}
 e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
