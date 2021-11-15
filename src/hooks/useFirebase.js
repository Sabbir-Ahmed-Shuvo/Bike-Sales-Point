import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase-init";

initializeAuthentication()
const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [isLoad, setisLoad] = useState(true);
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle =() =>{
      setisLoad(true)
      return  signInWithPopup(auth, googleProvider)
      .catch(error =>{
        setError(error.message)
      })
      .finally(() =>{
        setisLoad(false)
      })  
    }
    const emailPasswordSignIn =(email,password) =>{
      setisLoad(true)
      return  signInWithEmailAndPassword(auth,email,password)
      .finally(() =>{
        setisLoad(false)
      })  
    }
    const emailPasswordSignUp =(email,password,name) =>{
      setisLoad(true)
      return  createUserWithEmailAndPassword(auth,email,password,name)
      .finally(() =>{
        setisLoad(false)
      })  
    }

    const logOut =() =>{
      setisLoad(true)
        signOut(auth)
        .then(() =>{
           setUser({})
        })
        .finally(() =>{
          setisLoad(false)
        }) 
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            setisLoad(false)
          });
    },[])

    return{
        user,
        singInWithGoogle,
        logOut,
        isLoad,
        error,
        emailPasswordSignIn,
        emailPasswordSignUp
    }
}



export default useFirebase;