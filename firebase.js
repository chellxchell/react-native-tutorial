import * as firebase from 'firebase';
import 'firebase/auth';

import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtPkxDk3CqEeUu2qPgW9WA0NrzrgTMtV8",
    authDomain: "react-native-3c3e8.firebaseapp.com",
    databaseURL: "https://react-native-3c3e8.firebaseio.com",
    projectId: "react-native-3c3e8",
    storageBucket: "react-native-3c3e8.appspot.com",
    messagingSenderId: "576893070341",
    appId: "1:576893070341:web:3cd1215f28ebfe09d3c06c",
    measurementId: "G-47YTLTBPPK"
  };
firebase.initializeApp(firebaseConfig);

export { firebase };