import { initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyALHyAQu2GpHbcw69K-2EobMO88u95aYg0",
    authDomain: "the-walking-closet.firebaseapp.com",
    projectId: "the-walking-closet",
    storageBucket: "the-walking-closet.appspot.com",
    messagingSenderId: "555584285032",
    appId: "1:555584285032:web:81799c63fd7587e2ae4edd"
  };

  export const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)

  export const storage = getStorage()
  
  

  