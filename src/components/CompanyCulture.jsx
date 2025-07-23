import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ForestIcon from '@mui/icons-material/Forest';

const imageUrls = [
  '/culture1.jpg',
  '/culture2.jpg',
  '/culture3.jpg',
];

const cultureItems = [
  {
    icon: <GroupsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Teamwork',
    description: 'We collaborate across roles to solve challenges and deliver with purpose.',
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Innovation',
    description: 'We encourage creativity, bold thinking, and continuous learning.',
  },
  {
    icon: <ForestIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Sustainability',
    description: 'We believe in responsible manufacturing and eco-conscious choices.',
  },
];

const CompanyCulture = () => {
  return (
    <Box id="culture" sx={{ py: 10, bgcolor: 'white' }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Culture
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We believe in a workplace that prioritizes collaboration, respect, and creativity. Our team thrives in a culture of innovation and sustainability.
      </Typography>

      <Grid container spacing={3}>
        {/* {imageUrls.map((url, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Box
              component="img"
              src={url}
              alt={`Culture ${idx + 1}`}
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                objectFit: 'cover',
              }}
            />
          </Grid>
        ))} */}
        {cultureItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box textAlign="center">
              {item.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, px: 2 }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  )
}

export default CompanyCulture
