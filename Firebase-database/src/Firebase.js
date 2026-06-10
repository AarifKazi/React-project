// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsJtD4SokBBwbmi28FoAG2N9TI3F6gb8A",
  authDomain: "produt-8fecf.firebaseapp.com",
  projectId: "produt-8fecf",
  storageBucket: "produt-8fecf.firebasestorage.app",
  messagingSenderId: "647101359081",
  appId: "1:647101359081:web:0d8f6b348707961d752178",
  measurementId: "G-CQ3KM1BJ92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)