import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';

export default function CharactersCard({ data: character, direction }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { ...styles[direction], cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  return (
    <Card className={`${classes.defaultColors} ${classes.container}`}>
      {direction === 'horizontal' ? (
        <>
          <Card className={`${classes.imageAndTitle} ${classes.cards}`}>
            <div>
              <img
                className={classes.imageStyles}
                src={character.image}
                alt="url"
              />
            </div>
            <div>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </div>
          </Card>
          <Card className={`${classes.cards} ${classes.openingDescription}`}>
            <CardContent>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Height: {character.height}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Mass: {character.mass}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Species: {character.species.name}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                {character.homeworld.name}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <CardContent className={`${classes.imageAndTitle} ${classes.cards}`}>
            <div>
              <img
                className={classes.imageStyles}
                src={character.image}
                alt="url"
              />
            </div>
            <div>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </div>
          </CardContent>
          <Card className={`${classes.cards} ${classes.openingDescription}`}>
            <CardContent>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Height: {character.height}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Mass: {character.mass}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                Species: {character.species.name}
              </Typography>
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                {character.homeworld.name}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </Card>
  );
}
