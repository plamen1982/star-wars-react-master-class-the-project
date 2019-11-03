import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CardHeader,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import { useLocation } from 'react-router-dom';

export default function HorizontalCard({
  data,
  navigateTo,
  styles,
  styleProperties,
  children,
}) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;
  debugger;
  return (
    <Grid
      item
      md={styleProperties.grid.md}
      sm={styleProperties.grid.sm}
      xs={styleProperties.grid.xs}
    >
      <Card
        className={`${classes.cards} ${classes.openingDescription}`}
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: styleProperties.sizeImage.height,
        }}
      >
        <div>
          <CardMedia
            className={classes.cards}
            component="img"
            image={data.image}
            alt="url"
            style={{
              width: styleProperties.sizeImage.width,
              height: styleProperties.sizeImage.height,
            }}
          />
        </div>

        <CardContent>
          {navigateTo ? (
            <Typography className={classes.cards}>
              <Link to={pathname}>
                {data.title ? (
                  <Typography>
                    <Box
                      m={2}
                      fontSize={25}
                      fontFamily="Roboto"
                      fontWeight="bold"
                    >
                      {data.title}
                    </Box>
                  </Typography>
                ) : (
                  <Typography>
                    <Box
                      m={2}
                      fontSize={25}
                      fontFamily="Roboto"
                      fontWeight="bold"
                    >
                      {data.name}
                    </Box>
                  </Typography>
                )}
              </Link>
            </Typography>
          ) : (
            <Typography className={classes.cards}>
              {data.title ? (
                <Typography>
                  <Box
                    m={2}
                    fontSize={25}
                    fontFamily="Roboto"
                    fontWeight="bold"
                  >
                    {data.title}
                  </Box>
                </Typography>
              ) : (
                <Typography>
                  <Box
                    m={2}
                    fontSize={25}
                    fontFamily="Roboto"
                    fontWeight="bold"
                  >
                    {data.name}
                  </Box>
                </Typography>
              )}
            </Typography>
          )}
        </CardContent>
      </Card>
      {children}
    </Grid>
  );
}
