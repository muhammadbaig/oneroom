importScripts('https://www.gstatic.com/firebasejs/8.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyALplqbC_JECI84zM4OSYV0zhmzlrml46s",
    authDomain: "fresh-rain-320914.firebaseapp.com",
    projectId: "fresh-rain-320914",
    storageBucket: "fresh-rain-320914.appspot.com",
    messagingSenderId: "312394151153",
    appId: "1:312394151153:web:fe030c2ad8682ba160e550",
    measurementId: "G-2SDBP32RL6"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    // const notificationTitle = payload.notification.title;
    // const notificationOptions = {
    //   body: payload.notification.body,
    //   icon: '/firebase-logo.png'
    // };
    
     self.registration.showNotification(notificationTitle, notificationOptions);
})