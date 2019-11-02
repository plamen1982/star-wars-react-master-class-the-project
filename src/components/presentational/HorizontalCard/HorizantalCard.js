import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
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
  return (
    <Grid container spacing={grid.containerSpacing}>
      <Grid item xs={grid.numberOfItemColumns}>
        <Card className={`${classes.imageAndTitle} ${classes.cards}`}>
          <img className={classes.imageStyles} src={data.image} alt="url" />
        </Card>
        <Card>
          <div>
            {navigateTo ? (
              <Link to={pathname}>{data.title}</Link>
            ) : (
              <div>{data.title}</div>
            )}
          </div>
        </Card>
        <Card className={`${classes.cards} ${classes.openingDescription}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color={classes.cards.color}
              gutterBottom
            >
              {data.openingCrawl}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <>{children}</>
    </Grid>
  );
}
