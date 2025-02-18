// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbBRa8z1HQ650oWoVWzZWU5IzgT0qTuk",
  authDomain: "coffee-store-79537.firebaseapp.com",
  projectId: "coffee-store-79537",
  storageBucket: "coffee-store-79537.firebasestorage.app",
  messagingSenderId: "18380079348",
  appId: "1:18380079348:web:bdfe588c636bac8039dea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);