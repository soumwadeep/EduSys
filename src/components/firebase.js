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
    const q = query(
      collection(db, "GoogleUsers"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(q);

    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      var greet = "Good Morning";
    } else if (curHr < 18) {
      greet = "Good Afternoon";
    } else {
      greet = "Good Evening";
    }

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "GoogleUsers"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      swal(
        `${greet} ${user.displayName}`,
        "Welcome To Our Dashboard!",
        "success"
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

const registerStudentWithEmailAndPassword = async (
  name,
  email,
  password,
  dept,
  sec,
  rollno,
  sem,
  plan
) => {
  try {
    const student = await createUserWithEmailAndPassword(auth, email, password);
    const user = student.user;
    await addDoc(collection(db, "Students"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      dept,
      sec,
      rollno,
      sem,
      plan,
    });
  } catch (err) {
    console.error(err);
    swal("Error!", `${err.message}`, "error");
  }
};

const registerTeacherWithEmailAndPassword = async (
  name,
  email,
  password,
  dept,
  facultynum,
  position,
  plan
) => {
  try {
    const teacher = await createUserWithEmailAndPassword(auth, email, password);
    const user = teacher.user;
    await addDoc(collection(db, "Teachers"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      dept,
      facultynum,
      position,
      plan,
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

const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
setTimeout(logout, twentyFourHoursInMilliseconds);

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerStudentWithEmailAndPassword,
  registerTeacherWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
