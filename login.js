import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDzWNluqbGRAwnWzb5iToT9LBIBmehE99A",
  authDomain: "new12-224f4.firebaseapp.com",
  projectId: "new12-224f4",
  storageBucket: "new12-224f4.firebasestorage.app",
  messagingSenderId: "357529545074",
  appId: "1:357529545074:web:ae8535de0fe010bb4655eb",
  measurementId: "G-DH8F4Z5DRC"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById('butn').addEventListener('click', function(){
    let email= document.getElementById('email').value;
    let password= document.getElementById('pswrd').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.href="success.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    console.log("error",errorMessage,errorCode);
    
  });
});