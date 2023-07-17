// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSsts9JnDsf5GDkDtfY765Wek3sBqojE",
  authDomain: "chronos-store-6de42.firebaseapp.com",
  projectId: "chronos-store-6de42",
  storageBucket: "chronos-store-6de42.appspot.com",
  messagingSenderId: "687146570159",
  appId: "1:687146570159:web:41e72611086faaa3ffdf5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
