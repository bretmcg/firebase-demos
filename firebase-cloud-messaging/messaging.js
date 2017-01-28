// ** Don't forget to update firebase-messagine-sw.js also **

// Initialize Firebase.
// TODO: paste config from Firebase console at console.firebase.google.com
// var config = { ... } ... firebase.initializeApp(config);

// Enable Firebase Cloud Messaging.
const messaging = firebase.messaging();
messaging.requestPermission()
  .then(function() {
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(function(token) {
    console.log(token);
  })
  .catch(function(err) {
    console.log(err);
  });

messaging.onMessage(function(payload) {
  console.log('onMessage', payload);
});
