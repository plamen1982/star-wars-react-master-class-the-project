import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import CharactersList from '../containers/CharactersList';
const Character = () => {
  const theme = useContext(ThemeContext);

  return <CharactersList />;
};
export default Character;
