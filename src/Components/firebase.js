import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhQ98sy-C6YJyWrzyiflGqODrciMd8xWI",
  authDomain: "twitter-clone-6758b.firebaseapp.com",
  projectId: "twitter-clone-6758b",
  storageBucket: "twitter-clone-6758b.appspot.com",
  messagingSenderId: "303787698624",
  appId: "1:303787698624:web:fdb689c9e071bb88e2c025",
  measurementId: "G-0SFG6SEKE4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
