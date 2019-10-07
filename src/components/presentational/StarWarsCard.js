import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: '30%',
    margin: '1%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StarWarsCard({ data, styles = {} }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={data.title} />
      <img src={data.imageUrl} alt="url" />
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
