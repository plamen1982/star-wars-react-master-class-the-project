import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../containers/ListData';
import * as data from '../../allEpisodes.json';
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
  const { edges: allEpisodes } = data.data.allEpisodes;
  const direction = 'vertical';
  return (
    <div className={classes.root}>
      <ListData
        component={EpisodeCard}
        data={allEpisodes}
        direction={direction}
      />
    </div>
  );
}
