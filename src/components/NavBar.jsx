import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar 
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'rgba(46, 125, 50, 0.8)',
        backdropFilter: 'blur(10px)',
        px: 4,
      }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Title */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          Zayne Zhuo
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/products" color="inherit">Products</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
