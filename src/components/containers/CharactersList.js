import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharactersCard from '../presentational/CharactersCard';
import ListData from '../containers/ListData';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../../store/actions';

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
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const direction = 'vertical';

  useEffect(() => {
    dispatch(getAllCharacters());
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
