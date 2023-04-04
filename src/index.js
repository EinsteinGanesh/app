// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZNHmswFRk70de2YJR0fjDyGSnU2YGzWM",
  authDomain: "assessment-project-df729.firebaseapp.com",
  projectId: "assessment-project-df729",
  storageBucket: "assessment-project-df729.appspot.com",
  messagingSenderId: "273669549999",
  appId: "1:273669549999:web:1ede7e546f048400bec95a",
  measurementId: "G-HQ5E5QV0RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);