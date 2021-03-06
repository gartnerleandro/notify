import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getLocalValue,
  removeLocalElement,
  setLocalValue,
} from "../utils/localStorage";

const firebaseConfig = {
  apiKey: "AIzaSyCGuPikXvVU8ak9Ic1hCXEG1x9t1e4FOVo",
  authDomain: "notify-82e28.firebaseapp.com",
  projectId: "notify-82e28",
  storageBucket: "notify-82e28.appspot.com",
  messagingSenderId: "582175954436",
  appId: "1:582175954436:web:e7a04a0d02676d43fe4751",
  measurementId: "G-W3BH74EBQH",
};

initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = "es";

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();

  return signInWithPopup(auth, googleProvider);
};

export const loginAnonymously = (username) => {
  setLocalValue("user", { username });
  return signInAnonymously(auth);
};

export const onAuthChanged = (onChange) =>
  onAuthStateChanged(auth, (user) => {
    const currentUser = getLocalValue("user");

    if (user) {
      const newUser = {
        userId: user.uid,
        username: user.displayName || currentUser?.username || null,
      };

      setLocalValue("user", newUser);

      if (!user.displayName && newUser.username) {
        updateProfile(user, { displayName: newUser.username });
      }

      onChange(newUser);
    } else {
      removeLocalElement("user");
      onChange(null);
    }
  });

export const onLogout = () => {
  return signOut(auth);
};
