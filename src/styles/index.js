import {
  defaultColorsDarkTheme,
  cardsDarkTheme,
  appBarDarkTheme,
  solidButtonsDarkTheme,
  outlineButtonsDarkTheme,
  inputsDarkTheme,
  primaryHeadingDarkTheme,
  radarDarkTheme,
} from './dark';
import {
  defaultColorsLightTheme,
  cardsLightTheme,
  appBarLightTheme,
  solidButtonsLightTheme,
  outlineButtonsLightTheme,
  inputsLightTheme,
  primaryHeadingLightTheme,
  radarLightTheme,
} from './light';

const lightTheme = {
  defaultColors: defaultColorsLightTheme,
  cards: cardsLightTheme,
  appBar: appBarLightTheme,
  solidButtons: solidButtonsLightTheme,
  outlineButtons: outlineButtonsLightTheme,
  inputs: inputsLightTheme,
  primaryHeading: primaryHeadingLightTheme,
  radar: radarLightTheme,
};

const darkTheme = {
  defaultColors: defaultColorsDarkTheme,
  cards: cardsDarkTheme,
  appBar: appBarDarkTheme,
  solidButtons: solidButtonsDarkTheme,
  outlineButtons: outlineButtonsDarkTheme,
  inputs: inputsDarkTheme,
  primaryHeading: primaryHeadingDarkTheme,
  radar: radarDarkTheme,
};

export { darkTheme, lightTheme };
