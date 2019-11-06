import { useState, useEffect, useContext } from 'react';
import { darkTheme, lightTheme } from '../../styles';

function useTheme(ThemeContext) {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = () => {
    setCurrentTheme(oldTheme => {
      if (oldTheme.name === 'light') {
        return {
          name: 'dark',
          colors: { ...darkTheme },
        };
      } else {
        return {
          name: 'light',
          colors: { ...lightTheme },
        };
      }
    });
  };

  useEffect(() => {
    toggleTheme();
  }, [theme]);

  return { currentTheme, toggleTheme };
}

export default useTheme;
