import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDYQy5Xp1goudtFAutkS7ob62Fd_W_1-kE",
  authDomain: "fb-proyectofinal.firebaseapp.com",
  projectId: "fb-proyectofinal",
  storageBucket: "fb-proyectofinal.appspot.com",
  messagingSenderId: "499994702814",
  appId: "1:499994702814:web:2c30a80174c70eebef234f",
  measurementId: "G-4B7H5Y4VMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)