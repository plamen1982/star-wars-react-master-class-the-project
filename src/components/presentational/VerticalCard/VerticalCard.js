import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import { useHistory } from 'react-router-dom';

export default function VerticalCard({ data, navigateTo, children, grid }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = history;
  console.log(history);
  console.log(data);
  debugger;
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card className={`${classes.imageAndTitle} ${classes.cards}`}>
        <CardMedia
          className={classes.imageStyles}
          component="img"
          image={data.image}
          alt="url"
        />
        <CardContent>
          <Typography>
            <Link to={`${navigateTo}/${data.id}`}>{data.title}</Link>
          </Typography>
          <Typography
            className={classes.title}
            color={classes.cards.color}
            gutterBottom
          >
            {data.openingCrawl}
          </Typography>
        </CardContent>
      </Card>

      {/* <CardContent>{children}</CardContent> */}
    </Grid>
  );
}
