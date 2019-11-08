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
import { ThemeContext } from '../../../contexts';

export default function VerticalCardInfo({ data, rowsToRender }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors, links },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, links };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  return (
    <Grid item md={6} sm={12} xs={12}>
      <Box p={1}>
        <Card className={`${classes.defaultColors} ${classes.cards}`} p={3}>
          <Typography>
            <Box
              m={2}
              fontSize={25}
              fontFamily="Roboto"
              fontWeight="bold"
              className={classes.links}
            >
              {data.name}
            </Box>
          </Typography>
          <CardMedia
            className={classes.imageStyles}
            component="img"
            image={data.image}
            alt="url"
          />
          <CardContent>
            {rowsToRender.map(rowToRender => (
              <Typography
                className={classes.title}
                color={classes.cards.color}
                gutterBottom
              >
                {rowToRender.name}
                <Box
                  p={1}
                  component="span"
                  fontFamily="Roboto"
                  className={classes.links}
                >
                  {rowToRender.value}
                </Box>
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
