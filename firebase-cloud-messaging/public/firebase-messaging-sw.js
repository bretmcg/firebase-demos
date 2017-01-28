importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// Initialize Firebase.
// TODO: paste config from Firebase console at console.firebase.google.com
// var config = { ... } ... firebase.initializeApp(config);

const messaging = firebase.messaging();

// Handle background messages. This only triggers if your payload
// doesn't have a "notification" JSON field.

// messaging.setBackgroundMessageHandler(function(payload) {
//   const title = "Hello";
//   const options = {
//     "body": "Notification received!",
//     "icon": "/firebase-logo.png"
//   };
//   return self.registration.showNotification(title, options);
// });
