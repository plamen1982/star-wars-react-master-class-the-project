import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Characters,
  Starship,
  Episodes,
} from './components/screens';

import {
  EpisodeDetails,
  CharacterDetails,
  StarshipDetails,
} from './components/presentational';
import ThemeContext from './contexts/ThemeContext';
import { darkTheme, lightTheme, commonColors } from './styles';
function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(props => {}, [theme]);

  const toggleTheme = () => {
    setCurrentTheme(oldTheme =>
      oldTheme.theme.name === 'light'
        ? {
            theme: { name: 'dark', colors: { ...darkTheme } },
          }
        : {
            theme: { name: 'light', colors: { ...lightTheme } },
          },
    );
  };

  return (
    <div className="App" style={styles.container}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <Router>
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
