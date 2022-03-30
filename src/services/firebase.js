import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGR8fmgVd7k-2ec73V7PWIXLeffpwZKy4",
    authDomain: "chatty-dbc18.firebaseapp.com",
    projectId: "chatty-dbc18",
    storageBucket: "chatty-dbc18.appspot.com",
    messagingSenderId: "482949105707",
    appId: "1:482949105707:web:12f267ca29a251bf2fc26e"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp
  export const auth = firebase.auth;
export const db = firebase.database();