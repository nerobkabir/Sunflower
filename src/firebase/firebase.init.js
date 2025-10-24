// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg-cBpTahvoVZMATeMpA4hCh_efBs_kF0",
  authDomain: "category-sunflower-bfb42.firebaseapp.com",
  projectId: "category-sunflower-bfb42",
  storageBucket: "category-sunflower-bfb42.firebasestorage.app",
  messagingSenderId: "335410311677",
  appId: "1:335410311677:web:b6082b61f3c28c6681a994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);