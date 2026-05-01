import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2WWU1Q0rvI1wKzXa5ISb1L1eifruxEDo",
  authDomain: "fir-3fd10.firebaseapp.com",
  projectId: "fir-3fd10",
  storageBucket: "fir-3fd10.firebasestorage.app",
  messagingSenderId: "1094389833648",
  appId: "1:1094389833648:web:01ccbcf99c778942ed0075",
  measurementId: "G-D5L957NFQ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);