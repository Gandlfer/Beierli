import React from 'react'
import { Box, Typography, Container } from '@mui/material';
const CompanyProfile = ({ id, title, content, dark }) => {
  return (
    <Box id="services" sx={{ py: 10, bgcolor: '#f4fdf4' }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ }}>
        We partner with sustainable brands to manufacture high-quality fashion and lifestyle products. From design to delivery, we offer eco-conscious production with transparency and care.
      </Typography>
    </Container>
  </Box>
  )
}

export default CompanyProfile
