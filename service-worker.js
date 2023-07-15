/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Archive.zip","e4bb8a054e6fb0abeaa5110d628fd94e"],["Screenshot 2023-07-06 at 7.42.21 PM.png","b1e0ff7942a5c9d6c743667b71bd95f5"],["abstract-blue-background-design_1182-579.jpg","370f4314a6d8af5bddfe1c933cd4665a"],["assets.html","79d7974ada32a8576cc2a590f55ce253"],["background.webp","d47b651f4993fb5739340a3ff73ec62d"],["bitcoin-logo.png","14b9e0bc98e16d3a18775a760e3a610b"],["index.html","277c4dc022fe4cb7db9285fdad1e8863"],["history.html","6e281bdcb9631902482ea79bfe2543ed"],["main.html","196720f061750442164636f883c476b7"],["manifest.json","2c29064221df31611c0ae69bcf8e38dd"],["migrate-to-progressive-web-apps/CONTRIBUTING.md","76b5621d7005456141d4d7cd672a6fc4"],["migrate-to-progressive-web-apps/README.md","17769763e812b850a81d94bdd91e8495"],["migrate-to-progressive-web-apps/helper-server/README.md","2c9b807fab36fa4f0f04563d375c4c85"],["migrate-to-progressive-web-apps/helper-server/app.yaml","e9868c059127e496c40cafadb7803fc9"],["migrate-to-progressive-web-apps/helper-server/server.go","c903ae5e61350e0479c2de18ad789170"],["migrate-to-progressive-web-apps/service-worker.js","40b779b60b0216fa254ccbdde11d632b"],["migrate-to-progressive-web-apps/step3-manifest/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/step3-manifest/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/step3-manifest/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/step3-manifest/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/step3-manifest/dragon.html","2e8393b47acf880281ebfe3c851aa103"],["migrate-to-progressive-web-apps/step3-manifest/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/step3-manifest/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/step3-manifest/faq.html","18760bcd1a8e71fc19352883deb52c59"],["migrate-to-progressive-web-apps/step3-manifest/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/step3-manifest/index.html","322c36a16e77a7ca229db2e558b5a603"],["migrate-to-progressive-web-apps/step3-manifest/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/step3-manifest/manifest.json","9aee4676f72d07452ac1e0f28e9b572c"],["migrate-to-progressive-web-apps/step3-manifest/site.js","cd5e21a3252c70dbd8d55b7fdc6dc48f"],["migrate-to-progressive-web-apps/step3-manifest/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["migrate-to-progressive-web-apps/step4-sw/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/step4-sw/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/step4-sw/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/step4-sw/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/step4-sw/dragon.html","2e8393b47acf880281ebfe3c851aa103"],["migrate-to-progressive-web-apps/step4-sw/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/step4-sw/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/step4-sw/faq.html","18760bcd1a8e71fc19352883deb52c59"],["migrate-to-progressive-web-apps/step4-sw/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/step4-sw/index.html","322c36a16e77a7ca229db2e558b5a603"],["migrate-to-progressive-web-apps/step4-sw/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/step4-sw/manifest.json","9aee4676f72d07452ac1e0f28e9b572c"],["migrate-to-progressive-web-apps/step4-sw/site.js","7f62d486c7d567ffb6f6f6edd65d1510"],["migrate-to-progressive-web-apps/step4-sw/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["migrate-to-progressive-web-apps/step4-sw/sw.js","46f336cfe67f538106cc8cb38b9f7526"],["migrate-to-progressive-web-apps/step5-push/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/step5-push/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/step5-push/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/step5-push/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/step5-push/dragon.html","2e8393b47acf880281ebfe3c851aa103"],["migrate-to-progressive-web-apps/step5-push/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/step5-push/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/step5-push/faq.html","18760bcd1a8e71fc19352883deb52c59"],["migrate-to-progressive-web-apps/step5-push/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/step5-push/index.html","322c36a16e77a7ca229db2e558b5a603"],["migrate-to-progressive-web-apps/step5-push/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/step5-push/manifest.json","9aee4676f72d07452ac1e0f28e9b572c"],["migrate-to-progressive-web-apps/step5-push/site.js","862b67f53d46f782fb81ef186537eb77"],["migrate-to-progressive-web-apps/step5-push/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["migrate-to-progressive-web-apps/step5-push/sw.js","d274d6ffaba3ced7f0f363d0b320b799"],["migrate-to-progressive-web-apps/step6-cache/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/step6-cache/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/step6-cache/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/step6-cache/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/step6-cache/dragon.html","2e8393b47acf880281ebfe3c851aa103"],["migrate-to-progressive-web-apps/step6-cache/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/step6-cache/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/step6-cache/faq.html","18760bcd1a8e71fc19352883deb52c59"],["migrate-to-progressive-web-apps/step6-cache/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/step6-cache/index.html","322c36a16e77a7ca229db2e558b5a603"],["migrate-to-progressive-web-apps/step6-cache/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/step6-cache/manifest.json","9aee4676f72d07452ac1e0f28e9b572c"],["migrate-to-progressive-web-apps/step6-cache/site.js","7f62d486c7d567ffb6f6f6edd65d1510"],["migrate-to-progressive-web-apps/step6-cache/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["migrate-to-progressive-web-apps/step6-cache/sw.js","e12a809ffdf4f194e8d244a86da07442"],["migrate-to-progressive-web-apps/step7-imperative/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/step7-imperative/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/step7-imperative/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/step7-imperative/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/step7-imperative/dragon.html","2e8393b47acf880281ebfe3c851aa103"],["migrate-to-progressive-web-apps/step7-imperative/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/step7-imperative/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/step7-imperative/faq.html","18760bcd1a8e71fc19352883deb52c59"],["migrate-to-progressive-web-apps/step7-imperative/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/step7-imperative/index.html","322c36a16e77a7ca229db2e558b5a603"],["migrate-to-progressive-web-apps/step7-imperative/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/step7-imperative/manifest.json","9aee4676f72d07452ac1e0f28e9b572c"],["migrate-to-progressive-web-apps/step7-imperative/site.js","7f62d486c7d567ffb6f6f6edd65d1510"],["migrate-to-progressive-web-apps/step7-imperative/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["migrate-to-progressive-web-apps/step7-imperative/sw.js","0d4ae8877ace0c70508e30685b981f6c"],["migrate-to-progressive-web-apps/work/background.jpeg","7b80e1ac00e40838cc14293cc0550074"],["migrate-to-progressive-web-apps/work/clear.html","dfae983840e04d4553d614bfa6a117c0"],["migrate-to-progressive-web-apps/work/construction.gif","b95aa212f1485894b2df6f18862ee941"],["migrate-to-progressive-web-apps/work/crypto.js","067d461407fe77d19f9d88179f40b54d"],["migrate-to-progressive-web-apps/work/dragon.html","29335e687c3273afb2137a18fae0064d"],["migrate-to-progressive-web-apps/work/dragon.js","beb53baa36e92b50168569bf5e86484d"],["migrate-to-progressive-web-apps/work/dragon.png","87bf4607bf78cdcf86a779d1d20dbd78"],["migrate-to-progressive-web-apps/work/faq.html","4a65b8e0efc75d1877a8d5f7c7220890"],["migrate-to-progressive-web-apps/work/icon-192.png","36dd58f7f31e5d98713fc31314cc3997"],["migrate-to-progressive-web-apps/work/index.html","5ae9efc6ec95223d23c962a702983ef1"],["migrate-to-progressive-web-apps/work/logo.png","34e1120a5c8e660edbb3801a7a8372cb"],["migrate-to-progressive-web-apps/work/site.js","cd5e21a3252c70dbd8d55b7fdc6dc48f"],["migrate-to-progressive-web-apps/work/styles.css","f59c773ee50b33a9cb7c7f0e584a55f9"],["referrals.html","a8ee06733c69c53754470e7139f2c081"],["script.js","149e6a8848db5505f207fe46f8da8ade"],["settings.html","48bbcc5250fd727c2de569cbe2d11037"],["stake.html","35b7943218d3fe3b899df4cb690d9afc"],["style.css","edafb70a940f8441e439c867f1f74323"],["sw.js","419f1efbe56f868319004937431232db"],["team.html","b293975d77b0e8c18387f2a4e448a433"],["test.png","f53bf7a82af1928422507d0935e27a1d"],["wallet.png","3c3a543fe9e09314d23c07f4cd61e388"],["xxx.avif","568bf9867f5f7536e1b3e3be7e4c9f5e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







