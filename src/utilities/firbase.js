import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrQm4EQP49jwDuksthojM1BITLLqg-39w",
    authDomain: "vue3-8b669.firebaseapp.com",
    projectId: "vue3-8b669",
    storageBucket: "vue3-8b669.appspot.com",
    messagingSenderId: "840045790465",
    appId: "1:840045790465:web:9a303aacf7bbcdae4c0700",
    measurementId: "G-JMRZDJT1N6"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
