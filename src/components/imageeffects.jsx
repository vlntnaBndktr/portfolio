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
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        filter: hovered ? 'brightness(50%)' : 'grayscale(100%)', // Zeigt das Bild in Schwarz-Weiß an
        transition: 'filter 4s ease', // Übergangseffekt für den Filter
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          transition: 'filter 0.3s ease', // Übergangseffekt für den Filter
        }}
      />
      <Box
        sx={{
          fontSize: 40,
          fontWeight: 400,
          position: 'absolute',
          bottom: 0,
          right: 0,
          // color: 'black',
          padding: '20px',
          zIndex: 1,
          color: hovered ? 'white' : 'black',
          transition: 'opacity 0.3s ease',
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
