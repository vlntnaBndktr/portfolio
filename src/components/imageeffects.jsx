import * as React from 'react';
import Box from '@mui/material/Box';

const ImageHoverEffect = ({ src, alt, overlayText }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'block',
        width: 'auto',
        height: '60vh',
        overflow: 'hidden',
        filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
        transition: 'filter 2s ease', // Übergangseffekt für den Filter
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: 'auto',
          height: '100%',
        }}
      />
      <Box
        sx={{
          fontSize: '5vw',
          fontWeight: 300,
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          color: hovered ? 'white' : 'black',
          transition: 'opacity 0.3s ease',
          textTransform: 'uppercase',
          lineHeight: 0.71,
        }}
      >
        {overlayText}
      </Box>
    </Box>
  );
};

const Image = ({ src, alt }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'block',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        filter: 'grayscale(100%)',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );
};

export { ImageHoverEffect, Image };
