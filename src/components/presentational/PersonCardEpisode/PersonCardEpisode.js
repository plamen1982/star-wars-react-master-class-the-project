import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CHARACTERS } from '../../../queries';
import { ThemeContext } from '../../../contexts';

const PersonCardEpisode = ({ data, data: { name, image } }) => {
  const stylesList = {
    root: {
      display: 'flex',
      height: 100,
      width: '%25',
    },
    image: {
      height: 100,
      width: 80,
    },
  };
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, ...stylesList };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  // const { data, error, loading, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
  //   variables: {
  //     numberPeople: 5,
  //   },
  // });
  const { cursor } = data;

  // const loadMore = () => {
  //   fetchMore({
  //     variables: { after: cursor },
  //   });
  // };
  return (
    <CardContent className={classes.root}>
      <Card className={`${classes.imageAndTitle} ${classes.cards}`}>
        <div>
          <img className={classes.image} src={image} alt="url" />
        </div>
      </Card>
      <Card className={`${classes.cards}`}>
        <CardContent>
          <Typography className={classes.title} color={classes.cards.color}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </CardContent>
  );
};

export default PersonCardEpisode;
