// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXI1tafq-8hCn3XDtv-Iphg1XEeQBc_n8",
  authDomain: "fir-authentication-153c2.firebaseapp.com",
  projectId: "fir-authentication-153c2",
  storageBucket: "fir-authentication-153c2.appspot.com",
  messagingSenderId: "753572349295",
  appId: "1:753572349295:web:9fada06519f20d6bb3d49a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
