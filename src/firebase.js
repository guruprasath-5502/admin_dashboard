// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rW0HPh0mdyBaQ6Eh96OrIW_QPs_i4OM",
  authDomain: "admin-f342a.firebaseapp.com",
  projectId: "admin-f342a",
  storageBucket: "admin-f342a.appspot.com",
  messagingSenderId: "331136986261",
  appId: "1:331136986261:web:c7e3034c1394e6a22eff9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
