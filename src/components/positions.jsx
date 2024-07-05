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
import Techstack from './techstack';

export default function Positions() {
  const theme = useTheme();

  return (
    <>
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
      {/* NAME/LOGO: */}
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
      {/* ABOUT: */}
      <Element name="about">
        <Box margin={2}>
          <Typography variant="h3" className="header-left" marginRight={5}>
            Full Stack Web Developer
          </Typography>
          <Typography className="text-justify" variant="body1">
            I am a Web Developer based in Vienna. I am particularly interested
            in the development of intuitive and appealing user interfaces, where
            I can combine design and technical skills, as well as the creation
            of a solid backend with code that lasts. I have a detail- and
            quality-oriented workstyle in everything i do. When I'm not
            programming, I love to continue construction in the analog world. I
            always have at least one craft or arts project that I am building
            and tinkering with.
          </Typography>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Techstack />
        </Box>
        <Box margin={2}>
          <Typography variant="h3" className="header-right" marginLeft={5}>
            Techstack
          </Typography>
          <Typography className="text-justify" variant="body1">
            JavaScript HTML CSS MongoDB Express.js React Node.js MVC Mongoose
            RESTful-web-services CRUD APIs JSON-Web-Tokens Bcrypt WebSockets
            Leaflet Cheerio Vite State-Management(Zustand) Build Tools(Vite)
            Postman VSCode Gitlab/GitHub Material-UI Bootstrap Figma Canva Agile
            UX/UI-Design Agile-Methods/SCRUM
          </Typography>
        </Box>
      </Element>
      {/* PROJECTS: */}
      <Element name="projects">
        <Box className="border responsive-border">
          <Grid container columns={{ xs: 4, md: 12 }}>
            {/* Erster Vertikaler Container */}
            <Grid item xs={4}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
              >
                {/* <Grid item xs={12}>
                <Typography variant="h3">PROJECTS</Typography>
              </Grid> */}
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\moewe.jpg"
                    alt="Moewe"
                    overlayText="oostende"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\cat.jpg"
                    alt="Cat"
                    overlayText="peloponnese roadtrip"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\Tisch1.jpg"
                    alt="Tisch"
                    overlayText="building a table"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\painting1.jpg"
                    alt="acrylic paintig on cardboard"
                    overlayText="acrylic on cardboard"
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* Zweiter Container */}
            <Grid item xs={4}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
              >
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\Licht.jpg"
                    alt="Licht"
                    overlayText="light"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="icons\LogoWienerGenossenschaften.png"
                    alt="Wiener Genossenschaft"
                    overlayText="find a flat"
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
              >
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\friends.jpg"
                    alt="Friends"
                    overlayText="friends"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <Typography
                  padding={2}
                  className="border responsive-border text-justify-uppercase"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta autem animi impedit perferendis iusto cumque, obcaecati
                  repellendus sapiente aliquid illo.
                </Typography>
              </Grid> */}
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\kraehe.jpg"
                    alt="Crow"
                    overlayText="ink&brush"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageHoverEffect
                    src="images\Autoreifen.jpg"
                    alt="Woman with weel"
                    overlayText="2 days alone in kolberg"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Element>
      {/* CONTACT: */}
      <Element name="contact">
        <Box margin={2}>
          <Typography variant="h3" className="header-right" marginLeft={5}>
            Contact
          </Typography>
          <Typography className="text-justify" variant="body1">
            1160 Ottakring, Vienna +43 699 11909066 benediktervalentina@gmx.at
            GitHub: github.com/vlntnaBndktr LinkedIn:
            linkedin.com/in/valentina-benedikter
          </Typography>
        </Box>
      </Element>
    </>
  );
}
