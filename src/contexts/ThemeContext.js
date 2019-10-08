import { createContext } from 'react';
import { lightTheme } from '../styles';
const toggleTheme = () => {};

const ThemeContext = createContext({
  theme: { name: 'light', colors: {} },
  toggleTheme,
});

export default ThemeContext;
