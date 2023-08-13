const firebaseConfig = {
  apiKey: "AIzaSyBbvmMZ7LLXzw7aQa0vOwdjeHHVc7HFTj4",
  authDomain: "portfolio-1b7a5.firebaseapp.com",
  projectId: "portfolio-1b7a5",
  storageBucket: "portfolio-1b7a5.appspot.com",
  messagingSenderId: "667994286505",
  appId: "1:667994286505:web:1fea5d367168780e7a3cb8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var db = firebase.database();

var form = document.getElementById("myForm");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var title = document.getElementById("title").value
  var image = document.getElementById("image").value
  var content = document.getElementById("content").value
  var data = {
      title: title,
      image: image,
      content: content

  };
  var db = firebase.firestore();
  db.collection("blog").add(data)

  alert("data has been stored successfully")
  form.reset();
}