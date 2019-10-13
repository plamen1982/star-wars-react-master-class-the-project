import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import StarWarsCard from '../presentational/StarWarsCard';
import * as data from '../../allEpisodes.json';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingTop: 15,
  },
}));

export default function ImageGridList() {
  const { edges: allEpisodes } = data.data.allEpisodes;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {allEpisodes &&
        allEpisodes.map(episode => {
          return <StarWarsCard key={episode.node.episodeId} data={episode} />;
        })}
    </div>
  );
}
