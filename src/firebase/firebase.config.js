// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVqb64MPZTTPaXclcNGPFwr2bYL7qz0mA",
  authDomain: "task-assignment-e400a.firebaseapp.com",
  projectId: "task-assignment-e400a",
  storageBucket: "task-assignment-e400a.appspot.com",
  messagingSenderId: "256111117347",
  appId: "1:256111117347:web:66ad298bb0a2fa9d8b1d96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
export default auth