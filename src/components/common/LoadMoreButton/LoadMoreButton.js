import React from 'react';
import { Box, Button } from '@material-ui/core';

const LoadMoreButton = ({ styles, loadMore }) => {
  return (
    <Box m={2} display="flex" justifyContent="center">
      <Button
        variant="contained"
        styles={{
          width: 100,
          height: 100,
          marginTop: 10,
        }}
        className={styles}
        onClick={loadMore}
      >
        Load More
      </Button>
    </Box>
  );
};

export default LoadMoreButton;
