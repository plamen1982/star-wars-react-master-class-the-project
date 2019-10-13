import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarWarsCard from '../presentational/StarWarsCard';
import * as data from '../../allEpisodes.json';
import { ThemeContext } from '../../contexts';

export default function ImageGridList() {
  const stylesList = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      paddingTop: 15,
    },
  };
  const {
    currentTheme: {
      theme: {
        colors: { defaultColors },
      },
    },
  } = useContext(ThemeContext);
  const currentStyles = { ...stylesList, defaultColors: { ...defaultColors } };
  debugger;
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();
  const { edges: allEpisodes } = data.data.allEpisodes;

  return (
    <div className={`${classes.root} ${classes.defaultColors}`}>
      {allEpisodes &&
        allEpisodes.map(episode => {
          return <StarWarsCard key={episode.node.episodeId} data={episode} />;
        })}
    </div>
  );
}
