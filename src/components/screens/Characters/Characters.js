import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { GET_ALL_CHARACTERS } from '../../../queries';
import { CharactersList, LoadMoreButton } from '../../common';
import { ThemeContext } from '../../../contexts';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;
const Characters = props => {
  const { data: isAuth } = useQuery(AUTHENTICATED_QUERY);
  // !isAuth.authenticated ? props.history.push('/login');
  // if (!isAuth.authenticated) {
  //   props.history.push('/login');
  //   return null;
  // }
  const {
    currentTheme: {
      colors: { cards, defaultColors, solidButtons },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, solidButtons };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();

  const { data, loading, errors, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      first: 12,
      numberStarships: 5,
    },
  });
  if (loading) {
    return <LinearProgress />;
  }
  if (errors) {
    return <div>Error....</div>;
  }
  const endIndexOfPeople = data.allPeople.edges.length - 1;
  const { cursor } = data.allPeople.edges[endIndexOfPeople];
  const {
    allPeople: { totalCount, edges },
  } = data;
  const loadMore = () => {
    fetchMore({
      variables: { first: 5, after: cursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        return {
          allPeople: {
            edges: [...prev.allPeople.edges, ...allPeople.edges],
            __typename: allPeople.__typename,
          },
        };
      },
    });
  };

  return data.allPeople ? (
    <>
      <CharactersList data={data.allPeople.edges} />
      {totalCount !== edges.length ? (
        <LoadMoreButton styles={classes.solidButtons} loadMore={loadMore} />
      ) : null}
    </>
  ) : null;
};
export default Characters;
