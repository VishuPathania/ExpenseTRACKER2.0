import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDO57GDvByH7Hw3V5rhGMoyUpwR8aVnmOk",
  authDomain: "exptracker-e7321.firebaseapp.com",
  projectId: "exptracker-e7321",
  storageBucket: "exptracker-e7321.appspot.com",
  messagingSenderId: "805420542275",
  appId: "1:805420542275:web:48ead3af9ce1d5c3e067f6"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Initialize the Firebase Authentication service
  const firestore = getFirestore(app); // Initialize Firestore
  
  
  console.log('Firebase initialized successfully'); 

  export { auth, firestore }; 