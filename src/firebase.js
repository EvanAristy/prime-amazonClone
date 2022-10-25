import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfCFDSK8n7ELb5s47ZXOYnldODkwT4eLs",
    authDomain: "prime-clone-4bf97.firebaseapp.com",
    projectId: "prime-clone-4bf97",
    storageBucket: "prime-clone-4bf97.appspot.com",
    messagingSenderId: "778756183115",
    appId: "1:778756183115:web:bd0cf8b848f758c1b129ce",
    measurementId: "G-XZDWYKL9TL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };