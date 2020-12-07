import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GraphqlClient = () => {

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVER
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  return apolloClient;
};

export default GraphqlClient;