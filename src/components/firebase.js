import { initializeApp } from "firebase/app";
import swal from "sweetalert";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhGKGcY7-UrF-rhuXyrW6eerFJLo8SxU0",
  authDomain: "edusys-fc41f.firebaseapp.com",
  projectId: "edusys-fc41f",
  storageBucket: "edusys-fc41f.appspot.com",
  messagingSenderId: "799813525863",
  appId: "1:799813525863:web:042cd9fdb81684866c4fc2",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "basicusers"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    var today = new Date();
  var curHr = today.getHours();
  if (curHr < 12) {
    var greet = "Good Morning";
  } else if (curHr < 18) {
    var greet = "Good Afternoon";
  } else {
    var greet = "Good Evening";
  }

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "basicusers"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      swal(
        `${greet} ${user.displayName}`, "Welcome To Our Dashboard!", "success"
      );
    }
  } catch (err) {
    console.error(err);
    swal("Error!", `${err.message}`, "error");
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // swal("You Are Logged In!", `Welcome ${email}!`, "success");
  } catch (err) {
    console.error(err);
    swal("Error!", `${err.message}`, "error");
  }
};

const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  dept,
  sec,
  rollno,
  sem
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "basicusers"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      dept,
      sec,
      rollno,
      sem
    });
  } catch (err) {
    console.error(err);
    swal("Error!", `${err.message}`, "error");
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    swal(
      "We Have Sent You Your Password Reset Link!",
      "Check Your Inbox Or Spam Folder Now To Change Your Password!",
      "success"
    );
  } catch (err) {
    console.error(err);
    swal("Error!", `${err.message}`, "error");
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
