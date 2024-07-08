import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Projects from './projects';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../styles/App.css';

export default function ProjectsScrollbar() {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -600,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 600,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box position="relative">
      <Box className="scroll-arrow scroll-arrow-left" onClick={scrollLeft}>
        <ArrowBackIosIcon sx={{ fontSize: 80 }} />
      </Box>
      <Box className="scroll-arrow scroll-arrow-right" onClick={scrollRight}>
        <ArrowForwardIosIcon sx={{ fontSize: 80 }} />
      </Box>
      <Box className="horizontal-scroll" ref={scrollContainerRef}>
        <Box className="subheader">
          <Typography variant="h2" className="header-left">
            Projects
          </Typography>
        </Box>
        <Grid container direction="row" wrap="nowrap">
          <Projects />
        </Grid>
      </Box>
    </Box>
  );
}
