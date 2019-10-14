import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';

export default function EpisodeCard({ data }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { ...styles, cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const { node: movie } = data;
  return (
    <Card className={`${classes.container} ${classes.defaultColors}`}>
      <img className={classes.imageStyles} src={movie.image} alt="url" />
      <CardContent className={classes.cards}>
        <div>
          <Link to={`/episodes/${movie.episodeId}`}>{movie.title}</Link>
        </div>
        <Typography
          className={classes.title}
          color={classes.cards.color}
          gutterBottom
        >
          {movie.openingCrawl}
        </Typography>
      </CardContent>
    </Card>
  );
}
