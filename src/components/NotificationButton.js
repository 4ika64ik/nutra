import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import CustomNotification from './CustomNotification';
import 'react-toastify/dist/ReactToastify.css';

const publicVapidKey = 'BAsvcvdR2-wznOeMQ6MIYSumJ0InYmJv_DG0D3ANZJyPy4Th7RS3Jpeee0HriWB6yzMJOB7UfaRGNzntyiNG4gk';

const NotificationButton = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration error:', error);
        });

      navigator.serviceWorker.addEventListener('message', event => {
        const { title, body, url } = event.data;
        setNotifications(prevNotifications => [
          ...prevNotifications,
          { title, body, url, id: uuidv4() }
        ]);
      });
    }
  }, []);

  const subscribeUser = async () => {
    if ('serviceWorker' in navigator && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        alert('Permission to receive notifications was denied');
        return;
      }

      const registration = await navigator.serviceWorker.ready;
      try {
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });

        await fetch('http://localhost:3000/api/subscribe', {
          method: 'POST',
          body: JSON.stringify(subscription),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('User is subscribed to notifications');
      } catch (error) {
        console.error('Failed to subscribe the user:', error);
      }
    } else {
      alert('Push notifications are not supported by your browser.');
    }
  };

  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div>
      <button onClick={subscribeUser}>
        Subscribe to notifications
      </button>
      <ToastContainer />
      {notifications.map(notification => (
        <CustomNotification
          key={notification.id}
          title={notification.title}
          body={notification.body}
          url={notification.url}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default NotificationButton;
