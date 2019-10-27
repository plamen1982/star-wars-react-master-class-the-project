import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharactersCard from '../presentational/CharactersCard';
import ListData from '../presentational/ListData';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_CHARACTERS } from '../../queries';
export default function EpisodesList() {
  const stylesList = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      paddingTop: 15,
    },
  };
  const currentStyles = { ...stylesList };
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();
  const direction = 'vertical';
  const { data, errors, loading } = useQuery(GET_ALL_CHARACTERS);
  if (errors) {
    return <div>...Ops you have errors...</div>;
  }
  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <div className={classes.root}>
      <ListData
        component={CharactersCard}
        data={data.allPeople.edges}
        direction={direction}
      />
    </div>
  );
}
