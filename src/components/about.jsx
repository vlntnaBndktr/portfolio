import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Element } from 'react-scroll';
import { Typography } from '@mui/material';
import Techstack from './techstack';

export default function About() {
  const theme = useTheme();

  return (
    <>
      <Element name="about">
        <Box className="border-tb responsive-border relative-container">
          <Box className="subheader-right" color={'black'}>
            <Typography variant="h2">About</Typography>
          </Box>
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

        <Box
          // paddingBottom={4}
          marginTop={4}
        >
          <Techstack />
        </Box>
        <Box margin={2} className="border-tb responsive-border">
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
    </>
  );
}
