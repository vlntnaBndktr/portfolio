import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image } from './imageeffects';

const Item = ({ children }) => (
  <Box
    sx={{
      backgroundColor: 'white',
      padding: 1,
      textAlign: 'center',
      border: '2px solid black',
    }}
  >
    {children}
  </Box>
);

export default function StickyHeader() {
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

      <Box sx={{ flexGrow: 1, border: '2px solid red' }}>
        <Grid container spacing={0}>
          {/* Erster Vertikaler Container */}
          <Grid item xs={3} sx={{ border: '2px solid blue' }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Image src="images\moewe.jpg" alt="Moewe"></Image>
              </Grid>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
            </Grid>
          </Grid>
          {/* Zweiter Container */}
          <Grid item xs={3} sx={{ border: '2px solid orange' }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Image src="LogoWienerGenossenschaften.png" alt="Logo"></Image>
              </Grid>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
            </Grid>
          </Grid>
          {/* Dritter Container */}
          <Grid item xs={6} sx={{ border: '2px solid green' }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Image src="images\moewe.jpg" alt="Moewe"></Image>
              </Grid>
              <Grid item xs={12}>
                <Element name="about">
                  <Image src="images\moewe.jpg" alt="Moewe"></Image>
                </Element>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
