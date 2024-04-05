import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";

  export const AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState()
    let [loading, setLoading] = useState(true)

    let createUser = (email,password) => {
       setLoading(true) 
       return createUserWithEmailAndPassword(auth,email,password)
    }
    let userLogin = (email,password) => {
        setLoading(true) 
        return signInWithEmailAndPassword(auth,email,password)
    }
    let userLogOut = () => {
        setLoading(true) 
        signOut(auth)
    }
    useEffect(()=> {
      let unSubscribe =   onAuthStateChanged(auth ,(users) => {
            setLoading(false) 
            setUser(users)
            console.log("ON Auth State Changed",users)
        })
        return () => {
            unSubscribe()
        }
    },[])
    let authInfo = {createUser, userLogin, user, userLogOut, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

Context.propTypes ={
    children: PropTypes.node.isRequired
}
export default Context;