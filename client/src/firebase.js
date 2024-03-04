// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aggarwal-estate.firebaseapp.com",
  projectId: "aggarwal-estate",
  storageBucket: "aggarwal-estate.appspot.com",
  messagingSenderId: "122732101794",
  appId: "1:122732101794:web:8c2cd689e93f8cd8e8d7fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);