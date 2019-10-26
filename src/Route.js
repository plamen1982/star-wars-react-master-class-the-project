import React, { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

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

const appStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
  },
  app: {
    backgroundColor: 'black',
  },
};

function App() {
  const { currentTheme, toggleTheme } = useTheme();
  const useStyles = makeStyles(appStyles);
  const classes = useStyles();
  return (
    <div className="App" classes={classes.container}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <Router>
          <Header classes={classes.header} />
          <Switch>
            <AllRoutes />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
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
    </div>
  );
};

export default App;
