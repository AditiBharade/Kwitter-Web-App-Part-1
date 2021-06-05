var firebaseConfig = {
    apiKey: "AIzaSyBjwbDX5vZtuZm6dUPOidm9BkwRO4wV44w",
    authDomain: "kwitter-app-6e654.firebaseapp.com",
    databaseURL: "https://kwitter-app-6e654-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-6e654",
    storageBucket: "kwitter-app-6e654.appspot.com",
    messagingSenderId: "121322528205",
    appId: "1:121322528205:web:d55adef1fe79c5c16d7884",
    measurementId: "G-GF46EMQMY1"
  };

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
