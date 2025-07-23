import { Box, Grid, Typography,Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contacts = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: 'background.main',
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <EmailIcon />
              <Box>
                <Typography variant="subtitle1">Email</Typography>
                <Typography variant="body2">bel.zaynez@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <PhoneIcon />
              <Box>
                <Typography variant="subtitle1">Phone</Typography>
                <Typography variant="body2">+86 - 19075988543</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <LocationOnIcon />
              <Box>
                <Typography variant="subtitle1">Address</Typography>
                <Typography variant="body2">Yuhu Xiaojinshan Industrial Park, Jiedong, Jieyang, Guangdong, China</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contacts
