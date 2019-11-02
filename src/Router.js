import React, { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts';
import { Login, Characters, Starship, Episodes } from './components/screens';
import {
  EpisodeDetails,
  CharacterDetails,
  StarshipDetails,
  Header,
} from './components/presentational';
import useTheme from './hooks/useTheme';
import client from './apollo-client';

function App() {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <Router>
        <Header />
        <Switch>
          <AllRoutes />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

const AllRoutes = () => {
  const {
    currentTheme: {
      colors: { defaultColors },
    },
  } = useContext(ThemeContext);
  const styles = { defaultColors };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.defaultColors}>
      <ApolloProvider client={client}>
        <Route exact path="/" render={() => <Redirect to="/episodes" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/episodes/:episodeId" component={EpisodeDetails} />
        <Route exact path="/characters" component={Characters} />
        <Route
          exact
          path="/characters/:characterId"
          component={CharacterDetails}
        />
        <Route exact path="/starships" component={Starship} />
        <Route path="/starships/:starshipId" component={StarshipDetails} />
      </ApolloProvider>
    </div>
  );
};

export default App;
