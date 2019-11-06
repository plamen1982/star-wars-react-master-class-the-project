import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import VerticalCardInfo from '../VerticalCardInfo/VerticalCardInfo';
import { GET_CHARACTER_BY_ID } from '../../../../queries/characters';
import { ListData } from '../../../common';
import { Grid, Container } from '@material-ui/core';
import { HorizontalCard } from '../../../common';

const CharacterDetails = ({
  match: {
    params: { characterId },
  },
}) => {
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
      md: 4,
    },
    sizeImage: {
      height: 100,
      width: 100,
    },
    marginBottom: 20,
  };
  return data ? (
    <Grid container>
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
  ) : null;
};
export default CharacterDetails;
