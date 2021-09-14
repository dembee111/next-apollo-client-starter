import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnYuCKoqLOLRVUXN-5ax1aRPiiuEGDE_M",
  authDomain: "gqlreactnode-df258.firebaseapp.com",
  projectId: "gqlreactnode-df258",
  storageBucket: "gqlreactnode-df258.appspot.com",
  messagingSenderId: "824667206924",
  appId: "1:824667206924:web:de9e105a48503a76320529",
  measurementId: "G-397EZ5HM2S"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();