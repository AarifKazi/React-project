// Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoIoyW70g8YEWt2ppztpc5zM9ktZ6u_yo",
  authDomain: "fir-react-app-d3964.firebaseapp.com",
  databaseURL: "https://fir-react-app-d3964-default-rtdb.firebaseio.com",
  projectId: "fir-react-app-d3964",
  storageBucket: "fir-react-app-d3964.firebasestorage.app",
  messagingSenderId: "732703660634",
  appId: "1:732703660634:web:26ea7861bffec7ddca5663",
  measurementId: "G-6115N2CPN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();