import React from 'react';
import { Grid } from '@material-ui/core';
import HorizontalCard from '../HorizontalCard/HorizantalCard';
import ListData from '../ListData/ListData';

const gridPeople = {
  grid: {
    sm: 12,
    xs: 12,
    md: 4,
  },
  sizeImage: {
    height: 100,
    width: 100,
  },
};
const CharactersList = ({ data }) => {
  debugger;
  return data ? (
    <Grid container spacing={2}>
      <ListData
        data={data}
        component={HorizontalCard}
        flexDirection="row"
        styleProperties={gridPeople}
        navigateTo={true}
      />
    </Grid>
  ) : null;
};

export default CharactersList;
