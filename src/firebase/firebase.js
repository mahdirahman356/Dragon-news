// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaC8ywba0f2XicVpFmYZBx2g77o-waMNE",
  authDomain: "dragon-news-31eee.firebaseapp.com",
  projectId: "dragon-news-31eee",
  storageBucket: "dragon-news-31eee.appspot.com",
  messagingSenderId: "599493257313",
  appId: "1:599493257313:web:5132c1daf4c7f29a11e220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
