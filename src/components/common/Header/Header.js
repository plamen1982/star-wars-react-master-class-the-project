import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { InputOutlined } from '@material-ui/icons';
import styles from './styles';
import { ThemeContext } from '../../../contexts';
import {
  makeStyles,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from '@material-ui/core';
const Header = () => {
  const {
    currentTheme: { colors },
    toggleTheme,
  } = useContext(ThemeContext);
  const currentStyles = {
    ...styles,
    appBar: colors.appBar,
    links: colors.links,
  };

  const useThemeStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const history = useHistory();
  const handleLogout = () => {
    window.localStorage.setItem('token', '');
    history.push('/login');
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          className={themeClasses.title}
          style={{ color: '#4BD5EE' }}
          onClick={toggleTheme}
        >
          <Box fontSize={23} fontStyle="italic" fontFamily="Roboto">
            SWAPP
          </Box>
        </Typography>
        <Typography>
          <NavLink
            to="/episodes"
            activeClassName={classes.active}
            style={{ textDecoration: 'none', paddingRight: 15 }}
          >
            Episodes
          </NavLink>
        </Typography>
        <Typography>
          <NavLink
            to="/characters"
            activeClassName={classes.active}
            style={{ textDecoration: 'none', paddingRight: 15 }}
          >
            Characters
          </NavLink>
        </Typography>
        <Typography>
          <InputOutlined
            id="log-out-button"
            className={classes.appBar.backgroundColor}
            style={{ backgroundColor: 'white', padding: 5, borderRadius: 3 }}
            onClick={handleLogout}
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
