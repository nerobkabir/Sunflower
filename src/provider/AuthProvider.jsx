import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile, } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup_user = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const update_user_profile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const login_user = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const google_sign_in = () => {
    return signInWithPopup(auth, provider);
  };

  const logout_user = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    signup_user,
    login_user,
    google_sign_in,
    logout_user,
    update_user_profile,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
