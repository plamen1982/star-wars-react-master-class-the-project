import React from 'react';
import * as data from '../../allFilms.json';
import StarWarsCard from './StarWarsCard';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;
  const { allFilms } = data;

  const currentEpisode = allFilms.find(episode => episode.id === episodeId);
  return <StarWarsCard data={currentEpisode} />;
};
export default EpisodeDetails;
