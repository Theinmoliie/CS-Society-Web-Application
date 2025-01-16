// src/firebase/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpewy-ZY19UC5IsssPX4RuVfR_n9SL64",
  authDomain: "cs-society-web-ef6e6.firebaseapp.com",
  databaseURL: "https://cs-society-web-ef6e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cs-society-web-ef6e6",
  storageBucket: "cs-society-web-ef6e6.firebasestorage.app",
  messagingSenderId: "664759503915",
  appId: "1:664759503915:web:e5b655cf795363e2e3ae6e",
  measurementId: "G-7SHEQ6VSH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
