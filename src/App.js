import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Home,
  Login,
  Characters,
  Starship,
  Episodes,
} from './components/screens';
import {} from './styles/commonColors';
import {
  EpisodeDetails,
  CharacterDetails,
  StarshipDetails,
  Header,
} from './components/presentational';
import ThemeContext from './contexts/ThemeContext';
import useTheme from './hooks/useTheme';
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
  },
}));
function App() {
  const { currentTheme, toggleTheme } = useTheme();
  const classes = useStyles();
  return (
    <div className="App" classes={classes.container}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <Router>
          <Header classes={classes.header} />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/episodes" component={Episodes}></Route>
            <Route
              exact
              path="/episodes/:episodeId"
              component={EpisodeDetails}
            ></Route>
            <Route exact path="/characters" component={Characters}></Route>
            <Route
              exact
              path="/characters/:characterId"
              component={CharacterDetails}
            ></Route>
            <Route exact path="/starship" component={Starship}></Route>
            <Route
              path="/starship/:starshipId"
              component={StarshipDetails}
            ></Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
