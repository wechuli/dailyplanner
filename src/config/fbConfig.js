// Initialize Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDOXweqssPqW3GLgP-2UiYV5Nve3YeBdGM",
    authDomain: "project-planner-ec3c8.firebaseapp.com",
    databaseURL: "https://project-planner-ec3c8.firebaseio.com",
    projectId: "project-planner-ec3c8",
    storageBucket: "project-planner-ec3c8.appspot.com",
    messagingSenderId: "488485456392"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true})


  export default firebase;
  