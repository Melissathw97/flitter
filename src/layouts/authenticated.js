import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../lib/graphqlQueries';

const SignOut = React.lazy(() =>
  import('../pages/auth/sign-out')
);

const AuthenticatedLayout = () => {

  const { data: profileData, error } = useQuery(USER_PROFILE);

  if (profileData) {
    console.log('profileData', profileData)
  }

  if (error) {
    console.log('error', error)
  }

  return (
    <Switch>
      <Redirect
        exact path="/sign-(in|up)"
        to="/"
      />
      <Route path="/">
        <SignOut />
      </Route>
    </Switch>
  )
};

export default AuthenticatedLayout;