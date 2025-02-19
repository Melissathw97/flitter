import React, { Suspense } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from './lib/graphqlClient';
import { useAuth } from './utils/Firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BreakpointProvider } from 'react-socks';

const UnauthenticatedLayout = React.lazy(() =>
  import('./layouts/unauthenticated')
);
const AuthenticatedLayout = React.lazy(() =>
  import('./layouts/authenticated')
);

const App = () => {

  const { isLoggedIn, jwtToken } = useAuth();

  let currentLayout;

  if (isLoggedIn) {
    currentLayout =
      <AuthenticatedLayout />
  } else {
    currentLayout =
      <UnauthenticatedLayout />
  };

  return (
    <ApolloProvider client={graphqlClient(jwtToken)}>
      <BreakpointProvider>
        <Suspense fallback={<div />}>
          {currentLayout}
        </Suspense>
      </BreakpointProvider>
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
