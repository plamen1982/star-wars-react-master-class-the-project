import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '25%',
    margin: '1%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  imageStyles: {
    width: 300,
    height: 300,
  },
});

export default function StarWarsCard({ data }) {
  const classes = useStyles();
  const { node: movie } = data;
  return (
    <Card className={classes.card}>
      <img className={classes.imageStyles} src={movie.image} alt="url" />
      <div>
        <Link to={`/episodes/${movie.episodeId}`}>{movie.title}</Link>
      </div>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
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
