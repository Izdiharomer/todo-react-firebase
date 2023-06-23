// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISCLIrbL3VF3yVOiRa3Y72J2mhRHbhC0",
  authDomain: "todo-app-io.firebaseapp.com",
  projectId: "todo-app-io",
  storageBucket: "todo-app-io.appspot.com",
  messagingSenderId: "896474472002",
  appId: "1:896474472002:web:96c1d9256bf0df6b7dd7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)