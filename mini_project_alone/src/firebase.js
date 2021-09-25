import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8omf3EejqqdBLh8zR_qRNcQuERh8Tqvc",
    authDomain: "mini-project-alone.firebaseapp.com",
    projectId: "mini-project-alone",
    storageBucket: "mini-project-alone.appspot.com",
    messagingSenderId: "245120232781",
    appId: "1:245120232781:web:b8fa8aaa4741b879549b04",
    measurementId: "G-XRWWCC5N22"
}

initializeApp(firebaseConfig);
export const db = getFirestore();
