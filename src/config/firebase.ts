// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { API_FIREBASE_KEY } from ".";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: API_FIREBASE_KEY,
  authDomain: "news-tahir.firebaseapp.com",
  databaseURL: "https://news-tahir-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "news-tahir",
  storageBucket: "news-tahir.appspot.com",
  messagingSenderId: "182010414466",
  appId: "1:182010414466:web:5a8af3e2f1df30a2ef3b9b",
  measurementId: "G-KD96G8N085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db  = getDatabase(app)
