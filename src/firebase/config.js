

import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC514O_wkOMgNSYix1O0-fBvJOH_IGO-c8",
    authDomain: "ninja-clone-firegram.firebaseapp.com",
    projectId: "ninja-clone-firegram",
    storageBucket: "ninja-clone-firegram.appspot.com",
    messagingSenderId: "603597358411",
    appId: "1:603597358411:web:0ef4387e3e9998cddc14ce"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,projectStorage,timeStamp}


