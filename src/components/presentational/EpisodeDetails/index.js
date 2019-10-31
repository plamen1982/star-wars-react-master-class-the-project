import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import EpisodeCard from './../EpisodeCard';
import { GET_ALL_EPISODES, GET_ALL_CHARACTERS } from '../../../queries';
import PeopleListPerEpisode from '../PeopleListPerEpisode/PeopleListPerEpisode';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;

  const { data: allEpisodes } = useQuery(GET_ALL_EPISODES, {
    variables: {
      first: 10,
      numberPeople: 5,
    },
  });

  const { data: allPeople, loading, errors, fetchMore } = useQuery(
    GET_ALL_CHARACTERS,
    {
      variables: {
        first: 10,
        numberPeople: 5,
        numberOfStar: 5,
      },
    },
  );
  debugger;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error...</div>;
  }
  // const {
  //   allEpisodes: { edges: episodes },
  // } = data;

  // const currentEpisode = episodes.find(episode => {
  //   return episode.node.episodeId === Number(episodeId);
  // });
  // const endIndexOfPeople = currentEpisode.node.people.edges.length - 1;
  // const { cursor } = currentEpisode.node.people.edges[endIndexOfPeople];
  const loadMore = () => {
    fetchMore({
      // variables: { after: cursor },
      updateQuery: (prev, { fetchMoreResult: { allEpisodes } }) => {
        debugger;

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
      {/* ADD data atribute with current episode */}
      <EpisodeCard direction={episodeDirectionCard}>
        {/* ADD data atribute with current people for this episode episode */}
        <PeopleListPerEpisode />
        <button onClick={loadMore}>Load More..</button>
      </EpisodeCard>
    </div>
  );
};
export default EpisodeDetails;
