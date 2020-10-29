import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBJym1dZfsKzoHAjiUiwuPdqrL7k81kek",
    authDomain: "accord-cloud.firebaseapp.com",
    databaseURL: "https://accord-cloud.firebaseio.com",
    projectId: "accord-cloud",
    storageBucket: "accord-cloud.appspot.com",
    messagingSenderId: "911929184093",
    appId: "1:911929184093:web:a125baedfbc7e30ae3a2b4",
    measurementId: "G-7TV10341E9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
