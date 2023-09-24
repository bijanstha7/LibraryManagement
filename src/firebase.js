import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFU78TEcR2wucBCn_1srj3wYmlalmZHKQ",
  authDomain: "library-ea189.firebaseapp.com",
  projectId: "library-ea189",
  storageBucket: "library-ea189.appspot.com",
  messagingSenderId: "242721050862",
  appId: "1:242721050862:web:4e823e02962efbf51e23ff",
  measurementId: "G-VKD6PGT6DB",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
