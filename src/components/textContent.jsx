import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextContent = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'justify',
      }}
    >
      <Typography
        sx={{
          fontSize: '28px',
          //   fontWeight: 'bold',
          color: 'black',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextContent;
