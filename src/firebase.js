import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBprDDVdLktqBmqAS3p5HfqmprfGlFaIqg",
    authDomain: "mealbros-a51c6.firebaseapp.com",
    projectId: "mealbros-a51c6",
    storageBucket: "mealbros-a51c6.appspot.com",
    messagingSenderId: "562712382001",
    appId: "1:562712382001:web:a4accfc45060ec06bae310"
};

//initialise firebase app
const app = initializeApp(firebaseConfig);


//initialise services
export const db = getFirestore(app);
export const auth = getAuth(app);
