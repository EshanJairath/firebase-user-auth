//jshint esversion:6
import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA_PZpnNgKl8cXwWUK-NLzqtr7ITWO1oho",
    authDomain: "fir-user-auth-a3b36.firebaseapp.com",
    projectId: "fir-user-auth-a3b36",
    storageBucket: "fir-user-auth-a3b36.appspot.com",
    messagingSenderId: "128151392027",
    appId: "1:128151392027:web:1f0493e7606f4dbc7c8dbe",
    measurementId: "G-62SJ0SRZGZ"
});

export const auth = app.auth();
export default app;