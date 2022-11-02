import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const key = process.env.VUE_APP_FIREBASE_APP_KEY;
const firebaseConfig = {
  apiKey: key,
  authDomain: "bookstore-18b09.firebaseapp.com",
  projectId: "bookstore-18b09",
  storageBucket: "bookstore-18b09.appspot.com",
  messagingSenderId: "40459515450",
  appId: "1:40459515450:web:ebd590c679d183b2e1e703",
  measurementId: "G-789RCP15R5",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
