import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../contexts';

const PersonCardEpisode = props => {
  debugger;
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();

  return (
    <>
      <Card className={`${classes.imageAndTitle} ${classes.cards}`}>
        <div>
          <img className={classes.imageStyles} alt="url" />
        </div>
      </Card>
      <Card className={`${classes.cards}`}>
        <CardContent>
          <Typography
            className={classes.title}
            color={classes.cards.color}
            gutterBottom
          ></Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonCardEpisode;
