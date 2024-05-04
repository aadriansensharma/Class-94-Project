fuconst firebaseConfig = {
    apiKey: "AIzaSyABWBryuleePor8rKPEHa87Y0IhYgNBEY0",
    authDomain: "class-test-2faa8.firebaseapp.com",
    projectId: "class-test-2faa8",
    storageBucket: "class-test-2faa8.appspot.com",
    messagingSenderId: "297060597621",
    appId: "1:297060597621:web:12613d8d305a363a7f9d3c"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() [
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
]

function send()
{
   msg = document.getElementById("msg").value;
   firebase.datanase().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
]

