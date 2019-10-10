import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const useStyles = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: 15,
      paddingBottom: 15,
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
      padding: 10,
      textDecoration: 'none',
    },
    active: {
      backgroundColor: 'orange',
      textDecoration: 'none',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavLink
        to="/"
        exact={true}
        activeClassName={classes.active}
        className={classes.leftHeader}
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
        <NavLink
          to="/login"
          activeClassName={classes.active}
          className={classes.leftHeader}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};
export default withRouter(Header);
