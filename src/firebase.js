
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
     apiKey: "AIzaSyBzwhFoBLcMGLeTLdlH_mgKc3o6-eDZNcQ",
    authDomain: "gfarmshop.firebaseapp.com",
    databaseURL: "https://gfarmshop.firebaseio.com",
    projectId: "gfarmshop",
    storageBucket: "gfarmshop.appspot.com",
    messagingSenderId: "881319607161",
    appId: "1:881319607161:web:e092dde154b76150b4cda8",
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}