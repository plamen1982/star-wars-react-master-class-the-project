import React from 'react';
import CharactersList from '../containers/CharactersList';
const Character = props => {
  if (!window.localStorage.token) {
    props.history.push('/login');
    return null;
  } else {
    return (
      <>
        <CharactersList />;
      </>
    );
  }
};
export default Character;
