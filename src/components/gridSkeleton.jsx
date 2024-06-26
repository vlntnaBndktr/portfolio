import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Image } from './imageeffects';

const Item = ({ children }) => (
  <Box
    sx={{
      // backgroundColor: 'white',
      padding: 1,
      textAlign: 'center',
      border: '2px solid black',
    }}
  >
    {children}
  </Box>
);

export default function GridSkeleton() {
  return (
    <>
      <Box sx={{ flexGrow: 1, border: '2px solid yellow' }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sx={{
              border: '6px solid blue',
              textTransform: 'uppercase',
              fontSize: 120,
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            <Item sx={{ height: 200 }}>Valentina</Item>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              border: '6px solid blue',
              textTransform: 'uppercase',
              fontSize: 120,
              position: 'sticky',
              top: 0,
              zIndex: 2,
              height: 200,
            }}
          >
            <Item sx={{ height: 200 }}>Benedikter</Item>
          </Grid>
        </Grid>
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
                <Item>xs=12</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ border: '2px solid blue' }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
            </Grid>
          </Grid>
          {/* Zweiter Container */}
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
                <Item></Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
