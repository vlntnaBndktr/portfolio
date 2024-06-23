import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';
import { ImageHoverEffect } from './imageeffects';
import { Image } from './imageeffects';
import TextContent from './textContent';
import Firstname from './firstname';
import Lastname from './lastname';
import Techskills from './techskills';

export default function Skeleton() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className="mainframe" sx={{ flexGrow: 1 }}>
      {/* Obere Box, die sich über die ersten beiden Spalten erstreckt: */}
      <Box
        sx={{
          borderRight: '4px solid black',
          borderLeft: '4px solid black',
          borderBottom: 'none',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ width: '50%', p: 2, borderRight: '4px solid black' }}>
          <TextContent text="HOME ABOUT PROJECTS CONTACT GITHUB" />
        </Box>
      </Box>
      {/**/}
      {/* Drei Spalten: */}
      <Box
        display="flex"
        flexDirection={isMd ? 'column' : 'row'}
        sx={{
          border: '4px solid black',
          // height: '150vh', // Beispielhöhe, hier kannst du die gewünschte Höhe einstellen
          // maxHeight: '1000px', // Maximalhöhe, wenn gewünscht
          overflowY: 'auto',
        }}
      >
        {/* Erste Spalte */}
        <Box
          sx={{
            flexBasis: '25%',
            flexGrow: 0,
            flexShrink: 0,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            order: isMd ? 2 : 0,
            borderRight: isMd ? 'none' : '4px solid black',
            borderBottom: isMd ? '4px solid black' : 'none',
          }}
        >
          <Box
            sx={{
              height: 'auto',
              borderBottom: '4px solid black',
            }}
          >
            <Image
              src="LogoWienerGenossenschaften.png"
              alt="Logo Wiener-Genossenschaften"
              overlayText="Overlay Text"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/kraehe.jpg"
              alt="Krähe"
              overlayText="craw craw"
            />
          </Box>

          <Box>
            <ImageHoverEffect
              src="images/Church2.jpg"
              alt="Church2"
              overlayText="duell"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Kaefer.jpg"
              alt="Kaefer"
              overlayText="verwandlung"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Tisch1.jpg"
              alt="Tisch"
              overlayText="building a table"
            />
          </Box>
        </Box>
        {/* Zweite Spalte */}
        <Box
          sx={{
            flexBasis: '25%',
            flexGrow: 0,
            flexShrink: 0,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            order: isMd ? 1 : 0,
            borderRight: isMd ? 'none' : '4px solid black',
            borderBottom: isMd ? '4px solid black' : 'none',
          }}
        >
          <Box>
            <ImageHoverEffect
              src="images/moewe.jpg"
              alt="Moewe"
              overlayText="seagull"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/painting1.jpg"
              alt="painting1"
              overlayText="acryl"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Zaun.jpg"
              alt="Zaun"
              overlayText="sinking fence"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Weberknecht.jpg"
              alt="Weberknecht"
              overlayText="skinny"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Licht.jpg"
              alt="Licht"
              overlayText="spotlight"
            />
          </Box>
        </Box>

        {/* Dritte Spalte */}
        <Box
          sx={{
            flexBasis: '50%',
            flexGrow: 0,
            flexShrink: 0,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            order: isMd ? 0 : 1,
            padding: 0,
          }}
        >
          <Box
            sx={{
              height: 'auto',
              p: 2,
              lineHeight: 0.69,
              borderBottom: '4px solid black',
              margin: 0,
            }}
          >
            <Firstname />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/cat.jpg"
              alt="cat"
              overlayText="cat"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Autoreifen.jpg"
              alt="Autoreifen"
              overlayText="kick the wheel"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Sun.jpg"
              alt="Sun"
              overlayText="sun"
            />
          </Box>
          <Box>
            <ImageHoverEffect
              src="images/Painting3.jpg"
              alt="painting2"
              overlayText="acryl"
            />
          </Box>
        </Box>
      </Box>
      {/* Unterhalb der Box - Spalte über die gesamte Breite */}
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          p: 2,
          borderBottom: '4px solid black',
          borderLeft: '4px solid black',
          borderRight: '4px solid black',
        }}
      >
        <TextContent
          text={'Bilder- und Fonts für meine Portfolioseite'}
        ></TextContent>
      </Box>
    </Box>
  );
}
