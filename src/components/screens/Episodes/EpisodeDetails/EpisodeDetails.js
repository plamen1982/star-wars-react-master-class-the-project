import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { HorizontalCard, ListData } from '../../../common';
import { GET_EPISODE_BY_ID } from '../../../../queries';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { ThemeContext } from '../../../../contexts';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();

  const { data, loading, errors } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id: episodeId,
      first: 5,
    },
  });
  debugger;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error...</div>;
  }
  const { episode } = data;
  if (!episode) {
    return null;
  }

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gridEpisodeDetails = 8;
  return (
    <div style={styles}>
      {/* ADD data atribute with current episode */}
      <HorizontalCard data={data.episode} grid={gridEpisodeDetails}>
        <Card>
          <CardContent className={classes.cards}>
            <Typography>{data.episode.openingCrawl}</Typography>
          </CardContent>
        </Card>
        <Grid container>
          <ListData
            data={data.episode.people.edges}
            component={HorizontalCard}
            flexDirection="row"
            grid={4}
          />
        </Grid>
      </HorizontalCard>
    </div>
  );
};
export default EpisodeDetails;
// Refactor for the other cases
// const endIndexOfPeople = episode.people.edges.length - 1;
// const { cursor } = episode.people.edges[endIndexOfPeople];
// const loadMore = () => {
//   fetchMore({
//     variables: { first: 5, after: cursor },
//     updateQuery: (prev, { fetchMoreResult: { episode } }) => {
//       return {
//         episode: {
//           ...prev.episode,
//           ...episode,
//           people: [...prev.episode.people.edges, ...episode.people.edges],
//         },
//       };
//     },
//   });
// };
