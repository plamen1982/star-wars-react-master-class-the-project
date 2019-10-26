import React from 'react';
import EpisodeCard from './../EpisodeCard';
import { episodes } from '../../containers/episodes';

const EpisodeDetails = props => {
  const {
    match: {
      params: { episodeId },
    },
  } = props;

  const currentEpisode = episodes.find(episode => {
    return episode.node.episodeId === Number(episodeId);
  });
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const episodeDirectionCard = 'horizontal';
  return (
    <div style={styles}>
      <EpisodeCard
        data={currentEpisode.node}
        direction={episodeDirectionCard}
      />
    </div>
  );
};
export default EpisodeDetails;
