import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase-init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);

  const [isLoad, setisLoad] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    setisLoad(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setisLoad(false);
      });
  };

  const emailPasswordSignIn = (email, password) => {
    setisLoad(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setisLoad(false);
    });
  };

  const emailPasswordSignUp = (email, password, name, history) => {
    setisLoad(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        console.log("User successfully created");
        //save an user to the database
        saveUser(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            error("");
          })
          .catch((error) => {
            console.log(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        error(error.message);
      })
      .finally(() => {
        setisLoad(false);
      });
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://aqueous-plains-63924.herokuapp.com/saveUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  // check admin or not
  useEffect(() => {
    fetch(`https://aqueous-plains-63924.herokuapp.com/saveUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  const logOut = () => {
    setisLoad(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setisLoad(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setisLoad(false);
    });
  }, []);

  return {
    user,
    singInWithGoogle,
    logOut,
    isLoad,
    error,
    admin,
    emailPasswordSignIn,
    emailPasswordSignUp,
  };
};

export default useFirebase;
