import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVfoibMhZRpwqA6gQePqy6-b3HmC3C8ZU",
  authDomain: "ecommerce-4b769.firebaseapp.com",
  projectId: "ecommerce-4b769",
  storageBucket: "ecommerce-4b769.appspot.com",
  messagingSenderId: "708412213105",
  appId: "1:708412213105:web:8ff2cadc348a6f77e058d0",
  measurementId: "G-CYF5G7RCF1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();