// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJDxzpnwXW9jOrZimW1tualIvxMCjdds",
  authDomain: "palace-academy.firebaseapp.com",
  projectId: "palace-academy",
  storageBucket: "palace-academy.appspot.com",
  messagingSenderId: "794721331671",
  appId: "1:794721331671:web:14ccf465c9edf9fb6e0392",
  measurementId: "G-NQJ3VDFRH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default (app, analytics) ;
