// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkUW2DLCVWhNQ5KZgjv7AcBKP4R_gaj5g",
  authDomain: "booking-com-1c808.firebaseapp.com",
  projectId: "booking-com-1c808",
  storageBucket: "booking-com-1c808.appspot.com",
  messagingSenderId: "945394957136",
  appId: "1:945394957136:web:01fcee8e708bcd5cb4ca55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;