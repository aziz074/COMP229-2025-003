// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // <-- YOU FORGOT THIS LINE!

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD3_dTnYIqMAjDVh_S44UZvqgmx8zMNGs",
  authDomain: "comp229-003.firebaseapp.com",
  projectId: "comp229-003",
  storageBucket: "comp229-003.firebasestorage.app",
  messagingSenderId: "973467529260",
  appId: "1:973467529260:web:7d39642d65ebe24767a189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and export it
export const auth = getAuth(app);
