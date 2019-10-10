import React from 'react';
import * as data from '../../allEpisodes.json';
import StarWarsCard from './StarWarsCard';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;
  const { allEpisodes } = data.data;

  const currentEpisode = allEpisodes.find(episode => episode.id === episodeId);
  return <StarWarsCard data={currentEpisode} />;
};
export default EpisodeDetails;
