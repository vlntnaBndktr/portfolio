import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image } from './imageeffects';

export default function Header() {
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

          lineHeight: 0.8,
          px: 1,
        }}
      >
        <Link to="about" smooth={true} duration={1000}>
          <span
            style={{
              textAlign: 'left',
              fontSize: '80px',
              cursor: 'pointer',
            }}
          >
            About Projects Contact
          </span>{' '}
        </Link>
        <span
          style={{
            textAlign: 'right',
            fontSize: '160px',
          }}
        >
          Valentina
        </span>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textTransform: 'uppercase',
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 1,
          lineHeight: 0.8,
          px: 1,
          backgroundColor: 'white',
        }}
      >
        <span
          style={{
            textAlign: 'left',
            fontSize: '80px',
          }}
        ></span>
        <span
          style={{
            textAlign: 'right',
            fontSize: '160px',
          }}
        >
          Benedikter
        </span>
      </Box>
    </>
  );
}
