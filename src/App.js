import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from './lib/graphqlClient';
import { Route } from 'react-router-dom';
import * as routes from './constants/routes';

const SignIn = React.lazy(() =>
  import('./pages/auth/sign-in')
);

const App = () => {

  return (
    <ApolloProvider client={graphqlClient}>
      <Route path={routes.SIGN_IN}>
        <SignIn />
      </Route>
    </ApolloProvider>
  );
}

export default App;
