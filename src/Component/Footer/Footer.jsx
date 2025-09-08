import React from 'react';
import { Box, Typography, Grid, Container, Link, Divider } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'; 
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return ( 
    <Container 
      maxWidth="xl"
      sx={{
        backgroundColor: '#11343c',
        color: '#fff',  
        pt: 10,
        pb: 5,
        mt: 5,
      }}
    >
      <Grid 
        container 
        justifyContent="center" 
        spacing={6}
      >
        {/* Column 1 - About */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography 
            variant="h5" 
            mb={3} 
            fontWeight="bold"
            sx={{ fontFamily: '"Merienda", cursive' }} 
          >
            Raja Decors
          </Typography>
          <Typography sx={{ color:'#e8d671', lineHeight:1.8 }}>
            We specialize in Floral elegance, dream weddings, birthday bliss, balloon wonders, and stage perfection.  
            With creativity and passion, we transform your celebrations into unforgettable memories.  
          </Typography>
        </Grid>

        {/* Column 2 - Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            mb={3} 
            fontWeight="bold"
            sx={{ fontFamily: '"Merienda", cursive' }}
          >
            Quick Links
          </Typography>
          <Box sx={{ display: 'grid', rowGap: 2, color:'#e8d671' }}>
            <Link href="/" color="inherit" underline="none">Home</Link>
            <Link href="/service" color="inherit" underline="none">Services</Link>
            <Link href="/aboutus" color="inherit" underline="none">About Us</Link>
            <Link href="/contact-us" color="inherit" underline="none">Contact</Link>
          </Box>
        </Grid>

        {/* Column 3 - Reach Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography 
            variant="h6" 
            mb={3} 
            fontWeight="bold"
            sx={{ fontFamily: '"Merienda", cursive' }}
          >
            Reach Us
          </Typography>
          <Box display="grid" rowGap={2} sx={{ color:'#e8d671' }}>
            <Box display="flex" alignItems="center" gap={2}>
              <LocationOnOutlinedIcon />
              <span>Chennai, Tamil Nadu, India</span>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <LocalPhoneOutlinedIcon /> 
              <span>+91 99402 29923</span>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <MailOutlineOutlinedIcon />
              <span>rajadecors@gmail.com</span>
            </Box>
          </Box>
        </Grid>

        {/* Column 4 - Follow Us */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            mb={3} 
            fontWeight="bold"
            sx={{ fontFamily: '"Merienda", cursive' }}
          >
            Follow Us
          </Typography>
          <Box display="flex" gap={3} color="#e8d671">
            <Link href="https://wa.me/919940229923" target="_blank" color="inherit">
              <FaWhatsappSquare size={28} />
            </Link>
            <Link href="https://instagram.com/" target="_blank" color="inherit">
              <FaInstagram size={28} />
            </Link>
            <Link href="https://facebook.com/" target="_blank" color="inherit">
              <FaFacebook size={28} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor:'gray', my:5 }} />

      {/* Bottom Copyright */}
      <Box textAlign="center">
        <Typography variant="body2" sx={{ color:'#aaa' }}>
          © {new Date().getFullYear()} Raja Decors. All Rights Reserved.
        </Typography>
      </Box>
    </Container> 
  );
}
