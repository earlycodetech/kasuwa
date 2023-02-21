// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB_6Nut7Loadn_WV4zaV3C86b6_vVQvEc",
  authDomain: "earlycodekasuwa.firebaseapp.com",
  projectId: "earlycodekasuwa",
  storageBucket: "earlycodekasuwa.appspot.com",
  messagingSenderId: "66784249785",
  appId: "1:66784249785:web:007b3cd28f98d997801868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }