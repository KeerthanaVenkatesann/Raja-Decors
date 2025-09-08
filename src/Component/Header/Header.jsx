
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Collapse, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import './Header.css';

export default function Header()  {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/aboutus' },
        { label: 'Service', link: '/service' },
             { label: 'Our Menu', link: '/menu' },
                 { label: 'Packages for', link: '/service' },
                     { label: 'Gallery', link: '/service' },
    { label: 'Contact Us', link: '/contact-us' },
  ];

  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  
  const [scrollPosition, setScrollPosition] = useState(0);

  // Toggle the mobile menu
  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 const appBarStyle = {
  backgroundColor: '#11343c',
  color: 'black',
  px: { md: 10 },
  height: scrollPosition > 50 ? 100 : 225,  // shrink height
  paddingY: 0,
  zIndex: 1000,
  boxShadow: scrollPosition > 50 ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'height 0.4s ease, background-color 0.3s ease, box-shadow 0.3s ease-in-out',
};


  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);  
    } 
  }, [isMobile]); 

  return (
    <AppBar position="fixed" sx={appBarStyle}>
     <Toolbar sx={{ alignItems: 'center', height: '100%' }}>

    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  <Box
    sx={{
      transition: 'all 0.4s ease',
      height: scrollPosition > 120 ? 120 : 350,   // logo height
      width: scrollPosition > 100 ? 150 : 400,  // logo width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Logo />
  </Box>
</Typography>


        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={handleMobileToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Menu for Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Box>
                <Button 
                  sx={{
                    textTransform: 'none',
                    fontSize: 18,
                    marginX: 2,
                    textDecoration: 'none',
                    color: scrollPosition > 50 ? 'white' : 'white',  
                    transition: 'color 0.3s ease',  
                  }}
                  color="inherit"
                  className='btn-1'
                >
                  <Link to={item.link} className='link-nav-agnee'>
                    {item.label}
                  </Link>
                </Button>  
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
        <Box sx={{ display: { xs: 'grid', md: 'none' }, justifyContent: 'start', backgroundColor: 'white', pt: 2 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                color="inherit" 
                fullWidth
                href={item.link || '#!'}
                sx={{ justifyContent: 'start', pl: { xs: 2, sm: 3 } }}
              >
                <Link to={item.link} className='link-nav-agnee'>{item.label}</Link>
              </Button>
            </React.Fragment>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}
