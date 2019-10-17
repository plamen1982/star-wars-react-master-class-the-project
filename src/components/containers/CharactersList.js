import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharactersCard from '../presentational/CharactersCard';
import ListData from '../containers/ListData';
import * as data from '../../allPeople.json';
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
  const { edges: allPeople } = data.data.allPeople;
  const direction = 'vertical';
  return (
    <div className={classes.root}>
      <ListData
        component={CharactersCard}
        data={allPeople}
        direction={direction}
      />
    </div>
  );
}
