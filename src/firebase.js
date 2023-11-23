import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7cNz0_hcDCmmBn6NW6bJmK2DNbSpPExM",
  authDomain: "react-multi-user-chat-b4cc1.firebaseapp.com",
  projectId: "react-multi-user-chat-b4cc1",
  storageBucket: "react-multi-user-chat-b4cc1.appspot.com",
  messagingSenderId: "743978241966",
  appId: "1:743978241966:web:e6c03a79da01be7afc823f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
