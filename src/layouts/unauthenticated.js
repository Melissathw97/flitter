import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../constants/routes';

const SignIn = React.lazy(() =>
  import('../pages/auth/sign-in')
);

const UnauthenticatedLayout = () => {
  return (
    <Switch>
      <Route path={routes.SIGN_IN}>
        <SignIn />
      </Route>
    </Switch>
  )
};

export default UnauthenticatedLayout;