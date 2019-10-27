import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharactersCard from '../presentational/CharactersCard';
import ListData from '../presentational/ListData';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_ALL_CHARACTERS } from '../../queries';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStylesLoader = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(100),
  },
}));

export default function CharactersList() {
  const stylesList = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      paddingTop: 15,
    },
  };
  const currentStyles = { ...stylesList };
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();
  const direction = 'vertical';
  const classesLoader = useStylesLoader();

  const { data, loading, errors } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      first: 10,
    },
  });

  if (loading) {
    return <LinearProgress className={classesLoader.progress} />;
  }
  if (errors) {
    return <div>Error....</div>;
  }

  return (
    <div className={classes.root}>
      <ListData
        component={CharactersCard}
        data={data.allPeople.edges}
        direction={direction}
      />
    </div>
  );
}
