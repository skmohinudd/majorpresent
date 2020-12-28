import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCFXBtUuPIqBZPiffEPM0LeRGa_RA9MyM4",
  authDomain: "newfuture-10acf.firebaseapp.com",
  projectId: "newfuture-10acf",
  storageBucket: "newfuture-10acf.appspot.com",
  messagingSenderId: "902539422870",
  appId: "1:902539422870:web:120e9177e16bbb764166b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};


