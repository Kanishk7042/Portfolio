
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBc-0yLxNTfKI1gRoqwbmdc2ZXRyVuXJFY",
  authDomain: "portfolio-13db1.firebaseapp.com",
  projectId: "portfolio-13db1",
  storageBucket: "portfolio-13db1.appspot.com",
  messagingSenderId: "356206705528",
  appId: "1:356206705528:web:80f67db35faba8dfcf268d",
  measurementId: "G-724QXMK8GG"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);