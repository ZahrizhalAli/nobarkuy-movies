// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfharuMWfmBm_3p4VVB_TRsjHj-KggVjA",
  authDomain: "nobarkuy-d395b.firebaseapp.com",
  projectId: "nobarkuy-d395b",
  storageBucket: "nobarkuy-d395b.appspot.com",
  messagingSenderId: "266017877939",
  appId: "1:266017877939:web:f3c412ead6ac62f569a5c6",
  measurementId: "G-TRHNLEYS21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
