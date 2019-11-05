import React from 'react';
import CharactersList from './CharactersList/CharactersList';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
// TODO move in query file
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;
const Character = props => {
  const { data } = useQuery(AUTHENTICATED_QUERY);
  if (!data.authenticated) {
    props.history.push('/login');
    return null;
  }
  return (
    <>
      <CharactersList />;
    </>
  );
};
export default Character;