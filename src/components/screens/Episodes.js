import React from 'react';
import EpisodesList from '../containers/EpisodesList';

const Episodes = props => {
  if (!window.localStorage.token) {
    return null;
  } else {
    return (
      <>
        <EpisodesList />
      </>
    );
  }
};

export default Episodes;
