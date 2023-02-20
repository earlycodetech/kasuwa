// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoQyHfw_Tk4b-o_QA04WOOa_ETRyURAjQ",
    authDomain: "kasuwa-30169.firebaseapp.com",
    projectId: "kasuwa-30169",
    storageBucket: "kasuwa-30169.appspot.com",
    messagingSenderId: "559454586123",
    appId: "1:559454586123:web:73ee4dffc3c31c16dc8e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }