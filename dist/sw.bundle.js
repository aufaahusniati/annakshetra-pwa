if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const r=e=>n(e,o),t={module:{uri:o},exports:c,require:r};i[o]=Promise.all(a.map((e=>t[e]||r(e)))).then((e=>(s(...e),c)))}}define(["./workbox-c7741fe8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"157a8ca2341d59a8d151e185fa579cb0"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"9828fef4289232ba168430331f0f0fb4"},{url:"favicon.png",revision:"8de1b69f5b48c097e52e0d5fa2e83775"},{url:"heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"icons/icon-128x128.png",revision:"2f18847409952bdfbbdce49299835587"},{url:"icons/icon-144x144.png",revision:"ac1dca6bb0dbc83b9a864c4a63ce6835"},{url:"icons/icon-152x152.png",revision:"4e68a47724515f1f63f649d17c8ae9de"},{url:"icons/icon-192x192.png",revision:"dff21b8fe9eff4dda011f2e11094bf27"},{url:"icons/icon-384x384.png",revision:"3d2233ab150b4bb791e205a49083a4ad"},{url:"icons/icon-512x512.png",revision:"9a0cdb0e0e7cd8c3926cdc8c6ec7dc08"},{url:"icons/icon-72x72.png",revision:"7f929f616a10efde23b69a489550f727"},{url:"icons/icon-96x96.png",revision:"5f0c1f254c58930a88668afa65886f1b"},{url:"index.html",revision:"08f68575344b3614072390e414cabfee"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/list")),new e.StaleWhileRevalidate({cacheName:"restaurant-api-dicoding-list",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api-dicoding-images",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail/")),new e.NetworkFirst({cacheName:"restaurant-api-dicoding-detail",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://kit.fontawesome.com/4d69af1ea6.js")),new e.CacheFirst({cacheName:"fontawesome-kit",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
