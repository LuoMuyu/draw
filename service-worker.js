/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('https://cdn.jsdelivr.net/gh/luomuyu/draw@main/js/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'https://cdn.jsdelivr.net/gh/luomuyu/draw@main/js/main.js',
    'https://cdn.jsdelivr.net/gh/luomuyu/draw@main/js/vendor.js',
    'https://cdn.jsdelivr.net/gh/luomuyu/draw@main/css/main.css',
    'https://cdn.jsdelivr.net/gh/luomuyu/draw@main/js/polyfills.js',
    'index.html',
    'https://cdn.jsdelivr.net/gh/luomuyu/draw@main/manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
