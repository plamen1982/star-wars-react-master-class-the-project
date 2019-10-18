import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../containers/ListData';
import axios from 'axios';
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
  const [allEpisodes, setaAllEpisodes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4200/allEpisodes').then(({ data }) => {
      debugger;
      setaAllEpisodes(data);
    });
  }, []);

  const currentStyles = { ...stylesList };
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();

  const direction = 'vertical';
  return (
    <div className={classes.root}>
      <ListData
        component={EpisodeCard}
        direction={direction}
        data={allEpisodes}
      />
    </div>
  );
}
