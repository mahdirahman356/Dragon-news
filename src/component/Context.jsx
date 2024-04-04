import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";

  export const AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState()

    let createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    let userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    let userLogOut = () => {
        signOut(auth)
    }
    useEffect(()=> {
      let unSubscribe =   onAuthStateChanged(auth ,(users) => {
            setUser(users)
            console.log("ON Auth State Changed",users)
        })
        return () => {
            unSubscribe()
        }
    },[])
    let authInfo = {createUser, userLogin, user, userLogOut}
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