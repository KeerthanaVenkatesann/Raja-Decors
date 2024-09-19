import React from 'react';
import { Box, Typography, Grid, Container, Link, Divider } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'; 
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        mt:190,
        // 'auto',
        pt:10,
        pb:5
      }}
    >
      <Container>
        <Grid container justifyContent="center" textAlign={{ xs: 'start'}}  spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" mb={2}>Why us</Typography>
            <Link href="#" color="inherit" underline="none">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Press
            </Link>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" mb={2}>Quick Links</Typography>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Services
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              About US
            </Link>
            <br/>
            <Link href="#" color="inherit" underline="none">
              Conatct US
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" mb={2}>Reach us</Typography>
            <Link href="#" color="inherit" underline="none">
             <LocationOnOutlinedIcon />
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
             <LocalPhoneOutlinedIcon/>
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
             <MailOutlineOutlinedIcon/>
            </Link>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" mb={2}>Follow Us on:</Typography>
            <Link href="#" color="inherit" underline="none">
              <TiSocialFacebook/>
            </Link> 
            <Link href="#" color="inherit" underline="none">
               <FaXTwitter/>
            </Link> 
            <Link href="#" color="inherit" underline="none">
               <FaLinkedinIn/>
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{bgcolor:'white',mt:12}}></Divider>
        <Box mt={5} textAlign="center">
          <Typography variant="body2">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

;
