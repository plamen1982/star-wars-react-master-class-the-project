import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../presentational/ListData';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EPISODES } from '../../queries';
// import { episodes } from './episodes';
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
  const { data, loading, error } = useQuery(GET_ALL_EPISODES);
  if (error) {
    return <div>...Ops you have errors, message: {error.message}</div>;
  }
  return loading ? (
    <div>...Loading</div>
  ) : (
    <div className={classes.root}>
      <ListData
        component={EpisodeCard}
        direction={direction}
        data={data.allEpisodes.edges}
      />
    </div>
  );
}
