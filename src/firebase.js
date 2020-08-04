import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD38vIl7GGIt8owUIf8_m8OQD6V7Kc4qPs",
    authDomain: "clone-b96c7.firebaseapp.com",
    databaseURL: "https://clone-b96c7.firebaseio.com",
    projectId: "clone-b96c7",
    storageBucket: "clone-b96c7.appspot.com",
    messagingSenderId: "110980977186",
    appId: "1:110980977186:web:5928cfbd31e9a0b371307b",
    measurementId: "G-YKKSHZ55VN"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };