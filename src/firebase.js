import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDg5dc6sfPA3mwoV9-1Z34QJNOJCNN2Zn8",
  authDomain: "tinder-clone-567f5.firebaseapp.com",
  databaseURL: "https://tinder-clone-567f5.firebaseio.com",
  projectId: "tinder-clone-567f5",
  storageBucket: "tinder-clone-567f5.appspot.com",
  messagingSenderId: "983489039990",
  appId: "1:983489039990:web:693809b69aa46b6e211957",
  measurementId: "G-XKHKV0JK6N",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
