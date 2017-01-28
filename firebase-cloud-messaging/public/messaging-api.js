
// Show a notification using the native browser API.
if(window.Notification && Notification.permission !== "denied") {
  // Request notification permission.
  Notification.requestPermission(function(status) {
    var n = new Notification('Hello', { 
      body: 'World :-O',
      icon: '/firebase-logo.png'
    }); 
  });
}
