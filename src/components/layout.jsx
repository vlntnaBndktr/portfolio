import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Element } from 'react-scroll';
import { ImageHoverEffect } from './imageeffects';
import { Typography } from '@mui/material';
import Projects from './projects';
import ProjectsScrollbar from './projectsScrollbar';
import About from './about';
import Techstack from './techstack';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

        <Box>
          <Typography variant="h4" className="child child-3">
            Full Stack Web Developer
          </Typography>
        </Box>
      </Box>

      {/* PROJECTS: */}
      <Element name="projects">
        <ProjectsScrollbar />
      </Element>
      {/* ABOUT: */}

      <Element name="about">
        <Box className=" responsive-border">
          <Typography
            variant="h2"
            className="header-right"
            marginLeft={10}
            marginBottom={4}
          >
            About
          </Typography>
          <Typography padding={10} className="text-justify" variant="body1">
            Hi, I'm Valentina, a Full Stack Web Developer based in Vienna. I'm
            particularly interested in developing intuitive and visually
            appealing user interfaces, where I can combine my creative and
            technical skills, as well as building a solid backend with
            sustainable code. I have a detail- and quality-oriented workstyle in
            everything I do. When I'm not programming, I enjoy working on analog
            projects. I always have at least one craft or art project that I am
            building and tinkering with.
          </Typography>
        </Box>
      </Element>

      {/* TECHSTACK: */}

      <Element name="techstack">
        <Box paddingBottom={10} marginLeft={10} marginRight={10}>
          <Techstack />
        </Box>
      </Element>

      {/* CONTACT: */}

      <Element name="contact">
        <Box
          className="responsive-border"
          paddingBottom={5}
          backgroundColor="black"
        >
          <Typography
            variant="h2"
            className="header-left"
            color={'white'}
            marginRight={5}
          >
            Contact
          </Typography>
          <Box color={'white'} textAlign={'right'} padding={10}>
            <Typography variant="h3">
              1160 Ottakring, Vienna <DomainOutlinedIcon fontSize="large" />
            </Typography>
            <Typography variant="h3">
              +43 699 11909066 <CallOutlinedIcon fontSize="large" />
            </Typography>
            <Typography variant="h3">
              benediktervalentina@gmx.at <EmailOutlinedIcon fontSize="large" />
            </Typography>
            <Typography variant="h3">
              <a
                href="https://github.com/vlntnaBndktr"
                style={{ color: 'white' }}
              >
                github.com/vlntnaBndktr
              </a>{' '}
              <GitHubIcon fontSize="large" />
            </Typography>
            <Typography variant="h3">
              <a
                href="https://linkedin.com/in/valentina-benedikter"
                style={{ color: 'white' }}
              >
                linkedin.com/in/valentina-benedikter
              </a>{' '}
              <LinkedInIcon fontSize="large" />
            </Typography>
          </Box>
        </Box>
      </Element>
    </>
  );
}
