import React from 'react'
import { Box, Typography } from '@mui/material';
import backgroundImage from '../assets/download.jpg';
import backgroundVideo from "../assets/backgroundVideo.mp4";

const HomeHeader = () => {
  return (
    <Box
      id="section1"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, sm: 6, md: 12 },
        mx: { xs: 2, sm: 4, md: 8 },
        color: 'white',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        <source src={backgroundVideo} type="video/x-m4v" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(46,125,50,0.5), rgba(46,125,50,0.5))',
          zIndex: 1,
        }}
      /> */}

      {/* Text content */}
      <Box
  sx={{
    position: 'relative',
    zIndex: 2,
    textAlign: 'left',
    textShadow: '0px 2px 6px rgba(0,0,0,0.7)',
  }}
>
        <Typography variant="h2">
          Welcome to Guandong Beierli Industrial Co., Ltd
        </Typography>
        <Typography variant="h5" mt={2}>
          Discover our commitment to sustainability through innovative paper production processes.
          Join us in making a positive impact on the environment.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeHeader
