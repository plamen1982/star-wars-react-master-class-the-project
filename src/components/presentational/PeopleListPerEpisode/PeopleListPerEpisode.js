import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonCardEpisode from '../PersonCardEpisode/PersonCardEpisode';
import ListData from '../ListData';

export default function PeopleListPerEpisode(props) {
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

  return (
    <div className={classes.root}>
      <ListData component={PersonCardEpisode} data={props.data} />
    </div>
  );
}
