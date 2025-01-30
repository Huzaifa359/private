
import { initializeApp,getAuth, signInWithPopup, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";;
const provider = new FacebookAuthProvider();
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
document.getElementById('fbconfirm').addEventListener("click", function(){


const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    alert('succsessfully  login')
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
});