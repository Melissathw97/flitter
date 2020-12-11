import React, { Suspense } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from './lib/graphqlClient';
import { Switch, Route } from 'react-router-dom';
import * as routes from './constants/routes';

const SignIn = React.lazy(() =>
  import('./pages/auth/sign-in')
);

const App = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path={routes.LANDING}>
            <h1>
              Hello
            </h1>
          </Route>
          <Route path={routes.SIGN_IN}>
            <SignIn />
          </Route>
        </Switch>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
