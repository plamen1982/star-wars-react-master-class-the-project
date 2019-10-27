import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import EpisodeCard from './../EpisodeCard';
import { GET_ALL_EPISODES } from '../../../queries';
import PeopleListPerEpisode from '../PeopleListPerEpisode/PeopleListPerEpisode';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;

  const { data, loading, errors, fetchMore } = useQuery(GET_ALL_EPISODES, {
    variables: {
      first: 10,
      numberPeople: 5,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error...</div>;
  }
  const {
    allEpisodes: { edges: episodes },
  } = data;

  const currentEpisode = episodes.find(episode => {
    return episode.node.episodeId === Number(episodeId);
  });
  //TODO filtering with Graphql, only for the current episode, change the episode query, see schema
  const { cursor } = currentEpisode.node.people.edges[4];
  const loadMore = () => {
    fetchMore({
      variables: { after: cursor },
      updateQuery: (prev, { fetchMoreResult: { allEpisodes } }) => {
        return {
          allEpisodes: {
            ...prev,
            ...allEpisodes,
          },
        };
      },
    });
  };

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const episodeDirectionCard = 'horizontal';
  return (
    <div style={styles}>
      <EpisodeCard data={currentEpisode.node} direction={episodeDirectionCard}>
        <PeopleListPerEpisode data={currentEpisode.node} />
        <button onClick={loadMore}>Load More..</button>
      </EpisodeCard>
    </div>
  );
};
export default EpisodeDetails;
