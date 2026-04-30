import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxr6HVePo0BeLyV7-QuH668OpZqVOrm2s",
  authDomain: "consultorio-pediatrico-30cc2.firebaseapp.com",
  projectId: "consultorio-pediatrico-30cc2",
  storageBucket: "consultorio-pediatrico-30cc2.firebasestorage.app",
  messagingSenderId: "806158143244",
  appId: "1:806158143244:web:315f13af8d5dc41c0cc329",
  measurementId: "G-X654WN3J8X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };