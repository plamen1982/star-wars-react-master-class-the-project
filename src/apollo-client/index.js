import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import { typeDefs, resolvers } from './local';
import authLink from './authLink';

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
});

const allLinks = [authLink, httpLink];

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: from(allLinks),
  //link: authLink.concat(httpLink);
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
