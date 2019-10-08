import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import StarWarsCard from '../presentational/StarWarsCard';
import * as data from '../../allFilms.json';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
}));

export default function ImageGridList() {
  const { allFilms } = data;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {allFilms.map(movie => {
        return <StarWarsCard data={movie} />;
      })}
    </div>
  );
}
