import React from 'react';
import './App.css';
import StarWarsList from './components/containers/StarWarsList';

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
      <StarWarsList />
    </div>
  );
}

export default App;
