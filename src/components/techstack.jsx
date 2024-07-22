import * as React from 'react';
import Box from '@mui/material/Box';

const TechIcon = ({ src, alt }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 'auto',
        height: 'clamp(2rem, 5vw, 6rem)',
      }}
    >
      <img
        className="tech-icon"
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: 'auto',
          height: '100%',
          // filter: 'grayscale(100%)',
        }}
      />
    </Box>
  );
};

const icons = [
  { src: 'icons/JS.png', alt: 'JS' },
  { src: 'icons/HTML.png', alt: 'HTML' },
  { src: 'icons/CSS.png', alt: 'CSS' },
  { src: 'icons/MERN-logo.png', alt: 'MERN' },
  { src: 'icons/TS.png', alt: 'TS' },
  { src: 'icons/REST.png', alt: 'REST' },
  { src: 'icons/JWT.png', alt: 'JWT' },
  { src: 'icons/mongoose.png', alt: 'mongoose' },
  { src: 'icons/Zustand.png', alt: 'Zustand' },
  { src: 'icons/websocket.png', alt: 'websocket' },
  { src: 'icons/Socket.IO.png', alt: 'Socket.IO' },
  { src: 'icons/Git.png', alt: 'Git' },
  { src: 'icons/GitHub.png', alt: 'GitHub' },
  { src: 'icons/GitLab.png', alt: 'GitLab' },
  { src: 'icons/VSCode.png', alt: 'VSCode' },
  { src: 'icons/MUI.png', alt: 'MUI' },
  { src: 'icons/Bootstrap.png', alt: 'Bootstrap' },
  { src: 'icons/Figma.png', alt: 'Figma' },
  { src: 'icons/Canva.png', alt: 'Canva' },
];

const Techstack = () => (
  <div className="marquee">
    <div className="marquee-content">
      {icons.concat(icons).map((icon, index) => (
        <TechIcon key={index} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  </div>
);

export default Techstack;
