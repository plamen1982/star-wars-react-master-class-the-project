import React, { useContext } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Input } from '@material-ui/icons';
import styles from './styles';
import { ThemeContext } from '../../../contexts';
import { makeStyles } from '@material-ui/core';
const Header = () => {
  const {
    currentTheme: {
      theme: { colors },
    },
    toggleTheme,
  } = useContext(ThemeContext);
  const currentStyles = {
    ...styles,
    appBar: colors.appBar,
    cards: colors.cards,
  };

  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();

  return (
    <div className={`${classes.appBar} ${classes.container}`}>
      <NavLink
        to="/"
        exact={true}
        activeClassName={classes.active}
        className={`${classes.appBar.color} ${classes.leftHeader}`}
      >
        SWAPP
      </NavLink>
      <div className={classes.rightHeader}>
        <NavLink
          to="/episodes"
          activeClassName={classes.active}
          className={classes.leftHeader}
        >
          Episodes
        </NavLink>
        <NavLink
          to="/characters"
          activeClassName={classes.active}
          className={classes.leftHeader}
        >
          Characters
        </NavLink>
        <div className={classes.leftHeader}>
          <Input
            className={classes.appBar.backgroundColor}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
