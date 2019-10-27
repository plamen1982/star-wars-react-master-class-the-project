import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EpisodeCard from '../presentational/EpisodeCard';
import ListData from '../presentational/ListData';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EPISODES } from '../../queries';
import { useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStylesLoader = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function EpisodesList() {
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
  const classesLoader = useStylesLoader();

  const direction = 'vertical';
  const history = useHistory();

  const { data, loading } = useQuery(GET_ALL_EPISODES, {
    onError: props => {
      debugger;
      localStorage.set('token', '');
      history.push('/login');
    },
    onCompleted: props => {
      if (!props.allEpisodes.edges) {
        localStorage.set('token', '');
        history.push('/login');
      }
    },
  });
  if (loading) {
    return <LinearProgress className={classesLoader.progress} />;
  }

  return (
    <div className={classes.root}>
      <ListData
        component={EpisodeCard}
        direction={direction}
        data={data.allEpisodes.edges}
      />
    </div>
  );
}
