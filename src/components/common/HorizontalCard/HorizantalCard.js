import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts';
import { useHistory } from 'react-router-dom';

export default function HorizontalCard({
  data,
  navigateTo,
  styleProperties,
  children,
}) {
  const {
    currentTheme: {
      colors: { cards, defaultColors, links },
    },
  } = useContext(ThemeContext);
  const history = useHistory();
  const styleWithTheme = { cards, defaultColors, links };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
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
          marginBottom: styleProperties.marginBottom,
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
            <Box className={classes.cards}>
              {data.title ? (
                <Box
                  m={2}
                  fontSize={25}
                  fontFamily="Roboto"
                  fontWeight="bold"
                  display="flex"
                  justifyContent="center"
                >
                  <Typography className={classes.links} alignCenter>
                    {data.title}
                  </Typography>
                </Box>
              ) : (
                <Typography>
                  <Box
                    m={2}
                    fontSize={25}
                    fontFamily="Roboto"
                    fontWeight="bold"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {navigateTo ? (
                    <Link
                      className={classes.links}
                      href="/"
                      style={{ textDecoration: 'none' }}
                      onClick={e => {
                        e.preventDefault();
                        history.push(`/${navigateTo}/${data.id}`);
                      }}
                    >
                      {data.name}
                      </Link>): data.name } 
                  </Box>
                </Typography>
              )}
            </Box>
        </CardContent>
      </Card>
      {children}
    </Grid>
  );
}
