
// Cấu hình và khởi tạo Firebase hạn 08/09/2024 hết hạn

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALNrsT9Ai3DkowwWTqDO5Q7SBXqd7e6XI",
  authDomain: "saleshop-bce88.firebaseapp.com",
  projectId: "saleshop-bce88",
  storageBucket: "saleshop-bce88.appspot.com",
  messagingSenderId: "7540693773",
  appId: "1:7540693773:web:7b79c39d198c5c8ca2ee44",
  measurementId: "G-8N514YXGMX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
