import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { VerticalCardInfo } from '../../../common';
import { GET_STARSHIP_BY_ID } from '../../../../queries';
import { ThemeContext } from '../../../../contexts';

const StarshipDetails = props => {
  const {
    currentTheme: {
      colors: { cards, defaultColors, links },
    },
  } = useContext(ThemeContext);
  const { starshipId } = useParams();
  const styleWithTheme = { cards, defaultColors, links };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();

  const { data, loading, errors } = useQuery(GET_STARSHIP_BY_ID, {
    variables: {
      id: starshipId,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error...</div>;
  }

  return (
    <h1>
      <Card className={`${classes.defaultColors} ${classes.cards}`} p={3}>
        <CardHeader
          title={data.starship.name}
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
                data={data.starship}
                rowsToRender={[
                  { name: 'Class', value: data.starship.starshipClass },
                  { name: 'Cost', value: data.starship.cost },
                  { name: 'Crew', value: data.starship.crew },
                  {
                    name: 'Max Atmospheric Speed',
                    value: data.starship.maxAtmosphericSpeed,
                  },
                  {
                    name: 'Hyperdrive Rating',
                    value: data.starship.maxMLPerHour,
                  },
                ]}
              ></VerticalCardInfo>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </h1>
  );
};
export default StarshipDetails;
