import React from 'react';
// import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { styles } from './styles';
// import { ThemeContext } from '../../../contexts';
import VerticalCard from '../../../common/VerticalCard/VerticalCard';
import HorizontalCard from '../../../common/HorizontalCard/HorizantalCard';
import ListData from '../../../common/ListData/ListData';
export default function EpisodeCard({ data, grid, direction, children }) {
  // const {
  //   currentTheme: {
  //     colors: { cards, defaultColors },
  //   },
  // } = useContext(ThemeContext);
  // const styleWithTheme = { cards, defaultColors };
  // const useStyles = makeStyles(styleWithTheme);
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
