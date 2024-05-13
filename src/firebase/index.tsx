// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFAMTsxj_IfFxmtVI5fUicE5aIdPCq_Qs",
  authDomain: "dressrehearsal-fe.firebaseapp.com",
  projectId: "dressrehearsal-fe",
  storageBucket: "dressrehearsal-fe.appspot.com",
  messagingSenderId: "537614160571",
  appId: "1:537614160571:web:881bf08ae62db14a304f9e",
  measurementId: "G-WTB8H5MMTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
