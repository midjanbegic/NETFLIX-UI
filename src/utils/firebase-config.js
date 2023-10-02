import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV5PGQFqqess3xBEmJ1UT5Jh_05ycgS0k",
  authDomain: "react-netflix-simulation.firebaseapp.com",
  projectId: "react-netflix-simulation",
  storageBucket: "react-netflix-simulation.appspot.com",
  messagingSenderId: "1078807414718",
  appId: "1:1078807414718:web:a37ef910e5e5c948e75bef",
  measurementId: "G-W9N01W01D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)