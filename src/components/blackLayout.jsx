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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function BlackLayout() {
  const theme = useTheme();

  return (
    <>
      {/* First Frame */}
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>7</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>8</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>9</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>10</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>11</Box>
        </Grid>
        <Grid item xs={1} className="grid-item-last">
          <Box>12</Box>
        </Grid>

        {/* 2.ROW */}
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        {/* NAME/LOGO: */}
        <Grid item xs={6} className="grid-item-last">
          <Box className="parent" color={'whitesmoke'}>
            <Box className="child child-1">
              <Typography variant="h1" color={'whitesmoke'}>
                Valentina
              </Typography>
            </Box>

            <Box className="child child-2" color={'whitesmoke'}>
              <Typography variant="h1">Benedikter</Typography>
            </Box>

            <Box>
              <Typography
                variant="h4"
                className="child child-3"
                color={'whitesmoke'}
              >
                Full Stack Web Developer
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* 3.ROW */}
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>7</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>8</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>9</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>10</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>11</Box>
        </Grid>
        <Grid item xs={1} className="grid-item-last">
          <Box>12</Box>
        </Grid>
      </Grid>

      {/* Second Frame */}
      {/* 1.ROW */}
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={1} className="grid-item">
          <Box>
            {' '}
            <Typography variant="h2" className="vertical" color={'whitesmoke'}>
              {' '}
              ABOUT
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={6} className="grid-item">
          {/* About Content */}
          <Box>
            <Typography padding={10} className="text-justify" variant="body1">
              Hi, I'm Valentina, a Full Stack Web Developer based in Vienna. I'm
              particularly interested in developing intuitive and visually
              appealing user interfaces, where I can combine my creative and
              technical skills, as well as building a solid backend with
              sustainable code. I have a detail- and quality-oriented workstyle
              in everything I do. When I'm not programming, I enjoy working on
              analog projects. I always have at least one craft or art project
              that I am building and tinkering with.
            </Typography>
          </Box>
        </Grid>

        {/* 2.ROW */}
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>7</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>8</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>9</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>10</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>11</Box>
        </Grid>
        <Grid item xs={1} className="grid-item-last">
          <Box>12</Box>
        </Grid>
      </Grid>

      {/* Third Frame: Projects Section */}
      <Grid container spacing={2} className="grid-container">
        {/* 1.ROW */}
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>7</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>8</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>9</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>10</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>11</Box>
        </Grid>
        <Grid item xs={1} className="grid-item-last">
          <Box>12</Box>
        </Grid>

        {/* 2.ROW */}
        <Grid item xs={12} className="grid-item">
          {/* PROJECTS: */}
          <Element name="projects">
            <ProjectsScrollbar />
          </Element>
        </Grid>
      </Grid>

      {/* Fourth Frame: Contact + Techstack */}
      <Grid container spacing={2} className="grid-container">
        {/* 1.ROW */}
        <Grid item xs={4} className="grid-item">
          <Box>
            <Typography
              variant="h2"
              className="header-left"
              color={'white'}
              marginRight={5}
            >
              Con tact
            </Typography>
          </Box>
        </Grid>
        {/* CONTACT: */}
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={6} className="grid-item">
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
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>12</Box>
        </Grid>

        {/* 2.ROW */}
        <Grid item xs={1} className="grid-item">
          <Box>1</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>2</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>3</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>4</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>5</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>6</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>7</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>8</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>9</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>10</Box>
        </Grid>
        <Grid item xs={1} className="grid-item">
          <Box>11</Box>
        </Grid>
        <Grid item xs={1} className="grid-item-last">
          <Box>12</Box>
        </Grid>
        {/* 3.ROW */}
        <Grid item xs={12} className="grid-item">
          {/* TECHSTACK: */}
          <Element name="techstack">
            <Box>
              <Techstack />
            </Box>
          </Element>
        </Grid>
      </Grid>
    </>
  );
}
