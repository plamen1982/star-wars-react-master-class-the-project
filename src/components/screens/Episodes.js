import React from 'react';
import EpisodesList from '../containers/EpisodesList';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
// TODO move in query file
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;
const Episodes = props => {
  const { data } = useQuery(AUTHENTICATED_QUERY);
  if (!data.authenticated) {
    props.history.push('/login');
    return null;
  }
  return (
    <>
      <EpisodesList />
    </>
  );
};
export default Episodes;
