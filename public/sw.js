

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');


workbox.setConfig({
});

workbox.core.setCacheNameDetails({
 
  prefix: 'govuk-cache'
});
// match only with assets on the assets domain
  //new RegExp('/\.(?:png|gif|jpg|jpeg|svg|com|json|js)$/,'),
  //({url}) => url.origin.endsWith('0'),


workbox.routing.registerRoute(
  
  ({url}) => url.pathname.startsWith('/api/courses'),
  workbox.strategies.cacheFirst({
    cacheName: 'apiCache',
    plugins: [
      new workbox.expiration.Plugin({
        // 28 days cache before expiration
        maxAgeSeconds: 24 * 60 * 60 * 28,
        // Opt-in to automatic cleanup whenever a quota errors occurs anywhere in Workbox
        purgeOnQuotaError: true // Opt-in to automatic cleanup.
      })
    ]
  })
);
workbox.routing.registerRoute(        
  new RegExp('https://server-s1.azurewebsites.net/api/login'),
  workbox.strategies.networkOnly({
    cacheName: 'loginCache',
    plugins: [
      new workbox.expiration.Plugin({
        // 28 days cache before expiration
        maxAgeSeconds: 24 * 60 * 60 * 28,
        // Opt-in to automatic cleanup whenever a quota errors occurs anywhere in Workbox
        purgeOnQuotaError: true // Opt-in to automatic cleanup.
      })
    ]
  }),
  'POST'  
);
workbox.routing.registerRoute(
  
  ({url}) => url.pathname.startsWith('/api/lessons'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'apiCache',
    plugins: [
      new workbox.expiration.Plugin({
        // 28 days cache before expiration
        maxAgeSeconds: 24 * 60 * 60 * 28,
        // Opt-in to automatic cleanup whenever a quota errors occurs anywhere in Workbox
        purgeOnQuotaError: true // Opt-in to automatic cleanup.
      })
    ]
  })
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);


workbox.skipWaiting();

workbox.clientsClaim();




