// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiaZIyYHX7FVdUVJ5xK0ruwaVwoWZ6ITM",
  authDomain: "wallhaven-1b399.firebaseapp.com",
  projectId: "wallhaven-1b399",
  storageBucket: "wallhaven-1b399.appspot.com",
  messagingSenderId: "11670808319",
  appId: "1:11670808319:web:a4d4be70001144c4188eca",
  measurementId: "G-RZRKVD9W13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
