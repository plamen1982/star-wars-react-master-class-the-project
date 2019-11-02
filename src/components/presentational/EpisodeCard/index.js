import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { styles } from './styles';
import { ThemeContext } from '../../../contexts';
import VerticalCard from '../VerticalCard/VerticalCard';
import HorizontalCard from '../HorizontalCard/HorizantalCard';
import ListData from '../ListData';
export default function EpisodeCard({ data, grid, direction, children }) {
  const {
    currentTheme: {
      colors: { cards, defaultColors },
    },
  } = useContext(ThemeContext);
  const styleWithTheme = { cards, defaultColors };
  const useStyles = makeStyles(styleWithTheme);
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;
  const gridSettingsEpisode = {
    grid: 3,
    spacing: 12,
  };
  const gridSettingsPeopleList = {
    spacing: 3,
    columns: 4,
  };
  return data ? (
    <>
      {direction === 'horizontal' ? (
        <HorizontalCard data={data} grid={gridSettingsEpisode}>
          {/* ADD data atribute with current people for this episode episode styles={}*/}
          <ListData
            data={data.people.edges}
            component={HorizontalCard}
            grid={gridSettingsPeopleList}
          />
        </HorizontalCard>
      ) : (
        <VerticalCard
          data={data}
          navigateTo={'episodes'}
          grid={gridSettingsPeopleList}
        />
      )}
    </>
  ) : null;
}
