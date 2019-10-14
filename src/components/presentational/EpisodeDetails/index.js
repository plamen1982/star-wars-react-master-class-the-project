import React from 'react';
import * as data from '../../../allEpisodes.json';
import EpisodeCard from './../EpisodeCard';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;
  const { edges: allEpisodes } = data.data.allEpisodes;
  const currentEpisode = allEpisodes.find(episode => {
    return episode.node.episodeId === Number(episodeId);
  });
  return <EpisodeCard data={currentEpisode} />;
};
export default EpisodeDetails;
