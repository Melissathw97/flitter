import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../constants/routes';

const HomePage = React.lazy(() =>
  import('../pages/index')
)
const SignUp = React.lazy(() =>
  import('../pages/auth/sign-up')
);
const SignIn = React.lazy(() =>
  import('../pages/auth/sign-in')
);

const UnauthenticatedLayout = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.LANDING}
        component={HomePage}
      />
      <Route path={routes.SIGN_UP}>
        <SignUp />
      </Route>
      <Route path={routes.SIGN_IN}>
        <SignIn />
      </Route>
    </Switch>
  )
};

export default UnauthenticatedLayout;