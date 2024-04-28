import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

import { GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }


  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  const updateUser = (user, name, photo) => {
    
    return updateProfile(user, {
      displayName: name,
       photoURL: photo
    })
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state changed', currentUser)
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unSubscribe();
    }
  },[])






  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    handleGoogleSignIn,
    handleGithubSignIn,
    updateUser,
    loading,
   

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;