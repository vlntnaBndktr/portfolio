import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

const Techskills = () => {
  return (
    <Box
      sx={{
        fontSize: {
          xs: 20,
          sm: 30,
          md: 40,
          lg: 50,
        },
        textAlign: 'center',
      }}
    >
      HTML / CSS JavaScript Node.js React MongoDB REST APIs JSON Web Tokens
      Bcrypt Express.js Leaflet Cheerio Vite State Management (Zustand) Postman
      VSCode Gitlab / GitHub Material UI Bootstrap Figma Canva
    </Box>
  );
};

export default Techskills;
