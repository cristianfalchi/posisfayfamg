// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// devfullstacknelson@gmail.com
const firebaseConfig = {
  apiKey: "AIzaSyB940IfDKkV_ehxbudiCAVdMy3B6IiIG3Y",
  authDomain: "posis-fayfa-suc1.firebaseapp.com",
  projectId: "posis-fayfa-suc1",
  storageBucket: "gs://posis-fayfa-suc1.appspot.com",
  messagingSenderId: "907217725116",
  appId: "1:907217725116:web:c1fc6cb2037dd4954152b9"
};

// Initialize Firebase
export const firebase = () => initializeApp(firebaseConfig);

