import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image, ImageHoverEffect } from './imageeffects';
import { Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/App.css';

export default function Positions() {
  const theme = useTheme();

  return (
    <>
      <Box className="child child-1 reddit-mono-200">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          porro, quasi odio numquam dignissimos dolor atque corporis, cum quo,
          aperiam quas dicta in repellendus beatae consequuntur velit
          perspiciatis quia illum.
        </Typography>
      </Box>
      {/* MENU: */}

      <Box className="menu border-tb responsive-border">
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
      {/* NAME: */}
      <Box className="parent" marginBottom={4}>
        <Box className="heart">
          <FavoriteIcon color="success" fontSize="large"></FavoriteIcon>
        </Box>
        <Box className="child child-1 reddit-mono-200">
          <Typography variant="h1">Valentina</Typography>
        </Box>

        <Box className="child child-2 reddit-mono-200">
          <Typography variant="h1">Benedikter</Typography>
        </Box>
      </Box>
      <Box className=" border-top responsive-border">
        {' '}
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
          deleniti consequuntur culpa temporibus deserunt necessitatibus nemo
          quo nobis odit tempora, adipisci quis est quas veniam cumque quam fuga
          recusandae!
        </Typography>
      </Box>
      {/* PROJECTS: */}
      <Box className=" responsive-border" margin={2} sx={{}}>
        <Grid container spacing={2}>
          {/* Erster Vertikaler Container */}
          <Grid item xs={4} className="border-right  responsive-border">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\moewe.jpg"
                  alt="Moewe"
                  overlayText="in bruges"
                />
              </Grid>
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\cat.jpg"
                  alt="Cat"
                  overlayText="cat"
                />
              </Grid>
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\Tisch1.jpg"
                  alt="Tisch"
                  overlayText="building a table"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Zweiter Container */}
          <Grid item xs={4} className="border-right  responsive-border">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\Licht.jpg"
                  alt="Licht"
                  overlayText="light"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Dritter Container */}
          <Grid item xs={4} sx={{}}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\friends.jpg"
                  alt="Friends"
                  overlayText="friends"
                />
              </Grid>
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\kraehe.jpg"
                  alt="Craw"
                  overlayText="craw"
                />
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
          >
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            maiores itaque! Odit amet sint omnis, nisi fuga commodi soluta
            veritatis quam delectus beatae? Quasi, recusandae necessitatibus.
          </span>
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
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            maiores itaque! Odit amet sint omnis, nisi fuga commodi soluta
            veritatis quam delectus beatae? Quasi, recusandae necessitatibus.
          </span>
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
