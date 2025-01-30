import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDzWNluqbGRAwnWzb5iToT9LBIBmehE99A",
  authDomain: "new12-224f4.firebaseapp.com",
  projectId: "new12-224f4",
  storageBucket: "new12-224f4.firebasestorage.app",
  messagingSenderId: "357529545074",
  appId: "1:357529545074:web:ae8535de0fe010bb4655eb",
  measurementId: "G-DH8F4Z5DRC"
};
     
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
document.getElementById('confirm').addEventListener("click",function (){

const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    window.location.href="success.html"
    console.log(user)
    alert("login succesfully")

  
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential);
  });
});