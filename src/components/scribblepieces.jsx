import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Firstname from './firstname';
import Lastname from './lastname';
import Techskills from './techskills';

function Header() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Space between für left and right alignment
          alignItems: 'center',
          textTransform: 'uppercase',
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 2,
          lineHeight: 1,
          px: 4,
          border: '1px solid black',
        }}
      >
        <Link to="about" smooth={true} duration={1000}>
          <Box
            style={{
              textAlign: 'left',
              fontSize: '60px',
              cursor: 'pointer',
              width: '20vh',
              border: '1px solid black',
            }}
          >
            About Projects Contact
          </Box>{' '}
        </Link>
        <span
          id="firstName"
          style={{
            textAlign: 'right',
            fontSize: '200px',
            position: 'fixed',
            top: 0,
            right: 0,
          }}
        >
          Valentina
        </span>
        <span
          id="lastName"
          style={{
            border: '1px solid black',
            textAlign: 'right',
            fontSize: '200px',
            position: 'fixed',
            top: 0,
            right: 0,
          }}
        >
          Benedikter
        </span>
      </Box>
    </>
  );
}
