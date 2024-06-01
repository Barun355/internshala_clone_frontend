// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ2AZ0q2GWZB87QT9VNKjt-npm0pOT7OE",
  authDomain: "internarea-58da3.firebaseapp.com",
  projectId: "internarea-58da3",
  storageBucket: "internarea-58da3.appspot.com",
  messagingSenderId: "199811198364",
  appId: "1:199811198364:web:881bbff58357f489712c59",
  measurementId: "G-WVPK9SENLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {
    auth,
    provider
}