import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Firstname = () => {
  return (
    <Box
      sx={{
        fontSize: {
          xs: 80,
          sm: 100,
          md: 120,
          lg: 190,
        },
        textAlign: 'right',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      VALENTINA BENEDIKTER
    </Box>
  );
};

export default Firstname;
