// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ZOlUCgskcN1Q9EYf3vQ8m0HNgAhg_5s",
  authDomain: "expense-tracker-ab7a7.firebaseapp.com",
  projectId: "expense-tracker-ab7a7",
  storageBucket: "expense-tracker-ab7a7.firebasestorage.app",
  messagingSenderId: "803923343605",
  appId: "1:803923343605:web:e744234b536ee7d11aadbc",
  measurementId: "G-349E8T9WDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
