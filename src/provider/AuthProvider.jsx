import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  // Email/password signup
  const signup_user = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email/password login
  const login_user = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in (popup)
  const google_sign_in = () => {
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logout_user = () => {
    return signOut(auth);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // ✅ Finished checking
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading, // ✅ expose loading state
    signup_user,
    login_user,
    google_sign_in,
    logout_user,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
