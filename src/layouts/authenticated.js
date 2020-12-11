import React from 'react';
import { Switch, Route } from 'react-router-dom';

const SignOut = React.lazy(() =>
  import('../pages/auth/sign-out')
);

const AuthenticatedLayout = () => {

  console.log("AUTHENTICATED")
  return (
    <Switch>
      <Route path="/">
        <SignOut />

      </Route>
    </Switch>
  )
};

export default AuthenticatedLayout;