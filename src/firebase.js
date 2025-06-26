// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmjrr3NJok1lBtPfncRg73CLEMqF0HP1k",
  authDomain: "hexanest-c98dd.firebaseapp.com",
  projectId: "hexanest-c98dd",
  storageBucket: "hexanest-c98dd.firebasestorage.app",
  messagingSenderId: "236347193395",
  appId: "1:236347193395:web:7ac1f6b806ab9eec6bcb46",
  measurementId: "G-3FDPF67LQC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Assign roles based on email
export const checkUserRole = async (user) => {
  const adminEmail = "adamhaymour@gmail.com";
  const lifetimeFreeEmail = "rockwellestatehomes@yahoo.ca";

  if (!user) return null;
  const email = user.email;

  if (email === adminEmail) return 'admin';
  if (email === lifetimeFreeEmail) return 'free';
  return 'standard';
};

export default firebase;
