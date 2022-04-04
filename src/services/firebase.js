import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBGR8fmgVd7k-2ec73V7PWIXLeffpwZKy4",
    authDomain: "chatty-dbc18.firebaseapp.com",
    projectId: "chatty-dbc18",
    storageBucket: "chatty-dbc18.appspot.com",
    messagingSenderId: "482949105707",
    appId: "1:482949105707:web:12f267ca29a251bf2fc26e"
  };



  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
   export const db = getDatabase(app)