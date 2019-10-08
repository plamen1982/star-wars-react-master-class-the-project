import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Header = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: 'skyblue',
      color: 'white',
    },
    rightHeader: {
      display: 'flex',
      tabs: {
        padding: 10,
      },
    },
    leftHeader: {
      tabs: {
        padding: 10,
      },
    },
  };
  return (
    <div style={styles.container}>
      <NavLink to="/" style={styles.leftHeader.tabs}>
        SWAPP
      </NavLink>
      <div style={styles.rightHeader}>
        <NavLink to="/episodes" style={styles.rightHeader.tabs}>
          Episodes
        </NavLink>
        <NavLink to="/characters" style={styles.rightHeader.tabs}>
          Characters
        </NavLink>
        <NavLink to="/logout" style={styles.rightHeader.tabs}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};
export default withRouter(Header);
