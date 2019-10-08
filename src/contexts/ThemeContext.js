import { createContext } from 'react';
const toggleTheme = () => {};
const ThemeContext = createContext({ theme: 'light', toggleTheme });

export default ThemeContext;
