import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const EpisodeDetailsInfo = ({ data, styles }) => {
  return (
    <Card style={{ marginBottom: 20, marginTop: 20 }}>
      <CardContent className={styles}>
        <Typography>{data}</Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeDetailsInfo;
