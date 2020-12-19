import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppLayout from '../components/layouts/app';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../lib/graphqlQueries';

const HomeFeed = React.lazy(() =>
  import('../pages/user/feed')
);

const AuthenticatedLayout = () => {

  const { data: profileData, loading: loadingProfile } = useQuery(USER_PROFILE);

  return (
    <>
      {
        loadingProfile ?
          null :
          <AppLayout profileData={profileData}>
            <Switch>
              <Redirect
                exact path="/sign-(in|up)"
                to="/"
              />
              <Route path="/">
                <HomeFeed
                  profileData={profileData}
                />
              </Route>
            </Switch>
          </AppLayout>
      }
    </>
  )
};

export default AuthenticatedLayout;