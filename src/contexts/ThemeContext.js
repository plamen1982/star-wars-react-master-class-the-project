import { createContext } from 'react';
const toggleTheme = () => {};

const ThemeContext = createContext({
  theme: { name: '', colors: {} },
  toggleTheme,
});

export default ThemeContext;
