import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const ImageHoverEffect = ({ images, alt, overlayText }) => {
  const [hovered, setHovered] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [currentImages, setCurrentImages] = React.useState([]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleOpen = () => {
    setCurrentImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'block',
          width: 'auto',
          height: '60vh',
          overflow: 'hidden',
          filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'filter 2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpen}
      >
        <img
          src={images[0]}
          alt={alt}
          style={{
            display: 'block',
            width: 'auto',
            height: '100%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 1,
            color: hovered ? 'white' : 'black',
            transition: 'opacity 0.3s ease',
            textTransform: 'uppercase',
            lineHeight: 0.71,
            textAlign: 'right',
            padding: '5px',
            width: '100%',
            fontSize: '4vw',
            wordWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            boxSizing: 'border-box',
          }}
        >
          {overlayText}
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'none',
            // boxShadow: 24,
            outline: 'none',
            display: 'block',
            width: '90vw',
            height: '90vh',
            overflow: 'auto',
            p: 2,
          }}
        >
          {currentImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${alt}-${index}`}
              style={{
                display: 'block',
                width: 'auto',
                height: '100%',
                marginBottom: index < currentImages.length - 1 ? '10px' : '0',
              }}
            />
          ))}
        </Box>
      </Modal>
    </>
  );
};

export { ImageHoverEffect };
