import { createContext } from 'react';
const toggleTheme = () => {};

const ThemeContext = createContext({
  name: '',
  colors: {
    defaultColors: {},
    cards: {},
    appBar: {},
    solidButtons: {},
    outlineButtons: {},
    inputs: {},
    primaryHeading: {},
    radar: {},
  },
  toggleTheme,
});

export default ThemeContext;
