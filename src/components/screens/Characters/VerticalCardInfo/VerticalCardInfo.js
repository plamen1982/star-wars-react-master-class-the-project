import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
} from '@material-ui/core';
// import { styles } from './styles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../contexts';

export default function VerticalCardInfo({ data: character }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors, links },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, links };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  return (
    <Grid item md={8} sm={12} xs={12}>
      <Box p={3}>
        <Card className={`${classes.defaultColors} ${classes.cards}`} p={3}>
          <Typography>
            <Box
              m={2}
              fontSize={25}
              fontFamily="Roboto"
              fontWeight="bold"
              className={classes.links}
            >
              {character.name}
            </Box>
          </Typography>
          <CardMedia
            className={classes.imageStyles}
            component="img"
            image={character.image}
            alt="url"
          />
          <CardContent>
            <Typography
              className={classes.title}
              color={classes.cards.color}
              gutterBottom
            >
              Height:
              <Box
                p={1}
                component="span"
                fontFamily="Roboto"
                className={classes.links}
              >
                {character.height}
              </Box>
            </Typography>
            <Typography
              className={classes.title}
              color={classes.cards.color}
              gutterBottom
            >
              Weight:
              <Box
                p={1}
                component="span"
                fontFamily="Roboto"
                className={classes.links}
              >
                {character.mass}
              </Box>
            </Typography>
            <Typography
              className={classes.title}
              color={classes.cards.color}
              gutterBottom
            >
              Species:
              <Box
                p={1}
                component="span"
                fontFamily="Roboto"
                className={classes.links}
              >
                {character.species.name}
              </Box>
            </Typography>
            <Typography
              className={classes.title}
              color={classes.cards.color}
              gutterBottom
            >
              Home World:
              <Box
                p={1}
                component="span"
                fontFamily="Roboto"
                className={classes.links}
              >
                {character.homeworld.name}
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
