import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//     apiKey: "AIzaSyCusx25bfXNMUSjlNQ0pVndpW6ghp6Rwxw" ,
//     authDomain: "saishiva-blog.firebaseapp.com",
//     projectId: "saishiva-blog",
//    storageBucket:"saishiva-blog.appspot.com" ,
//    messagingSenderId: "452757829940",
//    appId:"1:452757829940:web:846842b56ee0d44d524d61" ,
//    measurementId:"G-3NV82TDKTG" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign in anonymously
signInAnonymously(auth).catch((error) => {
    console.error("Error signing in anonymously: ", error);
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in: ", user);
    } else {
        console.log("No user is signed in");
    }
});

export { auth, db, signInAnonymously };
