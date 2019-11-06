import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { VerticalCardInfo } from '../../../common';
import { GET_CHARACTER_BY_ID } from '../../../../queries/characters';
import { ListData } from '../../../common';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { HorizontalCard } from '../../../common';
import { ThemeContext } from '../../../../contexts';

const CharacterDetails = ({
  match: {
    params: { characterId },
  },
}) => {
  const {
    currentTheme: {
      colors: { cards, defaultColors, links },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors, links };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const { data, loading, errors } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id: characterId,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error...</div>;
  }

  const { person } = data;

  const gridStarships = {
    grid: {
      sm: 12,
      xs: 12,
      md: 8,
    },
    sizeImage: {
      height: 100,
      width: 100,
    },
    marginBottom: 20,
  };
  console.log('data', data);
  return data ? (
    <Card className={`${classes.defaultColors} ${classes.cards}`} p={3}>
      <CardHeader
        title={person.name}
        justify="center"
        className={classes.links}
        disableTypography={true}
        style={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 35,
          textAlign: 'center',
          borderBottom: `1px solid black`,
        }}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <VerticalCardInfo
              data={person}
              rowsToRender={[
                { name: 'Height', value: person.height },
                { name: 'Weight', value: person.weight },
                { name: 'Species', value: person.species.name },
                { name: 'Home World', value: person.homeworld.name },
              ]}
            >
              Children
            </VerticalCardInfo>
          </Grid>
          <Grid item md={6}>
            <Typography
              gutterBottom
              variant={'h5'}
              fontFamily="Roboto"
              fontWeight="bold"
              align="center"
            >
              Pilot Starships
            </Typography>
            <ListData
              data={data.person.starships.edges}
              component={HorizontalCard}
              flexDirection="row"
              styleProperties={gridStarships}
              navigateTo="starships"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) : null;
};
export default CharacterDetails;
