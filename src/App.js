import React from 'react';
import './App.css';
import StarWarsList from './components/containers/StarWarsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <Router>
      <div className="App" style={styles.container}>
        <StarWarsList />
      </div>
    </Router>
  );
}

export default App;
