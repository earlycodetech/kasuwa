// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0euBjrjuWELIqa3iAARDysu3E5Qa5Hqg",
  authDomain: "kasuwa-be463.firebaseapp.com",
  projectId: "kasuwa-be463",
  storageBucket: "kasuwa-be463.appspot.com",
  messagingSenderId: "934012275040",
  appId: "1:934012275040:web:3e8ef9b5b111f256b0b605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }