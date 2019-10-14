import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';

const Character = () => {
  const theme = useContext(ThemeContext);
  const container = {
    height: 300,
    border: '1px solid blue',
  };
  return <h1 style={container}>List of Characters</h1>;
};
export default Character;
