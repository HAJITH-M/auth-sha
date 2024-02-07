// firebaseConfig.js
import firebase from 'firebase/compat/app'; // Import Firebase app
import 'firebase/compat/auth'; // Import Firebase authentication

const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyCPyLhj3dZFUhuGZ5LWCvt2N2RJlCZHG3U",
    authDomain: "superchat-53cf3.firebaseapp.com",
    projectId: "superchat-53cf3",
    storageBucket: "superchat-53cf3.appspot.com",
    messagingSenderId: "796195716892",
    appId: "1:796195716892:web:7470b2c3dfc2da7c1e04d9",
    measurementId: "G-BLTQHSSLC6"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };