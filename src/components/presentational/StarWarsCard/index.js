import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';

export default function StarWarsCard({ data }) {
  const {
    currentTheme: {
      theme: {
        colors: { cards },
      },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { ...styles, cards };

  debugger;
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const { node: movie } = data;
  return (
    <Card className={classes.container}>
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
