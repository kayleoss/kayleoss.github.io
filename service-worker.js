"use strict";var precacheConfig=[["/index.html","24bad75203beca6994fc277e3e5bc1c3"],["/static/css/main.057c616c.css","ba3c0744ab1374307072cb014f7afb0d"],["/static/js/main.0347c11d.js","91e3080c9d9c16ebc5d1da37fa7eca6a"],["/static/media/charts.f38c803e.svg","f38c803e97a538825faca6d548cb1fd9"],["/static/media/code.aacb6191.svg","aacb6191c9a2fcf8cfd880a7b070e030"],["/static/media/comic.b278d46b.png","b278d46bd05f1d3f7e4965eb4c4b8e0e"],["/static/media/conquer.cc5c95bf.png","cc5c95bfb5766512c357c941601f6008"],["/static/media/dradry.97179a8a.png","97179a8a52dea1ccb4343fab0d3929a2"],["/static/media/envelope.cf11559c.png","cf11559cedee117c435ef8e48a4832ca"],["/static/media/facial.fa3c879a.png","fa3c879a01c50adfd38d2acfcf516d59"],["/static/media/imac.e019ac7b.svg","e019ac7b6f5251e1567bb596d695641c"],["/static/media/mavencare.d5c65e15.png","d5c65e15a6477813340e69ba1e5e0928"],["/static/media/nav.99fdfe5a.png","99fdfe5a29c640fc5e8a1a3f2290a1cf"],["/static/media/neshama.3b837bb5.png","3b837bb5afd884ffc59c822d4c32159a"],["/static/media/nlanding.8717a851.png","8717a8510797d176fb840299969209cd"],["/static/media/paintball.0a02ef65.png","0a02ef6581c10d73e5605eee78c7ce10"],["/static/media/party.dfa939c4.png","dfa939c4a83222dc0706513af9583460"],["/static/media/ppm.15bee872.png","15bee87294b4efbe0d78ee4b7c949ef2"],["/static/media/project.6769cc9c.svg","6769cc9c6d4a95c3b0e7015cc2725345"],["/static/media/receipt.35d75d79.png","35d75d796d0a7f70bb62191a4aa7f3d5"],["/static/media/scroll_gif.1718e847.gif","1718e84777b9a3b054b259ba5d2a3183"],["/static/media/wand.cf5120ad.svg","cf5120ad143a82a71f94ae3d2b8cb506"],["/static/media/wordpress1.787d37cd.svg","787d37cd69aca7774c4479e432cbe7c4"],["/static/media/wordpress2.8579da92.svg","8579da92370af57c6cd19ad424ba4268"],["/static/media/wordpress3.7d0a94ce.svg","7d0a94ce19fdd05c80c22a1dc99eb58f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});