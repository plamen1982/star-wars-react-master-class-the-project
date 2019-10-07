import { createContext } from 'react';

const changeTheme = theme => {
  if (theme === 'light') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
};

const ThemeContext = createContext({ theme: 'light', changeTheme });

export default ThemeContext;
