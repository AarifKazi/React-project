import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);