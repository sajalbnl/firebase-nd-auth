
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD_ubAVFagtj8RHLw0l9mi0_0fnrzLBRQ8",
  authDomain: "react-authentication-3633e.firebaseapp.com",
  projectId: "react-authentication-3633e",
  storageBucket: "react-authentication-3633e.appspot.com",
  messagingSenderId: "674436141015",
  appId: "1:674436141015:web:6bae38199706f810348592",
  measurementId: "G-EZS06QLBWJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;