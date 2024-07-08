import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { ImageHoverEffect } from './imageeffects';

export default function StickyHeader() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          px: 4,
          border: '2px solid green',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: 160,
            border: '2px solid red',
          }}
        >
          Valentina
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: 160,
            border: '2px solid red',
          }}
        >
          Benedikter
        </Box>
      </Box>
      <Box
        sx={{
          position: 'sticky',
          top: 20,
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'space-between',
          fontSize: 60,
          cursor: 'pointer',
          zIndex: 1,
          px: 4,
          backgroundColor: 'white',
        }}
      >
        <Link to="about" smooth={true} duration={1000}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1, border: '3px solid white' }}>
        <Grid container spacing={0.5}>
          {/* Erster Vertikaler Container */}
          <Grid item xs={3} sx={{}}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={0.5}
            >
              <Grid item xs={12}>
                <Image src="images\moewe.jpg" alt="Moewe"></Image>
              </Grid>
              <Grid item xs={12}>
                <ImageHoverEffect
                  src="images\moewe.jpg"
                  alt="Moewe"
                  overlayText="in bruges"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Zweiter Container */}
          <Grid item xs={3} sx={{}}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Image src="LogoWienerGenossenschaften.png" alt="Logo"></Image>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
          {/* Dritter Container */}
          <Grid item xs={6} sx={{}}>
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
                <Image src="images\moewe.jpg" alt="Moewe"></Image>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Element name="about">
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
          <span
            style={{
              textAlign: 'left',
              fontSize: '80px',
              cursor: 'pointer',
            }}
          >
            Full Stack Web Developer
          </span>
          <span
            style={{
              textAlign: 'right',
              fontSize: '40px',
              cursor: 'pointer',
            }}
          ></span>
        </Box>
      </Element>
      <Element name="contact">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Space between für left and right alignment
            alignItems: 'center',
            textTransform: 'uppercase',
            width: '100%',
            lineHeight: 0.8,
            px: 1,
          }}
        >
          <span
            style={{
              textAlign: 'left',
              fontSize: '40px',
              cursor: 'pointer',
            }}
          ></span>
          <span
            style={{
              textAlign: 'right',
              fontSize: '80px',
              cursor: 'pointer',
            }}
          >
            Contact
          </span>
        </Box>
      </Element>
    </>
  );
}
