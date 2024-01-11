// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZVReNG2ns787WwJ3uRHFvG8edpWoZijc",
  authDomain: "chatapp-f1d90.firebaseapp.com",
  projectId: "chatapp-f1d90",
  storageBucket: "chatapp-f1d90.appspot.com",
  messagingSenderId: "361589810491",
  appId: "1:361589810491:web:ba505c8f4acb37484c431e",
  measurementId: "G-2HWMSS91DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);