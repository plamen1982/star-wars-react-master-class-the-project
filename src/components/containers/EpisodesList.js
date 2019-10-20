import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../presentational/ListData';
import { getAllEpisodes } from '../../store/actions/';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function EpisodesList() {
  let history = useHistory();
  const stylesList = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      paddingTop: 15,
    },
  };
  const episodes = useSelector(state => state.episodes);
  const dispatch = useDispatch();
  const currentStyles = { ...stylesList };
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();

  const direction = 'vertical';

  useEffect(() => {
    dispatch(getAllEpisodes(history));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return episodes ? (
    <div className={classes.root}>
      <ListData component={EpisodeCard} direction={direction} data={episodes} />
    </div>
  ) : null;
}
