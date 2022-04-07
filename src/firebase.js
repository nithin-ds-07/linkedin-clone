import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACzdMbswZCFGiRmSrBAQoiGUndDzebQy0",
  authDomain: "linkedin-clone-220b1.firebaseapp.com",
  projectId: "linkedin-clone-220b1",
  storageBucket: "linkedin-clone-220b1.appspot.com",
  messagingSenderId: "159344528669",
  appId: "1:159344528669:web:64863ada3a69eaf7d025f4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db;