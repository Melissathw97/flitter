import React, { useContext, createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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
    jwtToken: ""
  });

  const { isLoggedIn } = userSession;

  const onAuthStateChange = callback => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({
          isLoggedIn: true,
          jwtToken: user.refreshToken
        })
        console.log("The user is logged in");
      } else {
        callback({
          isLoggedIn: false,
          jwtToken: ""
        })
        console.log("The user is not logged in");
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUserSession);
    return () => {
      unsubscribe();
    };
  }, [firebase.auth().onAuthStateChanged]);

  const userSignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const userSignOut = () => {
    firebase.auth().signOut()
  };

  return {
    userSignIn,
    userSignOut,
    isLoggedIn
  };
}

export { AuthProvider, useAuth };