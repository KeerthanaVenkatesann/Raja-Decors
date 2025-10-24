import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import "./Header.css";

export default function Header() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutus" },
    { label: "Service", link: "/service" },
    { label: "Our Menu", link: "/menu" },
    { label: "Gallery", link: "/carousel" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrollPosition, setScrollPosition] = useState(0);

  // Toggle mobile menu
  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if screen size changes
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const appBarStyle = {
    backgroundColor: "#11343c",
    // boxShadow: scrollPosition > 50 ? "0px 4px 10px rgba(0,0,0,0.2)" : "none",
    transition: "all 0.4s ease",
    px: { md: 6, xs: 2 },
  };

  return (
    <AppBar position="fixed" sx={appBarStyle} className="glitter-header">
      <Toolbar className="glitter-header-outer" sx={{ alignItems: "center", height: "100%" }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              transition: "all 0.4s ease",
              height: scrollPosition > 150 ? 100 : 200,
              width: scrollPosition > 150 ? 160 : 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo />
          </Box>
        </Typography>

        {/* Hamburger */}
        <button
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={handleMobileToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item, index) => (
            <Button key={index} className="btn-1"   sx={{ textTransform: "none" }}>
              <Link to={item.link} className="link-nav-agnee">
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            display: { xs: "grid", md: "none" },
            justifyContent: "start",
            backgroundColor: "#11343c",
            pt: 2,
            pb: 2,
          }}
        >
          {menuItems.map((item, index) => (
            <Button key={index} fullWidth sx={{ justifyContent: "start" , textTransform: "none" }}  >
              <Link to={item.link} className="link-nav-agnee">
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}
