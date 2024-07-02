import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image, ImageHoverEffect } from './imageeffects';
import { Container, Typography } from '@mui/material';

export default function Positions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box className="parent">
        <Box className="child child-1 reddit-mono-200">
          <Typography variant="h1">Valentina</Typography>
        </Box>

        <Box className="child child-2 reddit-mono-200">
          <Typography variant="h1">Benedikter</Typography>
        </Box>
      </Box>
      <Box
        className="menu"
        sx={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'left',
          justifyContent: 'space-between',
          cursor: 'pointer',
          zIndex: 1,
          px: 4,
          backgroundColor: 'white',
        }}
      >
        <Link to="about" smooth={true} duration={1000}>
          <Typography variant={isSmallScreen ? 'h4' : 'h2'}>About</Typography>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <Typography variant={isSmallScreen ? 'h4' : 'h2'}>
            Projects
          </Typography>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <Typography variant={isSmallScreen ? 'h4' : 'h2'}>Contact</Typography>
        </Link>
      </Box>
    </>
  );
}
