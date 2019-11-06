import {
  defaultColorsDarkTheme,
  cardsDarkTheme,
  appBarDarkTheme,
  solidButtonsDarkTheme,
  outlineButtonsDarkTheme,
  inputsDarkTheme,
  primaryHeadingDarkTheme,
  radarDarkTheme,
  linksDarkTheme,
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
  linksLightTheme,
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
  links: linksLightTheme,
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
  links: linksDarkTheme,
};

export { darkTheme, lightTheme };
