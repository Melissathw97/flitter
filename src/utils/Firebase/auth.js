import React, { useContext, createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { toast } from 'react-toastify';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {

  const [userSession, setUserSession] = useState({
    isLoggedIn: false,
    token: ""
  });

  const { isLoggedIn, token: jwtToken } = userSession;

  const onAuthStateChange = callback => {
    return firebase.auth().onAuthStateChanged(async user => {

      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();

        if ('https://hasura.io/jwt/claims' in idTokenResult) {
          callback({
            isLoggedIn: true,
            token
          })

        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if (!data.exists) return
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);

            callback({
              isLoggedIn: true,
              token
            })
          });
        }

      } else {
        callback({
          isLoggedIn: false,
          token: ""
        })
      }
    });
  };

  const onAuthChange = firebase.auth().onAuthStateChanged

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUserSession);
    return () => {
      unsubscribe();
    };
  }, [onAuthChange]);

  const userSignUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        window.location.reload();
        return response;
      })
      .catch(error => {

        if (error.code === "auth/email-already-in-use") {
          toast.error("E-mail is already registered as a user. Please sign in instead")

        } else if (error.code === "auth/internal-error") {
          toast.error("An internal server error occurred. Please try again later")

        } else {
          toast.error("Something went wrong. Please try again later")
        }

        return error;
      })
  }

  const userSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        return response;
      })
      .catch(error => {

        if (error.code === "auth/user-not-found") {
          toast.error("We could not find your e-mail in any of our records. Please sign up instead")

        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password")

        } else if (error.code === "auth/internal-error") {
          toast.error("An internal server error occurred. Please try again later")

        } else {
          toast.error("Something went wrong. Please try again later")
        }


        return error;
      })
  };

  const userSignOut = () => {
    firebase.auth().signOut()
  };

  return {
    userSignUp,
    userSignIn,
    userSignOut,
    isLoggedIn,
    jwtToken
  };
}

export { AuthProvider, useAuth };