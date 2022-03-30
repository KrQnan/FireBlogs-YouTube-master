import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1uiagHwC66O_bamgf9DJMKUYcXIltGHY",
    authDomain: "fireblogs-985d0.firebaseapp.com",
    projectId: "fireblogs-985d0",
    storageBucket: "fireblogs-985d0.appspot.com",
    messagingSenderId: "996289762241",
    appId: "1:996289762241:web:3285e33488c13ffb101540",
    measurementId: "G-6FS5VPCTDS"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();