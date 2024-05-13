// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEKykpHoLR_DiTIQ-OHcwM0Jv1YOVsPpA",
  authDomain: "dress-rehearsal-store.firebaseapp.com",
  projectId: "dress-rehearsal-store",
  storageBucket: "dress-rehearsal-store.appspot.com",
  messagingSenderId: "264046242112",
  appId: "1:264046242112:web:b4cfb2a143d51adc1fb2a5",
  measurementId: "G-CT1XY2Y1BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);