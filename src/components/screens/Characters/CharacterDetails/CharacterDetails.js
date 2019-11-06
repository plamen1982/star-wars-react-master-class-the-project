import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import VerticalCardInfo from '../VerticalCardInfo/VerticalCardInfo';
import { GET_CHARACTER_BY_ID } from '../../../../queries/characters';
import { ListData } from '../../../common';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
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

  return data ? (
    <Card className={`${classes.defaultColors} ${classes.cards}`} p={3}>
      <CardHeader title={person.name} justify="center" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <VerticalCardInfo data={person}>Children</VerticalCardInfo>
          </Grid>
          <Grid item md={6}>
            <ListData
              data={data.person.starships.edges}
              component={HorizontalCard}
              flexDirection="row"
              styleProperties={gridStarships}
              navigateTo="characters"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) : null;
};
export default CharacterDetails;
