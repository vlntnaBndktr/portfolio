import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ImageHoverEffect } from './imageeffects';

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <Grid item>
        <ImageHoverEffect
          images={[
            'icons/LogoWienerGenossenschaften.png',
            'icons/LogoWienerGenossenschaften.png',
            'icons/LogoWienerGenossenschaften.png',
          ]}
          alt="Wiener Genossenschaft"
          overlayText="find a flat"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          images={[
            'images/pin-head.jpg',
            'images/pin-construction.jpg',
            'images/pin-cafe.jpg',
          ]}
          alt="Cans in the City"
          overlayText="Pinhole Photography"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          images={[
            'images/Tisch1.jpg',
            'images/Tisch2.jpg',
            'images/Tisch3.jpg',
          ]}
          alt="Tisch"
          overlayText="building a table"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          images={['images/moewe.jpg', 'images/Church2.jpg', 'images/time.jpg']}
          alt="Moewe"
          overlayText="oostende"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          images={[
            'images/painting1.jpg',
            'images/kraehe.jpg',
            'images/Tisch3.jpg',
          ]}
          alt="acrylic paintig on cardboard"
          overlayText="acrylic on cardboard"
        />
      </Grid>

      {/* <Grid item>
        <ImageHoverEffect
          src="images/cat.jpg"
          alt="Cat"
          overlayText="peloponnese roadtrip"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/Licht.jpg"
          alt="Licht"
          overlayText="light"
        />
      </Grid> */}
      {/* <Grid item>
        <ImageHoverEffect
          src="images/friends.jpg"
          alt="Friends"
          overlayText="friends"
        />
      </Grid> */}
      <Grid item>
        <ImageHoverEffect
          images={[
            'images/Autoreifen.jpg',
            'images/cat.jpg',
            'images/roots.jpg',
          ]}
          alt="Woman with weel"
          overlayText="2 days alone in kolberg"
        />
      </Grid>
    </>
  );
}
