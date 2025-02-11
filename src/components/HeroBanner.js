import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize="34px"
      sx={{
        textShadow: '0px 10px 5px  black', // Black text shadow with 8px blur
      }}
    >
      Fit in a Bit
    </Typography>
    <Typography fontFamily="Arial" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Arial" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#2e302f', fontFamily: 'Arial', padding: '14px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '4px', boxShadow: '2px 6px 10px black' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#1f2120" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
