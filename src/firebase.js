
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
     apiKey: "#########################################",  //Your API Key//
    authDomain: "gfarmshop.firebaseapp.com",
    databaseURL: "https://gfarmshop.firebaseio.com",
    projectId: "gfarmshop",
    storageBucket: "gfarmshop.appspot.com",
    messagingSenderId: "############",
    appId: "1:############:web:#################",
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}
