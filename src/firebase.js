import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACAp_RLKIPxnxT_mjeypO3xfzWurAjZCo",
  authDomain: "clone-2b292.firebaseapp.com",
  databaseURL: "https://clone-2b292.firebaseio.com",
  projectId: "clone-2b292",
  storageBucket: "clone-2b292.appspot.com",
  messagingSenderId: "866634411208",
  appId: "1:866634411208:web:6556cc7f1b15f3750109fd",
  measurementId: "G-29W2K4R05L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };