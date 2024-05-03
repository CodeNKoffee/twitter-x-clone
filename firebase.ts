// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSpUxaZBmMCzyOmYSydQmCHVTH7jWDvEI",
  authDomain: "twitter-x-clone-c6484.firebaseapp.com",
  projectId: "twitter-x-clone-c6484",
  storageBucket: "twitter-x-clone-c6484.appspot.com",
  messagingSenderId: "752666116978",
  appId: "1:752666116978:web:73e8b7b45e89552c0f93eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()