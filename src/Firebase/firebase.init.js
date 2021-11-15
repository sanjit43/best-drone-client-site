import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const firebaseInitializtion = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializtion;