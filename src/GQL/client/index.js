import { ApolloClient, split } from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from 'apollo-utilities';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql'
});

const link = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  )
}, wsLink, httpLink);

export const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  }
});