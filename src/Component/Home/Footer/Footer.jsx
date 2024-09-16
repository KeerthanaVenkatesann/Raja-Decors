import React from 'react';
import { Box, Typography, Grid, Container, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container justifyContent="center" textAlign={{ xs: 'center'}}  spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Company</Typography>
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
            <Typography variant="h6">Support</Typography>
            <Link href="#" color="inherit" underline="none">
              Help Center
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Contact Us
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              FAQs
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Legal</Typography>
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Terms of Service
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Cookie Policy
            </Link>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Link href="#" color="inherit" underline="none">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Instagram
            </Link>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

;
