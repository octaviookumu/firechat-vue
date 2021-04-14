import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  // API KEYS
  apiKey: "AIzaSyD-2KgGfTVdHYvjg6peJ403ISav17ugauM",
  authDomain: "firevue-f480b.firebaseapp.com",
  projectId: "firevue-f480b",
  storageBucket: "firevue-f480b.appspot.com",
  messagingSenderId: "240727800542",
  appId: "1:240727800542:web:84ae4debe6745c72afe04f",
};

const db = firebase.initializeApp(config);
export default db;