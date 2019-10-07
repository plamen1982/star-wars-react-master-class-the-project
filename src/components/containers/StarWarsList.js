import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import StarWarsCard from '../presentational/StarWarsCard';
import * as data from '../../allFilms.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function ImageGridList() {
  const { allFilms } = data;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {allFilms.map(movie => {
          return <StarWarsCard movie={movie} />;
        })}
      </GridList>
    </div>
  );
}
