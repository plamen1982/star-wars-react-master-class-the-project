import React from 'react';
import './App.css';
import StarWarsCard from '../src/components/presentational/StarWarsCard';

function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <div className="App" style={styles.container}>
      <StarWarsCard />
      <StarWarsCard />
      <StarWarsCard />
    </div>
  );
}

export default App;
