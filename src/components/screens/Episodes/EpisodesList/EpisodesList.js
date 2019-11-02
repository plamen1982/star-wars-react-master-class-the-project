import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import ListData from '../../../common/ListData/ListData';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EPISODES } from '../../../../queries';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function EpisodesList() {
  const useStylesLoader = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
    },
  }));
  // const stylesList = {
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     justifyContent: 'space-around',
  //     alignContent: 'center',
  //     paddingTop: 15,
  //   },
  // };
  // const currentStyles = { ...stylesList };
  // const useStyles = makeStyles(currentStyles);
  // const classes = useStyles();
  const classesLoader = useStylesLoader();

  const { data, loading, errors } = useQuery(GET_ALL_EPISODES, {
    variables: {
      first: 10,
      numberPeople: 5,
    },
  });
  if (loading) {
    return <LinearProgress className={classesLoader.progress} />;
  }
  if (errors) {
    return <p></p>;
  }
  if (!data) {
    return null;
  }
  const episodesGridSettings = {
    spacing: 3,
    columns: 4,
  };
  const direction = 'row';
  return (
    <ListData
      component={EpisodeCard}
      direction={direction}
      data={data.allEpisodes.edges}
      grid={episodesGridSettings}
    />
  );
}
