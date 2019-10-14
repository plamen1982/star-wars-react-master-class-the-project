import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../styles';
const useTheme = () => {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = () => {
    setCurrentTheme(oldTheme => {
      if (oldTheme.name === 'light') {
        return {
          name: 'dark',
          colors: { ...darkTheme },
        };
      }
      return {
        name: 'light',
        colors: { ...lightTheme },
      };
    });
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
