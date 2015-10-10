// reference to firebase
var firebaseRef = new Firebase("https://bretchat.firebaseio.com");
var messagesRef = firebaseRef.child("messages");
var usersRef = firebaseRef.child("users");
var upvotesRef = firebaseRef.child("upvotes");
var user;

// DOM elements
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#example-messages');
var loginButton = $('#login-btn');
var usersList = $("#users-list");

messageField.keypress(function(e) {
  if (e.keyCode==13) {
    var message = messageField.val();
    var username = nameField.val();

    //firebaseRef.set(message);
    messagesRef.push({name: username, text: message});

    // save data!
    messageField.val('');
  }
});

// Callback for each chat message
messagesRef.on('child_added', function(snapshot) {
  var data = snapshot.val();
  var username = data.name;
  var message = data.text;

  var nameElement = $("<strong class='example-chat-username'></strong>");
  nameElement.text(username);
  var messageElement = $("<li>");
  messageElement.text(message).prepend(nameElement);

  // Add message
  messageList.append(messageElement);

  // scroll to bottom.
  messageList[0].scrollTop = messageList[0].scrollHeight;
});

usersRef.on('child_added', function(snapshot) {
  var data = snapshot.val();

  // Add logged on user to list.
  var userRow = $("<li>")
    .text(data.username)
    .append($("<div>")
      .addClass("status-online-" + data.online)
      .attr("id", "status-" + data.username));

  usersList.append(userRow);
});

usersRef.on('child_changed', function(snapshot) {
  var data = snapshot.val();
  $("#status-" + data.username).removeClass().addClass("status-online-" + data.online);
});

$("#upvote-btn").click(function() {
  upvotesRef.transaction(function (current_value) {
    return (current_value || 0) + 1;
  });
});

upvotesRef.on("value", function(snapshot) {
  var data = snapshot.val();
  $("#upvote-count").text(data || 0);
});

// Wire up the login button
loginButton.click(function() {
  firebaseRef.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      user = {
        username: authData.github.username,
        uid: authData.uid,
        name: authData.github.displayName,
        online: true
      };

      usersRef.child(authData.uid).set(user);
      console.log("Logged in as: " + user.name);
      loginButton.text("Welcome " + user.name);
      nameField.val(user.username);

      var presenceRef = usersRef.child(user.uid).child("online");
      // Write a value when this client loses connection
      presenceRef.onDisconnect().set(false);
    }
  });
});

// DEMO: DEPLOY LIVE!