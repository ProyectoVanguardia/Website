import Firebase from "firebase";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAsNh4q9kaMcY2ZmMVCEdveKY2RM5eROR0",
    authDomain: "vanguardia-b11df.firebaseapp.com",
    databaseURL: "https://vanguardia-b11df-default-rtdb.firebaseio.com",
    projectId: "vanguardia-b11df",
    storageBucket: "vanguardia-b11df.appspot.com",
    messagingSenderId: "321280224563",
    appId: "1:321280224563:web:37096474950a1b47616246",
    measurementId: "G-9EHDXZWG0R"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const firebase = app;
export const fs = app.firestore();
