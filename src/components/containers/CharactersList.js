import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharactersCard from '../presentational/CharactersCard';
import ListData from '../presentational/ListData';
import { characters } from './characters';

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    characters && (
      <div className={classes.root}>
        <ListData
          component={CharactersCard}
          data={characters}
          direction={direction}
        />
      </div>
    )
  );
}
