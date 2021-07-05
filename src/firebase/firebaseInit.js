// GroveBlogs Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';

// Frontend hooked up with backend.
var firebaseConfig = {
    apiKey: "AIzaSyBO5LfsMfEu110LKj54mf6uZKP36NVq6zI",
    authDomain: "groveblogs.firebaseapp.com",
    projectId: "groveblogs",
    storageBucket: "groveblogs.appspot.com",
    messagingSenderId: "135277593585",
    appId: "1:135277593585:web:41170af87ce7140b3cba50"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);       // firebase initialization
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;  // timestamp

  export {timestamp};
  export default firebaseApp.firestore();

// code is safe to expose