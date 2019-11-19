import { render } from '@testing-library/react';
import { ThemeContext } from '../contexts';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import React from 'react';
const AllProvider = ({ children }) => {
  const currentThemeMock = { colors: 'mocked colors theme' };
  const toggleThemeMock = () => 'mocked toggle theme';
  const mockedApolloClient = new ApolloClient(); // maybe Apollo is going to ask for some configs
  return (
    <ThemeContext.Provider value={{ currentThemeMock, toggleThemeMock }}>
      <ApolloProvider client={mockedApolloClient}>{children}</ApolloProvider>
    </ThemeContext.Provider>
  );
};
//TODO
const customRender = (ui, options) =>
  render(ui, { wrapper: AllProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method

export { customRender as render };
