import {
  WHITE_COLOR,
  YELLOW_COLOR,
  LIGHT_BLUE_COLOR,
  DARK_GREY_COLOR,
  GREY_COLOR,
  GREY_1_COLOR,
  BLACK_COLOR,
} from './commonColors';

const DEFAULT_BACKGROUND_COLOR_DARK_THEME = '#333';
const DEFAULT_FONT_COLOR_DARK_THEME = '#ABB1BA';

const defaultColorsDarkTheme = {
  backgroundColor: DEFAULT_BACKGROUND_COLOR_DARK_THEME,
  color: DEFAULT_FONT_COLOR_DARK_THEME,
};

const cardsDarkTheme = {
  backgroundColor: GREY_COLOR,
  color: BLACK_COLOR,
};

const solidButtonsDarkTheme = {
  backgroundColor: LIGHT_BLUE_COLOR,
  borderColor: 'none',
  color: YELLOW_COLOR,
};

const outlineButtonsDarkTheme = {
  backgroundColor: GREY_COLOR,
  borderColor: DARK_GREY_COLOR,
  color: 'inherit',
};

const inputsDarkTheme = {
  backgroundColor: WHITE_COLOR,
  borderColor: GREY_COLOR,
  color: GREY_1_COLOR,
};

const appBarDarkTheme = {
  backgroundColor: DARK_GREY_COLOR,
  borderColor: BLACK_COLOR,
  color: LIGHT_BLUE_COLOR,
};

const primaryHeadingDarkTheme = {
  color: YELLOW_COLOR,
};

const radarDarkTheme = {
  backgroundColor: YELLOW_COLOR,
  borderColor: BLACK_COLOR,
  color: DARK_GREY_COLOR,
};

export {
  defaultColorsDarkTheme,
  cardsDarkTheme,
  appBarDarkTheme,
  solidButtonsDarkTheme,
  outlineButtonsDarkTheme,
  inputsDarkTheme,
  primaryHeadingDarkTheme,
  radarDarkTheme,
};
