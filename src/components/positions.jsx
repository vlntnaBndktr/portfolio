import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link, Element } from 'react-scroll';
import { Image, ImageHoverEffect, TechIcon } from './imageeffects';
import { Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/App.css';

export default function Positions() {
  const theme = useTheme();

  return (
    <>
      {/* <Box className="border-bottom responsive-border">i</Box> */}
      {/* MENU: */}
      <Box className="menu border-bottom  responsive-border">
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
        <Box className="child child-1">
          <Typography variant="h1">Valentina</Typography>
        </Box>

        <Box className="child child-2 ">
          <Typography variant="h1">Benedikter</Typography>
        </Box>
      </Box>

      <Element name="about">
        <Box className="flex-box">
          <span className="flex-header-left">Full Stack Web Developer</span>
          <span className="flex-content-right">
            I am a Web Developer based in Vienna. I am particularly interested
            in the development of intuitive and appealing user interfaces, where
            I can combine design and technical skills, as well as the creation
            of a solid backend with code that lasts. I have a detail- and
            quality-oriented workstyle in everything i do. When I'm not
            programming, I love to continue construction in the analog world. I
            always have at least one craft or arts project that I am building
            and tinkering with.
          </span>
        </Box>
      </Element>
      <Box className="text-justify">
        {' '}
        <Typography variant="h3">
          <span className="flex-header-left">Techstack</span> HTML CSS
          JavaScript Node.js React MongoDB MVC REST CRUD APIs JSON-Web-Tokens
          Bcrypt Express.js WebSockets Leaflet Cheerio Vite
          State-Management(Zustand) Build Tools(Vite) Postman VSCode
          Gitlab/GitHub Material-UI Bootstrap Figma Canva Agile UX/UI-Design
          Agile-Methods/SCRUM
        </Typography>
      </Box>
      <Box className="flex-container-row">
        <TechIcon src="icons\Figma.png" alt="Figma"></TechIcon>
        <TechIcon src="icons\Canva.png" alt="Canva"></TechIcon>
        <TechIcon src="icons\JWT.png" alt="JWT"></TechIcon>
        <TechIcon src="icons\MERN-logo.png" alt="MERN"></TechIcon>
        <TechIcon src="icons\mongoose.png" alt="mongoose"></TechIcon>
        <TechIcon src="icons\Zustand.png" alt="Zustand"></TechIcon>
        <TechIcon src="icons\MUI.png" alt="MUI"></TechIcon>
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
                <Typography variant="h2" className="flex-header-left">
                  PROJECTS
                </Typography>
              </Grid>
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
                  overlayText="black cat"
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
              <Grid item xs={12}>
                <Typography className="border responsive-border text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta autem animi impedit perferendis iusto cumque, obcaecati
                  repellendus sapiente aliquid illo.
                </Typography>
              </Grid>
              <Grid item xs={12} className="border-bottom  responsive-border">
                <ImageHoverEffect
                  src="images\kraehe.jpg"
                  alt="Crow"
                  overlayText="crow"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Element name="contact">
        <Box className="flex-box">
          <span className="flex-content-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            maiores itaque! Odit amet sint omnis, nisi fuga commodi soluta
            veritatis quam delectus beatae? Quasi, recusandae necessitatibus.
          </span>
          <span className="flex-header-right">Contact</span>
        </Box>
      </Element>
    </>
  );
}
