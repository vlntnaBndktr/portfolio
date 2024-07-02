import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image, ImageHoverEffect } from './imageeffects';
import { Container, Typography } from '@mui/material';
import '../styles/App.css';

export default function Positions() {
  const theme = useTheme();

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
      <Box className="menu  responsive-border">
        <Link to="about" smooth={true} duration={1000}>
          <Typography variant="h2">About</Typography>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <Typography variant="h2">Projects</Typography>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <Typography variant="h2">Contact</Typography>
        </Link>
      </Box>
      {/* PROJECTS: */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {/* Erster Vertikaler Container */}
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
              className="border responsive-border"
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
    </>
  );
}
