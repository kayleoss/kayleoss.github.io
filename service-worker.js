"use strict";var precacheConfig=[["/index.html","4b2bc2362c4520155138e063d737ce55"],["/static/css/main.bee2e265.css","5196bd14830d1dffbce3499a4e4f776b"],["/static/js/main.e18112de.js","a36acb74c953df6c331c226f2299b05a"],["/static/media/code-icon-2.3198bcc7.png","3198bcc7527803bbea6d04914d663838"],["/static/media/cta-button-katie.1f777ba3.png","1f777ba3f18169feeba030f07e7ac7ee"],["/static/media/design-icon-2.66b59000.png","66b5900010327f805ebd664bd0e54f16"],["/static/media/hackTPS.a5b9c38d.png","a5b9c38dce8ae9b61c71e891dcbdfd44"],["/static/media/hero-img-small.41fd8157.png","41fd8157eede880f36af23742ea56ac1"],["/static/media/loading.1d7626e6.gif","1d7626e6cbbdc02be15b16fa36add9ae"],["/static/media/marketing-icon-2.b000ff3f.png","b000ff3f02f3804af380b5a9fd6f22d8"],["/static/media/mavencare.930f94cc.png","930f94cc96b15ef877170a10d9da7e20"],["/static/media/post-it.a16dc98d.jpg","a16dc98d15a54728ea239b767c9d4d9b"],["/static/media/projects.c707cc9e.png","c707cc9e373d8134a6cfb82c3da40acb"],["/static/media/receipt.7b01a3f3.png","7b01a3f318ba82b759cd59e5da591f11"],["/static/media/skills-button.e889444d.png","e889444de7ccf2ad128a1365628f2c14"],["/static/media/techbuy2.f2f8a994.png","f2f8a994fff2ba6c931f3af9a3089ce2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});