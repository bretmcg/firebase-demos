importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// TODO: paste Firebase something somethign
// 
// Initialize Firebase.
var config = {
  apiKey: "AIzaSyB56Ja_HTm0o3_kqIN8zkHIVQ5cH_m0Csk",
  authDomain: "bret-google.firebaseapp.com",
  databaseURL: "https://bret-google.firebaseio.com",
  storageBucket: "project--200264200989872459.appspot.com",
  messagingSenderId: "244962545401"
};
firebase.initializeApp(config);

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
