import React from 'react';
import { Grid } from '@material-ui/core';

const ListData = ({ data, grid, direction, component: Component }) => {
  debugger;
  return (
    <Grid container spacing={grid.spacing}>
      {data.map(item => {
        return <Component data={item.node} key={item.node.id} grid={grid} />;
      })}
    </Grid>
  );
};
export default ListData;
