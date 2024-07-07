import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Element } from 'react-scroll';
import { Image, ImageHoverEffect } from './imageeffects';
import { Typography } from '@mui/material';
import Projects from './projects';
import About from './about';
import Techstack from './techstack';

export default function Layout() {
  const theme = useTheme();

  return (
    <>
      {/* NAME/LOGO: */}
      <Box className="parent">
        <Box className="child child-1">
          <Typography variant="h1">Valentina</Typography>
        </Box>

        <Box className="child child-2 ">
          <Typography variant="h1">Benedikter</Typography>
        </Box>
      </Box>

      {/* PROJECTS: */}
      <Element name="projects">
        <Box className="border-tb responsive-border relative-container">
          <Box className="subheader">
            <Typography variant="h2" className="header-left">
              Projects
            </Typography>
          </Box>
          <Grid container direction="row" wrap="nowrap">
            <Projects />
          </Grid>
        </Box>
      </Element>
      {/* ABOUT: */}

      <Element name="about">
        <Box className=" responsive-border" paddingBottom={10}>
          <Typography variant="h2" className="header-right" marginLeft={5}>
            About
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
      </Element>

      {/* TECHSTACK: */}

      <Element name="techstack">
        <Box className="border-bottom responsive-border" paddingBottom={10}>
          <Techstack />
        </Box>
      </Element>

      {/* CONTACT: */}

      <Element name="contact">
        <Box className="responsive-border" paddingBottom={10}>
          <Typography variant="h2" className="header-left" marginRight={5}>
            Contact
          </Typography>
          <Typography className="text-justify" variant="body1">
            1160 Ottakring, Vienna +43 699 11909066 benediktervalentina@gmx.at
            GitHub: github.com/vlntnaBndktr LinkedIn:
            linkedin.com/in/valentina-benedikter
          </Typography>
        </Box>
      </Element>
      {/* <Typography backgroundColor="black">
        1160 Ottakring, Vienna +43 699 11909066 benediktervalentina@gmx.at
        GitHub: github.com/vlntnaBndktr LinkedIn:
        linkedin.com/in/valentina-benedikter
      </Typography> */}
    </>
  );
}
