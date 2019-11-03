import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CardHeader,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import { useLocation } from 'react-router-dom';

export default function HorizontalCard({
  data,
  navigateTo,
  styles,
  grid,
  children,
}) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;
  debugger;
  return (
    <Grid item item md={grid}>
      <Card
        className={`${classes.cards} ${classes.openingDescription}`}
        style={{ display: 'flex', alignItems: 'stretch' }}
      >
        <Typography style={{ flexGrow: '6' }}>
          <CardMedia
            className={classes.cards}
            component="img"
            image={data.image}
            alt="url"
            style={{ width: '30%' }}
          />
        </Typography>

        {navigateTo ? (
          <Typography
            className={classes.cards}
            style={{ flexGrow: '1', paddingLeft: 30, paddingRight: 30 }}
          >
            <Link to={pathname}>{data.title}</Link>
          </Typography>
        ) : (
          <Typography className={classes.cards} style={{ flexGrow: '1' }}>
            {data.title}
          </Typography>
        )}
      </Card>
      {children}
    </Grid>
  );
}
