import firebase from "firebase";

// import 'firebase/auth'
// import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCbic6TisGckPCHq32vnFN32cyAyDgsTCw",
    authDomain: "whatsapp-2b090.firebaseapp.com",
    projectId: "whatsapp-2b090",
    storageBucket: "whatsapp-2b090.appspot.com",
    messagingSenderId: "1022814377604",
    appId: "1:1022814377604:web:3eba8c90f436de112e14d1",
    measurementId: "G-2090BGL1KF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;