import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQWnry824K3BfBdiS8W_CuBHMgugx-218",
    authDomain: "my-portfolio-172bf.firebaseapp.com",
    projectId: "my-portfolio-172bf",
    storageBucket: "my-portfolio-172bf.appspot.com",
    messagingSenderId: "210104125093",
    appId: "1:210104125093:web:8cf99ada7b1dd6bbad2f4c",
    measurementId: "G-F5V56C56XR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);