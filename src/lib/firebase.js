// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEDneevJJ2W8Uqx9zXtHo_q2ujly83uhw",
  authDomain: "resume-parserjun.firebaseapp.com",
  projectId: "resume-parserjun",
  storageBucket: "resume-parserjun.appspot.com",
  messagingSenderId: "630967495642",
  appId: "1:630967495642:web:6811c292fabd430b5c6ee3",
  measurementId: "G-7ZPWFTQ8YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)