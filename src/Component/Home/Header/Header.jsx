import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, MenuItem, Box, Button, Collapse, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; 
import Logo from '../../../assets/AGNEE CLEANING SERVICES LLC.pdf';

export default function Header( )  {

    const menuItems = [
        { label: 'Home', link: '#home' },
        {
            label: 'Services',
            subMenu: [
                { label: 'Sass', link: '#sass' },
                { label: 'Less', link: '#less' },
                { label: 'Stylus', link: '#stylus' },
            ],
        },
        { label: 'About Us', link: '#about' },  
        { label: 'Contact Us', link: '#contact' },
      ];
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
  const [dropdownState, setDropdownState] = useState({});

  // Toggle the mobile menu
  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dropdowns dynamically by key
  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);  
    }
    setDropdownState({});  
  }, [isMobile]); 
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke',color:'black',px:{md:10} }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt='logo'/>
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
              <Button color="inherit" onClick={item.subMenu ? () => toggleDropdown(index) : undefined} href={item.link || '#!'}>
                {item.label}
              </Button>

              {item.subMenu && (
                <Collapse in={dropdownState[index]} timeout="auto" unmountOnExit>
                  <Box 
                    sx={{ 
                        position: 'absolute', 
                        backgroundColor: 'whitesmoke', 
                        mt: 4,ml:-10, 
                        boxShadow: 3,
                        zIndex:999,
                        borderRadius:1
                    }}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} component="a" href={subItem.link || '#!'}>
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Box>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
        <Box sx={{ display: { xs: 'grid', md: 'none' }, backgroundColor: 'whitesmoke',justifyContent:'start' }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                color="inherit"
                onClick={item.subMenu ? () => toggleDropdown(index) : undefined}
                fullWidth
                href={item.link || '#!'}
                sx={{justifyContent:'start',pl:{xs:2,sm:3}}}
              >
                {item.label}{ item.subMenu && (dropdownState[index] ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>)}
              </Button>

              {item.subMenu && (
                <Collapse in={dropdownState[index]} timeout="auto" unmountOnExit>
                  <Box sx={{ backgroundColor: 'whitesmoke',pl:{xs:0.3,sm:1}}}>
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} component="a" href={subItem.link || '#!'}>
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Box>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
};
