import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Firstname from './firstname';
import Lastname from './lastname';
import Techskills from './techskills';

export default function Skeleton() {
  return (
    <Box className="mainframe" sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item className="grid-item" xs>
          <iframe
            src="https://wiener-genossenschaften.onrender.com/"
            title="Wiener Genossenschaften"
            style={{
              width: '100%',
              height: '800px',
              display: 'block', // Setzt das iframe auf block, um Leerzeichen zu entfernen
              border: 'none', // Entfernt den Rahmen um das iframe
              margin: 0, // Setzt den Außenabstand auf 0
              padding: 0, // Setzt den Innenabstand auf 0
            }}
          />
        </Grid>
        <Grid item className="grid-item" xs>
          <img
            src="images/riesenrad.jpg"
            alt="Riesenrad"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item className="grid-item" xs={12}>
          <Firstname />
        </Grid>
        <Grid item className="grid-item" xs={12}>
          <Lastname />
        </Grid>
        <Grid item className="grid-item" xs>
          ITEM Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur aspernatur et quia libero esse maxime non odit, cumque
          quaerat officia accusantium tenetur natus atque quo! Eligendi ea
          tempora fugit laboriosam veniam, necessitatibus quisquam numquam
          beatae molestiae itaque excepturi dolorem in ratione dolores
          molestias, maiores officiis ipsam suscipit voluptatum culpa quos
          voluptas maxime. Molestias quia voluptatibus similique nulla tempore
          temporibus fugit pariatur sapiente aut iure vero, inventore cupiditate
          suscipit pariatur ipsum, sapiente modi voluptas doloribus numquam quo
          libero eum, illo veritatis dolor architecto! Reiciendis consectetur
        </Grid>
        <Grid item className="grid-item" md={4}>
          <Techskills />
        </Grid>
        <Grid item className="grid-item">
          <img
            src="images/dorf.jpg"
            alt="Dorf"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item className="grid-item" xs={4}>
          ITEM
        </Grid>
        <Grid item className="grid-item" xs={4}>
          ITEM
        </Grid>
        <Grid item className="grid-item" xs={4}>
          ITEM
        </Grid>
      </Grid>
    </Box>
  );
}
