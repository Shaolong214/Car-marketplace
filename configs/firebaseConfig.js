// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz-LcSUchPFHp7Og61HNmNbYY2Q3Fj9i0",
  authDomain: "evai-travel-planner.firebaseapp.com",
  projectId: "evai-travel-planner",
  storageBucket: "evai-travel-planner.appspot.com",
  messagingSenderId: "378461551895",
  appId: "1:378461551895:web:590e7c720505f04fcc0b52",
  measurementId: "G-KDR8LB2LPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);