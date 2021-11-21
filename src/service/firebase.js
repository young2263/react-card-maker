import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXqb7b1Pio_IwyS8plEosf5LKSVBzGtKI",
    authDomain: "business-card-maker-9c2e8.firebaseapp.com",
    databaseURL: "https://business-card-maker-9c2e8-default-rtdb.firebaseio.com",
    projectId: "business-card-maker-9c2e8",
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();