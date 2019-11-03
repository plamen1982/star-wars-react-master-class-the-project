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
  Button,
  Box,
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
      colors: { cards, defaultColors, solidButtons },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, solidButtons };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  };

  const gridEpisodeDetails = {
    grid: {
      sm: 12,
      xs: 12,
      md: 8,
    },
    sizeImage: {
      height: 300,
      width: 300,
    },
  };
  const gridPeople = {
    grid: {
      sm: 12,
      xs: 12,
      md: 4,
    },
    sizeImage: {
      height: 100,
      width: 100,
    },
  };
  const { data, loading, errors, fetchMore } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id: episodeId,
      first: 5,
    },
  });
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
  const endIndexOfPeople = episode.people.edges.length - 1;
  const { cursor } = episode.people.edges[endIndexOfPeople];
  const {
    people: { totalCount, edges },
  } = episode;
  const loadMore = () => {
    debugger;
    fetchMore({
      variables: { first: 5, after: cursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        return {
          episode: {
            ...prev.episode,
            ...episode,
            people: {
              edges: [...prev.episode.people.edges, ...episode.people.edges],
              __typename: episode.people.__typename,
            },
          },
        };
      },
    });
  };
  return (
    <div style={styles}>
      <HorizontalCard data={data.episode} styleProperties={gridEpisodeDetails}>
        <Card style={{ marginBottom: 20, marginTop: 20 }}>
          <CardContent className={classes.cards}>
            <Typography>{data.episode.openingCrawl}</Typography>
          </CardContent>
        </Card>
        <Grid container spacing={1}>
          <Typography>
            <Box
              fontSize={15}
              fontStyle="italic"
              fontFamily="Roboto"
              fontWeight="bold"
            >
              Total character in this episode: {totalCount}
            </Box>
          </Typography>
          <ListData
            data={data.episode.people.edges}
            component={HorizontalCard}
            flexDirection="row"
            styleProperties={gridPeople}
          />
        </Grid>
        {totalCount !== edges.length ? (
          <Button
            variant="contained"
            styles={{
              width: 100,
              height: 100,
              marginTop: 10,
            }}
            className={classes.solidButtons}
            onClick={loadMore}
          >
            Load More
          </Button>
        ) : null}
      </HorizontalCard>
    </div>
  );
};
export default EpisodeDetails;
