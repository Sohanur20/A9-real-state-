/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";





export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

 


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // social login


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, Githubprovider)

    }





    useEffect(() => {


        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])






    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        gitHubLogin,
        loading,
      

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;