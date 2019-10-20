import React from 'react';
import EpisodesList from '../containers/EpisodesList';

const Episodes = props => {
  if (!window.localStorage.token) {
    props.history.push('/login');
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
