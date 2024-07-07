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
          src="images/moewe.jpg"
          alt="Moewe"
          overlayText="oostende"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/cat.jpg"
          alt="Cat"
          overlayText="peloponnese roadtrip"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/Tisch1.jpg"
          alt="Tisch"
          overlayText="building a table"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/painting1.jpg"
          alt="acrylic paintig on cardboard"
          overlayText="acrylic on cardboard"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/Licht.jpg"
          alt="Licht"
          overlayText="light"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="icons/LogoWienerGenossenschaften.png"
          alt="Wiener Genossenschaft"
          overlayText="find a flat"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/friends.jpg"
          alt="Friends"
          overlayText="friends"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/kraehe.jpg"
          alt="Crow"
          overlayText="ink&brush"
        />
      </Grid>
      <Grid item>
        <ImageHoverEffect
          src="images/Autoreifen.jpg"
          alt="Woman with weel"
          overlayText="2 days alone in kolberg"
        />
      </Grid>
    </>
  );
}
