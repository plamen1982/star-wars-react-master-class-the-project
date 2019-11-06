import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { HorizontalCard, LoadMoreButton } from '../../../common';
import { GET_EPISODE_BY_ID } from '../../../../queries';
import EpisodeDetailsInfo from './EpisodeDetailsInfo/EpisodeDetailsInfo';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from '../../../../contexts';
import CharactersList from '../../../common/CharactersList/CharactersList';

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
  return episode ? (
    <div style={styles}>
      <HorizontalCard data={data.episode} styleProperties={gridEpisodeDetails}>
        <EpisodeDetailsInfo
          data={data.episode.openingCrawl}
          styles={classes.cards}
        />
        <CharactersList data={data.episode.people.edges} />
        {totalCount !== edges.length ? (
          <LoadMoreButton styles={classes.solidButtons} loadMore={loadMore} />
        ) : null}
      </HorizontalCard>
    </div>
  ) : null;
};
export default EpisodeDetails;
