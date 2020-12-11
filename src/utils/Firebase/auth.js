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
    token: ""
  });

  const { isLoggedIn, token: jwtToken } = userSession;

  const onAuthStateChange = callback => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({
          isLoggedIn: true,
          token: user.refreshToken
        })
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

  const userSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setUserSession({
          isLoggedIn: true,
          token: user.refreshToken
        })

        return { code: "successfully-signed-in" }
      })
      .catch(error => {
        return error
      });
  };

  const userSignOut = () => {
    firebase.auth().signOut()
  };

  return {
    userSignIn,
    userSignOut,
    isLoggedIn,
    jwtToken
  };
}

export { AuthProvider, useAuth };