// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOdCcuxLuEYnxY9PV87WpEF3pD-gE_RXw",
    authDomain: "chat-app-daa56.firebaseapp.com",
    projectId: "chat-app-daa56",
    storageBucket: "chat-app-daa56.appspot.com",
    messagingSenderId: "992965030860",
    appId: "1:992965030860:web:ee590b6c2ba2b523d82369",
    measurementId: "G-YBNE87R2XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);