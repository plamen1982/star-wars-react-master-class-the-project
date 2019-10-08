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
    maxWidth: '25%',
    margin: '1%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StarWarsCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img src={data.imageUrl} alt="url" />
      <div>
        <Link to={`/episodes/${data.id}`}>{data.title}</Link>
      </div>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
