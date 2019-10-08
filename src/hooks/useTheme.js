import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { darkTheme, lightTheme, commonColors } from '../styles';
const useTheme = () => {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = () => {
    setCurrentTheme(oldTheme =>
      oldTheme.theme.name === 'light'
        ? {
            theme: { name: 'dark', colors: { ...darkTheme } },
          }
        : {
            theme: { name: 'light', colors: { ...lightTheme } },
          },
    );
  };

  useEffect(
    props => {
      toggleTheme();
    },
    [theme],
  );

  return { currentTheme, toggleTheme };
};

export default useTheme;
