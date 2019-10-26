import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../presentational/ListData';
import { episodes } from './episodes';
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

  return episodes ? (
    <div className={classes.root}>
      <ListData component={EpisodeCard} direction={direction} data={episodes} />
    </div>
  ) : null;
}
