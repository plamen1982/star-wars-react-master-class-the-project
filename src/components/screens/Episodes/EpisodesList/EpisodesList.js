import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { VerticalCard } from '../../../common';
import { ListData } from '../../../common';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EPISODES } from '../../../../queries';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function EpisodesList() {
  const useStylesLoader = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
    },
  }));

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

  return (
    <Grid container spacing={4}>
      <ListData
        navigateTo="episodes"
        data={data.allEpisodes.edges}
        component={VerticalCard}
        flexDirection="row"
      />
    </Grid>
  );
}
