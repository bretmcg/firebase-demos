// Initialize Firebase.
// TODO: paste config from Firebase console at console.firebase.google.com
var config = {
    apiKey: "AIzaSyB56Ja_HTm0o3_kqIN8zkHIVQ5cH_m0Csk",
    authDomain: "bret-google.firebaseapp.com",
    databaseURL: "https://bret-google.firebaseio.com",
    storageBucket: "project--200264200989872459.appspot.com",
    messagingSenderId: "244962545401"
  };
firebase.initializeApp(config);

console.log('omg this SUPER SO embarassing');

// Enable Firebase Cloud Messaging.
const messaging = firebase.messaging();
messaging.requestPermission()
  .then(function() {
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(function(token) {
    console.log(token);
    // Normally, this is where you would upload to some server side code...
  })
  .catch(function(err) {
    console.log(err);
  });

messaging.onMessage(function(payload) {
  console.log('onMessage', payload);
});
