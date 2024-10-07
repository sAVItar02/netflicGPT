// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FB_K}`,
  authDomain: "netflixgpt-35c9f.firebaseapp.com",
  projectId: "netflixgpt-35c9f",
  storageBucket: "netflixgpt-35c9f.appspot.com",
  messagingSenderId: "96648183805",
  appId: "1:96648183805:web:b2bcedcb77d6fc892e2394",
  measurementId: "G-NR2ZBTM2QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();