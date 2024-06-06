// public/sw.js
self.addEventListener('push', event => {
  let data;
  try {
    data = event.data.json();
  } catch (e) {
    console.error('Error parsing push message data:', e);
    return;
  }

  console.log('Push received:', data);

  const { title, body, icon, url } = data.notification || {};

  if (title && body) {
    const options = {
      body: body,
      icon: icon || 'https://via.placeholder.com/150',
      data: {
        url: url
      }
    };

    self.registration.showNotification(title, options);

    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage(data.notification);
      });
    });
  } else {
    console.error('Push message data is missing required properties.');
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      if (clientList.length > 0) {
        let client = clientList[0];
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i];
          }
        }
        return client.focus().then(windowClient => {
          return windowClient.navigate(event.notification.data.url);
        });
      }
      return clients.openWindow(event.notification.data.url);
    })
  );
});
